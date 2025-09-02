import React, { useState } from 'react'
import { cn } from '../lib/utils'

export interface CollapsibleProps {
  children: React.ReactNode
  className?: string
  defaultOpen?: boolean
}

export interface CollapsibleTriggerProps {
  children: React.ReactNode
  asChild?: boolean
  className?: string
  onClick?: () => void
}

export interface CollapsibleContentProps {
  children: React.ReactNode
  className?: string
}

export const Collapsible: React.FC<CollapsibleProps> = ({
  children,
  className,
  defaultOpen = false
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className={cn('w-full', className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === CollapsibleTrigger) {
            return React.cloneElement(child, {
              onClick: () => setIsOpen(!isOpen)
            })
          }
          if (child.type === CollapsibleContent) {
            return React.cloneElement(child, {
              isOpen
            })
          }
        }
        return child
      })}
    </div>
  )
}

export const CollapsibleTrigger: React.FC<CollapsibleTriggerProps> = ({
  children,
  asChild = false,
  className,
  onClick
}) => {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(children.props.className, className),
      onClick
    })
  }
  
  return (
    <button
      type="button"
      className={cn(
        'flex w-full items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export const CollapsibleContent: React.FC<CollapsibleContentProps & { isOpen?: boolean }> = ({
  children,
  className,
  isOpen
}) => {
  if (!isOpen) return null

  return (
    <div
      className={cn(
        'overflow-hidden text-sm transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down',
        className
      )}
    >
      <div className="pb-4 pt-0">
        {children}
      </div>
    </div>
  )
}
