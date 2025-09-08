import React, { forwardRef, useState, useEffect } from 'react'
import { cn } from '../../lib/utils'
import { XIcon, CheckCircleIcon, AlertCircleIcon, InfoIcon, XCircleIcon } from '../../icons'

export interface ToastProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClose'> {
  id?: string
  title?: string
  message: string
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
  // Enterprise features
  analyticsId?: string
  analyticsEvent?: string
  analyticsData?: Record<string, any>
  ariaLabel?: string
  ariaDescribedBy?: string
  role?: string
  dataTestId?: string
  onAnalytics?: (event: string, data?: Record<string, any>) => void
  tooltip?: string
  loading?: boolean
  progress?: boolean
  progressValue?: number
  onProgressComplete?: () => void
  priority?: 'low' | 'medium' | 'high' | 'critical'
  category?: string
  tags?: string[]
  metadata?: Record<string, any>
  sound?: boolean
  vibration?: boolean
  onShow?: () => void
  onHide?: () => void
  onAction?: (action: string) => void
  actions?: Array<{
    label: string
    onClick: () => void
    variant?: 'default' | 'primary' | 'secondary' | 'ghost'
    icon?: React.ReactNode
  }>
  avatar?: string
  timestamp?: Date
  showTimestamp?: boolean
  groupable?: boolean
  groupId?: string
  maxGroupSize?: number
  onGroup?: (toasts: ToastProps[]) => void
  stackable?: boolean
  maxStackSize?: number
  onStack?: (toasts: ToastProps[]) => void
  draggable?: boolean
  onDragMove?: (position: { x: number; y: number }) => void
  onDragComplete?: (position: { x: number; y: number }) => void
  swipeable?: boolean
  onSwipe?: (direction: 'left' | 'right' | 'up' | 'down') => void
  keyboardDismissible?: boolean
  onKeyboardDismiss?: (key: string) => void
  clickable?: boolean
  onClick?: () => void
  onDoubleClick?: () => void
  onRightClick?: (event: React.MouseEvent) => void
  contextMenuItems?: Array<{
    label: string
    onClick: () => void
    icon?: React.ReactNode
    disabled?: boolean
  }>
  retryable?: boolean
  onRetry?: () => void
  retryCount?: number
  maxRetries?: number
  onRetryExhausted?: () => void
  linkable?: boolean
  link?: string
  onLinkClick?: () => void
  linkTarget?: '_blank' | '_self' | '_parent' | '_top'
  expandable?: boolean
  expandedContent?: React.ReactNode
  onExpand?: () => void
  onCollapse?: () => void
  collapsible?: boolean
  collapsed?: boolean
  onToggle?: (collapsed: boolean) => void
  animated?: boolean
  animation?: 'fade' | 'slide' | 'scale' | 'bounce' | 'flip' | 'none'
  animationDuration?: number
  onAnimationStart?: () => void
  onAnimationEnd?: () => void
  theme?: 'light' | 'dark' | 'auto'
  locale?: string
  rtl?: boolean
  onLocaleChange?: (locale: string) => void
  accessibility?: {
    announce?: boolean
    announceMessage?: string
    role?: string
    liveRegion?: 'polite' | 'assertive' | 'off'
  }
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
  className,
  style,
  ...props
}, ref) => {
  const [isVisible, setIsVisible] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  // Auto-dismiss timer
  useEffect(() => {
    if (persistent || duration <= 0) return

    const timer = setTimeout(() => {
      handleClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, persistent])

  // Size classes
  const sizeClasses = {
    sm: 'p-3 text-sm',
    md: 'p-4 text-base',
    lg: 'p-5 text-lg'
  }

  // Variant classes with proper visibility
  const variantClasses = {
    default: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600',
    filled: 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900',
    outlined: 'bg-transparent border-2',
    minimal: 'bg-transparent border-none'
  }

  // Type classes
  const typeClasses = {
    success: {
      default: 'border-green-200 dark:border-green-700',
      filled: 'bg-green-600 text-white',
      outlined: 'border-green-500 text-green-700 dark:text-green-300',
      minimal: 'text-green-600 dark:text-green-400'
    },
    error: {
      default: 'border-red-200 dark:border-red-700',
      filled: 'bg-red-600 text-white',
      outlined: 'border-red-500 text-red-700 dark:text-red-300',
      minimal: 'text-red-600 dark:text-red-400'
    },
    warning: {
      default: 'border-yellow-200 dark:border-yellow-700',
      filled: 'bg-yellow-600 text-white',
      outlined: 'border-yellow-500 text-yellow-700 dark:text-yellow-300',
      minimal: 'text-yellow-600 dark:text-yellow-400'
    },
    info: {
      default: 'border-blue-200 dark:border-blue-700',
      filled: 'bg-blue-600 text-white',
      outlined: 'border-blue-500 text-blue-700 dark:text-blue-300',
      minimal: 'text-blue-600 dark:text-blue-400'
    },
    default: {
      default: 'border-slate-200 dark:border-slate-600',
      filled: 'bg-slate-600 text-white',
      outlined: 'border-slate-500 text-slate-700 dark:text-slate-300',
      minimal: 'text-slate-600 dark:text-slate-400'
    }
  }

  // Shadow classes
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  }

  // Position classes
  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2'
  }

  // Icon component
  const getIcon = () => {
    const iconClasses = 'w-5 h-5 flex-shrink-0'
    
    switch (type) {
      case 'success':
        return <CheckCircleIcon className={iconClasses} />
      case 'error':
        return <XCircleIcon className={iconClasses} />
      case 'warning':
        return <AlertCircleIcon className={iconClasses} />
      case 'info':
        return <InfoIcon className={iconClasses} />
      default:
        return null
    }
  }

  const handleClose = () => {
    setIsExiting(true)
    setTimeout(() => {
      setIsVisible(false)
      onClose?.(id)
    }, 300)
  }

  if (!isVisible) return null

  return (
    <div
      ref={ref}
      className={cn(
        'fixed z-50 max-w-sm w-full',
        positionClasses[position],
        'transform transition-all duration-300 ease-in-out',
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
        'rounded-lg',
        sizeClasses[size],
        variantClasses[variant],
        typeClasses[type][variant],
        shadowClasses[shadow],
        'flex items-start space-x-3'
      )}>
        {/* Icon */}
        {getIcon() && (
          <div className="flex-shrink-0">
            {getIcon()}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className="font-medium mb-1">{title}</h4>
          )}
          <p className="text-sm opacity-90">{message}</p>
          
          {/* Action */}
          {action && (
            <div className="mt-3">
              {action}
            </div>
          )}
        </div>

        {/* Close Button */}
        {closable && (
          <button
            onClick={handleClose}
            className={cn(
              'flex-shrink-0 p-1 rounded-md transition-colors duration-200',
              'hover:bg-black/10 dark:hover:bg-white/10',
              'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            )}
          >
            <XIcon className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  )
})

Toast.displayName = "Toast"

export { Toast }
