import * as React from 'react';
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

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    navbar?: NavbarProps;
    sidebar?: SidebarProps;
    children: React.ReactNode;
    sidebarCollapsed?: boolean;
    onSidebarCollapsedChange?: (collapsed: boolean) => void;
    showNavbar?: boolean;
    showSidebar?: boolean;
    navbarHeight?: number;
    sidebarWidth?: number;
    sidebarCollapsedWidth?: number;
    contentPadding?: string;
    contentMaxWidth?: string;
    fullHeight?: boolean;
    fixedNavbar?: boolean;
    fixedSidebar?: boolean;
    overlaySidebar?: boolean;
    mobileBreakpoint?: number;
}
declare const Layout: React.ForwardRefExoticComponent<LayoutProps & React.RefAttributes<HTMLDivElement>>;

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    size?: "sm" | "md" | "lg" | "xl" | "full";
    closeOnOverlayClick?: boolean;
    closeOnEscape?: boolean;
    showCloseButton?: boolean;
    fullWidth?: boolean;
    fullHeight?: boolean;
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    borderRadius?: string | number;
    shadow?: "none" | "sm" | "md" | "lg" | "xl";
    overlayColor?: string;
    overlayBlur?: boolean;
    zIndex?: number;
    analyticsId?: string;
    analyticsEvent?: string;
    analyticsData?: Record<string, any>;
    ariaLabel?: string;
    ariaDescribedBy?: string;
    role?: string;
    dataTestId?: string;
    onAnalytics?: (event: string, data?: Record<string, any>) => void;
    tooltip?: string;
    loading?: boolean;
    dismissible?: boolean;
    persistent?: boolean;
    onShow?: () => void;
    onHide?: () => void;
    animation?: 'slide' | 'fade' | 'scale' | 'none';
    animationDuration?: number;
    onAnimationStart?: () => void;
    onAnimationEnd?: () => void;
    theme?: 'light' | 'dark' | 'auto';
    locale?: string;
    rtl?: boolean;
    keyboardDismissible?: boolean;
    onKeyboardDismiss?: (key: string) => void;
    clickable?: boolean;
    onClick?: () => void;
    onDoubleClick?: () => void;
    onRightClick?: (event: React.MouseEvent) => void;
    contextMenuItems?: Array<{
        label: string;
        onClick: () => void;
        icon?: React.ReactNode;
        disabled?: boolean;
    }>;
    draggable?: boolean;
    onDragMove?: (position: {
        x: number;
        y: number;
    }) => void;
    onDragComplete?: (position: {
        x: number;
        y: number;
    }) => void;
    swipeable?: boolean;
    onSwipe?: (direction: 'left' | 'right' | 'up' | 'down') => void;
    resizable?: boolean;
    onResize?: (size: {
        width: number;
        height: number;
    }) => void;
    scrollable?: boolean;
    onScrollChange?: (scrollY: number) => void;
    focusable?: boolean;
    autoFocus?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
    tabIndex?: number;
    accessibility?: {
        announce?: boolean;
        announceMessage?: string;
        role?: string;
        liveRegion?: 'polite' | 'assertive' | 'off';
    };
}
declare const Modal: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>>;

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

interface TooltipProps {
    content: React__default.ReactNode;
    children: React__default.ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
    delay?: number;
    className?: string;
    contentClassName?: string;
    analyticsId?: string;
    analyticsEvent?: string;
    analyticsData?: Record<string, any>;
    ariaLabel?: string;
    ariaDescribedBy?: string;
    role?: string;
    dataTestId?: string;
    onAnalytics?: (event: string, data?: Record<string, any>) => void;
    tooltip?: string;
    loading?: boolean;
    dismissible?: boolean;
    persistent?: boolean;
    onShow?: () => void;
    onHide?: () => void;
    animation?: 'slide' | 'fade' | 'scale' | 'none';
    animationDuration?: number;
    onAnimationStart?: () => void;
    onAnimationEnd?: () => void;
    theme?: 'light' | 'dark' | 'auto';
    locale?: string;
    rtl?: boolean;
    keyboardDismissible?: boolean;
    onKeyboardDismiss?: (key: string) => void;
    clickable?: boolean;
    onClick?: () => void;
    onDoubleClick?: () => void;
    onRightClick?: (event: React__default.MouseEvent) => void;
    contextMenuItems?: Array<{
        label: string;
        onClick: () => void;
        icon?: React__default.ReactNode;
        disabled?: boolean;
    }>;
    draggable?: boolean;
    onDragMove?: (position: {
        x: number;
        y: number;
    }) => void;
    onDragComplete?: (position: {
        x: number;
        y: number;
    }) => void;
    swipeable?: boolean;
    onSwipe?: (direction: 'left' | 'right' | 'up' | 'down') => void;
    resizable?: boolean;
    onResize?: (size: {
        width: number;
        height: number;
    }) => void;
    scrollable?: boolean;
    onScroll?: (scrollY: number) => void;
    focusable?: boolean;
    autoFocus?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
    tabIndex?: number;
    accessibility?: {
        announce?: boolean;
        announceMessage?: string;
        role?: string;
        liveRegion?: 'polite' | 'assertive' | 'off';
    };
}
declare const Tooltip: React__default.FC<TooltipProps>;

interface SheetProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React__default.ReactNode;
    className?: string;
}
declare const Sheet: React__default.FC<SheetProps>;

interface DrawerProps {
    /** Whether the drawer is open */
    isOpen?: boolean;
    /** Callback when drawer should close */
    onClose?: () => void;
    /** Position of the drawer */
    position?: 'right' | 'left' | 'top' | 'bottom';
    /** Size of the drawer */
    size?: 'sm' | 'md' | 'lg' | 'full';
    /** Custom width for left/right drawers */
    width?: string | number;
    /** Custom height for top/bottom drawers */
    height?: string | number;
    /** Whether to show overlay */
    overlay?: boolean;
    /** Whether to close on overlay click */
    closeOnOverlayClick?: boolean;
    /** Whether to show close button */
    showCloseButton?: boolean;
    /** Additional CSS classes */
    className?: string;
    /** Overlay CSS classes */
    overlayClassName?: string;
    /** Drawer content */
    children: React__default.ReactNode;
    /** Additional props */
    [key: string]: any;
}
declare const Drawer: React__default.FC<DrawerProps>;

interface ResizableProps {
    children: React__default.ReactNode;
    className?: string;
    direction?: 'horizontal' | 'vertical';
    minSize?: number;
    maxSize?: number;
    defaultSize?: number;
    onResize?: (size: number) => void;
}
declare const Resizable: React__default.FC<ResizableProps>;

interface ScrollAreaProps {
    children: React__default.ReactNode;
    className?: string;
    orientation?: 'vertical' | 'horizontal';
    scrollHideDelay?: number;
}
declare const ScrollArea: React__default.FC<ScrollAreaProps>;

export { Drawer, Layout, Modal, Navbar, Popover, Resizable, ScrollArea, Sheet, Sidebar, Tooltip };
export type { DrawerProps, LayoutProps, ModalProps, NavbarProps, PopoverProps, ResizableProps, ScrollAreaProps, SheetProps, SidebarProps, TooltipProps };
