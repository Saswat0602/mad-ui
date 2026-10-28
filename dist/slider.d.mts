import React__default from 'react';

interface SliderProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
    value?: number | [number, number];
    defaultValue?: number | [number, number];
    min?: number;
    max?: number;
    step?: number;
    variant?: 'default' | 'filled' | 'outlined' | 'minimal';
    size?: 'sm' | 'md' | 'lg';
    orientation?: 'horizontal' | 'vertical';
    range?: boolean;
    disabled?: boolean;
    showValue?: boolean;
    showMarks?: boolean;
    marks?: Array<{
        value: number;
        label?: string;
    }>;
    color?: string;
    backgroundColor?: string;
    trackColor?: string;
    thumbColor?: string;
    borderRadius?: string | number;
    shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    fullWidth?: boolean;
    onChange?: (value: number | [number, number]) => void;
    onValueChange?: (value: number | [number, number]) => void;
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
    error?: string;
    success?: boolean;
    validation?: {
        required?: boolean;
        custom?: (value: number | [number, number]) => boolean | string;
    };
    shortcuts?: Array<{
        label: string;
        value: number | [number, number];
        onClick: () => void;
    }>;
    customMarks?: Array<{
        value: number;
        label?: string;
        className?: string;
        tooltip?: string;
    }>;
    onValueHover?: (value: number | [number, number]) => void;
    onValueFocus?: (value: number | [number, number]) => void;
    keyboardNavigation?: boolean;
    autoFocus?: boolean;
    interactive?: boolean;
    clickable?: boolean;
    onValueClick?: (value: number | [number, number]) => void;
    onValueDoubleClick?: (value: number | [number, number]) => void;
    onRightClick?: (value: number | [number, number], event: React__default.MouseEvent) => void;
    contextMenuItems?: Array<{
        label: string;
        onClick: (value: number | [number, number]) => void;
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
    onScrollChange?: (scrollY: number) => void;
    focusable?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
    tabIndex?: number;
    animation?: 'slide' | 'fade' | 'scale' | 'bounce' | 'none';
    animationDuration?: number;
    onAnimationStart?: () => void;
    onAnimationEnd?: () => void;
    theme?: 'light' | 'dark' | 'auto';
    locale?: string;
    rtl?: boolean;
    accessibility?: {
        announce?: boolean;
        announceMessage?: string;
        role?: string;
        liveRegion?: 'polite' | 'assertive' | 'off';
    };
}
declare const Slider: React__default.ForwardRefExoticComponent<SliderProps & React__default.RefAttributes<HTMLDivElement>>;

export { Slider };
export type { SliderProps };
