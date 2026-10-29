"use client"

import React, { createContext, useContext, forwardRef } from 'react'
import { cn } from '../../lib/utils'
import { Slot } from '../../lib/slot'
import { useControllableState } from '../../lib/use-controllable-state'

interface CollapsibleContextValue {
  open: boolean
  setOpen: (open: boolean) => void
  disabled?: boolean
}

const CollapsibleContext = createContext<CollapsibleContextValue | null>(null)

function useCollapsibleContext() {
  const ctx = useContext(CollapsibleContext)
  if (!ctx) {
    throw new Error('Collapsible compound components must be used within a Collapsible')
  }
  return ctx
}

export interface CollapsibleProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  onToggle?: (isOpen: boolean) => void
  onExpand?: () => void
  onCollapse?: () => void
  disabled?: boolean
}

export const Collapsible = forwardRef<HTMLDivElement, CollapsibleProps>(
  (
    {
      open: controlledOpen,
      defaultOpen = false,
      onOpenChange,
      onToggle,
      onExpand,
      onCollapse,
      disabled = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useControllableState<boolean>({
      prop: controlledOpen,
      defaultProp: defaultOpen,
      onChange: (nextOpen) => {
        onOpenChange?.(nextOpen)
        onToggle?.(nextOpen)
        if (nextOpen) {
          onExpand?.()
        } else {
          onCollapse?.()
        }
      },
    })

    return (
      <CollapsibleContext.Provider value={{ open, setOpen, disabled }}>
        <div
          ref={ref}
          data-state={open ? 'open' : 'closed'}
          className={cn('w-full', className)}
          {...props}
        >
          {children}
        </div>
      </CollapsibleContext.Provider>
    )
  }
)
Collapsible.displayName = 'Collapsible'

export interface CollapsibleTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export const CollapsibleTrigger = forwardRef<HTMLButtonElement, CollapsibleTriggerProps>(
  ({ asChild = false, onClick, children, className, ...props }, ref) => {
    const { open, setOpen, disabled } = useCollapsibleContext()
    const Comp = asChild ? Slot : 'button'

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e)
      if (!e.defaultPrevented && !disabled) {
        setOpen(!open)
      }
    }

    return (
      <Comp
        ref={ref as any}
        type={asChild ? undefined : 'button'}
        aria-expanded={open}
        disabled={disabled}
        data-state={open ? 'open' : 'closed'}
        onClick={handleClick}
        className={cn(
          'flex items-center justify-between font-medium transition-all outline-none cursor-pointer',
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
CollapsibleTrigger.displayName = 'CollapsibleTrigger'

export interface CollapsibleContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CollapsibleContent = forwardRef<HTMLDivElement, CollapsibleContentProps>(
  ({ className, children, ...props }, ref) => {
    const { open } = useCollapsibleContext()

    return (
      <div
        ref={ref}
        data-state={open ? 'open' : 'closed'}
        className={cn(
          'grid transition-all duration-200 ease-in-out',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
        )}
      >
        <div className="overflow-hidden">
          <div className={cn('overflow-hidden', className)} {...props}>
            {children}
          </div>
        </div>
      </div>
    )
  }
)
CollapsibleContent.displayName = 'CollapsibleContent'

export default Collapsible
