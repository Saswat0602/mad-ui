import * as React from "react"
import { cn } from "../../lib/utils"
import { componentColors } from "../../lib/colors"

export interface RatingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value: number
  max?: number
  onChange?: (value: number) => void
  readOnly?: boolean
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "default" | "filled" | "outlined"
  color?: string
  activeColor?: string
  inactiveColor?: string
  textColor?: string
  showValue?: boolean
  showLabel?: boolean
  label?: string
  fullWidth?: boolean
  spacing?: "tight" | "normal" | "loose"
  icon?: React.ReactNode
  emptyIcon?: React.ReactNode
  halfIcon?: React.ReactNode
}

const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  ({ 
    className, 
    value = 0,
    max = 5,
    onChange,
    readOnly = false,
    size = "md",
    variant = "default",
    color,
    activeColor,
    inactiveColor,
    textColor,
    showValue = false,
    showLabel = false,
    label,
    fullWidth = false,
    spacing = "normal",
    icon,
    emptyIcon,
    halfIcon,
    style,
    ...props 
  }, ref) => {
    
    // Size classes
    const sizeClasses = {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
      xl: "w-8 h-8"
    }
    
    const textSizeClasses = {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
      xl: "text-lg"
    }
    
    // Spacing classes
    const spacingClasses = {
      tight: "gap-1",
      normal: "gap-2",
      loose: "gap-3"
    }
    
    // Default colors with proper visibility
    const defaultActiveColor = activeColor || color || "rgb(234 179 8)" // yellow-500
    const defaultInactiveColor = inactiveColor || "rgb(203 213 225)" // slate-300
    
    // Custom styles with proper visibility
    const customStyles: React.CSSProperties = {
      color: textColor || "rgb(15 23 42)", // slate-900
      ...style
    }
    
    // Handle star click
    const handleStarClick = (starValue: number) => {
      if (!readOnly && onChange) {
        onChange(starValue)
      }
    }
    
    // Handle star hover
    const [hoverValue, setHoverValue] = React.useState(0)
    
    const handleStarHover = (starValue: number) => {
      if (!readOnly) {
        setHoverValue(starValue)
      }
    }
    
    const handleStarLeave = () => {
      if (!readOnly) {
        setHoverValue(0)
      }
    }
    
    // Render star icon
    const renderStar = (starValue: number) => {
      const isActive = hoverValue > 0 ? starValue <= hoverValue : starValue <= value
      const isHalf = !isActive && starValue - 0.5 <= value
      
      const starColor = isActive ? defaultActiveColor : defaultInactiveColor
      const starIcon = isHalf && halfIcon ? halfIcon : (isActive ? icon : emptyIcon)
      
      return (
        <button
          key={starValue}
          type="button"
          className={cn(
            "transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
            !readOnly && "cursor-pointer hover:scale-110",
            readOnly && "cursor-default"
          )}
          style={{ color: starColor }}
          onClick={() => handleStarClick(starValue)}
          onMouseEnter={() => handleStarHover(starValue)}
          onMouseLeave={handleStarLeave}
          disabled={readOnly}
        >
          {starIcon || (
            <span className={cn("block", sizeClasses[size])}>
              {isHalf ? "☆" : (isActive ? "★" : "☆")}
            </span>
          )}
        </button>
      )
    }
    
    return (
      <div className={cn("w-full", fullWidth && "w-full")}>
        {/* Label and Value */}
        {(showLabel || label || showValue) && (
          <div className="flex items-center justify-between mb-2">
            {(showLabel || label) && (
              <span 
                className={cn("font-medium", textSizeClasses[size])}
                style={customStyles}
              >
                {label || "Rating"}
              </span>
            )}
            {showValue && (
              <span 
                className={cn("text-slate-600 dark:text-slate-400", textSizeClasses[size])}
                style={{ color: textColor || "rgb(71 85 105)" }}
              >
                {value.toFixed(1)} / {max}
              </span>
            )}
          </div>
        )}
        
        {/* Rating Stars */}
        <div
          ref={ref}
          className={cn(
            "flex items-center",
            spacingClasses[spacing],
            className
          )}
          role="radiogroup"
          aria-label={label || "Rating"}
          {...props}
        >
          {Array.from({ length: max }, (_, index) => renderStar(index + 1))}
        </div>
      </div>
    )
  }
)

Rating.displayName = "Rating"

export { Rating }
