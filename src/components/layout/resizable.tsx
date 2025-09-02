import React, { useState, useRef, useEffect, useCallback } from 'react'
import { cn } from '../../lib/utils'

export interface ResizableProps {
  children: React.ReactNode
  className?: string
  direction?: 'horizontal' | 'vertical'
  minSize?: number
  maxSize?: number
  defaultSize?: number
  onResize?: (size: number) => void
}

export interface ResizableHandleProps {
  className?: string
  direction?: 'horizontal' | 'vertical'
}

export interface ResizablePanelProps {
  children: React.ReactNode
  className?: string
  defaultSize?: number
  minSize?: number
  maxSize?: number
  collapsible?: boolean
  collapsedSize?: number
  onCollapse?: (collapsed: boolean) => void
}

export const Resizable: React.FC<ResizableProps> = ({
  children,
  className,
  direction = 'horizontal',
  minSize = 0,
  maxSize = Infinity,
  defaultSize = 200,
  onResize
}) => {
  const [size, setSize] = useState(defaultSize)
  const [isDragging, setIsDragging] = useState(false)
  const startPos = useRef(0)
  const startSize = useRef(0)

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    startPos.current = direction === 'horizontal' ? e.clientX : e.clientY
    startSize.current = size
  }, [direction, size])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return

    const delta = direction === 'horizontal' 
      ? e.clientX - startPos.current
      : e.clientY - startPos.current

    const newSize = Math.max(minSize, Math.min(maxSize, startSize.current + delta))
    setSize(newSize)
    onResize?.(newSize)
  }, [isDragging, direction, minSize, maxSize, onResize])

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

  return (
    <div className={cn('flex', direction === 'vertical' ? 'flex-col' : 'flex-row', className)}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child) && child.type === ResizablePanel) {
          return React.cloneElement(child, {
            style: {
              [direction === 'horizontal' ? 'width' : 'height']: `${size}px`,
              flexShrink: 0
            }
          })
        }
        return child
      })}
      <ResizableHandle
        direction={direction}
        onMouseDown={handleMouseDown}
        className={cn(
          'bg-border hover:bg-border-foreground/20 transition-colors',
          direction === 'horizontal' ? 'w-1 cursor-col-resize' : 'h-1 cursor-row-resize'
        )}
      />
    </div>
  )
}

export const ResizableHandle: React.FC<ResizableHandleProps & {
  onMouseDown?: (e: React.MouseEvent) => void
  className?: string
}> = ({
  direction = 'horizontal',
  onMouseDown,
  className
}) => {
  return (
    <div
      className={cn(
        'relative',
        direction === 'horizontal' ? 'w-1' : 'h-1',
        className
      )}
      onMouseDown={onMouseDown}
    >
      <div
        className={cn(
          'absolute inset-0 flex items-center justify-center',
          direction === 'horizontal' ? 'w-full' : 'h-full'
        )}
      >
        <div
          className={cn(
            'rounded-full bg-muted-foreground/20',
            direction === 'horizontal' ? 'h-8 w-1' : 'h-1 w-8'
          )}
        />
      </div>
    </div>
  )
}

export const ResizablePanel: React.FC<ResizablePanelProps & {
  style?: React.CSSProperties
}> = ({
  children,
  className,
  style
}) => {
  return (
    <div className={cn('overflow-auto', className)} style={style}>
      {children}
    </div>
  )
}
