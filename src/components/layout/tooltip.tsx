import React, { useState, useRef, useEffect, createContext, useContext } from 'react'
import { cn } from '../../lib/utils'

interface TooltipContextType {
  open: boolean
  setOpen: (open: boolean) => void
}

const TooltipContext = createContext<TooltipContextType | null>(null)

export const useTooltip = () => {
  const context = useContext(TooltipContext)
  return context
}

export interface TooltipProps {
  content?: React.ReactNode
  children: React.ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
  side?: 'top' | 'bottom' | 'left' | 'right'
  delay?: number
  className?: string
  contentClassName?: string
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

export interface TooltipTriggerProps {
  children: React.ReactNode
  asChild?: boolean
  className?: string
}

export interface TooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  side?: 'top' | 'bottom' | 'left' | 'right'
  sideOffset?: number
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
  side,
  delay = 200,
  className,
  contentClassName,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange
}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen)
  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : uncontrolledOpen
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const setOpen = (newOpen: boolean) => {
    if (!isControlled) {
      setUncontrolledOpen(newOpen)
    }
    onOpenChange?.(newOpen)
  }

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(true)
    }, delay)
  }

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setOpen(false)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const effectiveSide = side || position

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2'
  }

  // If used with content prop (legacy API)
  if (content !== undefined) {
    return (
      <div
        className={cn('relative inline-block', className)}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
      >
        {children}
        {open && (
          <div
            role="tooltip"
            className={cn(
              'absolute z-50 px-2.5 py-1 text-xs font-medium rounded-md shadow-md pointer-events-none whitespace-nowrap animate-in fade-in-0 zoom-in-95 duration-150',
              'bg-zinc-900 text-zinc-100 border border-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-200',
              positionClasses[effectiveSide],
              contentClassName
            )}
          >
            {content}
          </div>
        )}
      </div>
    )
  }

  // Compound component API
  return (
    <TooltipContext.Provider value={{ open, setOpen }}>
      <div className={cn('relative inline-block', className)}>
        {children}
      </div>
    </TooltipContext.Provider>
  )
}

export const TooltipTrigger: React.FC<TooltipTriggerProps> = ({
  children,
  asChild = false,
  className
}) => {
  const context = useTooltip()

  const handleMouseEnter = () => context?.setOpen(true)
  const handleMouseLeave = () => context?.setOpen(false)

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<any>
    return React.cloneElement(child, {
      className: cn(child.props.className, className),
      onMouseEnter: (e: React.MouseEvent) => {
        handleMouseEnter()
        child.props.onMouseEnter?.(e)
      },
      onMouseLeave: (e: React.MouseEvent) => {
        handleMouseLeave()
        child.props.onMouseLeave?.(e)
      }
    })
  }

  return (
    <div
      className={cn('inline-block cursor-default', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      {children}
    </div>
  )
}

export const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ children, side = 'top', className, ...props }, ref) => {
    const context = useTooltip()
    if (!context?.open) return null

    const positionClasses = {
      top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
      bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
      left: 'right-full top-1/2 -translate-y-1/2 mr-2',
      right: 'left-full top-1/2 -translate-y-1/2 ml-2'
    }

    return (
      <div
        ref={ref}
        role="tooltip"
        className={cn(
          'absolute z-50 px-2.5 py-1 text-xs font-medium rounded-md shadow-md pointer-events-none whitespace-nowrap animate-in fade-in-0 zoom-in-95 duration-150',
          'bg-zinc-900 text-zinc-100 border border-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-200',
          positionClasses[side],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TooltipContent.displayName = 'TooltipContent'

export interface TooltipProviderProps {
  children: React.ReactNode
  delayDuration?: number
}

export const TooltipProvider: React.FC<TooltipProviderProps> = ({ children }) => {
  return <>{children}</>
}

