import React__default from 'react';

interface BadgeProps extends React__default.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning' | 'error' | 'info';
    size?: 'sm' | 'md' | 'lg';
}
declare const Badge: React__default.ForwardRefExoticComponent<BadgeProps & React__default.RefAttributes<HTMLDivElement>>;

export { Badge };
export type { BadgeProps };
