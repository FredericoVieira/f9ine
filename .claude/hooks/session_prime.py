#!/usr/bin/env python3
"""
SessionStart hook — runs automatically at the start of every session
(and after /clear), injecting the deterministic parts of what /prime
gathers by hand: recent git history, uncommitted state, and what's
available in .claude/context/.

This does NOT replace /prime entirely — it can't write the "what this
codebase does" summary, since that needs actual reasoning, not just file
reads. What it does do is remove the need to remember to type /prime as
a manual first step: by the time you send your first real message, this
context is already loaded. Run /prime by hand later if you want a fresh
synthesized summary, or want to focus it on a specific ticket/feature.

Wire into .claude/settings.json under SessionStart, matcher "startup,clear".
"""
import json
import os
import subprocess
import sys

MAX_LOG_LINES = 15
MAX_STATUS_LINES = 30


def run(cmd):
    try:
        result = subprocess.run(
            cmd, shell=True, capture_output=True, text=True, timeout=10
        )
        return result.stdout.strip()
    except Exception:
        return ""


def main():
    try:
        json.loads(sys.stdin.read() or "{}")
    except json.JSONDecodeError:
        pass  # nothing in the input we need beyond confirming it's SessionStart

    parts = []

    branch = run("git branch --show-current")
    if branch:
        parts.append(f"Current git branch: {branch}")

    log = run(f"git log --oneline -{MAX_LOG_LINES}")
    if log:
        parts.append(f"Recent commits:\n{log}")

    status = run("git status --porcelain")
    if status:
        lines = status.splitlines()[:MAX_STATUS_LINES]
        parts.append(
            "Uncommitted changes present (review before starting new work):\n"
            + "\n".join(lines)
        )

    context_dir = ".claude/context"
    if os.path.isdir(context_dir):
        files = [
            f for f in os.listdir(context_dir)
            if f.endswith(".md") and f != "README.md"
        ]
        if files:
            parts.append(
                "Available on-demand context files (.claude/context/, read "
                "only the ones relevant to the current task): "
                + ", ".join(sorted(files))
            )

    if os.path.exists("CLAUDE.md"):
        with open("CLAUDE.md") as f:
            content = f.read()
        if "[Language, framework, versions, package manager]" in content:
            parts.append(
                "CLAUDE.md is still the unfilled template for this project. "
                "Run /create-rules before relying on it."
            )

    if not parts:
        sys.exit(0)  # nothing useful to add — e.g. not a git repo yet

    context_text = "\n\n".join(parts)

    print(json.dumps({
        "hookSpecificOutput": {
            "hookEventName": "SessionStart",
            "additionalContext": context_text,
        }
    }))
    sys.exit(0)


if __name__ == "__main__":
    main()
