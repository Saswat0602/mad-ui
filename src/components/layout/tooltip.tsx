"use client"

import * as React from "react"
import { cn } from "../../lib/utils"
import { Portal } from "../../lib/portal"
import { Slot } from "../../lib/slot"

interface TooltipContextValue {
  open: boolean
  setOpen: (open: boolean) => void
  triggerRef: React.MutableRefObject<HTMLElement | null>
  triggerRect: DOMRect | null
  updateTriggerRect: () => void
  delayDuration: number
}

const TooltipContext = React.createContext<TooltipContextValue | null>(null)

function useTooltipContext() {
  const context = React.useContext(TooltipContext)
  if (!context) {
    throw new Error("Tooltip compound components must be used within a Tooltip")
  }
  return context
}

export interface TooltipProviderProps {
  delayDuration?: number
  children: React.ReactNode
}

export const TooltipProvider: React.FC<TooltipProviderProps> = ({
  delayDuration = 200,
  children,
}) => {
  return <>{children}</>
}

export interface TooltipProps {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  delayDuration?: number
  delay?: number
  content?: React.ReactNode
  position?: "top" | "bottom" | "left" | "right"
  side?: "top" | "bottom" | "left" | "right"
  contentClassName?: string
  children?: React.ReactNode
}

export interface TooltipTriggerProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean
}

export const TooltipTrigger = React.forwardRef<HTMLElement, TooltipTriggerProps>(
  ({ asChild = false, children, onMouseEnter, onMouseLeave, onFocus, onBlur, ...props }, forwardedRef) => {
    const { setOpen, triggerRef, updateTriggerRect, delayDuration } = useTooltipContext()
    const timerRef = React.useRef<any>(null)
    const Comp = asChild ? Slot : "button"

    const setMergedRef = React.useCallback(
      (node: HTMLElement | null) => {
        triggerRef.current = node
        if (typeof forwardedRef === "function") {
          forwardedRef(node)
        } else if (forwardedRef) {
          (forwardedRef as React.MutableRefObject<any>).current = node
        }
      },
      [forwardedRef, triggerRef]
    )

    const handleEnter = () => {
      clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => {
        updateTriggerRect()
        setOpen(true)
      }, delayDuration)
    }

    const handleLeave = () => {
      clearTimeout(timerRef.current)
      setOpen(false)
    }

    return (
      <Comp
        ref={setMergedRef as any}
        onMouseEnter={(e: any) => {
          onMouseEnter?.(e)
          handleEnter()
        }}
        onMouseLeave={(e: any) => {
          onMouseLeave?.(e)
          handleLeave()
        }}
        onFocus={(e: any) => {
          onFocus?.(e)
          handleEnter()
        }}
        onBlur={(e: any) => {
          onBlur?.(e)
          handleLeave()
        }}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
TooltipTrigger.displayName = "TooltipTrigger"

export interface TooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: "top" | "bottom" | "left" | "right"
  sideOffset?: number
}

export const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ className, side = "top", sideOffset = 4, children, style, ...props }, ref) => {
    const { open, triggerRect } = useTooltipContext()

    if (!open) return null

    let positioningStyle: React.CSSProperties = {}
    if (triggerRect) {
      if (side === "top") {
        positioningStyle = {
          position: "fixed",
          bottom: `${window.innerHeight - triggerRect.top + sideOffset}px`,
          left: `${triggerRect.left + triggerRect.width / 2}px`,
          transform: "translateX(-50%)",
        }
      } else if (side === "bottom") {
        positioningStyle = {
          position: "fixed",
          top: `${triggerRect.bottom + sideOffset}px`,
          left: `${triggerRect.left + triggerRect.width / 2}px`,
          transform: "translateX(-50%)",
        }
      } else if (side === "left") {
        positioningStyle = {
          position: "fixed",
          right: `${window.innerWidth - triggerRect.left + sideOffset}px`,
          top: `${triggerRect.top + triggerRect.height / 2}px`,
          transform: "translateY(-50%)",
        }
      } else if (side === "right") {
        positioningStyle = {
          position: "fixed",
          left: `${triggerRect.right + sideOffset}px`,
          top: `${triggerRect.top + triggerRect.height / 2}px`,
          transform: "translateY(-50%)",
        }
      }
    }

    return (
      <Portal>
        <div
          ref={ref}
          role="tooltip"
          style={{ ...positioningStyle, ...style }}
          className={cn(
            "fixed z-50 overflow-hidden rounded-md bg-zinc-900 px-3 py-1.5 text-xs text-zinc-50 shadow-md animate-in fade-in-0 zoom-in-95 dark:bg-zinc-100 dark:text-zinc-900 pointer-events-none",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </Portal>
    )
  }
)
TooltipContent.displayName = "TooltipContent"

export const Tooltip: React.FC<TooltipProps> = ({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  delayDuration = 200,
  delay,
  content,
  position,
  side,
  contentClassName,
  children,
}) => {
  const [open, setOpen] = React.useState<boolean>(controlledOpen ?? defaultOpen)

  React.useEffect(() => {
    if (controlledOpen !== undefined) {
      setOpen(controlledOpen)
    }
  }, [controlledOpen])

  const handleOpenChange = (nextOpen: boolean) => {
    if (controlledOpen === undefined) {
      setOpen(nextOpen)
    }
    onOpenChange?.(nextOpen)
  }

  const triggerRef = React.useRef<HTMLElement | null>(null)
  const [triggerRect, setTriggerRect] = React.useState<DOMRect | null>(null)

  const updateTriggerRect = React.useCallback(() => {
    if (triggerRef.current) {
      setTriggerRect(triggerRef.current.getBoundingClientRect())
    }
  }, [])

  const resolvedSide = side || position || "top"
  const resolvedDelay = delay ?? delayDuration

  const contextValue = {
    open,
    setOpen: handleOpenChange,
    triggerRef,
    triggerRect,
    updateTriggerRect,
    delayDuration: resolvedDelay,
  }

  if (content !== undefined) {
    return (
      <TooltipContext.Provider value={contextValue}>
        <TooltipTrigger asChild>
          {React.isValidElement(children) ? children : <span>{children}</span>}
        </TooltipTrigger>
        <TooltipContent side={resolvedSide} className={contentClassName}>
          {content}
        </TooltipContent>
      </TooltipContext.Provider>
    )
  }

  return (
    <TooltipContext.Provider value={contextValue}>
      {children}
    </TooltipContext.Provider>
  )
}

export const useTooltip = () => ({
  open: false,
  setOpen: () => {},
})

export default Tooltip
