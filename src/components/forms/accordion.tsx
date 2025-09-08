import React, { forwardRef, useState } from 'react'
import { cn } from '../../lib/utils'
import { ChevronDownIcon, ChevronRightIcon } from '../../icons'

export interface AccordionItem {
  id: string
  title: string
  content: React.ReactNode
  disabled?: boolean
  defaultOpen?: boolean
  // Enterprise features
  analyticsId?: string
  analyticsData?: Record<string, any>
  tooltip?: string
  icon?: React.ReactNode
  badge?: string | number
  badgeColor?: "default" | "primary" | "secondary" | "success" | "warning" | "error"
  loading?: boolean
  error?: string
  metadata?: Record<string, any>
  onExpand?: () => void
  onCollapse?: () => void
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
  // Enterprise features
  analyticsId?: string
  analyticsEvent?: string
  analyticsData?: Record<string, any>
  ariaLabel?: string
  ariaDescribedBy?: string
  role?: string
  dataTestId?: string
  onAnalytics?: (event: string, data?: Record<string, any>) => void
  tooltip?: string
  loading?: boolean
  searchable?: boolean
  searchPlaceholder?: string
  onSearch?: (query: string) => void
  filterable?: boolean
  filterOptions?: Array<{
    label: string
    value: string
    count?: number
  }>
  onFilter?: (filters: string[]) => void
  sortable?: boolean
  sortOptions?: Array<{
    label: string
    value: string
    direction?: 'asc' | 'desc'
  }>
  onSort?: (sortBy: string, direction: 'asc' | 'desc') => void
  keyboardNavigation?: boolean
  autoFocus?: boolean
  lazy?: boolean
  virtualized?: boolean
  onItemClick?: (item: AccordionItem) => void
  onItemDoubleClick?: (item: AccordionItem) => void
  onItemRightClick?: (item: AccordionItem, event: React.MouseEvent) => void
  contextMenuItems?: Array<{
    label: string
    onClick: (item: AccordionItem) => void
    icon?: React.ReactNode
    disabled?: boolean
  }>
  dragAndDrop?: boolean
  onReorder?: (items: AccordionItem[]) => void
  onItemDragStart?: (item: AccordionItem) => void
  onDragComplete?: (item: AccordionItem) => void
  onItemDrop?: (item: AccordionItem, targetItem: AccordionItem) => void
  expandAll?: boolean
  collapseAll?: boolean
  onExpandAll?: () => void
  onCollapseAll?: () => void
  showExpandAll?: boolean
  showCollapseAll?: boolean
  persistState?: boolean
  storageKey?: string
  onStateChange?: (state: { openItems: string[]; searchQuery?: string; filters?: string[] }) => void
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

  // Variant classes with proper visibility
  const variantClasses = {
    default: 'border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800',
    bordered: 'border border-slate-200 dark:border-slate-600 rounded-lg divide-y divide-slate-200 dark:divide-slate-600 bg-white dark:bg-slate-800',
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
          variant === 'bordered' && index !== items.length - 1 && 'border-b border-slate-200 dark:border-slate-600'
        )}>
          <button
            onClick={() => handleToggle(item.id)}
            disabled={item.disabled}
            className={cn(
              'w-full flex items-center justify-between p-4 text-left transition-colors duration-200',
              'hover:bg-slate-50 dark:hover:bg-slate-700',
              'focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              sizeClasses[size],
              variant === 'separated' && 'border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800',
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
