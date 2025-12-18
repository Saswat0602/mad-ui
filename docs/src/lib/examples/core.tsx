import React from 'react'
import { Button, Input, Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter, Checkbox, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Slider, Switch, Progress, Rating, Skeleton, Textarea, Radio, Label } from 'mad-ui-components'
import { Mail, Lock, Search, Download, Upload, Check, Star, User, ArrowRight } from 'lucide-react'

export interface ComponentExample {
  title: string
  description?: string
  code: string
  preview: React.ReactNode
}

export const coreExamples: Record<string, ComponentExample[]> = {
  button: [
    {
      title: 'Variants',
      description: 'All available button variants with semantic colors.',
      code: `import { Button } from 'mad-ui-components'

export function ButtonVariants() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}`,
      preview: (
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      )
    },
    {
      title: 'Sizes',
      description: 'Different button sizes including icon-only variant.',
      code: `import { Button } from 'mad-ui-components'
import { Search } from 'lucide-react'

export function ButtonSizes() {
  return (
    <div className="flex items-center gap-2">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon"><Search className="h-4 w-4" /></Button>
    </div>
  )
}`,
      preview: (
        <div className="flex items-center gap-2">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon"><Search className="h-4 w-4" /></Button>
        </div>
      )
    },
    {
      title: 'With Icons',
      description: 'Buttons with left and right icons for better UX.',
      code: `import { Button } from 'mad-ui-components'
import { Download, Upload, ArrowRight } from 'lucide-react'

export function ButtonWithIcons() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button leftIcon={<Download className="h-4 w-4" />}>
        Download
      </Button>
      <Button leftIcon={<Upload className="h-4 w-4" />}>
        Upload
      </Button>
      <Button rightIcon={<ArrowRight className="h-4 w-4" />}>
        Next
      </Button>
    </div>
  )
}`,
      preview: (
        <div className="flex flex-wrap gap-2">
          <Button leftIcon={<Download className="h-4 w-4" />}>
            Download
          </Button>
          <Button leftIcon={<Upload className="h-4 w-4" />}>
            Upload
          </Button>
          <Button rightIcon={<ArrowRight className="h-4 w-4" />}>
            Next
          </Button>
        </div>
      )
    },
    {
      title: 'Loading State',
      description: 'Button with loading spinner animation.',
      code: `import { Button } from 'mad-ui-components'

export function ButtonLoading() {
  return (
    <div className="flex gap-2">
      <Button loading>Processing...</Button>
      <Button variant="outline" loading>Loading</Button>
    </div>
  )
}`,
      preview: (
        <div className="flex gap-2">
          <Button loading>Processing...</Button>
          <Button variant="outline" loading>Loading</Button>
        </div>
      )
    },
    {
      title: 'Full Width',
      description: 'Button that spans the full width of its container.',
      code: `import { Button } from 'mad-ui-components'
import { Check } from 'lucide-react'

export function ButtonFullWidth() {
  return (
    <Button fullWidth leftIcon={<Check className="h-4 w-4" />}>
      Submit Form
    </Button>
  )
}`,
      preview: (
        <Button fullWidth leftIcon={<Check className="h-4 w-4" />}>
          Submit Form
        </Button>
      )
    }
  ],

  input: [
    {
      title: 'Basic Input',
      description: 'Simple input with placeholder.',
      code: `import { Input } from 'mad-ui-components'

export function InputBasic() {
  return <Input placeholder="Enter text..." />
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Input placeholder="Enter text..." />
        </div>
      )
    },
    {
      title: 'With Icons',
      description: 'Input fields with left and right icons.',
      code: `import { Input } from 'mad-ui-components'
import { Mail, Search, User } from 'lucide-react'

export function InputWithIcons() {
  return (
    <div className="space-y-4 w-full max-w-sm">
      <Input 
        leftIcon={<Mail className="h-4 w-4" />}
        placeholder="Email address"
      />
      <Input 
        leftIcon={<Search className="h-4 w-4" />}
        placeholder="Search..."
      />
      <Input 
        leftIcon={<User className="h-4 w-4" />}
        placeholder="Username"
      />
    </div>
  )
}`,
      preview: (
        <div className="space-y-4 w-full max-w-sm">
          <Input
            leftIcon={<Mail className="h-4 w-4" />}
            placeholder="Email address"
          />
          <Input
            leftIcon={<Search className="h-4 w-4" />}
            placeholder="Search..."
          />
          <Input
            leftIcon={<User className="h-4 w-4" />}
            placeholder="Username"
          />
        </div>
      )
    },
    {
      title: 'Error State',
      description: 'Input with error styling.',
      code: `import { Input, Label } from 'mad-ui-components'

export function InputError() {
  return (
    <div className="space-y-2 w-full max-w-sm">
      <Label htmlFor="password">Password</Label>
      <Input 
        id="password"
        type="password"
        error
        placeholder="Enter password"
      />
      <p className="text-sm text-destructive">
        Password must be at least 8 characters
      </p>
    </div>
  )
}`,
      preview: (
        <div className="space-y-2 w-full max-w-sm">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            error
            placeholder="Enter password"
          />
          <p className="text-sm text-destructive">
            Password must be at least 8 characters
          </p>
        </div>
      )
    },
    {
      title: 'Success State',
      description: 'Input with success styling.',
      code: `import { Input, Label } from 'mad-ui-components'

export function InputSuccess() {
  return (
    <div className="space-y-2 w-full max-w-sm">
      <Label htmlFor="username">Username</Label>
      <Input 
        id="username"
        success
        value="john_doe"
        placeholder="Enter username"
      />
      <p className="text-sm text-green-600">
        Username is available!
      </p>
    </div>
  )
}`,
      preview: (
        <div className="space-y-2 w-full max-w-sm">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            success
            value="john_doe"
            placeholder="Enter username"
          />
          <p className="text-sm text-green-600">
            Username is available!
          </p>
        </div>
      )
    }
  ],

  card: [
    {
      title: 'Basic Card',
      description: 'Simple card with header and content.',
      code: `import { Card, CardHeader, CardTitle, CardDescription, CardContent } from 'mad-ui-components'

export function CardBasic() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
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
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card content goes here.</p>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Card Variants',
      description: 'Different card visual styles.',
      code: `import { Card, CardHeader, CardTitle, CardContent } from 'mad-ui-components'

export function CardVariants() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card variant="default">
        <CardHeader>
          <CardTitle>Default</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Border with shadow</p>
        </CardContent>
      </Card>
      
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Elevated</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No border, elevated shadow</p>
        </CardContent>
      </Card>
      
      <Card variant="outlined">
        <CardHeader>
          <CardTitle>Outlined</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Thick border, no shadow</p>
        </CardContent>
      </Card>
      
      <Card variant="ghost">
        <CardHeader>
          <CardTitle>Ghost</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No border, no shadow</p>
        </CardContent>
      </Card>
    </div>
  )
}`,
      preview: (
        <div className="grid grid-cols-2 gap-4 w-full">
          <Card variant="default">
            <CardHeader>
              <CardTitle className="text-base">Default</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Border with shadow</p>
            </CardContent>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <CardTitle className="text-base">Elevated</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Elevated shadow</p>
            </CardContent>
          </Card>

          <Card variant="outlined">
            <CardHeader>
              <CardTitle className="text-base">Outlined</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Thick border</p>
            </CardContent>
          </Card>

          <Card variant="ghost">
            <CardHeader>
              <CardTitle className="text-base">Ghost</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">No styling</p>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Interactive Card',
      description: 'Card with hover and click effects.',
      code: `import { Card, CardHeader, CardTitle, CardContent } from 'mad-ui-components'

export function CardInteractive() {
  return (
    <Card hoverable clickable onClick={() => alert('Card clicked!')}>
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Hover to see lift effect, click to interact</p>
      </CardContent>
    </Card>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Card hoverable clickable onClick={() => alert('Card clicked!')}>
            <CardHeader>
              <CardTitle>Interactive Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Hover to see lift effect, click to interact</p>
            </CardContent>
          </Card>
        </div>
      )
    }
  ],

  checkbox: [
    {
      title: 'Basic Checkbox',
      description: 'Simple checkbox with label.',
      code: `import { Checkbox } from 'mad-ui-components'

export function CheckboxBasic() {
  return <Checkbox label="Accept terms and conditions" />
}`,
      preview: <Checkbox label="Accept terms and conditions" />
    },
    {
      title: 'With Description',
      description: 'Checkbox with label and helper text.',
      code: `import { Checkbox } from 'mad-ui-components'

export function CheckboxWithDescription() {
  return (
    <Checkbox 
      label="Email notifications"
      description="Receive emails about your account activity"
    />
  )
}`,
      preview: (
        <Checkbox
          label="Email notifications"
          description="Receive emails about your account activity"
        />
      )
    },
    {
      title: 'Indeterminate',
      description: 'Checkbox in indeterminate state.',
      code: `import { Checkbox } from 'mad-ui-components'

export function CheckboxIndeterminate() {
  return <Checkbox label="Select all" indeterminate />
}`,
      preview: <Checkbox label="Select all" indeterminate />
    },
    {
      title: 'Sizes',
      description: 'Different checkbox sizes.',
      code: `import { Checkbox } from 'mad-ui-components'

export function CheckboxSizes() {
  return (
    <div className="space-y-2">
      <Checkbox size="sm" label="Small" />
      <Checkbox size="md" label="Medium" />
      <Checkbox size="lg" label="Large" />
    </div>
  )
}`,
      preview: (
        <div className="space-y-2">
          <Checkbox size="sm" label="Small" />
          <Checkbox size="md" label="Medium" />
          <Checkbox size="lg" label="Large" />
        </div>
      )
    }
  ],

  radio: [
    {
      title: 'Radio Group',
      description: 'Group of radio buttons with labels.',
      code: `import { Radio } from 'mad-ui-components'

export function RadioGroup() {
  return (
    <div className="space-y-2">
      <Radio name="plan" label="Free" description="Perfect for getting started" />
      <Radio name="plan" label="Pro" description="For professional use" />
      <Radio name="plan" label="Enterprise" description="For large teams" />
    </div>
  )
}`,
      preview: (
        <div className="space-y-2">
          <Radio name="plan" label="Free" description="Perfect for getting started" />
          <Radio name="plan" label="Pro" description="For professional use" />
          <Radio name="plan" label="Enterprise" description="For large teams" />
        </div>
      )
    },
    {
      title: 'Sizes',
      description: 'Different radio button sizes.',
      code: `import { Radio } from 'mad-ui-components'

export function RadioSizes() {
  return (
    <div className="space-y-2">
      <Radio size="sm" label="Small" />
      <Radio size="md" label="Medium" />
      <Radio size="lg" label="Large" />
    </div>
  )
}`,
      preview: (
        <div className="space-y-2">
          <Radio size="sm" label="Small" />
          <Radio size="md" label="Medium" />
          <Radio size="lg" label="Large" />
        </div>
      )
    }
  ],

  switch: [
    {
      title: 'Basic Switch',
      description: 'Simple toggle switch.',
      code: `import { Switch } from 'mad-ui-components'

export function SwitchBasic() {
  return <Switch label="Enable notifications" />
}`,
      preview: <Switch label="Enable notifications" />
    },
    {
      title: 'With Description',
      description: 'Switch with label and helper text.',
      code: `import { Switch } from 'mad-ui-components'

export function SwitchWithDescription() {
  return (
    <Switch 
      label="Marketing emails"
      description="Receive emails about new features and updates"
    />
  )
}`,
      preview: (
        <Switch
          label="Marketing emails"
          description="Receive emails about new features and updates"
        />
      )
    },
    {
      title: 'Sizes',
      description: 'Different switch sizes.',
      code: `import { Switch } from 'mad-ui-components'

export function SwitchSizes() {
  return (
    <div className="space-y-2">
      <Switch size="sm" label="Small" />
      <Switch size="md" label="Medium" />
      <Switch size="lg" label="Large" />
    </div>
  )
}`,
      preview: (
        <div className="space-y-2">
          <Switch size="sm" label="Small" />
          <Switch size="md" label="Medium" />
          <Switch size="lg" label="Large" />
        </div>
      )
    }
  ],

  progress: [
    {
      title: 'Basic Progress',
      description: 'Simple progress bar.',
      code: `import { Progress } from 'mad-ui-components'

export function ProgressBasic() {
  return <Progress value={60} />
}`,
      preview: <Progress value={60} />
    },
    {
      title: 'With Label',
      description: 'Progress bar with label and percentage.',
      code: `import { Progress } from 'mad-ui-components'

export function ProgressWithLabel() {
  return <Progress value={75} showLabel label="Upload Progress" />
}`,
      preview: <Progress value={75} showLabel label="Upload Progress" />
    },
    {
      title: 'Variants',
      description: 'Different progress bar variants.',
      code: `import { Progress } from 'mad-ui-components'

export function ProgressVariants() {
  return (
    <div className="space-y-4">
      <Progress value={40} variant="default" showLabel label="Default" />
      <Progress value={100} variant="success" showLabel label="Success" />
      <Progress value={60} variant="warning" showLabel label="Warning" />
      <Progress value={30} variant="destructive" showLabel label="Error" />
    </div>
  )
}`,
      preview: (
        <div className="space-y-4 w-full">
          <Progress value={40} variant="default" showLabel label="Default" />
          <Progress value={100} variant="success" showLabel label="Success" />
          <Progress value={60} variant="warning" showLabel label="Warning" />
          <Progress value={30} variant="destructive" showLabel label="Error" />
        </div>
      )
    },
    {
      title: 'Sizes',
      description: 'Different progress bar sizes.',
      code: `import { Progress } from 'mad-ui-components'

export function ProgressSizes() {
  return (
    <div className="space-y-4">
      <Progress value={60} size="sm" />
      <Progress value={60} size="md" />
      <Progress value={60} size="lg" />
    </div>
  )
}`,
      preview: (
        <div className="space-y-4 w-full">
          <Progress value={60} size="sm" />
          <Progress value={60} size="md" />
          <Progress value={60} size="lg" />
        </div>
      )
    }
  ],

  rating: [
    {
      title: 'Basic Rating',
      description: 'Simple star rating component.',
      code: `import { Rating } from 'mad-ui-components'

export function RatingBasic() {
  return <Rating value={4} />
}`,
      preview: <Rating value={4} />
    },
    {
      title: 'With Label',
      description: 'Rating with label and value display.',
      code: `import { Rating } from 'mad-ui-components'

export function RatingWithLabel() {
  return <Rating value={3.5} showValue label="Product Rating" />
}`,
      preview: <Rating value={3.5} showValue label="Product Rating" />
    },
    {
      title: 'Interactive',
      description: 'Clickable rating component.',
      code: `import { Rating } from 'mad-ui-components'
import { useState } from 'react'

export function RatingInteractive() {
  const [rating, setRating] = useState(0)
  
  return (
    <Rating 
      value={rating}
      onChange={setRating}
      showValue
      label="Rate this product"
    />
  )
}`,
      preview: <Rating value={0} showValue label="Rate this product" />
    },
    {
      title: 'Sizes',
      description: 'Different rating sizes.',
      code: `import { Rating } from 'mad-ui-components'

export function RatingSizes() {
  return (
    <div className="space-y-4">
      <Rating value={5} size="sm" />
      <Rating value={5} size="md" />
      <Rating value={5} size="lg" />
    </div>
  )
}`,
      preview: (
        <div className="space-y-4">
          <Rating value={5} size="sm" />
          <Rating value={5} size="md" />
          <Rating value={5} size="lg" />
        </div>
      )
    }
  ],

  skeleton: [
    {
      title: 'Basic Skeleton',
      description: 'Simple skeleton loader.',
      code: `import { Skeleton } from 'mad-ui-components'

export function SkeletonBasic() {
  return <Skeleton className="h-4 w-full" />
}`,
      preview: <Skeleton className="h-4 w-full" />
    },
    {
      title: 'Variants',
      description: 'Different skeleton shapes.',
      code: `import { Skeleton } from 'mad-ui-components'

export function SkeletonVariants() {
  return (
    <div className="space-y-4">
      <Skeleton variant="text" className="h-4" />
      <Skeleton variant="circular" className="h-12 w-12" />
      <Skeleton variant="rectangular" className="h-32" />
      <Skeleton variant="rounded" className="h-24" />
    </div>
  )
}`,
      preview: (
        <div className="space-y-4 w-full">
          <Skeleton variant="text" className="h-4" />
          <Skeleton variant="circular" className="h-12 w-12" />
          <Skeleton variant="rectangular" className="h-32" />
          <Skeleton variant="rounded" className="h-24" />
        </div>
      )
    },
    {
      title: 'Multi-line',
      description: 'Multiple skeleton lines for text content.',
      code: `import { Skeleton } from 'mad-ui-components'

export function SkeletonMultiLine() {
  return <Skeleton lines={3} />
}`,
      preview: <Skeleton lines={3} />
    },
    {
      title: 'Card Loading',
      description: 'Skeleton for card content.',
      code: `import { Card, CardHeader, CardContent, Skeleton } from 'mad-ui-components'

export function SkeletonCard() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent>
        <Skeleton lines={3} />
      </CardContent>
    </Card>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Card>
            <CardHeader>
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
              <Skeleton lines={3} />
            </CardContent>
          </Card>
        </div>
      )
    }
  ],

  textarea: [
    {
      title: 'Basic Textarea',
      description: 'Simple textarea input.',
      code: `import { Textarea } from 'mad-ui-components'

export function TextareaBasic() {
  return <Textarea placeholder="Enter your message..." />
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Textarea placeholder="Enter your message..." />
        </div>
      )
    },
    {
      title: 'With Label',
      description: 'Textarea with label.',
      code: `import { Textarea, Label } from 'mad-ui-components'

export function TextareaWithLabel() {
  return (
    <div className="space-y-2">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Type your message here" />
    </div>
  )
}`,
      preview: (
        <div className="w-full max-w-sm space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Type your message here" />
        </div>
      )
    },
    {
      title: 'Resize Control',
      description: 'Control textarea resize behavior.',
      code: `import { Textarea } from 'mad-ui-components'

export function TextareaResize() {
  return (
    <div className="space-y-4">
      <Textarea resize="none" placeholder="No resize" />
      <Textarea resize="vertical" placeholder="Vertical resize" />
      <Textarea resize="both" placeholder="Both directions" />
    </div>
  )
}`,
      preview: (
        <div className="w-full max-w-sm space-y-4">
          <Textarea resize="none" placeholder="No resize" />
          <Textarea resize="vertical" placeholder="Vertical resize" />
        </div>
      )
    }
  ],

  select: [
    {
      title: 'Basic Select',
      description: 'Simple select dropdown.',
      code: `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 'mad-ui-components'

export function SelectBasic() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </SelectContent>
    </Select>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )
    }
  ],

  label: [
    {
      title: 'Basic Label',
      description: 'Simple form label.',
      code: `import { Label, Input } from 'mad-ui-components'

export function LabelBasic() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" />
    </div>
  )
}`,
      preview: (
        <div className="w-full max-w-sm space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" />
        </div>
      )
    },
    {
      title: 'Required Field',
      description: 'Label with required indicator.',
      code: `import { Label, Input } from 'mad-ui-components'

export function LabelRequired() {
  return (
    <div className="space-y-2">
      <Label htmlFor="name" required>Full Name</Label>
      <Input id="name" />
    </div>
  )
}`,
      preview: (
        <div className="w-full max-w-sm space-y-2">
          <Label htmlFor="name" required>Full Name</Label>
          <Input id="name" />
        </div>
      )
    }
  ]
}
