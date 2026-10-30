# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [3.0.0] - 2026-10-30

### 🚀 Major Architectural Evolution: Native, Headless & Zero-Radix
- **100% Zero Third-Party UI Runtime Dependencies**:
  - Removed all `@radix-ui/*` dependencies (`@radix-ui/react-slot`, `@radix-ui/react-portal`, `@radix-ui/react-dialog`, etc.).
  - Replaced with our own lightweight, native headless primitives (`Slot`, `Portal`, `Presence`, `FocusTrap`) under `mad-ui-components/primitives`.
  - The entire library now has **0 external UI runtime overhead**, depending solely on standard utilities (`clsx`, `tailwind-merge`, and `lucide-react`).
- **Architecture-by-Layer Subpath Exports**:
  - `mad-ui-components/primitives`: Headless primitives (`Slot`, `Portal`, `Presence`, `FocusTrap`).
  - `mad-ui-components/hooks`: Custom headless hooks (`useControllableState`, `useId`, `useClickOutside`, `useVirtualizer`, etc.).
  - `mad-ui-components/theme`: Design tokens, HSL variable maps, and `ThemeProvider`.
- **Hardware-Accelerated Exit Animations**:
  - Integrated `Presence` primitive with exit transition lifecycles into `Dialog`, `AlertDialog`, `Sheet`, `Drawer`, and `Modal`.
  - Added clean `data-state="open"|"closed"` driven animations (`animate-out`, `fade-out-0`, `zoom-out-95`, `slide-out-to-*`).

### 📝 Composable Form System (`form.tsx`)
- **Accessible, Context-Linked Form Architecture**:
  - Introduced `<Form>`, `<FormField>`, `<FormItem>`, `<FormLabel>`, `<FormControl>`, `<FormDescription>`, `<FormMessage>`, and `useFormField()`.
  - Automatic ARIA ID binding: `FormLabel[htmlFor]` automatically syncs with `FormControl[id]`.
  - Automatic `aria-describedby` wiring and automatic `aria-invalid` error state detection in `Input`, `Textarea`, `Checkbox`, `Select`, and `InputOTP`.
  - `FormMessage` auto-extracts error messages from context with accessible `role="alert"`.
  - **Dual Mode Support**: Works 100% standalone with zero dependencies, and seamlessly integrates with `react-hook-form` and schema validators (e.g. `zod`).
  - Backward compatibility: Preserved `mad-ui-components/forms/react-hook-form` as a seamless bridge.

### 📊 Advanced Semantic DataTable & Virtualizer
- **Semantic Table Markup**: Rebuilt `DataTable` on standard semantic HTML elements (`Table`, `TableHeader`, `TableBody`, `TableRow`, `TableCell`).
- **Interactive Features**: Multi-column sorting, indeterminate "Select All" checkbox selection, real-time search filtering, and customizable pagination controls with page size selector.
- **Zero-Dependency Virtualizer (`useVirtualizer`)**:
  - High-performance windowing hook calculating dynamic slices for 60fps scrolling on datasets with thousands of rows without `@tanstack/react-virtual`.

### 🎨 Interactive Theme Builder (`/theme-builder`)
- Added dedicated top-navigation route at `/theme-builder` with live component sandbox canvas.
- 6 Curated Enterprise Color Presets: Zinc, Indigo, Emerald, Rose, Ocean, Violet.
- Custom border-radius sliders (`0px` to `Full`).
- 1-Click Code Exporter for CSS Variables (`:root` / `.dark`) and Tailwind CSS theme config.

### 📦 Smart CLI Component Adder (`npx mad-ui-components`)
- Completely upgraded CLI component distribution tool:
  - `npx mad-ui-components add <component>`: Automatically resolves internal dependencies (`primitives/`, `hooks/`, `lib/utils.ts`) and rewrites relative imports.
  - `npx mad-ui-components list`: Lists all 55 components grouped by domain.
  - Flags: `--all`, `--path <dir>`, `--dry-run`, `--overwrite`.

### 📚 Documentation & Parity Suite
- **100% Props Coverage**: Documented complete TypeScript prop specifications for all 55 components in `docs/src/lib/component-props.ts`.
- **Enterprise Templates**: Added production-grade Operations & Analytics Dashboard showcase pattern to Examples.
- **Automated Parity Suite (`tests/parity.test.ts`)**: 49 tests validating manifest-to-props parity, CLI source mappings, and zero third-party UI dependencies.

---

## [2.16.0] - 2026-10-28

### 🚀 Highlights & Breaking Fixes
- **Next.js App Router & Server Components Support**:
  - Injected `"use client";` banners into all 64 ESM distribution bundles (`dist/*.mjs`).
  - Fixed Rollup directive-stripping issue by using esbuild tree-shaking in `tsup.config.ts`.
- **Packaging & Subpath Exports**:
  - Added `./theme.css` and `./styles.css` subpath exports.
  - Automatically compile and optimize CSS (`dist/theme.css` and `dist/styles.css`) during `npm run build`.
  - Added dedicated subpath exports for `./alert` and `./layout-shell` to prevent file collision with the layout module.
  - Added root `./package.json` export.
- **Compound Component Exports**:
  - Exported all compound parts directly from package root (`src/index.ts` and `src/core.ts`):
    - `DialogTrigger`, `DialogContent`, `DialogHeader`, `DialogFooter`, `DialogTitle`, `DialogDescription`, `DialogClose`, `useDialog`
    - `AlertDialogTrigger`, `AlertDialogContent`, `AlertDialogHeader`, `AlertDialogFooter`, `AlertDialogTitle`, `AlertDialogDescription`, `AlertDialogAction`, `AlertDialogCancel`, `useAlertDialog`
    - `HoverCardTrigger`, `HoverCardContent`
    - `CollapsibleTrigger`, `CollapsibleContent`
    - `ContextMenuTrigger`, `ContextMenuContent`, `ContextMenuItem`, etc.
    - `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`
    - `RadioGroupItem`, `InputOTPGroup`, `InputOTPSlot`

### 🐛 Bug Fixes
- **Dialog & AlertDialog**:
  - Fixed trigger mounting: `children` are now always rendered, and only the modal overlay is conditional on `open`.
- **DateTimePicker**:
  - Fixed calendar days offset using `new Date(year, month, 0)`.
  - Fixed 12-hour option generation (`i + 1`).
- **InputOTP**:
  - Fixed state tracking with fixed-length array `Array.from({ length }, (_, i) => value[i] ?? "")`.
  - Fixed ref callback return type compatibility with React 19.
- **Calendar**:
  - Set day to 1 before month navigation to prevent skipping months on the 31st.
- **Navbar & Sidebar**:
  - Replaced un-scannable Tailwind template literal class names with explicit `primaryColorMap`.
  - Removed placeholder `console.log` handlers from profile menu actions.
  - Fixed `SidebarProps` to omit conflicting `onToggle` from `HTMLAttributes<HTMLDivElement>`.
- **Carousel**:
  - Supported nested `<CarouselContent>` wrapper.
  - Added initial `null` argument to `useRef` for React 19 compatibility.
  - Added `type="button"` to navigation buttons.
- **Chart**:
  - Fixed 40px bar overflow in `BarChart`.
  - Fixed division by zero when rendering empty chart datasets.
- **Toast**:
  - Reset `isExiting` state when reopening a controlled toast.
- **Theme**:
  - Replaced non-existent `zinc-850` with standard Tailwind `zinc-800`.

### 📚 Documentation
- Updated `docs/src/app/globals.css` with `@source` directive for `mad-ui-components` distribution files.
- Fixed code snippet generator to remove spaces in component import names (e.g. `import { InputOTP }` instead of `import { Input OTP }`).
- Replaced dead Dialog/AlertDialog previews with live interactive demos.
- Added comprehensive Theming & CSS Variables reference in Getting Started guide.
- Removed outdated CLI copy instructions and replaced raw emojis with clean Lucide vector icons.
