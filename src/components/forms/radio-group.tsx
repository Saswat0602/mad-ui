import React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { Circle } from 'lucide-react'
import { cn } from '../../lib/utils'

export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {}

export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      ref={ref}
      className={cn('grid gap-2.5', className)}
      {...props}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  children?: React.ReactNode
}

export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, children, id, disabled, ...props }, ref) => {
  const generatedId = React.useId()
  const itemId = id || generatedId

  const itemNode = (
    <RadioGroupPrimitive.Item
      ref={ref}
      id={itemId}
      disabled={disabled}
      className={cn(
        'aspect-square h-4 w-4 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-blue-600 dark:text-blue-500 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-zinc-950 data-[state=checked]:border-blue-600 dark:data-[state=checked]:border-blue-500',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2 w-2 fill-blue-600 text-blue-600 dark:fill-blue-500 dark:text-blue-500" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )

  if (!children) {
    return itemNode
  }

  return (
    <div className="flex items-center space-x-2.5">
      {itemNode}
      <label
        htmlFor={itemId}
        className={cn(
          'text-sm font-medium leading-none text-zinc-900 dark:text-zinc-100 cursor-pointer select-none',
          disabled && 'cursor-not-allowed opacity-70'
        )}
      >
        {children}
      </label>
    </div>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export default RadioGroup
