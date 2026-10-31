"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
  attached?: boolean
  fullWidth?: boolean
}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      className,
      orientation = "horizontal",
      attached = true,
      fullWidth = false,
      children,
      ...props
    },
    ref
  ) => {
    const isVertical = orientation === "vertical"

    return (
      <div
        ref={ref}
        role="group"
        className={cn(
          "inline-flex",
          isVertical ? "flex-col" : "flex-row",
          fullWidth && "w-full [&>*]:flex-1",
          attached
            ? cn(
                "[&>*:focus-visible]:z-10 [&>*:hover]:z-10 [&>*:active]:z-10",
                isVertical
                  ? "[&>*:not(:first-child)]:-mt-px [&>*:first-child]:rounded-b-none [&>*:last-child]:rounded-t-none [&>*:not(:first-child):not(:last-child)]:rounded-none"
                  : "[&>*:not(:first-child)]:-ml-px [&>*:first-child]:rounded-r-none [&>*:last-child]:rounded-l-none [&>*:not(:first-child):not(:last-child)]:rounded-none"
              )
            : isVertical
            ? "space-y-2"
            : "space-x-2",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

ButtonGroup.displayName = "ButtonGroup"
