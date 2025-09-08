export interface ComponentProp {
  name: string
  type: string
  required: boolean
  default?: string | number | boolean
  description: string
  deprecated?: boolean
}

export const COMPONENT_PROPS: Record<string, ComponentProp[]> = {
  button: [
    {
      name: 'variant',
      type: "'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'",
      required: false,
      default: 'default',
      description: 'The visual style variant of the button'
    },
    {
      name: 'size',
      type: "'sm' | 'default' | 'lg'",
      required: false,
      default: 'default',
      description: 'The size of the button'
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether the button should take full width'
    },
    {
      name: 'loading',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether the button is in a loading state'
    },
    {
      name: 'disabled',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether the button is disabled'
    },
    {
      name: 'analyticsId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Unique identifier for analytics tracking'
    },
    {
      name: 'analyticsEvent',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Event name for analytics tracking'
    },
    {
      name: 'analyticsData',
      type: 'Record<string, any>',
      required: false,
      default: 'undefined',
      description: 'Additional data for analytics tracking'
    },
    {
      name: 'ariaLabel',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Accessible label for screen readers'
    },
    {
      name: 'dataTestId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Test identifier for automated testing'
    },
    {
      name: 'onAnalytics',
      type: '(event: string, data?: Record<string, any>) => void',
      required: false,
      default: 'undefined',
      description: 'Callback for analytics events'
    },
    {
      name: 'leftIcon',
      type: 'React.ReactNode',
      required: false,
      default: 'undefined',
      description: 'Icon to display on the left side of the button'
    },
    {
      name: 'rightIcon',
      type: 'React.ReactNode',
      required: false,
      default: 'undefined',
      description: 'Icon to display on the right side of the button'
    },
    {
      name: 'disabled',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether the button is disabled'
    },
    {
      name: 'onClick',
      type: '() => void',
      required: false,
      description: 'Function to call when the button is clicked'
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      required: false,
      description: 'The content to display inside the button'
    }
  ],

  input: [
    {
      name: 'type',
      type: 'string',
      required: false,
      default: 'text',
      description: 'The type of input (text, email, password, etc.)'
    },
    {
      name: 'label',
      type: 'string',
      required: false,
      description: 'Label text for the input'
    },
    {
      name: 'error',
      type: 'string',
      required: false,
      description: 'Error message to display'
    },
    {
      name: 'helperText',
      type: 'string',
      required: false,
      description: 'Helper text to display below the input'
    },
    {
      name: 'success',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether the input is in a success state'
    },
    {
      name: 'leftIcon',
      type: 'React.ReactNode',
      required: false,
      description: 'Icon to display on the left side of the input'
    },
    {
      name: 'rightIcon',
      type: 'React.ReactNode',
      required: false,
      description: 'Icon to display on the right side of the input'
    },
    {
      name: 'variant',
      type: "'default' | 'error' | 'success'",
      required: false,
      default: 'default',
      description: 'The visual variant of the input'
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      required: false,
      default: 'md',
      description: 'The size of the input'
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      required: false,
      default: 'true',
      description: 'Whether the input should take full width'
    },
    {
      name: 'floatingLabel',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether to use a floating label'
    },
    {
      name: 'placeholder',
      type: 'string',
      required: false,
      description: 'Placeholder text for the input'
    },
    {
      name: 'value',
      type: 'string',
      required: false,
      description: 'The value of the input'
    },
    {
      name: 'onChange',
      type: '(e: ChangeEvent<HTMLInputElement>) => void',
      required: false,
      description: 'Function to call when the input value changes'
    },
    {
      name: 'disabled',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether the input is disabled'
    }
  ],

  card: [
    {
      name: 'children',
      type: 'React.ReactNode',
      required: false,
      description: 'The content to display inside the card'
    },
    {
      name: 'className',
      type: 'string',
      required: false,
      description: 'Additional CSS classes to apply to the card'
    }
  ],

  checkbox: [
    {
      name: 'label',
      type: 'string',
      required: false,
      description: 'Label text for the checkbox'
    },
    {
      name: 'error',
      type: 'string',
      required: false,
      description: 'Error message to display'
    },
    {
      name: 'helperText',
      type: 'string',
      required: false,
      description: 'Helper text to display below the checkbox'
    },
    {
      name: 'success',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether the checkbox is in a success state'
    },
    {
      name: 'variant',
      type: "'default' | 'error' | 'success'",
      required: false,
      default: 'default',
      description: 'The visual variant of the checkbox'
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      required: false,
      default: 'md',
      description: 'The size of the checkbox'
    },
    {
      name: 'indeterminate',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether the checkbox is in an indeterminate state'
    },
    {
      name: 'checked',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether the checkbox is checked'
    },
    {
      name: 'onChange',
      type: '(checked: boolean) => void',
      required: false,
      description: 'Function to call when the checkbox state changes'
    },
    {
      name: 'disabled',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether the checkbox is disabled'
    }
  ],

  radio: [
    {
      name: 'checked',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether the radio button is checked'
    },
    {
      name: 'onChange',
      type: '() => void',
      required: false,
      description: 'Function to call when the radio button is selected'
    },
    {
      name: 'disabled',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether the radio button is disabled'
    }
  ],

  select: [
    {
      name: 'value',
      type: 'string',
      required: false,
      description: 'The selected value'
    },
    {
      name: 'onChange',
      type: '(value: string) => void',
      required: false,
      description: 'Function to call when the selection changes'
    },
    {
      name: 'disabled',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether the select is disabled'
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      required: false,
      description: 'The option elements to display'
    }
  ],

  switch: [
    {
      name: 'checked',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether the switch is checked'
    },
    {
      name: 'onChange',
      type: '(checked: boolean) => void',
      required: false,
      description: 'Function to call when the switch state changes'
    },
    {
      name: 'disabled',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether the switch is disabled'
    }
  ],

  progress: [
    {
      name: 'value',
      type: 'number',
      required: true,
      default: 'undefined',
      description: 'The current progress value'
    },
    {
      name: 'max',
      type: 'number',
      required: false,
      default: '100',
      description: 'The maximum progress value'
    },
    {
      name: 'min',
      type: 'number',
      required: false,
      default: '0',
      description: 'The minimum progress value'
    },
    {
      name: 'variant',
      type: "'default' | 'success' | 'warning' | 'error' | 'info'",
      required: false,
      default: 'default',
      description: 'The visual style variant'
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      required: false,
      default: 'md',
      description: 'The size of the progress bar'
    },
    {
      name: 'showValue',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether to display the current value'
    },
    {
      name: 'showLabel',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether to display a label'
    },
    {
      name: 'label',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'The label text to display'
    },
    {
      name: 'animated',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether to show animation'
    },
    {
      name: 'striped',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether to show striped pattern'
    },
    {
      name: 'analyticsId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Unique identifier for analytics tracking'
    },
    {
      name: 'analyticsEvent',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Event name for analytics tracking'
    },
    {
      name: 'analyticsData',
      type: 'Record<string, any>',
      required: false,
      default: 'undefined',
      description: 'Additional data for analytics tracking'
    },
    {
      name: 'ariaLabel',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Accessible label for screen readers'
    },
    {
      name: 'dataTestId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Test identifier for automated testing'
    },
    {
      name: 'onAnalytics',
      type: '(event: string, data?: Record<string, any>) => void',
      required: false,
      default: 'undefined',
      description: 'Callback for analytics events'
    }
  ],

  slider: [
    {
      name: 'value',
      type: 'number | [number, number]',
      required: false,
      default: 'undefined',
      description: 'The current value(s) of the slider'
    },
    {
      name: 'defaultValue',
      type: 'number | [number, number]',
      required: false,
      default: 'undefined',
      description: 'The default value(s) of the slider'
    },
    {
      name: 'min',
      type: 'number',
      required: false,
      default: '0',
      description: 'The minimum value of the slider'
    },
    {
      name: 'max',
      type: 'number',
      required: false,
      default: '100',
      description: 'The maximum value of the slider'
    },
    {
      name: 'step',
      type: 'number',
      required: false,
      default: '1',
      description: 'The step size for value changes'
    },
    {
      name: 'orientation',
      type: "'horizontal' | 'vertical'",
      required: false,
      default: 'horizontal',
      description: 'The orientation of the slider'
    },
    {
      name: 'range',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether to show range selection'
    },
    {
      name: 'disabled',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether the slider is disabled'
    },
    {
      name: 'showValue',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether to show the current value'
    },
    {
      name: 'showMarks',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether to show marks on the track'
    },
    {
      name: 'marks',
      type: 'Array<{ value: number; label?: string }>',
      required: false,
      default: 'undefined',
      description: 'Array of marks to display on the track'
    },
    {
      name: 'onValueChange',
      type: '(value: number | [number, number]) => void',
      required: false,
      default: 'undefined',
      description: 'Callback when the value changes'
    },
    {
      name: 'analyticsId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Unique identifier for analytics tracking'
    },
    {
      name: 'analyticsEvent',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Event name for analytics tracking'
    },
    {
      name: 'analyticsData',
      type: 'Record<string, any>',
      required: false,
      default: 'undefined',
      description: 'Additional data for analytics tracking'
    },
    {
      name: 'ariaLabel',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Accessible label for screen readers'
    },
    {
      name: 'dataTestId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Test identifier for automated testing'
    },
    {
      name: 'keyboardNavigation',
      type: 'boolean',
      required: false,
      default: 'true',
      description: 'Whether to enable keyboard navigation'
    },
    {
      name: 'onAnalytics',
      type: '(event: string, data?: Record<string, any>) => void',
      required: false,
      default: 'undefined',
      description: 'Callback for analytics events'
    },
    {
      name: 'max',
      type: 'number',
      required: false,
      default: '100',
      description: 'The maximum slider value'
    },
    {
      name: 'step',
      type: 'number',
      required: false,
      default: '1',
      description: 'The step size for the slider'
    }
  ],

  rating: [
    {
      name: 'value',
      type: 'number',
      required: false,
      default: '0',
      description: 'The current rating value'
    },
    {
      name: 'max',
      type: 'number',
      required: false,
      default: '5',
      description: 'The maximum rating value'
    },
    {
      name: 'onChange',
      type: '(value: number) => void',
      required: false,
      description: 'Function to call when the rating changes'
    },
    {
      name: 'readOnly',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether the rating is read-only'
    }
  ],

  skeleton: [
    {
      name: 'className',
      type: 'string',
      required: false,
      description: 'Additional CSS classes to apply to the skeleton'
    }
  ],

  textarea: [
    {
      name: 'placeholder',
      type: 'string',
      required: false,
      description: 'Placeholder text for the textarea'
    },
    {
      name: 'value',
      type: 'string',
      required: false,
      description: 'The value of the textarea'
    },
    {
      name: 'onChange',
      type: '(e: ChangeEvent<HTMLTextAreaElement>) => void',
      required: false,
      description: 'Function to call when the textarea value changes'
    },
    {
      name: 'disabled',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether the textarea is disabled'
    },
    {
      name: 'rows',
      type: 'number',
      required: false,
      default: '3',
      description: 'The number of visible text lines'
    }
  ],

  badge: [
    {
      name: 'variant',
      type: "'default' | 'secondary' | 'destructive' | 'outline'",
      required: false,
      default: 'default',
      description: 'The visual style variant of the badge'
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      required: false,
      description: 'The content to display inside the badge'
    }
  ],

  avatar: [
    {
      name: 'src',
      type: 'string',
      required: false,
      description: 'The image source URL for the avatar'
    },
    {
      name: 'alt',
      type: 'string',
      required: false,
      description: 'Alternative text for the avatar image'
    },
    {
      name: 'size',
      type: "'sm' | 'default' | 'lg'",
      required: false,
      default: 'default',
      description: 'The size of the avatar'
    }
  ],

  label: [
    {
      name: 'htmlFor',
      type: 'string',
      required: false,
      description: 'The ID of the form element this label is for'
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      required: false,
      description: 'The content to display inside the label'
    }
  ],

  // Form Components
  accordion: [
    {
      name: 'items',
      type: 'AccordionItem[]',
      required: false,
      default: '[]',
      description: 'Array of accordion items to display'
    },
    {
      name: 'allowMultiple',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether multiple items can be open at once'
    },
    {
      name: 'defaultOpen',
      type: 'number[]',
      required: false,
      default: '[]',
      description: 'Array of indices that should be open by default'
    },
    {
      name: 'className',
      type: 'string',
      required: false,
      description: 'Additional CSS classes for the accordion container'
    },
    {
      name: 'itemClassName',
      type: 'string',
      required: false,
      description: 'Additional CSS classes for each accordion item'
    },
    {
      name: 'headerClassName',
      type: 'string',
      required: false,
      description: 'Additional CSS classes for accordion headers'
    },
    {
      name: 'contentClassName',
      type: 'string',
      required: false,
      description: 'Additional CSS classes for accordion content'
    },
    {
      name: 'iconPosition',
      type: "'left' | 'right'",
      required: false,
      default: 'right',
      description: 'Position of the expand/collapse icon'
    },
    {
      name: 'customIcon',
      type: 'React.ComponentType<{ size?: number; className?: string }>',
      required: false,
      description: 'Custom icon component'
    },
    {
      name: 'animated',
      type: 'boolean',
      required: false,
      default: 'true',
      description: 'Whether to animate the expand/collapse'
    },
    {
      name: 'searchPlaceholder',
      type: 'string',
      required: false,
      default: 'Search items...',
      description: 'Placeholder text for search input'
    },
    {
      name: 'onSearch',
      type: '(query: string) => void',
      required: false,
      description: 'Callback when search query changes'
    },
    {
      name: 'keyboardNavigation',
      type: 'boolean',
      required: false,
      default: 'true',
      description: 'Whether to enable keyboard navigation'
    },
    {
      name: 'analyticsId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Unique identifier for analytics tracking'
    },
    {
      name: 'analyticsEvent',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Event name for analytics tracking'
    },
    {
      name: 'analyticsData',
      type: 'Record<string, any>',
      required: false,
      default: 'undefined',
      description: 'Additional data for analytics tracking'
    },
    {
      name: 'ariaLabel',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Accessible label for screen readers'
    },
    {
      name: 'dataTestId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Test identifier for automated testing'
    },
    {
      name: 'onToggle',
      type: '(itemId: string, isOpen: boolean) => void',
      required: false,
      description: 'Callback when an accordion item is toggled'
    },
    {
      name: 'onAnalytics',
      type: '(event: string, data?: Record<string, any>) => void',
      required: false,
      default: 'undefined',
      description: 'Callback for analytics events'
    }
  ],

  calendar: [
    {
      name: 'value',
      type: 'Date | Date[]',
      required: false,
      description: 'Selected date(s)'
    },
    {
      name: 'defaultValue',
      type: 'Date | Date[]',
      required: false,
      description: 'Default selected date(s)'
    },
    {
      name: 'mode',
      type: "'single' | 'multiple' | 'range'",
      required: false,
      default: 'single',
      description: 'Selection mode'
    },
    {
      name: 'locale',
      type: 'string',
      required: false,
      default: 'en-US',
      description: 'Locale for date formatting'
    },
    {
      name: 'disabled',
      type: 'boolean | Date[]',
      required: false,
      default: 'false',
      description: 'Whether calendar is disabled or specific dates are disabled'
    },
    {
      name: 'analyticsId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Unique identifier for analytics tracking'
    },
    {
      name: 'analyticsEvent',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Event name for analytics tracking'
    },
    {
      name: 'analyticsData',
      type: 'Record<string, any>',
      required: false,
      default: 'undefined',
      description: 'Additional data for analytics tracking'
    },
    {
      name: 'ariaLabel',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Accessible label for screen readers'
    },
    {
      name: 'dataTestId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Test identifier for automated testing'
    },
    {
      name: 'onSelect',
      type: '(date: Date | Date[]) => void',
      required: false,
      description: 'Callback when date is selected'
    },
    {
      name: 'onAnalytics',
      type: '(event: string, data?: Record<string, any>) => void',
      required: false,
      default: 'undefined',
      description: 'Callback for analytics events'
    }
  ],

  tabs: [
    {
      name: 'defaultValue',
      type: 'string',
      required: false,
      description: 'Default active tab value'
    },
    {
      name: 'value',
      type: 'string',
      required: false,
      description: 'Controlled active tab value'
    },
    {
      name: 'orientation',
      type: "'horizontal' | 'vertical'",
      required: false,
      default: 'horizontal',
      description: 'Orientation of the tabs'
    },
    {
      name: 'variant',
      type: "'default' | 'outlined' | 'pills' | 'underline'",
      required: false,
      default: 'default',
      description: 'Visual style variant'
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      required: false,
      default: 'md',
      description: 'Size of the tabs'
    },
    {
      name: 'disabled',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether tabs are disabled'
    },
    {
      name: 'analyticsId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Unique identifier for analytics tracking'
    },
    {
      name: 'analyticsEvent',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Event name for analytics tracking'
    },
    {
      name: 'analyticsData',
      type: 'Record<string, any>',
      required: false,
      default: 'undefined',
      description: 'Additional data for analytics tracking'
    },
    {
      name: 'ariaLabel',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Accessible label for screen readers'
    },
    {
      name: 'dataTestId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Test identifier for automated testing'
    },
    {
      name: 'onValueChange',
      type: '(value: string) => void',
      required: false,
      description: 'Callback when tab value changes'
    },
    {
      name: 'onAnalytics',
      type: '(event: string, data?: Record<string, any>) => void',
      required: false,
      default: 'undefined',
      description: 'Callback for analytics events'
    }
  ],

  // Layout Components
  modal: [
    {
      name: 'open',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether the modal is open'
    },
    {
      name: 'onOpenChange',
      type: '(open: boolean) => void',
      required: false,
      description: 'Callback when modal open state changes'
    },
    {
      name: 'title',
      type: 'string',
      required: false,
      description: 'Modal title'
    },
    {
      name: 'description',
      type: 'string',
      required: false,
      description: 'Modal description'
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg' | 'xl' | 'full'",
      required: false,
      default: 'md',
      description: 'Size of the modal'
    },
    {
      name: 'variant',
      type: "'default' | 'centered' | 'sidebar' | 'fullscreen'",
      required: false,
      default: 'default',
      description: 'Modal variant'
    },
    {
      name: 'dismissible',
      type: 'boolean',
      required: false,
      default: 'true',
      description: 'Whether modal can be dismissed'
    },
    {
      name: 'closeOnOverlayClick',
      type: 'boolean',
      required: false,
      default: 'true',
      description: 'Whether clicking overlay closes modal'
    },
    {
      name: 'closeOnEscape',
      type: 'boolean',
      required: false,
      default: 'true',
      description: 'Whether pressing Escape closes modal'
    },
    {
      name: 'analyticsId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Unique identifier for analytics tracking'
    },
    {
      name: 'analyticsEvent',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Event name for analytics tracking'
    },
    {
      name: 'analyticsData',
      type: 'Record<string, any>',
      required: false,
      default: 'undefined',
      description: 'Additional data for analytics tracking'
    },
    {
      name: 'ariaLabel',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Accessible label for screen readers'
    },
    {
      name: 'dataTestId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Test identifier for automated testing'
    },
    {
      name: 'onAnalytics',
      type: '(event: string, data?: Record<string, any>) => void',
      required: false,
      default: 'undefined',
      description: 'Callback for analytics events'
    }
  ],

  drawer: [
    {
      name: 'isOpen',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether the drawer is open'
    },
    {
      name: 'onClose',
      type: '() => void',
      required: false,
      description: 'Callback when drawer should close'
    },
    {
      name: 'position',
      type: "'right' | 'left' | 'top' | 'bottom'",
      required: false,
      default: 'right',
      description: 'Position of the drawer'
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg' | 'full'",
      required: false,
      default: 'md',
      description: 'Size of the drawer'
    },
    {
      name: 'overlay',
      type: 'boolean',
      required: false,
      default: 'true',
      description: 'Whether to show overlay'
    },
    {
      name: 'closeOnOverlayClick',
      type: 'boolean',
      required: false,
      default: 'true',
      description: 'Whether to close on overlay click'
    },
    {
      name: 'showCloseButton',
      type: 'boolean',
      required: false,
      default: 'true',
      description: 'Whether to show close button'
    },
    {
      name: 'className',
      type: 'string',
      required: false,
      description: 'Additional CSS classes'
    },
    {
      name: 'overlayClassName',
      type: 'string',
      required: false,
      description: 'Overlay CSS classes'
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      required: true,
      description: 'Drawer content'
    }
  ],

  tooltip: [
    {
      name: 'content',
      type: 'React.ReactNode',
      required: true,
      description: 'Tooltip content'
    },
    {
      name: 'side',
      type: "'top' | 'right' | 'bottom' | 'left'",
      required: false,
      default: 'top',
      description: 'Preferred side of the trigger to render against'
    },
    {
      name: 'align',
      type: "'start' | 'center' | 'end'",
      required: false,
      default: 'center',
      description: 'Alignment of the tooltip'
    },
    {
      name: 'sideOffset',
      type: 'number',
      required: false,
      default: '4',
      description: 'Distance in pixels from the trigger'
    },
    {
      name: 'alignOffset',
      type: 'number',
      required: false,
      default: '0',
      description: 'Offset in pixels from the alignment'
    },
    {
      name: 'open',
      type: 'boolean',
      required: false,
      description: 'Controlled open state'
    },
    {
      name: 'onOpenChange',
      type: '(open: boolean) => void',
      required: false,
      description: 'Callback when open state changes'
    },
    {
      name: 'delayDuration',
      type: 'number',
      required: false,
      default: '700',
      description: 'Delay in milliseconds before showing tooltip'
    },
    {
      name: 'disableHoverableContent',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether to disable hoverable content'
    },
    {
      name: 'analyticsId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Unique identifier for analytics tracking'
    },
    {
      name: 'analyticsEvent',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Event name for analytics tracking'
    },
    {
      name: 'analyticsData',
      type: 'Record<string, any>',
      required: false,
      default: 'undefined',
      description: 'Additional data for analytics tracking'
    },
    {
      name: 'ariaLabel',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Accessible label for screen readers'
    },
    {
      name: 'dataTestId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Test identifier for automated testing'
    },
    {
      name: 'onAnalytics',
      type: '(event: string, data?: Record<string, any>) => void',
      required: false,
      default: 'undefined',
      description: 'Callback for analytics events'
    }
  ],

  // Media Components
  carousel: [
    {
      name: 'items',
      type: 'CarouselItem[]',
      required: true,
      description: 'Array of carousel items'
    },
    {
      name: 'autoplay',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether to autoplay the carousel'
    },
    {
      name: 'autoplayInterval',
      type: 'number',
      required: false,
      default: '5000',
      description: 'Autoplay interval in milliseconds'
    },
    {
      name: 'loop',
      type: 'boolean',
      required: false,
      default: 'true',
      description: 'Whether to loop the carousel'
    },
    {
      name: 'showDots',
      type: 'boolean',
      required: false,
      default: 'true',
      description: 'Whether to show navigation dots'
    },
    {
      name: 'showArrows',
      type: 'boolean',
      required: false,
      default: 'true',
      description: 'Whether to show navigation arrows'
    },
    {
      name: 'orientation',
      type: "'horizontal' | 'vertical'",
      required: false,
      default: 'horizontal',
      description: 'Carousel orientation'
    },
    {
      name: 'analyticsId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Unique identifier for analytics tracking'
    },
    {
      name: 'analyticsEvent',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Event name for analytics tracking'
    },
    {
      name: 'analyticsData',
      type: 'Record<string, any>',
      required: false,
      default: 'undefined',
      description: 'Additional data for analytics tracking'
    },
    {
      name: 'ariaLabel',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Accessible label for screen readers'
    },
    {
      name: 'dataTestId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Test identifier for automated testing'
    },
    {
      name: 'onSlideChange',
      type: '(index: number) => void',
      required: false,
      description: 'Callback when slide changes'
    },
    {
      name: 'onAnalytics',
      type: '(event: string, data?: Record<string, any>) => void',
      required: false,
      default: 'undefined',
      description: 'Callback for analytics events'
    }
  ],

  // Navigation Components
  navbar: [
    {
      name: 'brand',
      type: 'React.ReactNode',
      required: false,
      description: 'Brand/logo content'
    },
    {
      name: 'items',
      type: 'NavItem[]',
      required: false,
      description: 'Navigation items'
    },
    {
      name: 'variant',
      type: "'default' | 'transparent' | 'solid' | 'bordered'",
      required: false,
      default: 'default',
      description: 'Visual style variant'
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      required: false,
      default: 'md',
      description: 'Size of the navbar'
    },
    {
      name: 'sticky',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether navbar should stick to top'
    },
    {
      name: 'mobileMenu',
      type: 'React.ReactNode',
      required: false,
      description: 'Mobile menu content'
    },
    {
      name: 'analyticsId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Unique identifier for analytics tracking'
    },
    {
      name: 'analyticsEvent',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Event name for analytics tracking'
    },
    {
      name: 'analyticsData',
      type: 'Record<string, any>',
      required: false,
      default: 'undefined',
      description: 'Additional data for analytics tracking'
    },
    {
      name: 'ariaLabel',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Accessible label for screen readers'
    },
    {
      name: 'dataTestId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Test identifier for automated testing'
    },
    {
      name: 'onAnalytics',
      type: '(event: string, data?: Record<string, any>) => void',
      required: false,
      default: 'undefined',
      description: 'Callback for analytics events'
    }
  ],

  sidebar: [
    {
      name: 'items',
      type: 'SidebarItem[]',
      required: true,
      description: 'Sidebar navigation items'
    },
    {
      name: 'collapsed',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether sidebar is collapsed'
    },
    {
      name: 'variant',
      type: "'default' | 'minimal' | 'bordered' | 'floating'",
      required: false,
      default: 'default',
      description: 'Visual style variant'
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      required: false,
      default: 'md',
      description: 'Size of the sidebar'
    },
    {
      name: 'persistent',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether sidebar state persists across sessions'
    },
    {
      name: 'analyticsId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Unique identifier for analytics tracking'
    },
    {
      name: 'analyticsEvent',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Event name for analytics tracking'
    },
    {
      name: 'analyticsData',
      type: 'Record<string, any>',
      required: false,
      default: 'undefined',
      description: 'Additional data for analytics tracking'
    },
    {
      name: 'ariaLabel',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Accessible label for screen readers'
    },
    {
      name: 'dataTestId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Test identifier for automated testing'
    },
    {
      name: 'onCollapse',
      type: '(collapsed: boolean) => void',
      required: false,
      description: 'Callback when sidebar collapse state changes'
    },
    {
      name: 'onAnalytics',
      type: '(event: string, data?: Record<string, any>) => void',
      required: false,
      default: 'undefined',
      description: 'Callback for analytics events'
    }
  ],

  breadcrumb: [
    {
      name: 'items',
      type: 'BreadcrumbItem[]',
      required: true,
      description: 'Breadcrumb items'
    },
    {
      name: 'separator',
      type: 'React.ReactNode',
      required: false,
      default: '/',
      description: 'Separator between breadcrumb items'
    },
    {
      name: 'variant',
      type: "'default' | 'minimal' | 'bordered' | 'pills'",
      required: false,
      default: 'default',
      description: 'Visual style variant'
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      required: false,
      default: 'md',
      description: 'Size of the breadcrumb'
    },
    {
      name: 'analyticsId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Unique identifier for analytics tracking'
    },
    {
      name: 'analyticsEvent',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Event name for analytics tracking'
    },
    {
      name: 'analyticsData',
      type: 'Record<string, any>',
      required: false,
      default: 'undefined',
      description: 'Additional data for analytics tracking'
    },
    {
      name: 'ariaLabel',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Accessible label for screen readers'
    },
    {
      name: 'dataTestId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Test identifier for automated testing'
    },
    {
      name: 'onAnalytics',
      type: '(event: string, data?: Record<string, any>) => void',
      required: false,
      default: 'undefined',
      description: 'Callback for analytics events'
    }
  ],

  // Data Components
  table: [
    {
      name: 'data',
      type: 'T[]',
      required: true,
      description: 'Array of data objects'
    },
    {
      name: 'columns',
      type: 'TableColumn<T>[]',
      required: true,
      description: 'Column definitions'
    },
    {
      name: 'variant',
      type: "'default' | 'striped' | 'bordered' | 'hoverable'",
      required: false,
      default: 'default',
      description: 'Visual style variant'
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      required: false,
      default: 'md',
      description: 'Size of the table'
    },
    {
      name: 'sortable',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether columns are sortable'
    },
    {
      name: 'selectable',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether rows are selectable'
    },
    {
      name: 'pagination',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether to show pagination'
    },
    {
      name: 'pageSize',
      type: 'number',
      required: false,
      default: '10',
      description: 'Number of items per page'
    },
    {
      name: 'analyticsId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Unique identifier for analytics tracking'
    },
    {
      name: 'analyticsEvent',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Event name for analytics tracking'
    },
    {
      name: 'analyticsData',
      type: 'Record<string, any>',
      required: false,
      default: 'undefined',
      description: 'Additional data for analytics tracking'
    },
    {
      name: 'ariaLabel',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Accessible label for screen readers'
    },
    {
      name: 'dataTestId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Test identifier for automated testing'
    },
    {
      name: 'onSort',
      type: '(column: string, direction: "asc" | "desc") => void',
      required: false,
      description: 'Callback when sorting changes'
    },
    {
      name: 'onSelect',
      type: '(selectedRows: T[]) => void',
      required: false,
      description: 'Callback when row selection changes'
    },
    {
      name: 'onAnalytics',
      type: '(event: string, data?: Record<string, any>) => void',
      required: false,
      default: 'undefined',
      description: 'Callback for analytics events'
    }
  ],

  // Feedback Components
  alert: [
    {
      name: 'variant',
      type: "'default' | 'destructive' | 'success' | 'warning' | 'info'",
      required: false,
      default: 'default',
      description: 'Visual style variant'
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      required: false,
      default: 'md',
      description: 'Size of the alert'
    },
    {
      name: 'dismissible',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether alert can be dismissed'
    },
    {
      name: 'icon',
      type: 'React.ReactNode',
      required: false,
      description: 'Custom icon for the alert'
    },
    {
      name: 'title',
      type: 'string',
      required: false,
      description: 'Alert title'
    },
    {
      name: 'analyticsId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Unique identifier for analytics tracking'
    },
    {
      name: 'analyticsEvent',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Event name for analytics tracking'
    },
    {
      name: 'analyticsData',
      type: 'Record<string, any>',
      required: false,
      default: 'undefined',
      description: 'Additional data for analytics tracking'
    },
    {
      name: 'ariaLabel',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Accessible label for screen readers'
    },
    {
      name: 'dataTestId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Test identifier for automated testing'
    },
    {
      name: 'onDismiss',
      type: '() => void',
      required: false,
      description: 'Callback when alert is dismissed'
    },
    {
      name: 'onAnalytics',
      type: '(event: string, data?: Record<string, any>) => void',
      required: false,
      default: 'undefined',
      description: 'Callback for analytics events'
    }
  ],

  toast: [
    {
      name: 'title',
      type: 'string',
      required: false,
      description: 'Toast title'
    },
    {
      name: 'description',
      type: 'string',
      required: false,
      description: 'Toast description'
    },
    {
      name: 'variant',
      type: "'default' | 'destructive' | 'success' | 'warning' | 'info'",
      required: false,
      default: 'default',
      description: 'Visual style variant'
    },
    {
      name: 'duration',
      type: 'number',
      required: false,
      default: '5000',
      description: 'Duration in milliseconds before auto-dismiss'
    },
    {
      name: 'position',
      type: "'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'",
      required: false,
      default: 'top-right',
      description: 'Position of the toast'
    },
    {
      name: 'dismissible',
      type: 'boolean',
      required: false,
      default: 'true',
      description: 'Whether toast can be dismissed'
    },
    {
      name: 'analyticsId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Unique identifier for analytics tracking'
    },
    {
      name: 'analyticsEvent',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Event name for analytics tracking'
    },
    {
      name: 'analyticsData',
      type: 'Record<string, any>',
      required: false,
      default: 'undefined',
      description: 'Additional data for analytics tracking'
    },
    {
      name: 'ariaLabel',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Accessible label for screen readers'
    },
    {
      name: 'dataTestId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Test identifier for automated testing'
    },
    {
      name: 'onDismiss',
      type: '() => void',
      required: false,
      description: 'Callback when toast is dismissed'
    },
    {
      name: 'onAnalytics',
      type: '(event: string, data?: Record<string, any>) => void',
      required: false,
      default: 'undefined',
      description: 'Callback for analytics events'
    }
  ],

  sonner: [
    {
      name: 'position',
      type: "'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'",
      required: false,
      default: 'top-right',
      description: 'Position of the toast notifications'
    },
    {
      name: 'theme',
      type: "'light' | 'dark' | 'system'",
      required: false,
      default: 'system',
      description: 'Theme for the toast notifications'
    },
    {
      name: 'richColors',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether to use rich colors'
    },
    {
      name: 'closeButton',
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Whether to show close button'
    },
    {
      name: 'duration',
      type: 'number',
      required: false,
      default: '4000',
      description: 'Default duration in milliseconds'
    },
    {
      name: 'analyticsId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Unique identifier for analytics tracking'
    },
    {
      name: 'analyticsEvent',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Event name for analytics tracking'
    },
    {
      name: 'analyticsData',
      type: 'Record<string, any>',
      required: false,
      default: 'undefined',
      description: 'Additional data for analytics tracking'
    },
    {
      name: 'ariaLabel',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Accessible label for screen readers'
    },
    {
      name: 'dataTestId',
      type: 'string',
      required: false,
      default: 'undefined',
      description: 'Test identifier for automated testing'
    },
    {
      name: 'onAnalytics',
      type: '(event: string, data?: Record<string, any>) => void',
      required: false,
      default: 'undefined',
      description: 'Callback for analytics events'
    }
  ]
} as const

export function getComponentProps(slug: string): ComponentProp[] {
  return COMPONENT_PROPS[slug] || [
    {
      name: 'children',
      type: 'React.ReactNode',
      required: false,
      description: 'The content to display inside the component'
    },
    {
      name: 'className',
      type: 'string',
      required: false,
      description: 'Additional CSS classes to apply to the component'
    }
  ]
}
