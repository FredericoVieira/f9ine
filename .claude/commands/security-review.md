---
description: Security-focused review via code-reviewer subagent. Run before merging anything touching auth/input/data/secrets.
argument-hint: "[optional: PR/branch/path — defaults to diff against main]"
---

# Security Review

1. Scope: $ARGUMENTS or `git diff main...HEAD`
2. Invoke `code-reviewer`, explicitly requesting the security checklist (input validation, auth/authz, secrets, injection, data exposure) instead of the general one
3. Relay findings unfiltered, by severity (Critical/High/Medium/Low)

Don't fix in this command unless asked — report first.
