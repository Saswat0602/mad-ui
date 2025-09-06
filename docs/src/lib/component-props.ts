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
      type: "'default' | 'primary' | 'destructive' | 'outline' | 'ghost'",
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
      description: 'The type of input field'
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
      required: false,
      default: '0',
      description: 'The current progress value (0-100)'
    },
    {
      name: 'max',
      type: 'number',
      required: false,
      default: '100',
      description: 'The maximum progress value'
    }
  ],

  slider: [
    {
      name: 'value',
      type: 'number[]',
      required: false,
      description: 'The current slider value(s)'
    },
    {
      name: 'onChange',
      type: '(value: number[]) => void',
      required: false,
      description: 'Function to call when the slider value changes'
    },
    {
      name: 'min',
      type: 'number',
      required: false,
      default: '0',
      description: 'The minimum slider value'
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

  alert: [
    {
      name: 'variant',
      type: "'default' | 'destructive'",
      required: false,
      default: 'default',
      description: 'The visual style variant of the alert'
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      required: false,
      description: 'The content to display inside the alert'
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
  ]
}

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
