import React, { useEffect, useRef } from 'react'
import { cn } from '../../lib/utils'

export interface DrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

export interface DrawerTriggerProps {
  children: React.ReactNode
  asChild?: boolean
  className?: string
}

export interface DrawerContentProps {
  children: React.ReactNode
  className?: string
  side?: 'top' | 'right' | 'bottom' | 'left'
  onEscapeKeyDown?: () => void
  onInteractOutside?: () => void
}

export interface DrawerHeaderProps {
  children: React.ReactNode
  className?: string
}

export interface DrawerFooterProps {
  children: React.ReactNode
  className?: string
}

export interface DrawerTitleProps {
  children: React.ReactNode
  className?: string
}

export interface DrawerDescriptionProps {
  children: React.ReactNode
  className?: string
}

export interface DrawerCloseProps {
  children: React.ReactNode
  asChild?: boolean
  className?: string
}

export const Drawer: React.FC<DrawerProps> = ({
  open,
  onOpenChange,
  children,
  className
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onOpenChange(false)
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
  }, [open, onOpenChange])

  if (!open) return null

  return (
    <div className={cn('fixed inset-0 z-50', className)}>
      {children}
    </div>
  )
}

export const DrawerTrigger: React.FC<DrawerTriggerProps> = ({
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

export const DrawerContent: React.FC<DrawerContentProps> = ({
  children,
  className,
  side = 'right',
  onEscapeKeyDown,
  onInteractOutside
}) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && onInteractOutside) {
      onInteractOutside()
    }
  }

  const sideClasses = {
    top: 'inset-x-0 top-0 h-auto max-h-[80vh] border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
    right: 'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
    bottom: 'inset-x-0 bottom-0 h-auto max-h-[80vh] border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
    left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm'
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div
        className={cn(
          'fixed z-50 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
          sideClasses[side],
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export const DrawerHeader: React.FC<DrawerHeaderProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)}>
      {children}
    </div>
  )
}

export const DrawerFooter: React.FC<DrawerFooterProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}>
      {children}
    </div>
  )
}

export const DrawerTitle: React.FC<DrawerTitleProps> = ({
  children,
  className
}) => {
  return (
    <h2 className={cn('text-lg font-semibold text-foreground', className)}>
      {children}
    </h2>
  )
}

export const DrawerDescription: React.FC<DrawerDescriptionProps> = ({
  children,
  className
}) => {
  return (
    <p className={cn('text-sm text-muted-foreground', className)}>
      {children}
    </p>
  )
}

export const DrawerClose: React.FC<DrawerCloseProps> = ({
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
