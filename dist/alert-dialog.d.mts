import React__default from 'react';

interface AlertDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React__default.ReactNode;
    className?: string;
}
interface AlertDialogTriggerProps {
    children: React__default.ReactNode;
    asChild?: boolean;
    className?: string;
}
interface AlertDialogContentProps {
    children: React__default.ReactNode;
    className?: string;
    onEscapeKeyDown?: () => void;
    onInteractOutside?: () => void;
}
interface AlertDialogHeaderProps {
    children: React__default.ReactNode;
    className?: string;
}
interface AlertDialogFooterProps {
    children: React__default.ReactNode;
    className?: string;
}
interface AlertDialogTitleProps {
    children: React__default.ReactNode;
    className?: string;
}
interface AlertDialogDescriptionProps {
    children: React__default.ReactNode;
    className?: string;
}
interface AlertDialogActionProps {
    children: React__default.ReactNode;
    className?: string;
    onClick?: () => void;
}
interface AlertDialogCancelProps {
    children: React__default.ReactNode;
    className?: string;
    onClick?: () => void;
}
declare const AlertDialog: React__default.FC<AlertDialogProps>;
declare const AlertDialogTrigger: React__default.FC<AlertDialogTriggerProps>;
declare const AlertDialogContent: React__default.FC<AlertDialogContentProps>;
declare const AlertDialogHeader: React__default.FC<AlertDialogHeaderProps>;
declare const AlertDialogFooter: React__default.FC<AlertDialogFooterProps>;
declare const AlertDialogTitle: React__default.FC<AlertDialogTitleProps>;
declare const AlertDialogDescription: React__default.FC<AlertDialogDescriptionProps>;
declare const AlertDialogAction: React__default.FC<AlertDialogActionProps>;
declare const AlertDialogCancel: React__default.FC<AlertDialogCancelProps>;

export { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger };
export type { AlertDialogActionProps, AlertDialogCancelProps, AlertDialogContentProps, AlertDialogDescriptionProps, AlertDialogFooterProps, AlertDialogHeaderProps, AlertDialogProps, AlertDialogTitleProps, AlertDialogTriggerProps };
