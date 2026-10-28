# Mad UI Library Audit

Audit date: 2026-10-28. Version audited: `mad-ui-components@2.15.15` on `master`.

Scope: all 55 component files, the build and packaging setup, theming, the docs site, repository hygiene, and a benchmark against shadcn/ui, Radix, MUI and Mantine. Every bug listed in these reports was checked against the source, and most include a file and line reference.

## Executive summary

Mad UI has broad component coverage, a recognisable shadcn-style API, and a polished-looking docs site. Underneath, the library is not yet production grade:

- **The package breaks in common setups.** Three advertised subpath exports point at files that do not exist. No built file carries `"use client"`, so components fail in Next.js Server Components. The theme (CSS variables) is never shipped, so token classes such as `bg-primary` do nothing in a consumer app.
- **Most interactive components are inaccessible or broken.** 0 of 53 components reach an A grade against WAI-ARIA patterns, and 36 (68%) are graded D or F. Dialog triggers cannot open dialogs, Slider dragging does nothing, Select has no keyboard support, Command does not filter, and DateTimePicker skips hour 1.
- **Theming is mostly hardcoded.** About 1,110 hardcoded palette classes and 408 `dark:` overrides, against 172 semantic token classes. Changing the brand color leaves most of the UI unchanged.
- **Nothing is verified.** No tests, no CI, 47 TypeScript errors, no changelog, no LICENSE file.
- **The docs do not reflect the library.** The docs CSS does not include the library's classes, so previews miss real states. Copied imports are invalid for multi-word components (`import { Input OTP }`). The documented CLI command fails.

Following these reports is necessary but not sufficient for "production grade". That label is earned by passing measurable release gates on every release and by real apps running on the library for months. See [04-roadmap/production-readiness.md](04-roadmap/production-readiness.md).

The path forward is clear and mostly mechanical: fix packaging (one week), add foundation infrastructure (tests, CI, tokens, generated exports), rebuild interactive primitives on a headless engine, then add the advanced components (DataTable, Dates, Field and Form) that set enterprise libraries apart.

## Scorecard

| Dimension | Grade | Main reason | Details |
| --- | --- | --- | --- |
| Component coverage | B | 55 components, most common needs named | [02-benchmark/missing-components.md](02-benchmark/missing-components.md) |
| Component correctness | D | 22 components functionally broken even for mouse users | [01-current-state/component-audit/](01-current-state/component-audit/README.md) |
| Accessibility | F | No APG pattern fully implemented, no focus management | [01-current-state/accessibility-audit.md](01-current-state/accessibility-audit.md) |
| API consistency | D | Mixed composition styles, about 150 inert props, inconsistent variant names | [01-current-state/component-audit/](01-current-state/component-audit/README.md#api-consistency) |
| Theming and tokens | D | Theme not shipped, 87% of color classes hardcoded | [01-current-state/theming-and-design-tokens.md](01-current-state/theming-and-design-tokens.md) |
| Build and packaging | F | Broken exports, no RSC support, duplicated contexts across bundles | [01-current-state/build-and-packaging.md](01-current-state/build-and-packaging.md) |
| Type safety | D | 47 `tsc` errors, toolchain borrowed from docs via symlink | [01-current-state/build-and-packaging.md](01-current-state/build-and-packaging.md#p1-type-safety) |
| Testing and CI | F | None | [01-current-state/repo-hygiene.md](01-current-state/repo-hygiene.md) |
| Documentation | C | Good shell and preview UI, but drift, missing guides, invalid copied code | [01-current-state/docs-site-audit.md](01-current-state/docs-site-audit.md) |
| Repository hygiene | D | Stale and unrelated docs, dead scripts, no LICENSE | [01-current-state/repo-hygiene.md](01-current-state/repo-hygiene.md) |

## Top 10 issues

1. `"use client"` is missing from all built files, so components fail in Next.js Server Components.
2. `mad-ui-components/alert`, `/date-picker` and `/timepicker` resolve to nothing. `/datetime-picker` exists but is not exported.
3. The theme CSS is never shipped, and the README setup leaves `bg-primary` and the other token classes undefined.
4. Subpath bundles each carry their own React contexts, so mixing import paths breaks compound components.
5. Dialog and AlertDialog triggers cannot open their dialog when used as documented.
6. All menus, selects, comboboxes and tabs lack roles and keyboard support.
7. Overlays have no focus trap, no focus restore, no portal (except Sheet and Drawer) and no positioning engine.
8. About 1,110 hardcoded palette classes bypass the token system, and three neutral scales (zinc, gray, slate) are mixed.
9. No tests, no CI, 47 type errors.
10. The docs site does not compile the library's classes, so previews are not faithful.

## How these reports are organised

```
reports/
├── README.md                                   this page
├── 01-current-state/                           what is wrong today, with evidence
│   ├── build-and-packaging.md
│   ├── project-structure.md
│   ├── theming-and-design-tokens.md
│   ├── accessibility-audit.md
│   ├── docs-site-audit.md
│   ├── repo-hygiene.md
│   └── component-audit/
│       ├── README.md                           scorecard and grade distribution
│       ├── core-forms.md
│       ├── overlay-layout-navigation.md
│       └── data-feedback-media.md
├── 02-benchmark/                               how Mad UI compares
│   ├── comparison-matrix.md
│   ├── missing-components.md                   essentials that are missing today
│   └── component-catalog-expansion.md          full catalog: inputs, dates, charts, AI kit, hooks, blocks, templates
├── 03-target-architecture/                     what "advanced" should look like
│   ├── folder-structure.md
│   ├── component-api-standards.md
│   ├── design-token-system.md
│   ├── motion-system.md                        animation tokens, enter and exit, per-component motion spec
│   ├── build-and-release.md
│   ├── testing-strategy.md
│   ├── docs-platform.md
│   └── cli-and-registry.md
└── 04-roadmap/                                 how to get there
    ├── quick-wins.md                           week 1 checklist
    ├── roadmap.md                              phases 0 to 5, toward 3.0
    └── production-readiness.md                 release gates, maturity levels, limits of this audit
```

## Suggested reading order

- **Maintainer deciding what to do next:** this page, then [04-roadmap/quick-wins.md](04-roadmap/quick-wins.md), then [04-roadmap/roadmap.md](04-roadmap/roadmap.md), then [04-roadmap/production-readiness.md](04-roadmap/production-readiness.md) for what "done" means.
- **Planning new components or animations:** [02-benchmark/component-catalog-expansion.md](02-benchmark/component-catalog-expansion.md) and [03-target-architecture/motion-system.md](03-target-architecture/motion-system.md).
- **Engineer fixing components:** [01-current-state/component-audit/](01-current-state/component-audit/README.md), then [03-target-architecture/component-api-standards.md](03-target-architecture/component-api-standards.md).
- **Engineer restructuring the repo:** [03-target-architecture/folder-structure.md](03-target-architecture/folder-structure.md) and [03-target-architecture/build-and-release.md](03-target-architecture/build-and-release.md).
- **Designer or theming owner:** [01-current-state/theming-and-design-tokens.md](01-current-state/theming-and-design-tokens.md), then [03-target-architecture/design-token-system.md](03-target-architecture/design-token-system.md).

## Method

- `npm run build`, `npx tsc --noEmit`, `npm pack --dry-run` at the root. `tsc` and `lint` in `docs/`.
- Inspection of `dist/` output (directives, context duplication, export map coverage).
- Full read of every component, lib and docs source file, split into four parallel reviews, with the high-severity findings re-verified by hand.
- Benchmark against the public APIs and documentation of shadcn/ui, Radix Primitives, MUI, Mantine and Chakra UI.

No source files were changed during the audit. The only new files are under `reports/`.
