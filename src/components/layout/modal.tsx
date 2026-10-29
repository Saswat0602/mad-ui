"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { cn } from "../../lib/utils"
import { X } from "lucide-react"

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: "sm" | "md" | "lg" | "xl" | "full"
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  showCloseButton?: boolean
  fullWidth?: boolean
  fullHeight?: boolean
  color?: string
  backgroundColor?: string
  borderColor?: string
  textColor?: string
  borderRadius?: string | number
  shadow?: "none" | "sm" | "md" | "lg" | "xl"
  overlayColor?: string
  overlayBlur?: boolean
  zIndex?: number
  footer?: React.ReactNode
}

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-2xl",
  full: "max-w-full m-4"
}

const shadowClasses = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-xl",
  xl: "shadow-2xl"
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ 
    className, 
    isOpen, 
    onClose, 
    title, 
    children,
    size = "md",
    closeOnOverlayClick = true,
    closeOnEscape = true,
    showCloseButton = true,
    fullWidth = false,
    fullHeight = false,
    color,
    backgroundColor,
    borderColor,
    textColor,
    borderRadius,
    shadow = "lg",
    overlayColor,
    overlayBlur = true,
    zIndex = 50,
    footer,
    style,
    ...props 
  }, ref) => {
    return (
      <DialogPrimitive.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay
            className={cn(
              "fixed inset-0 bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-200",
              overlayBlur ? "backdrop-blur-xs" : ""
            )}
            style={{
              zIndex,
              backgroundColor: overlayColor || undefined
            }}
          />
          <DialogPrimitive.Content
            ref={ref}
            onPointerDownOutside={(e) => {
              if (!closeOnOverlayClick) e.preventDefault()
            }}
            onEscapeKeyDown={(e) => {
              if (!closeOnEscape) e.preventDefault()
            }}
            className={cn(
              "fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full rounded-2xl border duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
              "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100",
              sizeClasses[size],
              shadowClasses[shadow],
              fullWidth && "w-full",
              fullHeight && "h-full",
              className
            )}
            style={{
              zIndex: zIndex + 1,
              borderRadius,
              ...(backgroundColor || color ? { backgroundColor: backgroundColor || color } : {}),
              ...(borderColor ? { borderColor } : {}),
              ...(textColor ? { color: textColor } : {}),
              ...style
            }}
            {...props}
          >
            {/* Header */}
            {(title || showCloseButton) && (
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200/80 dark:border-zinc-800/80">
                {title ? (
                  <DialogPrimitive.Title className="text-base font-semibold text-zinc-900 dark:text-zinc-100 leading-none">
                    {title}
                  </DialogPrimitive.Title>
                ) : <div />}
                
                {showCloseButton && (
                  <DialogPrimitive.Close
                    type="button"
                    aria-label="Close modal"
                    className="p-1 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40"
                  >
                    <X className="h-4 w-4" />
                  </DialogPrimitive.Close>
                )}
              </div>
            )}
            
            {/* Content */}
            <div className="p-6">
              {children}
            </div>

            {/* Optional Footer */}
            {footer && (
              <div className="px-6 py-3.5 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/50 rounded-b-2xl flex items-center justify-end gap-2">
                {footer}
              </div>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    )
  }
)

Modal.displayName = "Modal"

export { Modal }
