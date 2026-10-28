import React__default from 'react';

interface NavbarProps extends React__default.HTMLAttributes<HTMLElement> {
    brand?: string;
    brandLogo?: React__default.ReactNode;
    navItems?: Array<{
        id: string;
        label: string;
        icon?: any;
        active?: boolean;
        badge?: string;
        badgeColor?: string;
        dropdown?: Array<{
            label: string;
            icon?: any;
            action?: () => void;
            danger?: boolean;
        }>;
    }>;
    showProfile?: boolean;
    profileImage?: string;
    profileName?: string;
    profileRole?: string;
    profileMenuItems?: Array<{
        label: string;
        icon?: any;
        action?: () => void;
        danger?: boolean;
    }>;
    showSearch?: boolean;
    searchPlaceholder?: string;
    searchWidth?: string;
    onSearch?: (query: string) => void;
    showNotifications?: boolean;
    notificationCount?: number;
    notificationItems?: Array<{
        title: string;
        message: string;
        time: string;
        unread?: boolean;
    }>;
    onNotificationClick?: () => void;
    theme?: "light" | "dark" | "gradient" | "glass" | "colorful";
    position?: "sticky" | "fixed" | "static";
    height?: string;
    backgroundColor?: string;
    textColor?: string;
    primaryColor?: string;
    gradient?: string;
    blur?: boolean;
    shadow?: string;
    borderRadius?: string;
    container?: string;
    padding?: string;
    alignment?: "justify-between" | "justify-center" | "justify-start";
    mobileBreakpoint?: string;
    showMobileMenu?: boolean;
    onMobileToggle?: (open: boolean) => void;
    hideOnScroll?: boolean;
    shrinkOnScroll?: boolean;
    animationDuration?: string;
    showLanguageSwitch?: boolean;
    showThemeToggle?: boolean;
    showCTA?: boolean;
    ctaText?: string;
    ctaAction?: () => void;
    leftContent?: React__default.ReactNode;
    centerContent?: React__default.ReactNode;
    rightContent?: React__default.ReactNode;
    customClasses?: string;
    itemCustomClasses?: string;
    onItemClick?: (item: any, index: number) => void;
    onBrandClick?: () => void;
}
declare const Navbar: React__default.ForwardRefExoticComponent<NavbarProps & React__default.RefAttributes<HTMLElement>>;

export { Navbar };
export type { NavbarProps };
