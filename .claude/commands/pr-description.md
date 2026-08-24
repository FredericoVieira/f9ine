---
description: PR description from the branch diff, optionally linked to a plan.
argument-hint: "[optional: path to plan file]"
---

# PR Description

1. `git diff main...HEAD` and `git log main..HEAD --oneline`
2. If $ARGUMENTS points to a plan, note any deviation from it
3. Draft:

```markdown
## Summary

## Changes

[grouped, not one bullet per file]

## Testing

[what actually ran]

## Notes for reviewers
```

Show it — don't open the PR automatically.
