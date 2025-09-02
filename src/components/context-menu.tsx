import React, { useState, useRef, useEffect } from 'react'
import { cn } from '../lib/utils'

export interface ContextMenuProps {
  children: React.ReactNode
  className?: string
}

export interface ContextMenuTriggerProps {
  children: React.ReactNode
  asChild?: boolean
  className?: string
}

export interface ContextMenuContentProps {
  children: React.ReactNode
  className?: string
  align?: 'start' | 'center' | 'end'
  side?: 'top' | 'right' | 'bottom' | 'left'
  sideOffset?: number
}

export interface ContextMenuItemProps {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  onClick?: () => void
}

export interface ContextMenuSeparatorProps {
  className?: string
}

export interface ContextMenuLabelProps {
  children: React.ReactNode
  className?: string
}

export interface ContextMenuGroupProps {
  children: React.ReactNode
  className?: string
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('relative inline-block', className)}>
      {children}
    </div>
  )
}

export const ContextMenuTrigger: React.FC<ContextMenuTriggerProps> = ({
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

export const ContextMenuContent: React.FC<ContextMenuContentProps> = ({
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

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    setPosition({ x: e.clientX, y: e.clientY })
    setIsOpen(true)
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
      <div ref={triggerRef} onContextMenu={handleContextMenu}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              onContextMenu: (e: React.MouseEvent) => {
                e.preventDefault()
                handleContextMenu(e)
                if (child.props.onContextMenu) {
                  child.props.onContextMenu(e)
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
            'fixed z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
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

export const ContextMenuItem: React.FC<ContextMenuItemProps> = ({
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

export const ContextMenuSeparator: React.FC<ContextMenuSeparatorProps> = ({
  className
}) => {
  return (
    <div className={cn('-mx-1 my-1 h-px bg-muted', className)} />
  )
}

export const ContextMenuLabel: React.FC<ContextMenuLabelProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('px-2 py-1.5 text-sm font-semibold', className)}>
      {children}
    </div>
  )
}

export const ContextMenuGroup: React.FC<ContextMenuGroupProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('p-1', className)}>
      {children}
    </div>
  )
}
