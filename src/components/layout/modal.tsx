import * as React from "react"
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
    
    // Size classes
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

    // Handle escape key
    React.useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape" && closeOnEscape && isOpen) {
          onClose()
        }
      }

      if (isOpen) {
        document.addEventListener("keydown", handleKeyDown)
        document.body.style.overflow = "hidden"
      }

      return () => {
        document.removeEventListener("keydown", handleKeyDown)
        document.body.style.overflow = "unset"
      }
    }, [isOpen, closeOnEscape, onClose])

    const handleOverlayClick = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget && closeOnOverlayClick) {
        onClose()
      }
    }

    if (!isOpen) return null

    return (
      <div 
        className={cn(
          "fixed inset-0 flex items-center justify-center p-4 transition-all duration-200",
          overlayBlur ? "backdrop-blur-xs" : ""
        )}
        style={{
          zIndex,
          backgroundColor: overlayColor || "rgba(0, 0, 0, 0.65)"
        }}
        onClick={handleOverlayClick}
      >
        <div 
          ref={ref}
          role="dialog"
          aria-modal="true"
          className={cn(
            "relative w-full rounded-2xl border transition-all duration-200",
            "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100",
            sizeClasses[size],
            shadowClasses[shadow],
            fullWidth && "w-full",
            fullHeight && "h-full",
            className
          )}
          style={{
            borderRadius,
            ...(backgroundColor || color ? { backgroundColor: backgroundColor || color } : {}),
            ...(borderColor ? { borderColor } : {}),
            ...(textColor ? { color: textColor } : {}),
            ...style
          }}
          onClick={(e) => e.stopPropagation()}
          {...props}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200/80 dark:border-zinc-800/80">
              {title ? (
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 leading-none">
                  {title}
                </h3>
              ) : <div />}
              
              {showCloseButton && (
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close modal"
                  className="p-1 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  <X className="h-4 w-4" />
                </button>
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
        </div>
      </div>
    )
  }
)

Modal.displayName = "Modal"

export { Modal }
