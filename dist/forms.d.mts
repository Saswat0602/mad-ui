import * as React from 'react';
import React__default from 'react';

interface RadioGroupProps {
    children: React__default.ReactNode;
    value?: string;
    onValueChange?: (value: string) => void;
    className?: string;
    disabled?: boolean;
}
declare const RadioGroup: React__default.FC<RadioGroupProps>;

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

export { Accordion, Breadcrumbs, Calendar, DateTimePicker, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, InputOTP, RadioGroup, Tabs };
export type { AccordionItem, AccordionProps, BreadcrumbsProps, CalendarProps, DateTimePickerProps, FormControlProps, FormDescriptionProps, FormFieldProps, FormItemProps, FormLabelProps, FormMessageProps, FormProps, InputOTPProps, RadioGroupProps, TabItem, TabsProps };
