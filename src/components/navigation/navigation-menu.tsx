import React, { useState, useRef, useEffect } from 'react'
import { cn } from '../../lib/utils'
import { ChevronDown } from 'lucide-react'

export interface NavigationMenuProps {
  children: React.ReactNode
  className?: string
}

export interface NavigationMenuListProps {
  children: React.ReactNode
  className?: string
}

export interface NavigationMenuItemProps {
  children: React.ReactNode
  className?: string
}

export interface NavigationMenuTriggerProps {
  children: React.ReactNode
  className?: string
}

export interface NavigationMenuContentProps {
  children: React.ReactNode
  className?: string
}

export interface NavigationMenuLinkProps {
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: () => void
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  children,
  className
}) => {
  return (
    <nav className={cn('relative z-10 flex max-w-max flex-1 items-center justify-center', className)}>
      {children}
    </nav>
  )
}

export const NavigationMenuList: React.FC<NavigationMenuListProps> = ({
  children,
  className
}) => {
  return (
    <ul className={cn('group flex flex-1 list-none items-center justify-center space-x-1', className)}>
      {children}
    </ul>
  )
}

export const NavigationMenuItem: React.FC<NavigationMenuItemProps> = ({
  children,
  className
}) => {
  return (
    <li className={cn('relative', className)}>
      {children}
    </li>
  )
}

export const NavigationMenuTrigger: React.FC<NavigationMenuTriggerProps> = ({
  children,
  className
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => setIsOpen(true)
  const handleMouseLeave = () => setIsOpen(false)

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
    <div
      className="group relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        ref={triggerRef}
        className={cn(
          'group inline-flex h-9 w-max items-center justify-center rounded-lg bg-transparent px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-200 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50',
          isOpen && 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100',
          className
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {children}
        <ChevronDown
          className={cn(
            'relative top-[1px] ml-1.5 h-3.5 w-3.5 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      {isOpen && (
        <div
          ref={contentRef}
          className="absolute left-0 top-full mt-1.5 w-screen max-w-xs rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-3 text-zinc-900 dark:text-zinc-100 shadow-xl animate-in fade-in-0 zoom-in-95 duration-150"
        >
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === NavigationMenuContent) {
              return child
            }
            return null
          })}
        </div>
      )}
    </div>
  )
}

export const NavigationMenuContent: React.FC<NavigationMenuContentProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]', className)}>
      {children}
    </div>
  )
}

export const NavigationMenuLink: React.FC<NavigationMenuLinkProps> = ({
  children,
  className,
  href,
  onClick
}) => {
  const Component = href ? 'a' : 'button'
  
  return (
    <Component
      className={cn(
        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
        className
      )}
      href={href}
      onClick={onClick}
    >
      {children}
    </Component>
  )
}
