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
declare const Select: React.FC<SelectProps>;

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

export { Button, Card, Checkbox, Input, Label, Progress, Radio, Rating, Select, Skeleton, Slider, Switch, Textarea, cn, componentColors, composeRefs, createCSSVariables, createVariants, darkColors, defaultColors, getColorValue, getPlatformClassName, isReactNative, lightColors, useId };
export type { ButtonProps, CardProps, CheckboxProps, ColorScheme, InputProps, LabelProps, PlatformProps, ProgressProps, RadioProps, RatingProps, SelectProps, SkeletonProps, SliderProps, SwitchProps, TextareaProps };
