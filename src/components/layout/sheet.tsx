"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cn } from "../../lib/utils"

const Sheet = SheetPrimitive.Root
const SheetTrigger = SheetPrimitive.Trigger
const SheetClose = SheetPrimitive.Close
const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = {
  top: "inset-x-0 top-0 border-b border-zinc-200 dark:border-zinc-800 data-[state=closed]:slide-out-to-top-full data-[state=open]:slide-in-from-top-full",
  bottom:
    "inset-x-0 bottom-0 border-t border-zinc-200 dark:border-zinc-800 data-[state=closed]:slide-out-to-bottom-full data-[state=open]:slide-in-from-bottom-full",
  left: "inset-y-0 left-0 h-full w-3/4 border-r border-zinc-200 dark:border-zinc-800 data-[state=closed]:slide-out-to-left-full data-[state=open]:slide-in-from-left-full sm:max-w-sm",
  right:
    "inset-y-0 right-0 h-full w-3/4 border-l border-zinc-200 dark:border-zinc-800 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-right-full sm:max-w-sm",
}

export type SheetProps = React.ComponentPropsWithoutRef<typeof SheetPrimitive.Root>
export type SheetTriggerProps = React.ComponentPropsWithoutRef<typeof SheetPrimitive.Trigger>
export type SheetCloseProps = React.ComponentPropsWithoutRef<typeof SheetPrimitive.Close>
export type SheetPortalProps = React.ComponentPropsWithoutRef<typeof SheetPrimitive.Portal>
export type SheetOverlayProps = React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>

export interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> {
  side?: "top" | "bottom" | "left" | "right"
  showCloseButton?: boolean
}

export type SheetHeaderProps = React.HTMLAttributes<HTMLDivElement>
export type SheetFooterProps = React.HTMLAttributes<HTMLDivElement>
export type SheetTitleProps = React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
export type SheetDescriptionProps = React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, showCloseButton = true, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(
        "fixed z-50 gap-4 bg-white dark:bg-zinc-900 p-6 shadow-2xl transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out duration-300",
        sheetVariants[side],
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <SheetPrimitive.Close
          type="button"
          aria-label="Close sheet"
          className="absolute right-4 top-4 rounded-lg p-1 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer disabled:pointer-events-none"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      )}
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-6",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  SheetTitleProps
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-base font-semibold text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  SheetDescriptionProps
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-xs text-muted-foreground leading-relaxed", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export const useSheet = () => ({
  open: false,
  setOpen: () => {},
})

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}

export default Sheet
