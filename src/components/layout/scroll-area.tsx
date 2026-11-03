import React from 'react'
import { cn } from '../../lib/utils'

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'vertical' | 'horizontal' | 'both'
}

export const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ className, children, orientation = 'vertical', ...props }, ref) => {
    const overflowClasses = {
      vertical: 'overflow-y-auto overflow-x-hidden',
      horizontal: 'overflow-x-auto overflow-y-hidden',
      both: 'overflow-auto',
    }

    return (
      <div
        ref={ref}
        className={cn('relative overflow-hidden', className)}
        {...props}
      >
        <div
          className={cn(
            'h-full w-full rounded-[inherit] scrollbar-thin scrollbar-thumb-border hover:scrollbar-thumb-muted-foreground/40',
            overflowClasses[orientation]
          )}
        >
          {children}
        </div>
      </div>
    )
  }
)
ScrollArea.displayName = 'ScrollArea'

export interface ScrollBarProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'vertical' | 'horizontal'
}

export const ScrollBar = React.forwardRef<HTMLDivElement, ScrollBarProps>(
  ({ className, orientation = 'vertical', ...props }, ref) => (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        'flex touch-none select-none transition-colors duration-150 ease-out',
        orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent p-[1px]',
        orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent p-[1px]',
        className
      )}
      {...props}
    >
      <div className="relative flex-1 rounded-full bg-border hover:bg-muted-foreground/40 transition-colors" />
    </div>
  )
)
ScrollBar.displayName = 'ScrollBar'

// Compound component pattern attachment
export type ScrollAreaComponent = typeof ScrollArea & {
  ScrollBar: typeof ScrollBar
  Bar: typeof ScrollBar
}

;(ScrollArea as any).ScrollBar = ScrollBar
;(ScrollArea as any).Bar = ScrollBar

export default ScrollArea
