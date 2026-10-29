import React, { forwardRef } from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '../../lib/utils'

export interface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  value?: number | number[] | [number, number]
  defaultValue?: number | number[] | [number, number]
  min?: number
  max?: number
  step?: number
  variant?: 'default' | 'filled' | 'outlined' | 'minimal'
  size?: 'sm' | 'md' | 'lg'
  orientation?: 'horizontal' | 'vertical'
  range?: boolean
  disabled?: boolean
  showValue?: boolean
  showMarks?: boolean
  marks?: Array<{ value: number; label?: string }>
  fullWidth?: boolean
  onChange?: (value: number | number[] | [number, number]) => void
  onValueChange?: (value: number | number[] | [number, number]) => void
  [key: string]: any
}


export const Slider = forwardRef<HTMLDivElement, SliderProps>(({
  value: controlledValue,
  defaultValue = 0,
  min = 0,
  max = 100,
  step = 1,
  variant = 'default',
  size = 'md',
  orientation = 'horizontal',
  range = false,
  disabled = false,
  showValue = false,
  showMarks = false,
  marks = [],
  fullWidth = false,
  onChange,
  onValueChange,
  className,
  ...props
}, ref) => {
  const toArray = (val?: number | number[] | [number, number]): number[] => {
    if (val === undefined) return [0]
    return Array.isArray(val) ? val : [val]
  }

  const values = controlledValue !== undefined ? toArray(controlledValue) : undefined
  const defaultValues = defaultValue !== undefined ? toArray(defaultValue) : [0]

  const handleValueChange = (newValues: number[]) => {
    const isMulti = range || newValues.length > 1
    const result = isMulti ? newValues : newValues[0]
    onValueChange?.(result)
    onChange?.(result)
  }

  const trackSizes: Record<'sm' | 'md' | 'lg', string> = {
    sm: 'h-1',
    md: 'h-1.5',
    lg: 'h-2.5',
  }

  const thumbSizes: Record<'sm' | 'md' | 'lg', string> = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  }

  const thumbsCount = values ? values.length : (range ? Math.max(defaultValues.length, 2) : 1)

  return (
    <div className={cn('relative flex flex-col gap-1.5', fullWidth && 'w-full', className)}>
      <SliderPrimitive.Root
        ref={ref as any}
        min={min}
        max={max}
        step={step}
        orientation={orientation}
        disabled={disabled}
        value={values}
        defaultValue={values ? undefined : defaultValues}
        onValueChange={handleValueChange}
        className={cn(
          'relative flex touch-none select-none items-center',
          orientation === 'horizontal' ? 'w-full' : 'h-full flex-col',
          disabled && 'opacity-50 cursor-not-allowed'
        )}
        {...props}
      >
        <SliderPrimitive.Track
          className={cn(
            'relative grow overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800 transition-colors',
            orientation === 'horizontal' ? trackSizes[size as 'sm' | 'md' | 'lg' || 'md'] : 'w-1.5'
          )}
        >
          <SliderPrimitive.Range className="absolute h-full bg-blue-600 dark:bg-blue-500 rounded-full" />
        </SliderPrimitive.Track>

        {Array.from({ length: thumbsCount }).map((_, i) => (
          <SliderPrimitive.Thumb
            key={i}
            className={cn(
              'block rounded-full border border-blue-600/40 bg-white dark:bg-zinc-100 shadow-md transition-colors',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2',
              'disabled:pointer-events-none cursor-grab active:cursor-grabbing',
              thumbSizes[size as 'sm' | 'md' | 'lg' || 'md']
            )}
          />
        ))}

      </SliderPrimitive.Root>

      {showMarks && marks.length > 0 && (
        <div className="relative w-full flex justify-between px-1 text-[11px] text-zinc-400">
          {marks.map((m: { value: number; label?: string }) => (
            <span key={m.value}>{m.label || m.value}</span>
          ))}
        </div>
      )}
    </div>
  )
})
Slider.displayName = 'Slider'

export default Slider
