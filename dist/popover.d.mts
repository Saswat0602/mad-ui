import * as React from 'react';

interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    trigger: React.ReactNode;
    children: React.ReactNode;
    placement?: "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end";
    size?: "sm" | "md" | "lg" | "xl";
    variant?: "default" | "outlined" | "filled";
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    borderRadius?: string | number;
    shadow?: "none" | "sm" | "md" | "lg" | "xl";
    arrow?: boolean;
    arrowColor?: string;
    offset?: number;
    closeOnClickOutside?: boolean;
    closeOnEscape?: boolean;
    showCloseButton?: boolean;
    zIndex?: number;
    animation?: "fade" | "slide" | "scale" | "none";
    delay?: number;
}
declare const Popover: React.ForwardRefExoticComponent<PopoverProps & React.RefAttributes<HTMLDivElement>>;

export { Popover };
export type { PopoverProps };
