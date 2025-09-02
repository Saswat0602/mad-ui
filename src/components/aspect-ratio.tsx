import React from 'react'
import { cn } from '../lib/utils'

export interface AspectRatioProps {
  ratio?: number
  children: React.ReactNode
  className?: string
}

export const AspectRatio: React.FC<AspectRatioProps> = ({
  ratio = 16 / 9,
  children,
  className
}) => {
  return (
    <div
      className={cn('relative w-full', className)}
      style={{
        aspectRatio: ratio
      }}
    >
      {children}
    </div>
  )
}
