import * as React from 'react'

export interface UseRovingTabIndexOptions {
  orientation?: 'horizontal' | 'vertical' | 'both'
  loop?: boolean
}

export function useRovingTabIndex<T extends HTMLElement>(
  itemCount: number,
  options: UseRovingTabIndexOptions = {}
) {
  const { orientation = 'horizontal', loop = true } = options
  const [activeIndex, setActiveIndex] = React.useState(0)
  const itemRefs = React.useRef<(T | null)[]>([])

  const registerItem = React.useCallback((index: number, element: T | null) => {
    itemRefs.current[index] = element
  }, [])

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      const isHorizontal = orientation === 'horizontal' || orientation === 'both'
      const isVertical = orientation === 'vertical' || orientation === 'both'

      let nextIndex = activeIndex

      if ((isHorizontal && e.key === 'ArrowRight') || (isVertical && e.key === 'ArrowDown')) {
        e.preventDefault()
        nextIndex = loop ? (activeIndex + 1) % itemCount : Math.min(activeIndex + 1, itemCount - 1)
      } else if ((isHorizontal && e.key === 'ArrowLeft') || (isVertical && e.key === 'ArrowUp')) {
        e.preventDefault()
        nextIndex = loop ? (activeIndex - 1 + itemCount) % itemCount : Math.max(activeIndex - 1, 0)
      } else if (e.key === 'Home') {
        e.preventDefault()
        nextIndex = 0
      } else if (e.key === 'End') {
        e.preventDefault()
        nextIndex = itemCount - 1
      }

      if (nextIndex !== activeIndex) {
        setActiveIndex(nextIndex)
        itemRefs.current[nextIndex]?.focus()
      }
    },
    [activeIndex, itemCount, loop, orientation]
  )

  const getTabIndex = React.useCallback(
    (index: number) => {
      return index === activeIndex ? 0 : -1
    },
    [activeIndex]
  )

  return {
    activeIndex,
    setActiveIndex,
    registerItem,
    handleKeyDown,
    getTabIndex,
  }
}
