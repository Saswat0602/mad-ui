import React, { useState } from 'react'
import { 
  Accordion, 
  Breadcrumbs, 
  DateTimePicker, 
  InputOTP, 
  RadioGroup, 
  RadioGroupItem, 
  Tabs, 
  Form, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription,
  FormMessage, 
  Input,
  Button,
  PasswordInput,
  NumberInput,
  MultiSelect,
  DateRangePicker,
  TimePicker,
  FileUpload,
  type DateRange,
  type MultiSelectOption,
  Calendar as MadCalendar 
} from 'mad-ui-components'
import { Calendar as CalendarIcon, Clock, Sliders, Palette, CalendarDays, Zap } from 'lucide-react'

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
              <CalendarIcon className="mr-2 text-blue-600" size={20} />
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
              <CalendarIcon className="mr-1 text-purple-600" size={20} />
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
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2"><Sliders size={16} className="text-primary" /> Highly Configurable</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Three modes: date, time, or both</li>
                <li>• 12/24 hour time format support</li>
                <li>• Customizable placeholders</li>
                <li>• Disabled state support</li>
                <li>• Custom CSS classes</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2"><Palette size={16} className="text-primary" /> Modern Design</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Clean, minimal interface</li>
                <li>• Smooth animations & transitions</li>
                <li>• Responsive design</li>
                <li>• Focus states & accessibility</li>
                <li>• Modern color scheme</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2"><CalendarDays size={16} className="text-primary" /> Smart Calendar</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Clickable month/year headers</li>
                <li>• Modal selectors for quick navigation</li>
                <li>• Today highlighting</li>
                <li>• Previous/next month navigation</li>
                <li>• Weekend styling</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2"><Zap size={16} className="text-primary" /> User Experience</h3>
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
      title: 'Composable Form System',
      description: 'Context-driven accessible form fields with automatic ARIA linking and validation feedback',
      code: `import { 
  Form, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription, 
  FormMessage, 
  Input, 
  Button 
} from 'mad-ui-components'
import { useState } from 'react'

export function ProfileForm() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<{ username?: string; email?: string }>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs: { username?: string; email?: string } = {}
    if (username.length < 3) errs.username = 'Username must be at least 3 characters.'
    if (!email.includes('@')) errs.email = 'Please provide a valid corporate email.'
    setErrors(errs)
  }

  return (
    <Form onSubmit={handleSubmit} className="space-y-4">
      <FormField name="username" error={errors.username}>
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="alex.chen" />
          </FormControl>
          <FormDescription>Your public display handle.</FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField name="email" error={errors.email}>
        <FormItem>
          <FormLabel>Work Email</FormLabel>
          <FormControl>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="alex@company.com" />
          </FormControl>
          <FormDescription>Used for billing and security alerts.</FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>

      <Button type="submit">Save Changes</Button>
    </Form>
  )
}`,
      preview: <FormDemo />
    }
  ],

  calendar: [
    {
      title: 'Interactive Calendar',
      description: 'A responsive calendar with month navigation and date selection',
      code: `import { Calendar } from 'mad-ui-components'
import { useState } from 'react'

export function CalendarExample() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="flex justify-center p-4">
      <Calendar 
        value={date} 
        onChange={setDate} 
      />
    </div>
  )
}`,
      preview: <CalendarDemo />
    }
  ],

  'password-input': [
    {
      title: 'Password with Reveal & Strength Meter',
      description: 'Security password input with visibility toggle button and score meter',
      code: `import { PasswordInput } from 'mad-ui-components'
import { useState } from 'react'

export function PasswordInputExample() {
  const [password, setPassword] = useState('')
  return (
    <div className="w-full max-w-sm space-y-3">
      <PasswordInput
        placeholder="Enter master password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        strengthMeter
        strengthScore={Math.min(4, Math.floor(password.length / 3))}
      />
    </div>
  )
}`,
      preview: <PasswordInputDemo />
    }
  ],

  'number-input': [
    {
      title: 'Number Stepper with Clamp Bounds',
      description: 'Numeric stepper with step buttons, keyboard arrow controls, and clamp validation',
      code: `import { NumberInput } from 'mad-ui-components'
import { useState } from 'react'

export function NumberInputExample() {
  const [qty, setQty] = useState<number | undefined>(3)
  return (
    <div className="w-full max-w-xs space-y-2">
      <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Seat Quantity</label>
      <NumberInput
        min={1}
        max={50}
        step={1}
        value={qty}
        onChange={setQty}
      />
    </div>
  )
}`,
      preview: <NumberInputDemo />
    }
  ],

  'multi-select': [
    {
      title: 'Searchable Tag Multi-Select',
      description: 'Multi-value option selection with inline pill removal, search query filter, and max item badges',
      code: `import { MultiSelect } from 'mad-ui-components'
import { useState } from 'react'

const ROLES = [
  { label: 'Administrator', value: 'admin' },
  { label: 'Software Engineer', value: 'swe' },
  { label: 'Product Designer', value: 'designer' },
  { label: 'DevOps / SRE', value: 'devops' },
  { label: 'Billing Specialist', value: 'billing' }
]

export function MultiSelectExample() {
  const [selected, setSelected] = useState(['admin', 'swe'])

  return (
    <div className="w-full max-w-sm space-y-2">
      <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Assigned Team Roles</label>
      <MultiSelect
        options={ROLES}
        value={selected}
        onChange={setSelected}
        placeholder="Choose roles..."
      />
    </div>
  )
}`,
      preview: <MultiSelectDemo />
    }
  ],

  'date-range-picker': [
    {
      title: 'Date Range with Preset Shortcuts',
      description: 'Dual-calendar range selector with fast preset buttons for common billing intervals',
      code: `import { DateRangePicker, DateRange } from 'mad-ui-components'
import { useState } from 'react'

export function DateRangePickerExample() {
  const [range, setRange] = useState<DateRange>({
    from: new Date(2026, 9, 1),
    to: new Date(2026, 9, 31)
  })

  return (
    <div className="w-full max-w-sm space-y-2">
      <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Audit Time Window</label>
      <DateRangePicker
        value={range}
        onChange={setRange}
      />
    </div>
  )
}`,
      preview: <DateRangePickerDemo />
    }
  ],

  'time-picker': [
    {
      title: 'Segmented Time Selector',
      description: 'Time picker supporting 12-hour AM/PM and 24-hour modes with minute stepper controls',
      code: `import { TimePicker } from 'mad-ui-components'
import { useState } from 'react'

export function TimePickerExample() {
  const [time, setTime] = useState('09:30 AM')

  return (
    <div className="w-full max-w-xs space-y-2">
      <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Office Check-in Time</label>
      <TimePicker
        value={time}
        onChange={setTime}
        format="12h"
      />
    </div>
  )
}`,
      preview: <TimePickerDemo />
    }
  ],

  'file-upload': [
    {
      title: 'Drag & Drop File Upload Zone',
      description: 'Dropzone with drag feedback, file size limits, removal triggers, and thumbnail previews',
      code: `import { FileUpload } from 'mad-ui-components'
import { useState } from 'react'

export function FileUploadExample() {
  const [files, setFiles] = useState<File[]>([])

  return (
    <div className="w-full max-w-md space-y-2">
      <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Identity Documents</label>
      <FileUpload
        value={files}
        onChange={setFiles}
        maxSize={10 * 1024 * 1024}
        maxFiles={3}
        accept="image/*,application/pdf"
        title="Upload passport or national ID"
        description="PDF, PNG, JPG up to 10MB"
      />
    </div>
  )
}`,
      preview: <FileUploadDemo />
    }
  ]
}

function PasswordInputDemo() {
  const [password, setPassword] = useState('SecretKey123!')
  return (
    <div className="w-full max-w-sm p-4">
      <PasswordInput
        placeholder="Enter master password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        strengthMeter
        strengthScore={3}
      />
    </div>
  )
}

function NumberInputDemo() {
  const [qty, setQty] = useState<number | undefined>(5)
  return (
    <div className="w-full max-w-xs p-4">
      <NumberInput
        min={1}
        max={20}
        step={1}
        value={qty}
        onChange={setQty}
      />
    </div>
  )
}

function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <div className="flex justify-center p-4">
      <MadCalendar value={date} onChange={setDate} />
    </div>
  )
}

function FormDemo() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const nextErrors: Record<string, string> = {}
    if (!username.trim() || username.length < 3) {
      nextErrors.username = 'Username must be at least 3 characters.'
    }
    if (!email.trim() || !email.includes('@')) {
      nextErrors.email = 'Please provide a valid corporate email.'
    }

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <div className="w-full max-w-md p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm">
      <Form onSubmit={handleSubmit} className="space-y-4">
        <FormField name="username" error={errors.username}>
          <FormItem>
            <FormLabel>Workspace Username</FormLabel>
            <FormControl>
              <Input
                placeholder="alex.developer"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value)
                  if (errors.username) setErrors(prev => ({ ...prev, username: '' }))
                }}
              />
            </FormControl>
            <FormDescription>Your public display handle in this team.</FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField name="email" error={errors.email}>
          <FormItem>
            <FormLabel>Work Email</FormLabel>
            <FormControl>
              <Input
                type="email"
                placeholder="alex@company.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (errors.email) setErrors(prev => ({ ...prev, email: '' }))
                }}
              />
            </FormControl>
            <FormDescription>Used for billing and security alerts.</FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>

        <div className="pt-2">
          <Button type="submit" className="w-full">
            {submitted ? 'Saved Successfully!' : 'Save Profile'}
          </Button>
        </div>
      </Form>
    </div>
  )
}

const SAMPLE_ROLES: MultiSelectOption[] = [
  { label: 'Administrator', value: 'admin' },
  { label: 'Software Engineer', value: 'swe' },
  { label: 'Product Designer', value: 'designer' },
  { label: 'DevOps / SRE', value: 'devops' },
  { label: 'Billing Specialist', value: 'billing' }
]

function MultiSelectDemo() {
  const [selected, setSelected] = useState(['admin', 'swe'])

  return (
    <div className="w-full max-w-sm space-y-2">
      <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Assigned Team Roles</label>
      <MultiSelect
        options={SAMPLE_ROLES}
        value={selected}
        onChange={setSelected}
        placeholder="Choose roles..."
      />
      <p className="text-xs text-zinc-500">Selected values: {selected.join(', ') || 'None'}</p>
    </div>
  )
}

function DateRangePickerDemo() {
  const [range, setRange] = useState<DateRange>({
    from: new Date(2026, 9, 1),
    to: new Date(2026, 9, 31)
  })

  return (
    <div className="w-full max-w-sm space-y-2">
      <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Audit Time Window</label>
      <DateRangePicker
        value={range}
        onChange={setRange}
      />
    </div>
  )
}

function TimePickerDemo() {
  const [time, setTime] = useState('09:30 AM')

  return (
    <div className="w-full max-w-xs space-y-2">
      <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Office Check-in Time</label>
      <TimePicker
        value={time}
        onChange={setTime}
        format="12h"
      />
      <p className="text-xs text-zinc-500">Formatted time: {time}</p>
    </div>
  )
}

function FileUploadDemo() {
  const [files, setFiles] = useState<File[]>([])

  return (
    <div className="w-full max-w-md space-y-2">
      <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Identity Documents</label>
      <FileUpload
        value={files}
        onChange={setFiles}
        maxSize={10 * 1024 * 1024}
        maxFiles={3}
        accept="image/*,application/pdf"
        title="Upload passport or national ID"
        description="PDF, PNG, JPG up to 10MB"
      />
    </div>
  )
}
