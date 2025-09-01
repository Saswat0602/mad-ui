import * as React from "react"
import { cn } from "../lib/utils"
import { componentColors } from "../lib/colors"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "success" | "warning" | "error" | "info"
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  color?: string
  backgroundColor?: string
  borderColor?: string
  textColor?: string
  hoverColor?: string
  width?: string | number
  height?: string | number
  borderRadius?: string | number
  shadow?: "none" | "sm" | "md" | "lg" | "xl"
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
    color,
    backgroundColor,
    borderColor,
    textColor,
    hoverColor,
    width,
    height,
    borderRadius,
    shadow = "sm",
    fullWidth = false,
    loading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    style,
    ...props 
  }, ref) => {
    
    // Size classes
    const sizeClasses = {
      xs: "px-2 py-1 text-xs rounded",
      sm: "px-3 py-1.5 text-sm rounded-md",
      md: "px-4 py-2 text-sm rounded-lg",
      lg: "px-6 py-3 text-base rounded-lg",
      xl: "px-8 py-4 text-lg rounded-xl"
    }

    // Shadow classes
    const shadowClasses = {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl"
    }

    // Get default colors from componentColors
    const defaultColors = componentColors.button[variant as keyof typeof componentColors.button] || componentColors.button.primary

    // Custom styles with fallbacks to defaults
    const customStyles: React.CSSProperties = {
      backgroundColor: backgroundColor || color || defaultColors.bg,
      color: textColor || defaultColors.text,
      borderColor: borderColor || defaultColors.border,
      borderWidth: variant === "outline" ? "1px" : "0",
      borderStyle: "solid",
      width: fullWidth ? "100%" : width,
      height: height,
      borderRadius: borderRadius,
      ...style
    }

    // Hover styles
    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (hoverColor) {
        e.currentTarget.style.backgroundColor = hoverColor
      } else if (variant === "primary") {
        e.currentTarget.style.backgroundColor = "var(--accent-secondary)"
      } else if (variant === "secondary" || variant === "outline") {
        e.currentTarget.style.backgroundColor = "var(--bg-tertiary)"
      } else if (variant === "ghost") {
        e.currentTarget.style.backgroundColor = "var(--bg-tertiary)"
      } else if (variant === "success") {
        e.currentTarget.style.backgroundColor = "var(--success)"
      } else if (variant === "warning") {
        e.currentTarget.style.backgroundColor = "var(--warning)"
      } else if (variant === "error") {
        e.currentTarget.style.backgroundColor = "var(--error)"
      } else if (variant === "info") {
        e.currentTarget.style.backgroundColor = "var(--info)"
      }
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (hoverColor) {
        e.currentTarget.style.backgroundColor = backgroundColor || color || defaultColors.bg
      } else if (variant === "primary") {
        e.currentTarget.style.backgroundColor = "var(--accent-primary)"
      } else if (variant === "secondary") {
        e.currentTarget.style.backgroundColor = "var(--bg-tertiary)"
      } else if (variant === "outline" || variant === "ghost") {
        e.currentTarget.style.backgroundColor = "transparent"
      } else if (variant === "success") {
        e.currentTarget.style.backgroundColor = "var(--accent-success)"
      } else if (variant === "warning") {
        e.currentTarget.style.backgroundColor = "var(--accent-warning)"
      } else if (variant === "error") {
        e.currentTarget.style.backgroundColor = "var(--accent-error)"
      } else if (variant === "info") {
        e.currentTarget.style.backgroundColor = "var(--accent-info)"
      }
    }

    return (
      <button
        className={cn(
          "ui-button",
          sizeClasses[size],
          shadowClasses[shadow],
          fullWidth && "w-full",
          className
        )}
        style={customStyles}
        ref={ref}
        disabled={disabled || loading}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {loading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {!loading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }
