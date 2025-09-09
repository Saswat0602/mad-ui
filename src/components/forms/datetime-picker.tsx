import * as React from "react"
import { createPortal } from "react-dom"
import { cn } from "../../lib/utils"
import { ChevronLeft, ChevronRight, Calendar, Clock, X } from "lucide-react"

export interface DateTimePickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: Date
  onChange?: (date: Date) => void
  placeholder?: string
  disabled?: boolean
  variant?: "default" | "filled" | "outlined" | "minimal"
  size?: "sm" | "md" | "lg"
  mode?: "date" | "time" | "datetime"
  showIcon?: boolean
  format?: string
  minDate?: Date
  maxDate?: Date
  showToday?: boolean
  firstDayOfWeek?: 0 | 1
  locale?: string
  design?: "classic" | "modern" | "minimal" | "card" | "grid"
  color?: string
  backgroundColor?: string
  borderColor?: string
  textColor?: string
  borderRadius?: string | number
  shadow?: "none" | "sm" | "md" | "lg" | "xl"
  fullWidth?: boolean
  closeOnSelect?: boolean
  showHeader?: boolean
  showFooter?: boolean
  showMonthNavigation?: boolean
  showYearNavigation?: boolean
  highlightWeekends?: boolean
  highlightHolidays?: boolean
  // Time picker specific
  timeFormat?: "12" | "24"
  showSeconds?: boolean
  step?: number
  // Portal rendering
  portal?: boolean
  portalTarget?: HTMLElement
}

const DateTimePicker = React.forwardRef<HTMLDivElement, DateTimePickerProps>(
  ({
    className,
    value,
    onChange,
    placeholder = "Select date and time",
    disabled = false,
    variant = "default",
    size = "md",
    mode = "datetime",
    showIcon = true,
    format,
    minDate,
    maxDate,
    showToday = true,
    firstDayOfWeek = 1,
    locale = "en-US",
    design = "modern",
    color,
    backgroundColor,
    borderColor,
    textColor,
    borderRadius,
    shadow = "md",
    fullWidth = false,
    closeOnSelect = true,
    showHeader = true,
    showFooter = true,
    showMonthNavigation = true,
    showYearNavigation = true,
    highlightWeekends = true,
    highlightHolidays = false,
    timeFormat = "12",
    showSeconds = false,
    step = 1,
    portal = true,
    portalTarget,
    style,
    ...props
  }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [currentDate, setCurrentDate] = React.useState(value || new Date())
    const [selectedDate, setSelectedDate] = React.useState(value || new Date())
    const [selectedTime, setSelectedTime] = React.useState(value || new Date())
    const [activeTab, setActiveTab] = React.useState<"date" | "time">("date")
    const inputRef = React.useRef<HTMLInputElement>(null)
    const pickerRef = React.useRef<HTMLDivElement>(null)

    // Size classes
    const sizeClasses = {
      sm: "text-sm px-3 py-2",
      md: "text-base px-4 py-3",
      lg: "text-lg px-5 py-4"
    }

    // Variant styles
    const getVariantStyles = () => {
      switch (variant) {
        case "filled":
          return {
            backgroundColor: backgroundColor || "var(--bg-input)",
            border: "none"
          }
        case "outlined":
          return {
            backgroundColor: "transparent",
            border: `2px solid ${borderColor || "var(--border-primary)"}`
          }
        case "minimal":
          return {
            backgroundColor: "transparent",
            border: "none",
            borderBottom: `1px solid ${borderColor || "var(--border-primary)"}`
          }
        default:
          return {
            backgroundColor: backgroundColor || "white",
            border: `1px solid ${borderColor || "var(--border-primary)"}`
          }
      }
    }

    // Shadow classes
    const shadowClasses = {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl"
    }

    // Custom styles
    const customStyles: React.CSSProperties = {
      color: textColor || "var(--text-primary)",
      borderRadius: borderRadius,
      ...getVariantStyles(),
      ...style
    }

    // Format date for display
    const formatDate = (date: Date) => {
      if (!date) return ""
      
      if (mode === "date") {
        return date.toLocaleDateString(locale)
      } else if (mode === "time") {
        return date.toLocaleTimeString(locale, {
          hour12: timeFormat === "12",
          hour: "2-digit",
          minute: "2-digit",
          second: showSeconds ? "2-digit" : undefined
        })
      } else {
        return date.toLocaleString(locale, {
          hour12: timeFormat === "12",
          hour: "2-digit",
          minute: "2-digit",
          second: showSeconds ? "2-digit" : undefined
        })
      }
    }

    // Handle date selection
    const handleDateSelect = (date: Date) => {
      const newDate = new Date(selectedDate)
      newDate.setFullYear(date.getFullYear(), date.getMonth(), date.getDate())
      setSelectedDate(newDate)
      
      if (mode === "date" || (mode === "datetime" && activeTab === "date")) {
        onChange?.(newDate)
        if (closeOnSelect) {
          setIsOpen(false)
        }
      }
    }

    // Handle time selection
    const handleTimeSelect = (time: Date) => {
      const newDate = new Date(selectedDate)
      newDate.setHours(time.getHours(), time.getMinutes(), time.getSeconds())
      setSelectedTime(newDate)
      
      if (mode === "time" || (mode === "datetime" && activeTab === "time")) {
        onChange?.(newDate)
        if (closeOnSelect) {
          setIsOpen(false)
        }
      }
    }

    // Handle datetime selection
    const handleDateTimeSelect = () => {
      const newDate = new Date(selectedDate)
      newDate.setHours(selectedTime.getHours(), selectedTime.getMinutes(), selectedTime.getSeconds())
      onChange?.(newDate)
      setIsOpen(false)
    }

    // Generate calendar days
    const generateCalendarDays = () => {
      const year = currentDate.getFullYear()
      const month = currentDate.getMonth()
      const firstDay = new Date(year, month, 1)
      const lastDay = new Date(year, month + 1, 0)
      const startDate = new Date(firstDay)
      startDate.setDate(startDate.getDate() - (firstDay.getDay() + (7 - firstDayOfWeek)) % 7)
      
      const days = []
      const current = new Date(startDate)
      
      for (let i = 0; i < 42; i++) {
        days.push(new Date(current))
        current.setDate(current.getDate() + 1)
      }
      
      return days
    }

    // Generate time options
    const generateTimeOptions = () => {
      const options = []
      const startHour = timeFormat === "12" ? 1 : 0
      const endHour = timeFormat === "12" ? 12 : 23
      
      for (let hour = startHour; hour <= endHour; hour++) {
        for (let minute = 0; minute < 60; minute += step) {
          const time = new Date()
          time.setHours(timeFormat === "12" ? hour : hour, minute, 0)
          options.push(time)
        }
      }
      
      return options
    }

    // Handle click outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (pickerRef.current && !pickerRef.current.contains(event.target as Node) &&
            inputRef.current && !inputRef.current.contains(event.target as Node)) {
          setIsOpen(false)
        }
      }

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside)
        document.body.style.overflow = "hidden"
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
        document.body.style.overflow = "unset"
      }
    }, [isOpen])

    // Handle escape key
    React.useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setIsOpen(false)
        }
      }

      if (isOpen) {
        document.addEventListener("keydown", handleEscape)
      }

      return () => {
        document.removeEventListener("keydown", handleEscape)
      }
    }, [isOpen])

    const calendarDays = generateCalendarDays()
    const timeOptions = generateTimeOptions()

    const PickerContent = () => (
      <div
        ref={pickerRef}
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
          "animate-in fade-in duration-200"
        )}
      >
        <div
          className={cn(
            "bg-white rounded-xl shadow-xl max-w-md w-full mx-4",
            "animate-in slide-in-from-bottom-4 duration-300"
          )}
        >
          {/* Header */}
          {showHeader && (
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">
                {mode === "date" ? "Select Date" : mode === "time" ? "Select Time" : "Select Date & Time"}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-md transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          )}

          {/* Tabs for datetime mode */}
          {mode === "datetime" && (
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab("date")}
                className={cn(
                  "flex-1 py-3 px-4 text-sm font-medium transition-colors",
                  activeTab === "date"
                    ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-gray-800"
                )}
              >
                Date
              </button>
              <button
                onClick={() => setActiveTab("time")}
                className={cn(
                  "flex-1 py-3 px-4 text-sm font-medium transition-colors",
                  activeTab === "time"
                    ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-gray-800"
                )}
              >
                Time
              </button>
            </div>
          )}

          {/* Content */}
          <div className="p-4">
            {/* Date Picker */}
            {(mode === "date" || (mode === "datetime" && activeTab === "date")) && (
              <div>
                {/* Month Navigation */}
                {showMonthNavigation && (
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}
                      className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <h4 className="text-lg font-semibold">
                      {currentDate.toLocaleDateString(locale, { month: "long", year: "numeric" })}
                    </h4>
                    <button
                      onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}
                      className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                )}

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                    <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day, index) => {
                    const isCurrentMonth = day.getMonth() === currentDate.getMonth()
                    const isToday = day.toDateString() === new Date().toDateString()
                    const isSelected = day.toDateString() === selectedDate.toDateString()
                    const isWeekend = day.getDay() === 0 || day.getDay() === 6
                    
                    return (
                      <button
                        key={index}
                        onClick={() => handleDateSelect(day)}
                        className={cn(
                          "p-2 text-sm rounded-md transition-colors",
                          !isCurrentMonth && "text-gray-300",
                          isCurrentMonth && "text-gray-900",
                          isToday && "bg-blue-100 text-blue-600 font-semibold",
                          isSelected && "bg-blue-600 text-white font-semibold",
                          !isSelected && !isToday && "hover:bg-gray-100",
                          highlightWeekends && isWeekend && isCurrentMonth && !isSelected && "text-red-600"
                        )}
                      >
                        {day.getDate()}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Time Picker */}
            {(mode === "time" || (mode === "datetime" && activeTab === "time")) && (
              <div>
                <div className="grid grid-cols-4 gap-2 max-h-64 overflow-y-auto">
                  {timeOptions.map((time, index) => {
                    const timeString = time.toLocaleTimeString(locale, {
                      hour12: timeFormat === "12",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: showSeconds ? "2-digit" : undefined
                    })
                    const isSelected = time.getHours() === selectedTime.getHours() && 
                                     time.getMinutes() === selectedTime.getMinutes()
                    
                    return (
                      <button
                        key={index}
                        onClick={() => handleTimeSelect(time)}
                        className={cn(
                          "p-2 text-sm rounded-md transition-colors",
                          isSelected
                            ? "bg-blue-600 text-white font-semibold"
                            : "hover:bg-gray-100 text-gray-900"
                        )}
                      >
                        {timeString}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          {showFooter && (
            <div className="flex items-center justify-between p-4 border-t bg-gray-50 rounded-b-xl">
              {showToday && (mode === "date" || (mode === "datetime" && activeTab === "date")) && (
                <button
                  onClick={() => handleDateSelect(new Date())}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  Today
                </button>
              )}
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Cancel
                </button>
                {mode === "datetime" && (
                  <button
                    onClick={handleDateTimeSelect}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                  >
                    Select
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    )

    return (
      <div ref={ref} className={cn("relative", fullWidth && "w-full", className)} {...props}>
        {/* Input */}
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={formatDate(selectedDate)}
            placeholder={placeholder}
            disabled={disabled}
            readOnly
            onClick={() => !disabled && setIsOpen(true)}
            className={cn(
              "w-full border rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              sizeClasses[size],
              disabled && "opacity-50 cursor-not-allowed",
              shadowClasses[shadow]
            )}
            style={customStyles}
          />
          {showIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {mode === "time" ? <Clock size={20} /> : <Calendar size={20} />}
            </div>
          )}
        </div>

        {/* Picker */}
        {isOpen && (
          portal ? createPortal(<PickerContent />, portalTarget || document.body) : <PickerContent />
        )}
      </div>
    )
  }
)

DateTimePicker.displayName = "DateTimePicker"

export { DateTimePicker }
