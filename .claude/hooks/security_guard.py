#!/usr/bin/env python3
"""
PreToolUse hook — hard-blocks two categories of risk, regardless of stack:
  1. Reading/editing/writing a real .env file (secrets exposure)
  2. Recursive deletion (rm -rf, rmdir, find -delete, git clean -d)

This is language/framework agnostic by design — it operates on file paths
and shell command text, not on project structure. Works identically on a
Next.js repo, a Python service, or anything else.

Wire into .claude/settings.json under PreToolUse with matcher:
  "Bash|Edit|Write|MultiEdit|Read"
"""
import json
import re
import sys

# Template/example env files are fine — only block the real thing
ENV_ALLOWLIST_SUFFIXES = (".example", ".sample", ".template", ".dist", ".defaults")

RECURSIVE_DELETE_PATTERNS = [
    r"\brm\s+.*-[a-zA-Z]*[rR][a-zA-Z]*[fF]",   # rm -rf, rm -fr, rm -Rf, etc.
    r"\brm\s+.*-[a-zA-Z]*[fF][a-zA-Z]*[rR]",   # rm -fr variants
    r"\brmdir\b",
    r"\bfind\b.*-delete\b",
    r"\bfind\b.*-exec\s+rm\b",
    r"\bgit\s+clean\b.*-[a-zA-Z]*d",           # git clean -d / -fd / -xd
]


def is_real_env_file(path: str) -> bool:
    if not path:
        return False
    base = path.split("/")[-1]
    if not base.startswith(".env"):
        return False
    return not base.endswith(ENV_ALLOWLIST_SUFFIXES)


def deny(reason: str):
    print(json.dumps({
        "hookSpecificOutput": {
            "hookEventName": "PreToolUse",
            "permissionDecision": "deny",
            "permissionDecisionReason": reason,
        }
    }))
    sys.exit(0)  # JSON decision carries the block; no need for exit 2 here


def main():
    try:
        data = json.loads(sys.stdin.read() or "{}")
    except json.JSONDecodeError:
        sys.exit(0)  # fail open — never brick a session on malformed input

    tool_name = data.get("tool_name", "")
    tool_input = data.get("tool_input", {})

    # --- .env access check (Read, Edit, Write, MultiEdit) ---
    if tool_name in ("Read", "Edit", "Write", "MultiEdit"):
        path = tool_input.get("file_path", "") or ""
        if is_real_env_file(path):
            deny(f"Blocked: {path} looks like a real .env file. "
                 f"Use .env.example for scaffolding, not the real file.")

    # --- Bash command checks ---
    if tool_name == "Bash":
        command = tool_input.get("command", "") or ""

        # .env access via shell (cat, grep, sed, etc.)
        if re.search(r"\.env\b", command) and not any(
            s in command for s in ENV_ALLOWLIST_SUFFIXES
        ):
            deny("Blocked: command appears to target a .env file via shell. "
                 "If this is a false positive, run it manually outside Claude.")

        # Recursive deletes
        for pattern in RECURSIVE_DELETE_PATTERNS:
            if re.search(pattern, command):
                deny(f"Blocked: recursive delete pattern detected in: {command}. "
                     f"If this is intentional, run it manually outside Claude.")

    sys.exit(0)  # no decision — normal permission flow applies


if __name__ == "__main__":
    main()
