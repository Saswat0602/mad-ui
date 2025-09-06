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
