import * as React from "react"
import { cn } from "../../lib/utils"
import { componentColors } from "../../lib/colors"

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
  color?: string
  backgroundColor?: string
  borderColor?: string
  textColor?: string
  focusColor?: string
  borderRadius?: string | number
  shadow?: "none" | "sm" | "md" | "lg"
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type, 
    label, 
    error, 
    helperText, 
    success,
    leftIcon,
    rightIcon,
    variant = "default",
    size = "md",
    fullWidth = true,
    color,
    backgroundColor,
    borderColor,
    textColor,
    focusColor,
    borderRadius,
    shadow = "sm",
    style,
    ...props 
  }, ref) => {
    
    // Determine variant
    const inputVariant = error ? "error" : success ? "success" : variant
    
    // Size classes
    const sizeClasses = {
      sm: "px-2 py-1.5 text-sm",
      md: "px-3 py-2 text-sm",
      lg: "px-4 py-3 text-base"
    }
    
    // Shadow classes
    const shadowClasses = {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg"
    }
    
    // Get default colors
    const defaultColors = componentColors.input[inputVariant as keyof typeof componentColors.input] || componentColors.input.default
    
    // Custom styles
    const customStyles: React.CSSProperties = {
      backgroundColor: backgroundColor || color || defaultColors.bg,
      color: textColor || defaultColors.text,
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
    
    return (
      <div className={cn("w-full", fullWidth && "w-full")}>
        {label && (
          <label 
            className="ui-label mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}
          
          <input
            type={type}
            className={cn(
              "ui-input",
              sizeClasses[size],
              shadowClasses[shadow],
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              className
            )}
            style={customStyles}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>
        
        {(error || helperText) && (
          <p 
            className="text-sm mt-1"
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
    )
  }
)

Input.displayName = "Input"

export { Input }
