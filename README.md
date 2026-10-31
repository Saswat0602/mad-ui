# Mad UI (`mad-ui-components`)

[![npm version](https://img.shields.io/npm/v/mad-ui-components.svg?style=flat-square&color=blue)](https://www.npmjs.com/package/mad-ui-components)
[![npm downloads](https://img.shields.io/npm/dm/mad-ui-components.svg?style=flat-square&color=emerald)](https://www.npmjs.com/package/mad-ui-components)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178c6.svg?style=flat-square)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18%20%7C%2019-61dafb.svg?style=flat-square)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3%20%7C%204-38bdf8.svg?style=flat-square)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

An enterprise-grade, accessible, and themeable React UI component library built with **TypeScript** and **Tailwind CSS**. Features **55+ standalone components and modules** with **zero external UI runtime dependencies**, Architecture-by-Layer, full keyboard accessibility, interactive theme builder, and smart CLI distribution.

- 🌐 **Documentation & Live Showcase:** [mad-ui.vercel.app](https://mad-ui.vercel.app)
- 🎨 **Interactive Theme Builder:** [mad-ui.vercel.app/theme-builder](https://mad-ui.vercel.app/theme-builder)
- 📦 **npm Package:** [npmjs.com/package/mad-ui-components](https://www.npmjs.com/package/mad-ui-components)
- 💻 **GitHub Repository:** [github.com/Saswat0602/mad-ui](https://github.com/Saswat0602/mad-ui)
- 🚀 **v3 Migration Guide:** [MIGRATION_V2_TO_V3.md](./MIGRATION_V2_TO_V3.md)

---

## ✨ Features

- 🛡️ **Zero External UI Runtime Dependencies** — 100% native React primitives (`Slot`, `Portal`, `Presence`, `FocusTrap`) with zero `@radix-ui/*` bloat.
- 🚀 **55+ Enterprise Components** — From core inputs, buttons, and composable forms to semantic data tables, date-time pickers, and navigation systems.
- ⚡ **Architecture-by-Layer** — Import via full package, categorized modules (`/forms`, `/layout`), headless primitives (`/primitives`), hooks (`/hooks`), or individual tree-shaken components (`/button`, `/dialog`).
- 🛠️ **Smart CLI Component Distribution** — Prefer local component ownership? Run `npx mad-ui-components add <component>` to scaffold components with all dependencies auto-resolved.
- 🎨 **Tailwind CSS Native & Theme Builder** — Seamlessly integrates with Tailwind CSS tokens and provides a real-time live preview theme builder with 1-click CSS variable export.
- 🌙 **First-Class Dark Mode** — Clean CSS variables and semantic color tokens with smooth theme switching.
- ♿ **Accessible by Design** — Built according to WAI-ARIA authoring practices with automated `aria-describedby` wiring and keyboard navigation.
- 📦 **Universal React Support** — Engineered to work smoothly across both React 18 consumers and React 19 / Next.js 16+ Turbopack applications.

---

## 🚀 Quick Start

### 1. Installation

Install `mad-ui-components` into your project:

```bash
# npm
npm install mad-ui-components

# pnpm
pnpm add mad-ui-components

# yarn
yarn add mad-ui-components

# bun
bun add mad-ui-components
```

### Alternative: Direct CLI Component Addition (shadcn-style)

If you prefer copying components directly into your codebase:

```bash
# Add components with all primitives and hooks auto-resolved:
npx mad-ui-components add button
npx mad-ui-components add dialog
npx mad-ui-components add data-table
npx mad-ui-components add form

# Explore the complete 55-component catalog:
npx mad-ui-components list
```

### 2. Configure Tailwind CSS

Add the Mad UI component distribution directory to the `content` array of your `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/mad-ui-components/dist/**/*.{mjs,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 3. Usage

Import components in your React application:

```tsx
import { Button, Card, Input } from 'mad-ui-components'

export default function App() {
  return (
    <Card className="p-6 max-w-sm space-y-4">
      <h2 className="text-xl font-bold">Sign In</h2>
      <Input placeholder="name@example.com" type="email" />
      <Button className="w-full">Continue</Button>
    </Card>
  )
}
```

---

## 📦 Import Methods

Mad UI offers 3 import levels so you can balance developer convenience with bundle size:

### 1. Full Package Import
Most convenient for standard projects:
```tsx
import { Button, Card, Input, Modal, Table } from 'mad-ui-components'
```

### 2. Categorized Feature Modules
Groups related components together without loading the entire library:
```tsx
import { Form, Calendar, Tabs, DateTimePicker } from 'mad-ui-components/forms'
import { Layout, Navbar, Sidebar, Drawer, Modal } from 'mad-ui-components/layout'
import { Dialog, DropdownMenu, Tooltip } from 'mad-ui-components/overlay'
import { Table, DataTable, Chart } from 'mad-ui-components/data'
import { NavigationMenu, Menubar, Command, Combobox } from 'mad-ui-components/navigation'
import { Avatar, Badge, Carousel } from 'mad-ui-components/media'
import { Alert, Toast, Sonner } from 'mad-ui-components/feedback'
```

### 3. Individual Component Imports
Direct tree-shaking for maximum bundle size optimization:
```tsx
import { Button } from 'mad-ui-components/button'
import { Drawer } from 'mad-ui-components/drawer'
import { Input } from 'mad-ui-components/input'
import { Card } from 'mad-ui-components/card'
```



## 📋 Component Catalog

| Category | Components Included |
| :--- | :--- |
| **Core** | `Button`, `Card`, `Checkbox`, `Input`, `Label`, `Progress`, `Radio`, `Rating`, `Select`, `Skeleton`, `Slider`, `Switch`, `Textarea` |
| **Forms** | `Accordion`, `Breadcrumbs`, `Calendar`, `DateTimePicker`, `InputOTP`, `RadioGroup`, `ReactHookForm`, `Tabs` |
| **Layout** | `Drawer`, `Layout`, `Modal`, `Navbar`, `Popover`, `Resizable`, `ScrollArea`, `Sheet`, `Sidebar`, `Tooltip` |
| **Overlay** | `AlertDialog`, `Collapsible`, `ContextMenu`, `Dialog`, `DropdownMenu`, `HoverCard`, `Separator`, `Toggle` |
| **Navigation** | `Combobox`, `Command`, `Menubar`, `NavigationMenu`, `Pagination` |
| **Data** | `Chart`, `DataTable`, `Table` |
| **Feedback** | `Alert`, `Sonner`, `Toast` |
| **Media** | `AspectRatio`, `Avatar`, `Badge`, `Carousel`, `Typography` |

For a complete status breakdown and implementation checklist, see [COMPONENTS_STATUS.md](./COMPONENTS_STATUS.md).

---

## 🛠️ Development & Monorepo Workflows

```bash
# Clone the repository
git clone https://github.com/Saswat0602/mad-ui.git
cd mad-ui

# Install dependencies
npm install

# Build the library into /dist
npm run build

# Start documentation dev server
cd docs
npm install
npm run dev
```

For AI agents and human contributors, see [AGENTS.md](./AGENTS.md) for architecture guidelines, conventions, and review workflows.

---

## 🤝 Community & Contributing

We welcome contributions of all kinds! Please see our community guides before submitting an issue or pull request:

- **[Contributing Guidelines](./CONTRIBUTING.md)**: Development setup, branch etiquette, and pull request checklist.
- **[Code of Conduct](./CODE_OF_CONDUCT.md)**: Community pledge and standards adapted from Contributor Covenant v2.1.
- **[Security Policy](./SECURITY.md)**: Supported versions and vulnerability disclosure process.

---

## 📄 License

MIT © [Saswat Ranjan Mohanty](https://github.com/Saswat0602). Free for commercial and personal use.
