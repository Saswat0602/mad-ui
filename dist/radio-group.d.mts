import React__default from 'react';

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

export { RadioGroup, RadioGroupItem };
export type { RadioGroupItemProps, RadioGroupProps };
