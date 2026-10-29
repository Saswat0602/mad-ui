import React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../lib/utils'

export interface AccordionItemData {
  id?: string
  title: string
  content: React.ReactNode
  disabled?: boolean
}

export interface AccordionItemProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {}

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b border-zinc-200 dark:border-zinc-800 last:border-b-0', className)}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

export interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  iconPosition?: 'left' | 'right'
  customIcon?: any
}

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, iconPosition = 'right', customIcon: CustomIcon, ...props }, ref) => {
  const IconComponent = CustomIcon || ChevronDown

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          'flex flex-1 items-center justify-between py-4 px-5 text-sm font-medium transition-all text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 [&[data-state=open]>svg]:rotate-180 disabled:opacity-50 disabled:pointer-events-none',
          iconPosition === 'left' && 'flex-row-reverse justify-end gap-3',
          className
        )}
        {...props}
      >
        <span className="flex-1 text-left">{children}</span>
        <IconComponent className="h-4 w-4 shrink-0 transition-transform duration-200 text-zinc-500" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
})
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

export interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {}

export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'overflow-hidden text-sm text-zinc-600 dark:text-zinc-400 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0 px-5">{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export interface AccordionProps {
  items?: AccordionItemData[]
  allowMultiple?: boolean
  defaultOpen?: number[]
  className?: string
  itemClassName?: string
  headerClassName?: string
  contentClassName?: string
  iconPosition?: 'left' | 'right'
  customIcon?: any
  animated?: boolean
  type?: 'single' | 'multiple'
  collapsible?: boolean
  value?: any
  defaultValue?: any
  onValueChange?: any
  children?: React.ReactNode
  [key: string]: any
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(({
  items,
  allowMultiple = false,
  defaultOpen = [],
  className,
  itemClassName,
  headerClassName,
  contentClassName,
  iconPosition = 'right',
  customIcon,
  animated = true,
  type,
  collapsible = true,
  value,
  defaultValue,
  onValueChange,
  children,
  ...props
}, ref) => {
  // If compound children passed, render Radix Root
  if (!items) {
    if (type === 'multiple' || allowMultiple) {
      return (
        <AccordionPrimitive.Root
          ref={ref as any}
          type="multiple"
          value={value}
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          className={cn('rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden divide-y divide-zinc-200 dark:divide-zinc-800 shadow-sm', className)}
          {...props}
        >
          {children}
        </AccordionPrimitive.Root>
      )
    }

    return (
      <AccordionPrimitive.Root
        ref={ref as any}
        type="single"
        collapsible={collapsible}
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        className={cn('rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden divide-y divide-zinc-200 dark:divide-zinc-800 shadow-sm', className)}
        {...props}
      >
        {children}
      </AccordionPrimitive.Root>
    )
  }

  // Convenience items prop
  if (allowMultiple) {
    const multiDefault = defaultOpen.map((idx: number) => items[idx]?.id || `item-${idx}`)
    return (
      <AccordionPrimitive.Root
        ref={ref as any}
        type="multiple"
        defaultValue={multiDefault}
        className={cn('rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden divide-y divide-zinc-200 dark:divide-zinc-800 shadow-sm', className)}
        {...props}
      >
        {items.map((item: AccordionItemData, idx: number) => {
          const val = item.id || `item-${idx}`
          return (
            <AccordionItem key={val} value={val} disabled={item.disabled} className={itemClassName}>
              <AccordionTrigger
                iconPosition={iconPosition}
                customIcon={customIcon}
                className={headerClassName}
              >
                {item.title}
              </AccordionTrigger>
              <AccordionContent className={contentClassName}>
                {item.content}
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </AccordionPrimitive.Root>
    )
  }

  const singleDefault = defaultOpen.length > 0 ? (items[defaultOpen[0]]?.id || `item-${defaultOpen[0]}`) : undefined

  return (
    <AccordionPrimitive.Root
      ref={ref as any}
      type="single"
      collapsible={collapsible}
      defaultValue={singleDefault}
      className={cn('rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden divide-y divide-zinc-200 dark:divide-zinc-800 shadow-sm', className)}
      {...props}
    >
      {items.map((item: AccordionItemData, idx: number) => {
        const val = item.id || `item-${idx}`
        return (
          <AccordionItem key={val} value={val} disabled={item.disabled} className={itemClassName}>
            <AccordionTrigger
              iconPosition={iconPosition}
              customIcon={customIcon}
              className={headerClassName}
            >
              {item.title}
            </AccordionTrigger>
            <AccordionContent className={contentClassName}>
              {item.content}
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </AccordionPrimitive.Root>
  )
})
Accordion.displayName = 'Accordion'

export default Accordion