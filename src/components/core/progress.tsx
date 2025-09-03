import * as React from "react"
import { cn } from "../../lib/utils"
import { componentColors } from "../../lib/colors"

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
    
    // Variant colors with proper visibility
    const variantColors = {
      default: "rgb(59 130 246)", // blue-500
      success: "rgb(34 197 94)", // green-500
      warning: "rgb(234 179 8)", // yellow-500
      error: "rgb(239 68 68)", // red-500
      info: "rgb(59 130 246)" // blue-500
    }
    
    // Custom styles with proper visibility
    const customStyles: React.CSSProperties = {
      backgroundColor: backgroundColor || color || "rgb(226 232 240)", // slate-200
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
      color: textColor || "rgb(15 23 42)" // slate-900
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
                className={cn("text-slate-600 dark:text-slate-400", textSizeClasses[size])}
                style={{ color: textColor || "rgb(71 85 105)" }}
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
