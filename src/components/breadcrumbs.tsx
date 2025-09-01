import * as React from "react"
import { cn } from "../lib/utils"
import { componentColors } from "../lib/colors"

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
  variant?: "default" | "minimal" | "outlined"
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
            backgroundColor: backgroundColor || color || "var(--bg-card)",
            border: `1px solid ${color || "var(--border-primary)"}`,
            padding: "12px 16px"
          }
        default:
          return {
            backgroundColor: backgroundColor || color || "var(--bg-card)",
            padding: "12px 16px"
          }
      }
    }
    
    // Custom styles
    const customStyles: React.CSSProperties = {
      color: textColor || "var(--text-primary)",
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
          ? (activeColor || "var(--accent-primary)")
          : (textColor || "var(--text-primary)")
      }
      
      const ItemContent = () => (
        <>
          {item.icon && <span className="mr-1">{item.icon}</span>}
          {item.label}
        </>
      )
      
      if (isClickable && !item.disabled) {
        if (item.href) {
          return (
            <a
              href={item.href}
              className={cn(
                "hover:text-blue-600 transition-colors duration-200",
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
                "hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
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
            item.disabled && "text-gray-400 cursor-not-allowed"
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
          "flex items-center space-x-2",
          fullWidth && "w-full",
          className
        )}
        style={customStyles}
        aria-label="Breadcrumb"
        {...props}
      >
        {/* Home icon */}
        {showHomeIcon && (
          <>
            <span
              className={cn(
                "text-gray-500 hover:text-gray-700 transition-colors duration-200",
                sizeClasses[size]
              )}
            >
              {homeIcon || "🏠"}
            </span>
            <span
              className={cn(
                "text-gray-300",
                separatorSizeClasses[size]
              )}
              style={{ color: separatorColor || "var(--text-muted)" }}
            >
              {separator}
            </span>
          </>
        )}
        
        {/* Breadcrumb items */}
        {processedItems.map((item, index) => (
          <React.Fragment key={index}>
            {renderItem(item, index, index === processedItems.length - 1)}
            {index < processedItems.length - 1 && (
              <span
                className={cn(
                  "text-gray-300",
                  separatorSizeClasses[size]
                )}
                style={{ color: separatorColor || "var(--text-muted)" }}
              >
                {separator}
              </span>
            )}
          </React.Fragment>
        ))}
      </nav>
    )
  }
)

Breadcrumbs.displayName = "Breadcrumbs"

export { Breadcrumbs }
