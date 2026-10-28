import React__default from 'react';

interface MenubarProps {
    children: React__default.ReactNode;
    className?: string;
}
interface MenubarMenuProps {
    children: React__default.ReactNode;
    className?: string;
}
interface MenubarTriggerProps {
    children: React__default.ReactNode;
    className?: string;
}
interface MenubarContentProps {
    children: React__default.ReactNode;
    className?: string;
    align?: 'start' | 'center' | 'end';
    side?: 'top' | 'right' | 'bottom' | 'left';
    sideOffset?: number;
}
interface MenubarItemProps {
    children: React__default.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}
interface MenubarSeparatorProps {
    className?: string;
}
interface MenubarLabelProps {
    children: React__default.ReactNode;
    className?: string;
}
interface MenubarGroupProps {
    children: React__default.ReactNode;
    className?: string;
}
declare const Menubar: React__default.FC<MenubarProps>;
declare const MenubarMenu: React__default.FC<MenubarMenuProps>;
declare const MenubarTrigger: React__default.FC<MenubarTriggerProps>;
declare const MenubarContent: React__default.FC<MenubarContentProps>;
declare const MenubarItem: React__default.FC<MenubarItemProps>;
declare const MenubarSeparator: React__default.FC<MenubarSeparatorProps>;
declare const MenubarLabel: React__default.FC<MenubarLabelProps>;
declare const MenubarGroup: React__default.FC<MenubarGroupProps>;

export { Menubar, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarSeparator, MenubarTrigger };
export type { MenubarContentProps, MenubarGroupProps, MenubarItemProps, MenubarLabelProps, MenubarMenuProps, MenubarProps, MenubarSeparatorProps, MenubarTriggerProps };
