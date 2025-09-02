import React from 'react'
import { cn } from '../../lib/utils'

export interface RadioGroupProps {
  children: React.ReactNode
  value?: string
  onValueChange?: (value: string) => void
  className?: string
  disabled?: boolean
}

export interface RadioGroupItemProps {
  value: string
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  value,
  onValueChange,
  className,
  disabled = false
}) => {
  const handleValueChange = (newValue: string) => {
    if (!disabled && onValueChange) {
      onValueChange(newValue)
    }
  }

  return (
    <div
      role="radiogroup"
      className={cn('space-y-2', className)}
      aria-disabled={disabled}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === RadioGroupItem) {
          return React.cloneElement(child, {
            checked: child.props.value === value,
            onValueChange: handleValueChange,
            disabled: disabled || child.props.disabled
          })
        }
        return child
      })}
    </div>
  )
}

export const RadioGroupItem: React.FC<RadioGroupItemProps & {
  checked?: boolean
  onValueChange?: (value: string) => void
  disabled?: boolean
}> = ({
  value,
  children,
  className,
  checked = false,
  onValueChange,
  disabled = false
}) => {
  const handleClick = () => {
    if (!disabled && onValueChange) {
      onValueChange(value)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        type="button"
        role="radio"
        aria-checked={checked}
        aria-disabled={disabled}
        className={cn(
          'h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          checked && 'border-primary bg-primary',
          className
        )}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
      >
        {checked && (
          <div className="flex h-full w-full items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-primary-foreground" />
          </div>
        )}
      </button>
      <label
        className={cn(
          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
          disabled && 'cursor-not-allowed opacity-70'
        )}
        onClick={!disabled ? handleClick : undefined}
      >
        {children}
      </label>
    </div>
  )
}
