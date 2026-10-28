import React from 'react'
import { Button, Input, Card, CardContent, CardHeader, CardTitle, CardDescription, Checkbox, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Switch, Progress, Rating, Skeleton, Textarea, Radio, Label } from 'mad-ui-components'
import { Mail, Search, Download, Upload, Check, User, ArrowRight, Heart, ShoppingCart } from 'lucide-react'

export interface ComponentExample {
  title: string
  description?: string
  code: string
  preview: React.ReactNode
}

export const coreExamples: Record<string, ComponentExample[]> = {
  button: [
    {
      title: 'Button Variants',
      description: 'All available button variants with distinct visual styles and semantic colors.',
      code: `import { Button } from 'mad-ui-components'

export function ButtonVariants() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div className="flex flex-col items-center gap-2">
        <Button className="w-full">Default</Button>
        <span className="text-xs text-muted-foreground">Default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button variant="destructive" className="w-full">Destructive</Button>
        <span className="text-xs text-muted-foreground">Destructive</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button variant="outline" className="w-full">Outline</Button>
        <span className="text-xs text-muted-foreground">Outline</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button variant="secondary" className="w-full">Secondary</Button>
        <span className="text-xs text-muted-foreground">Secondary</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button variant="ghost" className="w-full">Ghost</Button>
        <span className="text-xs text-muted-foreground">Ghost</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button variant="link" className="w-full">Link</Button>
        <span className="text-xs text-muted-foreground">Link</span>
      </div>
    </div>
  )
}`,
      preview: (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
          <div className="flex flex-col items-center gap-3">
            <Button className="w-full shadow-md hover:shadow-lg transition-shadow">Default</Button>
            <span className="text-xs font-medium text-muted-foreground">Default</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Button variant="destructive" className="w-full shadow-md hover:shadow-lg transition-shadow">Destructive</Button>
            <span className="text-xs font-medium text-muted-foreground">Destructive</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Button variant="outline" className="w-full shadow-sm hover:shadow-md transition-shadow">Outline</Button>
            <span className="text-xs font-medium text-muted-foreground">Outline</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Button variant="secondary" className="w-full shadow-sm hover:shadow-md transition-shadow">Secondary</Button>
            <span className="text-xs font-medium text-muted-foreground">Secondary</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Button variant="ghost" className="w-full">Ghost</Button>
            <span className="text-xs font-medium text-muted-foreground">Ghost (hover me)</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Button variant="link" className="w-full">Link</Button>
            <span className="text-xs font-medium text-muted-foreground">Link (underline)</span>
          </div>
        </div>
      )
    },
    {
      title: 'Button Sizes',
      description: 'Different button sizes for various use cases, including icon-only variant.',
      code: `import { Button } from 'mad-ui-components'
import { Search } from 'lucide-react'

export function ButtonSizes() {
  return (
    <div className="flex items-end gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon"><Search className="h-4 w-4" /></Button>
    </div>
  )
}`,
      preview: (
        <div className="flex flex-wrap items-end gap-6 justify-center">
          <div className="flex flex-col items-center gap-3">
            <Button size="sm" className="shadow-md">Small Button</Button>
            <span className="text-xs font-medium text-muted-foreground">Small (sm)</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Button size="default" className="shadow-md">Default Button</Button>
            <span className="text-xs font-medium text-muted-foreground">Default</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Button size="lg" className="shadow-md">Large Button</Button>
            <span className="text-xs font-medium text-muted-foreground">Large (lg)</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Button size="icon" className="shadow-md"><Search className="h-4 w-4" /></Button>
            <span className="text-xs font-medium text-muted-foreground">Icon Only</span>
          </div>
        </div>
      )
    },
    {
      title: 'Buttons with Icons',
      description: 'Enhance buttons with left and right icons for better visual communication.',
      code: `import { Button } from 'mad-ui-components'
import { Download, Upload, ArrowRight, Heart, ShoppingCart } from 'lucide-react'

export function ButtonWithIcons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button leftIcon={<Download className="h-4 w-4" />}>
        Download
      </Button>
      <Button leftIcon={<Upload className="h-4 w-4" />} variant="secondary">
        Upload
      </Button>
      <Button rightIcon={<ArrowRight className="h-4 w-4" />} variant="outline">
        Next
      </Button>
      <Button leftIcon={<Heart className="h-4 w-4" />} variant="destructive">
        Like
      </Button>
      <Button leftIcon={<ShoppingCart className="h-4 w-4" />}>
        Add to Cart
      </Button>
    </div>
  )
}`,
      preview: (
        <div className="flex flex-wrap gap-4 justify-center">
          <Button leftIcon={<Download className="h-4 w-4" />} className="shadow-md">
            Download
          </Button>
          <Button leftIcon={<Upload className="h-4 w-4" />} variant="secondary" className="shadow-md">
            Upload
          </Button>
          <Button rightIcon={<ArrowRight className="h-4 w-4" />} variant="outline" className="shadow-sm">
            Next
          </Button>
          <Button leftIcon={<Heart className="h-4 w-4" />} variant="destructive" className="shadow-md">
            Like
          </Button>
          <Button leftIcon={<ShoppingCart className="h-4 w-4" />} className="shadow-md">
            Add to Cart
          </Button>
        </div>
      )
    },
    {
      title: 'Loading States',
      description: 'Show loading feedback with animated spinner for async operations.',
      code: `import { Button } from 'mad-ui-components'

export function ButtonLoading() {
  return (
    <div className="flex gap-3">
      <Button loading>Processing...</Button>
      <Button variant="outline" loading>Loading</Button>
      <Button variant="secondary" loading>Please wait</Button>
    </div>
  )
}`,
      preview: (
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex flex-col items-center gap-3">
            <Button loading className="shadow-md">Processing...</Button>
            <span className="text-xs font-medium text-muted-foreground">Default + Loading</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Button variant="outline" loading className="shadow-sm">Loading</Button>
            <span className="text-xs font-medium text-muted-foreground">Outline + Loading</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Button variant="secondary" loading className="shadow-md">Please wait</Button>
            <span className="text-xs font-medium text-muted-foreground">Secondary + Loading</span>
          </div>
        </div>
      )
    },
    {
      title: 'Full Width Button',
      description: 'Button that spans the full width of its container, perfect for forms.',
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
        <div className="w-full max-w-md mx-auto space-y-3">
          <Button fullWidth leftIcon={<Check className="h-4 w-4" />} className="shadow-md">
            Submit Form
          </Button>
          <p className="text-xs text-center text-muted-foreground">Full width button with icon</p>
        </div>
      )
    }
  ],

  input: [
    {
      title: 'Basic Inputs',
      description: 'Simple input fields with different types.',
      code: `import { Input } from 'mad-ui-components'

export function InputBasic() {
  return (
    <div className="space-y-4">
      <Input placeholder="Enter text..." />
      <Input type="email" placeholder="Email address" />
      <Input type="password" placeholder="Password" />
    </div>
  )
}`,
      preview: (
        <div className="w-full max-w-md mx-auto space-y-4">
          <Input placeholder="Enter text..." />
          <Input type="email" placeholder="Email address" />
          <Input type="password" placeholder="Password" />
        </div>
      )
    },
    {
      title: 'Inputs with Icons',
      description: 'Input fields with left and right icons for better UX.',
      code: `import { Input } from 'mad-ui-components'
import { Mail, Search, User, Lock } from 'lucide-react'

export function InputWithIcons() {
  return (
    <div className="space-y-4">
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
      <Input 
        leftIcon={<Lock className="h-4 w-4" />}
        type="password"
        placeholder="Password"
      />
    </div>
  )
}`,
      preview: (
        <div className="w-full max-w-md mx-auto space-y-4">
          <div className="space-y-2">
            <Input
              leftIcon={<Mail className="h-4 w-4 text-muted-foreground" />}
              placeholder="Email address"
            />
            <p className="text-xs text-muted-foreground">With mail icon</p>
          </div>
          <div className="space-y-2">
            <Input
              leftIcon={<Search className="h-4 w-4 text-muted-foreground" />}
              placeholder="Search..."
            />
            <p className="text-xs text-muted-foreground">With search icon</p>
          </div>
          <div className="space-y-2">
            <Input
              leftIcon={<User className="h-4 w-4 text-muted-foreground" />}
              placeholder="Username"
            />
            <p className="text-xs text-muted-foreground">With user icon</p>
          </div>
        </div>
      )
    },
    {
      title: 'Input States',
      description: 'Error and success states with visual feedback.',
      code: `import { Input, Label } from 'mad-ui-components'

export function InputStates() {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="error">With Error</Label>
        <Input 
          id="error"
          error
          placeholder="Enter password"
        />
        <p className="text-sm text-destructive mt-1">
          Password must be at least 8 characters
        </p>
      </div>
      
      <div>
        <Label htmlFor="success">With Success</Label>
        <Input 
          id="success"
          success
          value="john_doe"
        />
        <p className="text-sm text-green-600 mt-1">
          Username is available!
        </p>
      </div>
    </div>
  )
}`,
      preview: (
        <div className="w-full max-w-md mx-auto space-y-6">
          <div className="space-y-2">
            <Label htmlFor="error">Error State</Label>
            <Input
              id="error"
              error
              placeholder="Enter password"
            />
            <p className="text-sm text-destructive">
              Password must be at least 8 characters
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="success">Success State</Label>
            <Input
              id="success"
              success
              value="john_doe"
              readOnly
            />
            <p className="text-sm text-green-600">
              Username is available!
            </p>
          </div>
        </div>
      )
    }
  ],

  card: [
    {
      title: 'Card Variants',
      description: 'Four distinct visual styles for different use cases.',
      code: `import { Card, CardHeader, CardTitle, CardDescription, CardContent } from 'mad-ui-components'

export function CardVariants() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card variant="default">
        <CardHeader>
          <CardTitle>Default Card</CardTitle>
          <CardDescription>Border with subtle shadow</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Standard card with border and shadow for general use.</p>
        </CardContent>
      </Card>
      
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Elevated Card</CardTitle>
          <CardDescription>No border, prominent shadow</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Floating appearance with elevated shadow effect.</p>
        </CardContent>
      </Card>
      
      <Card variant="outlined">
        <CardHeader>
          <CardTitle>Outlined Card</CardTitle>
          <CardDescription>Thick border, no shadow</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Emphasized border without shadow for clear separation.</p>
        </CardContent>
      </Card>
      
      <Card variant="ghost">
        <CardHeader>
          <CardTitle>Ghost Card</CardTitle>
          <CardDescription>Minimal styling</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Subtle card with minimal visual weight.</p>
        </CardContent>
      </Card>
    </div>
  )
}`,
      preview: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <Card variant="default" className="transition-all">
            <CardHeader>
              <CardTitle className="text-lg">Default Card</CardTitle>
              <CardDescription>Border with subtle shadow</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Standard card with border and shadow for general use.</p>
            </CardContent>
          </Card>

          <Card variant="elevated" className="transition-all">
            <CardHeader>
              <CardTitle className="text-lg">Elevated Card</CardTitle>
              <CardDescription>No border, prominent shadow</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Floating appearance with elevated shadow effect.</p>
            </CardContent>
          </Card>

          <Card variant="outlined" className="transition-all">
            <CardHeader>
              <CardTitle className="text-lg">Outlined Card</CardTitle>
              <CardDescription>Thick border, no shadow</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Emphasized border without shadow for clear separation.</p>
            </CardContent>
          </Card>

          <Card variant="ghost" className="transition-all bg-muted/30">
            <CardHeader>
              <CardTitle className="text-lg">Ghost Card</CardTitle>
              <CardDescription>Minimal styling</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Subtle card with minimal visual weight.</p>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Interactive Cards',
      description: 'Cards with hover and click effects for better interactivity.',
      code: `import { Card, CardHeader, CardTitle, CardContent } from 'mad-ui-components'

export function InteractiveCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card hoverable>
        <CardHeader>
          <CardTitle>Hoverable Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Hover to see lift effect</p>
        </CardContent>
      </Card>
      
      <Card hoverable clickable onClick={() => alert('Clicked!')}>
        <CardHeader>
          <CardTitle>Clickable Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Click me for interaction</p>
        </CardContent>
      </Card>
    </div>
  )
}`,
      preview: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <Card hoverable className="transition-all">
            <CardHeader>
              <CardTitle className="text-lg">Hoverable Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Hover to see lift effect ✨</p>
            </CardContent>
          </Card>

          <Card hoverable clickable onClick={() => alert('Card clicked!')} className="transition-all">
            <CardHeader>
              <CardTitle className="text-lg">Clickable Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Click me for interaction 👆</p>
            </CardContent>
          </Card>
        </div>
      )
    }
  ],

  checkbox: [
    {
      title: 'Checkbox with Label',
      description: 'Basic checkbox with label and description.',
      code: `import { Checkbox } from 'mad-ui-components'

export function CheckboxBasic() {
  return (
    <div className="space-y-4">
      <Checkbox label="Accept terms and conditions" />
      <Checkbox 
        label="Email notifications"
        description="Receive emails about your account activity"
      />
    </div>
  )
}`,
      preview: (
        <div className="space-y-4">
          <Checkbox label="Accept terms and conditions" />
          <Checkbox
            label="Email notifications"
            description="Receive emails about your account activity"
          />
        </div>
      )
    },
    {
      title: 'Checkbox Sizes',
      description: 'Different checkbox sizes for various contexts.',
      code: `import { Checkbox } from 'mad-ui-components'

export function CheckboxSizes() {
  return (
    <div className="space-y-4">
      <Checkbox size="sm" label="Small checkbox" />
      <Checkbox size="md" label="Medium checkbox (default)" />
      <Checkbox size="lg" label="Large checkbox" />
    </div>
  )
}`,
      preview: (
        <div className="space-y-4">
          <Checkbox size="sm" label="Small checkbox" />
          <Checkbox size="md" label="Medium checkbox (default)" />
          <Checkbox size="lg" label="Large checkbox" />
        </div>
      )
    },
    {
      title: 'Indeterminate State',
      description: 'Checkbox in indeterminate state for partial selection.',
      code: `import { Checkbox } from 'mad-ui-components'

export function CheckboxIndeterminate() {
  return (
    <Checkbox label="Select all items" indeterminate />
  )
}`,
      preview: (
        <div className="space-y-2">
          <Checkbox label="Select all items" indeterminate />
          <p className="text-xs text-muted-foreground ml-7">Used for &quot;select all&quot; functionality</p>
        </div>
      )
    }
  ],

  radio: [
    {
      title: 'Radio Group',
      description: 'Group of radio buttons with labels and descriptions.',
      code: `import { Radio } from 'mad-ui-components'

export function RadioGroup() {
  return (
    <div className="space-y-3">
      <Radio name="plan" label="Free" description="Perfect for getting started" />
      <Radio name="plan" label="Pro" description="For professional use" />
      <Radio name="plan" label="Enterprise" description="For large teams" />
    </div>
  )
}`,
      preview: (
        <div className="space-y-3">
          <Radio name="plan" label="Free" description="Perfect for getting started" />
          <Radio name="plan" label="Pro" description="For professional use" />
          <Radio name="plan" label="Enterprise" description="For large teams" />
        </div>
      )
    },
    {
      title: 'Radio Sizes',
      description: 'Different radio button sizes.',
      code: `import { Radio } from 'mad-ui-components'

export function RadioSizes() {
  return (
    <div className="space-y-3">
      <Radio size="sm" label="Small radio" />
      <Radio size="md" label="Medium radio (default)" />
      <Radio size="lg" label="Large radio" />
    </div>
  )
}`,
      preview: (
        <div className="space-y-3">
          <Radio size="sm" label="Small radio" />
          <Radio size="md" label="Medium radio (default)" />
          <Radio size="lg" label="Large radio" />
        </div>
      )
    }
  ],

  switch: [
    {
      title: 'Switch with Label',
      description: 'Toggle switch with label and description.',
      code: `import { Switch } from 'mad-ui-components'

export function SwitchBasic() {
  return (
    <div className="space-y-4">
      <Switch label="Enable notifications" />
      <Switch 
        label="Marketing emails"
        description="Receive emails about new features and updates"
      />
    </div>
  )
}`,
      preview: (
        <div className="space-y-4">
          <Switch label="Enable notifications" />
          <Switch
            label="Marketing emails"
            description="Receive emails about new features and updates"
          />
        </div>
      )
    },
    {
      title: 'Switch Sizes',
      description: 'Different switch sizes.',
      code: `import { Switch } from 'mad-ui-components'

export function SwitchSizes() {
  return (
    <div className="space-y-4">
      <Switch size="sm" label="Small switch" />
      <Switch size="md" label="Medium switch (default)" />
      <Switch size="lg" label="Large switch" />
    </div>
  )
}`,
      preview: (
        <div className="space-y-4">
          <Switch size="sm" label="Small switch" />
          <Switch size="md" label="Medium switch (default)" />
          <Switch size="lg" label="Large switch" />
        </div>
      )
    }
  ],

  progress: [
    {
      title: 'Progress Variants',
      description: 'Different progress bar variants with semantic colors.',
      code: `import { Progress } from 'mad-ui-components'

export function ProgressVariants() {
  return (
    <div className="space-y-6">
      <Progress value={40} variant="default" showLabel label="Default" />
      <Progress value={100} variant="success" showLabel label="Success" />
      <Progress value={60} variant="warning" showLabel label="Warning" />
      <Progress value={30} variant="destructive" showLabel label="Error" />
    </div>
  )
}`,
      preview: (
        <div className="space-y-6 w-full">
          <div className="space-y-2">
            <Progress value={40} variant="default" showLabel label="Default Progress" />
            <p className="text-xs text-muted-foreground">40% complete</p>
          </div>
          <div className="space-y-2">
            <Progress value={100} variant="success" showLabel label="Success Progress" />
            <p className="text-xs text-green-600">100% complete ✓</p>
          </div>
          <div className="space-y-2">
            <Progress value={60} variant="warning" showLabel label="Warning Progress" />
            <p className="text-xs text-yellow-600">60% complete ⚠</p>
          </div>
          <div className="space-y-2">
            <Progress value={30} variant="destructive" showLabel label="Error Progress" />
            <p className="text-xs text-destructive">30% complete ✗</p>
          </div>
        </div>
      )
    },
    {
      title: 'Progress Sizes',
      description: 'Different progress bar heights.',
      code: `import { Progress } from 'mad-ui-components'

export function ProgressSizes() {
  return (
    <div className="space-y-6">
      <Progress value={60} size="sm" />
      <Progress value={60} size="md" />
      <Progress value={60} size="lg" />
    </div>
  )
}`,
      preview: (
        <div className="space-y-6 w-full">
          <div className="space-y-2">
            <Progress value={60} size="sm" />
            <p className="text-xs text-muted-foreground">Small (sm)</p>
          </div>
          <div className="space-y-2">
            <Progress value={60} size="md" />
            <p className="text-xs text-muted-foreground">Medium (md)</p>
          </div>
          <div className="space-y-2">
            <Progress value={60} size="lg" />
            <p className="text-xs text-muted-foreground">Large (lg)</p>
          </div>
        </div>
      )
    }
  ],

  rating: [
    {
      title: 'Basic Rating',
      description: 'Star rating component with value display.',
      code: `import { Rating } from 'mad-ui-components'

export function RatingBasic() {
  return (
    <div className="space-y-4">
      <Rating value={4} />
      <Rating value={3.5} showValue label="Product Rating" />
    </div>
  )
}`,
      preview: (
        <div className="space-y-6">
          <div className="space-y-2">
            <Rating value={4} />
            <p className="text-xs text-muted-foreground">4 out of 5 stars</p>
          </div>
          <div className="space-y-2">
            <Rating value={3.5} showValue label="Product Rating" />
            <p className="text-xs text-muted-foreground">With label and value</p>
          </div>
        </div>
      )
    },
    {
      title: 'Rating Sizes',
      description: 'Different star sizes.',
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
        <div className="space-y-6">
          <div className="space-y-2">
            <Rating value={5} size="sm" />
            <p className="text-xs text-muted-foreground">Small (sm)</p>
          </div>
          <div className="space-y-2">
            <Rating value={5} size="md" />
            <p className="text-xs text-muted-foreground">Medium (md)</p>
          </div>
          <div className="space-y-2">
            <Rating value={5} size="lg" />
            <p className="text-xs text-muted-foreground">Large (lg)</p>
          </div>
        </div>
      )
    }
  ],

  skeleton: [
    {
      title: 'Skeleton Variants',
      description: 'Different skeleton shapes for various content types.',
      code: `import { Skeleton } from 'mad-ui-components'

export function SkeletonVariants() {
  return (
    <div className="space-y-6">
      <Skeleton variant="text" className="h-4 w-full" />
      <Skeleton variant="circular" className="h-12 w-12" />
      <Skeleton variant="rectangular" className="h-32 w-full" />
      <Skeleton variant="rounded" className="h-24 w-full" />
    </div>
  )
}`,
      preview: (
        <div className="space-y-6 w-full">
          <div className="space-y-2">
            <Skeleton variant="text" className="h-4 w-full" />
            <p className="text-xs text-muted-foreground">Text skeleton</p>
          </div>
          <div className="space-y-2">
            <Skeleton variant="circular" className="h-12 w-12" />
            <p className="text-xs text-muted-foreground">Circular (avatar)</p>
          </div>
          <div className="space-y-2">
            <Skeleton variant="rectangular" className="h-32 w-full" />
            <p className="text-xs text-muted-foreground">Rectangular (image)</p>
          </div>
          <div className="space-y-2">
            <Skeleton variant="rounded" className="h-24 w-full" />
            <p className="text-xs text-muted-foreground">Rounded (card)</p>
          </div>
        </div>
      )
    },
    {
      title: 'Multi-line Skeleton',
      description: 'Multiple skeleton lines for text content.',
      code: `import { Skeleton } from 'mad-ui-components'

export function SkeletonMultiLine() {
  return <Skeleton lines={3} />
}`,
      preview: (
        <div className="space-y-2 w-full">
          <Skeleton lines={3} />
          <p className="text-xs text-muted-foreground">3 lines of text skeleton</p>
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
        <div className="w-full max-w-md mx-auto">
          <Textarea placeholder="Enter your message..." />
        </div>
      )
    },
    {
      title: 'Textarea with Label',
      description: 'Textarea with label and helper text.',
      code: `import { Textarea, Label } from 'mad-ui-components'

export function TextareaWithLabel() {
  return (
    <div className="space-y-2">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Type your message here" />
      <p className="text-sm text-muted-foreground">Your message will be sent to the team.</p>
    </div>
  )
}`,
      preview: (
        <div className="w-full max-w-md mx-auto space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Type your message here" />
          <p className="text-sm text-muted-foreground">Your message will be sent to the team.</p>
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
  ]
}
