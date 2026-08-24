# How this works

| Type     | Where                                  | Runs                            | Example          |
| -------- | -------------------------------------- | ------------------------------- | ---------------- |
| Command  | `.claude/commands/*.md`                | Only when typed `/name`         | `/plan`          |
| Skill    | `.claude/skills/*/SKILL.md`            | Auto, when relevant             | `debug`          |
| Subagent | `.claude/agents/*.md`                  | When delegated to               | `code-reviewer`  |
| Hook     | `.claude/hooks/*.py` + `settings.json` | Fixed trigger, can't be skipped | `security_guard` |

**Commands = things you ask for. Skills = things Claude just does. Hooks = things enforced regardless.**

## Official vs. custom

Only the concepts (commands/skills/hooks/subagents) are Anthropic's. Every specific file here — `/prime`, `code-reviewer`, both hooks — only exists because it's in this kit. Delete `.claude/` and Claude Code falls back to its own built-ins (`/init`, `/clear`, etc.). `/review` and `/security-review` intentionally override the built-in review command with subagent-delegated versions.

## The loop

```
(auto-primed) → /plan → (new session) → /implement → /review → /security-review (if needed) → /commit → /push
```

Priming is automatic (`session_prime` hook, runs at session start). `/plan` writes, doesn't touch code — read it before continuing. New session before `/implement` so it isn't carrying exploration noise. `/review` and `/security-review` delegate to `code-reviewer` — a fresh context, not the one that wrote the code. `/push` refuses protected branches and dirty/unvalidated state.

`/validate`, `/create-prd`, `/create-rules` are used as needed — see the table in CLAUDE.md.

## Automatic, no command needed

- **`session_prime`** — git history, uncommitted state, `.claude/context/` index, at session start
- **`debug` / `test-writer` skills** — apply whenever investigating a failure or writing tests
- **`security_guard`** — blocks `.env` access and recursive deletes, every tool call
- **`stop_validate`** — blocks ending a turn if lint/tests fail on changed code; skips turns with no changes

## Install

```bash
./install.sh /path/to/your-project
```

Copies everything, creates CLAUDE.md if missing, and — if `claude` is on PATH and CLAUDE.md was just created — launches `/create-rules` interactively. `--no-launch` to skip. Safe to re-run.

## Adjusting per project

- **Wrong lint/test commands auto-detected?** Copy `.claude/validate.config.json.example` → `.claude/validate.config.json`, list exact commands. Overrides auto-detection entirely.
- **CLAUDE.md too long?** Move detail to `.claude/context/<topic>.md`, reference by name.
- **Don't want a hook?** Delete its entry from `.claude/settings.json`.
