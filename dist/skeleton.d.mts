import * as React from 'react';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "text" | "circular" | "rectangular" | "rounded";
    animation?: "pulse" | "wave" | "none";
    lines?: number;
}
declare const Skeleton: React.ForwardRefExoticComponent<SkeletonProps & React.RefAttributes<HTMLDivElement>>;

export { Skeleton };
export type { SkeletonProps };
