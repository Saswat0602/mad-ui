import React, { useEffect, createContext, useContext } from 'react'
import { cn } from '../../lib/utils'
import { X } from 'lucide-react'

interface DialogContextType {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const DialogContext = createContext<DialogContextType | null>(null)

export const useDialog = () => {
  const context = useContext(DialogContext)
  if (!context) {
    throw new Error('Dialog components must be used within a Dialog')
  }
  return context
}

export interface DialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

export interface DialogTriggerProps {
  children: React.ReactNode
  asChild?: boolean
  className?: string
}

export interface DialogContentProps {
  children: React.ReactNode
  className?: string
  showCloseButton?: boolean
  onEscapeKeyDown?: () => void
  onInteractOutside?: () => void
}

export interface DialogHeaderProps {
  children: React.ReactNode
  className?: string
}

export interface DialogFooterProps {
  children: React.ReactNode
  className?: string
}

export interface DialogTitleProps {
  children: React.ReactNode
  className?: string
}

export interface DialogDescriptionProps {
  children: React.ReactNode
  className?: string
}

export interface DialogCloseProps {
  children?: React.ReactNode
  className?: string
  asChild?: boolean
}

export const Dialog: React.FC<DialogProps> = ({
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

  return (
    <DialogContext.Provider value={{ open, onOpenChange }}>
      {open && (
        <div className={cn('fixed inset-0 z-50 flex items-center justify-center p-4', className)}>
          {children}
        </div>
      )}
    </DialogContext.Provider>
  )
}

export const DialogTrigger: React.FC<DialogTriggerProps> = ({
  children,
  asChild = false,
  className
}) => {
  const { onOpenChange } = useDialog()

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

export const DialogContent: React.FC<DialogContentProps> = ({
  children,
  className,
  showCloseButton = true,
  onEscapeKeyDown,
  onInteractOutside
}) => {
  const { onOpenChange } = useDialog()

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      if (onInteractOutside) {
        onInteractOutside()
      } else {
        onOpenChange(false)
      }
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
      onClick={handleOverlayClick}
    >
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          'relative w-full max-w-lg rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 text-zinc-900 dark:text-zinc-100 shadow-2xl transition-all duration-200',
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}

        {showCloseButton && (
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            aria-label="Close dialog"
            className="absolute right-4 top-4 rounded-lg p-1 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  )
}

export const DialogHeader: React.FC<DialogHeaderProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('flex flex-col space-y-1.5 text-center sm:text-left mb-4', className)}>
      {children}
    </div>
  )
}

export const DialogFooter: React.FC<DialogFooterProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-6 gap-2 sm:gap-0', className)}>
      {children}
    </div>
  )
}

export const DialogTitle: React.FC<DialogTitleProps> = ({
  children,
  className
}) => {
  return (
    <h2 className={cn('text-base font-semibold leading-none tracking-tight text-foreground', className)}>
      {children}
    </h2>
  )
}

export const DialogDescription: React.FC<DialogDescriptionProps> = ({
  children,
  className
}) => {
  return (
    <p className={cn('text-xs text-muted-foreground leading-relaxed', className)}>
      {children}
    </p>
  )
}

export const DialogClose: React.FC<DialogCloseProps> = ({
  children,
  className,
  asChild = false
}) => {
  const { onOpenChange } = useDialog()

  const handleClick = () => onOpenChange(false)

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onClick: (e: React.MouseEvent) => {
        (children as any).props?.onClick?.(e)
        handleClick()
      },
      className: cn((children as any).props?.className, className)
    })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn('inline-flex items-center justify-center rounded-lg text-xs font-medium cursor-pointer', className)}
    >
      {children || 'Close'}
    </button>
  )
}

export default Dialog
