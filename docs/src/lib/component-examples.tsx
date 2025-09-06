import React from 'react'

export interface ComponentExample {
  title: string
  description?: string
  code: string
  preview: React.ReactNode
}

export const COMPONENT_EXAMPLES: Record<string, ComponentExample[]> = {
  button: [
    {
      title: 'Default',
      description: 'The default button variant.',
      code: `import { Button } from 'mad-ui-components'

export function ButtonDemo() {
  return <Button>Button</Button>
}`,
      preview: (
        <div className="flex items-center space-x-2">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Button
          </button>
        </div>
      )
    },
    {
      title: 'Destructive',
      description: 'Destructive variant for dangerous actions.',
      code: `import { Button } from 'mad-ui-components'

export function ButtonDestructive() {
  return <Button variant="destructive">Destructive</Button>
}`,
      preview: (
        <div className="flex items-center space-x-2">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2">
            Destructive
          </button>
        </div>
      )
    },
    {
      title: 'Outline',
      description: 'Outline variant for secondary actions.',
      code: `import { Button } from 'mad-ui-components'

export function ButtonOutline() {
  return <Button variant="outline">Outline</Button>
}`,
      preview: (
        <div className="flex items-center space-x-2">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            Outline
          </button>
        </div>
      )
    },
    {
      title: 'Secondary',
      description: 'Secondary variant for less prominent actions.',
      code: `import { Button } from 'mad-ui-components'

export function ButtonSecondary() {
  return <Button variant="secondary">Secondary</Button>
}`,
      preview: (
        <div className="flex items-center space-x-2">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
            Secondary
          </button>
        </div>
      )
    },
    {
      title: 'Ghost',
      description: 'Ghost variant for subtle actions.',
      code: `import { Button } from 'mad-ui-components'

export function ButtonGhost() {
  return <Button variant="ghost">Ghost</Button>
}`,
      preview: (
        <div className="flex items-center space-x-2">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            Ghost
          </button>
        </div>
      )
    },
    {
      title: 'Link',
      description: 'Link variant for navigation actions.',
      code: `import { Button } from 'mad-ui-components'

export function ButtonLink() {
  return <Button variant="link">Link</Button>
}`,
      preview: (
        <div className="flex items-center space-x-2">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2">
            Link
          </button>
        </div>
      )
    },
    {
      title: 'With Icon',
      description: 'Button with an icon.',
      code: `import { Button } from 'mad-ui-components'
import { Download } from 'lucide-react'

export function ButtonWithIcon() {
  return (
    <Button>
      <Download className="mr-2 h-4 w-4" />
      Download
    </Button>
  )
}`,
      preview: (
        <div className="flex items-center space-x-2">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download
          </button>
        </div>
      )
    },
    {
      title: 'Loading',
      description: 'Button in a loading state.',
      code: `import { Button } from 'mad-ui-components'

export function ButtonLoading() {
  return (
    <Button disabled>
      <svg className="mr-2 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Please wait
    </Button>
  )
}`,
      preview: (
        <div className="flex items-center space-x-2">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2" disabled>
            <svg className="mr-2 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Please wait
          </button>
        </div>
      )
    }
  ],

  input: [
    {
      title: 'Default',
      description: 'The default input variant.',
      code: `import { Input } from 'mad-ui-components'

export function InputDemo() {
  return <Input placeholder="Enter text..." />
}`,
      preview: (
        <div className="w-full max-w-sm">
          <input 
            className="h-11 w-full rounded-lg border-2 border-slate-300 bg-white px-4 text-sm transition-all duration-200 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 dark:focus:border-blue-400 dark:focus:ring-blue-400/20" 
            placeholder="Enter text..." 
          />
        </div>
      )
    },
    {
      title: 'With Label',
      description: 'Input with a label and helper text.',
      code: `import { Input } from 'mad-ui-components'

export function InputWithLabel() {
  return (
    <Input 
      label="Email" 
      type="email" 
      placeholder="Enter your email" 
      helperText="We'll never share your email." 
    />
  )
}`,
      preview: (
        <div className="w-full max-w-sm space-y-2">
          <label className="text-sm font-medium leading-none">Email</label>
          <input 
            className="h-11 w-full rounded-lg border-2 border-slate-300 bg-white px-4 text-sm transition-all duration-200 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 dark:focus:border-blue-400 dark:focus:ring-blue-400/20" 
            type="email" 
            placeholder="Enter your email" 
          />
          <p className="text-xs leading-relaxed text-slate-500">We&apos;ll never share your email.</p>
        </div>
      )
    },
    {
      title: 'Error State',
      description: 'Input in an error state.',
      code: `import { Input } from 'mad-ui-components'

export function InputError() {
  return (
    <Input 
      label="Password" 
      type="password" 
      error="Password must be at least 8 characters" 
    />
  )
}`,
      preview: (
        <div className="w-full max-w-sm space-y-2">
          <label className="text-sm font-medium leading-none">Password</label>
          <input 
            className="h-11 w-full rounded-lg border-2 border-red-500 bg-white px-4 text-sm transition-all duration-200 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 dark:border-red-400 dark:bg-slate-800 dark:text-red-100 dark:focus:border-red-400 dark:focus:ring-red-400/20" 
            type="password" 
          />
          <p className="text-xs leading-relaxed text-red-500">Password must be at least 8 characters</p>
        </div>
      )
    },
    {
      title: 'Success State',
      description: 'Input in a success state.',
      code: `import { Input } from 'mad-ui-components'

export function InputSuccess() {
  return (
    <Input 
      label="Username" 
      variant="success" 
      value="john_doe" 
      helperText="Username is available" 
    />
  )
}`,
      preview: (
        <div className="w-full max-w-sm space-y-2">
          <label className="text-sm font-medium leading-none">Username</label>
          <div className="relative">
            <input 
              className="h-11 w-full rounded-lg border-2 border-green-500 bg-white px-4 pr-10 text-sm transition-all duration-200 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 dark:border-green-400 dark:bg-slate-800 dark:text-green-100 dark:focus:border-green-400 dark:focus:ring-green-400/20" 
              value="john_doe"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <p className="text-xs leading-relaxed text-slate-500">Username is available</p>
        </div>
      )
    }
  ],

  card: [
    {
      title: 'Default',
      description: 'The default card variant.',
      code: `import { Card, CardContent, CardHeader, CardTitle } from 'mad-ui-components'

export function CardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
    </Card>
  )
}`,
      preview: (
        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold leading-none tracking-tight">Card Title</h3>
          </div>
          <div className="p-6 pt-0">
            <p className="text-slate-600 dark:text-slate-400">Card content goes here.</p>
          </div>
        </div>
      )
    },
    {
      title: 'Card with Footer',
      description: 'A card component with header, content, and footer',
      code: `import { Card, CardContent, CardHeader, CardTitle, CardFooter } from 'mad-ui-components'

export function CardWithFooter() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card with Footer</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This card has a footer section.</p>
      </CardContent>
      <CardFooter>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">Action</button>
      </CardFooter>
    </Card>
  )
}`,
      preview: (
        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold leading-none tracking-tight">Card with Footer</h3>
          </div>
          <div className="p-6 pt-0">
            <p className="text-slate-600 dark:text-slate-400">This card has a footer section.</p>
          </div>
          <div className="flex items-center p-6 pt-0">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Action
            </button>
          </div>
        </div>
      )
    }
  ],

  checkbox: [
    {
      title: 'Default',
      description: 'The default checkbox variant.',
      code: `import { Checkbox } from 'mad-ui-components'

export function CheckboxDemo() {
  return <Checkbox label="Accept terms and conditions" />
}`,
      preview: (
        <div className="flex items-start space-x-3">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-2 border-slate-400 bg-white text-blue-600 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:border-blue-500 hover:shadow-md cursor-pointer"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg className="h-3 w-3 text-current" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <label className="text-sm font-medium leading-none cursor-pointer">
            Accept terms and conditions
          </label>
        </div>
      )
    },
    {
      title: 'Indeterminate',
      description: 'Checkbox in an indeterminate state.',
      code: `import { Checkbox } from 'mad-ui-components'

export function CheckboxIndeterminate() {
  return <Checkbox label="Select all items" indeterminate />
}`,
      preview: (
        <div className="flex items-start space-x-3">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-2 border-slate-400 bg-white text-blue-600 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:border-blue-500 hover:shadow-md cursor-pointer"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg className="h-3 w-3 text-current" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <label className="text-sm font-medium leading-none cursor-pointer">
            Select all items
          </label>
        </div>
      )
    },
    {
      title: 'Error State',
      description: 'Checkbox in an error state.',
      code: `import { Checkbox } from 'mad-ui-components'

export function CheckboxError() {
  return (
    <Checkbox 
      label="I agree to the terms" 
      error="You must agree to the terms to continue" 
    />
  )
}`,
      preview: (
        <div className="flex items-start space-x-3">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-2 border-red-500 bg-white text-red-600 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 hover:border-red-600 hover:shadow-md cursor-pointer"
            />
          </div>
          <div className="flex-1 space-y-1">
            <label className="text-sm font-medium leading-none cursor-pointer">
              I agree to the terms
            </label>
            <p className="text-xs leading-relaxed text-red-500">
              You must agree to the terms to continue
            </p>
          </div>
        </div>
      )
    }
  ],

  radio: [
    {
      title: 'Basic Radio',
      description: 'A simple radio button component',
      code: `import { Radio } from 'mad-ui-components'

export function RadioExample() {
  return <Radio />`,
      preview: <input type="radio" className="h-4 w-4 border border-input" />
    },
    {
      title: 'Radio Group',
      description: 'Multiple radio buttons in a group',
      code: `import { Radio, Label } from 'mad-ui-components'

export function RadioGroup() {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Radio id="option1" name="options" />
        <Label htmlFor="option1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Radio id="option2" name="options" />
        <Label htmlFor="option2">Option 2</Label>
      </div>
    </div>
  )
}`,
      preview: (
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <input type="radio" id="option1" name="options" className="h-4 w-4 border border-input" />
            <label htmlFor="option1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Option 1</label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="radio" id="option2" name="options" className="h-4 w-4 border border-input" />
            <label htmlFor="option2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Option 2</label>
          </div>
        </div>
      )
    }
  ],

  select: [
    {
      title: 'Default',
      description: 'The default select variant.',
      code: `import { Select } from 'mad-ui-components'

export function SelectDemo() {
  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' }
  ]

  return (
    <Select 
      label="Choose a fruit" 
      options={options} 
      placeholder="Select a fruit" 
    />
  )
}`,
      preview: (
        <div className="w-full max-w-sm space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Choose a fruit
          </label>
          <div className="relative">
            <select className="w-full rounded-lg border-2 border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-400/20">
              <option value="" disabled>Select a fruit</option>
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="orange">Orange</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'With Helper Text',
      description: 'Select with helper text.',
      code: `import { Select } from 'mad-ui-components'

export function SelectWithHelper() {
  const options = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' }
  ]

  return (
    <Select 
      label="Country" 
      options={options} 
      placeholder="Select your country" 
      helperText="Choose the country where you live" 
    />
  )
}`,
      preview: (
        <div className="w-full max-w-sm space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Country
          </label>
          <div className="relative">
            <select className="w-full rounded-lg border-2 border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-400/20">
              <option value="" disabled>Select your country</option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <p className="text-sm text-slate-500">Choose the country where you live</p>
        </div>
      )
    },
    {
      title: 'Error State',
      description: 'Select in an error state.',
      code: `import { Select } from 'mad-ui-components'

export function SelectError() {
  const options = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' }
  ]

  return (
    <Select 
      label="Size" 
      options={options} 
      error="Please select a size" 
    />
  )
}`,
      preview: (
        <div className="w-full max-w-sm space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Size
          </label>
          <div className="relative">
            <select className="w-full rounded-lg border-2 border-red-500 bg-white px-3 py-2 text-sm text-slate-900 transition-all duration-200 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 dark:border-red-400 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-red-400 dark:focus:ring-red-400/20">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <p className="text-sm text-red-500">Please select a size</p>
        </div>
      )
    }
  ],

  switch: [
    {
      title: 'Basic Switch',
      description: 'A simple toggle switch component',
      code: `import { Switch } from 'mad-ui-components'

export function SwitchExample() {
  return <Switch />`,
      preview: <input type="checkbox" className="peer h-6 w-11 shrink-0 rounded-full border border-input bg-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50" />
    }
  ],

  progress: [
    {
      title: 'Basic Progress',
      description: 'A simple progress bar component',
      code: `import { Progress } from 'mad-ui-components'

export function ProgressExample() {
  return <Progress value={60} />`,
      preview: (
        <div className="relative h-4 w-full overflow-hidden rounded-full bg-secondary">
          <div className="h-full w-3/5 bg-primary transition-all" style={{ width: '60%' }}></div>
        </div>
      )
    }
  ],

  slider: [
    {
      title: 'Default',
      description: 'The default slider variant.',
      code: `import { Slider } from 'mad-ui-components'

export function SliderDemo() {
  return <Slider defaultValue={50} max={100} step={1} />
}`,
      preview: (
        <div className="w-full max-w-sm">
          <div className="mb-2 text-sm font-medium">50</div>
          <div className="relative h-3 w-full cursor-pointer rounded-full bg-slate-200 dark:bg-slate-600">
            <div className="absolute top-0 left-0 h-full w-1/2 rounded-full bg-blue-500 dark:bg-blue-400 transition-all duration-200"></div>
            <div className="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full border-2 border-blue-500 bg-white shadow-md transition-transform duration-200 hover:scale-110 active:cursor-grabbing dark:border-blue-400 dark:bg-slate-200"></div>
          </div>
        </div>
      )
    },
    {
      title: 'Range Slider',
      description: 'A range slider with two handles.',
      code: `import { Slider } from 'mad-ui-components'

export function RangeSliderDemo() {
  return <Slider defaultValue={[20, 80]} max={100} step={1} range />
}`,
      preview: (
        <div className="w-full max-w-sm">
          <div className="mb-2 text-sm font-medium">20 - 80</div>
          <div className="relative h-3 w-full cursor-pointer rounded-full bg-slate-200 dark:bg-slate-600">
            <div className="absolute top-0 left-1/5 h-full w-3/5 rounded-full bg-blue-500 dark:bg-blue-400 transition-all duration-200"></div>
            <div className="absolute top-1/2 left-1/5 h-5 w-5 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full border-2 border-blue-500 bg-white shadow-md transition-transform duration-200 hover:scale-110 active:cursor-grabbing dark:border-blue-400 dark:bg-slate-200"></div>
            <div className="absolute top-1/2 left-4/5 h-5 w-5 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full border-2 border-blue-500 bg-white shadow-md transition-transform duration-200 hover:scale-110 active:cursor-grabbing dark:border-blue-400 dark:bg-slate-200"></div>
          </div>
        </div>
      )
    },
    {
      title: 'With Marks',
      description: 'Slider with value marks.',
      code: `import { Slider } from 'mad-ui-components'

export function SliderWithMarks() {
  const marks = [
    { value: 0, label: '0°C' },
    { value: 25, label: '25°C' },
    { value: 50, label: '50°C' },
    { value: 75, label: '75°C' },
    { value: 100, label: '100°C' }
  ]

  return (
    <Slider 
      defaultValue={30} 
      max={100} 
      step={1} 
      showMarks 
      marks={marks} 
    />
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <div className="mb-2 text-sm font-medium">30</div>
          <div className="relative h-3 w-full cursor-pointer rounded-full bg-slate-200 dark:bg-slate-600">
            <div className="absolute top-0 left-0 h-full w-3/10 rounded-full bg-blue-500 dark:bg-blue-400 transition-all duration-200"></div>
            <div className="absolute top-1/2 left-3/10 h-5 w-5 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full border-2 border-blue-500 bg-white shadow-md transition-transform duration-200 hover:scale-110 active:cursor-grabbing dark:border-blue-400 dark:bg-slate-200"></div>
            <div className="absolute bottom-0 left-0 text-xs text-slate-500 dark:text-slate-400">0°C</div>
            <div className="absolute bottom-0 left-1/4 -translate-x-1/2 text-xs text-slate-500 dark:text-slate-400">25°C</div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs text-slate-500 dark:text-slate-400">50°C</div>
            <div className="absolute bottom-0 left-3/4 -translate-x-1/2 text-xs text-slate-500 dark:text-slate-400">75°C</div>
            <div className="absolute bottom-0 right-0 text-xs text-slate-500 dark:text-slate-400">100°C</div>
          </div>
        </div>
      )
    }
  ],

  rating: [
    {
      title: 'Basic Rating',
      description: 'A simple rating component',
      code: `import { Rating } from 'mad-ui-components'

export function RatingExample() {
  return <Rating value={4} max={5} />`,
      preview: (
        <div className="flex items-center space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className={`text-2xl ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
          ))}
        </div>
      )
    }
  ],

  skeleton: [
    {
      title: 'Basic Skeleton',
      description: 'A simple skeleton loading component',
      code: `import { Skeleton } from 'mad-ui-components'

export function SkeletonExample() {
  return <Skeleton className="h-4 w-[250px]" />`,
      preview: <div className="h-4 w-[250px] animate-pulse rounded-md bg-muted"></div>
    }
  ],

  textarea: [
    {
      title: 'Basic Textarea',
      description: 'A simple textarea component',
      code: `import { Textarea } from 'mad-ui-components'

export function TextareaExample() {
  return <Textarea placeholder="Enter your message..." />`,
      preview: <textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground" placeholder="Enter your message..."></textarea>
    }
  ],

  badge: [
    {
      title: 'Basic Badge',
      description: 'A simple badge component',
      code: `import { Badge } from 'mad-ui-components'

export function BadgeExample() {
  return <Badge>Badge</Badge>`,
      preview: <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Badge</span>
    },
    {
      title: 'Badge Variants',
      description: 'Different badge variants',
      code: `import { Badge } from 'mad-ui-components'

export function BadgeVariants() {
  return (
    <div className="flex gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  )
}`,
      preview: (
        <div className="flex gap-2">
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Default</span>
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Secondary</span>
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80">Destructive</span>
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Outline</span>
        </div>
      )
    }
  ],

  avatar: [
    {
      title: 'Basic Avatar',
      description: 'A simple avatar component',
      code: `import { Avatar } from 'mad-ui-components'

export function AvatarExample() {
  return <Avatar />`,
      preview: <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-muted"></div>
    }
  ],

  alert: [
    {
      title: 'Basic Alert',
      description: 'A simple alert component',
      code: `import { Alert } from 'mad-ui-components'

export function AlertExample() {
  return (
    <Alert>
      <p>This is an alert message.</p>
    </Alert>
  )
}`,
      preview: (
        <div className="relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground">
          <p>This is an alert message.</p>
        </div>
      )
    }
  ]
}

export function getComponentExamples(slug: string): ComponentExample[] {
  return COMPONENT_EXAMPLES[slug] || [
    {
      title: 'Basic Example',
      description: 'A basic example of the component',
      code: `import { ${slug.charAt(0).toUpperCase() + slug.slice(1)} } from 'mad-ui-components'

export function Example() {
  return <${slug.charAt(0).toUpperCase() + slug.slice(1)} />
}`,
      preview: <div className="p-4 border rounded-md bg-card">Component Preview</div>
    }
  ]
}
