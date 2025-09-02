import React, { useEffect, useRef } from 'react'
import { cn } from '../lib/utils'

export interface AlertDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

export interface AlertDialogTriggerProps {
  children: React.ReactNode
  asChild?: boolean
  className?: string
}

export interface AlertDialogContentProps {
  children: React.ReactNode
  className?: string
  onEscapeKeyDown?: () => void
  onInteractOutside?: () => void
}

export interface AlertDialogHeaderProps {
  children: React.ReactNode
  className?: string
}

export interface AlertDialogFooterProps {
  children: React.ReactNode
  className?: string
}

export interface AlertDialogTitleProps {
  children: React.ReactNode
  className?: string
}

export interface AlertDialogDescriptionProps {
  children: React.ReactNode
  className?: string
}

export interface AlertDialogActionProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export interface AlertDialogCancelProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export const AlertDialog: React.FC<AlertDialogProps> = ({
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
    <div className={cn('fixed inset-0 z-50 flex items-center justify-center', className)}>
      {children}
    </div>
  )
}

export const AlertDialogTrigger: React.FC<AlertDialogTriggerProps> = ({
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

export const AlertDialogContent: React.FC<AlertDialogContentProps> = ({
  children,
  className,
  onEscapeKeyDown,
  onInteractOutside
}) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && onInteractOutside) {
      onInteractOutside()
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div
        className={cn(
          'relative bg-background border rounded-lg shadow-lg max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto',
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export const AlertDialogHeader: React.FC<AlertDialogHeaderProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('flex flex-col space-y-1.5 text-center sm:text-left p-6 pb-0', className)}>
      {children}
    </div>
  )
}

export const AlertDialogFooter: React.FC<AlertDialogFooterProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 p-6 pt-0', className)}>
      {children}
    </div>
  )
}

export const AlertDialogTitle: React.FC<AlertDialogTitleProps> = ({
  children,
  className
}) => {
  return (
    <h2 className={cn('text-lg font-semibold leading-none tracking-tight', className)}>
      {children}
    </h2>
  )
}

export const AlertDialogDescription: React.FC<AlertDialogDescriptionProps> = ({
  children,
  className
}) => {
  return (
    <p className={cn('text-sm text-muted-foreground', className)}>
      {children}
    </p>
  )
}

export const AlertDialogAction: React.FC<AlertDialogActionProps> = ({
  children,
  className,
  onClick
}) => {
  return (
    <button
      className={cn(
        'inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export const AlertDialogCancel: React.FC<AlertDialogCancelProps> = ({
  children,
  className,
  onClick
}) => {
  return (
    <button
      className={cn(
        'inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
