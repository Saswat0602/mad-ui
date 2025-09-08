import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronDown, Menu } from 'lucide-react';

// Base utility classes for consistent styling
const baseClasses = {
  transition: 'transition-all duration-300 ease-in-out',
  overlay: 'fixed inset-0 bg-black/50 z-40',
  focusRing: 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
};

// Drawer Component
const Drawer = ({
  isOpen = false,
  onClose,
  position = 'right',
  size = 'md',
  overlay = true,
  closeOnOverlayClick = true,
  showCloseButton = true,
  className = '',
  overlayClassName = '',
  children,
  ...props
}) => {
  const drawerRef = useRef(null);

  const sizes = {
    sm: position === 'left' || position === 'right' ? 'w-80' : 'h-80',
    md: position === 'left' || position === 'right' ? 'w-96' : 'h-96',
    lg: position === 'left' || position === 'right' ? 'w-[32rem]' : 'h-[32rem]',
    full: position === 'left' || position === 'right' ? 'w-full' : 'h-full',
  };

  const positions = {
    right: `fixed top-0 right-0 h-full transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`,
    left: `fixed top-0 left-0 h-full transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`,
    top: `fixed top-0 left-0 w-full transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}`,
    bottom: `fixed bottom-0 left-0 w-full transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`,
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {overlay && (
        <div
          className={`${baseClasses.overlay} ${baseClasses.transition} ${overlayClassName}`}
          onClick={closeOnOverlayClick ? onClose : undefined}
        />
      )}
      <div
        ref={drawerRef}
        className={`${positions[position]} ${sizes[size]} bg-white shadow-xl z-50 ${baseClasses.transition} ${className}`}
        {...props}
      >
        {showCloseButton && (
          <button
            onClick={onClose}
            className={`absolute top-4 ${position === 'left' ? 'right-4' : 'left-4'} p-2 rounded-md hover:bg-gray-100 ${baseClasses.focusRing}`}
          >
            <X size={20} />
          </button>
        )}
        <div className={`p-6 ${showCloseButton ? 'pt-16' : ''} h-full overflow-y-auto`}>
          {children}
        </div>
      </div>
    </>
  );
};

// Accordion Component
const Accordion = ({
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
  const [openItems, setOpenItems] = useState(new Set(defaultOpen));

  const toggleItem = (index) => {
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
    <div className={`border border-gray-200 rounded-lg overflow-hidden ${className}`} {...props}>
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

const AccordionItem = ({
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
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [item.content, isOpen]);

  const IconComponent = CustomIcon || ChevronDown;

  return (
    <div className={`${itemClassName} ${!isLast ? 'border-b border-gray-200' : ''}`}>
      <button
        onClick={onToggle}
        className={`w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 ${baseClasses.focusRing} ${headerClassName}`}
        aria-expanded={isOpen}
      >
        <div className={`flex items-center ${iconPosition === 'left' ? 'flex-row-reverse' : ''} w-full`}>
          <span className={`font-medium ${iconPosition === 'left' ? 'mr-3' : ''}`}>
            {item.title}
          </span>
          <IconComponent 
            size={20} 
            className={`${animated ? baseClasses.transition : ''} ${isOpen ? 'rotate-180' : ''} ${iconPosition === 'left' ? 'ml-auto mr-3' : 'ml-3'}`}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden ${animated ? baseClasses.transition : ''}`}
        style={{ height: isOpen ? `${contentHeight}px` : '0px' }}
      >
        <div ref={contentRef} className={`px-6 py-4 text-gray-700 ${contentClassName}`}>
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

// Dialog Component
const Dialog = ({
  isOpen = false,
  onClose,
  title,
  description,
  size = 'md',
  position = 'center',
  overlay = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  className = '',
  overlayClassName = '',
  headerClassName = '',
  bodyClassName = '',
  footerClassName = '',
  children,
  footer,
  ...props
}) => {
  const dialogRef = useRef(null);

  const sizes = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    full: 'max-w-full mx-4',
  };

  const positions = {
    center: 'items-center justify-center',
    top: 'items-start justify-center pt-20',
    bottom: 'items-end justify-center pb-20',
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && closeOnEscape && onClose) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      dialogRef.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeOnEscape, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {overlay && (
        <div
          className={`${baseClasses.overlay} ${baseClasses.transition} ${overlayClassName}`}
          onClick={closeOnOverlayClick ? onClose : undefined}
        />
      )}
      <div className={`fixed inset-0 z-50 flex ${positions[position]} p-4`}>
        <div
          ref={dialogRef}
          tabIndex={-1}
          className={`bg-white rounded-lg shadow-xl w-full ${sizes[size]} ${baseClasses.transition} transform ${
            isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          } ${className}`}
          {...props}
        >
          {(title || description || showCloseButton) && (
            <div className={`px-6 py-4 border-b border-gray-200 ${headerClassName}`}>
              <div className="flex items-center justify-between">
                <div>
                  {title && <h3 className="text-lg font-semibold text-gray-900">{title}</h3>}
                  {description && <p className="mt-1 text-sm text-gray-600">{description}</p>}
                </div>
                {showCloseButton && (
                  <button
                    onClick={onClose}
                    className={`p-2 rounded-md hover:bg-gray-100 ${baseClasses.focusRing}`}
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            </div>
          )}
          <div className={`px-6 py-4 ${bodyClassName}`}>
            {children}
          </div>
          {footer && (
            <div className={`px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg ${footerClassName}`}>
              {footer}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// Demo Component
const ComponentDemo = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [drawerPosition, setDrawerPosition] = useState('right');
  const [drawerSize, setDrawerSize] = useState('md');

  const accordionItems = [
    {
      id: 'item1',
      title: 'What is React?',
      content: 'React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".'
    },
    {
      id: 'item2',
      title: 'How do components work?',
      content: (
        <div>
          <p>Components are like JavaScript functions. They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.</p>
          <ul className="mt-2 list-disc list-inside">
            <li>Reusable pieces of UI</li>
            <li>Can have their own state</li>
            <li>Can receive data via props</li>
          </ul>
        </div>
      )
    },
    {
      id: 'item3',
      title: 'Why use custom components?',
      content: 'Custom components give you complete control over styling, behavior, and functionality. They can be tailored to your exact needs and maintain consistency across your application.'
    }
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Custom UI Component Library</h1>
        <p className="text-gray-600">Fully customizable and reusable components with complete prop control</p>
      </div>

      {/* Drawer Demo */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Drawer Component</h2>
        <div className="space-y-4">
          <div className="flex gap-4 flex-wrap">
            <select 
              value={drawerPosition} 
              onChange={(e) => setDrawerPosition(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="right">Right</option>
              <option value="left">Left</option>
              <option value="top">Top</option>
              <option value="bottom">Bottom</option>
            </select>
            <select 
              value={drawerSize} 
              onChange={(e) => setDrawerSize(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
              <option value="full">Full</option>
            </select>
            <button
              onClick={() => setDrawerOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Menu className="inline mr-2" size={16} />
              Open Drawer
            </button>
          </div>
        </div>
      </div>

      {/* Accordion Demo */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Accordion Component</h2>
        <div className="space-y-4">
          <Accordion 
            items={accordionItems}
            allowMultiple={false}
            defaultOpen={[0]}
            className="border-gray-300"
          />
        </div>
      </div>

      {/* Dialog Demo */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Dialog Component</h2>
        <button
          onClick={() => setDialogOpen(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Open Dialog
        </button>
      </div>

      {/* Component Code Examples */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Usage Examples</h2>
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-medium">Custom Select:</h3>
            <code className="text-xs bg-gray-100 p-2 rounded block mt-1">
              {`<Select options={data} value={val} onChange={handler} searchable multiple />`}
            </code>
          </div>
          <div>
            <h3 className="font-medium">Drawer:</h3>
            <code className="text-xs bg-gray-100 p-2 rounded block mt-1">
              {`<Drawer isOpen={open} onClose={close} position="right" size="md" />`}
            </code>
          </div>
          <div>
            <h3 className="font-medium">Accordion:</h3>
            <code className="text-xs bg-gray-100 p-2 rounded block mt-1">
              {`<Accordion items={items} allowMultiple={true} defaultOpen={[0]} />`}
            </code>
          </div>
          <div>
            <h3 className="font-medium">Dialog:</h3>
            <code className="text-xs bg-gray-100 p-2 rounded block mt-1">
              {`<Dialog isOpen={open} onClose={close} title="Title" size="lg" />`}
            </code>
          </div>
        </div>
      </div>

      {/* Drawer Component */}
      <Drawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        position={drawerPosition}
        size={drawerSize}
        className="bg-gradient-to-br from-blue-50 to-white"
      >
        <h3 className="text-xl font-bold mb-4">Custom Drawer</h3>
        <p className="text-gray-700 mb-4">
          This drawer is completely customizable! You can control:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Position (left, right, top, bottom)</li>
          <li>Size (sm, md, lg, full)</li>
          <li>Overlay behavior</li>
          <li>Close button visibility</li>
          <li>Custom styling and animations</li>
        </ul>
        <div className="mt-6 pt-4 border-t border-gray-200">
          <button
            onClick={() => setDrawerOpen(false)}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
          >
            Close Drawer
          </button>
        </div>
      </Drawer>

      {/* Dialog Component */}
      <Dialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title="Custom Dialog"
        description="This dialog showcases the flexibility of the component"
        size="lg"
        footer={
          <div className="flex justify-end space-x-3">
            <button
              onClick={() => setDialogOpen(false)}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={() => setDialogOpen(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Confirm
            </button>
          </div>
        }
      >
        <div className="space-y-4">
          <p>This is a fully customizable dialog component with:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Flexible sizing options</li>
            <li>Custom positioning</li>
            <li>Optional overlay and close behaviors</li>
            <li>Customizable header, body, and footer</li>
            <li>Keyboard navigation support</li>
            <li>Complete style control via props</li>
          </ul>
        </div>
      </Dialog>
    </div>
  );
};

export default ComponentDemo;