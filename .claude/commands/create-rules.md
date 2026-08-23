---
description: Generate or update CLAUDE.md. Run once per project (auto-launched by install.sh), or when conventions drift.
---

# Create Rules

1. Inspect stack, package manager, test/lint commands, folder conventions
2. If CLAUDE.md exists, read it and propose a diff — don't overwrite blindly
3. Infer conventions from actual code, not assumptions
4. Write these sections only, skip what doesn't apply:
   - **Stack** — language, framework, versions
   - **Commands** — install/dev/test/lint/build
   - **Conventions** — 3-8 bullets, only things Claude would get wrong by default
   - **Testing standards** — what "done" looks like
   - **Do not** — known anti-patterns for this repo
5. Test: "would Claude make a mistake without this line?" If not, cut it
6. Anything too detailed for CLAUDE.md → `.claude/context/<topic>.md`, referenced by name

Write to `CLAUDE.md` at repo root.
