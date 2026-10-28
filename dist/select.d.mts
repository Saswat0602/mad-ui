import * as React from 'react';

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

export { Select };
export type { SelectProps };
