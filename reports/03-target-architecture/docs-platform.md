# Target Documentation Platform

Goal: docs that are generated from the code where possible, so they cannot drift, server-rendered so they are searchable and fast, and complete enough that a new user never has to read source to use a component.

## Principles

1. **The example file is the snippet.** Each demo is one `.tsx` file. The page renders it and shows its raw source, read at build time. No parallel code strings.
2. **Props come from types.** API tables are generated from the TypeScript definitions with `react-docgen-typescript` or `ts-morph`, covering every part (for example all 8 Dialog parts), not only the root.
3. **Metadata comes from the component.** Title, category, status, APG link and export names come from `*.meta.ts` (see [build-and-release.md](build-and-release.md)). The docs registry is generated, never hand-written.
4. **Server first.** Pages are Server Components. Only the live demo islands and interactive widgets are client components, loaded per page.
5. **Docs preview unreleased code.** The docs app depends on `workspace:*`, so a PR shows its own changes.

## Content structure

```
apps/docs/
├── content/
│   ├── docs/
│   │   ├── introduction.mdx
│   │   ├── installation/{next.mdx, vite.mdx, remix.mdx, manual.mdx, cli.mdx}
│   │   ├── theming.mdx               CSS variables reference, v3 and v4 setup, custom themes
│   │   ├── dark-mode.mdx             next-themes, no-flash script
│   │   ├── server-components.mdx     "use client" boundaries, what is server safe
│   │   ├── forms.mdx                 Field, Form, react-hook-form, zod, server actions
│   │   ├── accessibility.mdx         what we guarantee, how we test
│   │   ├── typescript.mdx
│   │   ├── migration/v3.mdx
│   │   └── changelog.mdx             generated from changesets
│   └── components/<name>.mdx         one per component (template below)
├── demos/<name>/<demo>.tsx           live examples, also the copied source
├── src/app/                          routes, layouts
└── .generated/                       registry.json, props/*.json (from codegen)
```

## Component page template

Single scrolling page with anchors and an "On this page" table of contents. No tabs hiding content.

1. Title, one-line description, status badge (`experimental`, `beta`, `stable`), links: source on GitHub, APG pattern, Radix or Base UI primitive if wrapped.
2. Hero demo with Preview / Code toggle.
3. **Installation** tabs: `npm`, `pnpm`, `yarn`, `bun`, `CLI`.
4. **Usage**: minimal import plus JSX, import line generated from `exports` in meta (fixes today's `import { Input OTP }` bug).
5. **Examples**: 4 to 8 demos covering variants, sizes, controlled state, form integration, a realistic enterprise case.
6. **API reference**: one generated table per part. Columns: prop, type, default, description. Data attributes and CSS variables listed separately.
7. **Accessibility**: APG pattern, keyboard table (generated from the test file's key list), screen reader notes.
8. **Theming**: tokens this component reads, slot classes.
9. Related components, previous and next links, "Edit this page".

## Guides the site must add

| Guide | Why |
| --- | --- |
| Theming and CSS variables | Components rely on tokens no consumer knows to define |
| Tailwind v3 and v4 setup | README claims both, docs show only v3 |
| Server Components | Today every import fails in a Server Component |
| Forms | `Form` is exported with no page, and the current one is not a react-hook-form integration |
| Accessibility | Replace the generic "WCAG AA" boilerplate with real guarantees |
| Changelog and migration | No record of what changed between 2.15.14 and 2.15.15 |
| Contributing | How to add a component with the manifest and tests |

## Tooling choices

| Need | Choice | Replaces |
| --- | --- | --- |
| Content | MDX via `@next/mdx` or Fumadocs / Contentlayer-style loader | Hard-coded TSX pages and string snippets |
| Code highlighting | Shiki at build time (zero client JS) | Full Prism `react-syntax-highlighter` (217 KB gzip) |
| Search | cmdk dialog over a build-time index of titles, headings, props and guides. Algolia DocSearch once traffic justifies it | Substring match over registry titles |
| Props | `react-docgen-typescript` or `ts-morph` in codegen | 644-line hand-written `component-props.ts` |
| Theme | `next-themes` with blocking script | `useEffect` theme with flash |
| SEO | `generateMetadata` per page, `title.template`, `sitemap.ts`, `robots.ts`, OG images via `opengraph-image.tsx` | One shared title on guide pages |
| Animation | CSS transitions | framer-motion (unused in practice) |

## Required fix in the current docs

Add to `docs/src/app/globals.css` right away, independent of any restructure:

```css
@import "tailwindcss";
@source "../../node_modules/mad-ui-components/dist";
```

Without it the previews do not render the library's real classes.

## Interactive extras that set top libraries apart

- **Theme builder**: edit tokens live, check contrast, export `theme.css`.
- **Blocks gallery**: full-page compositions (dashboard shell, auth, settings, billing, data table page) copyable through the CLI.
- **Playground**: StackBlitz or CodeSandbox "Open in editor" button on each demo.
- **Status page**: generated table of every component with test coverage, a11y status and since-version, replacing `COMPONENTS_STATUS.md`.
