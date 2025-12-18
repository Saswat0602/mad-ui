"use client"

import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "../../lib/utils"

export interface RatingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value: number
  max?: number
  onChange?: (value: number) => void
  readOnly?: boolean
  size?: "sm" | "md" | "lg"
  showValue?: boolean
  label?: string
  precision?: number
}

const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  ({
    className,
    value = 0,
    max = 5,
    onChange,
    readOnly = false,
    size = "md",
    showValue = false,
    label,
    precision = 1,
    ...props
  }, ref) => {
    const [hoverValue, setHoverValue] = React.useState(0)

    const sizeClasses = {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6"
    }

    const handleStarClick = (starValue: number) => {
      if (!readOnly && onChange) {
        onChange(starValue)
      }
    }

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

    const renderStar = (starValue: number) => {
      const displayValue = hoverValue > 0 ? hoverValue : value
      const isFilled = starValue <= displayValue
      const isHalf = !isFilled && starValue - 0.5 <= displayValue && precision === 0.5

      return (
        <button
          key={starValue}
          type="button"
          className={cn(
            "transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            !readOnly && "cursor-pointer hover:scale-110 active:scale-95",
            readOnly && "cursor-default"
          )}
          onClick={() => handleStarClick(starValue)}
          onMouseEnter={() => handleStarHover(starValue)}
          onMouseLeave={handleStarLeave}
          disabled={readOnly}
          aria-label={`Rate ${starValue} out of ${max}`}
        >
          <Star
            className={cn(
              sizeClasses[size],
              isFilled && "fill-yellow-400 text-yellow-400",
              isHalf && "fill-yellow-400/50 text-yellow-400",
              !isFilled && !isHalf && "fill-muted text-muted-foreground"
            )}
          />
        </button>
      )
    }

    return (
      <div className="space-y-2">
        {(label || showValue) && (
          <div className="flex items-center justify-between text-sm">
            {label && <span className="font-medium">{label}</span>}
            {showValue && (
              <span className="text-muted-foreground">
                {value.toFixed(precision === 0.5 ? 1 : 0)} / {max}
              </span>
            )}
          </div>
        )}

        <div
          ref={ref}
          className={cn("flex items-center gap-1", className)}
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
