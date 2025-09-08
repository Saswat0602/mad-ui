import * as React from "react"
import { cn } from "../../lib/utils"
import { componentColors } from "../../lib/colors"

export interface CalendarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: Date
  onChange?: (date: Date) => void
  placeholder?: string
  disabled?: boolean
  variant?: "default" | "filled" | "outlined" | "minimal"
  size?: "sm" | "md" | "lg"
  showIcon?: boolean
  format?: string
  minDate?: Date
  maxDate?: Date
  showToday?: boolean
  showWeekNumbers?: boolean
  firstDayOfWeek?: 0 | 1 // 0 = Sunday, 1 = Monday
  locale?: string
  design?: "classic" | "modern" | "minimal" | "card" | "grid"
  animation?: "fade" | "slide" | "scale" | "bounce" | "none"
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
    custom?: (date: Date) => boolean | string
  }
  shortcuts?: Array<{
    label: string
    value: Date
    onClick: () => void
  }>
  customDays?: Array<{
    date: Date
    label?: string
    className?: string
    disabled?: boolean
    tooltip?: string
  }>
  onDateHover?: (date: Date) => void
  onDateFocus?: (date: Date) => void
  keyboardNavigation?: boolean
  autoFocus?: boolean
}

const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  ({ 
    className, 
    value,
    onChange,
    placeholder = "Select date",
    disabled = false,
    variant = "default",
    size = "md",
    showIcon = true,
    format = "MM/dd/yyyy",
    minDate,
    maxDate,
    showToday = true,
    showWeekNumbers = false,
    firstDayOfWeek = 0,
    locale = "en-US",
    design = "classic",
    animation = "fade",
    color,
    backgroundColor,
    borderColor,
    textColor,
    borderRadius,
    shadow = "lg",
    fullWidth = true,
    closeOnSelect = true,
    showHeader = true,
    showFooter = false,
    showMonthNavigation = true,
    showYearNavigation = false,
    highlightWeekends = false,
    highlightHolidays = false,
    style,
    ...props 
  }, ref) => {
    
    const [isOpen, setIsOpen] = React.useState(false)
    const [currentDate, setCurrentDate] = React.useState(value || new Date())
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(value || null)
    const containerRef = React.useRef<HTMLDivElement>(null)
    
    // Size classes
    const sizeClasses = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-3 py-2 text-sm",
      lg: "px-4 py-3 text-base"
    }
    
    // Shadow classes
    const shadowClasses = {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl"
    }
    
    // Animation classes
    const animationClasses = {
      fade: "transition-opacity duration-300",
      slide: "transition-all duration-300 transform",
      scale: "transition-all duration-300 transform",
      bounce: "transition-all duration-300 transform",
      none: ""
    }
    
    // Variant styles
    const getVariantStyles = () => {
      switch (variant) {
        case "filled":
          return {
            backgroundColor: backgroundColor || color || "var(--bg-tertiary)",
            border: `1px solid ${borderColor || "var(--border-primary)"}`,
            borderRadius: borderRadius || "8px"
          }
        case "outlined":
          return {
            backgroundColor: backgroundColor || color || "var(--bg-card)",
            border: `2px solid ${borderColor || "var(--border-primary)"}`,
            borderRadius: borderRadius || "8px"
          }
        default:
          return {
            backgroundColor: backgroundColor || color || "var(--bg-card)",
            border: `1px solid ${borderColor || "var(--border-primary)"}`,
            borderRadius: borderRadius || "8px"
          }
      }
    }
    
    // Custom styles
    const customStyles: React.CSSProperties = {
      color: textColor || "var(--text-primary)",
      ...getVariantStyles(),
      ...style
    }
    
    // Handle click outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false)
        }
      }

      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])
    
    // Update current date when value changes
    React.useEffect(() => {
      if (value) {
        setSelectedDate(value)
        setCurrentDate(value)
      }
    }, [value])
    
    // Format date
    const formatDate = (date: Date | null): string => {
      if (!date) return ""
      
      const month = String(date.getMonth() + 1).padStart(2, "0")
      const day = String(date.getDate()).padStart(2, "0")
      const year = date.getFullYear()
      
      return format
        .replace("MM", month)
        .replace("dd", day)
        .replace("yyyy", String(year))
    }
    
    // Calendar utility functions
    const getDaysInMonth = (date: Date): number => {
      return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    }
    
    const getFirstDayOfMonth = (date: Date): number => {
      let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
      if (firstDayOfWeek === 1) {
        firstDay = firstDay === 0 ? 6 : firstDay - 1
      }
      return firstDay
    }
    
    const navigateMonth = (direction: "prev" | "next") => {
      setCurrentDate(prev => {
        const newDate = new Date(prev)
        if (direction === "prev") {
          newDate.setMonth(newDate.getMonth() - 1)
        } else {
          newDate.setMonth(newDate.getMonth() + 1)
        }
        return newDate
      })
    }
    
    const handleDateSelect = (day: number) => {
      const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
      
      // Check min/max date constraints
      if (minDate && newDate < minDate) return
      if (maxDate && newDate > maxDate) return
      
      setSelectedDate(newDate)
      if (closeOnSelect) {
        setIsOpen(false)
      }
      if (onChange) {
        onChange(newDate)
      }
    }
    
    const isToday = (day: number): boolean => {
      const today = new Date()
      return (
        day === today.getDate() &&
        currentDate.getMonth() === today.getMonth() &&
        currentDate.getFullYear() === today.getFullYear()
      )
    }
    
    const isSelected = (day: number): boolean => {
      if (!selectedDate) return false
      return (
        day === selectedDate.getDate() &&
        currentDate.getMonth() === selectedDate.getMonth() &&
        currentDate.getFullYear() === selectedDate.getFullYear()
      )
    }
    
    const isCurrentMonth = (day: number): boolean => {
      return day > 0 && day <= getDaysInMonth(currentDate)
    }
    
    const isDisabled = (day: number): boolean => {
      if (!isCurrentMonth(day)) return true
      
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
      if (minDate && date < minDate) return true
      if (maxDate && date > maxDate) return true
      
      return false
    }
    
    const isWeekend = (day: number): boolean => {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
      const dayOfWeek = date.getDay()
      return dayOfWeek === 0 || dayOfWeek === 6
    }
    
    // Render calendar days based on design
    const renderCalendarDays = () => {
      const daysInMonth = getDaysInMonth(currentDate)
      const firstDay = getFirstDayOfMonth(currentDate)
      const days = []
      
      // Add empty cells for days before the first day of the month
      for (let i = 0; i < firstDay; i++) {
        days.push(<div key={`empty-${i}`} className="h-8" />)
      }
      
      // Add days of the month
      for (let day = 1; day <= daysInMonth; day++) {
        const disabled = isDisabled(day)
        const weekend = highlightWeekends && isWeekend(day)
        
        let dayClasses = "h-8 w-8 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
        
        // Design-specific styling
        switch (design) {
          case "modern":
            dayClasses += " rounded-lg hover:scale-105"
            break
          case "minimal":
            dayClasses += " rounded-none border-b border-gray-100 dark:border-gray-800"
            break
          case "card":
            dayClasses += " rounded-md shadow-sm hover:shadow-md"
            break
          case "grid":
            dayClasses += " rounded-none border border-gray-100 dark:border-gray-800"
            break
          default:
            dayClasses += " rounded-full"
        }
        
        // State-based styling
        if (isSelected(day)) {
          dayClasses += " bg-blue-600 text-white focus:ring-blue-500 shadow-lg"
        } else if (isToday(day)) {
          dayClasses += " bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 font-bold"
        } else if (weekend) {
          dayClasses += " text-red-600 dark:text-red-400 font-medium"
        } else if (!disabled) {
          dayClasses += " hover:bg-gray-100 dark:hover:bg-gray-700"
        }
        
        if (disabled) {
          dayClasses += " text-gray-400 cursor-not-allowed opacity-50"
        } else {
          dayClasses += " cursor-pointer"
        }
        
        days.push(
          <button
            key={day}
            onClick={() => !disabled && handleDateSelect(day)}
            disabled={disabled}
            className={dayClasses}
          >
            {day}
          </button>
        )
      }
      
      return days
    }
    
    // Month and day names
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ]
    
    const dayNames = firstDayOfWeek === 1 
      ? ["M", "T", "W", "T", "F", "S", "S"]
      : ["S", "M", "T", "W", "T", "F", "S"]
    
    return (
      <div ref={containerRef} className={cn("relative", fullWidth && "w-full", className)}>
        <div className="relative">
          <input
            type="text"
            value={formatDate(selectedDate)}
            placeholder={placeholder}
            readOnly
            disabled={disabled}
            onClick={() => !disabled && setIsOpen(!isOpen)}
            className={cn(
              "w-full border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0",
              sizeClasses[size],
              disabled && "opacity-50 cursor-not-allowed",
              !disabled && "cursor-pointer"
            )}
            style={{
              backgroundColor: backgroundColor || color || "var(--bg-card)",
              borderColor: borderColor || "var(--border-primary)",
              color: textColor || "var(--text-primary)"
            }}
          />
          {showIcon && (
            <span 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              style={{ fontSize: "16px" }}
            >
              📅
            </span>
          )}
        </div>

        {isOpen && (
          <div 
            className={cn(
              "absolute z-50 mt-1 rounded-lg shadow-lg border transition-all duration-200",
              shadowClasses[shadow],
              animationClasses[animation],
              design === "minimal" ? "p-2" : "p-4",
              design === "card" ? "p-6" : "",
              design === "grid" ? "p-3" : ""
            )}
            style={{
              backgroundColor: backgroundColor || color || "var(--bg-card)",
              borderColor: borderColor || "var(--border-primary)",
              color: textColor || "var(--text-primary)"
            }}
          >
            {/* Calendar Header */}
            {showHeader && (
              <div className={cn(
                "flex items-center justify-between mb-4",
                design === "minimal" ? "mb-2" : "",
                design === "card" ? "mb-6" : ""
              )}>
                {showMonthNavigation && (
                  <button
                    onClick={() => navigateMonth("prev")}
                    className={cn(
                      "p-1 rounded transition-all duration-200",
                      design === "modern" ? "hover:bg-blue-100 hover:text-blue-600" : "hover:bg-gray-100 dark:hover:bg-gray-700",
                      design === "minimal" ? "text-gray-500" : "text-gray-600 dark:text-gray-300"
                    )}
                  >
                    ←
                  </button>
                )}
                
                <div className="text-center">
                  <h3 className={cn(
                    "font-semibold text-gray-900 dark:text-white",
                    design === "modern" ? "text-lg" : "text-sm",
                    design === "card" ? "text-xl" : ""
                  )}>
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h3>
                  
                  {showYearNavigation && (
                    <div className="flex items-center justify-center mt-1 space-x-2">
                      <button
                        onClick={() => {
                          const newDate = new Date(currentDate)
                          newDate.setFullYear(newDate.getFullYear() - 1)
                          setCurrentDate(newDate)
                        }}
                        className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        ←
                      </button>
                      <span className="text-xs text-gray-500">
                        {currentDate.getFullYear()}
                      </span>
                      <button
                        onClick={() => {
                          const newDate = new Date(currentDate)
                          newDate.setFullYear(newDate.getFullYear() + 1)
                          setCurrentDate(newDate)
                        }}
                        className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-700"
                      >
                        →
                      </button>
                    </div>
                  )}
                </div>
                
                {showMonthNavigation && (
                  <button
                    onClick={() => navigateMonth("next")}
                    className={cn(
                      "p-1 rounded transition-all duration-200",
                      design === "modern" ? "hover:bg-blue-100 hover:text-blue-600" : "hover:bg-gray-100 dark:hover:bg-gray-700",
                      design === "minimal" ? "text-gray-500" : "text-gray-600 dark:text-gray-300"
                    )}
                  >
                    →
                  </button>
                )}
              </div>
            )}

            {/* Day Names */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayNames.map((day) => (
                <div
                  key={day}
                  className="h-8 flex items-center justify-center text-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {renderCalendarDays()}
            </div>
            
            {/* Footer */}
            {showFooter && (
              <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">
                    {selectedDate ? formatDate(selectedDate) : "No date selected"}
                  </span>
                  {showToday && (
                    <button
                      onClick={() => {
                        const today = new Date()
                        setSelectedDate(today)
                        setCurrentDate(today)
                        if (onChange) onChange(today)
                      }}
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Today
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
)

Calendar.displayName = "Calendar"

export { Calendar }
