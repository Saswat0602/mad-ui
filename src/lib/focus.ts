import * as React from 'react'

// Focus trap for modals/dialogs
export function useFocusTrap(containerRef: React.RefObject<HTMLElement>, active: boolean = true) {
    React.useEffect(() => {
        if (!active || !containerRef.current) return

        const container = containerRef.current
        const focusableElements = container.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])'
        )

        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        const handleTabKey = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement?.focus()
                    e.preventDefault()
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement?.focus()
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

// Focus management hook - returns focus to previous element
export function useFocusReturn() {
    const previousActiveElement = React.useRef<HTMLElement | null>(null)

    React.useEffect(() => {
        previousActiveElement.current = document.activeElement as HTMLElement

        return () => {
            previousActiveElement.current?.focus()
        }
    }, [])
}

// Get all focusable elements within a container
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
    const elements = container.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])'
    )
    return Array.from(elements)
}

// Focus first element in container
export function focusFirst(container: HTMLElement) {
    const elements = getFocusableElements(container)
    elements[0]?.focus()
}

// Focus last element in container
export function focusLast(container: HTMLElement) {
    const elements = getFocusableElements(container)
    elements[elements.length - 1]?.focus()
}
