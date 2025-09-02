import React, { forwardRef, useState } from 'react'
import { cn } from '../../lib/utils'

export interface TabItem {
  id: string
  label: string
  content: React.ReactNode
  disabled?: boolean
  icon?: React.ReactNode
  badge?: string | number
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: TabItem[]
  variant?: 'default' | 'pills' | 'underline' | 'cards' | 'minimal'
  size?: 'sm' | 'md' | 'lg'
  orientation?: 'horizontal' | 'vertical'
  defaultActiveTab?: string
  animation?: 'fade' | 'slide' | 'scale' | 'none'
  color?: string
  backgroundColor?: string
  borderColor?: string
  activeColor?: string
  borderRadius?: string | number
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  fullWidth?: boolean
  onChange?: (activeTab: string) => void
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>(({
  items,
  variant = 'default',
  size = 'md',
  orientation = 'horizontal',
  defaultActiveTab,
  animation = 'fade',
  color,
  backgroundColor,
  borderColor,
  activeColor,
  borderRadius,
  shadow = 'none',
  fullWidth = false,
  onChange,
  className,
  style,
  ...props
}, ref) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || items[0]?.id || '')

  // Size classes
  const sizeClasses = {
    sm: 'text-sm px-3 py-2',
    md: 'text-base px-4 py-2.5',
    lg: 'text-lg px-5 py-3'
  }

  // Variant classes
  const getTabClasses = (isActive: boolean, isDisabled: boolean) => {
    const baseClasses = cn(
      'flex items-center justify-center space-x-2 font-medium transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      sizeClasses[size],
      fullWidth && 'flex-1'
    )

    switch (variant) {
      case 'pills':
        return cn(
          baseClasses,
          'rounded-full',
          isActive
            ? 'bg-blue-500 text-white shadow-md'
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
        )
      case 'underline':
        return cn(
          baseClasses,
          'border-b-2 px-4 py-2',
          isActive
            ? 'border-blue-500 text-blue-600 dark:text-blue-400'
            : 'border-transparent text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
        )
      case 'cards':
        return cn(
          baseClasses,
          'rounded-lg border',
          isActive
            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 shadow-sm'
            : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
        )
      case 'minimal':
        return cn(
          baseClasses,
          'px-4 py-2',
          isActive
            ? 'text-blue-600 dark:text-blue-400 font-semibold'
            : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
        )
      default:
        return cn(
          baseClasses,
          'rounded-lg',
          isActive
            ? 'bg-blue-500 text-white shadow-md'
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
        )
    }
  }

  // Shadow classes
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  }

  // Animation classes
  const animationClasses = {
    fade: 'transition-opacity duration-300',
    slide: 'transition-transform duration-300',
    scale: 'transition-transform duration-300',
    none: ''
  }

  const handleTabChange = (tabId: string) => {
    if (items.find(item => item.id === tabId)?.disabled) return
    setActiveTab(tabId)
    onChange?.(tabId)
  }

  const activeTabContent = items.find(item => item.id === activeTab)?.content

  return (
    <div
      ref={ref}
      className={cn(
        'w-full',
        fullWidth && 'w-full',
        className
      )}
      style={{
        color,
        backgroundColor,
        borderColor,
        borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
        ...style
      }}
      {...props}
    >
      {/* Tab Navigation */}
      <div className={cn(
        'flex',
        orientation === 'vertical' ? 'flex-col space-y-2' : 'flex-row space-x-2',
        variant === 'underline' && orientation === 'horizontal' && 'border-b border-gray-200 dark:border-gray-700',
        variant === 'cards' && 'p-1 bg-gray-100 dark:bg-gray-800 rounded-lg',
        shadowClasses[shadow]
      )}>
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleTabChange(item.id)}
            disabled={item.disabled}
            className={getTabClasses(activeTab === item.id, item.disabled || false)}
          >
            {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
            <span>{item.label}</span>
            {item.badge && (
              <span className={cn(
                'ml-2 px-2 py-0.5 text-xs font-medium rounded-full',
                activeTab === item.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              )}>
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className={cn(
        'mt-4',
        orientation === 'vertical' && 'ml-4'
      )}>
        <div
          className={cn(
            'transition-all duration-300',
            animationClasses[animation]
          )}
          style={{
            animation: animation === 'fade' ? 'fadeIn 0.3s ease-in-out' : undefined
          }}
        >
          {activeTabContent}
        </div>
      </div>


    </div>
  )
})

Tabs.displayName = "Tabs"

export { Tabs }
