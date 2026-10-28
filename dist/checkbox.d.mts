import * as React from 'react';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    description?: string;
    error?: boolean;
    indeterminate?: boolean;
    size?: "sm" | "md" | "lg";
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;

export { Checkbox };
export type { CheckboxProps };
