import * as React from "react"
import { cn } from "../lib/utils"
import { componentColors } from "../lib/colors"

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  error?: string
  helperText?: string
  success?: boolean
  variant?: "default" | "error" | "success"
  size?: "sm" | "md" | "lg"
  fullWidth?: boolean
  color?: string
  backgroundColor?: string
  borderColor?: string
  textColor?: string
  focusColor?: string
  borderRadius?: string | number
  shadow?: "none" | "sm" | "md" | "lg"
  indeterminate?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
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
    fullWidth = false,
    color,
    backgroundColor,
    borderColor,
    textColor,
    focusColor,
    borderRadius,
    shadow = "sm",
    indeterminate = false,
    leftIcon,
    rightIcon,
    style,
    ...props 
  }, ref) => {
    
    // Determine variant
    const checkboxVariant = error ? "error" : success ? "success" : variant
    
    // Size classes
    const sizeClasses = {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6"
    }
    
    const labelSizeClasses = {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    }
    
    // Shadow classes
    const shadowClasses = {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg"
    }
    
    // Get default colors
    const defaultColors = componentColors.input[checkboxVariant as keyof typeof componentColors.input] || componentColors.input.default
    
    // Custom styles
    const customStyles: React.CSSProperties = {
      backgroundColor: backgroundColor || color || defaultColors.bg,
      borderColor: borderColor || defaultColors.border,
      borderRadius: borderRadius,
      ...style
    }
    
    // Focus and blur handlers
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      const focusBorderColor = focusColor || defaultColors.focus
      e.target.style.borderColor = focusBorderColor
      e.target.style.boxShadow = `0 0 0 3px ${focusBorderColor}20`
    }
    
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      e.target.style.borderColor = borderColor || defaultColors.border
      e.target.style.boxShadow = "none"
    }
    
    // Set indeterminate state
    React.useEffect(() => {
      if (ref && typeof ref === 'object' && ref.current) {
        ref.current.indeterminate = indeterminate
      }
    }, [indeterminate, ref])
    
    return (
      <div className={cn("flex items-start", fullWidth && "w-full")}>
        {leftIcon && (
          <span className="mr-2 text-gray-400">
            {leftIcon}
          </span>
        )}
        
        <div className="flex items-center h-5">
          <input
            type="checkbox"
            className={cn(
              "rounded border border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2",
              sizeClasses[size],
              shadowClasses[shadow],
              className
            )}
            style={customStyles}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
        </div>
        
        <div className="ml-3 text-sm">
          {label && (
            <label 
              className={cn(
                "font-medium cursor-pointer select-none",
                labelSizeClasses[size],
                "text-gray-700 dark:text-gray-300"
              )}
              style={{ color: textColor || "var(--text-primary)" }}
            >
              {label}
            </label>
          )}
          
          {(error || helperText) && (
            <p 
              className={cn(
                "mt-1",
                labelSizeClasses[size]
              )}
              style={{ 
                color: error 
                  ? "var(--accent-error)" 
                  : helperText 
                    ? "var(--text-muted)" 
                    : "var(--text-secondary)" 
              }}
            >
              {error || helperText}
            </p>
          )}
        </div>
        
        {rightIcon && (
          <span className="ml-2 text-gray-400">
            {rightIcon}
          </span>
        )}
      </div>
    )
  }
)

Checkbox.displayName = "Checkbox"

export { Checkbox }
