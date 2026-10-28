# AGENTS.md — Developer & AI Agent Guide for Mad UI

Welcome to the **Mad UI** repository. This document provides a comprehensive guide for AI agents and human contributors on project architecture, conventions, workflows, design system standards, and engineering rules.

---

## 1. Project Overview & Architectural Standards

**Mad UI** (`mad-ui-components`) is an enterprise-grade React UI component library built with **TypeScript** and **Tailwind CSS**, featuring 57+ components and subpath modules with extensive customization, animations, accessibility, and theme support.

### Dual-Workspace Monorepo Structure:
1. **Root (`/`)**: The published npm package (`mad-ui-components`), bundled with `tsup` into ESM and `.d.mts` files in `dist/`.
2. **Documentation (`/docs`)**: A Next.js 15+ showcase and documentation application built with App Router, React 19, and Tailwind CSS. It consumes the root package directly via `"mad-ui-components": "file:.."`.

---

## 2. Directory Structure

```
mad-ui/
├── AGENTS.md                  # This guide and engineering rules
├── COMPONENTS_STATUS.md       # Audit and status matrix for all 55+ components
├── README.md                  # Root repository overview and npm instructions
├── package.json               # Root package.json (mad-ui-components)
├── tsup.config.ts             # Multi-entry build configuration for library
├── tsconfig.json              # Root TypeScript config
├── tailwind.config.js         # Library Tailwind configuration
├── dist/                      # Compiled ESM and declaration files (.mjs, .d.mts)
├── scripts/
│   ├── build-css.js           # CSS processing script
│   └── copy-component.js      # CLI tool (`mad-ui-components copy <component>`)
├── src/
│   ├── index.ts               # Primary bundle entry point
│   ├── core.ts                # Core bundle entry point
│   ├── components/            # Component source files categorized by domain
│   │   ├── core/              # Button, Card, Input, Checkbox, Select, Slider, etc.
│   │   ├── forms/             # Accordion, Calendar, Breadcrumbs, Tabs, etc.
│   │   ├── layout/            # Navbar, Sidebar, Modal, Drawer, Sheet, etc.
│   │   ├── overlay/           # Dialog, AlertDialog, DropdownMenu, Tooltip, etc.
│   │   ├── navigation/        # NavigationMenu, Menubar, Command, Combobox, Pagination
│   │   ├── data/              # Table, DataTable, Chart
│   │   ├── media/             # Avatar, Badge, Carousel, AspectRatio, Typography
│   │   └── feedback/          # Alert, Toast, Sonner
│   ├── modules/               # Sub-bundle entry points (forms.ts, layout.ts, etc.)
│   ├── individual/            # Individual entry points for optimal tree-shaking
│   ├── lib/
│   │   ├── utils.ts           # clsx + tailwind-merge (cn helper)
│   │   └── colors.ts          # Color utilities and token helpers
│   └── icons/                 # Shared icon components
└── docs/                      # Next.js 15 showcase & documentation site
    ├── package.json           # Docs dependencies (Next.js, React 19, Lucide, Framer Motion)
    ├── next.config.ts         # Next.js configuration with MDX support
    ├── public/                # Static assets, SVG logos, and favicons
    └── src/
        ├── app/
        │   ├── page.tsx                           # Modern landing page with live component demos
        │   ├── layout.tsx                         # Root docs layout with ThemeProvider & 56px header
        │   ├── components/page.tsx                # Interactive Drawer & Accordion playground
        │   └── docs/
        │       ├── layout.tsx                     # Sticky sidebar documentation layout
        │       ├── components/[[...slug]]/page.tsx # Clean component catalog & dynamic page handler
        │       ├── getting-started/page.tsx        # Overview & quickstart guide
        │       ├── installation/page.tsx           # Framework guides (Next.js, Vite, Manual, CLI)
        │       └── examples/page.tsx               # Real-world usage examples
        ├── components/        # Docs UI (DocsSidebar, ComponentPreview, PropsTable, CodeBlock)
        └── lib/
            ├── component-registry.ts # Single source of truth for component metadata
            ├── component-props.ts    # Prop documentation table data
            └── examples/             # Modular interactive component demos and snippets
```

---

## 3. Strict Design & Aesthetic Rules (Senior-Developer Standard)

All UI contributions must reflect senior-level engineering quality:

1. **Clean, Refined Color Palette**:
   - Use crisp neutral darks (`#09090b`, `#18181b`, `#27272a`) and clean lights (`#ffffff`, `#f4f4f5`, `#e4e4e7`).
   - Use subtle, semantic primary accents (`blue-500`, `indigo-500`) with modest opacity.
   - **PROHIBITED**: Gaudy rainbow animated floating orbs, loud fluorescent pink/green blur blobs, and oversaturated neon gradients ("vibe coding").
2. **No Tag Bloat or Repetitive Version Spam**:
   - Do NOT display 5+ tags on every component card or header.
   - Do NOT repeat version strings (e.g. `v2.12.0`, `v1.0.0`) on component cards.
   - Component cards must be compact, minimal, and scannable with clear typography and subtle hover states.
3. **No Childish Emojis in Professional UI**:
   - Navigation tabs, buttons, and badges must use clean, semantic Lucide vector icons (`Eye`, `Code2`, `Terminal`, `BookOpen`), NEVER raw emojis (`🎨`, `📝`, `⚡`, `💡`).
4. **Header & Navigation Layout**:
   - Header must be sleek (`h-14` / 56px), with sticky positioning, backdrop-blur, and crisp bottom border.
   - Header must feature direct links to the official GitHub repository (`https://github.com/Saswat0602/mad-ui`) and npm package (`https://www.npmjs.com/package/mad-ui-components`).
   - Documentation must always feature a persistent, sticky left sidebar (`w-64`) with category grouping and instant component search.

---

## 4. Cross-React Version Compatibility (React 18 & 19)

1. **Universal Icon Types**:
   - When declaring `icon` props in component interfaces (e.g., `navbar.tsx`, `sidebar.tsx`), use `icon?: any;` or flexible `React.ReactNode` instead of restrictive types like `React.ComponentType<{ size?: number }>`.
   - Hardcoded `ComponentType` types break when consumer projects (like Next.js 15 / React 19) pass icons from `lucide-react`, because React 19's `ReactNode` includes `bigint` which is not assignable to React 18 types.
2. **Peer Dependencies**:
   - Keep `"react": ">=18.0.0"` and `"react-dom": ">=18.0.0"` in root `package.json` under `peerDependencies`.
3. **JSX Escaping**:
   - Always escape quotes and apostrophes in JSX text (use `&quot;`, `&apos;`, `&amp;`) to maintain strict ESLint compliance in Next.js builds.

---

## 5. Build & Verification Workflows

Before committing any changes or concluding a task, run the following verification pipeline:

```bash
# 1. Build the root library (must succeed with 0 errors)
npm run build

# 2. Build the documentation site (must succeed with 0 errors and generate all static pages)
cd docs
npm run build
cd ..

# 3. Check for lint errors in docs
cd docs
npm run lint
cd ..
```

> **IMPORTANT**: The `docs` application imports directly from `dist/` of the root package via symlink. Whenever you edit components in `src/`, you **must** run `npm run build` in root for the changes to reflect in `docs`.

---

## 6. Phase-wise Git Commit Protocol

When executing multi-phase updates:
1. Complete each phase cleanly (code changes, styling, and tests).
2. Verify that `npm run build` passes in both root and `docs`.
3. Make a targeted git commit for that phase with a descriptive message (e.g., `feat(docs): add sticky sidebar layout and clean component cards`).
4. Never leave broken build states or uncommitted experimental scratch code in working branches.

---

## 7. Adding a New Component Checklist

When adding a new component to the library, follow this strict checklist:

1. **Implementation**:
   - Place component in `src/components/<category>/<component-name>.tsx`.
   - Use `cn()` from `src/lib/utils.ts` for Tailwind class composition.
   - Include ARIA attributes (`aria-label`, `aria-expanded`, `role`) and keyboard navigation support.
2. **Exports**:
   - Re-export in `src/components/index.ts`.
   - Re-export in `src/index.ts`.
   - Add to category module in `src/modules/<category>.ts`.
   - Create individual entry in `src/individual/<component-name>.ts`.
   - Add subpath export in root `package.json` under `"exports"`.
   - Add entry in `tsup.config.ts`.
3. **Documentation**:
   - Register the component in `docs/src/lib/component-registry.ts` with title, category, status, and description.
   - Add live interactive examples in `docs/src/lib/examples/<category>.tsx`.
   - Add prop descriptions in `docs/src/lib/component-props.ts`.
   - Update `COMPONENTS_STATUS.md`.
4. **Verification**:
   - Run `npm run build` in root to verify ESM and `.d.mts` bundling.
   - Run `npm run build` in `docs` to ensure static page generation succeeds.
