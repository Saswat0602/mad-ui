import React, { useRef, useEffect, useState } from 'react'
import { cn } from '../../lib/utils'

export interface ScrollAreaProps {
  children: React.ReactNode
  className?: string
  orientation?: 'vertical' | 'horizontal'
  scrollHideDelay?: number
}

export interface ScrollBarProps {
  orientation?: 'vertical' | 'horizontal'
  className?: string
}

export const ScrollArea: React.FC<ScrollAreaProps> = ({
  children,
  className,
  orientation = 'vertical',
  scrollHideDelay = 600
}) => {
  const [showScrollbar, setShowScrollbar] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const scrollbarRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  const handleScroll = () => {
    setShowScrollbar(true)
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    timeoutRef.current = setTimeout(() => {
      setShowScrollbar(false)
    }, scrollHideDelay)
  }

  useEffect(() => {
    const scrollArea = scrollAreaRef.current
    if (scrollArea) {
      scrollArea.addEventListener('scroll', handleScroll)
      return () => scrollArea.removeEventListener('scroll', handleScroll)
    }
  }, [scrollHideDelay])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div
        ref={scrollAreaRef}
        className={cn(
          'h-full w-full overflow-auto',
          orientation === 'horizontal' && 'overflow-x-auto overflow-y-hidden',
          orientation === 'vertical' && 'overflow-y-auto overflow-x-hidden'
        )}
      >
        {children}
      </div>
      <ScrollBar
        ref={scrollbarRef}
        orientation={orientation}
        className={cn(
          'transition-opacity duration-300',
          showScrollbar ? 'opacity-100' : 'opacity-0'
        )}
      />
    </div>
  )
}

export const ScrollBar = React.forwardRef<HTMLDivElement, ScrollBarProps>(
  ({ orientation = 'vertical', className }, ref) => {
    const isVertical = orientation === 'vertical'
    
    return (
      <div
        ref={ref}
        className={cn(
          'flex touch-none select-none transition-colors duration-150 ease-out hover:bg-primary/20',
          isVertical
            ? 'h-full w-2.5 border-l border-l-transparent p-[1px]'
            : 'h-2.5 w-full border-t border-t-transparent p-[1px]',
          className
        )}
      >
        <div
          className={cn(
            'relative flex-1 rounded-full bg-primary/20',
            isVertical ? 'w-full' : 'h-full'
          )}
        />
      </div>
    )
  }
)

ScrollBar.displayName = 'ScrollBar'
