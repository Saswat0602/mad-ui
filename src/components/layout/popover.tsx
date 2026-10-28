import * as React from "react"
import { cn } from "../../lib/utils"
import { X } from "lucide-react"

interface PopoverContextType {
  open: boolean
  setOpen: (open: boolean) => void
}

const PopoverContext = React.createContext<PopoverContextType | null>(null)

export const usePopover = () => {
  const context = React.useContext(PopoverContext)
  return context
}

export interface PopoverProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  isOpen?: boolean
  open?: boolean
  defaultOpen?: boolean
  onClose?: () => void
  onOpenChange?: (open: boolean) => void
  trigger?: React.ReactNode
  children: React.ReactNode
  placement?: "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end"
  side?: "top" | "bottom" | "left" | "right"
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
}

export interface PopoverTriggerProps {
  children: React.ReactNode
  asChild?: boolean
  className?: string
}

export interface PopoverContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  align?: "start" | "center" | "end"
  side?: "top" | "bottom" | "left" | "right"
  sideOffset?: number
}

export interface PopoverCloseProps {
  children?: React.ReactNode
  className?: string
}

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  ({ 
    className, 
    isOpen: legacyIsOpen, 
    open: controlledOpen,
    defaultOpen = false,
    onClose, 
    onOpenChange,
    trigger, 
    children,
    placement = "bottom",
    side,
    size = "md",
    variant = "default",
    color,
    backgroundColor,
    borderColor,
    textColor,
    borderRadius,
    shadow = "lg",
    arrow = false,
    closeOnClickOutside = true,
    closeOnEscape = true,
    showCloseButton = false,
    zIndex = 50,
    style,
    ...props 
  }, ref) => {
    const isControlled = controlledOpen !== undefined || legacyIsOpen !== undefined
    const effectiveOpen = controlledOpen !== undefined ? controlledOpen : legacyIsOpen !== undefined ? legacyIsOpen : false
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen)
    const open = isControlled ? effectiveOpen : uncontrolledOpen

    const triggerRef = React.useRef<HTMLDivElement>(null)
    const popoverRef = React.useRef<HTMLDivElement>(null)

    const setOpen = (newOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(newOpen)
      }
      onOpenChange?.(newOpen)
      if (!newOpen && onClose) {
        onClose()
      }
    }

    // Escape listener
    React.useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape" && closeOnEscape && open) {
          setOpen(false)
        }
      }

      if (open) {
        document.addEventListener("keydown", handleEscape)
      }
      return () => {
        document.removeEventListener("keydown", handleEscape)
      }
    }, [open, closeOnEscape])

    // Click outside listener
    React.useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (
          closeOnClickOutside &&
          open &&
          popoverRef.current &&
          !popoverRef.current.contains(e.target as Node) &&
          triggerRef.current &&
          !triggerRef.current.contains(e.target as Node)
        ) {
          setOpen(false)
        }
      }

      if (open) {
        document.addEventListener("mousedown", handleClickOutside)
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [open, closeOnClickOutside])

    const effectivePlacement = side || placement

    const getPlacementClasses = () => {
      if (effectivePlacement.startsWith("top")) return "bottom-full left-1/2 -translate-x-1/2 mb-2"
      if (effectivePlacement.startsWith("bottom")) return "top-full left-1/2 -translate-x-1/2 mt-2"
      if (effectivePlacement.startsWith("left")) return "right-full top-1/2 -translate-y-1/2 mr-2"
      if (effectivePlacement.startsWith("right")) return "left-full top-1/2 -translate-y-1/2 ml-2"
      return "top-full left-0 mt-2"
    }

    const sizeClasses = {
      sm: "w-64 p-3",
      md: "w-80 p-4",
      lg: "w-96 p-5",
      xl: "w-[28rem] p-6"
    }

    // Legacy trigger prop API
    if (trigger !== undefined) {
      return (
        <div ref={ref} className="relative inline-block" {...props}>
          <div
            ref={triggerRef}
            onClick={() => setOpen(!open)}
            className="cursor-pointer"
          >
            {trigger}
          </div>

          {open && (
            <div
              ref={popoverRef}
              className={cn(
                "absolute z-50 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 shadow-xl animate-in fade-in-0 zoom-in-95 duration-150",
                getPlacementClasses(),
                sizeClasses[size],
                className
              )}
              style={style}
            >
              {showCloseButton && (
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-2.5 right-2.5 p-1 rounded-md text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                  aria-label="Close popover"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
              {children}
            </div>
          )}
        </div>
      )
    }

    // Compound component API
    return (
      <PopoverContext.Provider value={{ open, setOpen }}>
        <div ref={ref} className={cn("relative inline-block", className)} style={style} {...props}>
          {children}
        </div>
      </PopoverContext.Provider>
    )
  }
)

Popover.displayName = "Popover"

export const PopoverTrigger: React.FC<PopoverTriggerProps> = ({
  children,
  asChild = false,
  className
}) => {
  const context = usePopover()

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    context?.setOpen(!context.open)
  }

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<any>
    return React.cloneElement(child, {
      className: cn(child.props.className, className),
      onClick: (e: React.MouseEvent) => {
        handleClick(e)
        child.props.onClick?.(e)
      }
    })
  }

  return (
    <div className={cn("inline-block cursor-pointer", className)} onClick={handleClick}>
      {children}
    </div>
  )
}

export const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ children, className, align = "center", side = "bottom", sideOffset = 4, ...props }, ref) => {
    const context = usePopover()
    const contentRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
          context?.setOpen(false)
        }
      }

      if (context?.open) {
        document.addEventListener("mousedown", handleClickOutside)
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [context?.open, context])

    if (!context?.open) return null

    const alignClasses = {
      start: "left-0",
      center: "left-1/2 -translate-x-1/2",
      end: "right-0"
    }

    const sideClasses = {
      top: "bottom-full mb-2",
      bottom: "top-full mt-2",
      left: "right-full mr-2",
      right: "left-full ml-2"
    }

    return (
      <div
        ref={contentRef}
        className={cn(
          "absolute z-50 w-72 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 text-zinc-900 dark:text-zinc-100 shadow-xl outline-none animate-in fade-in-0 zoom-in-95 duration-150",
          sideClasses[side],
          alignClasses[align],
          className
        )}
        style={{ marginTop: sideOffset }}
        {...props}
      >
        {children}
      </div>
    )
  }
)
PopoverContent.displayName = "PopoverContent"

export const PopoverClose: React.FC<PopoverCloseProps> = ({ children, className }) => {
  const context = usePopover()
  return (
    <div
      className={cn("inline-block cursor-pointer", className)}
      onClick={() => context?.setOpen(false)}
    >
      {children || (
        <button className="p-1 rounded-md text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100">
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}

export { Popover }
