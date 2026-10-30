import * as React from "react"

export interface VirtualItem {
  index: number
  start: number
  size: number
}

export interface UseVirtualizerOptions {
  count: number
  itemHeight: number
  overscan?: number
  getScrollElement: () => HTMLElement | null
}

export interface UseVirtualizerReturn {
  virtualItems: VirtualItem[]
  totalSize: number
  scrollToIndex: (index: number) => void
}

/**
 * Zero-dependency virtual scrolling hook for high-performance rendering of large datasets.
 */
export function useVirtualizer({
  count,
  itemHeight,
  overscan = 4,
  getScrollElement,
}: UseVirtualizerOptions): UseVirtualizerReturn {
  const [scrollTop, setScrollTop] = React.useState(0)
  const [viewportHeight, setViewportHeight] = React.useState(0)

  React.useEffect(() => {
    const element = getScrollElement()
    if (!element) return

    const handleScroll = () => {
      setScrollTop(element.scrollTop)
    }

    const handleResize = () => {
      setViewportHeight(element.clientHeight)
    }

    handleScroll()
    handleResize()

    element.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize)

    return () => {
      element.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [getScrollElement])

  const totalSize = count * itemHeight

  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan)
  const endIndex = Math.min(
    count - 1,
    Math.ceil((scrollTop + viewportHeight) / itemHeight) + overscan
  )

  const virtualItems = React.useMemo(() => {
    if (count === 0 || viewportHeight === 0) return []
    const items: VirtualItem[] = []
    for (let i = startIndex; i <= endIndex; i++) {
      items.push({
        index: i,
        start: i * itemHeight,
        size: itemHeight,
      })
    }
    return items
  }, [count, startIndex, endIndex, itemHeight, viewportHeight])

  const scrollToIndex = React.useCallback(
    (index: number) => {
      const element = getScrollElement()
      if (!element) return
      element.scrollTop = index * itemHeight
    },
    [getScrollElement, itemHeight]
  )

  return {
    virtualItems,
    totalSize,
    scrollToIndex,
  }
}

