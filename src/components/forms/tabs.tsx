import React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from '../../lib/utils'

export interface TabItem {
  id: string
  label: string
  content: React.ReactNode
  disabled?: boolean
  icon?: React.ReactNode
  badge?: string | number
}

export interface TabsProps extends Omit<React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>, 'onChange'> {
  items?: TabItem[]
  variant?: 'default' | 'pills' | 'underline' | 'cards' | 'minimal'
  size?: 'sm' | 'md' | 'lg'
  defaultActiveTab?: string
  animation?: 'fade' | 'slide' | 'scale' | 'none'
  fullWidth?: boolean
  onChange?: (activeTab: string) => void
}


export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex h-9 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800/80 p-1 text-zinc-500 dark:text-zinc-400',
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 data-[state=active]:text-zinc-900 dark:data-[state=active]:text-zinc-50 data-[state=active]:shadow-sm dark:ring-offset-zinc-950',
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:ring-offset-zinc-950',
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(({
  items,
  variant = 'default',
  size = 'md',
  orientation = 'horizontal',
  defaultActiveTab,
  defaultValue,
  value,
  animation = 'fade',
  fullWidth = false,
  onChange,
  onValueChange,
  className,
  children,
  ...props
}, ref) => {
  const handleValueChange = (val: string) => {
    onValueChange?.(val)
    onChange?.(val)
  }

  // If children are passed, treat as compound Radix Tabs Root
  if (!items) {
    return (
      <TabsPrimitive.Root
        ref={ref}
        orientation={orientation}
        defaultValue={defaultValue || defaultActiveTab}
        value={value}
        onValueChange={handleValueChange}
        className={cn('w-full', className)}
        {...props}
      >
        {children}
      </TabsPrimitive.Root>
    )
  }

  // Backwards compatible convenience wrapper using Radix under the hood
  const initialValue = value || defaultValue || defaultActiveTab || items[0]?.id

  const sizeClasses = {
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3.5 py-1.5',
    lg: 'text-base px-4 py-2',
  }

  return (
    <TabsPrimitive.Root
      ref={ref}
      orientation={orientation}
      defaultValue={initialValue}
      value={value}
      onValueChange={handleValueChange}
      className={cn('w-full', orientation === 'vertical' && 'flex gap-4', className)}
      {...props}
    >
      <TabsPrimitive.List
        className={cn(
          'flex gap-1',
          orientation === 'vertical' ? 'flex-col shrink-0' : 'flex-row items-center',
          variant === 'default' && 'rounded-xl bg-zinc-100 dark:bg-zinc-800/80 p-1 text-zinc-500 dark:text-zinc-400',
          variant === 'pills' && 'rounded-full bg-zinc-100 dark:bg-zinc-800/80 p-1',
          variant === 'underline' && 'border-b border-zinc-200 dark:border-zinc-800 gap-2 pb-px',
          variant === 'cards' && 'rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-1',
          variant === 'minimal' && 'gap-2',
          fullWidth && 'w-full'
        )}
      >
        {items.map((item) => {
          const triggerVariantClasses = {
            default: cn(
              'rounded-lg font-medium transition-all text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100',
              'data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 data-[state=active]:text-zinc-900 dark:data-[state=active]:text-zinc-50 data-[state=active]:shadow-sm'
            ),
            pills: cn(
              'rounded-full font-medium transition-all text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100',
              'data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm'
            ),
            underline: cn(
              'border-b-2 border-transparent font-medium transition-all rounded-none text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100',
              'data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 dark:data-[state=active]:border-blue-400 dark:data-[state=active]:text-blue-400'
            ),
            cards: cn(
              'rounded-lg font-medium transition-all text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 border border-transparent',
              'data-[state=active]:border-zinc-200 dark:data-[state=active]:border-zinc-700/80 data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-900 dark:data-[state=active]:text-zinc-100 data-[state=active]:shadow-sm'
            ),
            minimal: cn(
              'rounded-lg font-medium transition-all text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100',
              'data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 data-[state=active]:font-semibold'
            ),
          }[variant]

          return (
            <TabsPrimitive.Trigger
              key={item.id}
              value={item.id}
              disabled={item.disabled}
              className={cn(
                'inline-flex items-center justify-center gap-2 whitespace-nowrap outline-none ring-offset-white dark:ring-offset-zinc-950 focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-40 transition-all',
                sizeClasses[size],
                triggerVariantClasses,
                fullWidth && 'flex-1'
              )}
            >
              {item.icon && <span className="shrink-0">{item.icon}</span>}
              <span>{item.label}</span>
              {item.badge !== undefined && (
                <span className="ml-1.5 rounded-full bg-zinc-200 dark:bg-zinc-700 px-2 py-0.5 text-[11px] font-medium text-zinc-800 dark:text-zinc-200">
                  {item.badge}
                </span>
              )}
            </TabsPrimitive.Trigger>
          )
        })}
      </TabsPrimitive.List>

      <div className={cn('mt-3 flex-1', orientation === 'vertical' && 'mt-0')}>
        {items.map((item) => (
          <TabsPrimitive.Content
            key={item.id}
            value={item.id}
            className={cn(
              'outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg',
              animation === 'fade' && 'data-[state=active]:animate-in data-[state=active]:fade-in-50 duration-200'
            )}
          >
            {item.content}
          </TabsPrimitive.Content>
        ))}
      </div>
    </TabsPrimitive.Root>
  )
})
Tabs.displayName = 'Tabs'

export default Tabs
