import React, { useState, useRef, useEffect } from 'react'
import { cn } from '../lib/utils'

export interface CarouselProps {
  children: React.ReactNode
  className?: string
  autoPlay?: boolean
  interval?: number
  showArrows?: boolean
  showDots?: boolean
}

export interface CarouselContentProps {
  children: React.ReactNode
  className?: string
}

export interface CarouselItemProps {
  children: React.ReactNode
  className?: string
}

export interface CarouselPreviousProps {
  className?: string
  onClick?: () => void
}

export interface CarouselNextProps {
  className?: string
  onClick?: () => void
}

export interface CarouselIndicatorProps {
  index: number
  isActive: boolean
  onClick: () => void
  className?: string
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  className,
  autoPlay = false,
  interval = 5000,
  showArrows = true,
  showDots = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const intervalRef = useRef<ReturnType<typeof setInterval>>()
  const childrenArray = React.Children.toArray(children).filter(
    child => React.isValidElement(child) && child.type === CarouselItem
  )

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % childrenArray.length)
  }

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + childrenArray.length) % childrenArray.length)
  }

  const goToIndex = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (isPlaying && autoPlay) {
      intervalRef.current = setInterval(next, interval)
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, autoPlay, interval])

  const handleMouseEnter = () => setIsPlaying(false)
  const handleMouseLeave = () => setIsPlaying(autoPlay)

  return (
    <div
      className={cn('relative w-full', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}
        >
          {childrenArray.map((child, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && childrenArray.length > 1 && (
        <>
          <CarouselPrevious
            className="absolute left-2 top-1/2 -translate-y-1/2"
            onClick={previous}
          />
          <CarouselNext
            className="absolute right-2 top-1/2 -translate-y-1/2"
            onClick={next}
          />
        </>
      )}

      {showDots && childrenArray.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
          {childrenArray.map((_, index) => (
            <CarouselIndicator
              key={index}
              index={index}
              isActive={index === currentIndex}
              onClick={() => goToIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export const CarouselContent: React.FC<CarouselContentProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('flex', className)}>
      {children}
    </div>
  )
}

export const CarouselItem: React.FC<CarouselItemProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('w-full', className)}>
      {children}
    </div>
  )
}

export const CarouselPrevious: React.FC<CarouselPreviousProps> = ({
  className,
  onClick
}) => {
  return (
    <button
      className={cn(
        'inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        className
      )}
      onClick={onClick}
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  )
}

export const CarouselNext: React.FC<CarouselNextProps> = ({
  className,
  onClick
}) => {
  return (
    <button
      className={cn(
        'inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        className
      )}
      onClick={onClick}
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  )
}

export const CarouselIndicator: React.FC<CarouselIndicatorProps> = ({
  index,
  isActive,
  onClick,
  className
}) => {
  return (
    <button
      className={cn(
        'h-2 w-2 rounded-full transition-colors',
        isActive ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground',
        className
      )}
      onClick={onClick}
      aria-label={`Go to slide ${index + 1}`}
    />
  )
}
