import React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cn } from '../../lib/utils'

export interface SwitchProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>, 'onChange'> {
  label?: string
  description?: string
  size?: 'sm' | 'md' | 'lg'
  onChange?: (e: any) => void
}


export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({
  className,
  label,
  description,
  size = 'md',
  id,
  disabled,
  checked,
  defaultChecked,
  onCheckedChange,
  onChange,
  ...props
}, ref) => {
  const generatedId = React.useId()
  const switchId = id || generatedId

  const handleCheckedChange = (state: boolean) => {
    onCheckedChange?.(state)
    if (onChange) {
      onChange({
        target: { checked: state, value: String(state) },
        currentTarget: { checked: state },
        preventDefault: () => {},
        stopPropagation: () => {},
      })
    }
  }


  const rootSizes = {
    sm: 'h-4 w-7',
    md: 'h-5 w-9',
    lg: 'h-6 w-11',
  }

  const thumbSizes = {
    sm: 'h-3 w-3 data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0.5',
    md: 'h-4 w-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0.5',
    lg: 'h-5 w-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5',
  }

  const switchNode = (
    <SwitchPrimitive.Root
      ref={ref}
      id={switchId}
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={handleCheckedChange}
      disabled={disabled}
      className={cn(
        'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950 disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=checked]:bg-blue-600 dark:data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-zinc-200 dark:data-[state=unchecked]:bg-zinc-700',
        rootSizes[size],
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          'pointer-events-none block rounded-full bg-white shadow-md ring-0 transition-transform duration-200 ease-in-out',
          thumbSizes[size]
        )}
      />
    </SwitchPrimitive.Root>
  )

  if (!label && !description) {
    return switchNode
  }

  return (
    <div className="flex items-center space-x-3">
      {switchNode}
      <div className="grid gap-1 leading-none select-none">
        {label && (
          <label
            htmlFor={switchId}
            className={cn(
              'text-sm font-medium leading-none cursor-pointer text-zinc-900 dark:text-zinc-100',
              disabled && 'cursor-not-allowed opacity-70'
            )}
          >
            {label}
          </label>
        )}
        {description && (
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            {description}
          </p>
        )}
      </div>
    </div>
  )
})
Switch.displayName = 'Switch'

export default Switch
