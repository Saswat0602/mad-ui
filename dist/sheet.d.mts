import React__default from 'react';

interface SheetProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React__default.ReactNode;
    className?: string;
}
interface SheetTriggerProps {
    children: React__default.ReactNode;
    asChild?: boolean;
    className?: string;
}
interface SheetContentProps {
    children: React__default.ReactNode;
    className?: string;
    side?: 'top' | 'right' | 'bottom' | 'left';
    onEscapeKeyDown?: () => void;
    onInteractOutside?: () => void;
}
interface SheetHeaderProps {
    children: React__default.ReactNode;
    className?: string;
}
interface SheetFooterProps {
    children: React__default.ReactNode;
    className?: string;
}
interface SheetTitleProps {
    children: React__default.ReactNode;
    className?: string;
}
interface SheetDescriptionProps {
    children: React__default.ReactNode;
    className?: string;
}
declare const Sheet: React__default.FC<SheetProps>;
declare const SheetTrigger: React__default.FC<SheetTriggerProps>;
declare const SheetContent: React__default.FC<SheetContentProps>;
declare const SheetHeader: React__default.FC<SheetHeaderProps>;
declare const SheetFooter: React__default.FC<SheetFooterProps>;
declare const SheetTitle: React__default.FC<SheetTitleProps>;
declare const SheetDescription: React__default.FC<SheetDescriptionProps>;

export { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger };
export type { SheetContentProps, SheetDescriptionProps, SheetFooterProps, SheetHeaderProps, SheetProps, SheetTitleProps, SheetTriggerProps };
