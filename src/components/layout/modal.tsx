import * as React from "react"
import { cn } from "../../lib/utils"
import { componentColors } from "../../lib/colors"

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
  // Enterprise features
  analyticsId?: string
  analyticsEvent?: string
  analyticsData?: Record<string, any>
  ariaLabel?: string
  ariaDescribedBy?: string
  role?: string
  dataTestId?: string
  onAnalytics?: (event: string, data?: Record<string, any>) => void
  tooltip?: string
  loading?: boolean
  dismissible?: boolean
  persistent?: boolean
  onShow?: () => void
  onHide?: () => void
  animation?: 'slide' | 'fade' | 'scale' | 'none'
  animationDuration?: number
  onAnimationStart?: () => void
  onAnimationEnd?: () => void
  theme?: 'light' | 'dark' | 'auto'
  locale?: string
  rtl?: boolean
  keyboardDismissible?: boolean
  onKeyboardDismiss?: (key: string) => void
  clickable?: boolean
  onClick?: () => void
  onDoubleClick?: () => void
  onRightClick?: (event: React.MouseEvent) => void
  contextMenuItems?: Array<{
    label: string
    onClick: () => void
    icon?: React.ReactNode
    disabled?: boolean
  }>
  draggable?: boolean
  onDragMove?: (position: { x: number; y: number }) => void
  onDragComplete?: (position: { x: number; y: number }) => void
  swipeable?: boolean
  onSwipe?: (direction: 'left' | 'right' | 'up' | 'down') => void
  resizable?: boolean
  onResize?: (size: { width: number; height: number }) => void
  scrollable?: boolean
  onScrollChange?: (scrollY: number) => void
  focusable?: boolean
  autoFocus?: boolean
  onFocus?: () => void
  onBlur?: () => void
  tabIndex?: number
  accessibility?: {
    announce?: boolean
    announceMessage?: string
    role?: string
    liveRegion?: 'polite' | 'assertive' | 'off'
  }
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
    style,
    ...props 
  }, ref) => {
    
    // Size classes
    const sizeClasses = {
      sm: "max-w-md",
      md: "max-w-lg",
      lg: "max-w-2xl",
      xl: "max-w-4xl",
      full: "max-w-full"
    }
    
    // Shadow classes
    const shadowClasses = {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl"
    }
    
    // Handle escape key
    React.useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape" && closeOnEscape) {
          onClose()
        }
      }

      if (isOpen) {
        document.addEventListener("keydown", handleEscape)
        document.body.style.overflow = "hidden"
      }

      return () => {
        document.removeEventListener("keydown", handleEscape)
        document.body.style.overflow = "unset"
      }
    }, [isOpen, onClose, closeOnEscape])
    
    // Handle overlay click
    const handleOverlayClick = (e: React.MouseEvent) => {
      if (closeOnOverlayClick && e.target === e.currentTarget) {
        onClose()
      }
    }
    
    // Handle modal click (prevent closing)
    const handleModalClick = (e: React.MouseEvent) => {
      e.stopPropagation()
    }
    
    if (!isOpen) return null
    
    const customStyles: React.CSSProperties = {
      backgroundColor: backgroundColor || color || "var(--bg-card)",
      color: textColor || "var(--text-primary)",
      borderColor: borderColor || "var(--border-primary)",
      borderRadius: borderRadius,
      zIndex,
      ...style
    }
    
    const overlayStyles: React.CSSProperties = {
      backgroundColor: overlayColor || "var(--bg-overlay)",
      backdropFilter: overlayBlur ? "blur(4px)" : "none"
    }
    
    return (
      <div 
        className="fixed inset-0 flex items-center justify-center p-4"
        style={overlayStyles}
        onClick={handleOverlayClick}
      >
        <div 
          ref={ref}
          className={cn(
            "w-full rounded-lg transition-all duration-200",
            sizeClasses[size],
            shadowClasses[shadow],
            fullWidth && "w-full",
            fullHeight && "h-full",
            className
          )}
          style={customStyles}
          onClick={handleModalClick}
          {...props}
        >
          {/* Header */}
          {title && (
            <div 
              className="flex items-center justify-between p-6"
              style={{ 
                borderBottom: `1px solid ${borderColor || "var(--border-primary)"}` 
              }}
            >
              <h2 
                className="text-xl font-semibold"
                style={{ color: textColor || "var(--text-primary)" }}
              >
                {title}
              </h2>
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className={cn(
                    "p-1 rounded-lg transition-colors",
                    "focus:outline-none focus:ring-2 focus:ring-offset-2",
                    "hover:bg-black/10 dark:hover:bg-white/10"
                  )}
                  style={{
                    color: "var(--text-muted)"
                  }}
                >
                  <span className="h-5 w-5">✕</span>
                </button>
              )}
            </div>
          )}
          
          {/* Content */}
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    )
  }
)

Modal.displayName = "Modal"

export { Modal }
