import React from 'react'
import { cn } from '../../lib/utils'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  shape?: 'circle' | 'square'
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(({
  className,
  src,
  alt,
  fallback,
  size = 'md',
  shape = 'circle',
  children,
  ...props
}, ref) => {
  const [imageError, setImageError] = React.useState(false)

  const sizeClasses = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-12 w-12 text-base',
    xl: 'h-16 w-16 text-lg'
  }
  
  const shapeClasses = {
    circle: 'rounded-full',
    square: 'rounded-xl'
  }

  // If children passed, support declarative Radix/Shadcn compound usage
  if (children) {
    return (
      <div
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
      </div>
    )
  }
  
  return (
    <div
      ref={ref}
      className={cn(
        'relative inline-flex shrink-0 overflow-hidden font-semibold select-none border border-zinc-200/60 dark:border-zinc-800/60',
        sizeClasses[size],
        shapeClasses[shape],
        className
      )}
      {...props}
    >
      {src && !imageError ? (
        <img
          src={src}
          alt={alt || 'Avatar'}
          onError={() => setImageError(true)}
          className={cn(
            'h-full w-full object-cover',
            shapeClasses[shape]
          )}
        />
      ) : (
        <div
          className={cn(
            'flex h-full w-full items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 uppercase tracking-tight',
            shapeClasses[shape]
          )}
        >
          {fallback || alt?.slice(0, 2).toUpperCase() || 'U'}
        </div>
      )}
    </div>
  )
})
Avatar.displayName = 'Avatar'

export const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => (
  <img
    ref={ref}
    className={cn('aspect-square h-full w-full object-cover', className)}
    {...props}
  />
))
AvatarImage.displayName = 'AvatarImage'

export const AvatarFallback = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold uppercase',
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = 'AvatarFallback'

export const AvatarGroup: React.FC<{
  children: React.ReactNode
  className?: string
  max?: number
}> = ({ children, className, max }) => {
  const childrenArray = React.Children.toArray(children)
  const displayCount = max ? Math.min(childrenArray.length, max) : childrenArray.length
  const hiddenCount = max ? Math.max(0, childrenArray.length - max) : 0
  
  return (
    <div className={cn('flex -space-x-2.5 items-center', className)}>
      {childrenArray.slice(0, displayCount).map((child, index) => (
        <div key={index} className="ring-2 ring-background rounded-full shrink-0">
          {child}
        </div>
      ))}
      {hiddenCount > 0 && (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 ring-2 ring-background shrink-0">
          +{hiddenCount}
        </div>
      )}
    </div>
  )
}

export default Avatar
