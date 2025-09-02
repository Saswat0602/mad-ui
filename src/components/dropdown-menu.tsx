import React, { useState, useRef, useEffect } from 'react'
import { cn } from '../lib/utils'

export interface DropdownMenuProps {
  children: React.ReactNode
  className?: string
}

export interface DropdownMenuTriggerProps {
  children: React.ReactNode
  asChild?: boolean
  className?: string
}

export interface DropdownMenuContentProps {
  children: React.ReactNode
  className?: string
  align?: 'start' | 'center' | 'end'
  side?: 'top' | 'right' | 'bottom' | 'left'
  sideOffset?: number
}

export interface DropdownMenuItemProps {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  onClick?: () => void
}

export interface DropdownMenuSeparatorProps {
  className?: string
}

export interface DropdownMenuLabelProps {
  children: React.ReactNode
  className?: string
}

export interface DropdownMenuGroupProps {
  children: React.ReactNode
  className?: string
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('relative inline-block', className)}>
      {children}
    </div>
  )
}

export const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({
  children,
  asChild = false,
  className
}) => {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(children.props.className, className)
    })
  }
  
  return (
    <div className={cn('inline-block', className)}>
      {children}
    </div>
  )
}

export const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({
  children,
  className,
  align = 'center',
  side = 'bottom',
  sideOffset = 4
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const triggerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const alignClasses = {
    start: 'left-0',
    center: 'left-1/2 -translate-x-1/2',
    end: 'right-0'
  }

  const sideClasses = {
    top: 'bottom-full mb-2',
    right: 'left-full ml-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2'
  }

  const handleTriggerClick = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      setPosition({ x: rect.left, y: rect.top })
      setIsOpen(!isOpen)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <>
      <div ref={triggerRef} onClick={handleTriggerClick}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              onClick: (e: React.MouseEvent) => {
                e.stopPropagation()
                handleTriggerClick()
                if (child.props.onClick) {
                  child.props.onClick(e)
                }
              }
            })
          }
          return child
        })}
      </div>
      {isOpen && (
        <div
          ref={contentRef}
          className={cn(
            'absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
            alignClasses[align],
            sideClasses[side],
            className
          )}
          style={{
            left: position.x,
            top: position.y
          }}
        >
          {children}
        </div>
      )}
    </>
  )
}

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  children,
  className,
  disabled = false,
  onClick
}) => {
  return (
    <div
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors',
        disabled
          ? 'pointer-events-none opacity-50'
          : 'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
        className
      )}
      onClick={disabled ? undefined : onClick}
    >
      {children}
    </div>
  )
}

export const DropdownMenuSeparator: React.FC<DropdownMenuSeparatorProps> = ({
  className
}) => {
  return (
    <div className={cn('-mx-1 my-1 h-px bg-muted', className)} />
  )
}

export const DropdownMenuLabel: React.FC<DropdownMenuLabelProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('px-2 py-1.5 text-sm font-semibold', className)}>
      {children}
    </div>
  )
}

export const DropdownMenuGroup: React.FC<DropdownMenuGroupProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('p-1', className)}>
      {children}
    </div>
  )
}
