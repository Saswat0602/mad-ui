import React from 'react'
import { cn } from '../../lib/utils'

export interface TypographyProps {
  children: React.ReactNode
  className?: string
}

export interface TypographyH1Props extends TypographyProps {}
export interface TypographyH2Props extends TypographyProps {}
export interface TypographyH3Props extends TypographyProps {}
export interface TypographyH4Props extends TypographyProps {}
export interface TypographyH5Props extends TypographyProps {}
export interface TypographyH6Props extends TypographyProps {}
export interface TypographyPProps extends TypographyProps {}
export interface TypographyBlockquoteProps extends TypographyProps {}
export interface TypographyCodeProps extends TypographyProps {}
export interface TypographyLeadProps extends TypographyProps {}
export interface TypographyLargeProps extends TypographyProps {}
export interface TypographySmallProps extends TypographyProps {}
export interface TypographyMutedProps extends TypographyProps {}

export const TypographyH1: React.FC<TypographyH1Props> = ({
  children,
  className
}) => {
  return (
    <h1 className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)}>
      {children}
    </h1>
  )
}

export const TypographyH2: React.FC<TypographyH2Props> = ({
  children,
  className
}) => {
  return (
    <h2 className={cn('scroll-m-20 border-b border-slate-200 dark:border-slate-600 pb-2 text-3xl font-semibold tracking-tight first:mt-0', className)}>
      {children}
    </h2>
  )
}

export const TypographyH3: React.FC<TypographyH3Props> = ({
  children,
  className
}) => {
  return (
    <h3 className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)}>
      {children}
    </h3>
  )
}

export const TypographyH4: React.FC<TypographyH4Props> = ({
  children,
  className
}) => {
  return (
    <h4 className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)}>
      {children}
    </h4>
  )
}

export const TypographyH5: React.FC<TypographyH5Props> = ({
  children,
  className
}) => {
  return (
    <h5 className={cn('scroll-m-20 text-lg font-semibold tracking-tight', className)}>
      {children}
    </h5>
  )
}

export const TypographyH6: React.FC<TypographyH6Props> = ({
  children,
  className
}) => {
  return (
    <h6 className={cn('scroll-m-20 text-base font-semibold tracking-tight', className)}>
      {children}
    </h6>
  )
}

export const TypographyP: React.FC<TypographyPProps> = ({
  children,
  className
}) => {
  return (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}>
      {children}
    </p>
  )
}

export const TypographyBlockquote: React.FC<TypographyBlockquoteProps> = ({
  children,
  className
}) => {
  return (
    <blockquote className={cn('mt-6 border-l-2 border-slate-200 dark:border-slate-600 pl-6 italic', className)}>
      {children}
    </blockquote>
  )
}

export const TypographyCode: React.FC<TypographyCodeProps> = ({
  children,
  className
}) => {
  return (
    <code className={cn('relative rounded bg-slate-200 dark:bg-slate-600 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold', className)}>
      {children}
    </code>
  )
}

export const TypographyLead: React.FC<TypographyLeadProps> = ({
  children,
  className
}) => {
  return (
    <p className={cn('text-xl text-slate-600 dark:text-slate-400', className)}>
      {children}
    </p>
  )
}

export const TypographyLarge: React.FC<TypographyLargeProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('text-lg font-semibold', className)}>
      {children}
    </div>
  )
}

export const TypographySmall: React.FC<TypographySmallProps> = ({
  children,
  className
}) => {
  return (
    <small className={cn('text-sm font-medium leading-none', className)}>
      {children}
    </small>
  )
}

export const TypographyMuted: React.FC<TypographyMutedProps> = ({
  children,
  className
}) => {
  return (
    <p className={cn('text-sm text-slate-600 dark:text-slate-400', className)}>
      {children}
    </p>
  )
}
