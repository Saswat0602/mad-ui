import React__default from 'react';

interface CollapsibleProps {
    children: React__default.ReactNode;
    className?: string;
    defaultOpen?: boolean;
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
    disabled?: boolean;
    onToggle?: (isOpen: boolean) => void;
    onExpand?: () => void;
    onCollapse?: () => void;
    animation?: 'slide' | 'fade' | 'scale' | 'none';
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
interface CollapsibleTriggerProps {
    children: React__default.ReactNode;
    asChild?: boolean;
    className?: string;
    onClick?: () => void;
}
interface CollapsibleContentProps {
    children: React__default.ReactNode;
    className?: string;
}
declare const Collapsible: React__default.FC<CollapsibleProps>;
declare const CollapsibleTrigger: React__default.FC<CollapsibleTriggerProps>;
declare const CollapsibleContent: React__default.FC<CollapsibleContentProps & {
    isOpen?: boolean;
}>;

export { Collapsible, CollapsibleContent, CollapsibleTrigger };
export type { CollapsibleContentProps, CollapsibleProps, CollapsibleTriggerProps };
