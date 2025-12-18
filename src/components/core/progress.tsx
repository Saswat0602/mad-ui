"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  variant?: "default" | "success" | "warning" | "destructive"
  size?: "sm" | "md" | "lg"
  showLabel?: boolean
  label?: string
  indicatorClassName?: string
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({
    className,
    value = 0,
    max = 100,
    variant = "default",
    size = "md",
    showLabel = false,
    label,
    indicatorClassName,
    ...props
  }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

    const sizeClasses = {
      sm: "h-2",
      md: "h-3",
      lg: "h-4"
    }

    const variantClasses = {
      default: "bg-primary",
      success: "bg-green-500",
      warning: "bg-yellow-500",
      destructive: "bg-destructive"
    }

    return (
      <div className="w-full space-y-2">
        {(showLabel || label) && (
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">{label || "Progress"}</span>
            <span className="text-muted-foreground">{Math.round(percentage)}%</span>
          </div>
        )}

        <div
          ref={ref}
          className={cn(
            "relative overflow-hidden rounded-full bg-secondary",
            sizeClasses[size],
            className
          )}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={label || "Progress bar"}
          {...props}
        >
          <div
            className={cn(
              "h-full transition-all duration-500 ease-out",
              variantClasses[variant],
              indicatorClassName
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    )
  }
)

Progress.displayName = "Progress"

export { Progress }
