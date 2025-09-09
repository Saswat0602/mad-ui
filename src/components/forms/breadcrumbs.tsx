import * as React from "react"
import { cn } from "../../lib/utils"
import { componentColors } from "../../lib/colors"

export interface BreadcrumbItem {
  label: string
  href?: string
  onClick?: () => void
  icon?: React.ReactNode
  disabled?: boolean
}

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[]
  separator?: React.ReactNode
  size?: "sm" | "md" | "lg"
  variant?: "default" | "minimal" | "outlined" | "modern" | "card" | "pill" | "gradient" | "steps"
  color?: string
  backgroundColor?: string
  textColor?: string
  activeColor?: string
  separatorColor?: string
  borderRadius?: string | number
  shadow?: "none" | "sm" | "md" | "lg"
  fullWidth?: boolean
  showHomeIcon?: boolean
  homeIcon?: React.ReactNode
  maxItems?: number
  collapseOnMobile?: boolean
}

const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ 
    className, 
    items,
    separator = "/",
    size = "md",
    variant = "default",
    color,
    backgroundColor,
    textColor,
    activeColor,
    separatorColor,
    borderRadius,
    shadow = "none",
    fullWidth = false,
    showHomeIcon = false,
    homeIcon,
    maxItems,
    collapseOnMobile = true,
    style,
    ...props 
  }, ref) => {
    
    // Size classes
    const sizeClasses = {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    }
    
    const separatorSizeClasses = {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base"
    }
    
    // Shadow classes
    const shadowClasses = {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg"
    }
    
    // Variant styles
    const getVariantStyles = () => {
      switch (variant) {
        case "minimal":
          return {
            backgroundColor: "transparent",
            padding: "0"
          }
        case "outlined":
          return {
            backgroundColor: backgroundColor || "hsl(var(--color-card))",
            border: `1px solid hsl(var(--color-border))`,
            padding: "12px 16px",
            borderRadius: "8px"
          }
        case "modern":
          return {
            backgroundColor: backgroundColor || "hsl(var(--color-card) / 0.8)",
            backdropFilter: "blur(10px)",
            border: `1px solid hsl(var(--color-border) / 0.5)`,
            padding: "16px 20px",
            borderRadius: "12px"
          }
        case "card":
          return {
            backgroundColor: backgroundColor || "hsl(var(--color-card))",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            padding: "16px 20px",
            borderRadius: "12px"
          }
        case "pill":
          return {
            backgroundColor: backgroundColor || "hsl(var(--color-primary) / 0.1)",
            borderRadius: "9999px",
            padding: "8px 16px",
            border: `1px solid hsl(var(--color-primary) / 0.2)`
          }
        case "gradient":
          return {
            background: backgroundColor || "linear-gradient(135deg, hsl(var(--color-primary)) 0%, hsl(var(--color-accent)) 100%)",
            padding: "16px 20px",
            borderRadius: "12px",
            color: "white"
          }
        case "steps":
          return {
            backgroundColor: backgroundColor || "transparent",
            padding: "0"
          }
        default:
          return {
            backgroundColor: backgroundColor || "hsl(var(--color-card))",
            padding: "12px 16px",
            borderRadius: "8px"
          }
      }
    }
    
    // Custom styles
    const customStyles: React.CSSProperties = {
      color: textColor || "hsl(var(--color-foreground))",
      borderRadius: borderRadius,
      ...getVariantStyles(),
      ...style
    }
    
    // Process items (limit if maxItems is set)
    const processedItems = maxItems && items.length > maxItems 
      ? [
          ...items.slice(0, 1),
          { label: "...", disabled: true },
          ...items.slice(-maxItems + 2)
        ]
      : items
    
    // Render breadcrumb item
    const renderItem = (item: BreadcrumbItem, index: number, isLast: boolean) => {
      const isActive = isLast
      const isClickable = item.href || item.onClick
      
      const itemStyles: React.CSSProperties = {
        color: isActive 
          ? (activeColor || "hsl(var(--color-primary))")
          : (textColor || "hsl(var(--color-foreground))")
      }
      
      const ItemContent = () => (
        <>
          {item.icon && <span className="mr-1">{item.icon}</span>}
          {item.label}
        </>
      )

      // Special rendering for steps variant
      if (variant === "steps") {
        return (
          <div className="flex items-center">
            <div className={cn(
              "flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors duration-200",
              isActive 
                ? "bg-primary border-primary text-primary-foreground" 
                : "bg-card border-border text-muted-foreground"
            )}>
              {item.icon || (index + 1)}
            </div>
            <span className={cn(
              "ml-2",
              sizeClasses[size],
              isActive ? "font-semibold text-primary" : "font-medium text-muted-foreground"
            )}>
              {item.label}
            </span>
          </div>
        )
      }
      
      if (isClickable && !item.disabled) {
        if (item.href) {
          return (
            <a
              href={item.href}
              className={cn(
                "hover:text-primary transition-colors duration-200",
                sizeClasses[size],
                "font-medium"
              )}
              style={itemStyles}
            >
              <ItemContent />
            </a>
          )
        } else if (item.onClick) {
          return (
            <button
              onClick={item.onClick}
              className={cn(
                "hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
                sizeClasses[size],
                "font-medium"
              )}
              style={itemStyles}
            >
              <ItemContent />
            </button>
          )
        }
      }
      
      return (
        <span
          className={cn(
            sizeClasses[size],
            isActive ? "font-semibold" : "font-medium",
            item.disabled && "text-muted-foreground cursor-not-allowed"
          )}
          style={itemStyles}
        >
          <ItemContent />
        </span>
      )
    }
    
    return (
      <nav
        ref={ref}
        className={cn(
          variant === "steps" ? "flex items-center space-x-8" : "flex items-center space-x-2",
          fullWidth && "w-full",
          className
        )}
        style={customStyles}
        aria-label="Breadcrumb"
        {...props}
      >
        {/* Home icon */}
        {showHomeIcon && variant !== "steps" && (
          <>
            <span
              className={cn(
                "text-muted-foreground hover:text-foreground transition-colors duration-200",
                sizeClasses[size]
              )}
            >
              {homeIcon || "🏠"}
            </span>
            <span
              className={cn(
                "text-muted-foreground",
                separatorSizeClasses[size]
              )}
              style={{ color: separatorColor || "hsl(var(--color-muted-foreground))" }}
            >
              {separator}
            </span>
          </>
        )}
        
        {/* Breadcrumb items */}
        {processedItems.map((item, index) => (
          <React.Fragment key={index}>
            {renderItem(item, index, index === processedItems.length - 1)}
            {index < processedItems.length - 1 && variant !== "steps" && (
              <span
                className={cn(
                  "text-muted-foreground",
                  separatorSizeClasses[size]
                )}
                style={{ color: separatorColor || "hsl(var(--color-muted-foreground))" }}
              >
                {separator}
              </span>
            )}
            {index < processedItems.length - 1 && variant === "steps" && (
              <div className="flex-1 h-0.5 bg-border mx-4" />
            )}
          </React.Fragment>
        ))}
      </nav>
    )
  }
)

Breadcrumbs.displayName = "Breadcrumbs"

export { Breadcrumbs }
