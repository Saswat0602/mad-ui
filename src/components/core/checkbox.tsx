import React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check, Minus } from 'lucide-react'
import { cn } from '../../lib/utils'

export interface CheckboxProps
  extends Omit<React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, 'checked' | 'defaultChecked' | 'onChange'> {
  label?: string
  description?: string
  error?: boolean
  indeterminate?: boolean
  size?: 'sm' | 'md' | 'lg'
  checked?: boolean | 'indeterminate'
  defaultChecked?: boolean | 'indeterminate'
  onChange?: (e: any) => void
}

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({
  className,
  label,
  description,
  error,
  indeterminate,
  size = 'md',
  id,
  checked,
  defaultChecked,
  disabled,
  onChange,
  onCheckedChange,
  ...props
}, ref) => {
  const generatedId = React.useId()
  const checkboxId = id || generatedId

  const computedChecked = indeterminate ? 'indeterminate' : checked
  const computedDefaultChecked = indeterminate ? 'indeterminate' : defaultChecked

  const handleCheckedChange = (state: CheckboxPrimitive.CheckedState) => {
    onCheckedChange?.(state)
    if (onChange) {
      onChange({
        target: { checked: state === true, value: String(state) },
        currentTarget: { checked: state === true },
        preventDefault: () => {},
        stopPropagation: () => {},
      })
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
    <CheckboxPrimitive.Root
      ref={ref}
      id={checkboxId}
      checked={computedChecked}
      defaultChecked={computedDefaultChecked}
      onCheckedChange={handleCheckedChange}
      disabled={disabled}
      className={cn(
        'peer shrink-0 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 data-[state=checked]:text-white',

        'data-[state=indeterminate]:bg-blue-600 data-[state=indeterminate]:border-blue-600 data-[state=indeterminate]:text-white',
        error && 'border-red-500 dark:border-red-500',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
        {indeterminate ? (
          <Minus className={iconSizes[size]} />
        ) : (
          <Check className={iconSizes[size]} />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )

  if (!label && !description) {
    return checkboxNode
  }

  return (
    <div className="flex items-start space-x-2.5">
      <div className="flex items-center h-5">
        {checkboxNode}
      </div>
      <div className="grid gap-1 leading-none select-none">
        {label && (
          <label
            htmlFor={checkboxId}
            className={cn(
              'text-sm font-medium leading-none cursor-pointer text-zinc-900 dark:text-zinc-100',
              disabled && 'cursor-not-allowed opacity-70'
            )}
          >
            {label}
          </label>
        )}
        {description && (
          <p className={cn('text-xs text-zinc-500 dark:text-zinc-400', error && 'text-red-500 dark:text-red-400')}>
            {description}
          </p>
        )}
      </div>
    </div>
  )
})
Checkbox.displayName = 'Checkbox'

export default Checkbox