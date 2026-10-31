# Missing Components and Expansion Opportunities

> **Audit Update (v3.0.0)**: The foundational gaps identified during the initial audit—including the **Composable Form System** (`Field`, `FormItem`, auto ARIA IDs), **Headless Primitives** (`Slot`, `Portal`, `FocusScope`, `Presence`), **Virtualization** (`useVirtualizer`), and **Server Components** (`"use client"`)—have been **100% completed**.

This report now tracks the remaining high-impact component additions prioritized for `v3.1+`.

---

## 🎯 Tier 1: High-Frequency Enterprise Primitives (Ready to Build)

Essential components widely expected by enterprise product teams:

| Component | Target Domain | Why It Matters | Implementation Approach |
| :--- | :--- | :--- | :--- |
| **Kbd** | `media` / `data` | Displays keyboard shortcuts inside menus, tooltips, and command dialogs. Platform-aware (`⌘` on macOS, `Ctrl` on Windows/Linux). | In-house HTML `<kbd>` primitive with badge styling and modifier keys helper. |
| **Spinner** | `feedback` | Dedicated circular loading indicator for buttons, card overlays, and async page boundaries. | In-house SVG animated circle with `role="status"` and accessible label. |
| **PasswordInput** | `forms` | Single-click password reveal/mask toggle with accessible labels, caps-lock warning, and strength indicator. | Built on top of `Input` + `Button` with Lucide `Eye`/`EyeOff`. |
| **NumberInput** | `forms` | Numeric input with step up/down buttons, min/max clamp, keyboard arrow support, and decimal precision. | Built on top of `Input` with Pointer Event stepping. |
| **ButtonGroup** | `core` | Connects adjacent buttons with unified borders, consolidated active states, and seamless focus rings. | CSS flex container applying negative margin border collapse. |
| **InputGroup** | `core` | Prefixes and suffixes for inputs (currency signs, URL protocols, inline action buttons). | Compound container applying unified focus and border states. |
| **EmptyState** | `feedback` | Clean zero-data placeholder for empty tables, search results, and notification inboxes. | Minimal icon container with title, description, and action button slot. |
| **MultiSelect / TagsInput** | `forms` | Multi-value selector rendering removable chips, with search filtering, tag limit counters, and keyboard delete. | Built on native `Popover` and `Command` primitives. |
| **Stepper** | `navigation` | Multi-step process wizard for checkout flows, multi-stage forms, and onboarding steps. | Horizontal and vertical layout states with completion tracking. |
| **FileUpload / Dropzone** | `forms` | Drag-and-drop file upload zone with mime-type filters, file size limits, progress indicator, and file preview cards. | Pure Pointer Events and Drag-and-Drop API with accessible file input fallback. |

---

## 🚀 Tier 2: Strong Differentiators & Advanced Pickers

Components that elevate Mad UI into a top-tier design system:

| Component | Target Domain | Key Feature Set |
| :--- | :--- | :--- |
| **DateRangePicker** | `forms` | Dual-month calendar popover with preset shortcuts ("Last 7 Days", "This Quarter", "Year to Date"). |
| **TimePicker** | `forms` | Segmented time selector with hour/minute stepping and 12/24 hour format toggle. |
| **StatCard / KPICard** | `data` | Enterprise dashboard metric card with percentage delta badges, trend direction arrows, and mini sparkline. |
| **Timeline** | `data` | Chronological activity feed component with status markers, connector lines, and expandable audit details. |
| **Banner / Callout** | `feedback` | System-wide dismissible notice or inline contextual tip banner. |
| **Unified Toast Engine** | `feedback` | Consolidate `Toast` and `Sonner` into a single reactive external store `toast()` API. |
| **Tree / TreeView** | `data` | Hierarchical file tree or category browser with expand/collapse and keyboard roving focus. |

---

## 🤖 Tier 3: AI-Native Interface Kit

Modern interactive components tailored for generative AI products:

| Component | Description |
| :--- | :--- |
| **PromptInput** | Auto-expanding chat prompt textarea with file attachments button, token counter, and send shortcut (`Cmd+Enter`). |
| **MessageBubble** | User and AI response bubbles with markdown rendering, streaming cursor indicator, and action buttons (copy, retry). |
| **ReasoningDisclosure** | Collapsible reasoning drawer ("Thinking...") with pulse animation and token timing. |
| **ToolCallCard** | Card showing tool name, input arguments JSON, and execution status (`running` / `success` / `error`). |

---

## 📦 Cross-Cutting Capabilities Backlog

| Capability | Current Status in v3.0.0 | Target Iteration |
| :--- | :---: | :---: |
| **Server Components ("use client")** | ✅ Shipped in all 67 bundles | Completed |
| **Standalone Native Primitives** | ✅ Shipped with 0 external UI dependencies | Completed |
| **Composable Form ARIA Linking** | ✅ Fully automated IDs and validation states | Completed |
| **Virtual Scrolling** | ✅ Shipped in `DataTable` via `useVirtualizer` | Completed |
| **Tailwind v4 Native Preset** | ⚠️ Partial (Tailwind v4 `@source` supported) | v3.1 |
| **RTL Layout Support** | ⏳ Pending (`DirectionProvider`) | v3.3 |
| **Visual Regression Testing** | ⏳ Pending (Ladle / Playwright) | v3.4 |
