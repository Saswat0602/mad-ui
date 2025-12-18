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
      type: "'sm' | 'default' | 'lg' | 'icon'",
      required: false,
      default: 'default',
      description: 'The size of the button'
    },
    {
      name: 'loading',
      type: 'boolean',
      required: false,
      default: false,
      description: 'Whether the button is in a loading state with spinner'
    },
    {
      name: 'leftIcon',
      type: 'React.ReactNode',
      required: false,
      description: 'Icon to display on the left side of the button text'
    },
    {
      name: 'rightIcon',
      type: 'React.ReactNode',
      required: false,
      description: 'Icon to display on the right side of the button text'
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      required: false,
      default: false,
      description: 'Whether the button should take the full width of its container'
    },
    {
      name: 'disabled',
      type: 'boolean',
      required: false,
      default: false,
      description: 'Whether the button is disabled'
    },
    {
      name: 'onClick',
      type: '(event: React.MouseEvent<HTMLButtonElement>) => void',
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
      description: 'The type of input (text, email, password, number, etc.)'
    },
    {
      name: 'error',
      type: 'boolean',
      required: false,
      default: false,
      description: 'Whether the input is in an error state'
    },
    {
      name: 'success',
      type: 'boolean',
      required: false,
      default: false,
      description: 'Whether the input is in a success state'
    },
    {
      name: 'leftIcon',
      type: 'React.ReactNode',
      required: false,
      description: 'Icon to display on the left side inside the input'
    },
    {
      name: 'rightIcon',
      type: 'React.ReactNode',
      required: false,
      description: 'Icon to display on the right side inside the input'
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      required: false,
      default: true,
      description: 'Whether the input should take the full width of its container'
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
      description: 'The controlled value of the input'
    },
    {
      name: 'onChange',
      type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
      required: false,
      description: 'Function to call when the input value changes'
    },
    {
      name: 'disabled',
      type: 'boolean',
      required: false,
      default: false,
      description: 'Whether the input is disabled'
    }
  ],

  card: [
    {
      name: 'variant',
      type: "'default' | 'elevated' | 'outlined' | 'ghost'",
      required: false,
      default: 'default',
      description: 'The visual style variant of the card'
    },
    {
      name: 'hoverable',
      type: 'boolean',
      required: false,
      default: false,
      description: 'Whether the card should have a lift effect on hover'
    },
    {
      name: 'clickable',
      type: 'boolean',
      required: false,
      default: false,
      description: 'Whether the card should have click animations and cursor pointer'
    },
    {
      name: 'onClick',
      type: '() => void',
      required: false,
      description: 'Function to call when the card is clicked (requires clickable=true)'
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      required: false,
      description: 'The content to display inside the card'
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
      name: 'description',
      type: 'string',
      required: false,
      description: 'Helper text to display below the label'
    },
    {
      name: 'error',
      type: 'boolean',
      required: false,
      default: false,
      description: 'Whether the checkbox is in an error state'
    },
    {
      name: 'indeterminate',
      type: 'boolean',
      required: false,
      default: false,
      description: 'Whether the checkbox is in an indeterminate state (partially checked)'
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      required: false,
      default: 'md',
      description: 'The size of the checkbox'
    },
    {
      name: 'checked',
      type: 'boolean',
      required: false,
      description: 'Whether the checkbox is checked (controlled)'
    },
    {
      name: 'onChange',
      type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
      required: false,
      description: 'Function to call when the checkbox state changes'
    },
    {
      name: 'disabled',
      type: 'boolean',
      required: false,
      default: false,
      description: 'Whether the checkbox is disabled'
    }
  ],

  radio: [
    {
      name: 'label',
      type: 'string',
      required: false,
      description: 'Label text for the radio button'
    },
    {
      name: 'description',
      type: 'string',
      required: false,
      description: 'Helper text to display below the label'
    },
    {
      name: 'error',
      type: 'boolean',
      required: false,
      default: false,
      description: 'Whether the radio button is in an error state'
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      required: false,
      default: 'md',
      description: 'The size of the radio button'
    },
    {
      name: 'checked',
      type: 'boolean',
      required: false,
      description: 'Whether the radio button is checked'
    },
    {
      name: 'onChange',
      type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
      required: false,
      description: 'Function to call when the radio button is selected'
    },
    {
      name: 'disabled',
      type: 'boolean',
      required: false,
      default: false,
      description: 'Whether the radio button is disabled'
    }
  ],

  switch: [
    {
      name: 'label',
      type: 'string',
      required: false,
      description: 'Label text for the switch'
    },
    {
      name: 'description',
      type: 'string',
      required: false,
      description: 'Helper text to display below the label'
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      required: false,
      default: 'md',
      description: 'The size of the switch'
    },
    {
      name: 'checked',
      type: 'boolean',
      required: false,
      description: 'Whether the switch is checked (controlled)'
    },
    {
      name: 'onChange',
      type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
      required: false,
      description: 'Function to call when the switch state changes'
    },
    {
      name: 'disabled',
      type: 'boolean',
      required: false,
      default: false,
      description: 'Whether the switch is disabled'
    }
  ],

  progress: [
    {
      name: 'value',
      type: 'number',
      required: true,
      description: 'The current progress value (0-100 by default)'
    },
    {
      name: 'max',
      type: 'number',
      required: false,
      default: 100,
      description: 'The maximum progress value'
    },
    {
      name: 'variant',
      type: "'default' | 'success' | 'warning' | 'destructive'",
      required: false,
      default: 'default',
      description: 'The visual style variant of the progress bar'
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      required: false,
      default: 'md',
      description: 'The height of the progress bar'
    },
    {
      name: 'showLabel',
      type: 'boolean',
      required: false,
      default: false,
      description: 'Whether to display the label and percentage'
    },
    {
      name: 'label',
      type: 'string',
      required: false,
      description: 'The label text to display above the progress bar'
    },
    {
      name: 'indicatorClassName',
      type: 'string',
      required: false,
      description: 'Additional CSS classes for the progress indicator'
    }
  ],

  rating: [
    {
      name: 'value',
      type: 'number',
      required: true,
      description: 'The current rating value'
    },
    {
      name: 'max',
      type: 'number',
      required: false,
      default: 5,
      description: 'The maximum rating value (number of stars)'
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
      default: false,
      description: 'Whether the rating is read-only (not interactive)'
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      required: false,
      default: 'md',
      description: 'The size of the star icons'
    },
    {
      name: 'showValue',
      type: 'boolean',
      required: false,
      default: false,
      description: 'Whether to display the numeric rating value'
    },
    {
      name: 'label',
      type: 'string',
      required: false,
      description: 'The label text to display above the rating'
    },
    {
      name: 'precision',
      type: 'number',
      required: false,
      default: 1,
      description: 'The precision of rating values (1 for whole numbers, 0.5 for half stars)'
    }
  ],

  skeleton: [
    {
      name: 'variant',
      type: "'text' | 'circular' | 'rectangular' | 'rounded'",
      required: false,
      default: 'rounded',
      description: 'The shape variant of the skeleton'
    },
    {
      name: 'animation',
      type: "'pulse' | 'wave' | 'none'",
      required: false,
      default: 'pulse',
      description: 'The animation type for the skeleton'
    },
    {
      name: 'lines',
      type: 'number',
      required: false,
      default: 1,
      description: 'Number of skeleton lines to display (for text variant)'
    },
    {
      name: 'className',
      type: 'string',
      required: false,
      description: 'Additional CSS classes to apply to the skeleton'
    }
  ],

  textarea: [
    {
      name: 'error',
      type: 'boolean',
      required: false,
      default: false,
      description: 'Whether the textarea is in an error state'
    },
    {
      name: 'success',
      type: 'boolean',
      required: false,
      default: false,
      description: 'Whether the textarea is in a success state'
    },
    {
      name: 'resize',
      type: "'none' | 'vertical' | 'horizontal' | 'both'",
      required: false,
      default: 'vertical',
      description: 'Controls the resize behavior of the textarea'
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      required: false,
      default: true,
      description: 'Whether the textarea should take the full width of its container'
    },
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
      description: 'The controlled value of the textarea'
    },
    {
      name: 'onChange',
      type: '(event: React.ChangeEvent<HTMLTextAreaElement>) => void',
      required: false,
      description: 'Function to call when the textarea value changes'
    },
    {
      name: 'disabled',
      type: 'boolean',
      required: false,
      default: false,
      description: 'Whether the textarea is disabled'
    },
    {
      name: 'rows',
      type: 'number',
      required: false,
      default: 3,
      description: 'The number of visible text lines'
    }
  ],

  label: [
    {
      name: 'htmlFor',
      type: 'string',
      required: false,
      description: 'The ID of the form element this label is associated with'
    },
    {
      name: 'required',
      type: 'boolean',
      required: false,
      default: false,
      description: 'Whether to show a required indicator (*)'
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      required: false,
      description: 'The content to display inside the label'
    }
  ],

  select: [
    {
      name: 'value',
      type: 'string',
      required: false,
      description: 'The selected value (controlled)'
    },
    {
      name: 'onValueChange',
      type: '(value: string) => void',
      required: false,
      description: 'Function to call when the selection changes'
    },
    {
      name: 'defaultValue',
      type: 'string',
      required: false,
      description: 'The default selected value (uncontrolled)'
    },
    {
      name: 'disabled',
      type: 'boolean',
      required: false,
      default: false,
      description: 'Whether the select is disabled'
    },
    {
      name: 'placeholder',
      type: 'string',
      required: false,
      description: 'Placeholder text to show when no value is selected'
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      required: true,
      description: 'SelectTrigger, SelectContent, and SelectItem components'
    }
  ]
}

export function getComponentProps(slug: string): ComponentProp[] {
  return COMPONENT_PROPS[slug] || []
}
