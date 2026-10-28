# Component Audit: Core and Forms

Files: [src/components/core/](../../../src/components/core), [src/components/forms/](../../../src/components/forms). Line numbers refer to the current `master`.

Reference points: Radix primitives and shadcn/ui for API and accessibility, MUI and Mantine for feature depth, react-day-picker for dates, input-otp for OTP.

## Summary

| Component | API style | forwardRef | Controlled and uncontrolled | A11y | Tokens / hardcoded | Key issue |
| --- | --- | --- | --- | --- | --- | --- |
| Button | Props plus `createVariants` | Yes | n/a | B | 1 / 32 | `asChild` declared, not implemented, leaks to DOM |
| Card | Compound | Yes | n/a | B | 0 / 29 | `clickable` has no keyboard semantics |
| Checkbox | Native input | Yes | Native only, no `onCheckedChange` | C | 6 / 5 | Check mark drawn only when controlled |
| Input | Props | Yes | Native | C | 4 / 16 | No `aria-invalid` |
| Label | Single | Yes | n/a | B | 1 / 0 | Fine |
| Progress | Props | Yes | n/a | B | 1 / 10 | No indeterminate state |
| Radio | Native input | Yes | Native | C | 2 / 7 | Dot drawn only when controlled |
| Rating | Props | Yes | Controlled only | D | 4 / 4 | `radiogroup` with no radios |
| Select | Compound, custom | Root is FC | Yes | **F** | 2 / 18 | No keyboard or roles, trigger cannot close |
| Skeleton | Props | Partly | n/a | C | 2 / 0 | `ref` and props dropped in lines mode |
| Slider | Monolithic, about 70 props | Yes | On paper | **F** | 0 / 28 | Drag does not work, range corrupts, vertical broken |
| Switch | Button plus hidden input | To input | Uncontrolled broken | D | 2 / 7 | No accessible name, `onChange` breaks state |
| Textarea | Props | Yes | Native | C | 2 / 16 | No `aria-invalid` |
| Accordion | `items` array | No | Uncontrolled only | D | 0 / 5 | Collapsed content still tabbable |
| Breadcrumbs | `items` array | Yes | n/a | D | Invalid CSS vars | Broken inline colors, `maxItems` bug |
| Calendar | Monolithic (really a date picker) | Ref never attached | Partial | **F** | Undefined vars / 50 | Month navigation skips months |
| DateTimePicker | Monolithic | No | Uncontrolled broken | **F** | 0 / 84 | Hour 1 missing, wrong leading days |
| InputOTP | Monolithic | No | Controlled only | D | 5 / 0 | Typed digits shift slots |
| RadioGroup | Compound via `cloneElement` | No | Controlled only | D | 7 / 0 | No arrow keys, unlabeled radios |
| Form | Compound, **not connected to react-hook-form** | No | n/a | **F** | 3 / 2 | Zero integration |
| Tabs | `items` array | Yes | Uncontrolled plus `onChange` | **F** | 0 / 51 | No tab roles, vertical broken |

## Critical defects (verified)

- **Slider drag never works.** [slider.tsx:196-209](../../../src/components/core/slider.tsx#L196-L209): `handleMouseDown` registers `handleMouseMove` from the current render, where `isDragging` is still `false`, so every move returns early. Range mode stores a scalar on track click (235, 245) and `range` with the default `defaultValue=0` yields `NaN` (100, 175). Vertical orientation still positions with `left`/`width` (184 to 190). About 50 declared props are not implemented and leak to the DOM (302).
- **Switch breaks when `onChange` is passed.** [switch.tsx:81-82](../../../src/components/core/switch.tsx#L81-L82): `{...props}` comes after `onChange={handleChange}`, so a consumer handler replaces the internal one and uncontrolled state never updates. `role="switch"` is on a button while the label points at the hidden input, so the switch has no accessible name and two tab stops.
- **Select has no keyboard support.** [select.tsx](../../../src/components/core/select.tsx): items are non-focusable `div`s (171 to 180), no `listbox`/`option` roles, no `aria-expanded`, no arrows, Escape or typeahead. The document `mousedown` handler closes the menu, then the trigger `onClick` reopens it (98, 131 to 145). `SelectValue` shows the raw value, not the label (119). No hidden input, so it does not submit with a form.
- **DateTimePicker hours are wrong.** [datetime-picker.tsx:318-319](../../../src/components/forms/datetime-picker.tsx#L318-L319): 12-hour options are `12, 2, 3 ... 12`. Hour 1 is missing and 12 appears twice. Leading days use `new Date(y, m - 1, 0)` (107), which is two months back. Uncontrolled mode never displays a selection (66, 444). Cancel cannot revert because `onChange` fires on every edit. 84 hardcoded color classes, no dark mode.
- **InputOTP shifts digits.** [input-otp.tsx:46-48](../../../src/components/forms/input-otp.tsx#L46-L48): typing into slot 3 of an empty value does `"".split("")`, assigns index 3, then `join("")` collapses the holes and the digit lands in slot 0. Backspace in the middle shifts later digits left. No `autoComplete="one-time-code"`.
- **Form is not a react-hook-form integration.** [react-hook-form.tsx](../../../src/components/forms/react-hook-form.tsx) imports only React and `cn`. `react-hook-form` is not a dependency. `FormField` only sets `data-field` (61). No context, no generated ids, no `aria-invalid`/`aria-describedby`. `FormMessage` does not read errors. The file name promises something it does not do.
- **Calendar month navigation skips months.** [calendar.tsx:218-222](../../../src/components/forms/calendar.tsx#L218-L222): `setMonth` on the 31st overflows into the following month. `ref` is never attached, `...props` never spread, `locale` and `showWeekNumbers` unused, month and day names hardcoded English, duplicate React keys `"T"` and `"S"` (483 to 485).
- **Tabs are not tabs.** [tabs.tsx](../../../src/components/forms/tabs.tsx): no `tablist`/`tab`/`tabpanel` roles, no `aria-selected`, no arrow keys, no controlled `value`. Vertical layout is broken (138 to 144). A badge value of `0` renders a bare "0" (171).

## Other findings by component

- **Button**: `asChild` declared (13) but never destructured, so it reaches `<button>` and React warns. Spinner lacks `aria-hidden`, no `aria-busy`.
- **Card**: `CardTitle` ref typed `HTMLParagraphElement` but renders `h3` (52). Uses zinc, not `bg-card`.
- **Checkbox / Radio**: native input without `appearance-none`. The custom mark renders only when `props.checked` is set (checkbox 60, radio 47), so uncontrolled mode shows the native control and controlled mode draws two. `peer-disabled` on a non-sibling label never fires. No indeterminate state.
- **Input / Textarea**: `error` only changes color, no `aria-invalid`. Textarea duplicates Input's classes by hand. With icons, `className` goes to the inner input, not the wrapper.
- **Progress**: `aria-valuenow` is unclamped (60). Label not linked with `aria-labelledby`.
- **Rating**: buttons inside `role="radiogroup"` with no `role="radio"`. `precision=0.5` can never be selected (71).
- **Skeleton**: with `lines > 1`, `ref` and `...props` are dropped (33 to 49). No `aria-hidden`.
- **Accordion**: animates with inline `height` from `scrollHeight` (75 to 79), so the `--radix-accordion-content-height` keyframes in `tailwind.config.js` are dead. Collapsed panels stay in tab order (no `hidden` or `inert`). No `type="button"`, so it submits enclosing forms. `customIcon` typed `ComponentType`, which [AGENTS.md](../../../AGENTS.md) section 4 forbids.
- **Breadcrumbs**: inline styles use `hsl(var(--color-card))` (86 to 136), but `--color-*` is not defined by the library. In the docs it resolves to a hex value, so `hsl(#fff)` is invalid CSS. `maxItems <= 2` returns all items (147). Emoji home icon fallback (259). No `aria-current="page"`, no `ol`/`li`. Belongs in navigation.
- **RadioGroup**: every radio `tabIndex=0` (91), no arrow keys, labels not associated (99), `aria-disabled` without `disabled`. `child.type === RadioGroupItem` (39) fails for wrapped items.

## Lib and icons

- `focus.ts`, `keyboard.ts`, `portal.tsx` and `src/icons/index.tsx` are imported by nothing. The icons are 23 hand-drawn SVGs duplicating `lucide-react`, which is already a dependency.
- `colors.ts` is imported (unused) only by calendar and breadcrumbs, yet publicly exported from the root.
- `utils.ts` exports a module-counter `useId` (68 to 72) under the same name as React's hook. It is not SSR safe. `isReactNative` (38) is true in Node versions before 21, where `navigator` is undefined.

## Cross-cutting

1. 23 buttons in `forms/` lack `type="button"` and submit enclosing forms.
2. Consumer handlers replace internal ones (Select, Switch). Handlers are never composed.
3. No component sets `aria-invalid` or `aria-describedby`.
4. `peer-disabled:` used without a sibling peer in Checkbox, Radio, Switch, RadioGroup and Form, so it never applies.
5. No popover is portaled (Select, Calendar, DateTimePicker), so all get clipped by `overflow-hidden` ancestors.
6. Duplicates: Radio vs RadioGroup, Calendar vs DateTimePicker.
7. Biggest gaps vs shadcn and Radix: Slot / `asChild`, uniform `value` / `defaultValue` / `onValueChange`, roving focus, typeahead, hidden inputs for form submission, a real `Form`, an inline Calendar with range selection.
