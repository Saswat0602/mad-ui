import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

// Base utility classes for consistent styling
const baseClasses = {
  transition: 'transition-all duration-300 ease-in-out',
  focusRing: 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
};

export interface AccordionItem {
  /** Unique identifier for the accordion item */
  id?: string;
  /** Title of the accordion item */
  title: string;
  /** Content of the accordion item */
  content: React.ReactNode;
  /** Whether the item is disabled */
  disabled?: boolean;
}

export interface AccordionProps {
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
  customIcon?: React.ComponentType<{ size?: number; className?: string }>;
  /** Whether to animate the expand/collapse */
  animated?: boolean;
  /** Additional props */
  [key: string]: any;
}

const AccordionItem: React.FC<{
  item: AccordionItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  itemClassName?: string;
  headerClassName?: string;
  contentClassName?: string;
  iconPosition?: 'left' | 'right';
  CustomIcon?: React.ComponentType<{ size?: number; className?: string }>;
  animated?: boolean;
  isLast: boolean;
}> = ({
  item,
  index,
  isOpen,
  onToggle,
  itemClassName,
  headerClassName,
  contentClassName,
  iconPosition,
  CustomIcon,
  animated,
  isLast
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [item.content, isOpen]);

  const IconComponent = CustomIcon || ChevronDown;

  return (
    <div className={cn(itemClassName, !isLast ? 'border-b border-gray-200' : '')}>
      <button
        onClick={onToggle}
        disabled={item.disabled}
        className={cn(
          'w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50',
          baseClasses.focusRing,
          item.disabled && 'opacity-50 cursor-not-allowed',
          headerClassName
        )}
        aria-expanded={isOpen}
      >
        <div className={cn('flex items-center w-full', iconPosition === 'left' ? 'flex-row-reverse' : '')}>
          <span className={cn('font-medium', iconPosition === 'left' ? 'mr-3' : '')}>
            {item.title}
          </span>
          <IconComponent 
            size={20} 
            className={cn(
              animated ? baseClasses.transition : '',
              isOpen ? 'rotate-180' : '',
              iconPosition === 'left' ? 'ml-auto mr-3' : 'ml-3'
            )}
          />
        </div>
      </button>
      <div
        className={cn('overflow-hidden', animated ? baseClasses.transition : '')}
        style={{ height: isOpen ? `${contentHeight}px` : '0px' }}
      >
        <div ref={contentRef} className={cn('px-6 py-4 text-gray-700', contentClassName)}>
          {typeof item.content === 'string' ? (
            <p>{item.content}</p>
          ) : (
            item.content
          )}
        </div>
      </div>
    </div>
  );
};

export const Accordion: React.FC<AccordionProps> = ({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  className = '',
  itemClassName = '',
  headerClassName = '',
  contentClassName = '',
  iconPosition = 'right',
  customIcon: CustomIcon,
  animated = true,
  ...props
}) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set(defaultOpen));

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenItems(prev => {
        const newSet = new Set(prev);
        if (newSet.has(index)) {
          newSet.delete(index);
        } else {
          newSet.add(index);
        }
        return newSet;
      });
    } else {
      setOpenItems(prev => 
        prev.has(index) ? new Set() : new Set([index])
      );
    }
  };

  return (
    <div className={cn('border border-gray-200 rounded-lg overflow-hidden', className)} {...props}>
      {items.map((item, index) => (
        <AccordionItem
          key={item.id || index}
          item={item}
          index={index}
          isOpen={openItems.has(index)}
          onToggle={() => toggleItem(index)}
          itemClassName={itemClassName}
          headerClassName={headerClassName}
          contentClassName={contentClassName}
          iconPosition={iconPosition}
          CustomIcon={CustomIcon}
          animated={animated}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
};

export default Accordion;