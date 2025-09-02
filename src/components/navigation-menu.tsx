import React, { useState, useRef, useEffect } from 'react'
import { cn } from '../lib/utils'

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
          'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50',
          className
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {children}
        <svg
          className={cn(
            'relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180',
            isOpen && 'rotate-180'
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div
          ref={contentRef}
          className="absolute left-0 top-full w-screen max-w-xs rounded-md border bg-popover p-4 text-popover-foreground shadow-lg data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight"
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
