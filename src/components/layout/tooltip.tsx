"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "../../lib/utils"

const TooltipProvider = TooltipPrimitive.Provider
const TooltipRoot = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger
const TooltipPortal = TooltipPrimitive.Portal

export interface TooltipProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root> {
  content?: React.ReactNode
  position?: "top" | "bottom" | "left" | "right"
  side?: "top" | "bottom" | "left" | "right"
  delay?: number
  delayDuration?: number
  contentClassName?: string
}

export type TooltipTriggerProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>
export type TooltipContentProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
export type TooltipProviderProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Provider>

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPortal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 overflow-hidden rounded-md bg-zinc-900 px-3 py-1.5 text-xs text-zinc-50 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:bg-zinc-100 dark:text-zinc-900 shadow-md",
        className
      )}
      {...props}
    />
  </TooltipPortal>
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

// Support both compound usage (<Tooltip><TooltipTrigger /><TooltipContent /></Tooltip>)
// and convenience usage (<Tooltip content="Save">Button</Tooltip>)
const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position,
  side,
  delay,
  delayDuration = 200,
  contentClassName,
  ...props
}) => {
  const resolvedDelay = delay !== undefined ? delay : delayDuration
  const resolvedSide = side || position || "top"

  if (content !== undefined) {
    return (
      <TooltipProvider delayDuration={resolvedDelay}>
        <TooltipRoot delayDuration={resolvedDelay} {...props}>
          <TooltipTrigger asChild>
            {React.isValidElement(children) ? children : <span>{children}</span>}
          </TooltipTrigger>
          <TooltipContent side={resolvedSide} className={contentClassName}>
            {content}
          </TooltipContent>
        </TooltipRoot>
      </TooltipProvider>
    )
  }

  return (
    <TooltipProvider delayDuration={resolvedDelay}>
      <TooltipRoot delayDuration={resolvedDelay} {...props}>
        {children}
      </TooltipRoot>
    </TooltipProvider>
  )
}

export const useTooltip = () => ({
  open: false,
  setOpen: () => {},
})

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
}

export default Tooltip
