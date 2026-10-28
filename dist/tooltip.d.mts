import React__default from 'react';

interface TooltipProps {
    content: React__default.ReactNode;
    children: React__default.ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
    delay?: number;
    className?: string;
    contentClassName?: string;
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
    onRightClick?: (event: React__default.MouseEvent) => void;
    contextMenuItems?: Array<{
        label: string;
        onClick: () => void;
        icon?: React__default.ReactNode;
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
    onScroll?: (scrollY: number) => void;
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
declare const Tooltip: React__default.FC<TooltipProps>;

export { Tooltip };
export type { TooltipProps };
