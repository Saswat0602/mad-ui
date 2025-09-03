import * as React from "react"
import { cn } from "../../lib/utils"
import { componentColors } from "../../lib/colors"

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
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
  options: SelectOption[]
  placeholder?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ 
    className, 
    label, 
    error, 
    helperText, 
    success,
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
    options,
    placeholder,
    leftIcon,
    rightIcon,
    style,
    ...props 
  }, ref) => {
    
    // Determine variant
    const selectVariant = error ? "error" : success ? "success" : variant
    
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
    const defaultColors = componentColors.input[selectVariant as keyof typeof componentColors.input] || componentColors.input.default
    
    // Custom styles
    const customStyles: React.CSSProperties = {
      backgroundColor: backgroundColor || color || defaultColors.bg,
      color: textColor || defaultColors.text,
      borderColor: borderColor || defaultColors.border,
      borderRadius: borderRadius,
      ...style
    }
    
    // Focus and blur handlers
    const handleFocus = (e: React.FocusEvent<HTMLSelectElement>) => {
      const focusBorderColor = focusColor || defaultColors.focus
      e.target.style.borderColor = focusBorderColor
      e.target.style.boxShadow = `0 0 0 3px ${focusBorderColor}20`
    }
    
    const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
      e.target.style.borderColor = borderColor || defaultColors.border
      e.target.style.boxShadow = "none"
    }
    
    return (
      <div className={cn("w-full", fullWidth && "w-full")}>
        {label && (
          <label 
            className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none">
              {leftIcon}
            </div>
          )}
          
          <select
            className={cn(
              "w-full rounded-lg border-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200",
              sizeClasses[size],
              shadowClasses[shadow],
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              "appearance-none",
              className
            )}
            style={customStyles}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          
          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none">
              {rightIcon}
            </div>
          )}
          
          {/* Custom dropdown arrow */}
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg
              className="w-4 h-4 text-slate-400 dark:text-slate-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
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

Select.displayName = "Select"

export { Select }
