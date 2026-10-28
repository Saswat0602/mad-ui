import React from 'react'
import {
  Button,
  Input,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  Checkbox,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Progress,
  Rating,
  Skeleton,
  Textarea,
  Radio,
  Label
} from 'mad-ui-components'
import { Mail, Search, Download, Upload, Check, User, ArrowRight, Heart, ShoppingCart } from 'lucide-react'
import {
  buttonSnippets,
  inputSnippets,
  cardSnippets,
  checkboxSnippets,
  radioSnippets,
  switchSnippets,
  progressSnippets,
  ratingSnippets,
  skeletonSnippets,
  textareaSnippets,
  labelSnippets,
  selectSnippets
} from './data/core-snippets'

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
      code: buttonSnippets.variants,
      preview: (
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      )
    },
    {
      title: 'Button Sizes',
      description: 'Different button sizes for various use cases, including icon-only variant.',
      code: buttonSnippets.sizes,
      preview: (
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" aria-label="Search"><Search className="h-4 w-4" /></Button>
        </div>
      )
    },
    {
      title: 'Buttons with Icons',
      description: 'Enhance buttons with left and right icons for better visual communication.',
      code: buttonSnippets.withIcons,
      preview: (
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button leftIcon={<Download className="h-4 w-4" />}>Download</Button>
          <Button leftIcon={<Upload className="h-4 w-4" />} variant="secondary">Upload</Button>
          <Button rightIcon={<ArrowRight className="h-4 w-4" />} variant="outline">Next</Button>
          <Button leftIcon={<Heart className="h-4 w-4" />} variant="destructive">Like</Button>
          <Button leftIcon={<ShoppingCart className="h-4 w-4" />}>Add to Cart</Button>
        </div>
      )
    },
    {
      title: 'Loading States',
      description: 'Show loading feedback with animated spinner for async operations.',
      code: buttonSnippets.loading,
      preview: (
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button loading>Processing</Button>
          <Button variant="secondary" loading>Saving...</Button>
          <Button variant="outline" loading>Loading</Button>
        </div>
      )
    },
    {
      title: 'Full Width Button',
      description: 'Button that spans the full width of its container, perfect for forms.',
      code: buttonSnippets.fullWidth,
      preview: (
        <div className="w-full max-w-sm mx-auto space-y-2">
          <Button fullWidth leftIcon={<Check className="h-4 w-4" />}>
            Submit Form
          </Button>
        </div>
      )
    }
  ],

  input: [
    {
      title: 'Basic Inputs',
      description: 'Simple input fields with different types.',
      code: inputSnippets.basic,
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
      code: inputSnippets.withIcons,
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
      code: inputSnippets.states,
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
            <p className="text-sm text-green-600 dark:text-green-400">
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
      code: cardSnippets.variants,
      preview: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
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
              <CardDescription>Floating shadow appearance</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Elevated card with subtle shadow for prominent content.</p>
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
    },
    {
      title: 'Interactive Cards',
      description: 'Cards with hover and click effects for enhanced user experience.',
      code: cardSnippets.interactive,
      preview: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <Card hoverable>
            <CardHeader>
              <CardTitle>Hoverable Card</CardTitle>
              <CardDescription>Hover to see elevation effect</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Smooth elevation on hover for interactive items.</p>
            </CardContent>
          </Card>

          <Card hoverable clickable onClick={() => alert('Card clicked!')}>
            <CardHeader>
              <CardTitle>Clickable Card</CardTitle>
              <CardDescription>Click for button action</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Responds to user clicks with smooth feedback.</p>
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
      code: checkboxSnippets.basic,
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
      code: checkboxSnippets.sizes,
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
      code: checkboxSnippets.indeterminate,
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
      code: radioSnippets.group,
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
      code: radioSnippets.sizes,
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
      code: switchSnippets.basic,
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
      code: switchSnippets.sizes,
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
      code: progressSnippets.variants,
      preview: (
        <div className="space-y-6 w-full">
          <div className="space-y-2">
            <Progress value={40} variant="default" showLabel label="Default Progress" />
            <p className="text-xs text-muted-foreground">40% complete</p>
          </div>
          <div className="space-y-2">
            <Progress value={100} variant="success" showLabel label="Success Progress" />
            <p className="text-xs text-green-600 dark:text-green-400">100% complete</p>
          </div>
          <div className="space-y-2">
            <Progress value={60} variant="warning" showLabel label="Warning Progress" />
            <p className="text-xs text-yellow-600 dark:text-yellow-400">60% complete</p>
          </div>
          <div className="space-y-2">
            <Progress value={30} variant="destructive" showLabel label="Error Progress" />
            <p className="text-xs text-destructive">30% complete</p>
          </div>
        </div>
      )
    },
    {
      title: 'Progress Sizes',
      description: 'Different progress bar heights.',
      code: progressSnippets.sizes,
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
      code: ratingSnippets.basic,
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
      code: ratingSnippets.sizes,
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
      code: skeletonSnippets.variants,
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
      code: skeletonSnippets.multiLine,
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
      code: textareaSnippets.basic,
      preview: (
        <div className="w-full max-w-md mx-auto">
          <Textarea placeholder="Enter your message..." />
        </div>
      )
    },
    {
      title: 'Textarea with Label',
      description: 'Textarea with label and helper text.',
      code: textareaSnippets.withLabel,
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
      code: labelSnippets.basic,
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
      code: labelSnippets.required,
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
      code: selectSnippets.basic,
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
