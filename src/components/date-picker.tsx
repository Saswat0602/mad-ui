import React, { useState, useRef, useEffect } from 'react'
import { cn } from '../lib/utils'

export interface DatePickerProps {
  value?: Date
  onChange?: (date: Date | null) => void
  placeholder?: string
  className?: string
  disabled?: boolean
  format?: string
}

export interface DatePickerContentProps {
  children: React.ReactNode
  className?: string
  isOpen: boolean
  onClose: () => void
}

export interface DatePickerTriggerProps {
  children: React.ReactNode
  className?: string
  onClick: () => void
}

export interface DatePickerCalendarProps {
  value?: Date
  onChange?: (date: Date) => void
  className?: string
}

export interface DatePickerInputProps {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  className?: string
  disabled?: boolean
}

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  placeholder = 'Pick a date',
  className,
  disabled = false,
  format = 'MM/dd/yyyy'
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [selectedDate, setSelectedDate] = useState<Date | null>(value || null)

  useEffect(() => {
    if (value) {
      setSelectedDate(value)
      setInputValue(formatDate(value, format))
    }
  }, [value, format])

  const formatDate = (date: Date, formatStr: string): string => {
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    
    return formatStr
      .replace('MM', month)
      .replace('dd', day)
      .replace('yyyy', year.toString())
  }

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    setInputValue(formatDate(date, format))
    setIsOpen(false)
    onChange?.(date)
  }

  const handleInputChange = (value: string) => {
    setInputValue(value)
    // You can add date parsing logic here
  }

  const handleInputFocus = () => {
    if (!disabled) {
      setIsOpen(true)
    }
  }

  return (
    <div className={cn('relative', className)}>
      <DatePickerInput
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={handleInputFocus}
      />
      {isOpen && (
        <DatePickerContent isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <DatePickerCalendar
            value={selectedDate || undefined}
            onChange={handleDateSelect}
          />
        </DatePickerContent>
      )}
    </div>
  )
}

export const DatePickerInput: React.FC<DatePickerInputProps & {
  onFocus?: () => void
}> = ({
  value,
  onChange,
  placeholder,
  className,
  disabled = false,
  onFocus
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      onFocus={onFocus}
      className={cn(
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
    />
  )
}

export const DatePickerContent: React.FC<DatePickerContentProps> = ({
  children,
  className,
  isOpen,
  onClose
}) => {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      ref={contentRef}
      className={cn(
        'absolute top-full z-50 mt-1 w-auto rounded-md border bg-popover p-3 text-popover-foreground shadow-md',
        className
      )}
    >
      {children}
    </div>
  )
}

export const DatePickerCalendar: React.FC<DatePickerCalendarProps> = ({
  value,
  onChange,
  className
}) => {
  const [currentMonth, setCurrentMonth] = useState(value || new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(value || null)

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }
    return days
  }

  const handleDateClick = (date: Date) => {
    setSelectedDate(date)
    onChange?.(date)
  }

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const days = getDaysInMonth(currentMonth)
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  return (
    <div className={cn('w-64', className)}>
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={goToPreviousMonth}
          className="p-1 hover:bg-accent hover:text-accent-foreground rounded"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="text-sm font-medium">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </div>
        <button
          onClick={goToNextMonth}
          className="p-1 hover:bg-accent hover:text-accent-foreground rounded"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="p-1 font-medium text-muted-foreground">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <div key={index} className="p-1">
            {day ? (
              <button
                onClick={() => handleDateClick(day)}
                className={cn(
                  'w-8 h-8 rounded-full text-sm hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                  selectedDate && day.toDateString() === selectedDate.toDateString()
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground'
                )}
              >
                {day.getDate()}
              </button>
            ) : (
              <div className="w-8 h-8" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
