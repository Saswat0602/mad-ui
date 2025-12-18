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
  base: "flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
  variants: {
    state: {
      default: "border-input",
      error: "border-destructive focus-visible:ring-destructive",
      success: "border-green-500 focus-visible:ring-green-500",
    },
  },
  defaultVariants: {
    state: "default",
  },
})

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, success, leftIcon, rightIcon, fullWidth = true, ...props }, ref) => {
    const state = error ? "error" : success ? "success" : "default"

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