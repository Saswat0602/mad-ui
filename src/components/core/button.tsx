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
    ...props 
  }, ref) => {
    
    // Base classes with Material Design improvements
    const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden transform hover:scale-[1.02] active:scale-[0.98] group"
    
    // Size classes
    const sizeClasses = {
      xs: "px-2.5 py-1.5 text-xs rounded-md h-7",
      sm: "px-3 py-2 text-sm rounded-md h-8",
      md: "px-4 py-2.5 text-sm rounded-lg h-10",
      lg: "px-6 py-3 text-base rounded-lg h-12",
      xl: "px-8 py-4 text-lg rounded-xl h-14"
    }

    // Enhanced variant classes with Material Design elevations and proper visibility
    const variantClasses = {
      primary: "bg-blue-600 text-white shadow-md hover:shadow-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
      secondary: "bg-slate-600 text-white shadow-sm hover:shadow-md hover:bg-slate-700 dark:bg-slate-500 dark:hover:bg-slate-600",
      outline: "border-2 border-blue-600 bg-transparent text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-slate-900",
      ghost: "text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:text-blue-400 dark:hover:bg-slate-800 dark:hover:text-blue-300",
      success: "bg-green-600 text-white shadow-md hover:shadow-lg hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600",
      warning: "bg-yellow-600 text-white shadow-md hover:shadow-lg hover:bg-yellow-700 dark:bg-yellow-500 dark:hover:bg-yellow-600",
      error: "bg-red-600 text-white shadow-md hover:shadow-lg hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600",
      info: "bg-blue-600 text-white shadow-md hover:shadow-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
    }

    return (
      <button
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && "w-full",
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
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
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }