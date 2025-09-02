import React from 'react'
import { cn } from '../lib/utils'

export interface FormFieldProps {
  name: string
  children: React.ReactNode
  className?: string
}

export interface FormItemProps {
  children: React.ReactNode
  className?: string
}

export interface FormLabelProps {
  children: React.ReactNode
  className?: string
  htmlFor?: string
}

export interface FormControlProps {
  children: React.ReactNode
  className?: string
}

export interface FormDescriptionProps {
  children: React.ReactNode
  className?: string
}

export interface FormMessageProps {
  children?: React.ReactNode
  className?: string
  variant?: 'default' | 'error' | 'success' | 'warning'
}

export interface FormProps {
  children: React.ReactNode
  onSubmit?: (e: React.FormEvent) => void
  className?: string
}

export const Form: React.FC<FormProps> = ({
  children,
  onSubmit,
  className
}) => {
  return (
    <form onSubmit={onSubmit} className={cn('space-y-6', className)}>
      {children}
    </form>
  )
}

export const FormField: React.FC<FormFieldProps> = ({
  name,
  children,
  className
}) => {
  return (
    <div className={cn('space-y-2', className)} data-field={name}>
      {children}
    </div>
  )
}

export const FormItem: React.FC<FormItemProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('space-y-2', className)}>
      {children}
    </div>
  )
}

export const FormLabel: React.FC<FormLabelProps> = ({
  children,
  className,
  htmlFor
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className
      )}
    >
      {children}
    </label>
  )
}

export const FormControl: React.FC<FormControlProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('relative', className)}>
      {children}
    </div>
  )
}

export const FormDescription: React.FC<FormDescriptionProps> = ({
  children,
  className
}) => {
  return (
    <p className={cn('text-sm text-muted-foreground', className)}>
      {children}
    </p>
  )
}

export const FormMessage: React.FC<FormMessageProps> = ({
  children,
  className,
  variant = 'default'
}) => {
  if (!children) return null

  const variantClasses = {
    default: 'text-muted-foreground',
    error: 'text-destructive',
    success: 'text-green-600',
    warning: 'text-yellow-600'
  }

  return (
    <p className={cn('text-sm', variantClasses[variant], className)}>
      {children}
    </p>
  )
}

// Utility components for form validation
export const FormError: React.FC<{ message?: string; className?: string }> = ({
  message,
  className
}) => {
  if (!message) return null
  return <FormMessage variant="error" className={className}>{message}</FormMessage>
}

export const FormSuccess: React.FC<{ message?: string; className?: string }> = ({
  message,
  className
}) => {
  if (!message) return null
  return <FormMessage variant="success" className={className}>{message}</FormMessage>
}

export const FormWarning: React.FC<{ message?: string; className?: string }> = ({
  message,
  className
}) => {
  if (!message) return null
  return <FormMessage variant="warning" className={className}>{message}</FormMessage>
}
