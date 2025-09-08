import React from 'react'
import { Accordion, Breadcrumbs, Calendar, DatePicker, TimePicker, InputOTP, RadioGroup, RadioGroupItem, Tabs, Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from 'mad-ui-components'

export interface ComponentExample {
  title: string
  description?: string
  code: string
  preview: React.ReactNode
}

export const formsExamples: Record<string, ComponentExample[]> = {
  accordion: [
    {
      title: 'Basic Accordion',
      description: 'A simple accordion component',
      code: `import { Accordion } from 'mad-ui-components'

export function AccordionExample() {
  const items = [
    {
      id: 'item-1',
      title: 'What is React?',
      content: 'React is a JavaScript library for building user interfaces.'
    },
    {
      id: 'item-2',
      title: 'What is TypeScript?',
      content: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
    }
  ]

  return <Accordion items={items} />
}`,
      preview: (
        <div className="w-full max-w-md">
          <Accordion 
            items={[
              {
                id: 'item-1',
                title: 'What is React?',
                content: 'React is a JavaScript library for building user interfaces.'
              },
              {
                id: 'item-2',
                title: 'What is TypeScript?',
                content: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
              }
            ]} 
          />
        </div>
      )
    },
    {
      title: 'Multiple Open Accordion',
      description: 'Accordion that allows multiple items to be open',
      code: `import { Accordion } from 'mad-ui-components'

export function MultipleAccordion() {
  const items = [
    {
      id: 'item-1',
      title: 'Frontend Technologies',
      content: 'React, Vue, Angular, Svelte'
    },
    {
      id: 'item-2',
      title: 'Backend Technologies',
      content: 'Node.js, Python, Java, Go'
    },
    {
      id: 'item-3',
      title: 'Database Technologies',
      content: 'PostgreSQL, MongoDB, Redis, MySQL'
    }
  ]

  return <Accordion items={items} multiple={true} />
}`,
      preview: (
        <div className="w-full max-w-md">
          <Accordion 
            items={[
              {
                id: 'item-1',
                title: 'Frontend Technologies',
                content: 'React, Vue, Angular, Svelte'
              },
              {
                id: 'item-2',
                title: 'Backend Technologies',
                content: 'Node.js, Python, Java, Go'
              },
              {
                id: 'item-3',
                title: 'Database Technologies',
                content: 'PostgreSQL, MongoDB, Redis, MySQL'
              }
            ]} 
            multiple={true}
          />
        </div>
      )
    },
    {
      title: 'Enterprise Features',
      description: 'Accordion with analytics, search, and accessibility features',
      code: `import { Accordion } from 'mad-ui-components'

export function EnterpriseAccordion() {
  const items = [
    {
      id: 'item-1',
      title: 'Getting Started',
      content: 'Learn the basics of our platform and how to get started quickly.'
    },
    {
      id: 'item-2',
      title: 'Advanced Features',
      content: 'Explore advanced features and customization options.'
    },
    {
      id: 'item-3',
      title: 'API Reference',
      content: 'Complete API documentation and examples.'
    }
  ]

  return (
    <Accordion
      items={items}
      allowMultiple={true}
      variant="outlined"
      size="md"
      searchable={true}
      searchPlaceholder="Search documentation..."
      keyboardNavigation={true}
      analyticsId="docs-accordion"
      analyticsEvent="accordion_interaction"
      analyticsData={{ section: 'documentation' }}
      ariaLabel="Documentation sections"
      dataTestId="docs-accordion"
      onSearch={(query) => console.log('Search:', query)}
      onToggle={(itemId, isOpen) => console.log('Toggle:', itemId, isOpen)}
      onAnalytics={(event, data) => {
        console.log('Analytics:', event, data)
      }}
    />
  )
}`,
      preview: (
        <div className="w-full max-w-md">
          <Accordion
            items={[
              {
                id: 'item-1',
                title: 'Getting Started',
                content: 'Learn the basics of our platform and how to get started quickly.'
              },
              {
                id: 'item-2',
                title: 'Advanced Features',
                content: 'Explore advanced features and customization options.'
              },
              {
                id: 'item-3',
                title: 'API Reference',
                content: 'Complete API documentation and examples.'
              }
            ]}
            variant="default"
            size="md"
            analyticsId="docs-accordion"
            analyticsEvent="accordion_interaction"
            analyticsData={{ section: 'documentation' }}
            ariaLabel="Documentation sections"
            dataTestId="docs-accordion"
            onAnalytics={(event, data) => {
              console.log('Analytics:', event, data)
            }}
          />
        </div>
      )
    }
  ],

  breadcrumbs: [
    {
      title: 'Basic Breadcrumbs',
      description: 'A simple breadcrumb navigation component',
      code: `import { Breadcrumbs } from 'mad-ui-components'

export function BreadcrumbsExample() {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' },
    { label: 'Smartphones' }
  ]

  return <Breadcrumbs items={items} />
}`,
      preview: (
        <div className="w-full max-w-md">
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Products', href: '/products' },
              { label: 'Electronics', href: '/products/electronics' },
              { label: 'Smartphones' }
            ]} 
          />
        </div>
      )
    }
  ],

  calendar: [
    {
      title: 'Basic Calendar',
      description: 'A simple calendar component',
      code: `import { Calendar } from 'mad-ui-components'

export function CalendarExample() {
  return <Calendar />
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Calendar />
        </div>
      )
    },
    {
      title: 'Modern Style Calendar',
      description: 'A calendar with modern design and enhanced features',
      code: `import { Calendar } from 'mad-ui-components'

export function ModernCalendarExample() {
  return (
    <Calendar 
      variant="outlined"
      size="lg"
      showWeekNumbers
      showToday
      highlightWeekends
      design="modern"
    />
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Calendar 
            variant="outlined"
            size="lg"
            showWeekNumbers
            showToday
            highlightWeekends
            design="modern"
          />
        </div>
      )
    }
  ],

  'date-picker': [
    {
      title: 'Basic Date Picker',
      description: 'A simple date picker component',
      code: `import { DatePicker } from 'mad-ui-components'

export function DatePickerExample() {
  return <DatePicker />
}`,
      preview: (
        <div className="w-full max-w-sm">
          <DatePicker />
        </div>
      )
    }
  ],

  'time-picker': [
    {
      title: 'Basic Time Picker',
      description: 'A simple time picker component',
      code: `import { TimePicker } from 'mad-ui-components'

export function TimePickerExample() {
  return <TimePicker />
}`,
      preview: (
        <div className="w-full max-w-sm">
          <TimePicker />
        </div>
      )
    }
  ],

  'input-otp': [
    {
      title: 'Basic OTP Input',
      description: 'A simple OTP input component',
      code: `import { InputOTP } from 'mad-ui-components'

export function InputOTPExample() {
  const [value, setValue] = useState('')
  return <InputOTP value={value} onChange={setValue} length={6} />
}`,
      preview: (
        <div className="w-full max-w-sm">
          <InputOTP value="" onChange={() => {}} length={6} />
        </div>
      )
    }
  ],

  'radio-group': [
    {
      title: 'Basic Radio Group',
      description: 'A simple radio group component',
      code: `import { RadioGroup } from 'mad-ui-components'

export function RadioGroupExample() {
  return (
    <RadioGroup>
      <RadioGroupItem value="option1">Option 1</RadioGroupItem>
      <RadioGroupItem value="option2">Option 2</RadioGroupItem>
      <RadioGroupItem value="option3">Option 3</RadioGroupItem>
    </RadioGroup>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <RadioGroup>
            <RadioGroupItem value="option1">Option 1</RadioGroupItem>
            <RadioGroupItem value="option2">Option 2</RadioGroupItem>
            <RadioGroupItem value="option3">Option 3</RadioGroupItem>
          </RadioGroup>
        </div>
      )
    }
  ],

  tabs: [
    {
      title: 'Basic Tabs',
      description: 'A simple tabs component',
      code: `import { Tabs } from 'mad-ui-components'

export function TabsExample() {
  const items = [
    {
      id: 'tab1',
      label: 'Tab 1',
      content: 'Content for tab 1'
    },
    {
      id: 'tab2',
      label: 'Tab 2',
      content: 'Content for tab 2'
    },
    {
      id: 'tab3',
      label: 'Tab 3',
      content: 'Content for tab 3'
    }
  ]

  return <Tabs items={items} />
}`,
      preview: (
        <div className="w-full max-w-md">
          <Tabs 
            items={[
              {
                id: 'tab1',
                label: 'Tab 1',
                content: 'Content for tab 1'
              },
              {
                id: 'tab2',
                label: 'Tab 2',
                content: 'Content for tab 2'
              },
              {
                id: 'tab3',
                label: 'Tab 3',
                content: 'Content for tab 3'
              }
            ]} 
          />
        </div>
      )
    }
  ],

  form: [
    {
      title: 'Basic Form',
      description: 'A simple form component',
      code: `import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from 'mad-ui-components'

export function FormExample() {
  return (
    <Form>
      <FormField name="email">
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <input type="email" placeholder="Enter your email" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
    </Form>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Form>
            <FormField name="email">
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </Form>
        </div>
      )
    }
  ]
}
