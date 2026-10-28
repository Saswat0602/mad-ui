import React__default from 'react';

interface HoverCardProps {
    children: React__default.ReactNode;
    className?: string;
}
interface HoverCardTriggerProps {
    children: React__default.ReactNode;
    asChild?: boolean;
    className?: string;
}
interface HoverCardContentProps {
    children: React__default.ReactNode;
    className?: string;
    align?: 'start' | 'center' | 'end';
    side?: 'top' | 'right' | 'bottom' | 'left';
    sideOffset?: number;
}
declare const HoverCard: React__default.FC<HoverCardProps>;
declare const HoverCardTrigger: React__default.FC<HoverCardTriggerProps>;
declare const HoverCardContent: React__default.FC<HoverCardContentProps>;

export { HoverCard, HoverCardContent, HoverCardTrigger };
export type { HoverCardContentProps, HoverCardProps, HoverCardTriggerProps };
