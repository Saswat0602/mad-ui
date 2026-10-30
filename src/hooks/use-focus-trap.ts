import * as React from 'react'

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])'

/**
 * Focus trap hook for modals, dialogs, drawers, and overlays.
 * Traps Tab and Shift-Tab navigation and returns focus upon unmounting.
 */
export function useFocusTrap(
  containerRef: React.RefObject<HTMLElement | null>,
  active: boolean = true
) {
  React.useEffect(() => {
    if (!active || !containerRef.current) return

    const container = containerRef.current
    const focusableElements = container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      const currentFocusables = container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      const first = currentFocusables[0]
      const last = currentFocusables[currentFocusables.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          last?.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === last) {
          first?.focus()
          e.preventDefault()
        }
      }
    }

    container.addEventListener('keydown', handleTabKey)
    firstElement?.focus()

    return () => {
      container.removeEventListener('keydown', handleTabKey)
    }
  }, [containerRef, active])
}

/**
 * Focus management hook - remembers and restores focus to previous element upon unmount.
 */
export function useFocusReturn() {
  const previousActiveElement = React.useRef<HTMLElement | null>(null)

  React.useEffect(() => {
    previousActiveElement.current = document.activeElement as HTMLElement

    return () => {
      previousActiveElement.current?.focus()
    }
  }, [])
}

/**
 * Get all focusable elements within a container.
 */
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const elements = container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
  return Array.from(elements)
}

/**
 * Focus first element in container.
 */
export function focusFirst(container: HTMLElement) {
  const elements = getFocusableElements(container)
  elements[0]?.focus()
}

/**
 * Focus last element in container.
 */
export function focusLast(container: HTMLElement) {
  const elements = getFocusableElements(container)
  elements[elements.length - 1]?.focus()
}
