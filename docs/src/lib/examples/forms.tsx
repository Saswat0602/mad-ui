import React, { useState } from 'react'
import { Accordion, Breadcrumbs, DateTimePicker, InputOTP, RadioGroup, RadioGroupItem, Tabs, Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from 'mad-ui-components'
import { Calendar, Clock } from 'lucide-react'

// Breadcrumb Designs Demo Component
function BreadcrumbDesignsDemo() {
  const [selectedVariant, setSelectedVariant] = useState('default')
  
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' },
    { label: 'Smartphones' }
  ]

  const variants = ['default', 'minimal', 'outlined', 'modern', 'card', 'pill', 'gradient', 'steps']

  return (
    <div className="space-y-6">
      {/* Variant Selector */}
      <div className="flex flex-wrap gap-2">
        {variants.map((variant) => (
          <button
            key={variant}
            onClick={() => setSelectedVariant(variant)}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              selectedVariant === variant 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {variant}
          </button>
        ))}
      </div>

      {/* Breadcrumb Display */}
      <div className="p-4 bg-gray-50 rounded-lg">
        <Breadcrumbs 
          items={items} 
          variant={selectedVariant as 'default' | 'minimal' | 'outlined' | 'modern' | 'card' | 'pill' | 'gradient' | 'steps'}
          showHomeIcon={selectedVariant !== 'steps'}
        />
      </div>
    </div>
  )
}

// DateTime Picker Demo Component
function DateTimePickerDemo() {
  const [dateValue, setDateValue] = useState<Date | null>(null)
  const [timeValue, setTimeValue] = useState<Date | null>(null)
  const [bothValue, setBothValue] = useState<Date | null>(new Date())

  return (
    <div className="min-h-[600px] bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Modern DateTime Picker</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            A highly reusable, modern DateTime picker component with excellent UI/UX, multiple modes, and full user control.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Calendar className="mr-2 text-blue-600" size={20} />
              Date Only
            </h3>
            <div className="max-w-sm">
              <DateTimePicker
                mode="date"
                value={dateValue}
                onChange={(d) => setDateValue(d)}
                placeholder="Select a date"
              />
            </div>
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Selected:</p>
              <p className="font-mono text-sm">
                {dateValue ? dateValue.toLocaleDateString() : 'None'}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Clock className="mr-2 text-green-600" size={20} />
              Time Only (12hr)
            </h3>
            <div className="max-w-sm">
              <DateTimePicker
                mode="time"
                timeFormat="12"
                value={timeValue}
                onChange={(d) => setTimeValue(d)}
                placeholder="Select time"
              />
            </div>
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Selected:</p>
              <p className="font-mono text-sm">
                {timeValue
                  ? timeValue.toLocaleTimeString([], { hour12: true, hour: 'numeric', minute: '2-digit' })
                  : 'None'}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Calendar className="mr-1 text-purple-600" size={20} />
              <Clock className="mr-2 text-purple-600" size={20} />
              Date & Time
            </h3>
            <div className="max-w-sm">
              <DateTimePicker
                mode="both"
                timeFormat="12"
                value={bothValue}
                onChange={(d) => setBothValue(d)}
                placeholder="Select date & time"
              />
            </div>
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Selected:</p>
              <p className="font-mono text-sm">
                {bothValue
                  ? `${bothValue.toLocaleDateString()} ${bothValue.toLocaleTimeString([], { hour12: true, hour: 'numeric', minute: '2-digit' })}`
                  : 'None'}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Component Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🎛️ Highly Configurable</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Three modes: date, time, or both</li>
                <li>• 12/24 hour time format support</li>
                <li>• Customizable placeholders</li>
                <li>• Disabled state support</li>
                <li>• Custom CSS classes</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🎨 Modern Design</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Clean, minimal interface</li>
                <li>• Smooth animations & transitions</li>
                <li>• Responsive design</li>
                <li>• Focus states & accessibility</li>
                <li>• Modern color scheme</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">📅 Smart Calendar</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Clickable month/year headers</li>
                <li>• Modal selectors for quick navigation</li>
                <li>• Today highlighting</li>
                <li>• Previous/next month navigation</li>
                <li>• Weekend styling</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">⚡ User Experience</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Click outside to close</li>
                <li>• Tab navigation between date/time</li>
                <li>• Intuitive time selection</li>
                <li>• Real-time value updates</li>
                <li>• Keyboard accessible</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

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
      description: 'A simple accordion component with smooth animations',
      code: `import { Accordion } from 'mad-ui-components'

export function AccordionExample() {
  const items = [
    {
      id: 'item-1',
      title: 'What is React?',
      content: 'React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".'
    },
    {
      id: 'item-2',
      title: 'What is TypeScript?',
      content: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds static type definitions to JavaScript.'
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
                content: 'React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".'
              },
              {
                id: 'item-2',
                title: 'What is TypeScript?',
                content: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds static type definitions to JavaScript.'
              }
            ]} 
          />
        </div>
      )
    },
    {
      title: 'Multiple Open Accordion',
      description: 'Accordion that allows multiple items to be open simultaneously',
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

  return <Accordion items={items} allowMultiple={true} />
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
            allowMultiple={true}
          />
        </div>
      )
    },
    {
      title: 'Custom Icon Position',
      description: 'Accordion with icon positioned on the left side',
      code: `import { Accordion } from 'mad-ui-components'
import { ChevronRight } from 'lucide-react'

export function CustomIconAccordion() {
  const items = [
    {
      id: 'item-1',
      title: 'Getting Started',
      content: 'Learn the basics of our platform'
    },
    {
      id: 'item-2',
      title: 'Advanced Features',
      content: 'Explore advanced functionality'
    }
  ]

  return (
    <Accordion 
      items={items} 
      iconPosition="left"
      customIcon={ChevronRight}
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
                content: 'Learn the basics of our platform'
              },
              {
                id: 'item-2',
                title: 'Advanced Features',
                content: 'Explore advanced functionality'
              }
            ]} 
            iconPosition="left"
          />
        </div>
      )
    },
    {
      title: 'Rich Content',
      description: 'Accordion with complex content including lists and formatting',
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
            onAnalytics={(event: string, data?: Record<string, unknown>) => {
              console.log('Analytics:', event, data)
            }}
          />
        </div>
      )
    }
  ],

  breadcrumbs: [
    {
      title: 'Multiple Breadcrumb Designs',
      description: 'Choose from various breadcrumb styles - modern, card, pill, gradient, and steps',
      code: `import { Breadcrumbs } from 'mad-ui-components'
import { useState } from 'react'

export function BreadcrumbDesignsDemo() {
  const [selectedVariant, setSelectedVariant] = useState('default')
  
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' },
    { label: 'Smartphones' }
  ]

  const variants = ['default', 'minimal', 'outlined', 'modern', 'card', 'pill', 'gradient', 'steps']

  return (
    <div className="space-y-6">
      {/* Variant Selector */}
      <div className="flex flex-wrap gap-2">
        {variants.map((variant) => (
          <button
            key={variant}
            onClick={() => setSelectedVariant(variant)}
            className={\`px-3 py-1 text-sm rounded-md transition-colors \${
              selectedVariant === variant 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }\`}
          >
            {variant}
          </button>
        ))}
      </div>

      {/* Breadcrumb Display */}
      <div className="p-4 bg-gray-50 rounded-lg">
        <Breadcrumbs 
          items={items} 
          variant={selectedVariant}
          showHomeIcon={selectedVariant !== 'steps'}
        />
      </div>
    </div>
  )
}`,
      preview: (
        <BreadcrumbDesignsDemo />
      )
    }
  ],

  'datetime-picker': [
    {
      title: 'Modern Date & Time Picker',
      description: 'Beautiful, modern date and time picker with horizontal time selection and custom Select components - choose date, time, or both together',
      code: `import { DateTimePicker } from 'mad-ui-components'
import { useState } from 'react'

export function DateTimePickerDemo() {
  const [selectedMode, setSelectedMode] = useState<'date' | 'time' | 'both'>('both')
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

  return (
    <div className="space-y-6">
      {/* Mode Selector */}
      <div className="flex gap-2">
        {(['date', 'time', 'both'] as const).map((mode) => (
          <button
            key={mode}
            onClick={() => setSelectedMode(mode)}
            className={\`px-4 py-2 text-sm rounded-md transition-colors \${
              selectedMode === mode 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }\`}
          >
            {mode.charAt(0).toUpperCase() + mode.slice(1)}
          </button>
        ))}
      </div>

      {/* DateTime Picker */}
      <div className="max-w-sm">
        <DateTimePicker 
          mode={selectedMode}
          value={selectedDate}
          onChange={setSelectedDate}
          placeholder={\`Select \${selectedMode}\`}
        />
      </div>

      {/* Selected Value Display */}
      {selectedDate && (
        <div className="p-3 bg-blue-50 rounded-md">
          <p className="text-sm text-blue-800">
            <strong>Selected:</strong> {selectedDate.toLocaleString()}
          </p>
        </div>
      )}
    </div>
  )
}`,
      preview: (
        <DateTimePickerDemo />
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
