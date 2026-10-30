import * as React from 'react'

/**
 * Hook to detect clicks outside one or multiple referenced elements.
 */
export function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null> | React.RefObject<T> | Array<React.RefObject<T | null> | React.RefObject<T>>,
  handler: (event: MouseEvent | TouchEvent) => void,
  active: boolean = true
) {
  React.useEffect(() => {
    if (!active) return

    const listener = (event: MouseEvent | TouchEvent) => {
      const refs = Array.isArray(ref) ? ref : [ref]
      const isInside = refs.some((r) => {
        const el = r.current
        return el && el.contains(event.target as Node)
      })

      if (isInside) {
        return
      }
      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler, active])
}

