# CLAUDE.md

Project guidance for Claude Code and AI agents working with this repository.

## TypeScript Standards

### Style

- TypeScript everywhere — `.ts` / `.tsx` files, `strict` mode always on
- `@types` packages are dev-only dependencies (`@types/node`, `@types/react`, `@types/react-dom`)
- No build-step typechecking: `npm run typecheck` runs `tsc --noEmit`; it gates `build` and `test`
- Always use ES modules — never use `require()`

### TypeScript Anti-Patterns (prohibited)

All of these silence the compiler instead of proving correctness:

- Never use `any` — use `unknown` and narrow with type guards
- Never use `as` casts to silence errors (especially `as unknown as X`) — prove the type instead
- Never use `!` non-null assertions — handle the null/undefined case
- Never use `@ts-ignore` — if truly unavoidable, use `@ts-expect-error` with a reason comment (it fails when the error goes away)
- Never disable or loosen `strict` in tsconfig
- Never use loose built-in types (`Function`, `object`, `{}`) — write precise signatures and shapes
- Never cast unvalidated data at boundaries — no `JSON.parse(x) as User` without a runtime check
