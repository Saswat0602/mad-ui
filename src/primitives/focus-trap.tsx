import * as React from 'react'
import { useFocusTrap } from '../hooks/use-focus-trap'

export interface FocusTrapProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean
  children: React.ReactNode
}

/**
 * Declarative FocusTrap component wrapper around useFocusTrap hook.
 */
export const FocusTrap = React.forwardRef<HTMLDivElement, FocusTrapProps>(
  ({ active = true, children, ...props }, ref) => {
    const internalRef = React.useRef<HTMLDivElement | null>(null)

    useFocusTrap(internalRef as React.RefObject<HTMLElement>, active)

    return (
      <div
        ref={(node) => {
          internalRef.current = node
          if (typeof ref === 'function') ref(node)
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node
        }}
        {...props}
      >
        {children}
      </div>
    )
  }
)
FocusTrap.displayName = 'FocusTrap'
