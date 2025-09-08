import * as React from "react"
import { cn } from "../../lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined" | "filled" | "glass" | "gradient"
  elevation?: "none" | "sm" | "md" | "lg" | "xl"
  interactive?: boolean
  // Enterprise features
  analyticsId?: string
  analyticsEvent?: string
  analyticsData?: Record<string, any>
  ariaLabel?: string
  ariaDescribedBy?: string
  role?: string
  dataTestId?: string
  onAnalytics?: (event: string, data?: Record<string, any>) => void
  loading?: boolean
  disabled?: boolean
  draggable?: boolean
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void
  onDragEnd?: (e: React.DragEvent<HTMLDivElement>) => void
  onDrop?: (e: React.DragEvent<HTMLDivElement>) => void
  tooltip?: string
  badge?: string | number
  badgeColor?: "default" | "primary" | "secondary" | "success" | "warning" | "error"
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className, 
    variant = "default", 
    elevation = "sm", 
    interactive = false,
    // Enterprise features
    analyticsId,
    analyticsEvent,
    analyticsData,
    ariaLabel,
    ariaDescribedBy,
    role,
    dataTestId,
    onAnalytics,
    loading = false,
    disabled = false,
    draggable = false,
    onDragStart,
    onDragEnd,
    onDrop,
    tooltip,
    badge,
    badgeColor = "default",
    ...props 
  }, ref) => {
    
    // Analytics tracking
    const trackAnalytics = React.useCallback((event: string, data?: Record<string, any>) => {
      if (onAnalytics && analyticsId) {
        onAnalytics(event, {
          component: 'Card',
          analyticsId,
          ...analyticsData,
          ...data
        })
      }
    }, [onAnalytics, analyticsId, analyticsData])
    
    // Base classes with Material Design improvements and proper visibility
    const baseClasses = "rounded-xl border transition-all duration-300 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 relative"
    
    // Variant classes with Material Design elevations and proper visibility
    const variantClasses = {
      default: "border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md",
      elevated: "border-0 shadow-lg hover:shadow-xl bg-white dark:bg-slate-800",
      outlined: "border-2 border-slate-300 dark:border-slate-600 shadow-none hover:shadow-sm",
      filled: "border-0 bg-slate-50 dark:bg-slate-700 shadow-sm hover:shadow-md",
      glass: "border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl",
      gradient: "border-0 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 shadow-lg hover:shadow-xl"
    }
    
    // Additional elevation classes
    const elevationClasses = {
      none: "shadow-none",
      sm: "shadow-sm hover:shadow-md",
      md: "shadow-md hover:shadow-lg",
      lg: "shadow-lg hover:shadow-xl",
      xl: "shadow-xl hover:shadow-2xl"
    }
    
    // Badge color classes
    const badgeColorClasses = {
      default: "bg-slate-500 text-white",
      primary: "bg-blue-500 text-white",
      secondary: "bg-slate-600 text-white",
      success: "bg-green-500 text-white",
      warning: "bg-yellow-500 text-white",
      error: "bg-red-500 text-white"
    }
    
    // Event handlers
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || loading) return
      trackAnalytics('card_click', { variant, elevation })
      props.onClick?.(e)
    }
    
    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      trackAnalytics('card_hover', { variant, elevation })
      props.onMouseEnter?.(e)
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          elevationClasses[elevation],
          interactive && !disabled && !loading && "cursor-pointer hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300",
          disabled && "opacity-50 cursor-not-allowed",
          loading && "opacity-75 cursor-wait",
          className
        )}
        // Enterprise accessibility features
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        role={role || (interactive ? "button" : undefined)}
        data-testid={dataTestId}
        // Enterprise interaction features
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        draggable={draggable}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDrop={onDrop}
        {...props}
      >
        {/* Badge */}
        {badge && (
          <div className={cn(
            "absolute -top-2 -right-2 px-2 py-1 text-xs font-bold rounded-full z-10",
            badgeColorClasses[badgeColor]
          )}>
            {badge}
          </div>
        )}
        
        {/* Loading Overlay */}
        {loading && (
          <div className="absolute inset-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center z-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        )}
        
        {/* Tooltip */}
        {tooltip && (
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 whitespace-nowrap">
            {tooltip}
          </div>
        )}
      </div>
    )
  }
)

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
)

const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
)

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-slate-600 dark:text-slate-400", className)}
      {...props}
    />
  )
)

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn("p-6 pt-0", className)} 
      {...props} 
    />
  )
)

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
)

Card.displayName = "Card"
CardHeader.displayName = "CardHeader"
CardTitle.displayName = "CardTitle"
CardDescription.displayName = "CardDescription"
CardContent.displayName = "CardContent"
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }