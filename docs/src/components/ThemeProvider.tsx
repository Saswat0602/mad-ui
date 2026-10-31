'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

export type Theme = 'dark' | 'light' | 'system'
export type ThemeStyle = 'monochrome' | 'normal'

export type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  defaultStyle?: ThemeStyle
  storageKey?: string
  styleStorageKey?: string
}

export type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  style: ThemeStyle
  setStyle: (style: ThemeStyle) => void
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
  style: 'monochrome',
  setStyle: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  defaultStyle = 'monochrome',
  storageKey = 'mad-ui-theme',
  styleStorageKey = 'mad-ui-style',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      try {
        const storedTheme = localStorage?.getItem(storageKey) as Theme
        if (storedTheme) return storedTheme
      } catch {
        // Ignore localStorage access errors
      }
    }
    return defaultTheme
  })

  const [style, setStyle] = useState<ThemeStyle>(() => {
    if (typeof window !== 'undefined') {
      try {
        const storedStyle = localStorage?.getItem(styleStorageKey) as ThemeStyle
        if (storedStyle === 'normal' || storedStyle === 'monochrome') return storedStyle
      } catch {
        // Ignore localStorage access errors
      }
    }
    return defaultStyle
  })

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  useEffect(() => {
    const root = window.document.documentElement
    root.setAttribute('data-style', style)
  }, [style])

  const handleSetTheme = (newTheme: Theme) => {
    if (typeof window !== 'undefined') {
      try {
        localStorage?.setItem(storageKey, newTheme)
      } catch {
        // ignore
      }
    }
    setTheme(newTheme)
  }

  const handleSetStyle = (newStyle: ThemeStyle) => {
    if (typeof window !== 'undefined') {
      try {
        localStorage?.setItem(styleStorageKey, newStyle)
      } catch {
        // ignore
      }
    }
    setStyle(newStyle)
  }

  const value = {
    theme,
    setTheme: handleSetTheme,
    style,
    setStyle: handleSetStyle,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
