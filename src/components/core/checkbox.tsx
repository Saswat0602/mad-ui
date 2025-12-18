"use client"

import * as React from "react"
import { cn, createVariants } from "../../lib/utils"

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  description?: string
  error?: boolean
  indeterminate?: boolean
  size?: "sm" | "md" | "lg"
}

const checkboxVariants = createVariants({
  base: "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground transition-all",
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

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, error, indeterminate, size = "md", id, ...props }, ref) => {
    const checkboxRef = React.useRef<HTMLInputElement>(null)

    // Combine refs
    React.useImperativeHandle(ref, () => checkboxRef.current!)

    // Set indeterminate state
    React.useEffect(() => {
      if (checkboxRef.current) {
        checkboxRef.current.indeterminate = indeterminate || false
      }
    }, [indeterminate])

    const generatedId = React.useId()
    const checkboxId = id || generatedId

    return (
      <div className="flex items-start space-x-3">
        <div className="relative flex items-center h-5">
          <input
            type="checkbox"
            ref={checkboxRef}
            id={checkboxId}
            className={cn(
              checkboxVariants({ size }),
              error && "border-destructive",
              className
            )}
            {...props}
          />
          {/* Check icon */}
          {props.checked && !indeterminate && (
            <svg
              className="absolute inset-0 h-full w-full p-0.5 text-primary-foreground pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
          {/* Indeterminate icon */}
          {indeterminate && (
            <svg
              className="absolute inset-0 h-full w-full p-1 text-primary-foreground pointer-events-none"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          )}
        </div>

        {(label || description) && (
          <div className="grid gap-1.5 leading-none">
            {label && (
              <label
                htmlFor={checkboxId}
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

Checkbox.displayName = "Checkbox"

export { Checkbox }