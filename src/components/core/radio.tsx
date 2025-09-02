import * as React from "react"
import { cn } from "../../lib/utils"
import { componentColors } from "../../lib/colors"

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
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
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
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
    leftIcon,
    rightIcon,
    style,
    ...props 
  }, ref) => {
    
    // Determine variant
    const radioVariant = error ? "error" : success ? "success" : variant
    
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
    const defaultColors = componentColors.input[radioVariant as keyof typeof componentColors.input] || componentColors.input.default
    
    // Custom styles
    const customStyles: React.CSSProperties = {
      backgroundColor: backgroundColor || color || defaultColors.bg,
      borderColor: borderColor || defaultColors.border,
      borderRadius: borderRadius,
      ...style
    }
    
    return (
      <div className={cn("flex items-start", fullWidth && "w-full")}>
        {leftIcon && (
          <span className="mr-2 text-gray-400">
            {leftIcon}
          </span>
        )}
        
        <div className="flex items-center h-5">
          <input
            type="radio"
            className={cn(
              "rounded-full border border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2",
              sizeClasses[size],
              shadowClasses[shadow],
              className
            )}
            style={customStyles}
            ref={ref}
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

Radio.displayName = "Radio"

export { Radio }
