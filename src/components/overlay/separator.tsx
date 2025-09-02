import React from 'react'
import { cn } from '../../lib/utils'

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical'
  decorative?: boolean
}

export const Separator: React.FC<SeparatorProps> = ({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}) => {
  const baseClasses = 'shrink-0 bg-border'
  
  const orientationClasses = {
    horizontal: 'h-px w-full',
    vertical: 'h-full w-px'
  }
  
  const semanticClasses = decorative ? '' : 'mx-2'
  
  return (
    <div
      role={decorative ? 'none' : 'separator'}
      aria-orientation={orientation}
      className={cn(
        baseClasses,
        orientationClasses[orientation],
        semanticClasses,
        className
      )}
      {...props}
    />
  )
}
