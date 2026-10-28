import React__default from 'react';

interface SonnerProps {
    toasts: Toast[];
    onDismiss: (id: string) => void;
    className?: string;
    position?: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center';
}
interface ToastProps {
    toast: Toast;
    onDismiss: (id: string) => void;
    className?: string;
}
declare const Sonner: React__default.FC<SonnerProps>;
interface Toast {
    id: string;
    title: string;
    description?: string;
    type?: 'default' | 'success' | 'error' | 'warning' | 'info';
    duration?: number;
    action?: {
        label: string;
        onClick: () => void;
    };
}
declare const Toast: React__default.FC<ToastProps>;

export { Sonner };
export type { SonnerProps };
