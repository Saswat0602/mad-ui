import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
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
