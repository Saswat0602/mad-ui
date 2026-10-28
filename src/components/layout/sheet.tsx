import React, { createContext, useContext, useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../../lib/utils'
import { X } from 'lucide-react'

interface SheetContextType {
  open: boolean
  setOpen: (open: boolean) => void
}

const SheetContext = createContext<SheetContextType | null>(null)

export const useSheet = () => {
  const context = useContext(SheetContext)
  if (!context) {
    throw new Error('Sheet components must be used within a <Sheet>')
  }
  return context
}

export interface SheetProps {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

export interface SheetTriggerProps {
  children: React.ReactNode
  asChild?: boolean
  className?: string
}

export interface SheetContentProps {
  children: React.ReactNode
  className?: string
  side?: 'top' | 'right' | 'bottom' | 'left'
  onEscapeKeyDown?: () => void
  onInteractOutside?: () => void
}

export interface SheetHeaderProps {
  children: React.ReactNode
  className?: string
}

export interface SheetFooterProps {
  children: React.ReactNode
  className?: string
}

export interface SheetTitleProps {
  children: React.ReactNode
  className?: string
}

export interface SheetDescriptionProps {
  children: React.ReactNode
  className?: string
}

export interface SheetCloseProps {
  children?: React.ReactNode
  className?: string
}

export const Sheet: React.FC<SheetProps> = ({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  children,
  className
}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen)
  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : uncontrolledOpen

  const setOpen = (newOpen: boolean) => {
    if (!isControlled) {
      setUncontrolledOpen(newOpen)
    }
    onOpenChange?.(newOpen)
  }

  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      <div className={cn('relative inline-block', className)}>
        {children}
      </div>
    </SheetContext.Provider>
  )
}

export const SheetTrigger: React.FC<SheetTriggerProps> = ({
  children,
  asChild = false,
  className
}) => {
  const { setOpen } = useSheet()

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setOpen(true)
  }

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<any>
    return React.cloneElement(child, {
      className: cn(child.props.className, className),
      onClick: (e: React.MouseEvent) => {
        handleClick(e)
        child.props.onClick?.(e)
      }
    })
  }

  return (
    <div className={cn('inline-block cursor-pointer', className)} onClick={handleClick}>
      {children}
    </div>
  )
}

export const SheetContent: React.FC<SheetContentProps> = ({
  children,
  className,
  side = 'right',
  onEscapeKeyDown,
  onInteractOutside
}) => {
  const { open, setOpen } = useSheet()
  const [mounted, setMounted] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        if (onEscapeKeyDown) {
          onEscapeKeyDown()
        } else {
          setOpen(false)
        }
      }
    }

    if (open) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [open, setOpen, onEscapeKeyDown])

  if (!mounted || !open) return null

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      if (onInteractOutside) {
        onInteractOutside()
      } else {
        setOpen(false)
      }
    }
  }

  const sideClasses = {
    top: 'inset-x-0 top-0 border-b border-zinc-200 dark:border-zinc-800 animate-in slide-in-from-top duration-300',
    right: 'inset-y-0 right-0 h-full w-full sm:max-w-md border-l border-zinc-200 dark:border-zinc-800 animate-in slide-in-from-right duration-300',
    bottom: 'inset-x-0 bottom-0 border-t border-zinc-200 dark:border-zinc-800 animate-in slide-in-from-bottom duration-300',
    left: 'inset-y-0 left-0 h-full w-full sm:max-w-md border-r border-zinc-200 dark:border-zinc-800 animate-in slide-in-from-left duration-300'
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center"
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={contentRef}
        className={cn(
          'fixed z-50 bg-white dark:bg-zinc-950 p-6 shadow-2xl transition ease-in-out text-zinc-900 dark:text-zinc-100 flex flex-col justify-between overflow-y-auto',
          sideClasses[side],
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 rounded-md p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          aria-label="Close sheet"
        >
          <X className="h-4 w-4" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  )
}

export const SheetClose: React.FC<SheetCloseProps> = ({ children, className }) => {
  const { setOpen } = useSheet()
  return (
    <div
      className={cn('inline-block cursor-pointer', className)}
      onClick={() => setOpen(false)}
    >
      {children || (
        <button className="px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
          Close
        </button>
      )}
    </div>
  )
}

export const SheetHeader: React.FC<SheetHeaderProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('flex flex-col space-y-1.5 text-left', className)}>
      {children}
    </div>
  )
}

export const SheetFooter: React.FC<SheetFooterProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-4 border-t border-zinc-100 dark:border-zinc-800 mt-4', className)}>
      {children}
    </div>
  )
}

export const SheetTitle: React.FC<SheetTitleProps> = ({
  children,
  className
}) => {
  return (
    <h2 className={cn('text-base font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight', className)}>
      {children}
    </h2>
  )
}

export const SheetDescription: React.FC<SheetDescriptionProps> = ({
  children,
  className
}) => {
  return (
    <p className={cn('text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed', className)}>
      {children}
    </p>
  )
}

