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
  // Enterprise features
  analyticsId?: string
  analyticsEvent?: string
  analyticsData?: Record<string, any>
  ariaLabel?: string
  ariaDescribedBy?: string
  role?: string
  dataTestId?: string
  onAnalytics?: (event: string, data?: Record<string, any>) => void
  tooltip?: string
  loading?: boolean
  error?: string
  success?: boolean
  validation?: {
    required?: boolean
    custom?: (value: number | [number, number]) => boolean | string
  }
  shortcuts?: Array<{
    label: string
    value: number | [number, number]
    onClick: () => void
  }>
  customMarks?: Array<{
    value: number
    label?: string
    className?: string
    tooltip?: string
  }>
  onValueHover?: (value: number | [number, number]) => void
  onValueFocus?: (value: number | [number, number]) => void
  keyboardNavigation?: boolean
  autoFocus?: boolean
  interactive?: boolean
  clickable?: boolean
  onValueClick?: (value: number | [number, number]) => void
  onValueDoubleClick?: (value: number | [number, number]) => void
  onRightClick?: (value: number | [number, number], event: React.MouseEvent) => void
  contextMenuItems?: Array<{
    label: string
    onClick: (value: number | [number, number]) => void
    icon?: React.ReactNode
    disabled?: boolean
  }>
  draggable?: boolean
  onDragMove?: (position: { x: number; y: number }) => void
  onDragComplete?: (position: { x: number; y: number }) => void
  swipeable?: boolean
  onSwipe?: (direction: 'left' | 'right' | 'up' | 'down') => void
  resizable?: boolean
  onResize?: (size: { width: number; height: number }) => void
  scrollable?: boolean
  onScrollChange?: (scrollY: number) => void
  focusable?: boolean
  onFocus?: () => void
  onBlur?: () => void
  tabIndex?: number
  animation?: 'slide' | 'fade' | 'scale' | 'bounce' | 'none'
  animationDuration?: number
  onAnimationStart?: () => void
  onAnimationEnd?: () => void
  theme?: 'light' | 'dark' | 'auto'
  locale?: string
  rtl?: boolean
  accessibility?: {
    announce?: boolean
    announceMessage?: string
    role?: string
    liveRegion?: 'polite' | 'assertive' | 'off'
  }
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
  showValue = false,
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
  const isDraggingRef = useRef(false)  // Use ref instead of state to avoid stale closures in document listeners
  const [activeThumb, setActiveThumb] = useState<'min' | 'max' | null>(null)
  const activeThumbRef = useRef<'min' | 'max' | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const thumbRef = useRef<HTMLDivElement>(null)

  // Size classes
  const sizeClasses = {
    sm: 'h-1.5',
    md: 'h-2',
    lg: 'h-2.5'
  }

  const thumbSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }

  // Variant classes with proper visibility
  const variantClasses = {
    default: 'bg-zinc-200 dark:bg-zinc-800',
    filled: 'bg-zinc-200/70 dark:bg-zinc-800/70',
    outlined: 'bg-transparent border border-zinc-300 dark:border-zinc-700',
    minimal: 'bg-zinc-100 dark:bg-zinc-900'
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
    isDraggingRef.current = true
    activeThumbRef.current = thumb
    setActiveThumb(thumb)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('touchmove', handleTouchMove)
    document.addEventListener('touchend', handleTouchEnd)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDraggingRef.current || !sliderRef.current) return
    updateValue(e.clientX, e.clientY)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDraggingRef.current || !sliderRef.current) return
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

    if (range && activeThumbRef.current) {
      const newRangeValue: [number, number] = [...(currentValue as [number, number])]
      if (activeThumbRef.current === 'min') {
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
    isDraggingRef.current = false
    activeThumbRef.current = null
    setActiveThumb(null)
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
    document.removeEventListener('touchmove', handleTouchMove)
    document.removeEventListener('touchend', handleTouchEnd)
  }

  // Cleanup listeners on unmount
  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
          'mb-2 flex items-center justify-between text-xs font-medium text-zinc-500 dark:text-zinc-400',
          orientation === 'vertical' && 'absolute -top-8 left-0'
        )}>
          <span>Value</span>
          <span className="font-mono text-zinc-900 dark:text-zinc-100">{range ? `${currentMin} - ${currentMax}` : currentMax}</span>
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
          className="absolute top-0 left-0 h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-100 ease-out"
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
                'bg-white dark:bg-zinc-100 border-2 border-blue-600 dark:border-blue-500 rounded-full shadow-md',
                'hover:scale-110 hover:shadow-lg transition-all duration-150 ease-out active:scale-95',
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
                'bg-white dark:bg-zinc-100 border-2 border-blue-600 dark:border-blue-500 rounded-full shadow-md',
                'hover:scale-110 hover:shadow-lg transition-all duration-150 ease-out active:scale-95',
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
              'bg-white dark:bg-zinc-100 border-2 border-blue-600 dark:border-blue-500 rounded-full shadow-md',
              'hover:scale-110 active:scale-95 transition-all duration-150 ease-out',
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
