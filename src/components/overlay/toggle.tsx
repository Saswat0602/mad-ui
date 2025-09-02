import React from 'react'
import { cn } from '../../lib/utils'

export interface ToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pressed?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'outline'
}

export const Toggle: React.FC<ToggleProps> = ({
  className,
  pressed = false,
  size = 'md',
  variant = 'default',
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
  
  const sizeClasses = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-3',
    lg: 'h-11 px-8'
  }
  
  const variantClasses = {
    default: pressed
      ? 'bg-accent text-accent-foreground'
      : 'bg-transparent hover:bg-muted hover:text-muted-foreground',
    outline: pressed
      ? 'bg-accent text-accent-foreground border-accent'
      : 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground'
  }
  
  return (
    <button
      type="button"
      aria-pressed={pressed}
      data-state={pressed ? 'on' : 'off'}
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export interface ToggleGroupProps {
  children: React.ReactNode
  className?: string
  orientation?: 'horizontal' | 'vertical'
}

export const ToggleGroup: React.FC<ToggleGroupProps> = ({
  children,
  className,
  orientation = 'horizontal'
}) => {
  const orientationClasses = {
    horizontal: 'inline-flex',
    vertical: 'inline-flex flex-col'
  }
  
  return (
    <div
      role="group"
      className={cn(
        orientationClasses[orientation],
        'rounded-lg border border-input bg-transparent p-1',
        className
      )}
    >
      {children}
    </div>
  )
}
