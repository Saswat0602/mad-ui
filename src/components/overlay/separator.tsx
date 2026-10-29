import React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { cn } from '../../lib/utils'

export interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  thickness?: 'thin' | 'medium' | 'thick'
  lineStyle?: 'solid' | 'dashed' | 'dotted'
}

export const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(({
  className,
  orientation = 'horizontal',
  decorative = true,
  thickness = 'thin',
  lineStyle = 'solid',
  ...props
}, ref) => {
  const thicknessClasses = {
    thin: orientation === 'horizontal' ? 'h-px' : 'w-px',
    medium: orientation === 'horizontal' ? 'h-0.5' : 'w-0.5',
    thick: orientation === 'horizontal' ? 'h-1' : 'w-1',
  }

  const styleClasses = {
    solid: 'bg-zinc-200 dark:bg-zinc-800',
    dashed: orientation === 'horizontal' ? 'border-b border-dashed border-zinc-200 dark:border-zinc-800 bg-transparent' : 'border-r border-dashed border-zinc-200 dark:border-zinc-800 bg-transparent',
    dotted: orientation === 'horizontal' ? 'border-b border-dotted border-zinc-200 dark:border-zinc-800 bg-transparent' : 'border-r border-dotted border-zinc-200 dark:border-zinc-800 bg-transparent',
  }

  return (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0',
        orientation === 'horizontal' ? 'w-full' : 'h-full',
        thicknessClasses[thickness],
        styleClasses[lineStyle],
        className
      )}
      {...props}
    />
  )
})
Separator.displayName = SeparatorPrimitive.Root.displayName

export default Separator
