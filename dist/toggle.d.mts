import React__default from 'react';

interface ToggleProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
    pressed?: boolean;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'outline';
}
declare const Toggle: React__default.FC<ToggleProps>;

export { Toggle };
export type { ToggleProps };
