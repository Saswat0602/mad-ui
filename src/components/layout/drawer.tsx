import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';

// Base utility classes for consistent styling
const baseClasses = {
  transition: 'transition-all duration-300 ease-in-out',
  overlay: 'fixed inset-0 bg-black/50 z-40',
  focusRing: 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
};

export interface DrawerProps {
  /** Whether the drawer is open */
  isOpen?: boolean;
  /** Callback when drawer should close */
  onClose?: () => void;
  /** Position of the drawer */
  position?: 'right' | 'left' | 'top' | 'bottom';
  /** Size of the drawer */
  size?: 'sm' | 'md' | 'lg' | 'full';
  /** Whether to show overlay */
  overlay?: boolean;
  /** Whether to close on overlay click */
  closeOnOverlayClick?: boolean;
  /** Whether to show close button */
  showCloseButton?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Overlay CSS classes */
  overlayClassName?: string;
  /** Drawer content */
  children: React.ReactNode;
  /** Additional props */
  [key: string]: any;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen = false,
  onClose,
  position = 'right',
  size = 'md',
  overlay = true,
  closeOnOverlayClick = true,
  showCloseButton = true,
  className = '',
  overlayClassName = '',
  children,
  ...props
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  const sizes = {
    sm: position === 'left' || position === 'right' ? 'w-80' : 'h-80',
    md: position === 'left' || position === 'right' ? 'w-96' : 'h-96',
    lg: position === 'left' || position === 'right' ? 'w-[32rem]' : 'h-[32rem]',
    full: position === 'left' || position === 'right' ? 'w-full' : 'h-full',
  };

  const positions = {
    right: `fixed top-0 right-0 h-full transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`,
    left: `fixed top-0 left-0 h-full transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`,
    top: `fixed top-0 left-0 w-full transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}`,
    bottom: `fixed bottom-0 left-0 w-full transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`,
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {overlay && (
        <div
          className={cn(baseClasses.overlay, baseClasses.transition, overlayClassName)}
          onClick={closeOnOverlayClick ? onClose : undefined}
        />
      )}
      <div
        ref={drawerRef}
        className={cn(
          positions[position],
          sizes[size],
          'bg-white shadow-xl z-50',
          baseClasses.transition,
          className
        )}
        {...props}
      >
        {showCloseButton && (
          <button
            onClick={onClose}
            className={cn(
              'absolute top-4 p-2 rounded-md hover:bg-gray-100',
              position === 'left' ? 'right-4' : 'left-4',
              baseClasses.focusRing
            )}
          >
            <X size={20} />
          </button>
        )}
        <div className={cn('p-6 h-full overflow-y-auto', showCloseButton ? 'pt-16' : '')}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Drawer;