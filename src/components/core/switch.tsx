"use client"

import * as React from "react"
import { cn, createVariants } from "../../lib/utils"

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  description?: string
  size?: "sm" | "md" | "lg"
}

const switchVariants = createVariants({
  base: "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
  variants: {
    size: {
      sm: "h-5 w-9",
      md: "h-6 w-11",
      lg: "h-7 w-14",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const thumbVariants = createVariants({
  base: "pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
  variants: {
    size: {
      sm: "h-4 w-4 data-[state=checked]:translate-x-4",
      md: "h-5 w-5 data-[state=checked]:translate-x-5",
      lg: "h-6 w-6 data-[state=checked]:translate-x-7",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, description, size = "md", id, checked, ...props }, ref) => {
    const [isChecked, setIsChecked] = React.useState(checked || false)
    const generatedId = React.useId()
    const switchId = id || generatedId

    React.useEffect(() => {
      if (checked !== undefined) {
        setIsChecked(checked)
      }
    }, [checked])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked)
      props.onChange?.(e)
    }

    return (
      <div className="flex items-center space-x-3">
        <button
          type="button"
          role="switch"
          aria-checked={isChecked}
          data-state={isChecked ? "checked" : "unchecked"}
          className={cn(switchVariants({ size }), className)}
          onClick={() => {
            const input = document.getElementById(switchId) as HTMLInputElement
            input?.click()
          }}
        >
          <span
            data-state={isChecked ? "checked" : "unchecked"}
            className={thumbVariants({ size })}
          />
        </button>
        <input
          type="checkbox"
          id={switchId}
          ref={ref}
          className="sr-only"
          checked={isChecked}
          onChange={handleChange}
          {...props}
        />

        {(label || description) && (
          <div className="grid gap-1.5 leading-none">
            {label && (
              <label
                htmlFor={switchId}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {label}
              </label>
            )}
            {description && (
              <p className="text-sm text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    )
  }
)

Switch.displayName = "Switch"

export { Switch }
