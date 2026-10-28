import React__default from 'react';

interface AspectRatioProps {
    ratio?: number;
    children: React__default.ReactNode;
    className?: string;
}
declare const AspectRatio: React__default.FC<AspectRatioProps>;

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
declare const Carousel: React__default.FC<CarouselProps>;

interface AvatarProps extends React__default.HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    fallback?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    shape?: 'circle' | 'square';
}
declare const Avatar: React__default.FC<AvatarProps>;

interface BadgeProps extends React__default.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning' | 'error' | 'info';
    size?: 'sm' | 'md' | 'lg';
}
declare const Badge: React__default.ForwardRefExoticComponent<BadgeProps & React__default.RefAttributes<HTMLDivElement>>;

interface TypographyProps {
    children: React__default.ReactNode;
    className?: string;
}
interface TypographyH1Props extends TypographyProps {
}
interface TypographyH2Props extends TypographyProps {
}
interface TypographyH3Props extends TypographyProps {
}
interface TypographyH4Props extends TypographyProps {
}
interface TypographyH5Props extends TypographyProps {
}
interface TypographyH6Props extends TypographyProps {
}
interface TypographyPProps extends TypographyProps {
}
interface TypographyBlockquoteProps extends TypographyProps {
}
interface TypographyCodeProps extends TypographyProps {
}
interface TypographyLeadProps extends TypographyProps {
}
interface TypographyLargeProps extends TypographyProps {
}
interface TypographySmallProps extends TypographyProps {
}
interface TypographyMutedProps extends TypographyProps {
}
declare const TypographyH1: React__default.FC<TypographyH1Props>;
declare const TypographyH2: React__default.FC<TypographyH2Props>;
declare const TypographyH3: React__default.FC<TypographyH3Props>;
declare const TypographyH4: React__default.FC<TypographyH4Props>;
declare const TypographyH5: React__default.FC<TypographyH5Props>;
declare const TypographyH6: React__default.FC<TypographyH6Props>;
declare const TypographyP: React__default.FC<TypographyPProps>;
declare const TypographyBlockquote: React__default.FC<TypographyBlockquoteProps>;
declare const TypographyCode: React__default.FC<TypographyCodeProps>;
declare const TypographyLead: React__default.FC<TypographyLeadProps>;
declare const TypographyLarge: React__default.FC<TypographyLargeProps>;
declare const TypographySmall: React__default.FC<TypographySmallProps>;
declare const TypographyMuted: React__default.FC<TypographyMutedProps>;

export { AspectRatio, Avatar, Badge, Carousel, TypographyBlockquote, TypographyCode, TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyH6, TypographyLarge, TypographyLead, TypographyMuted, TypographyP, TypographySmall };
export type { AspectRatioProps, AvatarProps, BadgeProps, CarouselProps, TypographyBlockquoteProps, TypographyCodeProps, TypographyH1Props, TypographyH2Props, TypographyH3Props, TypographyH4Props, TypographyH5Props, TypographyH6Props, TypographyLargeProps, TypographyLeadProps, TypographyMutedProps, TypographyPProps, TypographyProps, TypographySmallProps };
