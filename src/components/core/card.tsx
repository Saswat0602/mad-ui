import * as React from "react"
import { cn, createVariants } from "../../lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined" | "ghost"
  hoverable?: boolean
  clickable?: boolean
}

const cardVariants = createVariants({
  base: "rounded-xl bg-card text-card-foreground transition-all duration-200",
  variants: {
    variant: {
      default: "border border-border/80 bg-card shadow-xs",
      elevated: "border border-border/50 bg-card shadow-md hover:shadow-lg",
      outlined: "border-2 border-border bg-transparent shadow-none",
      ghost: "border-0 shadow-none bg-transparent",
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
        hoverable && "hover:shadow-lg hover:-translate-y-1",
        clickable && "cursor-pointer active:scale-[0.98]",
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
        "text-xl font-semibold leading-none tracking-tight text-foreground",
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
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
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