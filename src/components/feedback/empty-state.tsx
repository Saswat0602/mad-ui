"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface EmptyStateProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  icon?: any
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  variant?: "default" | "dashed" | "outline"
}

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      className,
      icon,
      title,
      description,
      action,
      variant = "default",
      children,
      ...props
    },
    ref
  ) => {
    const hasDirectProps = icon || title || description || action

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center p-8 text-center rounded-xl",
          variant === "dashed" && "border-2 border-dashed border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50",
          variant === "outline" && "border border-zinc-200 dark:border-zinc-800 bg-card",
          variant === "default" && "bg-transparent",
          className
        )}
        {...props}
      >
        {hasDirectProps ? (
          <>
            {icon && <EmptyStateIcon icon={icon} />}
            {title && <EmptyStateTitle>{title}</EmptyStateTitle>}
            {description && <EmptyStateDescription>{description}</EmptyStateDescription>}
            {action && <EmptyStateActions>{action}</EmptyStateActions>}
            {children}
          </>
        ) : (
          children
        )}
      </div>
    )
  }
)

EmptyState.displayName = "EmptyState"

export interface EmptyStateIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: any
}

export const EmptyStateIcon = React.forwardRef<HTMLDivElement, EmptyStateIconProps>(
  ({ className, icon: IconProp, children, ...props }, ref) => {
    const renderIcon = () => {
      if (children) return children
      if (!IconProp) return null
      if (React.isValidElement(IconProp)) return IconProp
      if (typeof IconProp === "function" || (typeof IconProp === "object" && IconProp !== null)) {
        const IconComponent = IconProp as React.ComponentType<{ className?: string }>
        return <IconComponent className="h-6 w-6" />
      }
      return null
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 mb-4 shadow-2xs",
          className
        )}
        {...props}
      >
        {renderIcon()}
      </div>
    )
  }
)

EmptyStateIcon.displayName = "EmptyStateIcon"

export const EmptyStateTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={cn("text-base font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight", className)}
      {...props}
    />
  )
})

EmptyStateTitle.displayName = "EmptyStateTitle"

export const EmptyStateDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("mt-1.5 text-sm text-zinc-500 dark:text-zinc-400 max-w-sm", className)}
      {...props}
    />
  )
})

EmptyStateDescription.displayName = "EmptyStateDescription"

export const EmptyStateActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("mt-6 flex flex-wrap items-center justify-center gap-3", className)}
      {...props}
    />
  )
})

EmptyStateActions.displayName = "EmptyStateActions"
