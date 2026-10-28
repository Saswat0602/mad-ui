# Documentation Site Audit

Scope: [docs/](../../docs), a Next.js App Router site. Compared with ui.shadcn.com, radix-ui.com/primitives, mui.com and mantine.dev.

Health check: `tsc --noEmit` passes with 0 errors, `npm run lint` gives 0 errors and 1 warning (`<img>` in `lib/examples/media.tsx:94`). The problems are in what the site says and shows, not in whether it compiles.

## Environment drift

- Docs run **Next 16.4.3**, not 15 as [AGENTS.md](../../AGENTS.md) states.
- Docs depend on the **published** `mad-ui-components@^2.15.15`, not `file:..`. Local `src/` changes never reach the docs until a release, yet [docs/scripts/build-package.js](../../docs/scripts/build-package.js) still logs "Local dist/ is up to date".

## P0: The previews do not show the real components

- [docs/src/app/globals.css](../../docs/src/app/globals.css) uses Tailwind v4 (`@import "tailwindcss"`) with **no `@source` for `mad-ui-components`**. Tailwind v4 skips `node_modules` by default.
- The built docs CSS lacks classes the library uses, such as `active:scale-[0.98]`, `focus-visible:ring-blue-500/50`, `data-[state=checked]` and `animate-collapsible-down`. Any class the docs' own files do not happen to use is missing.
- Result: previews render without their real focus, checked, active and animation states. The docs site is not a faithful showcase of the library.
- `hsl(var(--color-muted))` is applied to hex tokens (`globals.css:98, 102`), so those rules are dropped as invalid CSS.

## P0: Code that users copy is wrong

- **Invalid imports.** The import line is built from the display title: `` `import { ${component.title} } from 'mad-ui-components'` `` ([ComponentDocumentation.tsx:37](../../docs/src/components/ComponentDocumentation.tsx#L37)). That gives `import { Input OTP }`, `import { Menu Bar }`, `import { DateTime Picker }`. All 12 multi-word titles produce invalid code.
- **Dead demos.** Dialog and AlertDialog previews are hardwired `open={false} onOpenChange={() => {}}` ([overlay.tsx:128](../../docs/src/lib/examples/overlay.tsx#L128), 48). The button does nothing.
- **Copied code does not compile.** The Dialog snippet uses `useState` without importing it and ignores the compound API. The Dropdown snippet uses `<Button>` without importing it.
- **CLI instructions fail.** `npx mad-ui-components copy button card input` ([installation-snippets.ts:84](../../docs/src/data/installation-snippets.ts#L84)) exits with "Component 'copy' not found" (see [build-and-packaging.md](build-and-packaging.md)).
- **Setup instructions are incomplete.** Getting Started shows `theme.extend: {}`, so `bg-primary`, `border-input` and `ring-ring` do not exist in the consumer app. The install page says "Tailwind CSS 3 or 4" but only shows v3 setup.

## Information architecture

Routes today: `/`, `/components` (an orphan playground nothing links to), `/docs/getting-started`, `/docs/installation`, `/docs/examples`, `/docs/components/[[...slug]]` (54 registry entries, 53 unique: `breadcrumb` and `breadcrumbs` both exist).

| Page type | shadcn | Radix | MUI | Mantine | Mad UI |
| --- | --- | --- | --- | --- | --- |
| Theming and CSS variables reference | Yes | Yes | Yes | Yes | No |
| Dark mode guide | Yes | n/a | Yes | Yes | No |
| Per-component accessibility and keyboard table | Partial | Yes | Yes | Partial | Generic boilerplate only |
| API reference for every part | Via Radix | Yes | Yes | Yes | 13 of 54 |
| Changelog | Yes | Yes | Yes | Yes | Footer link only |
| Migration guide | Yes | n/a | Yes | Yes | No |
| Blocks and templates | Yes | n/a | Templates | Mantine UI | 4 examples |
| Forms guide | Yes | n/a | Yes | Yes | No (Form is exported, has no page) |
| RSC / Next.js guide | Yes | Yes | Yes | Yes | No |
| Theme builder | Yes | n/a | Yes | Partial | No |
| Contributing, FAQ, Roadmap | Yes | Yes | Yes | Yes | No |

## Component page anatomy

| Section | Status |
| --- | --- |
| Description, preview, code, copy | Present |
| Installation | npm only. No pnpm, yarn, bun tabs, no CLI tab |
| Props / API | 13 of 54 components, hand-written in a 644-line file |
| Accessibility | Same generic text on every page, claims WCAG AA and ref forwarding for components that have neither |
| Keyboard table, related components, "On this page" TOC, prev/next, edit on GitHub | None |

- The page is a `'use client'` component with 4 tabs. The built `button.html` contains "Live Preview" but none of "Component Props", "Best Practices" or "Package Installation". That content cannot be crawled, found with Ctrl+F, or deep-linked.
- `getComponentExamples` never returns an empty list. Unknown slugs get a fake "Component Preview" box and an invented import ([lib/examples/index.tsx:50-60](../../docs/src/lib/examples/index.tsx#L50-L60)), so missing docs are hidden instead of flagged.

## Drift between docs and reality

- **Props drift**: the Guidelines tab recommends `<Input label="Email Address">`, but Input has no `label` prop.
- **Feature claims**: the registry advertises "analytics, ripple effects" on Button and "drag-and-drop" on Card. Neither exists in `src/`.
- **Example drift**: live demo and copied code differ for the auth example ("Or with work email" vs "Or continue with") and the Drawer list.
- **Counts**: "57+" appears 11 times. The registry has 53 unique entries. Category counts on the landing page are hardcoded and wrong.
- **Version**: `v2.15.15` hardcoded in `header.tsx:74` and `app/page.tsx:122`.

## Consistency with the library

- `calendar`: exported, not registered. The landing page links to `/docs/components/calendar`, which is a 404.
- `form`: exported and has an example, but no registry entry.
- `datetime-picker`: registered, built, not exported. `date-picker` and `timepicker` exported, never built.
- Slug naming: registry uses `inputotp`, `scrollarea`, examples use `input-otp`, `scroll-area`. Three alias layers hide this.
- `mad-ui-components/layout` resolves to the category module because `modules/layout.ts` and `individual/layout.ts` both build to `dist/layout.mjs`. One silently overwrites the other.

## Dead files and dependencies

- No importers: `theme-provider.tsx`, `theme-toggle.tsx`, `LazyComponent.tsx`, `StatusBadge.tsx`, `hero-section.tsx`, `AccessibleWrapper.tsx`, `component-docs-generator.ts` (241 lines), `component-doc-layout.tsx`, `types/mdx.ts`, `types/frontmatter.ts`, `data/index.ts`, `component-props.ts.backup`.
- `ThemeProvider.tsx` and `theme-provider.tsx` are near duplicates (casing only).
- `ComponentProp` and `ComponentExample` types are defined in 6 places.
- Unused dependencies: `gray-matter`, `prismjs`, `@tailwindcss/forms`, `@mdx-js/react`, `@mdx-js/loader`. MDX is configured with zero `.mdx` files.
- Stale docs: [docs/README.md](../../docs/README.md) is create-next-app boilerplate. `DOCUMENTATION_PROGRESS.md`, `IMPLEMENTATION_PLAN.md` and `dev.md` describe plans that were dropped or already done.

## Search

- Cmd+K exists ([header.tsx:15-28](../../docs/src/components/header.tsx#L15-L28)): client-side substring match over title, description and tags.
- Does not search headings, props or guides. No arrow-key navigation. Not a dialog: no `role="dialog"`, no focus trap, backdrop click does not close, close button unlabeled.

## SEO and performance

- Only component pages have `generateMetadata`. Getting Started, Installation and Examples are client pages that all render the same `<title>`.
- No `title.template`, canonical URLs, `sitemap.ts`, `robots.ts` or OG images. `metadataBase` is `https://mad-ui.dev` while the site lives at `mad-ui.vercel.app`.
- `/docs/components` (empty slug) is not prerendered.
- `ComponentDocumentation` imports all 8 example files, so every component page ships every demo (one 148 KB chunk holds both "Gradient Navbar" and "Interactive Drawer Demo").
- Full Prism build of `react-syntax-highlighter` ships every language: 616 KB raw, 217 KB gzip.
- Theme class set in `useEffect` with no blocking script, so dark mode flashes light on load.

## Design rule compliance ([AGENTS.md](../../AGENTS.md))

| Rule | Result |
| --- | --- |
| `h-14` header with blur, border, GitHub and npm links | Pass. Header is `fixed`, and `main` uses `pt-16`, an 8px mismatch. |
| Sticky `w-64` sidebar | Partial. `w-72` at `lg`. Inner scroll may never engage, so the bottom of the 54-link list can be out of reach. |
| Preview / code toggle with Lucide icons and copy | Pass |
| No emojis | **Fail.** `PropsTable.tsx:21` shows 📝 on the 41 pages without props. Emojis in `forms.tsx` and `layout.tsx` examples, including code users copy. |
| No version spam | Pass on cards, hardcoded version in header and hero |
| Refined palette, no gradients | **Fail.** Purple-to-pink gradient preview in `layout.tsx:1220, 1243`. 45 hardcoded gray and white classes break dark mode. |

## Accessibility of the docs site itself

- No skip link. Sidebar is an `<aside>` with no `<nav>`. Breadcrumb `<nav>` unlabeled.
- Zero `aria-current`, `role="tablist"`, `aria-selected` or `aria-pressed` in the live UI.
- Unlabeled controls: sidebar filter input, its clear button, mobile drawer close, GitHub icon link (title only).
- Mobile drawer and search have no dialog semantics or focus trap. Drawer ignores Escape.
- Zero `focus-visible` styles in the docs chrome. No reduced-motion handling.

Target design: [../03-target-architecture/docs-platform.md](../03-target-architecture/docs-platform.md).
