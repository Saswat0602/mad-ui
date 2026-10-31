# Roadmap: Completed Milestones & Future Evolution

Tracking completed engineering phases through `v3.0.0` and the active development roadmap for `v3.1+`.

---

## 🟢 Completed Milestones (Phases 0–5 Delivered in v3.0.0)

| Phase | Title | Delivered Capabilities | Version | Status |
| :--- | :--- | :--- | :---: | :---: |
| **Phase 0** | **Stop the Bleeding** | P0 bug fixes (Dialog trigger, Slider drag, Switch onChange, DateTimePicker, Table hooks), `"use client"` banners, subpath exports map, `@source` preview CSS | `v2.16.0` | ✅ **Completed** |
| **Phase 1** | **Foundation Infrastructure** | Vitest testing, axe-core a11y, Changesets, component manifest audit, publint validation, root ESLint, CI workflow, zinc neutral palette migration | `v2.16.0` | ✅ **Completed** |
| **Phase 2** | **Primitives & Headless Rewrite** | Standalone native headless primitives (`Slot`, `Portal`, `FocusScope`, `Presence`, `useControllableState`, `useClickOutside`) with 0 Radix dependencies, GPU-accelerated exit animations, roving focus | `v3.0.0` | ✅ **Completed** |
| **Phase 3** | **Advanced Components & Forms** | Composable form system (`Form`, `FormField`, `FormLabel`, `FormControl`, `FormMessage` with automatic ARIA IDs and zod/RHF compatibility), advanced virtualized `DataTable`, zero-dep `useVirtualizer` | `v3.0.0` | ✅ **Completed** |
| **Phase 4** | **Showcase Platform & DX** | Interactive Theme Builder (`/theme-builder`), Smart CLI component adder (`npx mad-ui-components add <component>`), 100% comprehensive props documentation, enterprise analytics example | `v3.0.0` | ✅ **Completed** |
| **Phase 5** | **Release & Community** | Official v3.0.0 release, `MIGRATION_V2_TO_V3.md`, community guidelines, automated release provenance | `v3.0.0` | ✅ **Completed** |

---

## 🎯 Active Roadmap (v3.1 — Catalog Expansion)

With the foundational architecture, native primitives, and composable form engine now rock-solid, development shifts to expanding the component catalog with high-demand enterprise components.

### Phase 6A: Essential Form & Input Extensions (Target: v3.1.0)
High-frequency inputs needed across web applications:

- [ ] **Kbd**: Keyboard shortcut badge with automatic platform awareness (Mac `⌘` vs Windows `Ctrl`).
- [ ] **Spinner**: Accessible indeterminate loading indicator with configurable sizes, speeds, and color tokens.
- [ ] **PasswordInput**: Specialized input with integrated toggle visibility button (`Eye`/`EyeOff`), caps-lock warning, and accessible label wiring.
- [ ] **NumberInput**: Numeric stepper with increment/decrement buttons, min/max clamp, step increments, and keyboard arrow keys.
- [ ] **ButtonGroup & InputGroup**: Container primitives for seamlessly joining buttons and inputs with shared borders and focus handling.
- [ ] **EmptyState**: Standardized zero-data display with icon placeholder, header, message, and action button slots.
- [ ] **MultiSelect / TagsInput**: Multi-value pill selector built on native Popover and Command with chip removal and search filtering.

### Phase 6B: Advanced Dates & Workflow Controls (Target: v3.2.0)
Advanced date pickers and multi-step UI:

- [ ] **DateRangePicker**: Dual-month calendar picker with date range selection and pre-set ranges ("Today", "Last 7 days", "This Month").
- [ ] **TimePicker**: Standalone segmented time selector (hours, minutes, AM/PM) with keyboard stepping.
- [ ] **Stepper**: Multi-step process wizard with horizontal/vertical layouts, completed/active/pending states, and descriptions.
- [ ] **FileUpload / Dropzone**: Drag-and-drop file upload component with mime-type filters, file size limits, progress indicator, and file previews.

### Phase 6C: Analytics & Activity Display (Target: v3.3.0)
Enterprise data presentation:

- [ ] **StatCard / KPICard**: Metric display cards with trend indicator badges (up/down percentage), subtext, and optional mini sparklines.
- [ ] **Timeline**: Vertical activity feed component with status icons, connector lines, timestamps, and expandable content.
- [ ] **Banner / Callout**: System-wide dismissible notifications and inline contextual message boxes.
- [ ] **Unified Toast Engine**: Single unified `toast()` store deprecating dual Toast/Sonner APIs.

### Phase 6D: AI Interface Kit (Target: v3.4.0)
Modern AI-native conversational UI components:

- [ ] **PromptInput**: Auto-expanding chat prompt box with attachment buttons, token count, and send action.
- [ ] **MessageBubble**: User and Assistant message bubbles supporting markdown rendering, streaming state, and copy actions.
- [ ] **ReasoningDisclosure**: Collapsible "Thought process" accordion with shimmer loading animations.
- [ ] **ToolCallCard**: Structured display for AI function/tool executions with status badges and argument inspect dialog.

---

## 📈 Quality & Testing Gates for New Additions

Every new component must satisfy the following checklist before merge:
1. **Zero Third-Party UI Dependencies**: Built strictly on existing native primitives (`Slot`, `Portal`, `FocusScope`, `Presence`).
2. **Behavior Test Suite**: Comprehensive tests in `tests/smoke.test.tsx` verifying StrictMode, SSR rendering, ref forwarding, and accessibility.
3. **Automated a11y Audit**: `axe-core` verification with 0 violations.
4. **Registry & Props Documentation**: Fully documented in `component.manifest.ts`, `component-registry.ts`, and `component-props.ts`.
5. **CLI Adder Parity**: Validated in `tests/parity.test.ts` for clean distribution via `npx mad-ui-components add <name>`.
