---
description: Execute a saved plan. Run in a fresh context — the plan should be self-sufficient.
argument-hint: "[path to plan file]"
---

# Implement

Treat the plan as source of truth. If the codebase contradicts it, stop and flag — don't improvise around it.

1. Read the plan and CLAUDE.md
2. Work through steps in order. Don't touch unrelated code — note it for later instead
3. If the plan is wrong or incomplete, stop and report rather than guess
4. Run the plan's validation strategy when done (or `/validate` if none specified)

**Output:** files changed and why, actual validation output (not "tests pass"), anything skipped/changed from the plan, suggested next command (`/validate`, `/review`, `/security-review` if touching auth/data).
