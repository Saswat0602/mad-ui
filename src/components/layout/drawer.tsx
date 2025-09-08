import React, { useEffect, useRef, useState, useCallback } from 'react'
import { cn } from '../../lib/utils'

export interface DrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
  className?: string
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
  dismissible?: boolean
  persistent?: boolean
  onShow?: () => void
  onHide?: () => void
  animation?: 'slide' | 'fade' | 'scale' | 'none'
  animationDuration?: number
  onAnimationStart?: () => void
  onAnimationEnd?: () => void
  theme?: 'light' | 'dark' | 'auto'
  locale?: string
  rtl?: boolean
  accessibility?: {
    announce?: boolean
    announceMessage?: string
    role?: string
    liveRegion?: 'polite' | 'assertive' | 'off'
  }
}

export interface DrawerTriggerProps {
  children: React.ReactNode
  asChild?: boolean
  className?: string
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
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
}

export interface DrawerContentProps {
  children: React.ReactNode
  className?: string
  side?: 'top' | 'right' | 'bottom' | 'left'
  onEscapeKeyDown?: () => void
  onInteractOutside?: () => void
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
  dismissible?: boolean
  persistent?: boolean
  onShow?: () => void
  onHide?: () => void
  animation?: 'slide' | 'fade' | 'scale' | 'none'
  animationDuration?: number
  onAnimationStart?: () => void
  onAnimationEnd?: () => void
  theme?: 'light' | 'dark' | 'auto'
  locale?: string
  rtl?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  fullWidth?: boolean
  fullHeight?: boolean
  color?: string
  backgroundColor?: string
  borderColor?: string
  textColor?: string
  borderRadius?: string | number
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  overlayColor?: string
  overlayBlur?: boolean
  zIndex?: number
  keyboardDismissible?: boolean
  onKeyboardDismiss?: (key: string) => void
  clickable?: boolean
  onClick?: () => void
  onDoubleClick?: () => void
  onRightClick?: (event: React.MouseEvent) => void
  contextMenuItems?: Array<{
    label: string
    onClick: () => void
    icon?: React.ReactNode
    disabled?: boolean
  }>
  draggable?: boolean
  onDragMove?: (position: { x: number; y: number }) => void
  onDragComplete?: (position: { x: number; y: number }) => void
  swipeable?: boolean
  onSwipe?: (direction: 'left' | 'right' | 'up' | 'down') => void
  resizable?: boolean
  onResize?: (size: { width: number; height: number }) => void
  scrollable?: boolean
  onScroll?: (scrollY: number) => void
  focusable?: boolean
  autoFocus?: boolean
  onFocus?: () => void
  onBlur?: () => void
  tabIndex?: number
  accessibility?: {
    announce?: boolean
    announceMessage?: string
    role?: string
    liveRegion?: 'polite' | 'assertive' | 'off'
  }
}

export interface DrawerHeaderProps {
  children: React.ReactNode
  className?: string
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
  sticky?: boolean
  collapsible?: boolean
  onCollapse?: () => void
  onExpand?: () => void
  collapsed?: boolean
  onToggle?: (collapsed: boolean) => void
  actions?: React.ReactNode
  breadcrumbs?: Array<{
    label: string
    href?: string
    onClick?: () => void
  }>
  showBreadcrumbs?: boolean
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
  onItemClick?: (item: any) => void
  onItemDoubleClick?: (item: any) => void
  onItemRightClick?: (item: any, event: React.MouseEvent) => void
  contextMenuItems?: Array<{
    label: string
    onClick: (item: any) => void
    icon?: React.ReactNode
    disabled?: boolean
  }>
  dragAndDrop?: boolean
  onReorder?: (items: any[]) => void
  onItemDragStart?: (item: any) => void
  onDragComplete?: (item: any) => void
  onItemDrop?: (item: any, targetItem: any) => void
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

export interface DrawerFooterProps {
  children: React.ReactNode
  className?: string
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
  sticky?: boolean
  collapsible?: boolean
  onCollapse?: () => void
  onExpand?: () => void
  collapsed?: boolean
  onToggle?: (collapsed: boolean) => void
  actions?: React.ReactNode
  breadcrumbs?: Array<{
    label: string
    href?: string
    onClick?: () => void
  }>
  showBreadcrumbs?: boolean
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
  onItemClick?: (item: any) => void
  onItemDoubleClick?: (item: any) => void
  onItemRightClick?: (item: any, event: React.MouseEvent) => void
  contextMenuItems?: Array<{
    label: string
    onClick: (item: any) => void
    icon?: React.ReactNode
    disabled?: boolean
  }>
  dragAndDrop?: boolean
  onReorder?: (items: any[]) => void
  onItemDragStart?: (item: any) => void
  onDragComplete?: (item: any) => void
  onItemDrop?: (item: any, targetItem: any) => void
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

export interface DrawerTitleProps {
  children: React.ReactNode
  className?: string
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
  level?: 1 | 2 | 3 | 4 | 5 | 6
  truncate?: boolean
  ellipsis?: boolean
  maxLines?: number
  showTooltip?: boolean
  tooltipContent?: string
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right'
  tooltipDelay?: number
  onClick?: () => void
  onDoubleClick?: () => void
  onRightClick?: (event: React.MouseEvent) => void
  contextMenuItems?: Array<{
    label: string
    onClick: () => void
    icon?: React.ReactNode
    disabled?: boolean
  }>
  draggable?: boolean
  onDragMove?: (position: { x: number; y: number }) => void
  onDragComplete?: (position: { x: number; y: number }) => void
  swipeable?: boolean
  onSwipe?: (direction: 'left' | 'right' | 'up' | 'down') => void
  resizable?: boolean
  onResize?: (size: { width: number; height: number }) => void
  scrollable?: boolean
  onScroll?: (scrollY: number) => void
  focusable?: boolean
  autoFocus?: boolean
  onFocus?: () => void
  onBlur?: () => void
  tabIndex?: number
  accessibility?: {
    announce?: boolean
    announceMessage?: string
    role?: string
    liveRegion?: 'polite' | 'assertive' | 'off'
  }
}

export interface DrawerDescriptionProps {
  children: React.ReactNode
  className?: string
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
  level?: 1 | 2 | 3 | 4 | 5 | 6
  truncate?: boolean
  ellipsis?: boolean
  maxLines?: number
  showTooltip?: boolean
  tooltipContent?: string
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right'
  tooltipDelay?: number
  onClick?: () => void
  onDoubleClick?: () => void
  onRightClick?: (event: React.MouseEvent) => void
  contextMenuItems?: Array<{
    label: string
    onClick: () => void
    icon?: React.ReactNode
    disabled?: boolean
  }>
  draggable?: boolean
  onDragMove?: (position: { x: number; y: number }) => void
  onDragComplete?: (position: { x: number; y: number }) => void
  swipeable?: boolean
  onSwipe?: (direction: 'left' | 'right' | 'up' | 'down') => void
  resizable?: boolean
  onResize?: (size: { width: number; height: number }) => void
  scrollable?: boolean
  onScroll?: (scrollY: number) => void
  focusable?: boolean
  autoFocus?: boolean
  onFocus?: () => void
  onBlur?: () => void
  tabIndex?: number
  accessibility?: {
    announce?: boolean
    announceMessage?: string
    role?: string
    liveRegion?: 'polite' | 'assertive' | 'off'
  }
}

export interface DrawerCloseProps {
  children: React.ReactNode
  asChild?: boolean
  className?: string
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
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  onDoubleClick?: () => void
  onRightClick?: (event: React.MouseEvent) => void
  contextMenuItems?: Array<{
    label: string
    onClick: () => void
    icon?: React.ReactNode
    disabled?: boolean
  }>
  draggable?: boolean
  onDragMove?: (position: { x: number; y: number }) => void
  onDragComplete?: (position: { x: number; y: number }) => void
  swipeable?: boolean
  onSwipe?: (direction: 'left' | 'right' | 'up' | 'down') => void
  resizable?: boolean
  onResize?: (size: { width: number; height: number }) => void
  scrollable?: boolean
  onScroll?: (scrollY: number) => void
  focusable?: boolean
  autoFocus?: boolean
  onFocus?: () => void
  onBlur?: () => void
  tabIndex?: number
  accessibility?: {
    announce?: boolean
    announceMessage?: string
    role?: string
    liveRegion?: 'polite' | 'assertive' | 'off'
  }
}

export const Drawer: React.FC<DrawerProps> = ({
  open,
  onOpenChange,
  children,
  className
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onOpenChange(false)
      }
    }

    if (open) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [open, onOpenChange])

  if (!open) return null

  return (
    <div className={cn('fixed inset-0 z-50', className)}>
      {children}
    </div>
  )
}

export const DrawerTrigger: React.FC<DrawerTriggerProps> = ({
  children,
  asChild = false,
  className
}) => {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(children.props.className, className)
    })
  }
  
  return (
    <div className={cn('inline-block', className)}>
      {children}
    </div>
  )
}

export const DrawerContent: React.FC<DrawerContentProps> = ({
  children,
  className,
  side = 'right',
  onEscapeKeyDown,
  onInteractOutside
}) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && onInteractOutside) {
      onInteractOutside()
    }
  }

  const sideClasses = {
    top: 'inset-x-0 top-0 h-auto max-h-[80vh] border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
    right: 'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
    bottom: 'inset-x-0 bottom-0 h-auto max-h-[80vh] border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
    left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm'
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div
        className={cn(
          'fixed z-50 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
          sideClasses[side],
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export const DrawerHeader: React.FC<DrawerHeaderProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)}>
      {children}
    </div>
  )
}

export const DrawerFooter: React.FC<DrawerFooterProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}>
      {children}
    </div>
  )
}

export const DrawerTitle: React.FC<DrawerTitleProps> = ({
  children,
  className
}) => {
  return (
    <h2 className={cn('text-lg font-semibold text-foreground', className)}>
      {children}
    </h2>
  )
}

export const DrawerDescription: React.FC<DrawerDescriptionProps> = ({
  children,
  className
}) => {
  return (
    <p className={cn('text-sm text-muted-foreground', className)}>
      {children}
    </p>
  )
}

export const DrawerClose: React.FC<DrawerCloseProps> = ({
  children,
  asChild = false,
  className
}) => {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(children.props.className, className)
    })
  }
  
  return (
    <div className={cn('inline-block', className)}>
      {children}
    </div>
  )
}
