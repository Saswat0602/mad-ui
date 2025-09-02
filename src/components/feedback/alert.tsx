import * as React from "react"
import { cn } from "../../lib/utils"
import { componentColors } from "../../lib/colors"

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "success" | "error" | "warning" | "info" | "primary" | "neutral"
  title?: string
  message?: string
  onClose?: () => void
  closable?: boolean
  variant?: "default" | "filled" | "outlined"
  size?: "sm" | "md" | "lg"
  fullWidth?: boolean
  color?: string
  backgroundColor?: string
  borderColor?: string
  textColor?: string
  iconColor?: string
  borderRadius?: string | number
  shadow?: "none" | "sm" | "md" | "lg"
  icon?: React.ReactNode
  actions?: React.ReactNode
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ 
    className, 
    type = "info",
    title,
    message,
    onClose,
    closable = false,
    variant = "default",
    size = "md",
    fullWidth = false,
    color,
    backgroundColor,
    borderColor,
    textColor,
    iconColor,
    borderRadius,
    shadow = "sm",
    icon,
    actions,
    children,
    style,
    ...props 
  }, ref) => {
    
    // Size classes
    const sizeClasses = {
      sm: "p-3",
      md: "p-4",
      lg: "p-6"
    }
    
    // Shadow classes
    const shadowClasses = {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg"
    }
    
    // Default alert configuration
    const alertConfig = {
      success: {
        icon: "✓",
        bgColor: "var(--accent-success)",
        borderColor: "var(--accent-success)",
        textColor: "var(--text-inverse)",
        iconColor: "var(--text-inverse)"
      },
      error: {
        icon: "✕",
        bgColor: "var(--accent-error)",
        borderColor: "var(--accent-error)",
        textColor: "var(--text-inverse)",
        iconColor: "var(--text-inverse)"
      },
      warning: {
        icon: "⚠",
        bgColor: "var(--accent-warning)",
        borderColor: "var(--accent-warning)",
        textColor: "var(--text-inverse)",
        iconColor: "var(--text-inverse)"
      },
      info: {
        icon: "ℹ",
        bgColor: "var(--accent-info)",
        borderColor: "var(--accent-info)",
        textColor: "var(--text-inverse)",
        iconColor: "var(--text-inverse)"
      },
      primary: {
        icon: "ℹ",
        bgColor: "var(--accent-primary)",
        borderColor: "var(--accent-primary)",
        textColor: "var(--text-inverse)",
        iconColor: "var(--text-inverse)"
      },
      neutral: {
        icon: "ℹ",
        bgColor: "var(--bg-tertiary)",
        borderColor: "var(--border-primary)",
        textColor: "var(--text-primary)",
        iconColor: "var(--text-muted)"
      }
    }
    
    const config = alertConfig[type]
    
    // Variant styles
    const getVariantStyles = () => {
      switch (variant) {
        case "filled":
          return {
            backgroundColor: backgroundColor || color || config.bgColor,
            color: textColor || config.textColor,
            border: "none"
          }
        case "outlined":
          return {
            backgroundColor: "transparent",
            color: textColor || config.textColor,
            border: `1px solid ${borderColor || config.borderColor}`
          }
        default:
          return {
            backgroundColor: backgroundColor || "var(--bg-card)",
            color: textColor || config.textColor,
            border: `1px solid ${borderColor || config.borderColor}`
          }
      }
    }
    
    const customStyles: React.CSSProperties = {
      ...getVariantStyles(),
      borderRadius: borderRadius,
      ...style
    }
    
    const handleClose = () => {
      if (onClose) {
        onClose()
      }
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          "relative border rounded-lg transition-all duration-200",
          sizeClasses[size],
          shadowClasses[shadow],
          fullWidth && "w-full",
          className
        )}
        style={customStyles}
        {...props}
      >
        <div className="flex items-start">
          {/* Icon */}
          <div className="flex-shrink-0 mr-3">
            {icon || (
              <span 
                className="text-lg font-bold"
                style={{ color: iconColor || config.iconColor }}
              >
                {config.icon}
              </span>
            )}
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            {title && (
              <h3 className="text-sm font-medium mb-1">
                {title}
              </h3>
            )}
            {message && (
              <div className="text-sm">
                {message}
              </div>
            )}
            {children && (
              <div className="mt-2">
                {children}
              </div>
            )}
            {actions && (
              <div className="mt-3 flex gap-2">
                {actions}
              </div>
            )}
          </div>
          
          {/* Close button */}
          {(closable || onClose) && (
            <div className="ml-auto pl-3">
              <button
                type="button"
                onClick={handleClose}
                className={cn(
                  "inline-flex rounded-md p-1.5 transition-colors",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2",
                  "hover:bg-black/10 dark:hover:bg-white/10"
                )}
                style={{
                  color: iconColor || config.iconColor
                }}
              >
                <span className="h-4 w-4">✕</span>
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
)

Alert.displayName = "Alert"

export { Alert }
