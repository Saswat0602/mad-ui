"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular" | "rounded"
  animation?: "pulse" | "wave" | "none"
  lines?: number
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({
    className,
    variant = "rounded",
    animation = "pulse",
    lines = 1,
    ...props
  }, ref) => {
    const variantClasses = {
      text: "h-4 w-full rounded",
      circular: "rounded-full",
      rectangular: "w-full",
      rounded: "rounded-md w-full"
    }

    const animationClasses = {
      pulse: "animate-pulse",
      wave: "animate-pulse bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:200%_100%]",
      none: ""
    }

    if (lines > 1) {
      return (
        <div className="space-y-2 w-full">
          {Array.from({ length: lines }, (_, index) => (
            <div
              key={index}
              className={cn(
                "bg-muted",
                variantClasses[variant],
                animationClasses[animation],
                index === lines - 1 && "w-3/4",
                className
              )}
              style={{ height: variant === "text" ? "1rem" : undefined }}
            />
          ))}
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(
          "bg-muted",
          variantClasses[variant],
          animationClasses[animation],
          className
        )}
        {...props}
      />
    )
  }
)

Skeleton.displayName = "Skeleton"

export { Skeleton }
