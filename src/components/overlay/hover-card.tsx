import React, { useState, useRef, useEffect } from 'react'
import { cn } from '../../lib/utils'

export interface HoverCardProps {
  children: React.ReactNode
  className?: string
}

export interface HoverCardTriggerProps {
  children: React.ReactNode
  asChild?: boolean
  className?: string
}

export interface HoverCardContentProps {
  children: React.ReactNode
  className?: string
  align?: 'start' | 'center' | 'end'
  side?: 'top' | 'right' | 'bottom' | 'left'
  sideOffset?: number
}

export const HoverCard: React.FC<HoverCardProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('relative inline-block', className)}>
      {children}
    </div>
  )
}

export const HoverCardTrigger: React.FC<HoverCardTriggerProps> = ({
  children,
  asChild = false,
  className
}) => {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(children.props.className, className)
    })
  }
  
  return (
    <div className={cn('inline-block', className)}>
      {children}
    </div>
  )
}

export const HoverCardContent: React.FC<HoverCardContentProps> = ({
  children,
  className,
  align = 'center',
  side = 'top',
  sideOffset = 4
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const triggerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  const alignClasses = {
    start: 'left-0',
    center: 'left-1/2 -translate-x-1/2',
    end: 'right-0'
  }

  const sideClasses = {
    top: 'bottom-full mb-2',
    right: 'left-full ml-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2'
  }

  const showCard = () => {
    timeoutRef.current = setTimeout(() => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect()
        setPosition({ x: rect.left, y: rect.top })
        setIsVisible(true)
      }
    }, 300)
  }

  const hideCard = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsVisible(false)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={showCard}
        onMouseLeave={hideCard}
        onFocus={showCard}
        onBlur={hideCard}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              onMouseEnter: (e: React.MouseEvent) => {
                showCard()
                if (child.props.onMouseEnter) {
                  child.props.onMouseEnter(e)
                }
              },
              onMouseLeave: (e: React.MouseEvent) => {
                hideCard()
                if (child.props.onMouseLeave) {
                  child.props.onMouseLeave(e)
                }
              }
            })
          }
          return child
        })}
      </div>
      {isVisible && (
        <div
          ref={contentRef}
          className={cn(
            'absolute z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md',
            alignClasses[align],
            sideClasses[side],
            className
          )}
          style={{
            left: position.x,
            top: position.y
          }}
          onMouseEnter={showCard}
          onMouseLeave={hideCard}
        >
          {children}
        </div>
      )}
    </>
  )
}
