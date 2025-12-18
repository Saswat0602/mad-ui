import * as React from 'react'

export const KEYS = {
    ENTER: 'Enter',
    SPACE: ' ',
    ESCAPE: 'Escape',
    ARROW_UP: 'ArrowUp',
    ARROW_DOWN: 'ArrowDown',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
    TAB: 'Tab',
    HOME: 'Home',
    END: 'End',
    PAGE_UP: 'PageUp',
    PAGE_DOWN: 'PageDown',
} as const

export type KeyboardNavigationOptions = {
    onEnter?: () => void
    onSpace?: () => void
    onEscape?: () => void
    onArrowUp?: () => void
    onArrowDown?: () => void
    onArrowLeft?: () => void
    onArrowRight?: () => void
    onHome?: () => void
    onEnd?: () => void
    onTab?: (shiftKey: boolean) => void
}

export function useKeyboardNavigation(options: KeyboardNavigationOptions) {
    return React.useCallback((e: React.KeyboardEvent) => {
        switch (e.key) {
            case KEYS.ENTER:
                options.onEnter?.()
                break
            case KEYS.SPACE:
                e.preventDefault()
                options.onSpace?.()
                break
            case KEYS.ESCAPE:
                options.onEscape?.()
                break
            case KEYS.ARROW_UP:
                e.preventDefault()
                options.onArrowUp?.()
                break
            case KEYS.ARROW_DOWN:
                e.preventDefault()
                options.onArrowDown?.()
                break
            case KEYS.ARROW_LEFT:
                options.onArrowLeft?.()
                break
            case KEYS.ARROW_RIGHT:
                options.onArrowRight?.()
                break
            case KEYS.HOME:
                e.preventDefault()
                options.onHome?.()
                break
            case KEYS.END:
                e.preventDefault()
                options.onEnd?.()
                break
            case KEYS.TAB:
                options.onTab?.(e.shiftKey)
                break
        }
    }, [options])
}

// Hook for roving tabindex pattern (for lists, menus, etc.)
export function useRovingTabIndex(
    items: React.RefObject<HTMLElement>[],
    options?: {
        orientation?: 'horizontal' | 'vertical'
        loop?: boolean
    }
) {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const orientation = options?.orientation || 'vertical'
    const loop = options?.loop ?? true

    const focusItem = React.useCallback((index: number) => {
        if (index >= 0 && index < items.length) {
            items[index].current?.focus()
            setCurrentIndex(index)
        }
    }, [items])

    const handleKeyDown = React.useCallback((e: React.KeyboardEvent) => {
        const nextKey = orientation === 'vertical' ? KEYS.ARROW_DOWN : KEYS.ARROW_RIGHT
        const prevKey = orientation === 'vertical' ? KEYS.ARROW_UP : KEYS.ARROW_LEFT

        if (e.key === nextKey) {
            e.preventDefault()
            const nextIndex = currentIndex + 1
            if (nextIndex < items.length) {
                focusItem(nextIndex)
            } else if (loop) {
                focusItem(0)
            }
        } else if (e.key === prevKey) {
            e.preventDefault()
            const prevIndex = currentIndex - 1
            if (prevIndex >= 0) {
                focusItem(prevIndex)
            } else if (loop) {
                focusItem(items.length - 1)
            }
        } else if (e.key === KEYS.HOME) {
            e.preventDefault()
            focusItem(0)
        } else if (e.key === KEYS.END) {
            e.preventDefault()
            focusItem(items.length - 1)
        }
    }, [currentIndex, items, focusItem, orientation, loop])

    return {
        currentIndex,
        setCurrentIndex,
        handleKeyDown,
        focusItem,
    }
}
