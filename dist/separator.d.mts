import React__default from 'react';

interface SeparatorProps extends React__default.HTMLAttributes<HTMLDivElement> {
    orientation?: 'horizontal' | 'vertical';
    decorative?: boolean;
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
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    borderRadius?: string | number;
    shadow?: 'none' | 'sm' | 'md' | 'lg';
    thickness?: 'thin' | 'medium' | 'thick';
    lineStyle?: 'solid' | 'dashed' | 'dotted' | 'double';
    gradient?: boolean;
    gradientColors?: string[];
    animated?: boolean;
    animation?: 'pulse' | 'wave' | 'glow' | 'none';
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
declare const Separator: React__default.FC<SeparatorProps>;

export { Separator };
export type { SeparatorProps };
