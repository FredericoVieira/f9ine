---
description: Run lint/typecheck/tests on demand, with evidence. The Stop hook enforces this automatically too — this is for checking earlier.
argument-hint: "[optional: file/path/feature to focus on]"
---

# Validate

1. **Types + lint** — actual configured commands (check CLAUDE.md/package.json, don't guess generic ones)
2. **Unit tests** — changed files at minimum, full suite for wide-blast-radius changes. Write missing tests rather than skip
3. **Integration/E2E** — only if configured and relevant

Run, read real output, fix, re-run. Don't skip a red layer without saying so.

**Output per layer:** command run, pass/fail with actual output, remaining failures + why if stuck. Manual testing and code review are `/review`'s job, not this.
