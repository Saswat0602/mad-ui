import React__default from 'react';

interface SidebarProps extends React__default.HTMLAttributes<HTMLDivElement> {
    title?: string;
    subtitle?: string;
    items?: Array<{
        id?: string;
        label: string;
        icon?: any;
        active?: boolean;
        badge?: string | number;
        badgeColor?: string;
        shortcut?: string;
        disabled?: boolean;
        iconSize?: number;
        iconColor?: string;
    }>;
    sections?: Array<{
        title?: string;
        items: Array<{
            id?: string;
            label: string;
            icon?: any;
            active?: boolean;
            badge?: string | number;
            badgeColor?: string;
            shortcut?: string;
            disabled?: boolean;
            iconSize?: number;
            iconColor?: string;
        }>;
    }>;
    logo?: React__default.ReactNode;
    logoSize?: string;
    showAvatar?: boolean;
    avatarUrl?: string;
    userName?: string;
    userRole?: string;
    theme?: "dark" | "light" | "gradient" | "glass";
    width?: string;
    collapsedWidth?: string;
    backgroundColor?: string;
    gradient?: string;
    textColor?: string;
    primaryColor?: string;
    borderRadius?: string;
    shadow?: string;
    padding?: string;
    itemSpacing?: string;
    itemPadding?: string;
    headerSpacing?: string;
    fontSize?: string;
    fontWeight?: string;
    defaultCollapsed?: boolean;
    showToggleButton?: boolean;
    position?: "left" | "right";
    animationType?: "slide" | "fade" | "scale";
    animationDuration?: string;
    hoverEffect?: "lift" | "glow" | "scale" | "none";
    showSearch?: boolean;
    showFooter?: boolean;
    footerContent?: React__default.ReactNode;
    backdrop?: boolean;
    autoCollapse?: boolean;
    persistent?: boolean;
    onItemClick?: (item: any, index: number, sectionIndex?: number) => void;
    onToggle?: (collapsed: boolean) => void;
    onSearch?: (query: string) => void;
    customClasses?: string;
    itemCustomClasses?: string;
}
declare const Sidebar: React__default.ForwardRefExoticComponent<SidebarProps & React__default.RefAttributes<HTMLDivElement>>;

export { Sidebar };
export type { SidebarProps };
