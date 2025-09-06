import React from 'react'
import { Button, Input, Card, CardContent, CardHeader, CardTitle, CardFooter, Checkbox, Select, Slider, Switch, Progress, Rating, Skeleton, Textarea, Badge, Accordion } from 'mad-ui-components'

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
          <Button>Button</Button>
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
          <Button variant="error">Error</Button>
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
          <Button variant="outline">Outline</Button>
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
          <Button variant="secondary">Secondary</Button>
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
          <Button variant="ghost">Ghost</Button>
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
          <Button variant="ghost">Ghost</Button>
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
          <Button leftIcon={
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          }>
            Download
          </Button>
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
          <Button loading disabled>
            Please wait
          </Button>
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
          <Input placeholder="Enter text..." />
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
        <div className="w-full max-w-sm">
          <Input 
            label="Password" 
            type="password" 
            error="Password must be at least 8 characters" 
          />
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
        <div className="w-full max-w-sm">
          <Input 
            label="Username" 
            variant="success" 
            value="john_doe" 
            helperText="Username is available" 
          />
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
        <div className="w-full max-w-sm">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Card content goes here.</p>
            </CardContent>
          </Card>
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
        <div className="w-full max-w-sm">
          <Card>
            <CardHeader>
              <CardTitle>Card with Footer</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This card has a footer section.</p>
            </CardContent>
            <CardFooter>
              <Button>Action</Button>
            </CardFooter>
          </Card>
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
        <Checkbox label="Accept terms and conditions" />
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
        <Checkbox label="Select all items" indeterminate />
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
        <Checkbox 
          label="I agree to the terms" 
          error="You must agree to the terms to continue" 
        />
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
        <div className="w-full max-w-sm">
          <Select 
            label="Choose a fruit" 
            options={[
              { value: 'apple', label: 'Apple' },
              { value: 'banana', label: 'Banana' },
              { value: 'orange', label: 'Orange' }
            ]} 
            placeholder="Select a fruit" 
          />
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
        <div className="w-full max-w-sm">
          <Select 
            label="Country" 
            options={[
              { value: 'us', label: 'United States' },
              { value: 'ca', label: 'Canada' },
              { value: 'uk', label: 'United Kingdom' }
            ]} 
            placeholder="Select your country" 
            helperText="Choose the country where you live" 
          />
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
        <div className="w-full max-w-sm">
          <Select 
            label="Size" 
            options={[
              { value: 'small', label: 'Small' },
              { value: 'medium', label: 'Medium' },
              { value: 'large', label: 'Large' }
            ]} 
            error="Please select a size" 
          />
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
      preview: <Switch />
    }
  ],

  progress: [
    {
      title: 'Basic Progress',
      description: 'A simple progress bar component',
      code: `import { Progress } from 'mad-ui-components'

export function ProgressExample() {
  return <Progress value={60} />`,
      preview: <Progress value={60} />
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
      preview: <Slider defaultValue={50} max={100} step={1} />
    },
    {
      title: 'Range Slider',
      description: 'A range slider with two handles.',
      code: `import { Slider } from 'mad-ui-components'

export function RangeSliderDemo() {
  return <Slider defaultValue={[20, 80]} max={100} step={1} range />
}`,
      preview: <Slider defaultValue={[20, 80]} max={100} step={1} range />
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
        <Slider 
          defaultValue={30} 
          max={100} 
          step={1} 
          showMarks 
          marks={[
            { value: 0, label: '0°C' },
            { value: 25, label: '25°C' },
            { value: 50, label: '50°C' },
            { value: 75, label: '75°C' },
            { value: 100, label: '100°C' }
          ]} 
        />
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
      preview: <Rating value={4} max={5} />
    }
  ],

  skeleton: [
    {
      title: 'Basic Skeleton',
      description: 'A simple skeleton loading component',
      code: `import { Skeleton } from 'mad-ui-components'

export function SkeletonExample() {
  return <Skeleton className="h-4 w-[250px]" />`,
      preview: <Skeleton className="h-4 w-[250px]" />
    }
  ],

  textarea: [
    {
      title: 'Basic Textarea',
      description: 'A simple textarea component',
      code: `import { Textarea } from 'mad-ui-components'

export function TextareaExample() {
  return <Textarea placeholder="Enter your message..." />`,
      preview: <Textarea placeholder="Enter your message..." />
    }
  ],

  badge: [
    {
      title: 'Basic Badge',
      description: 'A simple badge component',
      code: `import { Badge } from 'mad-ui-components'

export function BadgeExample() {
  return <Badge>Badge</Badge>`,
      preview: <Badge>Badge</Badge>
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
  ],

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
