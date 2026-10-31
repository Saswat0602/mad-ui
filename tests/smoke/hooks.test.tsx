import React, { StrictMode, useRef } from 'react'
import { render, fireEvent, renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { Slot } from '../../src/primitives/slot'
import { Portal } from '../../src/primitives/portal'
import { Presence } from '../../src/primitives/presence'
import { ThemeProvider, useTheme } from '../../src/theme/theme-provider'
import {
  useControllableState,
  useId,
  useVirtualizer,
  useClipboard,
  useHotkeys,
  useDebounce,
  useLocalStorage,
  useClickOutside,
  useMediaQuery
} from '../../src/hooks'

describe('Hooks & Headless Primitives Smoke Suite', () => {
  it('Slot merges props and classes with single child', () => {
    const { getByRole } = render(
      <Slot className="text-blue-500" data-slot="true">
        <button type="button" className="px-4">Click</button>
      </Slot>
    )
    const btn = getByRole('button')
    expect(btn.getAttribute('data-slot')).toBe('true')
    expect(btn.className).toContain('text-blue-500')
    expect(btn.className).toContain('px-4')
  })

  it('Portal renders into document body', () => {
    const { getByTestId } = render(
      <Portal>
        <div data-testid="portal-element">Portaled content</div>
      </Portal>
    )
    const el = getByTestId('portal-element')
    expect(document.body.contains(el)).toBe(true)
  })

  it('Presence renders content when present is true', () => {
    const { getByText } = render(
      <Presence present={true}>
        <div>Presence Item</div>
      </Presence>
    )
    expect(getByText('Presence Item')).toBeDefined()
  })

  it('useControllableState handles uncontrolled and controlled values', () => {
    const { result } = renderHook(() =>
      useControllableState<string>({ defaultProp: 'initial' })
    )
    expect(result.current[0]).toBe('initial')

    act(() => {
      result.current[1]('updated')
    })
    expect(result.current[0]).toBe('updated')
  })

  it('useId returns provided ID or generates prefix', () => {
    const { result: r1 } = renderHook(() => useId('my-id'))
    expect(r1.current).toBe('my-id')

    const { result: r2 } = renderHook(() => useId())
    expect(typeof r2.current).toBe('string')
    expect(r2.current.length).toBeGreaterThan(0)
  })

  it('ThemeProvider provides theme context and updates document theme', () => {
    function Consumer() {
      const { theme, setTheme } = useTheme()
      return (
        <div>
          <span data-testid="theme-name">{theme}</span>
          <button type="button" onClick={() => setTheme('dark')}>Set Dark</button>
        </div>
      )
    }

    const { getByTestId, getByText } = render(
      <ThemeProvider defaultTheme="light">
        <Consumer />
      </ThemeProvider>
    )

    expect(getByTestId('theme-name').textContent).toBe('light')
    fireEvent.click(getByText('Set Dark'))
    expect(getByTestId('theme-name').textContent).toBe('dark')
  })

  it('useVirtualizer computes virtual totalSize and scroll positions', () => {
    const mockElement = document.createElement('div')
    Object.defineProperty(mockElement, 'clientHeight', { value: 400, configurable: true })
    Object.defineProperty(mockElement, 'scrollTop', { value: 0, configurable: true })

    const { result } = renderHook(() =>
      useVirtualizer({
        count: 50,
        itemHeight: 40,
        overscan: 2,
        getScrollElement: () => mockElement,
      })
    )

    expect(result.current.totalSize).toBe(50 * 40)
    expect(typeof result.current.scrollToIndex).toBe('function')
  })

  it('useClipboard handles copy state', () => {
    const { result } = renderHook(() => useClipboard({ timeout: 1000 }))
    expect(result.current.copied).toBe(false)
    expect(typeof result.current.copy).toBe('function')
  })

  it('useHotkeys listens to keyboard shortcuts', () => {
    let hotkeyTriggered = false
    renderHook(() =>
      useHotkeys('mod+k', () => { hotkeyTriggered = true })
    )
    window.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'k', metaKey: true })
    )
    expect(hotkeyTriggered).toBe(true)
  })

  it('useDebounce debounces rapid value updates', () => {
    const { result, rerender } = renderHook(
      ({ val }) => useDebounce(val, 50),
      { initialProps: { val: 'first' } }
    )
    expect(result.current).toBe('first')
    rerender({ val: 'second' })
    expect(result.current).toBe('first')
  })

  it('useLocalStorage manages and updates persistent state', () => {
    const { result } = renderHook(() =>
      useLocalStorage('test-smoke-token', 'initial-token')
    )
    expect(result.current[0]).toBe('initial-token')
    act(() => {
      result.current[1]('updated-token')
    })
    expect(result.current[0]).toBe('updated-token')
  })

  it('useClickOutside triggers callback on outside click', () => {
    let clickedOutside = false
    function TestComponent() {
      const ref = useRef<HTMLDivElement>(null)
      useClickOutside(ref, () => {
        clickedOutside = true
      })
      return (
        <div>
          <div ref={ref} data-testid="inside">Inside</div>
          <div data-testid="outside">Outside</div>
        </div>
      )
    }

    const { getByTestId } = render(<TestComponent />)
    fireEvent.mouseDown(getByTestId('inside'))
    expect(clickedOutside).toBe(false)

    fireEvent.mouseDown(getByTestId('outside'))
    expect(clickedOutside).toBe(true)
  })

  it('useMediaQuery returns boolean state based on window.matchMedia', () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'))
    expect(typeof result.current).toBe('boolean')
  })
})
