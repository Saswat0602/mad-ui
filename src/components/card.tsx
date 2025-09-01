import * as React from "react"
import { cn } from "../lib/utils"
import { componentColors } from "../lib/colors"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined" | "filled"
  size?: "sm" | "md" | "lg"
  color?: string
  backgroundColor?: string
  borderColor?: string
  textColor?: string
  borderRadius?: string | number
  shadow?: "none" | "sm" | "md" | "lg" | "xl"
  fullWidth?: boolean
  padding?: string | number
  margin?: string | number
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: string | number
  backgroundColor?: string
  borderBottom?: boolean
  borderColor?: string
}

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: "sm" | "md" | "lg" | "xl"
  color?: string
  weight?: "normal" | "medium" | "semibold" | "bold"
}

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  color?: string
  size?: "xs" | "sm" | "md" | "lg"
}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: string | number
  backgroundColor?: string
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: string | number
  backgroundColor?: string
  borderTop?: boolean
  borderColor?: string
  justifyContent?: "start" | "center" | "end" | "between" | "around"
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className, 
    variant = "default", 
    size = "md",
    color,
    backgroundColor,
    borderColor,
    textColor,
    borderRadius,
    shadow = "sm",
    fullWidth = false,
    padding,
    margin,
    style,
    ...props 
  }, ref) => {
    
    // Size classes
    const sizeClasses = {
      sm: "p-3",
      md: "p-4",
      lg: "p-6"
    }
    
    // Shadow classes
    const shadowClasses = {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl"
    }
    
    // Get default colors
    const defaultColors = componentColors.card[variant as keyof typeof componentColors.card] || componentColors.card.default
    
    // Custom styles
    const customStyles: React.CSSProperties = {
      backgroundColor: backgroundColor || color || defaultColors.bg,
      color: textColor || "var(--text-primary)",
      borderColor: borderColor || defaultColors.border,
      borderWidth: variant === "outlined" ? "1px" : "0",
      borderStyle: "solid",
      borderRadius: borderRadius,
      width: fullWidth ? "100%" : undefined,
      padding: padding,
      margin: margin,
      ...style
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          "ui-card",
          sizeClasses[size],
          shadowClasses[shadow],
          fullWidth && "w-full",
          className
        )}
        style={customStyles}
        {...props}
      />
    )
  }
)

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ 
    className, 
    padding,
    backgroundColor,
    borderBottom = false,
    borderColor,
    style,
    ...props 
  }, ref) => {
    
    const customStyles: React.CSSProperties = {
      backgroundColor,
      borderBottom: borderBottom ? `1px solid ${borderColor || "var(--border-primary)"}` : "none",
      padding: padding,
      ...style
    }
    
    return (
      <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5", className)}
        style={customStyles}
        {...props}
      />
    )
  }
)

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ 
    className, 
    size = "lg",
    color,
    weight = "semibold",
    style,
    ...props 
  }, ref) => {
    
    const sizeClasses = {
      sm: "text-lg",
      md: "text-xl",
      lg: "text-2xl",
      xl: "text-3xl"
    }
    
    const weightClasses = {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold"
    }
    
    const customStyles: React.CSSProperties = {
      color: color || "var(--text-primary)",
      ...style
    }
    
    return (
      <h3
        ref={ref}
        className={cn(
          sizeClasses[size],
          weightClasses[weight],
          "leading-none tracking-tight",
          className
        )}
        style={customStyles}
        {...props}
      />
    )
  }
)

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ 
    className, 
    color,
    size = "sm",
    style,
    ...props 
  }, ref) => {
    
    const sizeClasses = {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    }
    
    const customStyles: React.CSSProperties = {
      color: color || "var(--text-muted)",
      ...style
    }
    
    return (
      <p
        ref={ref}
        className={cn(
          sizeClasses[size],
          "text-muted-foreground",
          className
        )}
        style={customStyles}
        {...props}
      />
    )
  }
)

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ 
    className, 
    padding,
    backgroundColor,
    style,
    ...props 
  }, ref) => {
    
    const customStyles: React.CSSProperties = {
      backgroundColor,
      padding: padding,
      ...style
    }
    
    return (
      <div 
        ref={ref} 
        className={cn("pt-0", className)}
        style={customStyles}
        {...props} 
      />
    )
  }
)

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ 
    className, 
    padding,
    backgroundColor,
    borderTop = false,
    borderColor,
    justifyContent = "start",
    style,
    ...props 
  }, ref) => {
    
    const justifyContentClasses = {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around"
    }
    
    const customStyles: React.CSSProperties = {
      backgroundColor,
      borderTop: borderTop ? `1px solid ${borderColor || "var(--border-primary)"}` : "none",
      padding: padding,
      ...style
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center pt-0",
          justifyContentClasses[justifyContent],
          className
        )}
        style={customStyles}
        {...props}
      />
    )
  }
)

CardHeader.displayName = "CardHeader"
CardTitle.displayName = "CardTitle"
CardDescription.displayName = "CardDescription"
CardContent.displayName = "CardContent"
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
