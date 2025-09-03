import * as React from "react"
import { cn } from "../../lib/utils"

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  error?: string
  helperText?: string
  success?: boolean
  variant?: "default" | "error" | "success"
  size?: "sm" | "md" | "lg"
  indeterminate?: boolean
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ 
    className, 
    label, 
    error, 
    helperText, 
    success,
    variant = "default",
    size = "md",
    indeterminate = false,
    id,
    ...props 
  }, ref) => {
    
    const checkboxRef = React.useRef<HTMLInputElement>(null)
    
    // Combine refs
    React.useImperativeHandle(ref, () => checkboxRef.current!)
    
    // Set indeterminate state
    React.useEffect(() => {
      if (checkboxRef.current) {
        checkboxRef.current.indeterminate = indeterminate
      }
    }, [indeterminate])
    
    // Determine variant based on states
    const checkboxVariant = error ? "error" : success ? "success" : variant
    
    // Size classes with Material Design sizing
    const sizeClasses = {
      sm: "h-4 w-4",
      md: "h-5 w-5", 
      lg: "h-6 w-6"
    }
    
    // Base classes with Material Design improvements and proper visibility
    const baseClasses = "rounded border-2 shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer bg-white dark:bg-slate-800"
    
    // Enhanced variant classes with Material Design states and proper visibility
    const variantClasses = {
      default: "border-slate-400 dark:border-slate-500 text-blue-600 dark:text-blue-400 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md",
      error: "border-red-500 dark:border-red-400 text-red-600 dark:text-red-400 focus-visible:ring-red-500 dark:focus-visible:ring-red-400 hover:border-red-600 dark:hover:border-red-500 hover:shadow-md",
      success: "border-green-500 dark:border-green-400 text-green-600 dark:text-green-400 focus-visible:ring-green-500 dark:focus-visible:ring-green-400 hover:border-green-600 dark:hover:border-green-500 hover:shadow-md"
    }
    
    return (
      <div className="flex items-start space-x-3">
        <div className="relative flex items-center">
          {/* Checkbox Input */}
          <input
            ref={checkboxRef}
            type="checkbox"
            id={id}
            className={cn(
              baseClasses,
              variantClasses[checkboxVariant],
              sizeClasses[size],
              className
            )}
            {...props}
          />
          
          {/* Material Design Ripple Effect */}
          <div className="absolute inset-0 rounded border-2 border-transparent pointer-events-none">
            <div className="absolute inset-0 rounded bg-primary/10 opacity-0 transition-opacity hover:opacity-100" />
          </div>
          
          {/* Custom Check Icon */}
          {(props.checked || indeterminate) && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {indeterminate ? (
                <svg className="h-3 w-3 text-current" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="h-3 w-3 text-current" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          )}
        </div>
        
        {/* Label and Helper Text */}
        {(label || helperText || error) && (
          <div className="flex-1 space-y-1">
            {label && (
              <label 
                htmlFor={id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {label}
              </label>
            )}
            
            {(error || helperText) && (
              <p className={cn(
                "text-xs leading-relaxed",
                error ? "text-red-500" : "text-muted-foreground"
              )}>
                {error || helperText}
              </p>
            )}
          </div>
        )}
      </div>
    )
  }
)

Checkbox.displayName = "Checkbox"

export { Checkbox }