import * as React from "react"
import { cn } from "../../lib/utils"
import { componentColors } from "../../lib/colors"

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular" | "rounded"
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  width?: string | number
  height?: string | number
  animation?: "pulse" | "wave" | "none"
  color?: string
  backgroundColor?: string
  borderRadius?: string | number
  shadow?: "none" | "sm" | "md" | "lg"
  lines?: number
  spacing?: "tight" | "normal" | "loose"
  fullWidth?: boolean
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ 
    className, 
    variant = "rounded",
    size = "md",
    width,
    height,
    animation = "pulse",
    color,
    backgroundColor,
    borderRadius,
    shadow = "none",
    lines = 1,
    spacing = "normal",
    fullWidth = false,
    style,
    ...props 
  }, ref) => {
    
    // Size classes
    const sizeClasses = {
      xs: "h-2",
      sm: "h-3",
      md: "h-4",
      lg: "h-6",
      xl: "h-8"
    }
    
    // Animation classes
    const animationClasses = {
      pulse: "animate-pulse",
      wave: "animate-pulse",
      none: ""
    }
    
    // Shadow classes
    const shadowClasses = {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg"
    }
    
    // Spacing classes
    const spacingClasses = {
      tight: "space-y-1",
      normal: "space-y-2",
      loose: "space-y-3"
    }
    
    // Variant styles
    const getVariantStyles = () => {
      switch (variant) {
        case "text":
          return {
            width: fullWidth ? "100%" : width || "100%",
            height: height || sizeClasses[size],
            borderRadius: borderRadius || "4px"
          }
        case "circular":
          return {
            width: width || height || sizeClasses[size],
            height: height || width || sizeClasses[size],
            borderRadius: borderRadius || "50%"
          }
        case "rectangular":
          return {
            width: fullWidth ? "100%" : width || "100%",
            height: height || sizeClasses[size],
            borderRadius: borderRadius || "0"
          }
        case "rounded":
          return {
            width: fullWidth ? "100%" : width || "100%",
            height: height || sizeClasses[size],
            borderRadius: borderRadius || "8px"
          }
        default:
          return {
            width: fullWidth ? "100%" : width || "100%",
            height: height || sizeClasses[size],
            borderRadius: borderRadius || "8px"
          }
      }
    }
    
    // Custom styles with proper visibility
    const customStyles: React.CSSProperties = {
      backgroundColor: backgroundColor || color || "rgb(226 232 240)", // slate-200
      ...getVariantStyles(),
      ...style
    }
    
    // Render single skeleton
    const renderSkeleton = () => (
      <div
        ref={ref}
        className={cn(
          "bg-slate-200 dark:bg-slate-600",
          animationClasses[animation],
          shadowClasses[shadow],
          className
        )}
        style={customStyles}
        {...props}
      />
    )
    
    // Render multiple lines
    if (lines > 1) {
      return (
        <div className={cn("w-full", spacingClasses[spacing])}>
          {Array.from({ length: lines }, (_, index) => (
            <div
              key={index}
              className={cn(
                "bg-slate-200 dark:bg-slate-600",
                animationClasses[animation],
                shadowClasses[shadow],
                className
              )}
              style={{
                ...customStyles,
                width: index === lines - 1 ? "60%" : "100%"
              }}
            />
          ))}
        </div>
      )
    }
    
    return renderSkeleton()
  }
)

Skeleton.displayName = "Skeleton"

export { Skeleton }
