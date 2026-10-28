import * as React from 'react';

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

export { Progress };
export type { ProgressProps };
