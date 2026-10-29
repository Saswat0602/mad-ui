import React from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import { cn } from '../../lib/utils'

export interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'outline'
}

export const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, variant = 'default', size = 'md', ...props }, ref) => {
  const sizeClasses = {
    sm: 'h-8 px-2.5 text-xs',
    md: 'h-9 px-3 text-xs',
    lg: 'h-10 px-4 text-sm',
  }

  const variantClasses = {
    default:
      'bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 data-[state=on]:bg-zinc-900 data-[state=on]:text-white dark:data-[state=on]:bg-zinc-100 dark:data-[state=on]:text-zinc-900 shadow-2xs',
    outline:
      'border border-zinc-200 dark:border-zinc-800 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 data-[state=on]:bg-zinc-900 data-[state=on]:text-white dark:data-[state=on]:bg-zinc-100 dark:data-[state=on]:text-zinc-900 shadow-2xs',
  }

  return (
    <TogglePrimitive.Root
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    />
  )
})
Toggle.displayName = TogglePrimitive.Root.displayName

const ToggleGroupContext = React.createContext<{
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'outline'
}>({
  size: 'md',
  variant: 'default',
})

export type ToggleGroupProps = React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'outline'
}

export const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupProps
>(({ className, variant = 'default', size = 'md', children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn('inline-flex items-center justify-center gap-1 rounded-lg border border-zinc-200 dark:border-zinc-800 p-1', className)}
    {...(props as any)}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName


export interface ToggleGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'outline'
}

export const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupItemProps
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)
  const resolvedVariant = variant || context.variant || 'default'
  const resolvedSize = size || context.size || 'md'

  const sizeClasses = {
    sm: 'h-8 px-2.5 text-xs',
    md: 'h-9 px-3 text-xs',
    lg: 'h-10 px-4 text-sm',
  }

  const variantClasses = {
    default:
      'bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 data-[state=on]:bg-zinc-900 data-[state=on]:text-white dark:data-[state=on]:bg-zinc-100 dark:data-[state=on]:text-zinc-900 shadow-2xs',
    outline:
      'border border-zinc-200 dark:border-zinc-800 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 data-[state=on]:bg-zinc-900 data-[state=on]:text-white dark:data-[state=on]:bg-zinc-100 dark:data-[state=on]:text-zinc-900 shadow-2xs',
  }

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none',
        sizeClasses[resolvedSize],
        variantClasses[resolvedVariant],
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export default Toggle
