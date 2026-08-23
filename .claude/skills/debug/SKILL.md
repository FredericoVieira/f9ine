---
name: debug
description: Systematic root-cause debugging. Auto-invoke whenever investigating a bug, error, or failing test — not just when asked to "debug".
---

# Debug

No editing until a specific hypothesis is stated. No guess-and-check.

1. **Reproduce first.** If you can't, say so and work from actual evidence
2. **Blast radius** — new regression or long-standing? `git log`/`git blame` the area
3. **Hypothesis** — "I believe X causes Y because Z," stated explicitly
4. **Verify it** before fixing — log, isolating test, or trace the path
5. **Fix the root cause**, not the symptom
6. **Add a regression test**

**Output:** root cause (the mechanism, not "fixed it"), the fix and why it addresses the cause, the test added, and whether this is systemic enough to patch CLAUDE.md or `.claude/context/`.
