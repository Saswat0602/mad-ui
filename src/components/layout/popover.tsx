import * as React from "react"
import { cn } from "../../lib/utils"
import { componentColors } from "../../lib/colors"

export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose: () => void
  trigger: React.ReactNode
  children: React.ReactNode
  placement?: "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end"
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "default" | "outlined" | "filled"
  color?: string
  backgroundColor?: string
  borderColor?: string
  textColor?: string
  borderRadius?: string | number
  shadow?: "none" | "sm" | "md" | "lg" | "xl"
  arrow?: boolean
  arrowColor?: string
  offset?: number
  closeOnClickOutside?: boolean
  closeOnEscape?: boolean
  showCloseButton?: boolean
  zIndex?: number
  animation?: "fade" | "slide" | "scale" | "none"
  delay?: number
}

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  ({ 
    className, 
    isOpen, 
    onClose, 
    trigger, 
    children,
    placement = "bottom",
    size = "md",
    variant = "default",
    color,
    backgroundColor,
    borderColor,
    textColor,
    borderRadius,
    shadow = "lg",
    arrow = true,
    arrowColor,
    offset = 8,
    closeOnClickOutside = true,
    closeOnEscape = true,
    showCloseButton = false,
    zIndex = 50,
    animation = "fade",
    delay = 0,
    style,
    ...props 
  }, ref) => {
    
    const [isVisible, setIsVisible] = React.useState(false)
    const triggerRef = React.useRef<HTMLDivElement>(null)
    const popoverRef = React.useRef<HTMLDivElement>(null)
    
    // Size classes
    const sizeClasses = {
      sm: "max-w-xs",
      md: "max-w-sm",
      lg: "max-w-md",
      xl: "max-w-lg"
    }
    
    // Shadow classes
    const shadowClasses = {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl"
    }
    
    // Animation classes
    const animationClasses = {
      fade: "transition-opacity duration-200",
      slide: "transition-all duration-200",
      scale: "transition-transform duration-200",
      none: ""
    }
    
    // Variant styles
    const getVariantStyles = () => {
      switch (variant) {
        case "outlined":
          return {
            backgroundColor: backgroundColor || color || "var(--bg-card)",
            border: `1px solid ${borderColor || "var(--border-primary)"}`,
            borderRadius: borderRadius || "8px"
          }
        case "filled":
          return {
            backgroundColor: backgroundColor || color || "var(--bg-tertiary)",
            border: "none",
            borderRadius: borderRadius || "8px"
          }
        default:
          return {
            backgroundColor: backgroundColor || color || "var(--bg-card)",
            border: "none",
            borderRadius: borderRadius || "8px"
          }
      }
    }
    
    // Custom styles
    const customStyles: React.CSSProperties = {
      color: textColor || "var(--text-primary)",
      zIndex,
      ...getVariantStyles(),
      ...style
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
      }

      return () => {
        document.removeEventListener("keydown", handleEscape)
      }
    }, [isOpen, onClose, closeOnEscape])
    
    // Handle click outside
    React.useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (
          closeOnClickOutside &&
          popoverRef.current &&
          !popoverRef.current.contains(e.target as Node) &&
          triggerRef.current &&
          !triggerRef.current.contains(e.target as Node)
        ) {
          onClose()
        }
      }

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside)
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [isOpen, onClose, closeOnClickOutside])
    
    // Handle visibility with delay
    React.useEffect(() => {
      if (isOpen) {
        const timer = setTimeout(() => setIsVisible(true), delay)
        return () => clearTimeout(timer)
      } else {
        setIsVisible(false)
      }
    }, [isOpen, delay])
    
    // Get placement styles
    const getPlacementStyles = () => {
      const baseOffset = offset + (arrow ? 8 : 0)
      
      switch (placement) {
        case "top":
          return { bottom: `calc(100% + ${baseOffset}px)`, left: "50%", transform: "translateX(-50%)" }
        case "top-start":
          return { bottom: `calc(100% + ${baseOffset}px)`, left: 0 }
        case "top-end":
          return { bottom: `calc(100% + ${baseOffset}px)`, right: 0 }
        case "bottom":
          return { top: `calc(100% + ${baseOffset}px)`, left: "50%", transform: "translateX(-50%)" }
        case "bottom-start":
          return { top: `calc(100% + ${baseOffset}px)`, left: 0 }
        case "bottom-end":
          return { top: `calc(100% + ${baseOffset}px)`, right: 0 }
        case "left":
          return { right: `calc(100% + ${baseOffset}px)`, top: "50%", transform: "translateY(-50%)" }
        case "left-start":
          return { right: `calc(100% + ${baseOffset}px)`, top: 0 }
        case "left-end":
          return { right: `calc(100% + ${baseOffset}px)`, bottom: 0 }
        case "right":
          return { left: `calc(100% + ${baseOffset}px)`, top: "50%", transform: "translateY(-50%)" }
        case "right-start":
          return { left: `calc(100% + ${baseOffset}px)`, top: 0 }
        case "right-end":
          return { left: `calc(100% + ${baseOffset}px)`, bottom: 0 }
        default:
          return { top: `calc(100% + ${baseOffset}px)`, left: "50%", transform: "translateX(-50%)" }
      }
    }
    
    // Get arrow styles
    const getArrowStyles = () => {
      const arrowSize = 8
      const arrowOffset = offset
      
      switch (placement) {
        case "top":
        case "top-start":
        case "top-end":
          return {
            top: "100%",
            left: placement === "top" ? "50%" : placement === "top-start" ? "16px" : "auto",
            right: placement === "top-end" ? "16px" : "auto",
            transform: placement === "top" ? "translateX(-50%)" : "none",
            borderTop: `${arrowSize}px solid ${arrowColor || backgroundColor || "var(--bg-card)"}`,
            borderLeft: `${arrowSize}px solid transparent`,
            borderRight: `${arrowSize}px solid transparent`
          }
        case "bottom":
        case "bottom-start":
        case "bottom-end":
          return {
            bottom: "100%",
            left: placement === "bottom" ? "50%" : placement === "bottom-start" ? "16px" : "auto",
            right: placement === "bottom-end" ? "16px" : "auto",
            transform: placement === "bottom" ? "translateX(-50%)" : "none",
            borderBottom: `${arrowSize}px solid ${arrowColor || backgroundColor || "var(--bg-card)"}`,
            borderLeft: `${arrowSize}px solid transparent`,
            borderRight: `${arrowSize}px solid transparent`
          }
        case "left":
        case "left-start":
        case "left-end":
          return {
            left: "100%",
            top: placement === "left" ? "50%" : placement === "left-start" ? "16px" : "auto",
            bottom: placement === "left-end" ? "16px" : "auto",
            transform: placement === "left" ? "translateY(-50%)" : "none",
            borderLeft: `${arrowSize}px solid ${arrowColor || backgroundColor || "var(--bg-card)"}`,
            borderTop: `${arrowSize}px solid transparent`,
            borderBottom: `${arrowSize}px solid transparent`
          }
        case "right":
        case "right-start":
        case "right-end":
          return {
            right: "100%",
            top: placement === "right" ? "50%" : placement === "right-start" ? "16px" : "auto",
            bottom: placement === "right-end" ? "16px" : "auto",
            transform: placement === "right" ? "translateY(-50%)" : "none",
            borderRight: `${arrowSize}px solid ${arrowColor || backgroundColor || "var(--bg-card)"}`,
            borderTop: `${arrowSize}px solid transparent`,
            borderBottom: `${arrowSize}px solid transparent`
          }
        default:
          return {}
      }
    }
    
    if (!isOpen) return null
    
    return (
      <div className="relative inline-block">
        {/* Trigger */}
        <div ref={triggerRef}>
          {trigger}
        </div>
        
        {/* Popover */}
        <div
          ref={popoverRef}
          className={cn(
            "absolute z-50",
            sizeClasses[size],
            shadowClasses[shadow],
            animationClasses[animation],
            className
          )}
          style={{
            ...customStyles,
            ...getPlacementStyles(),
            opacity: isVisible ? 1 : 0,
            transform: isVisible 
              ? (placement?.startsWith("top") || placement?.startsWith("bottom") 
                  ? "translateX(-50%)" 
                  : "translateY(-50%)")
              : (placement?.startsWith("top") || placement?.startsWith("bottom")
                  ? "translateX(-50%) translateY(10px)"
                  : "translateY(-50%) translateX(10px)")
          }}
          {...props}
        >
          {/* Close button */}
          {showCloseButton && (
            <button
              onClick={onClose}
              className="absolute top-2 right-2 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              style={{ color: "var(--text-muted)" }}
            >
              ✕
            </button>
          )}
          
          {/* Content */}
          <div className="p-4">
            {children}
          </div>
          
          {/* Arrow */}
          {arrow && (
            <div
              className="absolute w-0 h-0"
              style={getArrowStyles()}
            />
          )}
        </div>
      </div>
    )
  }
)

Popover.displayName = "Popover"

export { Popover }
