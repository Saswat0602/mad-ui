import * as React from "react"
import { cn } from "../../lib/utils"
import { componentColors } from "../../lib/colors"

export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
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
  rows?: number
  maxRows?: number
  minRows?: number
  resize?: "none" | "both" | "horizontal" | "vertical"
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
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
    rows = 3,
    maxRows,
    minRows,
    resize = "vertical",
    style,
    ...props 
  }, ref) => {
    
    // Determine variant
    const textareaVariant = error ? "error" : success ? "success" : variant
    
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
    
    // Resize classes
    const resizeClasses = {
      none: "resize-none",
      both: "resize",
      horizontal: "resize-x",
      vertical: "resize-y"
    }
    
    // Get default colors
    const defaultColors = componentColors.input[textareaVariant as keyof typeof componentColors.input] || componentColors.input.default
    
    // Custom styles
    const customStyles: React.CSSProperties = {
      backgroundColor: backgroundColor || color || defaultColors.bg,
      color: textColor || defaultColors.text,
      borderColor: borderColor || defaultColors.border,
      borderRadius: borderRadius,
      resize: resize,
      ...style
    }
    
    // Focus and blur handlers
    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      const focusBorderColor = focusColor || defaultColors.focus
      e.target.style.borderColor = focusBorderColor
      e.target.style.boxShadow = `0 0 0 3px ${focusBorderColor}20`
    }
    
    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
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
        
        <textarea
          className={cn(
            "w-full rounded-lg border-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200 placeholder:text-slate-500 dark:placeholder:text-slate-400",
            sizeClasses[size],
            shadowClasses[shadow],
            resizeClasses[resize],
            "min-h-[80px]",
            className
          )}
          style={customStyles}
          ref={ref}
          rows={rows}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        
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

Textarea.displayName = "Textarea"

export { Textarea }
