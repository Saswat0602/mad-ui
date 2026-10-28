import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { cn } from '../../lib/utils'

export interface DrawerProps {
  /** Whether the drawer is open */
  isOpen?: boolean
  /** Callback when drawer should close */
  onClose?: () => void
  /** Position of the drawer */
  position?: 'right' | 'left' | 'top' | 'bottom'
  /** Size of the drawer */
  size?: 'sm' | 'md' | 'lg' | 'full'
  /** Custom width for left/right drawers */
  width?: string | number
  /** Custom height for top/bottom drawers */
  height?: string | number
  /** Whether to show overlay */
  overlay?: boolean
  /** Whether to close on overlay click */
  closeOnOverlayClick?: boolean
  /** Whether to show close button */
  showCloseButton?: boolean
  /** Additional CSS classes */
  className?: string
  /** Overlay CSS classes */
  overlayClassName?: string
  /** Drawer content */
  children: React.ReactNode
  /** Additional props */
  [key: string]: any
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen = false,
  onClose,
  position = 'right',
  size = 'md',
  width,
  height,
  overlay = true,
  closeOnOverlayClick = true,
  showCloseButton = true,
  className = '',
  overlayClassName = '',
  children,
  ...props
}) => {
  const [mounted, setMounted] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Get size classes or custom dimensions
  const getSizeClasses = () => {
    if (width && (position === 'left' || position === 'right')) {
      return { width: typeof width === 'number' ? `${width}px` : width }
    }
    if (height && (position === 'top' || position === 'bottom')) {
      return { height: typeof height === 'number' ? `${height}px` : height }
    }
    
    const sizeClasses = {
      sm: position === 'left' || position === 'right' ? 'w-80' : 'h-80',
      md: position === 'left' || position === 'right' ? 'w-96' : 'h-96',
      lg: position === 'left' || position === 'right' ? 'w-[32rem]' : 'h-[32rem]',
      full: position === 'left' || position === 'right' ? 'w-full' : 'h-full',
    }
    return { className: sizeClasses[size] }
  }

  const sizeProps = getSizeClasses()

  const positions = {
    right: `fixed top-0 right-0 h-full border-l transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`,
    left: `fixed top-0 left-0 h-full border-r transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`,
    top: `fixed top-0 left-0 w-full border-b transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`,
    bottom: `fixed bottom-0 left-0 w-full border-t transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`,
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!mounted || !isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-50 overflow-hidden">
      {overlay && (
        <div
          className={cn(
            'fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300',
            isOpen ? 'opacity-100' : 'opacity-0',
            overlayClassName
          )}
          onClick={closeOnOverlayClick ? onClose : undefined}
        />
      )}
      <div
        ref={drawerRef}
        className={cn(
          positions[position],
          sizeProps.className,
          'bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-2xl z-50 flex flex-col',
          className
        )}
        style={{
          ...sizeProps,
          ...props.style
        }}
        {...props}
      >
        {showCloseButton && (
          <button
            onClick={onClose}
            aria-label="Close drawer"
            className={cn(
              'absolute top-4 p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer z-10',
              position === 'left' ? 'right-4' : 'right-4'
            )}
          >
            <X className="h-4 w-4" />
          </button>
        )}
        <div className={cn('p-6 h-full overflow-y-auto', showCloseButton ? 'pt-14' : '')}>
          {children}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default Drawer