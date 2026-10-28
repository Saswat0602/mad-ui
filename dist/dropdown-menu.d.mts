import React__default from 'react';

interface DropdownMenuProps {
    children: React__default.ReactNode;
    className?: string;
}
interface DropdownMenuTriggerProps {
    children: React__default.ReactNode;
    asChild?: boolean;
    className?: string;
}
interface DropdownMenuContentProps {
    children: React__default.ReactNode;
    className?: string;
    align?: 'start' | 'center' | 'end';
    side?: 'top' | 'right' | 'bottom' | 'left';
    sideOffset?: number;
}
interface DropdownMenuItemProps {
    children: React__default.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}
interface DropdownMenuSeparatorProps {
    className?: string;
}
interface DropdownMenuLabelProps {
    children: React__default.ReactNode;
    className?: string;
}
interface DropdownMenuGroupProps {
    children: React__default.ReactNode;
    className?: string;
}
declare const DropdownMenu: React__default.FC<DropdownMenuProps>;
declare const DropdownMenuTrigger: React__default.FC<DropdownMenuTriggerProps>;
declare const DropdownMenuContent: React__default.FC<DropdownMenuContentProps>;
declare const DropdownMenuItem: React__default.FC<DropdownMenuItemProps>;
declare const DropdownMenuSeparator: React__default.FC<DropdownMenuSeparatorProps>;
declare const DropdownMenuLabel: React__default.FC<DropdownMenuLabelProps>;
declare const DropdownMenuGroup: React__default.FC<DropdownMenuGroupProps>;

export { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger };
export type { DropdownMenuContentProps, DropdownMenuGroupProps, DropdownMenuItemProps, DropdownMenuLabelProps, DropdownMenuProps, DropdownMenuSeparatorProps, DropdownMenuTriggerProps };
