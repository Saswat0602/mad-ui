import React, { forwardRef, useState, useRef, useEffect } from 'react'
import { Clock } from 'lucide-react'
import { cn } from '../../lib/utils'

export interface TimePickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string
  onChange?: (time: string) => void
  placeholder?: string
  disabled?: boolean
  variant?: 'default' | 'filled' | 'outlined' | 'minimal'
  size?: 'sm' | 'md' | 'lg'
  showIcon?: boolean
  format?: '12h' | '24h'
  showSeconds?: boolean
  showAMPM?: boolean
  step?: number
  minTime?: string
  maxTime?: string
  design?: 'classic' | 'modern' // Reduced from 4 to 2 designs
  animation?: 'fade' | 'slide' | 'none' // Reduced from 5 to 3 animations
  color?: string
  backgroundColor?: string
  borderColor?: string
  textColor?: string
  borderRadius?: string | number
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  fullWidth?: boolean
  closeOnSelect?: boolean
  showHeader?: boolean
  showFooter?: boolean
  hourFormat?: 'numeric' | '2-digit'
  minuteFormat?: 'numeric' | '2-digit'
}

const TimePicker = forwardRef<HTMLDivElement, TimePickerProps>(({
  value = '',
  onChange,
  placeholder = 'Select time',
  disabled = false,
  variant = 'default',
  size = 'md',
  showIcon = true,
  format = '12h',
  showSeconds = false,
  showAMPM = true,
  step = 1,
  minTime,
  maxTime,
  design = 'classic',
  animation = 'fade',
  color,
  backgroundColor,
  borderColor,
  textColor,
  borderRadius,
  shadow = 'none',
  fullWidth = false,
  closeOnSelect = true,
  showHeader = true,
  showFooter = false,
  hourFormat = '2-digit',
  minuteFormat = '2-digit',
  className,
  style,
  ...props
}, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTime, setSelectedTime] = useState(value)
  const [currentView, setCurrentView] = useState<'hours' | 'minutes' | 'seconds'>('hours')
  const [isAM, setIsAM] = useState(true)
  const timePickerRef = useRef<HTMLDivElement>(null)

  // Size classes
  const sizeClasses = {
    sm: 'text-sm px-3 py-2',
    md: 'text-base px-4 py-2.5',
    lg: 'text-lg px-5 py-3'
  }

  // Variant classes
  const variantClasses = {
    default: 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100',
    filled: 'bg-gray-100 dark:bg-gray-700 border-transparent text-gray-900 dark:text-gray-100',
    outlined: 'bg-transparent border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100',
    minimal: 'bg-transparent border-transparent text-gray-900 dark:text-gray-100'
  }

  // Shadow classes
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  }

  // Animation classes
  const animationClasses = {
    fade: 'transition-opacity duration-200',
    slide: 'transition-transform duration-200',
    none: ''
  }



  // Update selected time when value changes
  React.useEffect(() => {
    if (value) {
      setSelectedTime(value)
      setIsAM(value.split(':')[0].length === 2 && parseInt(value.split(':')[0]) < 12) // Simple check for 12h format
    }
  }, [value])

  // Format time for display
  const formatTime = (time: string) => {
    if (!time) return ''
    const [hours, minutes, seconds] = time.split(':')
    const hour = parseInt(hours)
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const displayHour = format === '12h' ? (hour % 12 || 12) : hour
    
    let result = `${displayHour.toString().padStart(2, '0')}:${minutes}`
    if (showSeconds && seconds) {
      result += `:${seconds}`
    }
    if (format === '12h' && showAMPM) {
      result += ` ${ampm}`
    }
    return result
  }

  // Generate time options
  const generateHours = () => {
    const maxHour = format === '12h' ? 12 : 24
    return Array.from({ length: maxHour }, (_, i) => {
      const hour = format === '12h' ? (i === 0 ? 12 : i) : i
      return hour.toString().padStart(2, '0')
    })
  }

  const generateMinutes = () => {
    return Array.from({ length: 60 / step }, (_, i) => (i * step).toString().padStart(2, '0'))
  }

  const generateSeconds = () => {
    return Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'))
  }

  // Handle time selection
  const handleTimeSelect = (value: string) => {
    let newTime = selectedTime || '00:00:00'
    const [hours, minutes, seconds] = newTime.split(':')
    
    switch (currentView) {
      case 'hours':
        newTime = `${value}:${minutes}:${seconds}`
        if (format === '12h') {
          setCurrentView('minutes')
        } else {
          setCurrentView('minutes')
        }
        break
      case 'minutes':
        newTime = `${hours}:${value}:${seconds}`
        if (showSeconds) {
          setCurrentView('seconds')
        } else {
          if (closeOnSelect) setIsOpen(false)
        }
        break
      case 'seconds':
        newTime = `${hours}:${minutes}:${value}`
        if (closeOnSelect) setIsOpen(false)
        break
    }
    
    setSelectedTime(newTime)
    onChange?.(newTime)
  }

  // Handle AM/PM toggle
  const handleAMPMToggle = () => {
    if (!selectedTime) return
    const [hours, minutes, seconds] = selectedTime.split(':')
    let newHour = parseInt(hours)
    
    if (isAM && newHour >= 12) {
      newHour -= 12
    } else if (!isAM && newHour < 12) {
      newHour += 12
    }
    
    const newTime = `${newHour.toString().padStart(2, '0')}:${minutes}:${seconds}`
    setSelectedTime(newTime)
    setIsAM(!isAM)
    onChange?.(newTime)
  }

  // Render time picker content
  const renderTimePicker = () => {
    if (design === 'modern') {
      return (
        <div className="p-4 space-y-4">
          {showHeader && (
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Select Time
              </h3>
            </div>
          )}
          
          <div className="grid grid-cols-3 gap-4">
            {/* Hours */}
            <div className="text-center">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Hours</div>
              <div className="space-y-1 max-h-32 overflow-y-auto">
                {generateHours().map((hour) => (
                  <button
                    key={hour}
                    onClick={() => handleTimeSelect(hour)}
                    className="w-full px-3 py-2 text-sm rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {hour}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Minutes */}
            <div className="text-center">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Minutes</div>
              <div className="space-y-1 max-h-32 overflow-y-auto">
                {generateMinutes().map((minute) => (
                  <button
                    key={minute}
                    onClick={() => handleTimeSelect(minute)}
                    className="w-full px-3 py-2 text-sm rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {minute}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Seconds */}
            {showSeconds && (
              <div className="text-center">
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Seconds</div>
                <div className="space-y-1 max-h-32 overflow-y-auto">
                  {generateSeconds().map((second) => (
                    <button
                      key={second}
                      onClick={() => handleTimeSelect(second)}
                      className="w-full px-3 py-2 text-sm rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {second}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* AM/PM Toggle */}
          {format === '12h' && showAMPM && (
            <div className="flex justify-center space-x-2">
              <button
                onClick={() => setIsAM(true)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  isAM 
                    ? "bg-blue-500 text-white" 
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                )}
              >
                AM
              </button>
              <button
                onClick={() => setIsAM(false)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  !isAM 
                    ? "bg-blue-500 text-white" 
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                )}
              >
                PM
              </button>
            </div>
          )}
          
          {showFooter && (
            <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => {
                  const now = new Date()
                  const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`
                  setSelectedTime(time)
                  onChange?.(time)
                  setIsOpen(false)
                }}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
              >
                Set to Now
              </button>
            </div>
          )}
        </div>
      )
    }

    // Classic design (default)
    return (
      <div className="p-4 space-y-4">
        {showHeader && (
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Select Time
            </h3>
          </div>
        )}
        
        <div className="space-y-4">
          {/* Hours */}
          <div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Hours</div>
            <div className="grid grid-cols-4 gap-2">
              {generateHours().map((hour) => (
                <button
                  key={hour}
                  onClick={() => handleTimeSelect(hour)}
                  className="px-3 py-2 text-sm rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {hour}
                </button>
              ))}
            </div>
          </div>
          
          {/* Minutes */}
          <div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Minutes</div>
            <div className="grid grid-cols-6 gap-2">
              {generateMinutes().map((minute) => (
                <button
                  key={minute}
                  onClick={() => handleTimeSelect(minute)}
                  className="px-3 py-2 text-sm rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {minute}
              </button>
              ))}
            </div>
          </div>
          
          {/* Seconds */}
          {showSeconds && (
            <div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Seconds</div>
              <div className="grid grid-cols-6 gap-2">
                {generateSeconds().map((second) => (
                  <button
                    key={second}
                    onClick={() => handleTimeSelect(second)}
                    className="px-3 py-2 text-sm rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {second}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* AM/PM Toggle */}
        {format === '12h' && showAMPM && (
          <div className="flex justify-center space-x-2">
            <button
              onClick={() => setIsAM(true)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                isAM 
                  ? "bg-blue-500 text-white" 
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              )}
            >
              AM
            </button>
            <button
              onClick={() => setIsAM(false)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                !isAM 
                  ? "bg-blue-500 text-white" 
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              )}
            >
              PM
            </button>
          </div>
        )}
        
        {showFooter && (
          <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => {
                const now = new Date()
                const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`
                setSelectedTime(time)
                onChange?.(time)
                setIsOpen(false)
              }}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
            >
              Set to Now
            </button>
          </div>
        )}
      </div>
    )
  }

  return (
    <div 
      ref={timePickerRef}
      className={cn(
        "relative inline-block",
        fullWidth && "w-full",
        className
      )}
      style={{
        color: textColor || color,
        backgroundColor,
        borderColor,
        borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
        ...style
      }}
      {...props}
    >
      {/* Input Field */}
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={cn(
          "w-full flex items-center justify-between border rounded-lg transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          sizeClasses[size],
          variantClasses[variant],
          shadowClasses[shadow],
          "hover:border-blue-500 dark:hover:border-blue-400"
        )}
        style={{
          color: textColor || color,
          backgroundColor,
          borderColor,
          borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius
        }}
      >
        <span className={cn(
          "flex items-center space-x-2",
          !selectedTime && "text-gray-400 dark:text-gray-500"
        )}>
          {showIcon && <Clock className="w-4 h-4" />}
          <span>{selectedTime ? formatTime(selectedTime) : placeholder}</span>
        </span>
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className={cn(
          "absolute z-50 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700",
          animationClasses[animation],
          "animate-in fade-in-0 zoom-in-95"
        )}>
          {renderTimePicker()}
        </div>
      )}
    </div>
  )
})

TimePicker.displayName = "TimePicker"

export { TimePicker }
