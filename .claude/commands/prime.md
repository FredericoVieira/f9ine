---
description: Load codebase context. Runs automatically at session start via a hook — use this to re-run manually or focus it on a specific ticket.
argument-hint: "[optional: ticket/feature name]"
---

# Prime

Read-only. No edits.

1. Repo structure (`git ls-files | head -100`), README
2. CLAUDE.md and relevant `.claude/context/` files
3. `git log --oneline -20`, `git status`, `git diff`
4. Dependencies (package.json / requirements.txt / etc.)
5. If $ARGUMENTS given: search for related files and summarize

**Output:** 2-3 sentence summary — what this does, stack/conventions, anything relevant to $ARGUMENTS, any in-progress work. Don't propose a plan — that's `/plan`.
