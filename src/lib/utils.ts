import { type ClassValue, clsx } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

// Platform detection utility
export const isReactNative = typeof navigator === 'undefined' && typeof (globalThis as any).global !== 'undefined'

// Platform-specific className handling
export function getPlatformClassName(webClassName: string, nativeStyle?: any) {
  if (isReactNative) {
    return nativeStyle || {}
  }
  return webClassName
}

// Platform-specific component props
export type PlatformProps<T> = T & {
  className?: string
  style?: any
}
