import React__default from 'react';

interface AccordionItem {
    /** Unique identifier for the accordion item */
    id?: string;
    /** Title of the accordion item */
    title: string;
    /** Content of the accordion item */
    content: React__default.ReactNode;
    /** Whether the item is disabled */
    disabled?: boolean;
}
interface AccordionProps {
    /** Array of accordion items */
    items?: AccordionItem[];
    /** Whether multiple items can be open at once */
    allowMultiple?: boolean;
    /** Array of indices that should be open by default */
    defaultOpen?: number[];
    /** Additional CSS classes for the accordion container */
    className?: string;
    /** Additional CSS classes for each accordion item */
    itemClassName?: string;
    /** Additional CSS classes for accordion headers */
    headerClassName?: string;
    /** Additional CSS classes for accordion content */
    contentClassName?: string;
    /** Position of the expand/collapse icon */
    iconPosition?: 'left' | 'right';
    /** Custom icon component */
    customIcon?: React__default.ComponentType<{
        size?: number;
        className?: string;
    }>;
    /** Whether to animate the expand/collapse */
    animated?: boolean;
    /** Additional props */
    [key: string]: any;
}
declare const Accordion: React__default.FC<AccordionProps>;

export { Accordion };
export type { AccordionItem, AccordionProps };
