import * as React from 'react';
import React__default from 'react';
import { ClassValue } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
    asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    success?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    required?: boolean;
}
declare const Label: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLLabelElement>>;

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "elevated" | "outlined" | "ghost";
    hoverable?: boolean;
    clickable?: boolean;
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    description?: string;
    error?: boolean;
    indeterminate?: boolean;
    size?: "sm" | "md" | "lg";
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;

interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    description?: string;
    error?: boolean;
    size?: "sm" | "md" | "lg";
}
declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;

interface SelectProps {
    value?: string;
    onValueChange?: (value: string) => void;
    defaultValue?: string;
    disabled?: boolean;
    placeholder?: string;
    children: React.ReactNode;
    className?: string;
}
interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
}
interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}
interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
    className?: string;
    children: React.ReactNode;
}
interface SelectGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}
interface SelectLabelProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}
interface SelectValueProps extends React.HTMLAttributes<HTMLSpanElement> {
    placeholder?: string;
    className?: string;
}
declare const Select: React.FC<SelectProps>;
declare const SelectTrigger: React.ForwardRefExoticComponent<SelectTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const SelectValue: React.ForwardRefExoticComponent<SelectValueProps & React.RefAttributes<HTMLSpanElement>>;
declare const SelectContent: React.ForwardRefExoticComponent<SelectContentProps & React.RefAttributes<HTMLDivElement>>;
declare const SelectItem: React.ForwardRefExoticComponent<SelectItemProps & React.RefAttributes<HTMLDivElement>>;
declare const SelectGroup: React.ForwardRefExoticComponent<SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const SelectLabel: React.ForwardRefExoticComponent<SelectLabelProps & React.RefAttributes<HTMLDivElement>>;

interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    description?: string;
    size?: "sm" | "md" | "lg";
}
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number;
    max?: number;
    variant?: "default" | "success" | "warning" | "destructive";
    size?: "sm" | "md" | "lg";
    showLabel?: boolean;
    label?: string;
    indicatorClassName?: string;
}
declare const Progress: React.ForwardRefExoticComponent<ProgressProps & React.RefAttributes<HTMLDivElement>>;

interface SliderProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
    value?: number | [number, number];
    defaultValue?: number | [number, number];
    min?: number;
    max?: number;
    step?: number;
    variant?: 'default' | 'filled' | 'outlined' | 'minimal';
    size?: 'sm' | 'md' | 'lg';
    orientation?: 'horizontal' | 'vertical';
    range?: boolean;
    disabled?: boolean;
    showValue?: boolean;
    showMarks?: boolean;
    marks?: Array<{
        value: number;
        label?: string;
    }>;
    color?: string;
    backgroundColor?: string;
    trackColor?: string;
    thumbColor?: string;
    borderRadius?: string | number;
    shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    fullWidth?: boolean;
    onChange?: (value: number | [number, number]) => void;
    onValueChange?: (value: number | [number, number]) => void;
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
    error?: string;
    success?: boolean;
    validation?: {
        required?: boolean;
        custom?: (value: number | [number, number]) => boolean | string;
    };
    shortcuts?: Array<{
        label: string;
        value: number | [number, number];
        onClick: () => void;
    }>;
    customMarks?: Array<{
        value: number;
        label?: string;
        className?: string;
        tooltip?: string;
    }>;
    onValueHover?: (value: number | [number, number]) => void;
    onValueFocus?: (value: number | [number, number]) => void;
    keyboardNavigation?: boolean;
    autoFocus?: boolean;
    interactive?: boolean;
    clickable?: boolean;
    onValueClick?: (value: number | [number, number]) => void;
    onValueDoubleClick?: (value: number | [number, number]) => void;
    onRightClick?: (value: number | [number, number], event: React__default.MouseEvent) => void;
    contextMenuItems?: Array<{
        label: string;
        onClick: (value: number | [number, number]) => void;
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
    onScrollChange?: (scrollY: number) => void;
    focusable?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
    tabIndex?: number;
    animation?: 'slide' | 'fade' | 'scale' | 'bounce' | 'none';
    animationDuration?: number;
    onAnimationStart?: () => void;
    onAnimationEnd?: () => void;
    theme?: 'light' | 'dark' | 'auto';
    locale?: string;
    rtl?: boolean;
    accessibility?: {
        announce?: boolean;
        announceMessage?: string;
        role?: string;
        liveRegion?: 'polite' | 'assertive' | 'off';
    };
}
declare const Slider: React__default.ForwardRefExoticComponent<SliderProps & React__default.RefAttributes<HTMLDivElement>>;

interface RatingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    value: number;
    max?: number;
    onChange?: (value: number) => void;
    readOnly?: boolean;
    size?: "sm" | "md" | "lg";
    showValue?: boolean;
    label?: string;
    precision?: number;
}
declare const Rating: React.ForwardRefExoticComponent<RatingProps & React.RefAttributes<HTMLDivElement>>;

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "text" | "circular" | "rectangular" | "rounded";
    animation?: "pulse" | "wave" | "none";
    lines?: number;
}
declare const Skeleton: React.ForwardRefExoticComponent<SkeletonProps & React.RefAttributes<HTMLDivElement>>;

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: boolean;
    success?: boolean;
    resize?: "none" | "vertical" | "horizontal" | "both";
    fullWidth?: boolean;
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;

interface RadioGroupProps {
    children: React__default.ReactNode;
    value?: string;
    onValueChange?: (value: string) => void;
    className?: string;
    disabled?: boolean;
}
interface RadioGroupItemProps {
    value: string;
    children: React__default.ReactNode;
    className?: string;
    disabled?: boolean;
}
declare const RadioGroup: React__default.FC<RadioGroupProps>;
declare const RadioGroupItem: React__default.FC<RadioGroupItemProps & {
    checked?: boolean;
    onValueChange?: (value: string) => void;
    disabled?: boolean;
}>;

interface AccordionItem {
    /** Unique identifier for the accordion item */
    id?: string;
    /** Title of the accordion item */
    title: string;
    /** Content of the accordion item */
    content: React__default.ReactNode;
    /** Whether the item is disabled */
    disabled?: boolean;
}
interface AccordionProps {
    /** Array of accordion items */
    items?: AccordionItem[];
    /** Whether multiple items can be open at once */
    allowMultiple?: boolean;
    /** Array of indices that should be open by default */
    defaultOpen?: number[];
    /** Additional CSS classes for the accordion container */
    className?: string;
    /** Additional CSS classes for each accordion item */
    itemClassName?: string;
    /** Additional CSS classes for accordion headers */
    headerClassName?: string;
    /** Additional CSS classes for accordion content */
    contentClassName?: string;
    /** Position of the expand/collapse icon */
    iconPosition?: 'left' | 'right';
    /** Custom icon component */
    customIcon?: React__default.ComponentType<{
        size?: number;
        className?: string;
    }>;
    /** Whether to animate the expand/collapse */
    animated?: boolean;
    /** Additional props */
    [key: string]: any;
}
declare const Accordion: React__default.FC<AccordionProps>;

interface CalendarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    value?: Date;
    onChange?: (date: Date) => void;
    placeholder?: string;
    disabled?: boolean;
    variant?: "default" | "filled" | "outlined" | "minimal";
    size?: "sm" | "md" | "lg";
    showIcon?: boolean;
    format?: string;
    minDate?: Date;
    maxDate?: Date;
    showToday?: boolean;
    showWeekNumbers?: boolean;
    firstDayOfWeek?: 0 | 1;
    locale?: string;
    design?: "classic" | "modern" | "minimal" | "card" | "grid";
    animation?: "fade" | "slide" | "scale" | "bounce" | "none";
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    borderRadius?: string | number;
    shadow?: "none" | "sm" | "md" | "lg" | "xl";
    fullWidth?: boolean;
    closeOnSelect?: boolean;
    showHeader?: boolean;
    showFooter?: boolean;
    showMonthNavigation?: boolean;
    showYearNavigation?: boolean;
    highlightWeekends?: boolean;
    highlightHolidays?: boolean;
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
    error?: string;
    success?: boolean;
    validation?: {
        required?: boolean;
        custom?: (date: Date) => boolean | string;
    };
    shortcuts?: Array<{
        label: string;
        value: Date;
        onClick: () => void;
    }>;
    customDays?: Array<{
        date: Date;
        label?: string;
        className?: string;
        disabled?: boolean;
        tooltip?: string;
    }>;
    onDateHover?: (date: Date) => void;
    onDateFocus?: (date: Date) => void;
    keyboardNavigation?: boolean;
    autoFocus?: boolean;
}
declare const Calendar: React.ForwardRefExoticComponent<CalendarProps & React.RefAttributes<HTMLDivElement>>;

type DateTimeMode = 'date' | 'time' | 'both';
type TimeFormat = '12' | '24';
interface DateTimePickerProps {
    mode?: DateTimeMode;
    timeFormat?: TimeFormat;
    value?: Date | null;
    onChange?: (value: Date) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}
declare const DateTimePicker: React__default.FC<DateTimePickerProps>;

interface InputOTPProps {
    value: string;
    onChange: (value: string) => void;
    length?: number;
    disabled?: boolean;
    className?: string;
    placeholder?: string;
    type?: 'number' | 'text';
}
declare const InputOTP: React__default.FC<InputOTPProps>;

interface BreadcrumbItem {
    label: string;
    href?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    disabled?: boolean;
}
interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
    items: BreadcrumbItem[];
    separator?: React.ReactNode;
    size?: "sm" | "md" | "lg";
    variant?: "default" | "minimal" | "outlined" | "modern" | "card" | "pill" | "gradient" | "steps";
    color?: string;
    backgroundColor?: string;
    textColor?: string;
    activeColor?: string;
    separatorColor?: string;
    borderRadius?: string | number;
    shadow?: "none" | "sm" | "md" | "lg";
    fullWidth?: boolean;
    showHomeIcon?: boolean;
    homeIcon?: React.ReactNode;
    maxItems?: number;
    collapseOnMobile?: boolean;
}
declare const Breadcrumbs: React.ForwardRefExoticComponent<BreadcrumbsProps & React.RefAttributes<HTMLElement>>;

interface TabItem {
    id: string;
    label: string;
    content: React__default.ReactNode;
    disabled?: boolean;
    icon?: React__default.ReactNode;
    badge?: string | number;
}
interface TabsProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    items: TabItem[];
    variant?: 'default' | 'pills' | 'underline' | 'cards' | 'minimal';
    size?: 'sm' | 'md' | 'lg';
    orientation?: 'horizontal' | 'vertical';
    defaultActiveTab?: string;
    animation?: 'fade' | 'slide' | 'scale' | 'none';
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    activeColor?: string;
    borderRadius?: string | number;
    shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    fullWidth?: boolean;
    onChange?: (activeTab: string) => void;
}
declare const Tabs: React__default.ForwardRefExoticComponent<TabsProps & React__default.RefAttributes<HTMLDivElement>>;

interface FormFieldProps {
    name: string;
    children: React__default.ReactNode;
    className?: string;
}
interface FormItemProps {
    children: React__default.ReactNode;
    className?: string;
}
interface FormLabelProps {
    children: React__default.ReactNode;
    className?: string;
    htmlFor?: string;
}
interface FormControlProps {
    children: React__default.ReactNode;
    className?: string;
}
interface FormDescriptionProps {
    children: React__default.ReactNode;
    className?: string;
}
interface FormMessageProps {
    children?: React__default.ReactNode;
    className?: string;
    variant?: 'default' | 'error' | 'success' | 'warning';
}
interface FormProps {
    children: React__default.ReactNode;
    onSubmit?: (e: React__default.FormEvent) => void;
    className?: string;
}
declare const Form: React__default.FC<FormProps>;
declare const FormField: React__default.FC<FormFieldProps>;
declare const FormItem: React__default.FC<FormItemProps>;
declare const FormLabel: React__default.FC<FormLabelProps>;
declare const FormControl: React__default.FC<FormControlProps>;
declare const FormDescription: React__default.FC<FormDescriptionProps>;
declare const FormMessage: React__default.FC<FormMessageProps>;

interface DialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React__default.ReactNode;
    className?: string;
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
    accessibility?: {
        announce?: boolean;
        announceMessage?: string;
        role?: string;
        liveRegion?: 'polite' | 'assertive' | 'off';
    };
}
declare const Dialog: React__default.FC<DialogProps>;

interface AlertDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React__default.ReactNode;
    className?: string;
}
declare const AlertDialog: React__default.FC<AlertDialogProps>;

interface HoverCardProps {
    children: React__default.ReactNode;
    className?: string;
}
declare const HoverCard: React__default.FC<HoverCardProps>;

interface CollapsibleProps {
    children: React__default.ReactNode;
    className?: string;
    defaultOpen?: boolean;
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
    disabled?: boolean;
    onToggle?: (isOpen: boolean) => void;
    onExpand?: () => void;
    onCollapse?: () => void;
    animation?: 'slide' | 'fade' | 'scale' | 'none';
    animationDuration?: number;
    onAnimationStart?: () => void;
    onAnimationEnd?: () => void;
    theme?: 'light' | 'dark' | 'auto';
    locale?: string;
    rtl?: boolean;
    accessibility?: {
        announce?: boolean;
        announceMessage?: string;
        role?: string;
        liveRegion?: 'polite' | 'assertive' | 'off';
    };
}
declare const Collapsible: React__default.FC<CollapsibleProps>;

interface ContextMenuProps {
    children: React__default.ReactNode;
    className?: string;
}
declare const ContextMenu: React__default.FC<ContextMenuProps>;

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
interface DropdownMenuCheckboxItemProps {
    children: React__default.ReactNode;
    className?: string;
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    disabled?: boolean;
}
interface DropdownMenuRadioGroupProps {
    children: React__default.ReactNode;
    className?: string;
    value?: string;
    onValueChange?: (value: string) => void;
}
interface DropdownMenuRadioItemProps {
    children: React__default.ReactNode;
    className?: string;
    value: string;
    disabled?: boolean;
    checked?: boolean;
    onCheckedChange?: () => void;
}
interface DropdownMenuSubProps {
    children: React__default.ReactNode;
    className?: string;
}
interface DropdownMenuSubTriggerProps {
    children: React__default.ReactNode;
    className?: string;
    disabled?: boolean;
}
interface DropdownMenuSubContentProps {
    children: React__default.ReactNode;
    className?: string;
}
interface DropdownMenuShortcutProps {
    children: React__default.ReactNode;
    className?: string;
}
interface DropdownMenuPortalProps {
    children: React__default.ReactNode;
}
declare const DropdownMenu: React__default.FC<DropdownMenuProps>;
declare const DropdownMenuTrigger: React__default.FC<DropdownMenuTriggerProps>;
declare const DropdownMenuContent: React__default.FC<DropdownMenuContentProps>;
declare const DropdownMenuItem: React__default.FC<DropdownMenuItemProps>;
declare const DropdownMenuSeparator: React__default.FC<DropdownMenuSeparatorProps>;
declare const DropdownMenuLabel: React__default.FC<DropdownMenuLabelProps>;
declare const DropdownMenuGroup: React__default.FC<DropdownMenuGroupProps>;
declare const DropdownMenuCheckboxItem: React__default.FC<DropdownMenuCheckboxItemProps>;
declare const DropdownMenuRadioGroup: React__default.FC<DropdownMenuRadioGroupProps>;
declare const DropdownMenuRadioItem: React__default.FC<DropdownMenuRadioItemProps>;
declare const DropdownMenuSub: React__default.FC<DropdownMenuSubProps>;
declare const DropdownMenuSubTrigger: React__default.FC<DropdownMenuSubTriggerProps>;
declare const DropdownMenuSubContent: React__default.FC<DropdownMenuSubContentProps>;
declare const DropdownMenuShortcut: React__default.FC<DropdownMenuShortcutProps>;
declare const DropdownMenuPortal: React__default.FC<DropdownMenuPortalProps>;

interface ToggleProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
    pressed?: boolean;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'outline';
}
declare const Toggle: React__default.FC<ToggleProps>;

interface SeparatorProps extends React__default.HTMLAttributes<HTMLDivElement> {
    orientation?: 'horizontal' | 'vertical';
    decorative?: boolean;
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
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    borderRadius?: string | number;
    shadow?: 'none' | 'sm' | 'md' | 'lg';
    thickness?: 'thin' | 'medium' | 'thick';
    lineStyle?: 'solid' | 'dashed' | 'dotted' | 'double';
    gradient?: boolean;
    gradientColors?: string[];
    animated?: boolean;
    animation?: 'pulse' | 'wave' | 'glow' | 'none';
    animationDuration?: number;
    onAnimationStart?: () => void;
    onAnimationEnd?: () => void;
    theme?: 'light' | 'dark' | 'auto';
    locale?: string;
    rtl?: boolean;
    accessibility?: {
        announce?: boolean;
        announceMessage?: string;
        role?: string;
        liveRegion?: 'polite' | 'assertive' | 'off';
    };
}
declare const Separator: React__default.FC<SeparatorProps>;

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

interface TableColumn<T> {
    key: keyof T;
    header: string;
    sortable?: boolean;
    render?: (value: unknown, row: T) => React.ReactNode;
    width?: string | number;
    align?: "left" | "center" | "right";
    className?: string;
}
interface TableProps<T> extends React.HTMLAttributes<HTMLDivElement> {
    data: T[];
    columns: TableColumn<T>[];
    selectedRows?: string[];
    onSelectionChange?: (selectedRows: string[]) => void;
    pagination?: {
        current: number;
        total: number;
        pageSize: number;
        onChange: (page: number) => void;
    };
    sortable?: boolean;
    selectable?: boolean;
    hoverable?: boolean;
    striped?: boolean;
    bordered?: boolean;
    size?: "sm" | "md" | "lg";
    variant?: "default" | "outlined" | "elevated";
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    headerColor?: string;
    borderRadius?: string | number;
    shadow?: "none" | "sm" | "md" | "lg";
    fullWidth?: boolean;
    emptyMessage?: string;
    loading?: boolean;
    onRowClick?: (row: T, index: number) => void;
    rowKey?: keyof T | ((row: T, index: number) => string);
    editable?: boolean;
    onAddRow?: () => void;
    onAddColumn?: () => void;
    onEditCell?: (row: T, column: keyof T, value: any) => void;
    onDeleteRow?: (row: T, index: number) => void;
    showAddRowButton?: boolean;
    showAddColumnButton?: boolean;
    showDeleteRowButton?: boolean;
    addRowButtonText?: string;
    addColumnButtonText?: string;
    deleteRowButtonText?: string;
}
declare function Table<T extends Record<string, unknown>>({ data, columns, selectedRows, onSelectionChange, pagination, sortable, selectable, hoverable, striped, bordered, size, variant, color, backgroundColor, borderColor, textColor, headerColor, borderRadius, shadow, fullWidth, emptyMessage, loading, onRowClick, rowKey, editable, onAddRow, onAddColumn, onEditCell, onDeleteRow, showAddRowButton, showAddColumnButton, showDeleteRowButton, addRowButtonText, addColumnButtonText, deleteRowButtonText, className, style, ...props }: TableProps<T>): React.JSX.Element;
declare namespace Table {
    var displayName: string;
}

interface DataTableColumn<T> {
    key: keyof T;
    header: string;
    cell?: (item: T) => React__default.ReactNode;
    sortable?: boolean;
    width?: string;
}
interface DataTableProps<T> {
    data: T[];
    columns: DataTableColumn<T>[];
    className?: string;
    sortable?: boolean;
    searchable?: boolean;
    pagination?: boolean;
    pageSize?: number;
    onRowClick?: (item: T) => void;
}
declare const DataTable: <T extends Record<string, any>>({ data, columns, className, sortable, searchable, pagination, pageSize, onRowClick }: DataTableProps<T>) => React__default.JSX.Element;

interface ChartData {
    label: string;
    value: number;
    color?: string;
}
interface ChartProps {
    data: ChartData[];
    type?: 'bar' | 'line' | 'pie' | 'doughnut';
    className?: string;
    height?: number;
    width?: number;
}
declare const Chart: React__default.FC<ChartProps>;

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    type?: "success" | "error" | "warning" | "info" | "primary" | "neutral";
    title?: string;
    message?: string;
    onClose?: () => void;
    closable?: boolean;
    variant?: "default" | "filled" | "outlined";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    iconColor?: string;
    borderRadius?: string | number;
    shadow?: "none" | "sm" | "md" | "lg";
    icon?: React.ReactNode;
    actions?: React.ReactNode;
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
    autoDismiss?: boolean;
    dismissTimeout?: number;
    onDismiss?: () => void;
    onShow?: () => void;
    persistent?: boolean;
    priority?: "low" | "medium" | "high" | "critical";
    category?: string;
    tags?: string[];
    metadata?: Record<string, any>;
    sound?: boolean;
    vibration?: boolean;
    position?: "top" | "bottom" | "center" | "top-left" | "top-right" | "bottom-left" | "bottom-right";
    animation?: "fade" | "slide" | "scale" | "bounce" | "none";
    progress?: boolean;
    progressValue?: number;
    onProgressComplete?: () => void;
}
declare const Alert: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>>;

interface SonnerProps {
    toasts: Toast$1[];
    onDismiss: (id: string) => void;
    className?: string;
    position?: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center';
}
interface ToastProps$1 {
    toast: Toast$1;
    onDismiss: (id: string) => void;
    className?: string;
}
declare const Sonner: React__default.FC<SonnerProps>;
interface Toast$1 {
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
declare const Toast$1: React__default.FC<ToastProps$1>;

interface ToastProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, 'onClose'> {
    id?: string;
    title?: string;
    message: string;
    type?: 'success' | 'error' | 'warning' | 'info' | 'default';
    variant?: 'default' | 'filled' | 'outlined' | 'minimal';
    size?: 'sm' | 'md' | 'lg';
    position?: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center';
    duration?: number;
    closable?: boolean;
    persistent?: boolean;
    action?: React__default.ReactNode;
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    borderRadius?: string | number;
    shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    onClose?: (id?: string) => void;
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
    progress?: boolean;
    progressValue?: number;
    onProgressComplete?: () => void;
    priority?: 'low' | 'medium' | 'high' | 'critical';
    category?: string;
    tags?: string[];
    metadata?: Record<string, any>;
    sound?: boolean;
    vibration?: boolean;
    onShow?: () => void;
    onHide?: () => void;
    onAction?: (action: string) => void;
    actions?: Array<{
        label: string;
        onClick: () => void;
        variant?: 'default' | 'primary' | 'secondary' | 'ghost';
        icon?: React__default.ReactNode;
    }>;
    avatar?: string;
    timestamp?: Date;
    showTimestamp?: boolean;
    groupable?: boolean;
    groupId?: string;
    maxGroupSize?: number;
    onGroup?: (toasts: ToastProps[]) => void;
    stackable?: boolean;
    maxStackSize?: number;
    onStack?: (toasts: ToastProps[]) => void;
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
    retryable?: boolean;
    onRetry?: () => void;
    retryCount?: number;
    maxRetries?: number;
    onRetryExhausted?: () => void;
    linkable?: boolean;
    link?: string;
    onLinkClick?: () => void;
    linkTarget?: '_blank' | '_self' | '_parent' | '_top';
    expandable?: boolean;
    expandedContent?: React__default.ReactNode;
    onExpand?: () => void;
    onCollapse?: () => void;
    collapsible?: boolean;
    collapsed?: boolean;
    onToggle?: (collapsed: boolean) => void;
    animated?: boolean;
    animation?: 'fade' | 'slide' | 'scale' | 'bounce' | 'flip' | 'none';
    animationDuration?: number;
    onAnimationStart?: () => void;
    onAnimationEnd?: () => void;
    theme?: 'light' | 'dark' | 'auto';
    locale?: string;
    rtl?: boolean;
    onLocaleChange?: (locale: string) => void;
    accessibility?: {
        announce?: boolean;
        announceMessage?: string;
        role?: string;
        liveRegion?: 'polite' | 'assertive' | 'off';
    };
}
declare const Toast: React__default.ForwardRefExoticComponent<ToastProps & React__default.RefAttributes<HTMLDivElement>>;

interface NavigationMenuProps {
    children: React__default.ReactNode;
    className?: string;
}
declare const NavigationMenu: React__default.FC<NavigationMenuProps>;

interface MenubarProps {
    children: React__default.ReactNode;
    className?: string;
}
declare const Menubar: React__default.FC<MenubarProps>;

interface CommandProps {
    children: React__default.ReactNode;
    className?: string;
}
declare const Command: React__default.FC<CommandProps>;

interface ComboboxOption {
    value: string;
    label: string;
    disabled?: boolean;
}
interface ComboboxProps {
    options: ComboboxOption[];
    value?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    searchable?: boolean;
}
declare const Combobox: React__default.FC<ComboboxProps>;

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
    showPageNumbers?: boolean;
    showFirstLast?: boolean;
    showPrevNext?: boolean;
}
declare const Pagination: React__default.FC<PaginationProps>;

interface AvatarProps extends React__default.HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    fallback?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    shape?: 'circle' | 'square';
}
declare const Avatar: React__default.FC<AvatarProps>;

interface BadgeProps extends React__default.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning' | 'error' | 'info';
    size?: 'sm' | 'md' | 'lg';
}
declare const Badge: React__default.ForwardRefExoticComponent<BadgeProps & React__default.RefAttributes<HTMLDivElement>>;

interface AspectRatioProps {
    ratio?: number;
    children: React__default.ReactNode;
    className?: string;
}
declare const AspectRatio: React__default.FC<AspectRatioProps>;

interface CarouselProps {
    children: React__default.ReactNode;
    className?: string;
    autoPlay?: boolean;
    interval?: number;
    showArrows?: boolean;
    showDots?: boolean;
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
    infinite?: boolean;
    pauseOnHover?: boolean;
    pauseOnFocus?: boolean;
    swipeable?: boolean;
    draggable?: boolean;
    keyboardNavigation?: boolean;
    showThumbnails?: boolean;
    showCounter?: boolean;
    showFullscreen?: boolean;
    showDownload?: boolean;
    showShare?: boolean;
    onSlideChange?: (index: number) => void;
    onSlideClick?: (index: number) => void;
    onSlideDoubleClick?: (index: number) => void;
    onSlideRightClick?: (index: number, event: React__default.MouseEvent) => void;
    contextMenuItems?: Array<{
        label: string;
        onClick: (index: number) => void;
        icon?: React__default.ReactNode;
        disabled?: boolean;
    }>;
    animation?: 'slide' | 'fade' | 'scale' | 'bounce' | 'none';
    animationDuration?: number;
    onAnimationStart?: () => void;
    onAnimationEnd?: () => void;
    theme?: 'light' | 'dark' | 'auto';
    locale?: string;
    rtl?: boolean;
    accessibility?: {
        announce?: boolean;
        announceMessage?: string;
        role?: string;
        liveRegion?: 'polite' | 'assertive' | 'off';
    };
}
declare const Carousel: React__default.FC<CarouselProps>;

interface TypographyProps {
    children: React__default.ReactNode;
    className?: string;
}
interface TypographyH1Props extends TypographyProps {
}
interface TypographyH2Props extends TypographyProps {
}
interface TypographyH3Props extends TypographyProps {
}
interface TypographyH4Props extends TypographyProps {
}
interface TypographyH5Props extends TypographyProps {
}
interface TypographyH6Props extends TypographyProps {
}
interface TypographyPProps extends TypographyProps {
}
interface TypographyBlockquoteProps extends TypographyProps {
}
interface TypographyCodeProps extends TypographyProps {
}
interface TypographyLeadProps extends TypographyProps {
}
interface TypographyLargeProps extends TypographyProps {
}
interface TypographySmallProps extends TypographyProps {
}
interface TypographyMutedProps extends TypographyProps {
}
declare const TypographyH1: React__default.FC<TypographyH1Props>;
declare const TypographyH2: React__default.FC<TypographyH2Props>;
declare const TypographyH3: React__default.FC<TypographyH3Props>;
declare const TypographyH4: React__default.FC<TypographyH4Props>;
declare const TypographyH5: React__default.FC<TypographyH5Props>;
declare const TypographyH6: React__default.FC<TypographyH6Props>;
declare const TypographyP: React__default.FC<TypographyPProps>;
declare const TypographyBlockquote: React__default.FC<TypographyBlockquoteProps>;
declare const TypographyCode: React__default.FC<TypographyCodeProps>;
declare const TypographyLead: React__default.FC<TypographyLeadProps>;
declare const TypographyLarge: React__default.FC<TypographyLargeProps>;
declare const TypographySmall: React__default.FC<TypographySmallProps>;
declare const TypographyMuted: React__default.FC<TypographyMutedProps>;

declare function cn(...inputs: ClassValue[]): string;
type VariantConfig<T extends Record<string, Record<string, string>>> = {
    base: string;
    variants: T;
    defaultVariants?: Partial<{
        [K in keyof T]: keyof T[K];
    }>;
};
declare function createVariants<T extends Record<string, Record<string, string>>>(config: VariantConfig<T>): (props?: Partial<{ [K in keyof T]: keyof T[K]; }> & {
    className?: string;
}) => string;
declare const isReactNative: boolean;
declare function getPlatformClassName(webClassName: string, nativeStyle?: Record<string, unknown>): string | Record<string, unknown>;
type PlatformProps<T> = T & {
    className?: string;
    style?: Record<string, unknown>;
};
declare function composeRefs<T>(...refs: (React.Ref<T> | undefined)[]): (node: T) => void;
declare function useId(prefix?: string): string;

interface ColorScheme {
    'bg-primary': string;
    'bg-secondary': string;
    'bg-tertiary': string;
    'bg-card': string;
    'bg-overlay': string;
    'text-primary': string;
    'text-secondary': string;
    'text-muted': string;
    'text-inverse': string;
    'border-primary': string;
    'border-secondary': string;
    'border-focus': string;
    'accent-primary': string;
    'accent-secondary': string;
    'accent-success': string;
    'accent-warning': string;
    'accent-error': string;
    'accent-info': string;
    'shadow-sm': string;
    'shadow-md': string;
    'shadow-lg': string;
    'shadow-xl': string;
    'success': string;
    'warning': string;
    'error': string;
    'info': string;
}
declare const lightColors: ColorScheme;
declare const darkColors: ColorScheme;
declare const getColorValue: (colorKey: keyof ColorScheme, theme?: "light" | "dark") => string;
declare const createCSSVariables: (theme?: "light" | "dark") => string;
declare const componentColors: {
    button: {
        primary: {
            bg: string;
            text: string;
            border: string;
            hover: string;
        };
        secondary: {
            bg: string;
            text: string;
            border: string;
            hover: string;
        };
        outline: {
            bg: string;
            text: string;
            border: string;
            hover: string;
        };
        ghost: {
            bg: string;
            text: string;
            border: string;
            hover: string;
        };
        success: {
            bg: string;
            text: string;
            border: string;
            hover: string;
        };
        warning: {
            bg: string;
            text: string;
            border: string;
            hover: string;
        };
        error: {
            bg: string;
            text: string;
            border: string;
            hover: string;
        };
    };
    input: {
        default: {
            bg: string;
            text: string;
            border: string;
            focus: string;
        };
        error: {
            bg: string;
            text: string;
            border: string;
            focus: string;
        };
        success: {
            bg: string;
            text: string;
            border: string;
            focus: string;
        };
    };
    card: {
        default: {
            bg: string;
            border: string;
            shadow: string;
        };
        elevated: {
            bg: string;
            border: string;
            shadow: string;
        };
    };
};
declare const defaultColors: ColorScheme;

export { Accordion, Alert, AlertDialog, AspectRatio, Avatar, Badge, Breadcrumbs, Button, Calendar, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Carousel, Chart, Checkbox, Collapsible, Combobox, Command, ContextMenu, DataTable, DateTimePicker, Dialog, Drawer, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, HoverCard, Input, InputOTP, Label, Layout, Menubar, Modal, Navbar, NavigationMenu, Pagination, Popover, Progress, Radio, RadioGroup, RadioGroupItem, Rating, Resizable, ScrollArea, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner, Switch, Table, Tabs, Textarea, Toast, Toggle, Tooltip, TypographyBlockquote, TypographyCode, TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyH6, TypographyLarge, TypographyLead, TypographyMuted, TypographyP, TypographySmall, cn, componentColors, composeRefs, createCSSVariables, createVariants, darkColors, defaultColors, getColorValue, getPlatformClassName, isReactNative, lightColors, useId };
export type { AccordionItem, AccordionProps, AlertDialogProps, AlertProps, AspectRatioProps, AvatarProps, BadgeProps, BreadcrumbsProps, ButtonProps, CalendarProps, CardProps, CarouselProps, ChartProps, CheckboxProps, CollapsibleProps, ColorScheme, ComboboxProps, CommandProps, ContextMenuProps, DataTableProps, DateTimePickerProps, DialogProps, DrawerProps, DropdownMenuCheckboxItemProps, DropdownMenuContentProps, DropdownMenuGroupProps, DropdownMenuItemProps, DropdownMenuLabelProps, DropdownMenuPortalProps, DropdownMenuProps, DropdownMenuRadioGroupProps, DropdownMenuRadioItemProps, DropdownMenuSeparatorProps, DropdownMenuShortcutProps, DropdownMenuSubContentProps, DropdownMenuSubProps, DropdownMenuSubTriggerProps, DropdownMenuTriggerProps, FormControlProps, FormDescriptionProps, FormFieldProps, FormItemProps, FormLabelProps, FormMessageProps, FormProps, HoverCardProps, InputOTPProps, InputProps, LabelProps, LayoutProps, MenubarProps, ModalProps, NavbarProps, NavigationMenuProps, PaginationProps, PlatformProps, PopoverProps, ProgressProps, RadioGroupItemProps, RadioGroupProps, RadioProps, RatingProps, ResizableProps, ScrollAreaProps, SelectProps, SeparatorProps, SheetProps, SidebarProps, SkeletonProps, SliderProps, SonnerProps, SwitchProps, TabItem, TableProps, TabsProps, TextareaProps, ToastProps, ToggleProps, TooltipProps, TypographyBlockquoteProps, TypographyCodeProps, TypographyH1Props, TypographyH2Props, TypographyH3Props, TypographyH4Props, TypographyH5Props, TypographyH6Props, TypographyLargeProps, TypographyLeadProps, TypographyMutedProps, TypographyPProps, TypographyProps, TypographySmallProps };
