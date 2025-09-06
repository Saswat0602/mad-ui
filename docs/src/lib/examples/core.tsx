import React from 'react'
import { Button, Input, Card, CardContent, CardHeader, CardTitle, CardFooter, Checkbox, Select, Slider, Switch, Progress, Rating, Skeleton, Textarea, Radio, Label } from 'mad-ui-components'

export interface ComponentExample {
  title: string
  description?: string
  code: string
  preview: React.ReactNode
}

export const coreExamples: Record<string, ComponentExample[]> = {
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
      title: 'Variants',
      description: 'Different button variants.',
      code: `import { Button } from 'mad-ui-components'

export function ButtonVariants() {
  return (
    <div className="flex items-center space-x-2">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="error">Error</Button>
    </div>
  )
}`,
      preview: (
        <div className="flex items-center space-x-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="error">Error</Button>
        </div>
      )
    },
    {
      title: 'Sizes',
      description: 'Different button sizes.',
      code: `import { Button } from 'mad-ui-components'

export function ButtonSizes() {
  return (
    <div className="flex items-center space-x-2">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}`,
      preview: (
        <div className="flex items-center space-x-2">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      )
    },
    {
      title: 'With Icon',
      description: 'Button with an icon.',
      code: `import { Button } from 'mad-ui-components'

export function ButtonWithIcon() {
  return (
    <Button leftIcon={
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    }>
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
  return <Button loading disabled>Please wait</Button>
}`,
      preview: (
        <div className="flex items-center space-x-2">
          <Button loading disabled>Please wait</Button>
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
        <div className="w-full max-w-sm">
          <Input 
            label="Email" 
            type="email" 
            placeholder="Enter your email" 
            helperText="We'll never share your email." 
          />
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
        <Button>Action</Button>
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
  return <Radio />
}`,
      preview: <Radio />
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
            <Radio id="option1" name="options" />
            <Label htmlFor="option1">Option 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Radio id="option2" name="options" />
            <Label htmlFor="option2">Option 2</Label>
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
  return <Switch />
}`,
      preview: <Switch />
    },
    {
      title: 'With Label',
      description: 'Switch with a label',
      code: `import { Switch } from 'mad-ui-components'

export function SwitchWithLabel() {
  return <Switch label="Enable notifications" />
}`,
      preview: <Switch label="Enable notifications" />
    }
  ],

  progress: [
    {
      title: 'Basic Progress',
      description: 'A simple progress bar component',
      code: `import { Progress } from 'mad-ui-components'

export function ProgressExample() {
  return <Progress value={60} />
}`,
      preview: <Progress value={60} />
    },
    {
      title: 'Different Sizes',
      description: 'Progress bars with different sizes',
      code: `import { Progress } from 'mad-ui-components'

export function ProgressSizes() {
  return (
    <div className="space-y-4">
      <Progress value={30} size="sm" />
      <Progress value={60} size="md" />
      <Progress value={90} size="lg" />
    </div>
  )
}`,
      preview: (
        <div className="space-y-4 w-full max-w-sm">
          <Progress value={30} size="sm" />
          <Progress value={60} size="md" />
          <Progress value={90} size="lg" />
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
  return <Rating value={4} max={5} />
}`,
      preview: <Rating value={4} max={5} />
    },
    {
      title: 'With Label',
      description: 'Rating with a label.',
      code: `import { Rating } from 'mad-ui-components'

export function RatingWithLabel() {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Rate this product</label>
      <Rating defaultValue={4} max={5} />
    </div>
  )
}`,
      preview: (
        <div className="space-y-2">
          <label className="text-sm font-medium">Rate this product</label>
          <Rating value={4} max={5} />
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
  return <Skeleton className="h-4 w-[250px]" />
}`,
      preview: <Skeleton className="h-4 w-[250px]" />
    },
    {
      title: 'Card Skeleton',
      description: 'A skeleton for card content.',
      code: `import { Skeleton } from 'mad-ui-components'

export function CardSkeleton() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}`,
      preview: (
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      )
    }
  ],

  textarea: [
    {
      title: 'Basic Textarea',
      description: 'A simple textarea component',
      code: `import { Textarea } from 'mad-ui-components'

export function TextareaExample() {
  return <Textarea placeholder="Enter your message..." />
}`,
      preview: <Textarea placeholder="Enter your message..." />
    },
    {
      title: 'With Label',
      description: 'Textarea with a label and helper text.',
      code: `import { Textarea } from 'mad-ui-components'

export function TextareaWithLabel() {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Message</label>
      <Textarea 
        placeholder="Enter your message..." 
        rows={4}
        helperText="Please provide detailed information"
      />
    </div>
  )
}`,
      preview: (
        <div className="w-full max-w-sm space-y-2">
          <label className="text-sm font-medium">Message</label>
          <Textarea 
            placeholder="Enter your message..." 
            rows={4}
            helperText="Please provide detailed information"
          />
        </div>
      )
    }
  ]
}
