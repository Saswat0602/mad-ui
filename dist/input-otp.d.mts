import React__default from 'react';

interface InputOTPProps {
    value: string;
    onChange: (value: string) => void;
    length?: number;
    disabled?: boolean;
    className?: string;
    placeholder?: string;
    type?: 'number' | 'text';
}
interface InputOTPGroupProps {
    children: React__default.ReactNode;
    className?: string;
}
interface InputOTPSlotProps {
    char?: string;
    hasFakeCaret?: boolean;
    isActive?: boolean;
    className?: string;
    children?: React__default.ReactNode;
}
declare const InputOTP: React__default.FC<InputOTPProps>;
declare const InputOTPGroup: React__default.FC<InputOTPGroupProps>;
declare const InputOTPSlot: React__default.FC<InputOTPSlotProps>;

export { InputOTP, InputOTPGroup, InputOTPSlot };
export type { InputOTPGroupProps, InputOTPProps, InputOTPSlotProps };
