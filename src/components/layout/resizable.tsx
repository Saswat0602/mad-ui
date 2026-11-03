"use client"

import React, { useState, useRef, useEffect, useCallback, forwardRef } from 'react'
import { cn } from '../../lib/utils'

export interface ResizableProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  direction?: 'horizontal' | 'vertical'
  minSize?: number
  maxSize?: number
  defaultSize?: number
  onResize?: (size: number) => void
}

export interface ResizableHandleProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  direction?: 'horizontal' | 'vertical'
  withHandle?: boolean
  disabled?: boolean
  onMouseDown?: (e: React.MouseEvent) => void
}

export interface ResizablePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string
  defaultSize?: number
  minSize?: number
  maxSize?: number
  collapsible?: boolean
  collapsedSize?: number
  onCollapse?: (collapsed: boolean) => void
  style?: React.CSSProperties
}

export const ResizablePanel = forwardRef<HTMLDivElement, ResizablePanelProps>(
  ({ children, className, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('overflow-auto', className)}
        style={style}
        {...props}
      >
        {children}
      </div>
    )
  }
)
ResizablePanel.displayName = 'ResizablePanel'

export const ResizableHandle = forwardRef<HTMLDivElement, ResizableHandleProps>(
  (
    {
      direction = 'horizontal',
      withHandle = true,
      disabled = false,
      className,
      onMouseDown,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="separator"
        tabIndex={disabled ? -1 : 0}
        aria-orientation={direction}
        aria-valuenow={props['aria-valuenow'] !== undefined ? props['aria-valuenow'] : 50}
        aria-valuemin={props['aria-valuemin'] !== undefined ? props['aria-valuemin'] : 0}
        aria-valuemax={props['aria-valuemax'] !== undefined ? props['aria-valuemax'] : 100}
        onMouseDown={disabled ? undefined : onMouseDown}
        onKeyDown={onKeyDown}
        className={cn(
          'relative flex items-center justify-center bg-border transition-colors select-none',
          direction === 'horizontal'
            ? 'w-1.5 hover:w-2 cursor-col-resize hover:bg-primary/50'
            : 'h-1.5 hover:h-2 cursor-row-resize hover:bg-primary/50',
          'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:bg-primary',
          disabled && 'cursor-default opacity-40 pointer-events-none',
          className
        )}
        {...props}
      >
        {withHandle && (
          <div
            className={cn(
              'z-10 flex items-center justify-center rounded-xs bg-muted-foreground/30',
              direction === 'horizontal' ? 'h-6 w-1' : 'h-1 w-6'
            )}
          />
        )}
      </div>
    )
  }
)
ResizableHandle.displayName = 'ResizableHandle'

export const Resizable = forwardRef<HTMLDivElement, ResizableProps>(
  (
    {
      children,
      className,
      direction = 'horizontal',
      minSize = 50,
      maxSize = Infinity,
      defaultSize = 240,
      onResize,
      ...props
    },
    ref
  ) => {
    const [size, setSize] = useState(defaultSize)
    const [isDragging, setIsDragging] = useState(false)
    const startPos = useRef(0)
    const startSize = useRef(0)

    const handleMouseDown = useCallback(
      (e: React.MouseEvent) => {
        e.preventDefault()
        setIsDragging(true)
        startPos.current = direction === 'horizontal' ? e.clientX : e.clientY
        startSize.current = size
      },
      [direction, size]
    )

    const handleMouseMove = useCallback(
      (e: MouseEvent) => {
        if (!isDragging) return
        const delta =
          direction === 'horizontal'
            ? e.clientX - startPos.current
            : e.clientY - startPos.current

        const newSize = Math.max(minSize, Math.min(maxSize, startSize.current + delta))
        setSize(newSize)
        onResize?.(newSize)
      },
      [isDragging, direction, minSize, maxSize, onResize]
    )

    const handleMouseUp = useCallback(() => {
      setIsDragging(false)
    }, [])

    useEffect(() => {
      if (isDragging) {
        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
        return () => {
          document.removeEventListener('mousemove', handleMouseMove)
          document.removeEventListener('mouseup', handleMouseUp)
        }
      }
    }, [isDragging, handleMouseMove, handleMouseUp])

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        const step = 10
        let nextSize = size
        if (
          (direction === 'horizontal' && e.key === 'ArrowRight') ||
          (direction === 'vertical' && e.key === 'ArrowDown')
        ) {
          e.preventDefault()
          nextSize = Math.min(maxSize, size + step)
        } else if (
          (direction === 'horizontal' && e.key === 'ArrowLeft') ||
          (direction === 'vertical' && e.key === 'ArrowUp')
        ) {
          e.preventDefault()
          nextSize = Math.max(minSize, size - step)
        } else if (e.key === 'Home') {
          e.preventDefault()
          nextSize = minSize
        } else if (e.key === 'End' && maxSize !== Infinity) {
          e.preventDefault()
          nextSize = maxSize
        }
        if (nextSize !== size) {
          setSize(nextSize)
          onResize?.(nextSize)
        }
      },
      [direction, size, minSize, maxSize, onResize]
    )

    const childArray = React.Children.toArray(children)
    const hasCustomHandle = childArray.some(
      (child) =>
        React.isValidElement(child) &&
        ((child.type as any)?.displayName === 'ResizableHandle' ||
          child.type === ResizableHandle)
    )

    return (
      <div
        ref={ref}
        className={cn(
          'flex overflow-hidden rounded-xl border border-border bg-background',
          direction === 'vertical' ? 'flex-col' : 'flex-row',
          className
        )}
        {...props}
      >
        {childArray.map((child, index) => {
          if (!React.isValidElement(child)) return child

          const isPanel =
            (child.type as any)?.displayName === 'ResizablePanel' ||
            child.type === ResizablePanel

          const isHandle =
            (child.type as any)?.displayName === 'ResizableHandle' ||
            child.type === ResizableHandle

          if (isHandle) {
            return React.cloneElement(child as React.ReactElement<any>, {
              direction,
              'aria-valuenow': Math.round(size),
              'aria-valuemin': Math.round(minSize),
              'aria-valuemax': maxSize !== Infinity ? Math.round(maxSize) : 100,
              onMouseDown: handleMouseDown,
              onKeyDown: handleKeyDown,
            })
          }

          if (isPanel && index === 0) {
            return (
              <React.Fragment key={index}>
                {React.cloneElement(child as React.ReactElement<any>, {
                  style: {
                    ...(child.props.style || {}),
                    [direction === 'horizontal' ? 'width' : 'height']: `${size}px`,
                    flexShrink: 0,
                  },
                })}
                {!hasCustomHandle && (
                  <ResizableHandle
                    direction={direction}
                    aria-valuenow={Math.round(size)}
                    aria-valuemin={Math.round(minSize)}
                    aria-valuemax={maxSize !== Infinity ? Math.round(maxSize) : 100}
                    onMouseDown={handleMouseDown}
                    onKeyDown={handleKeyDown}
                  />
                )}
              </React.Fragment>
            )
          }

          return child
        })}
      </div>
    )
  }
)
Resizable.displayName = 'Resizable'

// Compound attachment pattern
export type ResizableComponent = typeof Resizable & {
  Panel: typeof ResizablePanel
  Handle: typeof ResizableHandle
}

;(Resizable as any).Panel = ResizablePanel
;(Resizable as any).Handle = ResizableHandle

export default Resizable
