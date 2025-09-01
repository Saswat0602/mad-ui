import * as React from "react"
import { cn } from "../lib/utils"
import { componentColors } from "../lib/colors"

export interface TimePickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: Date
  onChange?: (time: Date) => void
  placeholder?: string
  disabled?: boolean
  variant?: "default" | "filled" | "outlined" | "minimal"
  size?: "sm" | "md" | "lg"
  showIcon?: boolean
  format?: "12h" | "24h"
  showSeconds?: boolean
  showAMPM?: boolean
  step?: number // minutes step
  minTime?: string // "HH:MM" format
  maxTime?: string // "HH:MM" format
  design?: "classic" | "modern" | "minimal" | "analog"
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
  hourFormat?: "numeric" | "dots" | "bars"
  minuteFormat?: "numeric" | "dots" | "bars"
}

const TimePicker = React.forwardRef<HTMLDivElement, TimePickerProps>(
  ({ 
    className, 
    value,
    onChange,
    placeholder = "Select time",
    disabled = false,
    variant = "default",
    size = "md",
    showIcon = true,
    format = "12h",
    showSeconds = false,
    showAMPM = true,
    step = 1,
    minTime,
    maxTime,
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
    hourFormat = "numeric",
    minuteFormat = "numeric",
    style,
    ...props 
  }, ref) => {
    
    const [isOpen, setIsOpen] = React.useState(false)
    const [selectedTime, setSelectedTime] = React.useState<Date>(value || new Date())
    const [currentView, setCurrentView] = React.useState<"hours" | "minutes" | "seconds">("hours")
    const [isAM, setIsAM] = React.useState<boolean>(value ? value.getHours() < 12 : new Date().getHours() < 12)
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
        case "minimal":
          return {
            backgroundColor: "transparent",
            border: "none",
            borderRadius: borderRadius || "0"
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
    
    // Update selected time when value changes
    React.useEffect(() => {
      if (value) {
        setSelectedTime(value)
        setIsAM(value.getHours() < 12)
      }
    }, [value])
    
    // Format time for display
    const formatTime = (date: Date | null): string => {
      if (!date) return ""
      
      let hours = date.getHours()
      const minutes = String(date.getMinutes()).padStart(2, "0")
      const seconds = showSeconds ? `:${String(date.getSeconds()).padStart(2, "0")}` : ""
      
      if (format === "12h") {
        hours = hours % 12
        hours = hours === 0 ? 12 : hours
        const ampm = date.getHours() >= 12 ? "PM" : "AM"
        return `${hours}:${minutes}${seconds} ${ampm}`
      }
      
      return `${String(hours).padStart(2, "0")}:${minutes}${seconds}`
    }
    
    // Generate time options
    const generateHours = () => {
      const maxHour = format === "12h" ? 12 : 24
      const hours = []
      
      for (let i = 0; i < maxHour; i++) {
        let displayHour = i
        if (format === "12h" && i === 0) displayHour = 12
        
        hours.push({
          value: i,
          display: displayHour.toString(),
          disabled: false
        })
      }
      
      return hours
    }
    
    const generateMinutes = () => {
      const minutes = []
      
      for (let i = 0; i < 60; i += step) {
        minutes.push({
          value: i,
          display: String(i).padStart(2, "0"),
          disabled: false
        })
      }
      
      return minutes
    }
    
    const generateSeconds = () => {
      const seconds = []
      
      for (let i = 0; i < 60; i++) {
        seconds.push({
          value: i,
          display: String(i).padStart(2, "0"),
          disabled: false
        })
      }
      
      return seconds
    }
    
    // Handle time selection
    const handleTimeSelect = (type: "hour" | "minute" | "second", value: number) => {
      const newTime = new Date(selectedTime)
      
      if (type === "hour") {
        let hour = value
        if (format === "12h") {
          if (value === 12) hour = isAM ? 0 : 12
          else hour = isAM ? value : value + 12
        }
        newTime.setHours(hour)
      } else if (type === "minute") {
        newTime.setMinutes(value)
      } else if (type === "second") {
        newTime.setSeconds(value)
      }
      
      setSelectedTime(newTime)
      
      if (closeOnSelect && type === "minute") {
        setIsOpen(false)
      }
      
      if (onChange) {
        onChange(newTime)
      }
    }
    
    // Handle AM/PM toggle
    const handleAMPMToggle = (am: boolean) => {
      setIsAM(am)
      const newTime = new Date(selectedTime)
      let hours = newTime.getHours()
      
      if (am && hours >= 12) {
        hours = hours === 12 ? 0 : hours - 12
      } else if (!am && hours < 12) {
        hours = hours === 0 ? 12 : hours + 12
      }
      
      newTime.setHours(hours)
      setSelectedTime(newTime)
      
      if (onChange) {
        onChange(newTime)
      }
    }
    
    // Render time picker based on design
    const renderTimePicker = () => {
      switch (design) {
        case "modern":
          return renderModernDesign()
        case "minimal":
          return renderMinimalDesign()
        case "analog":
          return renderAnalogDesign()
        default:
          return renderClassicDesign()
      }
    }
    
    // Classic design
    const renderClassicDesign = () => (
      <div className="p-4">
        {showHeader && (
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Select Time
            </h3>
          </div>
        )}
        
        <div className="grid grid-cols-3 gap-4">
          {/* Hours */}
          <div className="text-center">
            <button
              onClick={() => setCurrentView("hours")}
              className={cn(
                "w-full py-2 px-3 rounded-lg font-medium transition-colors",
                currentView === "hours" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              )}
            >
              {format === "12h" 
                ? (selectedTime.getHours() % 12 || 12)
                : String(selectedTime.getHours()).padStart(2, "0")
              }
            </button>
            <p className="text-xs text-gray-500 mt-1">Hours</p>
          </div>
          
          {/* Minutes */}
          <div className="text-center">
            <button
              onClick={() => setCurrentView("minutes")}
              className={cn(
                "w-full py-2 px-3 rounded-lg font-medium transition-colors",
                currentView === "minutes" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              )}
            >
              {String(selectedTime.getMinutes()).padStart(2, "0")}
            </button>
            <p className="text-xs text-gray-500 mt-1">Minutes</p>
          </div>
          
          {/* Seconds */}
          {showSeconds && (
            <div className="text-center">
              <button
                onClick={() => setCurrentView("seconds")}
                className={cn(
                  "w-full py-2 px-3 rounded-lg font-medium transition-colors",
                  currentView === "seconds" 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                )}
              >
                {String(selectedTime.getSeconds()).padStart(2, "0")}
              </button>
              <p className="text-xs text-gray-500 mt-1">Seconds</p>
            </div>
          )}
        </div>
        
        {/* Time Grid */}
        <div className="mt-4 max-h-48 overflow-y-auto">
          {currentView === "hours" && (
            <div className="grid grid-cols-4 gap-2">
              {generateHours().map((hour) => (
                <button
                  key={hour.value}
                  onClick={() => handleTimeSelect("hour", hour.value)}
                  className={cn(
                    "py-2 px-3 rounded-lg text-sm font-medium transition-colors",
                    selectedTime.getHours() === hour.value
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                  )}
                >
                  {hour.display}
                </button>
              ))}
            </div>
          )}
          
          {currentView === "minutes" && (
            <div className="grid grid-cols-6 gap-2">
              {generateMinutes().map((minute) => (
                <button
                  key={minute.value}
                  onClick={() => handleTimeSelect("minute", minute.value)}
                  className={cn(
                    "py-2 px-3 rounded-lg text-sm font-medium transition-colors",
                    selectedTime.getMinutes() === minute.value
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                  )}
                >
                  {minute.display}
                </button>
              ))}
            </div>
          )}
          
          {currentView === "seconds" && (
            <div className="grid grid-cols-6 gap-2">
              {generateSeconds().map((second) => (
                <button
                  key={second.value}
                  onClick={() => handleTimeSelect("second", second.value)}
                  className={cn(
                    "py-2 px-3 rounded-lg text-sm font-medium transition-colors",
                    selectedTime.getSeconds() === second.value
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                  )}
                >
                  {second.display}
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* AM/PM Toggle */}
        {format === "12h" && showAMPM && (
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => handleAMPMToggle(true)}
              className={cn(
                "flex-1 py-2 px-3 rounded-lg font-medium transition-colors",
                isAM
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              )}
            >
              AM
            </button>
            <button
              onClick={() => handleAMPMToggle(false)}
              className={cn(
                "flex-1 py-2 px-3 rounded-lg font-medium transition-colors",
                !isAM
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              )}
            >
              PM
            </button>
          </div>
        )}
        
        {/* Footer */}
        {showFooter && (
          <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">
                {formatTime(selectedTime)}
              </span>
              <button
                onClick={() => {
                  const now = new Date()
                  setSelectedTime(now)
                  setIsAM(now.getHours() < 12)
                  if (onChange) onChange(now)
                }}
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Now
              </button>
            </div>
          </div>
        )}
      </div>
    )
    
    // Modern design
    const renderModernDesign = () => (
      <div className="p-6">
        {showHeader && (
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {formatTime(selectedTime)}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Select your preferred time</p>
          </div>
        )}
        
        <div className="space-y-6">
          {/* Time Display */}
          <div className="flex items-center justify-center space-x-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {format === "12h" 
                  ? (selectedTime.getHours() % 12 || 12)
                  : String(selectedTime.getHours()).padStart(2, "0")
                }
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Hours</p>
            </div>
            
            <div className="text-2xl text-gray-400">:</div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {String(selectedTime.getMinutes()).padStart(2, "0")}
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Minutes</p>
            </div>
            
            {showSeconds && (
              <>
                <div className="text-2xl text-gray-400">:</div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {String(selectedTime.getSeconds()).padStart(2, "0")}
                  </div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Seconds</p>
                </div>
              </>
            )}
          </div>
          
          {/* Time Selection */}
          <div className="space-y-4">
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrentView("hours")}
                className={cn(
                  "flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200",
                  currentView === "hours"
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                )}
              >
                Hours
              </button>
              <button
                onClick={() => setCurrentView("minutes")}
                className={cn(
                  "flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200",
                  currentView === "minutes"
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                )}
              >
                Minutes
              </button>
              {showSeconds && (
                <button
                  onClick={() => setCurrentView("seconds")}
                  className={cn(
                    "flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200",
                    currentView === "seconds"
                      ? "bg-blue-600 text-white shadow-lg transform scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                  )}
                >
                  Seconds
                </button>
              )}
            </div>
            
            {/* Time Grid */}
            <div className="max-h-48 overflow-y-auto">
              {currentView === "hours" && (
                <div className="grid grid-cols-4 gap-3">
                  {generateHours().map((hour) => (
                    <button
                      key={hour.value}
                      onClick={() => handleTimeSelect("hour", hour.value)}
                      className={cn(
                        "py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200",
                        selectedTime.getHours() === hour.value
                          ? "bg-blue-600 text-white shadow-lg transform scale-105"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                      )}
                    >
                      {hour.display}
                    </button>
                  ))}
                </div>
              )}
              
              {currentView === "minutes" && (
                <div className="grid grid-cols-6 gap-3">
                  {generateMinutes().map((minute) => (
                    <button
                      key={minute.value}
                      onClick={() => handleTimeSelect("minute", minute.value)}
                      className={cn(
                        "py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200",
                        selectedTime.getMinutes() === minute.value
                          ? "bg-blue-600 text-white shadow-lg transform scale-105"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                      )}
                    >
                      {minute.display}
                    </button>
                  ))}
                </div>
              )}
              
              {currentView === "seconds" && (
                <div className="grid grid-cols-6 gap-3">
                  {generateSeconds().map((second) => (
                    <button
                      key={second.value}
                      onClick={() => handleTimeSelect("second", second.value)}
                      className={cn(
                        "py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200",
                        selectedTime.getSeconds() === second.value
                          ? "bg-blue-600 text-white shadow-lg transform scale-105"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                      )}
                    >
                      {second.display}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* AM/PM Toggle */}
          {format === "12h" && showAMPM && (
            <div className="flex gap-3">
              <button
                onClick={() => handleAMPMToggle(true)}
                className={cn(
                  "flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200",
                  isAM
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                )}
              >
                AM
              </button>
              <button
                onClick={() => handleAMPMToggle(false)}
                className={cn(
                  "flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200",
                  !isAM
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                )}
              >
                PM
              </button>
            </div>
          )}
        </div>
        
        {/* Footer */}
        {showFooter && (
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Current: {formatTime(selectedTime)}
              </span>
              <button
                onClick={() => {
                  const now = new Date()
                  setSelectedTime(now)
                  setIsAM(now.getHours() < 12)
                  if (onChange) onChange(now)
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Set to Now
              </button>
            </div>
          </div>
        )}
      </div>
    )
    
    // Minimal design
    const renderMinimalDesign = () => (
      <div className="p-4">
        <div className="space-y-4">
          {/* Time Display */}
          <div className="text-center">
            <div className="text-2xl font-light text-gray-900 dark:text-white">
              {formatTime(selectedTime)}
            </div>
          </div>
          
          {/* Time Selection */}
          <div className="space-y-3">
            <div className="flex space-x-1">
              <button
                onClick={() => setCurrentView("hours")}
                className={cn(
                  "flex-1 py-2 text-sm font-medium transition-colors border-b-2",
                  currentView === "hours"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                )}
              >
                H
              </button>
              <button
                onClick={() => setCurrentView("minutes")}
                className={cn(
                  "flex-1 py-2 text-sm font-medium transition-colors border-b-2",
                  currentView === "minutes"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                )}
              >
                M
              </button>
              {showSeconds && (
                <button
                  onClick={() => setCurrentView("seconds")}
                  className={cn(
                    "flex-1 py-2 text-sm font-medium transition-colors border-b-2",
                    currentView === "seconds"
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  )}
                >
                  S
                </button>
              )}
            </div>
            
            {/* Time Grid */}
            <div className="max-h-32 overflow-y-auto">
              {currentView === "hours" && (
                <div className="grid grid-cols-6 gap-1">
                  {generateHours().map((hour) => (
                    <button
                      key={hour.value}
                      onClick={() => handleTimeSelect("hour", hour.value)}
                      className={cn(
                        "py-2 text-sm transition-colors",
                        selectedTime.getHours() === hour.value
                          ? "text-blue-600 font-medium"
                          : "text-gray-600 hover:text-gray-900"
                      )}
                    >
                      {hour.display}
                    </button>
                  ))}
                </div>
              )}
              
              {currentView === "minutes" && (
                <div className="grid grid-cols-6 gap-1">
                  {generateMinutes().map((minute) => (
                    <button
                      key={minute.value}
                      onClick={() => handleTimeSelect("minute", minute.value)}
                      className={cn(
                        "py-2 text-sm transition-colors",
                        selectedTime.getMinutes() === minute.value
                          ? "text-blue-600 font-medium"
                          : "text-gray-600 hover:text-gray-900"
                      )}
                    >
                      {minute.display}
                    </button>
                  ))}
                </div>
              )}
              
              {currentView === "seconds" && (
                <div className="grid grid-cols-6 gap-1">
                  {generateSeconds().map((second) => (
                    <button
                      key={second.value}
                      onClick={() => handleTimeSelect("second", second.value)}
                      className={cn(
                        "py-2 text-sm transition-colors",
                        selectedTime.getSeconds() === second.value
                          ? "text-blue-600 font-medium"
                          : "text-gray-600 hover:text-gray-900"
                      )}
                    >
                      {second.display}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* AM/PM Toggle */}
          {format === "12h" && showAMPM && (
            <div className="flex border rounded-lg overflow-hidden">
              <button
                onClick={() => handleAMPMToggle(true)}
                className={cn(
                  "flex-1 py-2 text-sm font-medium transition-colors",
                  isAM
                    ? "bg-blue-600 text-white"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                )}
              >
                AM
              </button>
              <button
                onClick={() => handleAMPMToggle(false)}
                className={cn(
                  "flex-1 py-2 text-sm font-medium transition-colors",
                  !isAM
                    ? "bg-blue-600 text-white"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                )}
              >
                PM
              </button>
            </div>
          )}
        </div>
      </div>
    )
    
    // Analog design (simplified)
    const renderAnalogDesign = () => (
      <div className="p-6">
        <div className="text-center mb-6">
          <div className="relative w-32 h-32 mx-auto mb-4">
            {/* Clock face */}
            <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>
            
            {/* Hour hand */}
            <div 
              className="absolute top-1/2 left-1/2 w-1 h-12 bg-gray-800 dark:bg-gray-200 origin-bottom transform -translate-x-1/2 -translate-y-full"
              style={{
                transform: `translate(-50%, -100%) rotate(${(selectedTime.getHours() % 12) * 30 + selectedTime.getMinutes() * 0.5}deg)`
              }}
            ></div>
            
            {/* Minute hand */}
            <div 
              className="absolute top-1/2 left-1/2 w-1 h-16 bg-blue-600 origin-bottom transform -translate-x-1/2 -translate-y-full"
              style={{
                transform: `translate(-50%, -100%) rotate(${selectedTime.getMinutes() * 6}deg)`
              }}
            ></div>
            
            {/* Center dot */}
            <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          
          <div className="text-lg font-medium text-gray-900 dark:text-white">
            {formatTime(selectedTime)}
          </div>
        </div>
        
        {/* Digital controls */}
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setCurrentView("hours")}
              className="py-2 px-3 text-sm font-medium bg-gray-100 text-gray-700 rounded hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              Hours
            </button>
            <button
              onClick={() => setCurrentView("minutes")}
              className="py-2 px-3 text-sm font-medium bg-gray-100 text-gray-700 rounded hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              Minutes
            </button>
            {showSeconds && (
              <button
                onClick={() => setCurrentView("seconds")}
                className="py-2 px-3 text-sm font-medium bg-gray-100 text-gray-700 rounded hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              >
                Seconds
              </button>
            )}
          </div>
          
          {/* Time Grid */}
          <div className="max-h-32 overflow-y-auto">
            {currentView === "hours" && (
              <div className="grid grid-cols-4 gap-2">
                {generateHours().map((hour) => (
                  <button
                    key={hour.value}
                    onClick={() => handleTimeSelect("hour", hour.value)}
                    className={cn(
                      "py-2 px-3 text-sm font-medium rounded transition-colors",
                      selectedTime.getHours() === hour.value
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                    )}
                  >
                    {hour.display}
                  </button>
                ))}
              </div>
            )}
            
            {currentView === "minutes" && (
              <div className="grid grid-cols-6 gap-2">
                {generateMinutes().map((minute) => (
                  <button
                    key={minute.value}
                    onClick={() => handleTimeSelect("minute", minute.value)}
                    className={cn(
                      "py-2 px-3 text-sm font-medium rounded transition-colors",
                      selectedTime.getMinutes() === minute.value
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                    )}
                  >
                    {minute.display}
                  </button>
                ))}
              </div>
            )}
            
            {currentView === "seconds" && (
              <div className="grid grid-cols-6 gap-2">
                {generateSeconds().map((second) => (
                  <button
                    key={second.value}
                    onClick={() => handleTimeSelect("second", second.value)}
                    className={cn(
                      "py-2 px-3 text-sm font-medium rounded transition-colors",
                      selectedTime.getSeconds() === second.value
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                    )}
                  >
                    {second.display}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* AM/PM Toggle */}
          {format === "12h" && showAMPM && (
            <div className="flex gap-2">
              <button
                onClick={() => handleAMPMToggle(true)}
                className={cn(
                  "flex-1 py-2 px-3 text-sm font-medium rounded transition-colors",
                  isAM
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                )}
              >
                AM
              </button>
              <button
                onClick={() => handleAMPMToggle(false)}
                className={cn(
                  "flex-1 py-2 px-3 text-sm font-medium rounded transition-colors",
                  !isAM
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                )}
              >
                PM
              </button>
            </div>
          )}
        </div>
      </div>
    )
    
    return (
      <div ref={containerRef} className={cn("relative", fullWidth && "w-full", className)}>
        <div className="relative">
          <input
            type="text"
            value={formatTime(selectedTime)}
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
              🕐
            </span>
          )}
        </div>

        {isOpen && (
          <div 
            className={cn(
              "absolute z-50 mt-1 rounded-lg shadow-lg border transition-all duration-200",
              shadowClasses[shadow],
              animationClasses[animation],
              className
            )}
            style={{
              backgroundColor: backgroundColor || color || "var(--bg-card)",
              borderColor: borderColor || "var(--border-primary)",
              color: textColor || "var(--text-primary)",
              minWidth: "320px"
            }}
            {...props}
          >
            {renderTimePicker()}
          </div>
        )}
      </div>
    )
  }
)

TimePicker.displayName = "TimePicker"

export { TimePicker }
