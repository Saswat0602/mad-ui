import React__default from 'react';

interface DialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React__default.ReactNode;
    className?: string;
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
    accessibility?: {
        announce?: boolean;
        announceMessage?: string;
        role?: string;
        liveRegion?: 'polite' | 'assertive' | 'off';
    };
}
declare const Dialog: React__default.FC<DialogProps>;

interface AlertDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React__default.ReactNode;
    className?: string;
}
declare const AlertDialog: React__default.FC<AlertDialogProps>;

interface HoverCardProps {
    children: React__default.ReactNode;
    className?: string;
}
declare const HoverCard: React__default.FC<HoverCardProps>;

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
declare const Collapsible: React__default.FC<CollapsibleProps>;

interface ContextMenuProps {
    children: React__default.ReactNode;
    className?: string;
}
declare const ContextMenu: React__default.FC<ContextMenuProps>;

interface DropdownMenuProps {
    children: React__default.ReactNode;
    className?: string;
}
declare const DropdownMenu: React__default.FC<DropdownMenuProps>;

interface ToggleProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
    pressed?: boolean;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'outline';
}
declare const Toggle: React__default.FC<ToggleProps>;

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

export { AlertDialog, Collapsible, ContextMenu, Dialog, DropdownMenu, HoverCard, Separator, Toggle };
export type { AlertDialogProps, CollapsibleProps, ContextMenuProps, DialogProps, DropdownMenuProps, HoverCardProps, SeparatorProps, ToggleProps };
