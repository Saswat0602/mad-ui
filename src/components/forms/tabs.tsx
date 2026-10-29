"use client"

import React, { createContext, useContext, forwardRef } from 'react'
import { cn } from '../../lib/utils'
import { useControllableState } from '../../lib/use-controllable-state'

export interface TabItem {
  id: string
  label: string
  content: React.ReactNode
  disabled?: boolean
  icon?: React.ReactNode
  badge?: string | number
}

interface TabsContextValue {
  value: string
  setValue: (value: string) => void
  orientation: 'horizontal' | 'vertical'
}

const TabsContext = createContext<TabsContextValue | null>(null)

function useTabsContext() {
  const ctx = useContext(TabsContext)
  if (!ctx) {
    throw new Error('Tabs compound components must be used within a Tabs component')
  }
  return ctx
}

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, ...props }, ref) => {
    const { orientation } = useTabsContext()
    return (
      <div
        ref={ref}
        role="tablist"
        aria-orientation={orientation}
        className={cn(
          'inline-flex h-9 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800/80 p-1 text-zinc-500 dark:text-zinc-400',
          className
        )}
        {...props}
      />
    )
  }
)
TabsList.displayName = 'TabsList'

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

export const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value: triggerValue, disabled = false, onClick, onKeyDown, ...props }, ref) => {
    const { value, setValue } = useTabsContext()
    const isActive = value === triggerValue

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e)
      if (!e.defaultPrevented && !disabled) {
        setValue(triggerValue)
      }
    }

    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        aria-selected={isActive}
        tabIndex={isActive ? 0 : -1}
        disabled={disabled}
        data-state={isActive ? 'active' : 'inactive'}
        onClick={handleClick}
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none',
          isActive && 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 shadow-sm',
          className
        )}
        {...props}
      />
    )
  }
)
TabsTrigger.displayName = 'TabsTrigger'

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

export const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value: contentValue, children, ...props }, ref) => {
    const { value } = useTabsContext()
    const isActive = value === contentValue

    if (!isActive) return null

    return (
      <div
        ref={ref}
        role="tabpanel"
        tabIndex={0}
        data-state={isActive ? 'active' : 'inactive'}
        className={cn(
          'mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:ring-offset-zinc-950 animate-in fade-in-50 duration-200',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TabsContent.displayName = 'TabsContent'

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  items?: TabItem[]
  variant?: 'default' | 'pills' | 'underline' | 'cards' | 'minimal'
  size?: 'sm' | 'md' | 'lg'
  orientation?: 'horizontal' | 'vertical'
  defaultActiveTab?: string
  defaultValue?: string
  value?: string
  animation?: 'fade' | 'slide' | 'scale' | 'none'
  fullWidth?: boolean
  onChange?: (activeTab: string) => void
  onValueChange?: (activeTab: string) => void
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      items,
      variant = 'default',
      size = 'md',
      orientation = 'horizontal',
      defaultActiveTab,
      defaultValue,
      value: controlledValue,
      animation = 'fade',
      fullWidth = false,
      onChange,
      onValueChange,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const initialDefault = defaultValue || defaultActiveTab || items?.[0]?.id || ''

    const [value, setValue] = useControllableState<string>({
      prop: controlledValue,
      defaultProp: initialDefault,
      onChange: (val) => {
        onValueChange?.(val)
        onChange?.(val)
      },
    })

    if (!items) {
      return (
        <TabsContext.Provider value={{ value, setValue, orientation }}>
          <div ref={ref} className={cn('w-full', className)} {...props}>
            {children}
          </div>
        </TabsContext.Provider>
      )
    }

    const sizeClasses = {
      sm: 'text-xs px-2.5 py-1',
      md: 'text-sm px-3.5 py-1.5',
      lg: 'text-base px-4 py-2',
    }

    return (
      <TabsContext.Provider value={{ value, setValue, orientation }}>
        <div
          ref={ref}
          className={cn('w-full', orientation === 'vertical' && 'flex gap-4', className)}
          {...props}
        >
          <TabsList
            className={cn(
              'flex gap-1',
              orientation === 'vertical' ? 'flex-col shrink-0 h-auto' : 'flex-row items-center',
              variant === 'default' &&
                'rounded-xl bg-zinc-100 dark:bg-zinc-800/80 p-1 text-zinc-500 dark:text-zinc-400',
              variant === 'pills' && 'rounded-full bg-zinc-100 dark:bg-zinc-800/80 p-1',
              variant === 'underline' &&
                'border-b border-zinc-200 dark:border-zinc-800 gap-2 pb-px bg-transparent rounded-none h-auto',
              variant === 'cards' &&
                'rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-1',
              variant === 'minimal' && 'gap-2 bg-transparent rounded-none h-auto',
              fullWidth && 'w-full'
            )}
          >
            {items.map((item) => {
              const isActive = value === item.id
              const triggerVariantClasses = {
                default: cn(
                  'rounded-lg font-medium transition-all text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100',
                  isActive &&
                    'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 shadow-sm'
                ),
                pills: cn(
                  'rounded-full font-medium transition-all text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100',
                  isActive && 'bg-blue-600 text-white shadow-sm hover:text-white'
                ),
                underline: cn(
                  'border-b-2 border-transparent font-medium transition-all rounded-none text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100',
                  isActive &&
                    'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                ),
                cards: cn(
                  'rounded-lg font-medium transition-all text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 border border-transparent',
                  isActive &&
                    'border-zinc-200 dark:border-zinc-700/80 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm'
                ),
                minimal: cn(
                  'rounded-lg font-medium transition-all text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100',
                  isActive && 'text-blue-600 dark:text-blue-400 font-semibold'
                ),
              }[variant]

              return (
                <TabsTrigger
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
                </TabsTrigger>
              )
            })}
          </TabsList>

          <div className={cn('mt-3 flex-1', orientation === 'vertical' && 'mt-0')}>
            {items.map((item) => (
              <TabsContent key={item.id} value={item.id}>
                {item.content}
              </TabsContent>
            ))}
          </div>
        </div>
      </TabsContext.Provider>
    )
  }
)
Tabs.displayName = 'Tabs'

export default Tabs
