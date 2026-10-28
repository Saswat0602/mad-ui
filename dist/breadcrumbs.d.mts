import * as React from 'react';

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

export { Breadcrumbs };
export type { BreadcrumbsProps };
