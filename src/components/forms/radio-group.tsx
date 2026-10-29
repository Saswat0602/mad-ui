"use client"

import React, { createContext, useContext, forwardRef } from 'react'
import { Circle } from 'lucide-react'
import { cn } from '../../lib/utils'
import { useControllableState } from '../../lib/use-controllable-state'

interface RadioGroupContextValue {
  value?: string
  setValue: (value: string) => void
  name?: string
  disabled?: boolean
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null)

function useRadioGroupContext() {
  const ctx = useContext(RadioGroupContext)
  if (!ctx) {
    throw new Error('RadioGroupItem must be used within a RadioGroup')
  }
  return ctx
}

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
  name?: string
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      className,
      value: controlledValue,
      defaultValue,
      onValueChange,
      disabled = false,
      name,
      children,
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useControllableState<string | undefined>({
      prop: controlledValue,
      defaultProp: defaultValue,
      onChange: (val) => val !== undefined && onValueChange?.(val),
    })

    return (
      <RadioGroupContext.Provider value={{ value, setValue, name, disabled }}>
        <div
          ref={ref}
          role="radiogroup"
          aria-disabled={disabled}
          className={cn('grid gap-2.5', className)}
          {...props}
        >
          {children}
        </div>
      </RadioGroupContext.Provider>
    )
  }
)
RadioGroup.displayName = 'RadioGroup'

export interface RadioGroupItemProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {
  value: string
  children?: React.ReactNode
}

export const RadioGroupItem = forwardRef<HTMLButtonElement, RadioGroupItemProps>(
  ({ className, children, id, value: itemValue, disabled: itemDisabled, onClick, onKeyDown, ...props }, ref) => {
    const generatedId = React.useId()
    const itemId = id || generatedId
    const { value, setValue, disabled: groupDisabled } = useRadioGroupContext()

    const disabled = itemDisabled || groupDisabled
    const isChecked = value === itemValue

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e)
      if (!e.defaultPrevented && !disabled) {
        setValue(itemValue)
      }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      onKeyDown?.(e)
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        if (!disabled) {
          setValue(itemValue)
        }
      }
    }

    const itemNode = (
      <button
        type="button"
        role="radio"
        ref={ref}
        id={itemId}
        disabled={disabled}
        aria-checked={isChecked}
        aria-disabled={disabled}
        data-state={isChecked ? 'checked' : 'unchecked'}
        tabIndex={isChecked ? 0 : -1}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={cn(
          'aspect-square h-4 w-4 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-blue-600 dark:text-blue-500 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-zinc-950 flex items-center justify-center cursor-pointer',
          isChecked && 'border-blue-600 dark:border-blue-500',
          className
        )}
        {...props}
      >
        {isChecked && (
          <Circle className="h-2 w-2 fill-blue-600 text-blue-600 dark:fill-blue-500 dark:text-blue-500" />
        )}
      </button>
    )

    if (!children) {
      return itemNode
    }

    return (
      <div className="flex items-center space-x-2.5">
        {itemNode}
        <label
          htmlFor={itemId}
          onClick={() => {
            if (!disabled) {
              setValue(itemValue)
            }
          }}
          className={cn(
            'text-sm font-medium leading-none text-zinc-900 dark:text-zinc-100 cursor-pointer select-none',
            disabled && 'cursor-not-allowed opacity-70'
          )}
        >
          {children}
        </label>
      </div>
    )
  }
)
RadioGroupItem.displayName = 'RadioGroupItem'

export default RadioGroup
