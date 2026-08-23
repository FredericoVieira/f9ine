#!/usr/bin/env python3
"""
Stop hook — blocks Claude from finishing a turn until validation passes.
This is what makes the PIV loop self-validating: no need to remember to
run /validate, it's enforced.

Stack detection order:
  1. .claude/validate.config.json in the project — if present, ITS commands
     are the only source of truth (use this for anything non-standard).
  2. Auto-detected commands based on marker files found at the repo root.
  3. If nothing is detected, exit clean (fail open) rather than blocking
     a project that has no validate setup yet.

Wire into .claude/settings.json under Stop (no matcher needed — it always
fires on every turn end).
"""
import json
import os
import shutil
import subprocess
import sys

CONFIG_PATH = ".claude/validate.config.json"


def load_override_commands():
    if os.path.exists(CONFIG_PATH):
        try:
            with open(CONFIG_PATH) as f:
                cfg = json.load(f)
            cmds = cfg.get("commands", [])
            if cmds:
                return cmds
        except (json.JSONDecodeError, OSError):
            pass
    return None


def detect_commands():
    """Best-effort auto-detection. Only includes a command if the
    underlying tool/binary is actually resolvable, so this never fails
    because e.g. ruff isn't installed for a repo that doesn't use it."""
    cmds = []

    if os.path.exists("package.json"):
        try:
            with open("package.json") as f:
                pkg = json.load(f)
            scripts = pkg.get("scripts", {})
            pm = "pnpm" if os.path.exists("pnpm-lock.yaml") else (
                 "yarn" if os.path.exists("yarn.lock") else "npm")
            run = f"{pm} run" if pm != "npm" else "npm run"

            if "lint" in scripts:
                cmds.append(f"{run} lint")
            if "typecheck" in scripts:
                cmds.append(f"{run} typecheck")
            elif os.path.exists("tsconfig.json") and shutil.which("npx"):
                cmds.append("npx tsc --noEmit")
            if "test" in scripts:
                cmds.append(f"{run} test -- --run" if pm != "npm" else "npm test -- --run")
        except (json.JSONDecodeError, OSError):
            pass

    if os.path.exists("pyproject.toml") or os.path.exists("requirements.txt"):
        if shutil.which("ruff"):
            cmds.append("ruff check .")
        if shutil.which("mypy") and os.path.exists("pyproject.toml"):
            cmds.append("mypy .")
        if shutil.which("pytest"):
            cmds.append("pytest -q")

    if os.path.exists("Cargo.toml"):
        if shutil.which("cargo"):
            cmds.append("cargo clippy --quiet")
            cmds.append("cargo test --quiet")

    if os.path.exists("go.mod"):
        if shutil.which("go"):
            cmds.append("go vet ./...")
            cmds.append("go test ./...")

    return cmds


def run_commands(cmds):
    failures = []
    for cmd in cmds:
        try:
            result = subprocess.run(
                cmd, shell=True, capture_output=True, text=True, timeout=300
            )
            if result.returncode != 0:
                tail = (result.stdout + result.stderr).strip()[-1500:]
                failures.append(f"`{cmd}` failed:\n{tail}")
        except subprocess.TimeoutExpired:
            failures.append(f"`{cmd}` timed out after 300s")
        except Exception as e:
            failures.append(f"`{cmd}` errored to run: {e}")
    return failures


def has_uncommitted_changes():
    """Skip validation entirely if nothing changed since the last commit —
    otherwise this hook re-runs lint/test after every turn, including
    read-only ones like /prime, /plan, or /review that never touch code."""
    try:
        result = subprocess.run(
            ["git", "status", "--porcelain"],
            capture_output=True, text=True, timeout=10
        )
        return bool(result.stdout.strip())
    except Exception:
        # If git isn't available or this isn't a repo, don't use this as
        # a skip condition — fall through to normal detection instead.
        return True


def main():
    try:
        data = json.loads(sys.stdin.read() or "{}")
    except json.JSONDecodeError:
        data = {}

    # Avoid infinite loop: if this hook already blocked once this turn
    # and we're being asked again, don't re-block indefinitely.
    if data.get("stop_hook_active"):
        sys.exit(0)

    if not has_uncommitted_changes():
        sys.exit(0)  # nothing changed this turn — no reason to validate

    commands = load_override_commands()
    if commands is None:
        commands = detect_commands()

    if not commands:
        sys.exit(0)  # nothing to validate against — fail open

    failures = run_commands(commands)

    if failures:
        reason = (
            "Validation failed — fix before finishing:\n\n"
            + "\n\n".join(failures)
        )
        print(json.dumps({"decision": "block", "reason": reason}))
        sys.exit(0)

    sys.exit(0)


if __name__ == "__main__":
    main()
