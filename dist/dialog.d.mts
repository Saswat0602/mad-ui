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
interface DialogTriggerProps {
    children: React__default.ReactNode;
    asChild?: boolean;
    className?: string;
}
interface DialogContentProps {
    children: React__default.ReactNode;
    className?: string;
    onEscapeKeyDown?: () => void;
    onInteractOutside?: () => void;
}
interface DialogHeaderProps {
    children: React__default.ReactNode;
    className?: string;
}
interface DialogFooterProps {
    children: React__default.ReactNode;
    className?: string;
}
interface DialogTitleProps {
    children: React__default.ReactNode;
    className?: string;
}
interface DialogDescriptionProps {
    children: React__default.ReactNode;
    className?: string;
}
declare const Dialog: React__default.FC<DialogProps>;
declare const DialogTrigger: React__default.FC<DialogTriggerProps>;
declare const DialogContent: React__default.FC<DialogContentProps>;
declare const DialogHeader: React__default.FC<DialogHeaderProps>;
declare const DialogFooter: React__default.FC<DialogFooterProps>;
declare const DialogTitle: React__default.FC<DialogTitleProps>;
declare const DialogDescription: React__default.FC<DialogDescriptionProps>;

export { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger };
export type { DialogContentProps, DialogDescriptionProps, DialogFooterProps, DialogHeaderProps, DialogProps, DialogTitleProps, DialogTriggerProps };
