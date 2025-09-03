import * as React from "react"
import { cn } from "../../lib/utils"

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  error?: string
  helperText?: string
  success?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  variant?: "default" | "error" | "success"
  size?: "sm" | "md" | "lg"
  fullWidth?: boolean
  floatingLabel?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type = "text", 
    label, 
    error, 
    helperText, 
    success,
    leftIcon,
    rightIcon,
    variant = "default",
    size = "md",
    fullWidth = true,
    floatingLabel = false,
    placeholder,
    ...props 
  }, ref) => {
    
    const [focused, setFocused] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(false)
    
    // Determine variant based on states
    const inputVariant = error ? "error" : success ? "success" : variant
    
    // Size classes with Material Design heights
    const sizeClasses = {
      sm: "h-9 px-3 text-sm",
      md: "h-11 px-4 text-sm", 
      lg: "h-13 px-4 text-base"
    }
    
    // Base classes with Material Design improvements and proper visibility
    const baseClasses = "w-full rounded-lg border-2 transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400"
    
    // Enhanced variant classes with Material Design focus states and proper visibility
    const variantClasses = {
      default: "border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 focus-visible:border-blue-500 dark:focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500/20 dark:focus-visible:ring-blue-400/20",
      error: "border-red-500 dark:border-red-400 hover:border-red-600 dark:hover:border-red-500 focus-visible:border-red-500 dark:focus-visible:border-red-400 focus-visible:ring-2 focus-visible:ring-red-500/20 dark:focus-visible:ring-red-400/20 text-red-900 dark:text-red-100",
      success: "border-green-500 dark:border-green-400 hover:border-green-600 dark:hover:border-green-500 focus-visible:border-green-500 dark:focus-visible:border-green-400 focus-visible:ring-2 focus-visible:ring-green-500/20 dark:focus-visible:ring-green-400/20 text-green-900 dark:text-green-100"
    }
    
    // Floating label classes
    const floatingLabelClasses = cn(
      "absolute left-4 transition-all duration-200 pointer-events-none text-muted-foreground",
      (focused || hasValue) 
        ? "top-2 text-xs text-primary transform -translate-y-1" 
        : "top-1/2 text-sm transform -translate-y-1/2"
    )
    
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true)
      props.onFocus?.(e)
    }
    
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false)
      setHasValue(e.target.value.length > 0)
      props.onBlur?.(e)
    }
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0)
      props.onChange?.(e)
    }
    
    return (
      <div className={cn("space-y-2", fullWidth && "w-full")}>
        {/* Regular Label */}
        {label && !floatingLabel && (
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
          </label>
        )}
        
        {/* Input Container */}
        <div className="relative group">
          {/* Left Icon */}
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground z-10">
              {leftIcon}
            </div>
          )}
          
          {/* Input Field */}
          <input
            type={type}
            className={cn(
              baseClasses,
              variantClasses[inputVariant],
              sizeClasses[size],
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              floatingLabel && hasValue && "pt-6 pb-2",
              className
            )}
            placeholder={floatingLabel ? "" : placeholder}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...props}
          />
          
          {/* Floating Label */}
          {label && floatingLabel && (
            <label className={floatingLabelClasses}>
              {label}
            </label>
          )}
          
          {/* Right Icon */}
          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground z-10">
              {rightIcon}
            </div>
          )}
          
          {/* Success/Error Icons */}
          {(success || error) && !rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10">
              {success && (
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
              {error && (
                <svg className="h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          )}
        </div>
        
        {/* Helper Text / Error Message */}
        {(error || helperText) && (
          <p className={cn(
            "text-xs leading-relaxed",
            error ? "text-red-500" : "text-muted-foreground"
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }