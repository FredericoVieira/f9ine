---
description: Write a self-sufficient implementation plan. No code changes here — plan mode only.
argument-hint: "[task or path to PRD]"
---

# Plan

Write a plan a fresh context window (no memory of this conversation) could execute correctly alone.

1. Read the PRD if $ARGUMENTS points to one
2. Explore affected files and blast radius. Delegate research to a subagent if it's non-trivial — get a summary back, not raw exploration
3. Draft:

```markdown
# Plan: [task]

## Summary

## Files to change

[path — what and why]

## Steps

[ordered, concrete]

## Validation strategy

[which layer applies: types/lint, unit, integration — be specific about commands]

## Risks

## Out of scope
```

Save to `.agents/plans/[slug].md`. Present for review — don't chain into `/implement` in the same turn; that reset is deliberate.
