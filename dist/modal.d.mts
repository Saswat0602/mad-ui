import * as React from 'react';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    size?: "sm" | "md" | "lg" | "xl" | "full";
    closeOnOverlayClick?: boolean;
    closeOnEscape?: boolean;
    showCloseButton?: boolean;
    fullWidth?: boolean;
    fullHeight?: boolean;
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    borderRadius?: string | number;
    shadow?: "none" | "sm" | "md" | "lg" | "xl";
    overlayColor?: string;
    overlayBlur?: boolean;
    zIndex?: number;
    analyticsId?: string;
    analyticsEvent?: string;
    analyticsData?: Record<string, any>;
    ariaLabel?: string;
    ariaDescribedBy?: string;
    role?: string;
    dataTestId?: string;
    onAnalytics?: (event: string, data?: Record<string, any>) => void;
    tooltip?: string;
    loading?: boolean;
    dismissible?: boolean;
    persistent?: boolean;
    onShow?: () => void;
    onHide?: () => void;
    animation?: 'slide' | 'fade' | 'scale' | 'none';
    animationDuration?: number;
    onAnimationStart?: () => void;
    onAnimationEnd?: () => void;
    theme?: 'light' | 'dark' | 'auto';
    locale?: string;
    rtl?: boolean;
    keyboardDismissible?: boolean;
    onKeyboardDismiss?: (key: string) => void;
    clickable?: boolean;
    onClick?: () => void;
    onDoubleClick?: () => void;
    onRightClick?: (event: React.MouseEvent) => void;
    contextMenuItems?: Array<{
        label: string;
        onClick: () => void;
        icon?: React.ReactNode;
        disabled?: boolean;
    }>;
    draggable?: boolean;
    onDragMove?: (position: {
        x: number;
        y: number;
    }) => void;
    onDragComplete?: (position: {
        x: number;
        y: number;
    }) => void;
    swipeable?: boolean;
    onSwipe?: (direction: 'left' | 'right' | 'up' | 'down') => void;
    resizable?: boolean;
    onResize?: (size: {
        width: number;
        height: number;
    }) => void;
    scrollable?: boolean;
    onScrollChange?: (scrollY: number) => void;
    focusable?: boolean;
    autoFocus?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
    tabIndex?: number;
    accessibility?: {
        announce?: boolean;
        announceMessage?: string;
        role?: string;
        liveRegion?: 'polite' | 'assertive' | 'off';
    };
}
declare const Modal: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>>;

export { Modal };
export type { ModalProps };
