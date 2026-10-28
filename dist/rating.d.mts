import * as React from 'react';

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

export { Rating };
export type { RatingProps };
