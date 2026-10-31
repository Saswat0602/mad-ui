import * as React from "react"
import { cn, createVariants } from "../../lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  success?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
}

const inputVariants = createVariants({
  base: "flex h-9 w-full rounded-lg border bg-background px-3 py-1.5 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 transition-all shadow-2xs",
  variants: {
    state: {
      default: "border-input focus-visible:border-ring focus-visible:ring-ring",
      error: "border-destructive text-destructive focus-visible:border-destructive focus-visible:ring-destructive/30",
      success: "border-emerald-500 text-emerald-900 dark:text-emerald-100 focus-visible:border-emerald-500 focus-visible:ring-emerald-500/20",
    },
  },
  defaultVariants: {
    state: "default",
  },
})

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, success, leftIcon, rightIcon, fullWidth = true, ...props }, ref) => {
    const isError = error || props["aria-invalid"] === true || props["aria-invalid"] === "true"
    const state = isError ? "error" : success ? "success" : "default"

    if (leftIcon || rightIcon) {
      return (
        <div className={cn("relative", fullWidth && "w-full")}>
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {leftIcon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              inputVariants({ state }),
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              !fullWidth && "w-auto",
              className
            )}
            ref={ref}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {rightIcon}
            </div>
          )}
        </div>
      )
    }

    return (
      <input
        type={type}
        className={cn(
          inputVariants({ state }),
          !fullWidth && "w-auto",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

export { Input }