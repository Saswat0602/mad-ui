# Repository Hygiene and Engineering Practice

What a contributor, a consumer or a security reviewer sees before they read any component code.

## Missing foundations

| Item | Status | Why it matters |
| --- | --- | --- |
| Tests (unit, a11y, visual) | None. No test file, runner or config anywhere. | Every refactor so far (for example the "Radix/Shadcn enterprise standard" commit `0cc0598`) shipped unverified. |
| CI (`.github/workflows`) | None | Nothing runs build, typecheck or lint on push. 47 type errors went unnoticed. |
| `LICENSE` file | Missing | README and `package.json` claim MIT, but without the file the license is legally ambiguous and GitHub shows "No license". |
| `CHANGELOG.md` / changesets | Missing | 2.15.15 has no record of what changed. Consumers cannot judge upgrade risk. |
| `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md` | Missing | Required for an open source project that expects outside contributors. |
| Root ESLint and Prettier | Missing | Only `docs/` is linted. The library source, which is what ships, is not. |
| `.editorconfig`, `.nvmrc` | Missing | No pinned Node version for contributors or CI. |
| Storybook or equivalent workbench | Missing | Component development happens inside the docs app, which mixes concerns. |

## Stale or misleading files

| File | Problem | Action |
| --- | --- | --- |
| [COMPLETE_GUIDE.md](../../COMPLETE_GUIDE.md) (585 lines) | A generic "how to publish any npm package" tutorial. Not about Mad UI. | Delete, or move to a personal notes repo. |
| [QUICK_REFERENCE.md](../../QUICK_REFERENCE.md) (219 lines) | Same: generic npm cheat sheet, references `npm test` which does not exist here. | Delete. |
| [MAD_UI_ROADMAP.md](../../MAD_UI_ROADMAP.md) | Last touched Dec 2025. Lists "Add CLI tool" as todo while the README advertises the CLI as done. | Replace with [../04-roadmap/roadmap.md](../04-roadmap/roadmap.md). |
| [COMPONENTS_STATUS.md](../../COMPONENTS_STATUS.md) | Marks components complete that have zero tests and dozens of type errors. | Regenerate from a manifest plus CI results. |
| [AGENTS.md](../../AGENTS.md) | Says docs run Next.js 15 and consume `file:..`. `docs/package.json` is on Next 16.4 and now pins the published `^2.15.15`. Claims a "dual-workspace monorepo" but no `workspaces` field exists. | Update after the restructure. |
| [docs/AGENTS.md](../../docs/AGENTS.md) | A second agent guide with different rules. | Merge into one. |
| [extra/drawer.ts](../../extra/drawer.ts) (514 lines) | Orphan JSX in a `.ts` file, imported by nothing. | Delete. |
| [fix-imports.sh](../../fix-imports.sh), [update-exports.sh](../../update-exports.sh) | One-off migration scripts. macOS-only `sed -i ''`. Reference files such as `src/button.tsx` that no longer exist. | Delete. |
| `docs/src/lib/component-props.ts.backup` | Backup file committed to git. | Delete, git is the backup. |

## Fragile local setup

- **Root `node_modules` is a symlink to `docs/node_modules`.** The library therefore compiles against React 19 types and Tailwind 4 from the docs app, while its own `package.json` declares React 18 types and Tailwind 3. A fresh clone plus `npm install` at the root gives a different toolchain than the author uses. Fix with real workspaces (pnpm or npm).
- **Two lockfiles, no workspace.** `package-lock.json` and `docs/package-lock.json` drift independently.
- **Docs consume the published npm version** (`"mad-ui-components": "^2.15.15"` in the current working tree). The docs site cannot preview an unreleased component without publishing first. A workspace link (`"workspace:*"`) solves this.

## Secrets

- A plaintext npm `_authToken` lives in the project root `.npmrc`. It is gitignored and was never committed (checked with `git log -S`), so there is no leak. It is still one `git add -f` or one misconfigured tool away from being published.
- Recommendation: move the token to `~/.npmrc` today, then switch to GitHub Actions trusted publishing (OIDC) with `npm publish --provenance` so no long-lived token exists at all.
- The same applies to the root `.env` file. Nothing in the library should need one.

## Commit and release practice

- 150 commits, many on a single day, several titled "elevate ... to Radix/Shadcn enterprise standard" without any test proving the claim.
- Versions are bumped by hand (`chore(release): bump ... 2.15.14`, `2.15.15`). Two patch releases on the same day with no changelog.
- The project is at major version 2 while the export map, CSS delivery and RSC support are still unstable. Recommend treating the next breaking cleanup as `3.0.0` with a migration guide.
