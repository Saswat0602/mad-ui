"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "success" | "warning" | "error" | "info"
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  fullWidth?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  // Enterprise features
  tooltip?: string
  analyticsId?: string
  analyticsEvent?: string
  analyticsData?: Record<string, any>
  ariaLabel?: string
  ariaDescribedBy?: string
  ariaExpanded?: boolean
  ariaPressed?: boolean
  ariaControls?: string
  ariaHaspopup?: boolean | "menu" | "listbox" | "tree" | "grid" | "dialog"
  role?: string
  dataTestId?: string
  onAnalytics?: (event: string, data: Record<string, any>) => void
  // Advanced features
  ripple?: boolean
  elevation?: 0 | 1 | 2 | 3 | 4 | 5
  theme?: "light" | "dark" | "auto"
  locale?: string
  // Performance
  memoize?: boolean
  debounceMs?: number
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = "primary", 
    size = "md", 
    fullWidth = false,
    loading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    // Enterprise features
    tooltip,
    analyticsId,
    analyticsEvent,
    analyticsData,
    ariaLabel,
    ariaDescribedBy,
    ariaExpanded,
    ariaPressed,
    ariaControls,
    ariaHaspopup,
    role,
    dataTestId,
    onAnalytics,
    // Advanced features
    ripple = true,
    elevation = 1,
    theme = "auto",
    locale,
    // Performance
    memoize = false,
    debounceMs = 0,
    onClick,
    ...props 
  }, ref) => {
    // Enterprise state management
    const [rippleEffect, setRippleEffect] = React.useState<{ x: number; y: number; key: number } | null>(null)
    const [isFocused, setIsFocused] = React.useState(false)
    const [isHovered, setIsHovered] = React.useState(false)
    const debounceRef = React.useRef<ReturnType<typeof setTimeout>>()
    
    // Memoization for performance
    const memoizedButton = React.useMemo(() => {
      if (!memoize) return null
      return { variant, size, fullWidth, loading, disabled }
    }, [memoize, variant, size, fullWidth, loading, disabled])
    
    // Analytics tracking
    const handleAnalytics = React.useCallback((event: string, data: Record<string, any>) => {
      if (onAnalytics) {
        onAnalytics(event, {
          component: 'Button',
          analyticsId,
          analyticsEvent: analyticsEvent || event,
          ...analyticsData,
          ...data
        })
      }
    }, [onAnalytics, analyticsId, analyticsEvent, analyticsData])
    
    // Enhanced click handler with debouncing and analytics
    const handleClick = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
      if (debounceMs > 0) {
        if (debounceRef.current) {
          clearTimeout(debounceRef.current)
        }
        debounceRef.current = setTimeout(() => {
          onClick?.(event)
          handleAnalytics('click', { event: 'button_click' })
        }, debounceMs)
      } else {
        onClick?.(event)
        handleAnalytics('click', { event: 'button_click' })
      }
    }, [onClick, debounceMs, handleAnalytics])
    
    // Ripple effect handler
    const handleRipple = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
      if (!ripple || disabled || loading) return
      
      const rect = event.currentTarget.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      
      setRippleEffect({ x, y, key: Date.now() })
      
      // Remove ripple after animation
      setTimeout(() => setRippleEffect(null), 600)
    }, [ripple, disabled, loading])
    
    // Enhanced accessibility attributes
    const accessibilityProps = {
      'aria-label': ariaLabel || (typeof children === 'string' ? children : undefined),
      'aria-describedby': ariaDescribedBy,
      'aria-expanded': ariaExpanded,
      'aria-pressed': ariaPressed,
      'aria-controls': ariaControls,
      'aria-haspopup': ariaHaspopup,
      'role': role,
      'data-testid': dataTestId,
      'data-analytics-id': analyticsId,
      'data-locale': locale,
      'data-theme': theme
    }
    
    // Base classes with Material Design improvements and enterprise features
    const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden transform hover:scale-[1.02] active:scale-[0.98] group"
    
    // Size classes
    const sizeClasses = {
      xs: "px-2.5 py-1.5 text-xs rounded-md h-7",
      sm: "px-3 py-2 text-sm rounded-md h-8",
      md: "px-4 py-2.5 text-sm rounded-lg h-10",
      lg: "px-6 py-3 text-base rounded-lg h-12",
      xl: "px-8 py-4 text-lg rounded-xl h-14"
    }

    // Enterprise elevation system
    const elevationClasses = {
      0: "shadow-none",
      1: "shadow-sm",
      2: "shadow-md",
      3: "shadow-lg",
      4: "shadow-xl",
      5: "shadow-2xl"
    }
    
    // Enhanced variant classes with Material Design elevations and proper visibility
    const variantClasses = {
      primary: "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
      secondary: "bg-slate-600 text-white hover:bg-slate-700 dark:bg-slate-500 dark:hover:bg-slate-600",
      outline: "border-2 border-blue-600 bg-transparent text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-slate-900",
      ghost: "text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:text-blue-400 dark:hover:bg-slate-800 dark:hover:text-blue-300",
      success: "bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600",
      warning: "bg-yellow-600 text-white hover:bg-yellow-700 dark:bg-yellow-500 dark:hover:bg-yellow-600",
      error: "bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600",
      info: "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
    }
    
    // Cleanup debounce on unmount
    React.useEffect(() => {
      return () => {
        if (debounceRef.current) {
          clearTimeout(debounceRef.current)
        }
      }
    }, [])

    return (
      <button
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          elevationClasses[elevation],
          fullWidth && "w-full",
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        onClick={handleClick}
        onMouseDown={handleRipple}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        title={tooltip}
        {...accessibilityProps}
        {...props}
      >
        {/* Enterprise Ripple Effect */}
        {ripple && rippleEffect && (
          <span
            key={rippleEffect.key}
            className="absolute rounded-full bg-white/30 animate-ping pointer-events-none"
            style={{
              left: rippleEffect.x - 10,
              top: rippleEffect.y - 10,
              width: 20,
              height: 20,
              animationDuration: '600ms'
            }}
          />
        )}
        
        {/* Material Design Ripple Effect */}
        <span className="absolute inset-0 rounded-[inherit] bg-white/10 opacity-0 transition-opacity group-hover:opacity-100 group-active:opacity-20 pointer-events-none" />
        
        {/* Content wrapper */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {loading && (
            <svg className="animate-spin h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )}
          {!loading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {!loading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </span>
        
        {/* Enterprise tooltip */}
        {tooltip && (
          <span className="sr-only">{tooltip}</span>
        )}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }