'use client'

import * as React from 'react'
import { useTheme } from './ThemeProvider'

interface StyleSwitcherProps {
  className?: string
  variant?: 'compact' | 'full'
}

export function StyleSwitcher({ className = '', variant = 'compact' }: StyleSwitcherProps) {
  const { style, setStyle } = useTheme()

  if (variant === 'full') {
    return (
      <div className={`grid grid-cols-2 gap-1.5 p-1 rounded-lg border border-border/60 bg-muted/40 ${className}`}>
        <button
          type="button"
          onClick={() => setStyle('monochrome')}
          className={`flex items-center justify-center gap-2 px-3 py-2 rounded-md text-xs font-medium transition-all cursor-pointer ${
            style === 'monochrome'
              ? 'bg-background text-foreground shadow-xs font-semibold border border-border/80'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
          }`}
          aria-pressed={style === 'monochrome'}
        >
          <span className="h-2.5 w-2.5 rounded-full bg-foreground border border-muted-foreground/40 shrink-0" />
          <span>B&amp;W (Zinc)</span>
        </button>

        <button
          type="button"
          onClick={() => setStyle('normal')}
          className={`flex items-center justify-center gap-2 px-3 py-2 rounded-md text-xs font-medium transition-all cursor-pointer ${
            style === 'normal'
              ? 'bg-background text-foreground shadow-xs font-semibold border border-border/80'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
          }`}
          aria-pressed={style === 'normal'}
        >
          <span className="h-2.5 w-2.5 rounded-full bg-blue-600 shrink-0" />
          <span>Normal (Blue)</span>
        </button>
      </div>
    )
  }

  return (
    <div
      role="group"
      aria-label="Theme style selector"
      className={`inline-flex items-center rounded-lg border border-border/60 bg-muted/40 p-0.5 text-xs ${className}`}
    >
      <button
        type="button"
        onClick={() => setStyle('monochrome')}
        className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium transition-all cursor-pointer select-none ${
          style === 'monochrome'
            ? 'bg-background text-foreground shadow-xs font-semibold'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        title="Dark/White Monochrome (shadcn Zinc)"
        aria-pressed={style === 'monochrome'}
      >
        <span className="h-2 w-2 rounded-full bg-foreground border border-muted-foreground/40 shrink-0" />
        <span className="hidden sm:inline">B&amp;W</span>
      </button>

      <button
        type="button"
        onClick={() => setStyle('normal')}
        className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium transition-all cursor-pointer select-none ${
          style === 'normal'
            ? 'bg-background text-foreground shadow-xs font-semibold'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        title="Normal Style (Default Vibrant Blue)"
        aria-pressed={style === 'normal'}
      >
        <span className="h-2 w-2 rounded-full bg-blue-600 shrink-0" />
        <span className="hidden sm:inline">Normal</span>
      </button>
    </div>
  )
}
