import React__default from 'react';

interface NavigationMenuProps {
    children: React__default.ReactNode;
    className?: string;
}
interface NavigationMenuListProps {
    children: React__default.ReactNode;
    className?: string;
}
interface NavigationMenuItemProps {
    children: React__default.ReactNode;
    className?: string;
}
interface NavigationMenuTriggerProps {
    children: React__default.ReactNode;
    className?: string;
}
interface NavigationMenuContentProps {
    children: React__default.ReactNode;
    className?: string;
}
interface NavigationMenuLinkProps {
    children: React__default.ReactNode;
    className?: string;
    href?: string;
    onClick?: () => void;
}
declare const NavigationMenu: React__default.FC<NavigationMenuProps>;
declare const NavigationMenuList: React__default.FC<NavigationMenuListProps>;
declare const NavigationMenuItem: React__default.FC<NavigationMenuItemProps>;
declare const NavigationMenuTrigger: React__default.FC<NavigationMenuTriggerProps>;
declare const NavigationMenuContent: React__default.FC<NavigationMenuContentProps>;
declare const NavigationMenuLink: React__default.FC<NavigationMenuLinkProps>;

export { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger };
export type { NavigationMenuContentProps, NavigationMenuItemProps, NavigationMenuLinkProps, NavigationMenuListProps, NavigationMenuProps, NavigationMenuTriggerProps };
