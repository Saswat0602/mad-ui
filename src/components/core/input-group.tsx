"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "default" | "lg"
}

export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex w-full items-stretch rounded-lg",
          "[&>*:focus-within]:z-10 [&>*:focus-visible]:z-10",
          "[&>*:not(:first-child)]:-ml-px",
          "[&>*:first-child]:rounded-r-none",
          "[&>*:last-child]:rounded-l-none",
          "[&>*:not(:first-child):not(:last-child)]:rounded-none",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

InputGroup.displayName = "InputGroup"

export interface InputGroupAddonProps extends React.HTMLAttributes<HTMLDivElement> {
  placement?: "left" | "right"
}

export const InputGroupAddon = React.forwardRef<HTMLDivElement, InputGroupAddonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-input whitespace-nowrap select-none",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

InputGroupAddon.displayName = "InputGroupAddon"

