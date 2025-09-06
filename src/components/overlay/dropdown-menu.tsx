import React, { useState, useRef, useEffect, createContext, useContext } from 'react'
import { cn } from '../../lib/utils'

interface DropdownMenuContextType {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  triggerRef: React.RefObject<HTMLDivElement>
}

const DropdownMenuContext = createContext<DropdownMenuContextType | null>(null)

const useDropdownMenu = () => {
  const context = useContext(DropdownMenuContext)
  if (!context) {
    throw new Error('DropdownMenu components must be used within a DropdownMenu')
  }
  return context
}

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

export interface DropdownMenuCheckboxItemProps {
  children: React.ReactNode
  className?: string
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
}

export interface DropdownMenuRadioGroupProps {
  children: React.ReactNode
  className?: string
  value?: string
  onValueChange?: (value: string) => void
}

export interface DropdownMenuRadioItemProps {
  children: React.ReactNode
  className?: string
  value: string
  disabled?: boolean
  checked?: boolean
  onCheckedChange?: () => void
}

export interface DropdownMenuSubProps {
  children: React.ReactNode
  className?: string
}

export interface DropdownMenuSubTriggerProps {
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

export interface DropdownMenuSubContentProps {
  children: React.ReactNode
  className?: string
}

export interface DropdownMenuShortcutProps {
  children: React.ReactNode
  className?: string
}

export interface DropdownMenuPortalProps {
  children: React.ReactNode
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  className
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLDivElement>(null)

  return (
    <DropdownMenuContext.Provider value={{ isOpen, setIsOpen, triggerRef }}>
      <div className={cn('relative inline-block', className)}>
        {children}
      </div>
    </DropdownMenuContext.Provider>
  )
}

export const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({
  children,
  asChild = false,
  className
}) => {
  const { setIsOpen, triggerRef } = useDropdownMenu()

  const handleClick = () => {
    setIsOpen(true)
  }

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ref: triggerRef,
      className: cn(children.props.className, className),
      onClick: (e: React.MouseEvent) => {
        e.stopPropagation()
        handleClick()
        if (children.props.onClick) {
          children.props.onClick(e)
        }
      }
    })
  }
  
  return (
    <div 
      ref={triggerRef}
      className={cn('inline-block cursor-pointer', className)}
      onClick={handleClick}
    >
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
  const { isOpen, setIsOpen, triggerRef } = useDropdownMenu()
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

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, setIsOpen, triggerRef])

  if (!isOpen) return null

  return (
    <div
      ref={contentRef}
      className={cn(
        'absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        alignClasses[align],
        sideClasses[side],
        className
      )}
      style={{ marginTop: sideOffset }}
    >
      {children}
    </div>
  )
}

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  children,
  className,
  disabled = false,
  onClick
}) => {
  const { setIsOpen } = useDropdownMenu()

  const handleClick = () => {
    if (!disabled) {
      onClick?.()
      setIsOpen(false)
    }
  }

  return (
    <div
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        disabled
          ? 'pointer-events-none opacity-50'
          : 'hover:bg-accent hover:text-accent-foreground',
        className
      )}
      onClick={handleClick}
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

export const DropdownMenuCheckboxItem: React.FC<DropdownMenuCheckboxItemProps> = ({
  children,
  className,
  checked = false,
  onCheckedChange,
  disabled = false
}) => {
  const { setIsOpen } = useDropdownMenu()

  const handleClick = () => {
    if (!disabled) {
      onCheckedChange?.(!checked)
    }
  }

  return (
    <div
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        disabled
          ? 'pointer-events-none opacity-50'
          : 'hover:bg-accent hover:text-accent-foreground',
        className
      )}
      onClick={handleClick}
    >
      <div className="mr-2 flex h-4 w-4 items-center justify-center">
        {checked && (
          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </div>
      {children}
    </div>
  )
}

export const DropdownMenuRadioGroup: React.FC<DropdownMenuRadioGroupProps> = ({
  children,
  className,
  value,
  onValueChange
}) => {
  return (
    <div className={cn('p-1', className)} data-value={value}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === DropdownMenuRadioItem) {
          return React.cloneElement(child, {
            ...child.props,
            checked: child.props.value === value,
            onCheckedChange: () => onValueChange?.(child.props.value)
          })
        }
        return child
      })}
    </div>
  )
}

export const DropdownMenuRadioItem: React.FC<DropdownMenuRadioItemProps> = ({
  children,
  className,
  value,
  disabled = false,
  checked = false,
  onCheckedChange
}) => {
  const { setIsOpen } = useDropdownMenu()

  const handleClick = () => {
    if (!disabled) {
      onCheckedChange?.()
      setIsOpen(false)
    }
  }

  return (
    <div
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        disabled
          ? 'pointer-events-none opacity-50'
          : 'hover:bg-accent hover:text-accent-foreground',
        className
      )}
      onClick={handleClick}
    >
      <div className="mr-2 flex h-4 w-4 items-center justify-center">
        {checked && (
          <div className="h-2 w-2 rounded-full bg-current" />
        )}
      </div>
      {children}
    </div>
  )
}

export const DropdownMenuSub: React.FC<DropdownMenuSubProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('relative', className)}>
      {children}
    </div>
  )
}

export const DropdownMenuSubTrigger: React.FC<DropdownMenuSubTriggerProps> = ({
  children,
  className,
  disabled = false
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        disabled
          ? 'pointer-events-none opacity-50'
          : 'hover:bg-accent hover:text-accent-foreground',
        className
      )}
      onMouseEnter={() => !disabled && setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {children}
      <svg className="ml-auto h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
      {isOpen && (
        <div className="absolute left-full top-0 ml-1 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md">
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === DropdownMenuSubContent) {
              return child.props.children
            }
            return null
          })}
        </div>
      )}
    </div>
  )
}

export const DropdownMenuSubContent: React.FC<DropdownMenuSubContentProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md', className)}>
      {children}
    </div>
  )
}

export const DropdownMenuShortcut: React.FC<DropdownMenuShortcutProps> = ({
  children,
  className
}) => {
  return (
    <span className={cn('ml-auto text-xs tracking-widest opacity-60', className)}>
      {children}
    </span>
  )
}

export const DropdownMenuPortal: React.FC<DropdownMenuPortalProps> = ({
  children
}) => {
  return <>{children}</>
}
