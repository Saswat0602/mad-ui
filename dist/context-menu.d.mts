import React__default from 'react';

interface ContextMenuProps {
    children: React__default.ReactNode;
    className?: string;
}
interface ContextMenuTriggerProps {
    children: React__default.ReactNode;
    asChild?: boolean;
    className?: string;
}
interface ContextMenuContentProps {
    children: React__default.ReactNode;
    className?: string;
    align?: 'start' | 'center' | 'end';
    side?: 'top' | 'right' | 'bottom' | 'left';
    sideOffset?: number;
}
interface ContextMenuItemProps {
    children: React__default.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}
interface ContextMenuSeparatorProps {
    className?: string;
}
interface ContextMenuLabelProps {
    children: React__default.ReactNode;
    className?: string;
}
interface ContextMenuGroupProps {
    children: React__default.ReactNode;
    className?: string;
}
declare const ContextMenu: React__default.FC<ContextMenuProps>;
declare const ContextMenuTrigger: React__default.FC<ContextMenuTriggerProps>;
declare const ContextMenuContent: React__default.FC<ContextMenuContentProps>;
declare const ContextMenuItem: React__default.FC<ContextMenuItemProps>;
declare const ContextMenuSeparator: React__default.FC<ContextMenuSeparatorProps>;
declare const ContextMenuLabel: React__default.FC<ContextMenuLabelProps>;
declare const ContextMenuGroup: React__default.FC<ContextMenuGroupProps>;

export { ContextMenu, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuTrigger };
export type { ContextMenuContentProps, ContextMenuGroupProps, ContextMenuItemProps, ContextMenuLabelProps, ContextMenuProps, ContextMenuSeparatorProps, ContextMenuTriggerProps };
