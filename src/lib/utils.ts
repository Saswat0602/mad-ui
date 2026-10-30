import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Custom variant system (lightweight alternative to cva)
type VariantConfig<T extends Record<string, Record<string, string>>> = {
  base: string
  variants: T
  defaultVariants?: Partial<{
    [K in keyof T]: keyof T[K]
  }>
}

export function createVariants<T extends Record<string, Record<string, string>>>(
  config: VariantConfig<T>
) {
  return (props?: Partial<{ [K in keyof T]: keyof T[K] }> & { className?: string }) => {
    const { className, ...variantProps } = props || {}

    const variantClasses = Object.keys(config.variants).map((variantKey) => {
      const variantValue = variantProps[variantKey as keyof typeof variantProps] ||
        config.defaultVariants?.[variantKey as keyof typeof config.defaultVariants]

      if (variantValue) {
        return config.variants[variantKey][variantValue as string]
      }
      return ""
    })

    return cn(config.base, ...variantClasses, className)
  }
}

// Platform detection utility
export const isReactNative = typeof navigator === 'undefined' && typeof (globalThis as Record<string, unknown>).global !== 'undefined'

// Platform-specific className handling
export function getPlatformClassName(webClassName: string, nativeStyle?: Record<string, unknown>) {
  if (isReactNative) {
    return nativeStyle || {}
  }
  return webClassName
}

// Platform-specific component props
export type PlatformProps<T> = T & {
  className?: string
  style?: Record<string, unknown>
}

// Compose multiple refs into one
export function composeRefs<T>(...refs: (React.Ref<T> | undefined)[]) {
  return (node: T) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(node)
      } else if (ref != null) {
        (ref as React.MutableRefObject<T>).current = node
      }
    })
  }
}

// Re-export useId from hooks
export { useId } from '../hooks/use-id'

// React import for hooks
import * as React from 'react'
