import React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { cn } from '../../lib/utils'

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  src?: string
  alt?: string
  fallback?: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  shape?: 'circle' | 'square'
}

export const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full object-cover', className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

export const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold uppercase tracking-tight',
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({
  className,
  src,
  alt,
  fallback,
  size = 'md',
  shape = 'circle',
  children,
  ...props
}, ref) => {
  const sizeClasses = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-12 w-12 text-base',
    xl: 'h-16 w-16 text-lg',
  }

  const shapeClasses = {
    circle: 'rounded-full',
    square: 'rounded-xl',
  }

  // If compound children are provided
  if (children) {
    return (
      <AvatarPrimitive.Root
        ref={ref}
        className={cn(
          'relative inline-flex shrink-0 overflow-hidden font-semibold select-none border border-zinc-200/60 dark:border-zinc-800/60',
          sizeClasses[size],
          shapeClasses[shape],
          className
        )}
        {...props}
      >
        {children}
      </AvatarPrimitive.Root>
    )
  }

  // Direct props usage
  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        'relative inline-flex shrink-0 overflow-hidden font-semibold select-none border border-zinc-200/60 dark:border-zinc-800/60',
        sizeClasses[size],
        shapeClasses[shape],
        className
      )}
      {...props}
    >
      {src && <AvatarImage src={src} alt={alt || 'Avatar'} />}
      <AvatarFallback>
        {fallback || (alt ? alt.slice(0, 2).toUpperCase() : 'U')}
      </AvatarFallback>
    </AvatarPrimitive.Root>
  )
})
Avatar.displayName = AvatarPrimitive.Root.displayName

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  max?: number
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  className,
  max,
  ...props
}) => {
  const childrenArray = React.Children.toArray(children)
  const displayCount = max ? Math.min(childrenArray.length, max) : childrenArray.length
  const hiddenCount = max ? Math.max(0, childrenArray.length - max) : 0

  return (
    <div className={cn('flex -space-x-2.5 items-center', className)} {...props}>
      {childrenArray.slice(0, displayCount).map((child, index) => (
        <div key={index} className="ring-2 ring-white dark:ring-zinc-950 rounded-full shrink-0">
          {child}
        </div>
      ))}
      {hiddenCount > 0 && (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 ring-2 ring-white dark:ring-zinc-950 shrink-0">
          +{hiddenCount}
        </div>
      )}
    </div>
  )
}
AvatarGroup.displayName = 'AvatarGroup'

export default Avatar
