import React, { forwardRef, useState, useRef, useEffect } from 'react'
import { cn } from '../../lib/utils'

export interface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  value?: number | [number, number]
  defaultValue?: number | [number, number]
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
  color?: string
  backgroundColor?: string
  trackColor?: string
  thumbColor?: string
  borderRadius?: string | number
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  fullWidth?: boolean
  onChange?: (value: number | [number, number]) => void
  onValueChange?: (value: number | [number, number]) => void
}

const Slider = forwardRef<HTMLDivElement, SliderProps>(({
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
  showValue = true,
  showMarks = false,
  marks = [],
  color,
  backgroundColor,
  trackColor,
  thumbColor,
  borderRadius,
  shadow = 'none',
  fullWidth = false,
  onChange,
  onValueChange,
  className,
  style,
  ...props
}, ref) => {
  const [value, setValue] = useState<number | [number, number]>(controlledValue ?? defaultValue)
  const [isDragging, setIsDragging] = useState(false)
  const [activeThumb, setActiveThumb] = useState<'min' | 'max' | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const thumbRef = useRef<HTMLDivElement>(null)

  // Size classes
  const sizeClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  }

  const thumbSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }

  // Variant classes with proper visibility
  const variantClasses = {
    default: 'bg-slate-200 dark:bg-slate-600',
    filled: 'bg-blue-100 dark:bg-blue-900/20',
    outlined: 'bg-transparent border-2 border-slate-300 dark:border-slate-600',
    minimal: 'bg-slate-100 dark:bg-slate-700'
  }

  // Shadow classes
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  }

  // Update value when controlled value changes
  useEffect(() => {
    if (controlledValue !== undefined) {
      setValue(controlledValue)
    }
  }, [controlledValue])

  // Calculate percentage for positioning
  const getPercentage = (val: number) => {
    return ((val - min) / (max - min)) * 100
  }

  // Get current values
  const currentValue = controlledValue ?? value
  const currentMin = range ? (currentValue as [number, number])[0] : 0
  const currentMax = range ? (currentValue as [number, number])[1] : (currentValue as number)

  // Calculate track fill
  const getTrackFill = () => {
    if (range) {
      const minPercent = getPercentage(currentMin)
      const maxPercent = getPercentage(currentMax)
      return {
        left: `${minPercent}%`,
        width: `${maxPercent - minPercent}%`
      }
    } else {
      return {
        left: '0%',
        width: `${getPercentage(currentMax)}%`
      }
    }
  }

  // Handle mouse/touch events
  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent, thumb: 'min' | 'max' | null) => {
    if (disabled) return
    setIsDragging(true)
    setActiveThumb(thumb)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('touchmove', handleTouchMove)
    document.addEventListener('touchend', handleTouchEnd)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return
    updateValue(e.clientX, e.clientY)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !sliderRef.current) return
    const touch = e.touches[0]
    updateValue(touch.clientX, touch.clientY)
  }

  const updateValue = (clientX: number, clientY: number) => {
    if (!sliderRef.current) return

    const rect = sliderRef.current.getBoundingClientRect()
    let newValue: number

    if (orientation === 'horizontal') {
      const percentage = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100))
      newValue = min + (percentage / 100) * (max - min)
    } else {
      const percentage = Math.max(0, Math.min(100, ((rect.bottom - clientY) / rect.height) * 100))
      newValue = min + (percentage / 100) * (max - min)
    }

    // Snap to step
    newValue = Math.round(newValue / step) * step
    newValue = Math.max(min, Math.min(max, newValue))

    if (range && activeThumb) {
      const newRangeValue: [number, number] = [...(currentValue as [number, number])]
      if (activeThumb === 'min') {
        newRangeValue[0] = Math.min(newValue, newRangeValue[1] - step)
      } else {
        newRangeValue[1] = Math.max(newValue, newRangeValue[0] + step)
      }
      setValue(newRangeValue)
      onValueChange?.(newRangeValue)
      onChange?.(newRangeValue)
    } else {
      setValue(newValue)
      onValueChange?.(newValue)
      onChange?.(newValue)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setActiveThumb(null)
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
    document.removeEventListener('touchmove', handleTouchMove)
    document.removeEventListener('touchend', handleTouchEnd)
  }

  const handleTouchEnd = handleMouseUp

  // Handle click on track
  const handleTrackClick = (e: React.MouseEvent) => {
    if (disabled) return
    updateValue(e.clientX, e.clientY)
  }

  // Render marks
  const renderMarks = () => {
    if (!showMarks || marks.length === 0) return null

    return marks.map((mark, index) => (
      <div
        key={index}
        className="absolute text-xs text-slate-500 dark:text-slate-400"
        style={{
          [orientation === 'horizontal' ? 'left' : 'bottom']: `${getPercentage(mark.value)}%`,
          transform: orientation === 'horizontal' ? 'translateX(-50%)' : 'translateY(50%)'
        }}
      >
        {mark.label || mark.value}
      </div>
    ))
  }

  return (
    <div
      ref={ref}
      className={cn(
        'relative',
        fullWidth && 'w-full',
        orientation === 'vertical' && 'h-64',
        className
      )}
      style={{
        color,
        backgroundColor,
        borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
        ...style
      }}
      {...props}
    >
      {/* Value Display */}
      {showValue && (
        <div className={cn(
          'mb-2 text-sm font-medium',
          orientation === 'vertical' && 'absolute -top-8 left-0'
        )}>
          {range ? `${currentMin} - ${currentMax}` : currentMax}
        </div>
      )}

      {/* Slider Track */}
      <div
        ref={sliderRef}
        className={cn(
          'relative cursor-pointer',
          orientation === 'horizontal' ? 'w-full' : 'h-full w-2',
          sizeClasses[size],
          variantClasses[variant],
          'rounded-full',
          shadowClasses[shadow]
        )}
        style={{
          backgroundColor: trackColor,
          transform: orientation === 'vertical' ? 'rotate(180deg)' : undefined
        }}
        onClick={handleTrackClick}
      >
        {/* Track Fill */}
        <div
          className="absolute top-0 left-0 h-full bg-blue-500 dark:bg-blue-400 rounded-full transition-all duration-200"
          style={{
            backgroundColor: color || undefined,
            ...getTrackFill()
          }}
        />

        {/* Marks */}
        {renderMarks()}

        {/* Thumbs */}
        {range ? (
          <>
            {/* Min Thumb */}
            <div
              className={cn(
                'absolute top-1/2 transform -translate-y-1/2 cursor-grab active:cursor-grabbing',
                thumbSizeClasses[size],
                'bg-white dark:bg-slate-200 border-2 border-blue-500 dark:border-blue-400 rounded-full shadow-md',
                'hover:scale-110 hover:shadow-lg transition-all duration-200 active:scale-95',
                disabled && 'cursor-not-allowed opacity-50'
              )}
              style={{
                backgroundColor: thumbColor,
                left: `${getPercentage(currentMin)}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onMouseDown={(e) => handleMouseDown(e, 'min')}
              onTouchStart={(e) => handleMouseDown(e, 'min')}
            />
            {/* Max Thumb */}
            <div
              className={cn(
                'absolute top-1/2 transform -translate-y-1/2 cursor-grab active:cursor-grabbing',
                thumbSizeClasses[size],
                'bg-white dark:bg-slate-200 border-2 border-blue-500 dark:border-blue-400 rounded-full shadow-md',
                'hover:scale-110 hover:shadow-lg transition-all duration-200 active:scale-95',
                disabled && 'cursor-not-allowed opacity-50'
              )}
              style={{
                backgroundColor: thumbColor,
                left: `${getPercentage(currentMax)}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onMouseDown={(e) => handleMouseDown(e, 'max')}
              onTouchStart={(e) => handleMouseDown(e, 'max')}
            />
          </>
        ) : (
          /* Single Thumb */
          <div
            ref={thumbRef}
            className={cn(
              'absolute top-1/2 transform -translate-y-1/2 cursor-grab active:cursor-grabbing',
              thumbSizeClasses[size],
              'bg-white dark:bg-slate-200 border-2 border-blue-500 dark:border-blue-400 rounded-full shadow-md',
              'hover:scale-110 transition-transform duration-200',
              disabled && 'cursor-not-allowed opacity-50'
            )}
            style={{
              backgroundColor: thumbColor,
              left: `${getPercentage(currentMax)}%`,
              transform: 'translate(-50%, -50%)'
            }}
            onMouseDown={(e) => handleMouseDown(e, null)}
            onTouchStart={(e) => handleMouseDown(e, null)}
          />
        )}
      </div>
    </div>
  )
})

Slider.displayName = "Slider"

export { Slider }
