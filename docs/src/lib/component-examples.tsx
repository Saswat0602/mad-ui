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
      title: 'Basic Button',
      description: 'A simple button with default styling',
      code: `import { Button } from 'mad-ui-components'

export function ButtonExample() {
  return <Button>Click me</Button>
}`,
      preview: <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">Click me</button>
    },
    {
      title: 'Button Variants',
      description: 'Different button variants for various use cases',
      code: `import { Button } from 'mad-ui-components'

export function ButtonVariants() {
  return (
    <div className="flex gap-4">
      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  )
}`,
      preview: (
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">Default</button>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">Primary</button>
          <button className="px-4 py-2 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90 transition-colors">Destructive</button>
          <button className="px-4 py-2 border border-input rounded-md hover:bg-accent transition-colors">Outline</button>
          <button className="px-4 py-2 hover:bg-accent rounded-md transition-colors">Ghost</button>
        </div>
      )
    },
    {
      title: 'Button Sizes',
      description: 'Different button sizes for various use cases',
      code: `import { Button } from 'mad-ui-components'

export function ButtonSizes() {
  return (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}`,
      preview: (
        <div className="flex items-center gap-4">
          <button className="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">Small</button>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">Default</button>
          <button className="px-6 py-3 text-lg bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">Large</button>
        </div>
      )
    }
  ],

  input: [
    {
      title: 'Basic Input',
      description: 'A simple text input field',
      code: `import { Input } from 'mad-ui-components'

export function InputExample() {
  return <Input placeholder="Enter text..." />
}`,
      preview: <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground" placeholder="Enter text..." />
    },
    {
      title: 'Input Types',
      description: 'Different input types for various use cases',
      code: `import { Input } from 'mad-ui-components'

export function InputTypes() {
  return (
    <div className="space-y-4">
      <Input type="text" placeholder="Text input" />
      <Input type="email" placeholder="Email input" />
      <Input type="password" placeholder="Password input" />
      <Input type="number" placeholder="Number input" />
    </div>
  )
}`,
      preview: (
        <div className="space-y-4">
          <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground" type="text" placeholder="Text input" />
          <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground" type="email" placeholder="Email input" />
          <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground" type="password" placeholder="Password input" />
          <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground" type="number" placeholder="Number input" />
        </div>
      )
    }
  ],

  card: [
    {
      title: 'Basic Card',
      description: 'A simple card component',
      code: `import { Card, CardContent, CardHeader, CardTitle } from 'mad-ui-components'

export function CardExample() {
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
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">Card Title</h3>
          </div>
          <div className="p-6 pt-0">
            <p>Card content goes here.</p>
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
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">Card with Footer</h3>
          </div>
          <div className="p-6 pt-0">
            <p>This card has a footer section.</p>
          </div>
          <div className="flex items-center p-6 pt-0">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">Action</button>
          </div>
        </div>
      )
    }
  ],

  checkbox: [
    {
      title: 'Basic Checkbox',
      description: 'A simple checkbox component',
      code: `import { Checkbox } from 'mad-ui-components'

export function CheckboxExample() {
  return <Checkbox />`,
      preview: <input type="checkbox" className="h-4 w-4 rounded border border-input" />
    },
    {
      title: 'Checkbox with Label',
      description: 'A checkbox with a label',
      code: `import { Checkbox, Label } from 'mad-ui-components'

export function CheckboxWithLabel() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  )
}`,
      preview: (
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="terms" className="h-4 w-4 rounded border border-input" />
          <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Accept terms and conditions</label>
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
      title: 'Basic Select',
      description: 'A simple select dropdown component',
      code: `import { Select } from 'mad-ui-components'

export function SelectExample() {
  return (
    <Select>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  )
}`,
      preview: (
        <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
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
      title: 'Basic Slider',
      description: 'A simple range slider component',
      code: `import { Slider } from 'mad-ui-components'

export function SliderExample() {
  return <Slider defaultValue={[50]} max={100} step={1} />`,
      preview: (
        <div className="relative flex w-full touch-none select-none items-center">
          <input type="range" min="0" max="100" defaultValue="50" className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer" />
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
