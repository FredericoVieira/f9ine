---
name: test-writer
description: Write tests matching this repo's conventions with real edge-case coverage. Auto-invoke whenever writing or updating tests.
---

# Test Writer

Match an existing test file's structure exactly (imports, mocking, assertions, naming) — don't introduce a new pattern.

Cover: happy path, boundaries (empty/zero/null/max), error paths, async rejection/concurrency, conditional rendering / missing props. Don't write a test that can't fail — mocking everything until it passes isn't coverage.

Flag genuinely hard-to-test gaps rather than skip them silently.
