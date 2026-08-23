---
description: Fresh-eyes code review via the code-reviewer subagent.
argument-hint: "[optional: PR/branch/path — defaults to diff against main]"
---

# Review

Delegate to `code-reviewer` rather than reviewing inline — the point is a context window that didn't write the code.

1. Scope: $ARGUMENTS or `git diff main...HEAD`
2. Invoke `code-reviewer` (general checklist, not security-focused). Let it read the diff itself
3. Relay findings unfiltered, by severity (Blocking / Should fix / Nit)

Security concerns → `/security-review` instead, not both in one pass.
