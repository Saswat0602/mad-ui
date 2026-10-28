import React__default from 'react';

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

export { Combobox };
export type { ComboboxProps };
