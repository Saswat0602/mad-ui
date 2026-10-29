"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { cn } from "../../lib/utils"

export type PopoverProps = React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Root> & {
  isOpen?: boolean
  onClose?: () => void
  trigger?: React.ReactNode
  placement?: "top" | "bottom" | "left" | "right"
  children?: React.ReactNode
}

export type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>
export type PopoverAnchorProps = React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Anchor>
export type PopoverCloseProps = React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Close>

export interface PopoverContentProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
  showArrow?: boolean
}

const PopoverRoot = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger
const PopoverAnchor = PopoverPrimitive.Anchor
const PopoverClose = PopoverPrimitive.Close

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(({ className, align = "center", sideOffset = 4, showArrow = false, children, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 text-zinc-900 dark:text-zinc-100 shadow-xl outline-none duration-150 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    >
      {children}
      {showArrow && (
        <PopoverPrimitive.Arrow className="fill-white dark:fill-zinc-900 stroke-zinc-200 dark:stroke-zinc-800" />
      )}
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

// Support both compound usage (<Popover><PopoverTrigger /><PopoverContent /></Popover>)
// and convenience usage (<Popover trigger={<button>Open</button>}>Content</Popover>)
const Popover: React.FC<PopoverProps> = ({
  open,
  defaultOpen,
  onOpenChange,
  isOpen,
  onClose,
  trigger,
  placement,
  children,
  ...props
}) => {
  const isControlled = open !== undefined || isOpen !== undefined
  const resolvedOpen = open !== undefined ? open : isOpen
  const handleOpenChange = (nextOpen: boolean) => {
    onOpenChange?.(nextOpen)
    if (!nextOpen) onClose?.()
  }

  // If trigger prop is passed, render convenience wrapper
  if (trigger) {
    return (
      <PopoverRoot
        open={isControlled ? resolvedOpen : undefined}
        defaultOpen={defaultOpen}
        onOpenChange={handleOpenChange}
        {...props}
      >
        <PopoverTrigger asChild>
          {React.isValidElement(trigger) ? trigger : <span>{trigger}</span>}
        </PopoverTrigger>
        <PopoverContent side={placement}>
          {children}
        </PopoverContent>
      </PopoverRoot>
    )
  }

  return (
    <PopoverRoot
      open={isControlled ? resolvedOpen : undefined}
      defaultOpen={defaultOpen}
      onOpenChange={handleOpenChange}
      {...props}
    >
      {children}
    </PopoverRoot>
  )
}

export const usePopover = () => ({
  open: false,
  setOpen: () => {},
})

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  PopoverClose,
}

export default Popover
