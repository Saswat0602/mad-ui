import * as React from "react"
import { cn } from "../../lib/utils"
import { componentColors } from "../../lib/colors"

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
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

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
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
    const switchVariant = error ? "error" : success ? "success" : variant
    
    // Size classes
    const sizeClasses = {
      sm: "w-9 h-5",
      md: "w-11 h-6",
      lg: "w-14 h-7"
    }
    
    const thumbSizeClasses = {
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
    const defaultColors = componentColors.input[switchVariant as keyof typeof componentColors.input] || componentColors.input.default
    
    // Custom styles
    const customStyles: React.CSSProperties = {
      backgroundColor: backgroundColor || color || defaultColors.bg,
      borderColor: borderColor || defaultColors.border,
      borderRadius: borderRadius,
      ...style
    }
    
    return (
      <div className={cn("flex items-center", fullWidth && "w-full")}>
        {leftIcon && (
          <span className="mr-2 text-gray-400">
            {leftIcon}
          </span>
        )}
        
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            ref={ref}
            {...props}
          />
          
          <div
            className={cn(
              "relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out",
              sizeClasses[size],
              shadowClasses[shadow],
              "bg-slate-300 dark:bg-slate-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-400",
              className
            )}
            style={customStyles}
          >
            <div
              className={cn(
                "absolute left-0.5 bg-white dark:bg-slate-200 rounded-full transition-transform duration-200 ease-in-out shadow-sm",
                thumbSizeClasses[size],
                "peer-checked:translate-x-full"
              )}
            />
          </div>
        </label>
        
        <div className="ml-3">
          {label && (
            <label 
              className={cn(
                "font-medium cursor-pointer select-none",
                labelSizeClasses[size],
                "text-slate-700 dark:text-slate-300"
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

Switch.displayName = "Switch"

export { Switch }
