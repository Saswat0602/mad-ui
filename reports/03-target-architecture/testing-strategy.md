# Target Testing Strategy

Today there are zero tests. The claims in the README ("accessible by design", "WAI-ARIA authoring practices", "enterprise-grade") have nothing behind them. This is the minimum test pyramid that makes those claims verifiable.

## Layers

| Layer | Tool | Runs | What it proves |
| --- | --- | --- | --- |
| Unit and behavior | Vitest, `@testing-library/react`, `@testing-library/user-event`, jsdom | Every PR, under 60s | Props, controlled and uncontrolled state, events, keyboard maps |
| Automated a11y | `vitest-axe` (axe-core) | Every PR | No detectable ARIA or labeling violations in each story state |
| Real browser interaction | Playwright component tests, or Storybook test runner | Every PR | Focus trap, focus restore, scroll lock, positioning, pointer events that jsdom fakes badly |
| Visual regression | Playwright screenshots of workbench stories (or Chromatic) | Every PR | No unintended style change, light and dark, LTR and RTL |
| SSR | `renderToString` for every component | Every PR | No `window` or `document` access during render, no hydration-unsafe ids |
| RSC | Next.js fixture app built in CI | Every PR | Every export can be imported from a Server Component |
| Types | `expectTypeOf` tests, `tsc` against React 18 and 19 types | Every PR | Public prop types, ref types, generic DataTable inference |
| Manual screen reader pass | NVDA plus Firefox, VoiceOver plus Safari | Before each minor release | What automation cannot catch: announcement wording and order |

## Required tests per component

Every component folder ships `<name>.test.tsx` covering this checklist. A PR that adds a component without it fails review.

- Renders with default props and matches the ARIA pattern (roles, `aria-*` attributes).
- Forwards `ref` to the documented element.
- Merges `className` and spreads unknown props onto the root.
- Controlled mode: `value` plus `onValueChange` (or `open`, `checked`) round-trip.
- Uncontrolled mode: `defaultValue` works without handlers.
- Keyboard map from the WAI-ARIA APG pattern, one test per key.
- Disabled state blocks interaction and sets `aria-disabled` or `disabled`.
- `axe` reports no violations in default, open and disabled states.
- `renderToString` does not throw.

## Example

```tsx
// packages/react/src/components/dialog/dialog.test.tsx
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { axe } from "vitest-axe"
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "."

function Fixture() {
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogTitle>Invite member</DialogTitle>
        <input aria-label="Email" />
      </DialogContent>
    </Dialog>
  )
}

test("traps focus, closes on Escape, restores focus to trigger", async () => {
  const user = userEvent.setup()
  render(<Fixture />)
  const trigger = screen.getByRole("button", { name: "Open" })

  await user.click(trigger)
  const dialog = screen.getByRole("dialog", { name: "Invite member" })
  expect(dialog).toHaveAttribute("aria-modal", "true")
  expect(screen.getByLabelText("Email")).toHaveFocus()

  await user.tab()
  expect(dialog).toContainElement(document.activeElement as HTMLElement)

  await user.keyboard("{Escape}")
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  expect(trigger).toHaveFocus()
})

test("has no axe violations when open", async () => {
  const user = userEvent.setup()
  const { container } = render(<Fixture />)
  await user.click(screen.getByRole("button", { name: "Open" }))
  expect(await axe(container)).toHaveNoViolations()
})
```

## Bugs found in this audit that tests would have caught

| Bug | Test that catches it |
| --- | --- |
| Table hook-order crash when `data` goes from `undefined` to an array | Rerender test with changing `data` |
| Avatar shows image and fallback together in compound mode | Render test asserting one visible child |
| Carousel renders zero slides inside `CarouselContent` | Render test with the documented markup |
| Toast reopened in controlled mode stays invisible | Controlled round-trip test |
| Chart overflows and divides by zero on empty data | Edge-case render tests |
| Missing `"use client"` in dist | RSC fixture build |
| `mad-ui-components/alert` not resolvable | Export smoke test |

## Coverage targets

- Phase 1: every component has the smoke and SSR tests (fast to add, catches crashes).
- Phase 2: every interactive component has the full checklist.
- Ongoing: line coverage is not the metric. The metric is "every APG keyboard interaction has a test".
