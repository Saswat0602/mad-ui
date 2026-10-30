import * as React from 'react'

export interface PresenceProps {
  present: boolean
  children: React.ReactNode | ((props: { present: boolean }) => React.ReactNode)
}

/**
 * Headless Presence primitive to support animated unmounting transitions.
 * Keeps elements in DOM while animations run.
 */
export const Presence: React.FC<PresenceProps> = ({ present, children }) => {
  const [mounted, setMounted] = React.useState(present)

  React.useEffect(() => {
    if (present) {
      setMounted(true)
    } else {
      // Allow CSS transitions to finish before unmounting
      const timer = setTimeout(() => {
        setMounted(false)
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [present])

  if (!mounted) return null

  if (typeof children === 'function') {
    return <>{children({ present })}</>
  }

  return <>{children}</>
}
Presence.displayName = 'Presence'
