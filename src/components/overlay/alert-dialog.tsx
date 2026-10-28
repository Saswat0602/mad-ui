import React, { useEffect, createContext, useContext } from 'react'
import { cn } from '../../lib/utils'

interface AlertDialogContextType {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const AlertDialogContext = createContext<AlertDialogContextType | null>(null)

export const useAlertDialog = () => {
  const context = useContext(AlertDialogContext)
  if (!context) {
    throw new Error('AlertDialog components must be used within an AlertDialog')
  }
  return context
}

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

  // Always render children so AlertDialogTrigger mounts and can open the dialog.
  // The modal overlay is shown conditionally based on `open`.
  return (
    <AlertDialogContext.Provider value={{ open, onOpenChange }}>
      {children}
    </AlertDialogContext.Provider>
  )
}

export const AlertDialogTrigger: React.FC<AlertDialogTriggerProps> = ({
  children,
  asChild = false,
  className
}) => {
  const { onOpenChange } = useAlertDialog()

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onOpenChange(true)
  }

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onClick: (e: React.MouseEvent) => {
        (children as any).props?.onClick?.(e)
        handleClick(e)
      },
      className: cn((children as any).props?.className, className)
    })
  }
  
  return (
    <div className={cn('inline-block cursor-pointer', className)} onClick={handleClick}>
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
  const { open, onOpenChange } = useAlertDialog()

  if (!open) return null

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && onInteractOutside) {
      onInteractOutside()
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
      onClick={handleOverlayClick}
    >
      <div
        role="alertdialog"
        aria-modal="true"
        className={cn(
          'relative w-full max-w-lg rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 text-zinc-900 dark:text-zinc-100 shadow-2xl transition-all duration-200',
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
    <div className={cn('flex flex-col space-y-2 text-center sm:text-left mb-4', className)}>
      {children}
    </div>
  )
}

export const AlertDialogFooter: React.FC<AlertDialogFooterProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-6 gap-2 sm:gap-0', className)}>
      {children}
    </div>
  )
}

export const AlertDialogTitle: React.FC<AlertDialogTitleProps> = ({
  children,
  className
}) => {
  return (
    <h2 className={cn('text-base font-semibold leading-none tracking-tight text-foreground', className)}>
      {children}
    </h2>
  )
}

export const AlertDialogDescription: React.FC<AlertDialogDescriptionProps> = ({
  children,
  className
}) => {
  return (
    <p className={cn('text-xs text-muted-foreground leading-relaxed', className)}>
      {children}
    </p>
  )
}

export const AlertDialogAction: React.FC<AlertDialogActionProps> = ({
  children,
  className,
  onClick
}) => {
  const { onOpenChange } = useAlertDialog()

  const handleClick = (e: React.MouseEvent) => {
    onClick?.()
    onOpenChange(false)
  }

  return (
    <button
      type="button"
      className={cn(
        'inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-xs font-semibold text-primary-foreground shadow-xs transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 cursor-pointer',
        className
      )}
      onClick={handleClick}
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
  const { onOpenChange } = useAlertDialog()

  const handleClick = (e: React.MouseEvent) => {
    onClick?.()
    onOpenChange(false)
  }

  return (
    <button
      type="button"
      className={cn(
        'inline-flex h-9 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 text-xs font-medium text-zinc-800 dark:text-zinc-200 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 cursor-pointer',
        className
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default AlertDialog
