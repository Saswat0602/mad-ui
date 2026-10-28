import * as React from "react"
import { cn, createVariants } from "../../lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined" | "ghost"
  hoverable?: boolean
  clickable?: boolean
}

const cardVariants = createVariants({
  base: "rounded-xl transition-all duration-200 text-zinc-900 dark:text-zinc-100",
  variants: {
    variant: {
      default: "border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700",
      elevated: "border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900 shadow-md hover:shadow-lg dark:shadow-black/40 hover:border-zinc-300 dark:hover:border-zinc-700",
      outlined: "border-2 border-zinc-300 dark:border-zinc-700 bg-transparent shadow-none hover:border-zinc-400 dark:hover:border-zinc-600",
      ghost: "border border-transparent bg-transparent shadow-none hover:bg-zinc-100/80 dark:hover:bg-zinc-800/60",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, hoverable, clickable, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        cardVariants({ variant }),
        hoverable && "hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200",
        clickable && "cursor-pointer active:scale-[0.99] transition-transform select-none",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "text-lg font-semibold leading-none tracking-tight text-zinc-900 dark:text-zinc-100",
        className
      )}
      {...props}
    />
  )
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed", className)}
      {...props}
    />
  )
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0 text-zinc-700 dark:text-zinc-300", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0 text-zinc-600 dark:text-zinc-400", className)}
      {...props}
    />
  )
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>
export type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>
export type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>
export type CardContentProps = React.HTMLAttributes<HTMLDivElement>
export type CardFooterProps = React.HTMLAttributes<HTMLDivElement>