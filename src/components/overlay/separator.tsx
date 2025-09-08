import React from 'react'
import { cn } from '../../lib/utils'

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical'
  decorative?: boolean
  // Enterprise features
  analyticsId?: string
  analyticsEvent?: string
  analyticsData?: Record<string, any>
  ariaLabel?: string
  ariaDescribedBy?: string
  role?: string
  dataTestId?: string
  onAnalytics?: (event: string, data?: Record<string, any>) => void
  tooltip?: string
  loading?: boolean
  color?: string
  backgroundColor?: string
  borderColor?: string
  textColor?: string
  borderRadius?: string | number
  shadow?: 'none' | 'sm' | 'md' | 'lg'
  thickness?: 'thin' | 'medium' | 'thick'
  lineStyle?: 'solid' | 'dashed' | 'dotted' | 'double'
  gradient?: boolean
  gradientColors?: string[]
  animated?: boolean
  animation?: 'pulse' | 'wave' | 'glow' | 'none'
  animationDuration?: number
  onAnimationStart?: () => void
  onAnimationEnd?: () => void
  theme?: 'light' | 'dark' | 'auto'
  locale?: string
  rtl?: boolean
  accessibility?: {
    announce?: boolean
    announceMessage?: string
    role?: string
    liveRegion?: 'polite' | 'assertive' | 'off'
  }
}

export const Separator: React.FC<SeparatorProps> = ({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}) => {
  const baseClasses = 'shrink-0 bg-border'
  
  const orientationClasses = {
    horizontal: 'h-px w-full',
    vertical: 'h-full w-px'
  }
  
  const semanticClasses = decorative ? '' : 'mx-2'
  
  return (
    <div
      role={decorative ? 'none' : 'separator'}
      aria-orientation={orientation}
      className={cn(
        baseClasses,
        orientationClasses[orientation],
        semanticClasses,
        className
      )}
      {...props}
    />
  )
}
