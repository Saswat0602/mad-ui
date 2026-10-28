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
  const baseClasses = 'inline-flex items-center justify-center rounded-lg text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none'
  
  const sizeClasses = {
    sm: 'h-8 px-2.5 text-xs',
    md: 'h-9 px-3 text-xs',
    lg: 'h-10 px-4 text-sm'
  }
  
  const variantClasses = {
    default: pressed
      ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-2xs'
      : 'bg-transparent text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100',
    outline: pressed
      ? 'border border-zinc-900 dark:border-zinc-100 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-2xs'
      : 'border border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
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
