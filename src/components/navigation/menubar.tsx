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
    <div className={cn('flex h-9 items-center space-x-1 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-1 text-zinc-900 dark:text-zinc-100 shadow-2xs', className)}>
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
          'flex cursor-default select-none items-center rounded-lg px-2.5 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-200 outline-none transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-850 hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer',
          isOpen && 'bg-zinc-100 dark:bg-zinc-850 text-zinc-900 dark:text-zinc-100',
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
          className="absolute left-0 top-full z-50 mt-1.5 min-w-[8rem] overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-1 text-zinc-900 dark:text-zinc-100 shadow-xl animate-in fade-in-0 zoom-in-95 duration-150"
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
        'relative flex cursor-default select-none items-center rounded-lg px-2.5 py-1.5 text-xs outline-none transition-colors text-zinc-800 dark:text-zinc-200',
        disabled
          ? 'pointer-events-none opacity-40'
          : 'hover:bg-zinc-100 dark:hover:bg-zinc-850 hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer',
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
