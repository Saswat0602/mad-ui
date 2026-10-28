import React__default from 'react';

interface DrawerProps {
    /** Whether the drawer is open */
    isOpen?: boolean;
    /** Callback when drawer should close */
    onClose?: () => void;
    /** Position of the drawer */
    position?: 'right' | 'left' | 'top' | 'bottom';
    /** Size of the drawer */
    size?: 'sm' | 'md' | 'lg' | 'full';
    /** Custom width for left/right drawers */
    width?: string | number;
    /** Custom height for top/bottom drawers */
    height?: string | number;
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
    children: React__default.ReactNode;
    /** Additional props */
    [key: string]: any;
}
declare const Drawer: React__default.FC<DrawerProps>;

export { Drawer };
export type { DrawerProps };
