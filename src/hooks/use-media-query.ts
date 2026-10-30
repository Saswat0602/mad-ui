import * as React from 'react'

/**
 * Hook to evaluate and react to CSS media queries with SSR safety.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = React.useState(false)

  React.useEffect(() => {
    if (typeof window === 'undefined') return

    const media = window.matchMedia(query)
    setMatches(media.matches)

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    if (media.addEventListener) {
      media.addEventListener('change', listener)
      return () => media.removeEventListener('change', listener)
    } else {
      // Legacy compatibility
      media.addListener(listener)
      return () => media.removeListener(listener)
    }
  }, [query])

  return matches
}

