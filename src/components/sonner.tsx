import React, { useState, useEffect, useRef } from 'react'
import { cn } from '../lib/utils'

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
        'fixed z-50 flex flex-col gap-2 p-4 max-w-sm w-full',
        positionClasses[position],
        className
      )}
    >
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          toast={toast}
          onDismiss={onDismiss}
        />
      ))}
    </div>
  )
}

export const Toast: React.FC<ToastProps> = ({
  toast,
  onDismiss,
  className
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isLeaving, setIsLeaving] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

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
    }, 300)
  }

  const typeClasses = {
    default: 'bg-background border-border',
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800'
  }

  const typeIcons = {
    default: null,
    success: (
      <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    error: (
      <svg className="h-4 w-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    warning: (
      <svg className="h-4 w-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    ),
    info: (
      <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }

  return (
    <div
      className={cn(
        'relative w-full rounded-lg border p-4 shadow-lg transition-all duration-300',
        typeClasses[toast.type || 'default'],
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0',
        isLeaving && 'translate-x-full opacity-0',
        className
      )}
    >
      <div className="flex items-start gap-3">
        {typeIcons[toast.type || 'default'] && (
          <div className="flex-shrink-0">
            {typeIcons[toast.type || 'default']}
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <div className="font-medium">{toast.title}</div>
          {toast.description && (
            <div className="mt-1 text-sm opacity-90">{toast.description}</div>
          )}
          {toast.action && (
            <button
              onClick={toast.action.onClick}
              className="mt-2 text-sm font-medium underline hover:no-underline"
            >
              {toast.action.label}
            </button>
          )}
        </div>

        <button
          onClick={handleDismiss}
          className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

// Hook for managing toasts
export const useToasts = () => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast = { ...toast, id }
    setToasts(prev => [...prev, newToast])
    return id
  }

  const dismissToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }

  const dismissAll = () => {
    setToasts([])
  }

  return {
    toasts,
    addToast,
    dismissToast,
    dismissAll
  }
}
