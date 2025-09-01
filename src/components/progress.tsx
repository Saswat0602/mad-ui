import * as React from "react"
import { cn } from "../lib/utils"
import { componentColors } from "../lib/colors"

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  min?: number
  variant?: "default" | "success" | "warning" | "error" | "info"
  size?: "sm" | "md" | "lg"
  showValue?: boolean
  showLabel?: boolean
  label?: string
  animated?: boolean
  striped?: boolean
  fullWidth?: boolean
  color?: string
  backgroundColor?: string
  progressColor?: string
  textColor?: string
  borderRadius?: string | number
  height?: string | number
  shadow?: "none" | "sm" | "md" | "lg"
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ 
    className, 
    value = 0,
    max = 100,
    min = 0,
    variant = "default",
    size = "md",
    showValue = false,
    showLabel = false,
    label,
    animated = false,
    striped = false,
    fullWidth = true,
    color,
    backgroundColor,
    progressColor,
    textColor,
    borderRadius,
    height,
    shadow = "sm",
    style,
    ...props 
  }, ref) => {
    
    // Calculate percentage
    const percentage = Math.min(Math.max(((value - min) / (max - min)) * 100, 0), 100)
    
    // Size classes
    const sizeClasses = {
      sm: "h-2",
      md: "h-3",
      lg: "h-4"
    }
    
    const textSizeClasses = {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base"
    }
    
    // Shadow classes
    const shadowClasses = {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg"
    }
    
    // Variant colors
    const variantColors = {
      default: "var(--accent-primary)",
      success: "var(--accent-success)",
      warning: "var(--accent-warning)",
      error: "var(--accent-error)",
      info: "var(--accent-info)"
    }
    
    // Custom styles
    const customStyles: React.CSSProperties = {
      backgroundColor: backgroundColor || color || "var(--bg-tertiary)",
      borderRadius: borderRadius,
      height: height,
      ...style
    }
    
    const progressStyles: React.CSSProperties = {
      backgroundColor: progressColor || variantColors[variant],
      width: `${percentage}%`,
      borderRadius: borderRadius,
      transition: animated ? "width 0.3s ease-in-out" : "none"
    }
    
    const textStyles: React.CSSProperties = {
      color: textColor || "var(--text-primary)"
    }
    
    return (
      <div className={cn("w-full", fullWidth && "w-full")}>
        {/* Label and Value */}
        {(showLabel || label || showValue) && (
          <div className="flex items-center justify-between mb-2">
            {(showLabel || label) && (
              <span 
                className={cn("font-medium", textSizeClasses[size])}
                style={textStyles}
              >
                {label || "Progress"}
              </span>
            )}
            {showValue && (
              <span 
                className={cn("text-muted-foreground", textSizeClasses[size])}
                style={{ color: textColor || "var(--text-muted)" }}
              >
                {Math.round(percentage)}%
              </span>
            )}
          </div>
        )}
        
        {/* Progress Bar */}
        <div
          ref={ref}
          className={cn(
            "relative overflow-hidden rounded-full",
            sizeClasses[size],
            shadowClasses[shadow],
            className
          )}
          style={customStyles}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-label={label || "Progress bar"}
          {...props}
        >
          <div
            className={cn(
              "h-full transition-all duration-300 ease-out",
              striped && "bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:20px_100%]",
              animated && striped && "animate-pulse"
            )}
            style={progressStyles}
          />
        </div>
      </div>
    )
  }
)

Progress.displayName = "Progress"

export { Progress }
