import React, { forwardRef, useState } from 'react'
import { cn } from '../../lib/utils'

// Simple SVG icons to replace lucide-react imports
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

export interface AccordionItem {
  id: string
  title: string
  content: React.ReactNode
  disabled?: boolean
  defaultOpen?: boolean
}

export interface AccordionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: AccordionItem[]
  variant?: 'default' | 'bordered' | 'separated' | 'minimal'
  size?: 'sm' | 'md' | 'lg'
  multiple?: boolean
  collapsible?: boolean
  animation?: 'slide' | 'fade' | 'scale' | 'none'
  color?: string
  backgroundColor?: string
  borderColor?: string
  borderRadius?: string | number
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  fullWidth?: boolean
  onChange?: (openItems: string[]) => void
}

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(({
  items,
  variant = 'default',
  size = 'md',
  multiple = false,
  collapsible = true,
  animation = 'slide',
  color,
  backgroundColor,
  borderColor,
  borderRadius,
  shadow = 'none',
  fullWidth = false,
  onChange,
  className,
  style,
  ...props
}, ref) => {
  const [openItems, setOpenItems] = useState<string[]>(
    items.filter(item => item.defaultOpen).map(item => item.id)
  )

  // Size classes
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }

  // Variant classes
  const variantClasses = {
    default: 'border border-gray-200 dark:border-gray-700 rounded-lg',
    bordered: 'border border-gray-200 dark:border-gray-700 rounded-lg divide-y divide-gray-200 dark:divide-gray-700',
    separated: 'space-y-2',
    minimal: ''
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
    slide: 'transition-all duration-300 ease-in-out',
    fade: 'transition-opacity duration-300',
    scale: 'transition-transform duration-300',
    none: ''
  }

  const handleToggle = (itemId: string) => {
    if (items.find(item => item.id === itemId)?.disabled) return

    let newOpenItems: string[]
    
    if (multiple) {
      if (openItems.includes(itemId)) {
        newOpenItems = openItems.filter(id => id !== itemId)
      } else {
        newOpenItems = [...openItems, itemId]
      }
    } else {
      if (openItems.includes(itemId)) {
        newOpenItems = collapsible ? [] : openItems
      } else {
        newOpenItems = [itemId]
      }
    }
    
    setOpenItems(newOpenItems)
    onChange?.(newOpenItems)
  }

  const isOpen = (itemId: string) => openItems.includes(itemId)

  return (
    <div
      ref={ref}
      className={cn(
        'w-full',
        fullWidth && 'w-full',
        variantClasses[variant],
        shadowClasses[shadow],
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
      {items.map((item, index) => (
        <div key={item.id} className={cn(
          variant === 'bordered' && index !== items.length - 1 && 'border-b border-gray-200 dark:border-gray-700'
        )}>
          <button
            onClick={() => handleToggle(item.id)}
            disabled={item.disabled}
            className={cn(
              'w-full flex items-center justify-between p-4 text-left transition-colors duration-200',
              'hover:bg-gray-50 dark:hover:bg-gray-800',
              'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              sizeClasses[size],
              variant === 'separated' && 'border border-gray-200 dark:border-gray-700 rounded-lg',
              variant === 'minimal' && 'hover:bg-transparent'
            )}
          >
            <span className="font-medium">{item.title}</span>
            <div className={cn(
              'flex-shrink-0 transition-transform duration-200',
              isOpen(item.id) ? 'rotate-180' : 'rotate-0'
            )}>
              {variant === 'minimal' ? (
                <ChevronRightIcon className="w-4 h-4" />
              ) : (
                <ChevronDownIcon className="w-4 h-4" />
              )}
            </div>
          </button>
          
          <div className={cn(
            'overflow-hidden',
            animationClasses[animation]
          )}>
            <div className={cn(
              'px-4 pb-4',
              variant === 'separated' && 'px-0'
            )}>
              <div
                className={cn(
                  'transition-all duration-300',
                  isOpen(item.id) 
                    ? animation === 'slide' 
                      ? 'max-h-96 opacity-100' 
                      : animation === 'fade'
                      ? 'opacity-100'
                      : animation === 'scale'
                      ? 'scale-100 opacity-100'
                      : 'block'
                    : animation === 'slide'
                    ? 'max-h-0 opacity-0'
                    : animation === 'fade'
                    ? 'opacity-0'
                    : animation === 'scale'
                    ? 'scale-95 opacity-0'
                    : 'hidden'
                )}
              >
                {item.content}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
})

Accordion.displayName = "Accordion"

export { Accordion }
