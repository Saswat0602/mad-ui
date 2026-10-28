# AGENTS.md — Developer & AI Agent Guide for Mad UI

Welcome to the **Mad UI** repository. This document provides a comprehensive guide for AI agents and human contributors on project architecture, conventions, workflows, and best practices.

---

## 1. Project Overview

**Mad UI** (`mad-ui-components`) is an enterprise-grade React UI component library built with **TypeScript** and **Tailwind CSS**, featuring 57+ components with extensive customization, animations, accessibility, and theme support.

The workspace is structured as a dual-workspace project:
1. **Root (`/`)**: The published npm package (`mad-ui-components`), bundled with `tsup` into ESM and `.d.mts` files in `dist/`.
2. **Documentation (`/docs`)**: A Next.js 15+ showcase and documentation application built with App Router, React 19, and Tailwind CSS v4. It consumes the root package directly via `"mad-ui-components": "file:.."`.

---

## 2. Directory Structure

```
mad-ui/
├── AGENTS.md                  # This guide
├── package.json               # Root package.json (mad-ui-components)
├── tsup.config.ts             # Multi-entry build configuration for library
├── tsconfig.json              # Root TypeScript config
├── tailwind.config.js         # Library Tailwind configuration
├── dist/                      # Compiled ESM and declaration files (.mjs, .d.mts)
├── scripts/
│   ├── build-css.js           # CSS processing script
│   └── copy-component.js      # CLI tool (`mad-ui-components add <component>`)
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
    ├── public/                # Static assets and favicons
    └── src/
        ├── app/
        │   ├── page.tsx                           # Landing page
        │   ├── layout.tsx                         # Root docs layout with ThemeProvider
        │   ├── components/page.tsx                # Interactive Drawer & Accordion demo
        │   └── docs/
        │       ├── components/[[...slug]]/page.tsx # Dynamic component showcase & gallery
        │       ├── getting-started/page.tsx        # Getting started guide
        │       ├── installation/page.tsx           # Setup and installation instructions
        │       └── examples/page.tsx               # Real-world usage examples
        ├── components/        # Docs UI (ComponentPreview, PropsTable, CodeBlock, etc.)
        └── lib/
            ├── component-registry.ts # Single source of truth for component metadata
            ├── component-props.ts    # Prop documentation table data
            └── examples/             # Modular interactive component demos and snippets
```

---

## 3. Build & Development Workflows

### Root Library Commands
Run from the root directory (`/`):
```bash
# Build the library into /dist (required whenever src/ changes)
npm run build

# Watch mode for iterative library development
npm run dev

# Clean compiled outputs
npm run clean
```

### Documentation Site Commands
Run from the `docs/` directory (`cd docs`):
```bash
# Start Next.js development server (default port: 3000)
npm run dev

# Run production build (validates all pages and types)
npm run build

# Run ESLint validation
npm run lint
```

> **IMPORTANT**: The `docs` application directly imports from `dist/` of the root package via symlink. Whenever you edit components in `src/`, you **must** run `npm run build` in the root for the changes to reflect in `docs`.

---

## 4. Component Export & Import Architecture

Mad UI supports 4 levels of imports to optimize bundle size and tree-shaking:

1. **Full Library**:
   ```tsx
   import { Button, Card, Input } from 'mad-ui-components'
   ```
2. **Core Bundle** (Most commonly used components):
   ```tsx
   import { Button, Card, Input } from 'mad-ui-components/core'
   ```
3. **Feature Modules** (Grouped by category):
   ```tsx
   import { Form, Calendar, Tabs } from 'mad-ui-components/forms'
   import { Layout, Navbar, Sidebar } from 'mad-ui-components/layout'
   import { Dialog, DropdownMenu } from 'mad-ui-components/overlay'
   ```
4. **Individual Components** (Maximum tree-shaking):
   ```tsx
   import { Button } from 'mad-ui-components/button'
   import { Drawer } from 'mad-ui-components/drawer'
   ```

---

## 5. Adding a New Component Checklist

When adding a new component to the library, follow this checklist:

1. **Implementation**:
   - Place component in `src/components/<category>/<component-name>.tsx`.
   - Use `cn()` from `src/lib/utils.ts` for Tailwind class composition.
   - Use flexible icon typing (`icon?: any` or `React.ReactNode`) rather than hardcoded `React.ComponentType<{ size?: number }>` to maintain compatibility between React 18 consumers and React 19 consumers.
2. **Exports**:
   - Re-export in `src/components/index.ts`.
   - Re-export in `src/index.ts`.
   - Add to category module in `src/modules/<category>.ts`.
   - Create individual entry in `src/individual/<component-name>.ts`.
   - Add subpath export in root `package.json` under `"exports"`.
   - Add entry in `tsup.config.ts`.
3. **Documentation**:
   - Register the component in `docs/src/lib/component-registry.ts` with title, category, status, version, and tags.
   - Add live interactive examples in `docs/src/lib/examples/<category>.tsx`.
   - Add prop descriptions in `docs/src/lib/component-props.ts`.
4. **Verification**:
   - Run `npm run build` in root to generate `dist/`.
   - Run `npm run build` in `docs/` to ensure type checking and static generation succeed.

---

## 6. Code Style & Conventions

- **Component Names**: PascalCase (e.g., `Button`, `DataTable`, `DateTime Picker`).
- **File Names**: kebab-case (e.g., `date-picker.tsx`, `accordion.tsx`).
- **Styling**: Tailwind CSS utility classes with semantic color variables (`primary`, `muted`, `background`, `foreground`, `border`, `card`).
- **Accessibility**: Include ARIA attributes (`aria-label`, `aria-expanded`, `role`) and keyboard navigation support.
- **JSX Escaping**: Always escape quotes and apostrophes in JSX text (use `&quot;` and `&apos;`).
- **Dependencies**: Keep root runtime dependencies minimal (`clsx`, `lucide-react`, `tailwind-merge`). Mark React and React-DOM as `peerDependencies` (`>=18.0.0`).
