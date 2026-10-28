# Production Readiness: What It Actually Takes

## The honest answer

Following this plan is **necessary but not sufficient**. The reports fix every problem the audit found, but "production grade" is not something a document confers. A library earns it when:

1. It passes measurable release gates (below) in CI, on every release.
2. Real applications run on it for months without workarounds.
3. Its maintainers handle breaking changes, security reports and bugs predictably.

shadcn/ui, Radix and MUI are trusted because of years of point 2 and 3, not only point 1. The plan gets Mad UI to point 1. Points 2 and 3 take time and discipline.

## Limits of this audit

Be clear about what the audit did not do, so nobody over-trusts it:

- No real-browser or screen reader testing. Accessibility grades come from code reading against WAI-ARIA patterns. Real assistive technology testing will find more.
- No performance profiling. Bundle numbers come from `dist/` file sizes, not from a consumer app.
- No cross-browser run. Safari and Firefox issues (especially with positioning, `backdrop-filter`, date inputs) are untested.
- The benchmark is qualitative. Other libraries are summarised from their public positioning.
- Phase durations in [roadmap.md](roadmap.md) are estimates and assume steady part-time work.

## Maturity levels

| Level | Name | Means | Mad UI |
| --- | --- | --- | --- |
| 0 | Prototype | Looks good in its own docs | **Today** |
| 1 | Correct | Exports resolve, types pass, every component has tests, no known crash | After phase 0 and 1 |
| 2 | Accessible and consistent | Every interactive component follows its APG pattern, one API and token system | After phase 2 |
| 3 | Production | All release gates below pass. Used by at least 2 internal apps with no forks | After phase 3 and 4 plus dogfooding |
| 4 | Trusted | 6+ months of stable minors, external contributors, published support policy, real users filing issues | Ongoing |

Do not call the library "enterprise-grade" in the README or docs until level 3. Saying it earlier costs credibility the first time a user hits a broken Select.

## Release gates for "production grade"

All gates run in CI. A release cannot publish if one fails.

### Correctness

- [ ] Every `exports` entry imports successfully from the packed tarball in Node ESM, Node CJS, Vite and a Next.js App Router Server Component page.
- [ ] `tsc --noEmit` passes against `@types/react` 18 and 19.
- [ ] Every component has the behavior test checklist from [../03-target-architecture/testing-strategy.md](../03-target-architecture/testing-strategy.md).
- [ ] No React warnings in tests (unknown DOM props, missing keys, controlled to uncontrolled).
- [ ] Works under `<React.StrictMode>` (effects run twice in dev, so every effect cleans up).
- [ ] React Compiler safe: no mutation of props, state or refs during render. Run `eslint-plugin-react-compiler`.
- [ ] No hydration warnings when server-rendered with `renderToString` and hydrated.

### Accessibility

- [ ] axe clean in every story state.
- [ ] Keyboard tables on every docs page are generated from passing tests.
- [ ] Manual NVDA plus Firefox and VoiceOver plus Safari pass for every overlay, menu and form control in the last minor.
- [ ] **Forced colors mode** (Windows High Contrast): focus is visible. Today 47 `outline-none` plus 35 `ring-*` focus styles rely on `box-shadow`, which forced colors removes. In Tailwind v4 (what the docs use) `outline-none` means `outline-style: none`, so keyboard focus disappears completely. Use `outline-hidden` or add a `forced-colors:outline` fallback.
- [ ] Reflow at 400% zoom and 320 CSS px width with no horizontal scroll inside components.
- [ ] WCAG 2.2 text spacing override does not clip content.
- [ ] `prefers-reduced-motion`, `prefers-contrast: more` and `prefers-reduced-transparency` respected (21 `backdrop-blur` usages need a solid fallback).
- [ ] Minimum 24 by 24 CSS px target size for every interactive element.

### Platform support matrix

| Dimension | Supported and tested |
| --- | --- |
| Browsers | Last 2 versions of Chrome, Edge, Firefox, Safari (macOS and iOS), Chrome Android. Playwright runs Chromium, Firefox and WebKit. |
| React | 18.3 and 19.x |
| Frameworks | Next.js App Router and Pages Router, Vite SPA, React Router v7 framework mode, Astro islands |
| Node (SSR) | 18, 20, 22 |
| Tailwind | v4 first-class. v3.4 through the preset until 4.0 of the library. |
| Input | Mouse, keyboard, touch, pen. Today only 3 `onTouchStart` handlers exist and no pointer events, so Slider, Resizable, Carousel and swipe-to-dismiss need Pointer Events. |
| Direction | LTR and RTL |
| Modes | Light, dark, forced colors, reduced motion |

### Performance budgets

- [ ] `size-limit` per entry. Suggested starting budgets (min plus gzip): Button 2 kB, Dialog 8 kB, Select 12 kB, DataTable 30 kB without TanStack. Root import must tree-shake to the sum of what is used.
- [ ] Opening a Select or Combobox with 1,000 options produces no long task over 50 ms (virtualize above a threshold).
- [ ] DataTable renders 10,000 rows with virtualization at 60 fps scroll in Chromium on a mid-range laptop.
- [ ] No layout shift on hydration (portals mount after hydration, skeletons match final size).
- [ ] Animations use only `transform` and `opacity`.

### Security

- [ ] No `dangerouslySetInnerHTML` in components (true today, keep it that way). Any markdown or AI response renderer sanitizes input.
- [ ] **CSP friendly**: 38 `style={{}}` props render as `style` attributes during SSR, which a strict `style-src` policy without `'unsafe-inline'` blocks. Move static values to classes and pass dynamic values through CSS variables on a class. Document a `nonce` prop for anything that injects `<style>`.
- [ ] `SECURITY.md` with a private reporting channel and a response target (for example 72 hours to acknowledge).
- [ ] Publishing only from CI with provenance. No tokens on laptops.
- [ ] Renovate or Dependabot with a weekly cadence, `npm audit` clean in CI.

### Internationalisation

- [ ] Every built-in string is overridable (close labels, pagination, empty states, date names).
- [ ] Dates and numbers formatted through `Intl` with a `locale` prop or `LocaleProvider`.
- [ ] Logical CSS properties everywhere, RTL visual tests in CI.

### Documentation

- [ ] Every public export has a docs page and a generated API table.
- [ ] Every breaking change has a migration entry and, where mechanical, a codemod.
- [ ] Docs for the previous major remain online (for example `v2.mad-ui...`).
- [ ] Every page states the component's status (`experimental`, `beta`, `stable`).

### Process and support

- [ ] Strict semver. Breaking changes only in majors, with deprecation warnings in the previous minor.
- [ ] Support policy published: latest major gets features and fixes, previous major gets security fixes for 12 months.
- [ ] Issue templates (bug with reproduction link, feature request, a11y issue).
- [ ] Triage target (for example first response within 5 working days).
- [ ] Public roadmap and an RFC process for new components and API changes.
- [ ] Predictable release cadence (for example minor every 4 to 6 weeks, patches as needed).

## Dogfooding plan

The fastest way to find what the gates miss is to build real products with the library and treat every workaround as a bug.

| App | Exercises |
| --- | --- |
| The docs site itself | Navigation, search (Command), theming, code blocks, responsive layout |
| Admin dashboard template | Sidebar, DataTable with server mode, Charts, Forms with validation, DateRangePicker, Toasts |
| AI chat template | Message list, prompt input, streaming text, tool call display, Sheet on mobile |
| Settings and billing template | Tabs, Switch, RadioGroup, Dialog, AlertDialog, Field errors |

Rule: no `className` overrides that fight the component, no `!important`, no copied-and-patched components. If the template needs one, file an issue against the library.
