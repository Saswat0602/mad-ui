import React from 'react'
import { Check, Minus } from 'lucide-react'
import { cn } from '../../lib/utils'
import { useControllableState } from '../../lib/use-controllable-state'

export type CheckedState = boolean | 'indeterminate'

export interface CheckboxProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'checked' | 'defaultChecked' | 'onChange'> {
  label?: string
  description?: string
  error?: boolean
  indeterminate?: boolean
  size?: 'sm' | 'md' | 'lg'
  checked?: CheckedState
  defaultChecked?: CheckedState
  onCheckedChange?: (checked: CheckedState) => void
  onChange?: (e: any) => void
}

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      className,
      label,
      description,
      error,
      indeterminate,
      size = 'md',
      id,
      checked: controlledChecked,
      defaultChecked = false,
      disabled = false,
      onChange,
      onCheckedChange,
      onClick,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId()
    const checkboxId = id || generatedId

    const [checked, setChecked] = useControllableState<CheckedState>({
      prop: indeterminate ? 'indeterminate' : controlledChecked,
      defaultProp: indeterminate ? 'indeterminate' : defaultChecked,
      onChange: (nextState) => {
        onCheckedChange?.(nextState)
        if (onChange) {
          onChange({
            target: { checked: nextState === true, value: String(nextState) },
            currentTarget: { checked: nextState === true },
            preventDefault: () => {},
            stopPropagation: () => {},
          })
        }
      },
    })

    const isChecked = checked === true
    const isIndeterminate = checked === 'indeterminate' || indeterminate

    const toggle = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
      if (disabled) return
      const nextState = isIndeterminate ? true : !isChecked
      setChecked(nextState)
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e)
      if (!e.defaultPrevented) {
        toggle(e)
      }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      onKeyDown?.(e)
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        toggle(e)
      }
    }

    const sizeClasses = {
      sm: 'h-3.5 w-3.5 rounded',
      md: 'h-4 w-4 rounded-md',
      lg: 'h-5 w-5 rounded-md',
    }

    const iconSizes = {
      sm: 'h-2.5 w-2.5 stroke-[3]',
      md: 'h-3.5 w-3.5 stroke-[3]',
      lg: 'h-4 w-4 stroke-[3]',
    }

    const checkboxNode = (
      <button
        type="button"
        role="checkbox"
        ref={ref}
        id={checkboxId}
        aria-checked={isIndeterminate ? 'mixed' : isChecked}
        aria-disabled={disabled}
        disabled={disabled}
        data-state={isIndeterminate ? 'indeterminate' : isChecked ? 'checked' : 'unchecked'}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={cn(
          'peer shrink-0 flex items-center justify-center border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-50 select-none cursor-pointer',
          (isChecked || isIndeterminate) && 'bg-blue-600 border-blue-600 text-white dark:bg-blue-600 dark:border-blue-600',
          (error || props["aria-invalid"] === true || props["aria-invalid"] === "true") && 'border-red-500 dark:border-red-500',
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {isIndeterminate ? (
          <Minus className={iconSizes[size]} />
        ) : isChecked ? (
          <Check className={iconSizes[size]} />
        ) : null}
      </button>
    )

    if (!label && !description) {
      return checkboxNode
    }

    return (
      <div className="flex items-start space-x-2.5">
        <div className="flex items-center h-5">{checkboxNode}</div>
        <div className="grid gap-1 leading-none select-none">
          {label && (
            <label
              htmlFor={checkboxId}
              onClick={() => {
                if (!disabled) {
                  const nextState = isIndeterminate ? true : !isChecked
                  setChecked(nextState)
                }
              }}
              className={cn(
                'text-sm font-medium leading-none cursor-pointer text-zinc-900 dark:text-zinc-100',
                disabled && 'cursor-not-allowed opacity-70'
              )}
            >
              {label}
            </label>
          )}
          {description && (
            <p
              className={cn(
                'text-xs text-zinc-500 dark:text-zinc-400',
                error && 'text-red-500 dark:text-red-400'
              )}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    )
  }
)
Checkbox.displayName = 'Checkbox'

export default Checkbox