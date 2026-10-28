# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
