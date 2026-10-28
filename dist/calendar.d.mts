import * as React from 'react';

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

export { Calendar };
export type { CalendarProps };
