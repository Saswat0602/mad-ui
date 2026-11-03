import * as React from "react"
import { cn } from "../../lib/utils"
import { componentColors } from "../../lib/colors"
import { Slot } from "../../lib/slot"
import { ChevronRight, MoreHorizontal, Home } from "../../icons"

export interface BreadcrumbItemData {
  label: string
  href?: string
  onClick?: () => void
  icon?: React.ReactNode
  disabled?: boolean
}

export type BreadcrumbsItem = BreadcrumbItemData

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItemData[]
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
            backgroundColor: backgroundColor || "hsl(var(--color-card, var(--card)))",
            border: `1px solid hsl(var(--color-border, var(--border)))`,
            padding: "8px 14px",
            borderRadius: borderRadius || "8px"
          }
        case "modern":
          return {
            backgroundColor: backgroundColor || "hsl(var(--color-muted, var(--muted)) / 0.5)",
            border: `1px solid hsl(var(--color-border, var(--border)) / 0.7)`,
            padding: "10px 16px",
            borderRadius: borderRadius || "10px"
          }
        case "card":
          return {
            backgroundColor: backgroundColor || "hsl(var(--color-card, var(--card)))",
            border: `1px solid hsl(var(--color-border, var(--border)))`,
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)",
            padding: "10px 16px",
            borderRadius: borderRadius || "10px"
          }
        case "pill":
          return {
            backgroundColor: backgroundColor || "hsl(var(--color-muted, var(--muted)) / 0.6)",
            borderRadius: borderRadius || "9999px",
            padding: "6px 14px",
            border: `1px solid hsl(var(--color-border, var(--border)) / 0.8)`
          }
        case "gradient":
          return {
            backgroundColor: backgroundColor || "hsl(var(--color-muted, var(--muted)) / 0.4)",
            border: `1px solid hsl(var(--color-border, var(--border)))`,
            padding: "10px 16px",
            borderRadius: borderRadius || "10px"
          }
        case "steps":
          return {
            backgroundColor: backgroundColor || "transparent",
            padding: "0"
          }
        default:
          return {
            backgroundColor: backgroundColor || "transparent",
            padding: "4px 0"
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
    const renderItem = (item: BreadcrumbItemData, index: number, isLast: boolean) => {
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
                "inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200",
                sizeClasses[size]
              )}
            >
              {homeIcon || <Home className="w-3.5 h-3.5" />}
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

// Composable Shadcn/Radix Compound Components
export const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = "Breadcrumb"

export const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"

export const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

export const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

export const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-normal text-foreground", className)}
    {...props}
  />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

export const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

export const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis"

// Attach compound subcomponents to Breadcrumbs
;(Breadcrumbs as any).List = BreadcrumbList
;(Breadcrumbs as any).Item = BreadcrumbItem
;(Breadcrumbs as any).Link = BreadcrumbLink
;(Breadcrumbs as any).Page = BreadcrumbPage
;(Breadcrumbs as any).Separator = BreadcrumbSeparator
;(Breadcrumbs as any).Ellipsis = BreadcrumbEllipsis

export default Breadcrumbs
export {
  Breadcrumbs,
}
