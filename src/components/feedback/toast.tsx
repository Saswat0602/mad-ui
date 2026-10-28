import React, { forwardRef, useState, useEffect, createContext, useContext } from 'react'
import { cn } from '../../lib/utils'
import { CheckCircle2, AlertCircle, AlertTriangle, Info, X } from 'lucide-react'

export interface ToastProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClose'> {
  id?: string
  title?: string
  message?: string
  type?: 'success' | 'error' | 'warning' | 'info' | 'default'
  variant?: 'default' | 'filled' | 'outlined' | 'minimal'
  size?: 'sm' | 'md' | 'lg'
  position?: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center'
  duration?: number
  closable?: boolean
  persistent?: boolean
  action?: React.ReactNode
  color?: string
  backgroundColor?: string
  borderColor?: string
  borderRadius?: string | number
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  onClose?: (id?: string) => void
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const Toast = forwardRef<HTMLDivElement, ToastProps>(({
  id,
  title,
  message,
  type = 'default',
  variant = 'default',
  size = 'md',
  position = 'top-right',
  duration = 5000,
  closable = true,
  persistent = false,
  action,
  color,
  backgroundColor,
  borderColor,
  borderRadius,
  shadow = 'md',
  onClose,
  open: controlledOpen,
  onOpenChange,
  className,
  children,
  style,
  ...props
}, ref) => {
  const [internalVisible, setInternalVisible] = useState(true)
  const [isExiting, setIsExiting] = useState(false)
  const isVisible = controlledOpen !== undefined ? controlledOpen : internalVisible

  useEffect(() => {
    if (persistent || duration <= 0 || !isVisible) return

    const timer = setTimeout(() => {
      handleClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, persistent, isVisible])

  const handleClose = () => {
    setIsExiting(true)
    setTimeout(() => {
      setInternalVisible(false)
      onOpenChange?.(false)
      onClose?.(id)
    }, 200)
  }

  const sizeClasses = {
    sm: 'p-3 text-xs',
    md: 'p-4 text-sm',
    lg: 'p-5 text-base'
  }

  const variantClasses = {
    default: 'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-lg',
    filled: 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-lg',
    outlined: 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-2 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100',
    minimal: 'bg-zinc-50 dark:bg-zinc-900/50 border border-transparent text-zinc-800 dark:text-zinc-200'
  }

  const typeClasses = {
    success: {
      default: 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/60 dark:bg-emerald-950/20 text-emerald-950 dark:text-emerald-100',
      filled: 'bg-emerald-600 text-white',
      outlined: 'border-emerald-500 text-emerald-700 dark:text-emerald-300',
      minimal: 'text-emerald-700 dark:text-emerald-400'
    },
    error: {
      default: 'border-rose-200 dark:border-rose-900/60 bg-rose-50/60 dark:bg-rose-950/20 text-rose-950 dark:text-rose-100',
      filled: 'bg-rose-600 text-white',
      outlined: 'border-rose-500 text-rose-700 dark:text-rose-300',
      minimal: 'text-rose-700 dark:text-rose-400'
    },
    warning: {
      default: 'border-amber-200 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/20 text-amber-950 dark:text-amber-100',
      filled: 'bg-amber-600 text-white',
      outlined: 'border-amber-500 text-amber-700 dark:text-amber-300',
      minimal: 'text-amber-700 dark:text-amber-400'
    },
    info: {
      default: 'border-blue-200 dark:border-blue-900/60 bg-blue-50/60 dark:bg-blue-950/20 text-blue-950 dark:text-blue-100',
      filled: 'bg-blue-600 text-white',
      outlined: 'border-blue-500 text-blue-700 dark:text-blue-300',
      minimal: 'text-blue-700 dark:text-blue-400'
    },
    default: {
      default: 'border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100',
      filled: 'bg-zinc-800 text-white',
      outlined: 'border-zinc-400 text-zinc-800 dark:text-zinc-200',
      minimal: 'text-zinc-700 dark:text-zinc-300'
    }
  }

  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  }

  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2'
  }

  const getIcon = () => {
    const iconClasses = 'w-4 h-4 mt-0.5 shrink-0'
    switch (type) {
      case 'success':
        return <CheckCircle2 className={cn(iconClasses, 'text-emerald-600 dark:text-emerald-400')} />
      case 'error':
        return <AlertCircle className={cn(iconClasses, 'text-rose-600 dark:text-rose-400')} />
      case 'warning':
        return <AlertTriangle className={cn(iconClasses, 'text-amber-600 dark:text-amber-400')} />
      case 'info':
        return <Info className={cn(iconClasses, 'text-blue-600 dark:text-blue-400')} />
      default:
        return null
    }
  }

  if (!isVisible) return null

  return (
    <div
      ref={ref}
      role="status"
      aria-live="polite"
      className={cn(
        'fixed z-50 max-w-sm w-full transition-all duration-200 ease-out',
        positionClasses[position],
        isExiting ? 'opacity-0 scale-95 translate-y-2' : 'opacity-100 scale-100 translate-y-0',
        className
      )}
      style={{
        color,
        backgroundColor,
        borderColor,
        borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
        ...style
      }}
      {...props}
    >
      <div className={cn(
        'rounded-xl',
        sizeClasses[size],
        variantClasses[variant],
        typeClasses[type][variant],
        shadowClasses[shadow],
        'flex items-start gap-3 backdrop-blur-sm'
      )}>
        {getIcon()}

        <div className="flex-1 min-w-0">
          {title && (
            <h5 className="font-semibold text-xs tracking-tight mb-0.5">{title}</h5>
          )}
          {message && <p className="text-xs opacity-90 leading-relaxed">{message}</p>}
          {children}
          {action && <div className="mt-2.5">{action}</div>}
        </div>

        {closable && (
          <button
            onClick={handleClose}
            aria-label="Close notification"
            className="shrink-0 p-1 rounded-md text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  )
})

Toast.displayName = "Toast"

export const ToastTitle = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn("text-xs font-semibold tracking-tight text-zinc-900 dark:text-zinc-100", className)} {...props} />
  )
)
ToastTitle.displayName = "ToastTitle"

export const ToastDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed mt-0.5", className)} {...props} />
  )
)
ToastDescription.displayName = "ToastDescription"

export const ToastAction = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex h-7 items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-700 bg-transparent px-2.5 text-xs font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400",
        className
      )}
      {...props}
    />
  )
)
ToastAction.displayName = "ToastAction"

export const ToastClose = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "absolute right-2 top-2 rounded-md p-1 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 opacity-70 hover:opacity-100 transition-opacity",
        className
      )}
      {...props}
    >
      <X className="h-3.5 w-3.5" />
    </button>
  )
)
ToastClose.displayName = "ToastClose"

export const ToastViewport = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        className
      )}
      {...props}
    />
  )
)
ToastViewport.displayName = "ToastViewport"

export interface ToastProviderProps {
  children: React.ReactNode
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  return <>{children}</>
}

export { Toast }

