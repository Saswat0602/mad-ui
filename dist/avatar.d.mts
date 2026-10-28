import React__default from 'react';

interface AvatarProps extends React__default.HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    fallback?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    shape?: 'circle' | 'square';
}
declare const Avatar: React__default.FC<AvatarProps>;

export { Avatar };
export type { AvatarProps };
