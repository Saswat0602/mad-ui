import React from 'react'
import { cn } from '../../lib/utils'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  shape?: 'circle' | 'square'
}

export const Avatar: React.FC<AvatarProps> = ({
  className,
  src,
  alt,
  fallback,
  size = 'md',
  shape = 'circle',
  ...props
}) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  }
  
  const shapeClasses = {
    circle: 'rounded-full',
    square: 'rounded-lg'
  }
  
  const fallbackSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  }
  
  return (
    <div
      className={cn(
        'relative inline-block',
        sizeClasses[size],
        shapeClasses[shape],
        className
      )}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className={cn(
            'h-full w-full object-cover',
            shapeClasses[shape]
          )}
        />
      ) : (
        <div
          className={cn(
            'flex h-full w-full items-center justify-center bg-muted text-muted-foreground',
            shapeClasses[shape],
            fallbackSizeClasses[size]
          )}
        >
          {fallback || 'U'}
        </div>
      )}
    </div>
  )
}

export const AvatarGroup: React.FC<{
  children: React.ReactNode
  className?: string
  max?: number
}> = ({ children, className, max }) => {
  const childrenArray = React.Children.toArray(children)
  const displayCount = max ? Math.min(childrenArray.length, max) : childrenArray.length
  const hiddenCount = max ? Math.max(0, childrenArray.length - max) : 0
  
  return (
    <div className={cn('flex -space-x-2', className)}>
      {childrenArray.slice(0, displayCount).map((child, index) => (
        <div key={index} className="ring-2 ring-background">
          {child}
        </div>
      ))}
      {hiddenCount > 0 && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-xs text-muted-foreground ring-2 ring-background">
          +{hiddenCount}
        </div>
      )}
    </div>
  )
}
