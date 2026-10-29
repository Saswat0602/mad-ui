"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cn } from "../../lib/utils"

export interface DrawerProps {
  /** Whether the drawer is open */
  isOpen?: boolean
  /** Callback when drawer should close */
  onClose?: () => void
  /** Position of the drawer */
  position?: "right" | "left" | "top" | "bottom"
  /** Size of the drawer */
  size?: "sm" | "md" | "lg" | "full"
  /** Custom width for left/right drawers */
  width?: string | number
  /** Custom height for top/bottom drawers */
  height?: string | number
  /** Whether to show overlay */
  overlay?: boolean
  /** Whether to close on overlay click */
  closeOnOverlayClick?: boolean
  /** Whether to close on escape key */
  closeOnEscape?: boolean
  /** Whether to show close button */
  showCloseButton?: boolean
  /** Additional CSS classes */
  className?: string
  /** Overlay CSS classes */
  overlayClassName?: string
  /** Drawer content */
  children: React.ReactNode
  /** Additional props */
  [key: string]: any
}

const positionVariants = {
  right:
    "inset-y-0 right-0 h-full border-l border-zinc-200 dark:border-zinc-800 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-right-full",
  left: "inset-y-0 left-0 h-full border-r border-zinc-200 dark:border-zinc-800 data-[state=closed]:slide-out-to-left-full data-[state=open]:slide-in-from-left-full",
  top: "inset-x-0 top-0 w-full border-b border-zinc-200 dark:border-zinc-800 data-[state=closed]:slide-out-to-top-full data-[state=open]:slide-in-from-top-full",
  bottom:
    "inset-x-0 bottom-0 w-full border-t border-zinc-200 dark:border-zinc-800 data-[state=closed]:slide-out-to-bottom-full data-[state=open]:slide-in-from-bottom-full",
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen = false,
  onClose,
  position = "right",
  size = "md",
  width,
  height,
  overlay = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  className = "",
  overlayClassName = "",
  children,
  style,
  ...props
}) => {
  const getSizeClasses = () => {
    if (width && (position === "left" || position === "right")) {
      return { width: typeof width === "number" ? `${width}px` : width }
    }
    if (height && (position === "top" || position === "bottom")) {
      return { height: typeof height === "number" ? `${height}px` : height }
    }

    const sizeClasses = {
      sm: position === "left" || position === "right" ? "w-80" : "h-80",
      md: position === "left" || position === "right" ? "w-96" : "h-96",
      lg: position === "left" || position === "right" ? "w-[32rem]" : "h-[32rem]",
      full: position === "left" || position === "right" ? "w-full" : "h-full",
    }
    return { className: sizeClasses[size] }
  }

  const sizeProps = getSizeClasses()

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={(open) => !open && onClose?.()}>
      <DialogPrimitive.Portal>
        {overlay && (
          <DialogPrimitive.Overlay
            className={cn(
              "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-300",
              overlayClassName
            )}
          />
        )}
        <DialogPrimitive.Content
          onPointerDownOutside={(e) => {
            if (!closeOnOverlayClick) e.preventDefault()
          }}
          onEscapeKeyDown={(e) => {
            if (!closeOnEscape) e.preventDefault()
          }}
          className={cn(
            "fixed z-50 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 shadow-2xl flex flex-col transition ease-in-out duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out",
            positionVariants[position],
            sizeProps.className,
            className
          )}
          style={{
            ...sizeProps,
            ...style,
          }}
          {...props}
        >
          {showCloseButton && (
            <DialogPrimitive.Close
              type="button"
              onClick={onClose}
              aria-label="Close drawer"
              className={cn(
                "absolute top-4 p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer z-10 focus:outline-none focus:ring-2 focus:ring-primary/40",
                position === "left" ? "right-4" : "right-4"
              )}
            >
              <X className="h-4 w-4" />
            </DialogPrimitive.Close>
          )}
          <div className={cn("p-6 h-full overflow-y-auto", showCloseButton ? "pt-14" : "")}>
            {children}
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

export default Drawer