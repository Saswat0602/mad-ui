import React__default from 'react';

interface ResizableProps {
    children: React__default.ReactNode;
    className?: string;
    direction?: 'horizontal' | 'vertical';
    minSize?: number;
    maxSize?: number;
    defaultSize?: number;
    onResize?: (size: number) => void;
}
declare const Resizable: React__default.FC<ResizableProps>;

export { Resizable };
export type { ResizableProps };
