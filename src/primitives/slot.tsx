import * as React from 'react'
import { cn } from '../lib/utils'
import { composeEventHandlers } from '../lib/compose-event-handlers'

export interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

/**
 * Headless Slot component for delegating props to the immediate child component.
 * Powers polymorphic `asChild` prop in Mad UI without any external dependencies.
 */
export const Slot = React.forwardRef<HTMLElement, SlotProps>((props, forwardedRef) => {
  const { children, ...slotProps } = props

  if (React.isValidElement(children)) {
    const childProps = children.props as Record<string, any>
    const mergedProps: Record<string, any> = { ...slotProps }

    // Merge classNames
    if (slotProps.className || childProps.className) {
      mergedProps.className = cn(slotProps.className, childProps.className)
    }

    // Merge styles
    if (slotProps.style || childProps.style) {
      mergedProps.style = { ...childProps.style, ...slotProps.style }
    }

    // Compose event handlers
    for (const propName in slotProps) {
      if (/^on[A-Z]/.test(propName)) {
        if (typeof childProps[propName] === 'function') {
          mergedProps[propName] = composeEventHandlers(
            childProps[propName],
            (slotProps as any)[propName]
          )
        }
      }
    }

    // Merge refs safely
    const childRef = (children as any).ref
    mergedProps.ref = (node: HTMLElement | null) => {
      if (typeof forwardedRef === 'function') {
        forwardedRef(node)
      } else if (forwardedRef) {
        (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node
      }

      if (typeof childRef === 'function') {
        childRef(node)
      } else if (childRef) {
        childRef.current = node
      }
    }

    return React.cloneElement(children, {
      ...childProps,
      ...mergedProps,
    })
  }

  return null
})
Slot.displayName = 'Slot'

export const Slottable = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}
