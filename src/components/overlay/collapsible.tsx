import React from 'react'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import { cn } from '../../lib/utils'

export interface CollapsibleProps extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root> {
  onToggle?: (isOpen: boolean) => void
  onExpand?: () => void
  onCollapse?: () => void
}

export const Collapsible = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Root>,
  CollapsibleProps
>(({ onToggle, onExpand, onCollapse, onOpenChange, ...props }, ref) => {
  const handleOpenChange = (open: boolean) => {
    onOpenChange?.(open)
    onToggle?.(open)
    if (open) {
      onExpand?.()
    } else {
      onCollapse?.()
    }
  }

  return (
    <CollapsiblePrimitive.Root
      ref={ref}
      onOpenChange={handleOpenChange}
      {...props}
    />
  )
})
Collapsible.displayName = CollapsiblePrimitive.Root.displayName

export interface CollapsibleTriggerProps
  extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleTrigger> {}

export const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleTrigger>,
  CollapsibleTriggerProps
>(({ className, ...props }, ref) => (
  <CollapsiblePrimitive.CollapsibleTrigger
    ref={ref}
    className={cn(
      'flex items-center justify-between font-medium transition-all outline-none',
      className
    )}
    {...props}
  />
))
CollapsibleTrigger.displayName = CollapsiblePrimitive.CollapsibleTrigger.displayName

export interface CollapsibleContentProps
  extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent> {}

export const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleContent>,
  CollapsibleContentProps
>(({ className, ...props }, ref) => (
  <CollapsiblePrimitive.CollapsibleContent
    ref={ref}
    className={cn(
      'overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down',
      className
    )}
    {...props}
  />
))
CollapsibleContent.displayName = CollapsiblePrimitive.CollapsibleContent.displayName

export default Collapsible
