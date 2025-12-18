"use client"

import * as React from "react"
import { cn, createVariants } from "../../lib/utils"

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  description?: string
  error?: boolean
  size?: "sm" | "md" | "lg"
}

const radioVariants = createVariants({
  base: "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    size: {
      sm: "h-3.5 w-3.5",
      md: "h-4 w-4",
      lg: "h-5 w-5",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, description, error, size = "md", id, ...props }, ref) => {
    const generatedId = React.useId()
    const radioId = id || generatedId

    return (
      <div className="flex items-start space-x-3">
        <div className="relative flex items-center h-5">
          <input
            type="radio"
            ref={ref}
            id={radioId}
            className={cn(
              radioVariants({ size }),
              error && "border-destructive",
              className
            )}
            {...props}
          />
          {/* Selected indicator */}
          {props.checked && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className={cn(
                "rounded-full bg-primary",
                size === "sm" && "h-1.5 w-1.5",
                size === "md" && "h-2 w-2",
                size === "lg" && "h-2.5 w-2.5"
              )} />
            </div>
          )}
        </div>

        {(label || description) && (
          <div className="grid gap-1.5 leading-none">
            {label && (
              <label
                htmlFor={radioId}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {label}
              </label>
            )}
            {description && (
              <p className={cn(
                "text-sm text-muted-foreground",
                error && "text-destructive"
              )}>
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    )
  }
)

Radio.displayName = "Radio"

export { Radio }
