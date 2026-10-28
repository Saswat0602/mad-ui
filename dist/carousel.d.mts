import React__default from 'react';

interface CarouselProps {
    children: React__default.ReactNode;
    className?: string;
    autoPlay?: boolean;
    interval?: number;
    showArrows?: boolean;
    showDots?: boolean;
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
    infinite?: boolean;
    pauseOnHover?: boolean;
    pauseOnFocus?: boolean;
    swipeable?: boolean;
    draggable?: boolean;
    keyboardNavigation?: boolean;
    showThumbnails?: boolean;
    showCounter?: boolean;
    showFullscreen?: boolean;
    showDownload?: boolean;
    showShare?: boolean;
    onSlideChange?: (index: number) => void;
    onSlideClick?: (index: number) => void;
    onSlideDoubleClick?: (index: number) => void;
    onSlideRightClick?: (index: number, event: React__default.MouseEvent) => void;
    contextMenuItems?: Array<{
        label: string;
        onClick: (index: number) => void;
        icon?: React__default.ReactNode;
        disabled?: boolean;
    }>;
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
interface CarouselContentProps {
    children: React__default.ReactNode;
    className?: string;
}
interface CarouselItemProps {
    children: React__default.ReactNode;
    className?: string;
}
declare const Carousel: React__default.FC<CarouselProps>;
declare const CarouselContent: React__default.FC<CarouselContentProps>;
declare const CarouselItem: React__default.FC<CarouselItemProps>;

export { Carousel, CarouselContent, CarouselItem };
export type { CarouselContentProps, CarouselItemProps, CarouselProps };
