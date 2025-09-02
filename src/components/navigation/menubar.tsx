import React, { useState, useRef, useEffect } from 'react'
import { cn } from '../../lib/utils'

export interface MenubarProps {
  children: React.ReactNode
  className?: string
}

export interface MenubarMenuProps {
  children: React.ReactNode
  className?: string
}

export interface MenubarTriggerProps {
  children: React.ReactNode
  className?: string
}

export interface MenubarContentProps {
  children: React.ReactNode
  className?: string
  align?: 'start' | 'center' | 'end'
  side?: 'top' | 'right' | 'bottom' | 'left'
  sideOffset?: number
}

export interface MenubarItemProps {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  onClick?: () => void
}

export interface MenubarSeparatorProps {
  className?: string
}

export interface MenubarLabelProps {
  children: React.ReactNode
  className?: string
}

export interface MenubarGroupProps {
  children: React.ReactNode
  className?: string
}

export const Menubar: React.FC<MenubarProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('flex h-10 items-center space-x-1 rounded-md border bg-background p-1', className)}>
      {children}
    </div>
  )
}

export const MenubarMenu: React.FC<MenubarMenuProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('relative', className)}>
      {children}
    </div>
  )
}

export const MenubarTrigger: React.FC<MenubarTriggerProps> = ({
  children,
  className
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    setIsOpen(!isOpen)
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
      <button
        ref={triggerRef}
        className={cn(
          'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
          isOpen && 'bg-accent text-accent-foreground',
          className
        )}
        onClick={handleClick}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {children}
      </button>
      {isOpen && (
        <div
          ref={contentRef}
          className="absolute left-0 top-full z-50 mt-1 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md"
        >
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === MenubarContent) {
              return child
            }
            return null
          })}
        </div>
      )}
    </>
  )
}

export const MenubarContent: React.FC<MenubarContentProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('p-1', className)}>
      {children}
    </div>
  )
}

export const MenubarItem: React.FC<MenubarItemProps> = ({
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

export const MenubarSeparator: React.FC<MenubarSeparatorProps> = ({
  className
}) => {
  return (
    <div className={cn('-mx-1 my-1 h-px bg-muted', className)} />
  )
}

export const MenubarLabel: React.FC<MenubarLabelProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('px-2 py-1.5 text-sm font-semibold', className)}>
      {children}
    </div>
  )
}

export const MenubarGroup: React.FC<MenubarGroupProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('p-1', className)}>
      {children}
    </div>
  )
}
