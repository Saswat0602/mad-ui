'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface AccessibleWrapperProps {
  children: React.ReactNode
  className?: string
  role?: string
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
  'aria-expanded'?: boolean
  'aria-selected'?: boolean
  'aria-checked'?: boolean
  'aria-disabled'?: boolean
  'aria-required'?: boolean
  'aria-invalid'?: boolean
  'aria-live'?: 'off' | 'polite' | 'assertive'
  'aria-atomic'?: boolean
  'aria-busy'?: boolean
  'aria-hidden'?: boolean
  'aria-modal'?: boolean
  'aria-multiline'?: boolean
  'aria-multiselectable'?: boolean
  'aria-orientation'?: 'horizontal' | 'vertical'
  'aria-pressed'?: boolean
  'aria-readonly'?: boolean
  'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other'
  'aria-valuemin'?: number
  'aria-valuemax'?: number
  'aria-valuenow'?: number
  'aria-valuetext'?: string
  tabIndex?: number
  onKeyDown?: (event: React.KeyboardEvent) => void
  onFocus?: (event: React.FocusEvent) => void
  onBlur?: (event: React.FocusEvent) => void
}

export function AccessibleWrapper({
  children,
  className,
  role,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  'aria-expanded': ariaExpanded,
  'aria-selected': ariaSelected,
  'aria-checked': ariaChecked,
  'aria-disabled': ariaDisabled,
  'aria-required': ariaRequired,
  'aria-invalid': ariaInvalid,
  'aria-live': ariaLive,
  'aria-atomic': ariaAtomic,
  'aria-busy': ariaBusy,
  'aria-hidden': ariaHidden,
  'aria-modal': ariaModal,
  'aria-multiline': ariaMultiline,
  'aria-multiselectable': ariaMultiselectable,
  'aria-orientation': ariaOrientation,
  'aria-pressed': ariaPressed,
  'aria-readonly': ariaReadonly,
  'aria-sort': ariaSort,
  'aria-valuemin': ariaValueMin,
  'aria-valuemax': ariaValueMax,
  'aria-valuenow': ariaValueNow,
  'aria-valuetext': ariaValueText,
  tabIndex,
  onKeyDown,
  onFocus,
  onBlur,
  ...props
}: AccessibleWrapperProps) {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    // Add common keyboard navigation patterns
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      // Trigger click on the element
      const target = event.target as HTMLElement
      target.click()
    }
    
    onKeyDown?.(event)
  }

  return (
    <div
      className={cn(className)}
      role={role}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      aria-expanded={ariaExpanded}
      aria-selected={ariaSelected}
      aria-checked={ariaChecked}
      aria-disabled={ariaDisabled}
      aria-required={ariaRequired}
      aria-invalid={ariaInvalid}
      aria-live={ariaLive}
      aria-atomic={ariaAtomic}
      aria-busy={ariaBusy}
      aria-hidden={ariaHidden}
      aria-modal={ariaModal}
      aria-multiline={ariaMultiline}
      aria-multiselectable={ariaMultiselectable}
      aria-orientation={ariaOrientation}
      aria-pressed={ariaPressed}
      aria-readonly={ariaReadonly}
      aria-sort={ariaSort}
      aria-valuemin={ariaValueMin}
      aria-valuemax={ariaValueMax}
      aria-valuenow={ariaValueNow}
      aria-valuetext={ariaValueText}
      tabIndex={tabIndex}
      onKeyDown={handleKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
      {...props}
    >
      {children}
    </div>
  )
}

// Keyboard navigation hook
export function useKeyboardNavigation() {
  const [focusedIndex, setFocusedIndex] = React.useState(-1)
  const [items, setItems] = React.useState<HTMLElement[]>([])

  const handleKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        setFocusedIndex((prev) => (prev + 1) % items.length)
        break
      case 'ArrowUp':
        event.preventDefault()
        setFocusedIndex((prev) => (prev - 1 + items.length) % items.length)
        break
      case 'Home':
        event.preventDefault()
        setFocusedIndex(0)
        break
      case 'End':
        event.preventDefault()
        setFocusedIndex(items.length - 1)
        break
      case 'Escape':
        setFocusedIndex(-1)
        break
    }
  }, [items.length])

  React.useEffect(() => {
    if (focusedIndex >= 0 && items[focusedIndex]) {
      items[focusedIndex].focus()
    }
  }, [focusedIndex, items])

  return {
    focusedIndex,
    setFocusedIndex,
    setItems,
    handleKeyDown
  }
}

// Focus trap hook
export function useFocusTrap(isActive: boolean) {
  const containerRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    if (!isActive || !containerRef.current) return

    const container = containerRef.current
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault()
          lastElement?.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault()
          firstElement?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleTabKey)
    firstElement?.focus()

    return () => {
      document.removeEventListener('keydown', handleTabKey)
    }
  }, [isActive])

  return containerRef
}
