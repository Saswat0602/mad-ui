import React from 'react'
import { cn } from '../../lib/utils'

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: number
  children: React.ReactNode
}

export const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio = 16 / 9, children, className, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('relative w-full', className)}
        style={{
          aspectRatio: ratio,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    )
  }
)
AspectRatio.displayName = 'AspectRatio'

export default AspectRatio
