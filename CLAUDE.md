# CLAUDE.md

<!-- Run /create-rules once to fill in the sections below for this specific
     repo. Until then, this is just the template — safe to leave as-is,
     nothing breaks, the commands table below still works either way. -->

## This project uses claude-kit

If this is your first session here, run `/prime` before anything else.

| Command | What it does |
|---|---|
| `/prime` | Load context on this repo (read-only). Run this first, every session. |
| `/create-rules` | (Re)generate this file from the actual codebase. Run once per project, or when conventions drift. |
| `/create-prd "idea"` | Turn a rough idea into a structured PRD before planning. |
| `/plan` | Write a step-by-step implementation plan. Review it before implementing. |
| `/implement path/to/plan.md` | Execute a plan, ideally in a fresh session. |
| `/validate` | Run lint/typecheck/tests now, on demand. (Also runs automatically when a turn ends — see Hooks below.) |
| `/review` | Fresh-eyes code review of the current diff. |
| `/security-review` | Focused security review — run before merging anything touching auth/data/input. |
| `/commit` | Write a conventional commit message from staged changes. |
| `/push` | Push safely — blocks pushing straight to main, blocks pushing dirty/unvalidated state. |
| `/pr-description` | Draft a PR description from the diff. |

**Typical order:** `/prime` → `/plan` → *(new session)* → `/implement` → `/review` → `/commit` → `/push`

**Also active automatically, no command needed:**
- `debug` and `test-writer` skills — apply whenever investigating a failure or writing tests
- `security_guard` hook — blocks reading `.env` files and recursive deletes
- `stop_validate` hook — blocks ending a turn if lint/tests are failing on changed code

Full explanation of all of this: see `.claude/HOW-THIS-WORKS.md`.

---

## Stack
[Language, framework, versions, package manager]

## Commands
- Install: `...`
- Dev: `...`
- Test: `...`
- Lint/typecheck: `...`
- Build: `...`

## Conventions
- [Only things Claude would get wrong by default — naming, folder structure,
  error handling pattern, state management choice, etc. Keep this under ~8 bullets.]

## Testing standards
[What "done" looks like — coverage expectations, what must have tests]

## Do not
[Explicit anti-patterns for this repo]
