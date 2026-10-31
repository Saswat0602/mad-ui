"use client"

import * as React from "react"
import { Check, Circle, AlertCircle } from "lucide-react"
import { cn } from "../../lib/utils"

export type TimelineItemStatus = "completed" | "current" | "upcoming" | "error"

export interface TimelineItemData {
  id?: string
  title: React.ReactNode
  description?: React.ReactNode
  time?: React.ReactNode
  status?: TimelineItemStatus
  icon?: any
}

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: TimelineItemData[]
  children?: React.ReactNode
}

export const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, items, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="list"
        aria-label="Timeline events"
        className={cn("relative flex flex-col space-y-6", className)}
        {...props}
      >
        {items
          ? items.map((item, index) => {
              const isLast = index === items.length - 1
              return (
                <TimelineItem key={item.id ?? index} isLast={isLast}>
                  <TimelineNode status={item.status} icon={item.icon} isLast={isLast} />
                  <TimelineContent>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <TimelineTitle>{item.title}</TimelineTitle>
                      {item.time && <TimelineTime>{item.time}</TimelineTime>}
                    </div>
                    {item.description && (
                      <TimelineDescription>{item.description}</TimelineDescription>
                    )}
                  </TimelineContent>
                </TimelineItem>
              )
            })
          : children}
      </div>
    )
  }
)
Timeline.displayName = "Timeline"

export interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  isLast?: boolean
}

export const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, isLast: _isLast, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="listitem"
        className={cn("relative flex items-start gap-4", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TimelineItem.displayName = "TimelineItem"

export interface TimelineNodeProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: TimelineItemStatus
  icon?: any
  isLast?: boolean
}

export const TimelineNode = React.forwardRef<HTMLDivElement, TimelineNodeProps>(
  ({ className, status = "completed", icon, isLast, ...props }, ref) => {
    const statusClasses = {
      completed:
        "bg-blue-600 text-white border-blue-600 dark:bg-blue-500 dark:border-blue-500 ring-4 ring-blue-50 dark:ring-blue-950/40",
      current:
        "bg-background text-blue-600 border-blue-600 ring-4 ring-blue-100 dark:ring-blue-950/80 animate-pulse",
      upcoming:
        "bg-zinc-100 text-zinc-400 border-zinc-300 dark:bg-zinc-800 dark:text-zinc-500 dark:border-zinc-700",
      error:
        "bg-rose-600 text-white border-rose-600 ring-4 ring-rose-50 dark:ring-rose-950/40",
    }[status]

    return (
      <div className="relative flex flex-col items-center">
        <div
          ref={ref}
          role="img"
          aria-label={`Status: ${status}`}
          className={cn(
            "relative z-10 flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold shadow-xs transition-colors shrink-0",
            statusClasses,
            className
          )}
          {...props}
        >
          {icon ? (
            icon
          ) : status === "completed" ? (
            <Check className="h-3.5 w-3.5 stroke-[2.5]" />
          ) : status === "error" ? (
            <AlertCircle className="h-3.5 w-3.5" />
          ) : (
            <Circle className="h-2 w-2 fill-current" />
          )}
        </div>

        {!isLast && (
          <div className="absolute top-7 bottom-[-24px] w-0.5 bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2 left-1/2" />
        )}
      </div>
    )
  }
)
TimelineNode.displayName = "TimelineNode"

export const TimelineContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col flex-1 pt-0.5 min-w-0", className)} {...props} />
))
TimelineContent.displayName = "TimelineContent"

export const TimelineTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn("text-sm font-semibold text-zinc-900 dark:text-zinc-100", className)}
    {...props}
  />
))
TimelineTitle.displayName = "TimelineTitle"

export const TimelineDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed", className)}
    {...props}
  />
))
TimelineDescription.displayName = "TimelineDescription"

export const TimelineTime = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("text-xs font-medium text-zinc-400 dark:text-zinc-500 shrink-0", className)}
    {...props}
  />
))
TimelineTime.displayName = "TimelineTime"
