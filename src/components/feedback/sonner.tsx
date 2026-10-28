import React, { useState, useEffect, useRef } from 'react'
import { cn } from '../../lib/utils'
import { CheckCircle2, AlertCircle, AlertTriangle, Info, X } from 'lucide-react'

export interface Toast {
  id: string
  title: string
  description?: string
  type?: 'default' | 'success' | 'error' | 'warning' | 'info'
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

export interface SonnerProps {
  toasts: Toast[]
  onDismiss: (id: string) => void
  className?: string
  position?: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center'
}

export interface ToastProps {
  toast: Toast
  onDismiss: (id: string) => void
  className?: string
}

export const Sonner: React.FC<SonnerProps> = ({
  toasts,
  onDismiss,
  className,
  position = 'top-right'
}) => {
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'top-center': 'top-0 left-1/2 -translate-x-1/2',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
    'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2'
  }

  return (
    <div
      className={cn(
        'fixed z-50 flex flex-col gap-2.5 p-4 max-w-sm w-full pointer-events-none',
        positionClasses[position],
        className
      )}
    >
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          onDismiss={onDismiss}
        />
      ))}
    </div>
  )
}

export const ToastItem: React.FC<ToastProps> = ({
  toast,
  onDismiss,
  className
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isLeaving, setIsLeaving] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    setIsVisible(true)
    
    if (toast.duration !== Infinity) {
      timeoutRef.current = setTimeout(() => {
        handleDismiss()
      }, toast.duration || 5000)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [toast.duration])

  const handleDismiss = () => {
    setIsLeaving(true)
    setTimeout(() => {
      onDismiss(toast.id)
    }, 200)
  }

  const typeClasses = {
    default: 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100',
    success: 'bg-white dark:bg-zinc-900 border-emerald-500/30 text-zinc-900 dark:text-zinc-100',
    error: 'bg-white dark:bg-zinc-900 border-red-500/30 text-zinc-900 dark:text-zinc-100',
    warning: 'bg-white dark:bg-zinc-900 border-amber-500/30 text-zinc-900 dark:text-zinc-100',
    info: 'bg-white dark:bg-zinc-900 border-blue-500/30 text-zinc-900 dark:text-zinc-100'
  }

  const typeIcons = {
    default: null,
    success: <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />,
    error: <AlertCircle className="h-4 w-4 text-red-500 shrink-0" />,
    warning: <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0" />,
    info: <Info className="h-4 w-4 text-blue-500 shrink-0" />
  }

  return (
    <div
      className={cn(
        'pointer-events-auto relative w-full rounded-xl border p-4 shadow-lg transition-all duration-200 backdrop-blur-sm',
        typeClasses[toast.type || 'default'],
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-2 opacity-0 scale-95',
        isLeaving && 'translate-y-2 opacity-0 scale-95',
        className
      )}
    >
      <div className="flex items-start gap-3">
        {typeIcons[toast.type || 'default'] && (
          <div className="shrink-0 mt-0.5">
            {typeIcons[toast.type || 'default']}
          </div>
        )}
        
        <div className="flex-1 min-w-0 pr-4">
          <div className="text-sm font-semibold leading-tight">{toast.title}</div>
          {toast.description && (
            <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{toast.description}</div>
          )}
          {toast.action && (
            <button
              onClick={toast.action.onClick}
              className="mt-2.5 inline-flex items-center text-xs font-semibold text-primary hover:underline"
            >
              {toast.action.label}
            </button>
          )}
        </div>

        <button
          onClick={handleDismiss}
          className="shrink-0 -mr-1 -mt-1 p-1 text-muted-foreground hover:text-foreground rounded-md transition-colors"
          title="Dismiss"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}

// Backward compatibility alias
export const Toast = ToastItem
