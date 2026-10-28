import React__default from 'react';

interface ScrollAreaProps {
    children: React__default.ReactNode;
    className?: string;
    orientation?: 'vertical' | 'horizontal';
    scrollHideDelay?: number;
}
declare const ScrollArea: React__default.FC<ScrollAreaProps>;

export { ScrollArea };
export type { ScrollAreaProps };
