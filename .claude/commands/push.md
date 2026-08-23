---
description: Safety-gated push, then optional PR. The last checkpoint before code leaves your machine.
argument-hint: "[optional: draft for a draft PR]"
---

# Push

1. **Branch check** — stop if on a protected branch (main/master)
2. **Clean check** — stop if uncommitted changes exist, point to `/commit`
3. **Validated check** — confirm `/validate` ran this session; run it if not
4. Push. Never `--force` unless explicitly asked
5. Offer `/pr-description` + `gh pr create` if no PR exists yet — confirm the description first

Report what happened, especially anything that stopped for a decision.
