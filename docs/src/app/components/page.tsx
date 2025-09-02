"use client"

import { Button } from "mad-ui-components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "mad-ui-components/card"
import { Badge } from "mad-ui-components/badge"
import { Input } from "mad-ui-components/input"
import { Label } from "mad-ui-components/label"
import { Checkbox } from "mad-ui-components/checkbox"
import { Radio } from "mad-ui-components/radio"
import { Switch } from "mad-ui-components/switch"
import { Slider } from "mad-ui-components/slider"
import { Progress } from "mad-ui-components/progress"
import { Rating } from "mad-ui-components/rating"
import { Skeleton } from "mad-ui-components/skeleton"
import { Textarea } from "mad-ui-components/textarea"
import { Select } from "mad-ui-components/select"
import { Separator } from "mad-ui-components/separator"
import { 
  Package, 
  Code, 
  Layers,
  Zap,
  ArrowRight
} from "lucide-react"

export default function ComponentsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Components</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Explore our collection of carefully crafted components. Each component is built with accessibility in mind and follows modern design principles.
        </p>
      </div>

      {/* Core Components */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-8">
          <Package className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Core Components</h2>
        </div>
        <p className="text-muted-foreground mb-8">
          Essential building blocks for every application. These components provide the foundation for user interfaces.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="group hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg mb-2">Button</CardTitle>
              <CardDescription>
                A versatile button component with multiple variants, sizes, and states.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Small</Button>
                <Button>Default</Button>
                <Button size="lg">Large</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="error">Error</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg mb-2">Input</CardTitle>
              <CardDescription>
                A flexible input component for text, email, password, and other input types.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="search">Search</Label>
                <Input id="search" placeholder="Search..." />
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg mb-2">Label</CardTitle>
              <CardDescription>
                A semantic label component for form controls and accessibility.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Enter username" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" placeholder="Tell us about yourself" />
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg mb-2">Card</CardTitle>
              <CardDescription>
                A container component for grouping related content and actions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Card content example</p>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg mb-2">Checkbox</CardTitle>
              <CardDescription>
                A checkbox component for boolean input with custom styling.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="newsletter" />
                <Label htmlFor="newsletter">Subscribe to newsletter</Label>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg mb-2">Radio</CardTitle>
              <CardDescription>
                A radio button component for single selection from a group.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Radio id="option1" name="options" />
                <Label htmlFor="option1">Option 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Radio id="option2" name="options" />
                <Label htmlFor="option2">Option 2</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Radio id="option3" name="options" />
                <Label htmlFor="option3">Option 3</Label>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Form Components */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-8">
          <Code className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Form Components</h2>
        </div>
        <p className="text-muted-foreground mb-8">
          Advanced form elements with built-in validation and accessibility features.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="group hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg mb-2">Select</CardTitle>
              <CardDescription>
                A dropdown select component for choosing from multiple options.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Select options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                { value: "option3", label: "Option 3" }
              ]} />
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg mb-2">Textarea</CardTitle>
              <CardDescription>
                A multi-line text input component for longer content.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea placeholder="Enter your message here..." rows={4} />
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg mb-2">Switch</CardTitle>
              <CardDescription>
                A toggle switch component for boolean settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="notifications">Notifications</Label>
                <Switch id="notifications" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="darkmode">Dark Mode</Label>
                <Switch id="darkmode" />
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg mb-2">Slider</CardTitle>
              <CardDescription>
                A range slider component for selecting numeric values.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Volume: 50</Label>
                <Slider defaultValue={50} max={100} step={1} />
              </div>
              <div className="space-y-2">
                <Label>Brightness: 75</Label>
                <Slider defaultValue={75} max={100} step={5} />
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg mb-2">Progress</CardTitle>
              <CardDescription>
                A progress bar component for showing completion status.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Upload Progress</Label>
                <Progress value={65} className="w-full" />
              </div>
              <div className="space-y-2">
                <Label>Download Progress</Label>
                <Progress value={30} className="w-full" />
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg mb-2">Rating</CardTitle>
              <CardDescription>
                A star rating component for user feedback and reviews.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Product Rating</Label>
                <Rating value={4} />
              </div>
              <div className="space-y-2">
                <Label>Service Rating</Label>
                <Rating value={5} />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Layout Components */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-8">
          <Layers className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Layout Components</h2>
        </div>
        <p className="text-muted-foreground mb-8">
          Structure and organization components for complex application layouts.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="group hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg mb-2">Badge</CardTitle>
              <CardDescription>
                Small status indicators and labels for content categorization.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg mb-2">Separator</CardTitle>
              <CardDescription>
                Visual dividers for separating content sections.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Content above</p>
                <Separator />
                <p>Content below</p>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg mb-2">Skeleton</CardTitle>
              <CardDescription>
                Loading placeholders for content while data is being fetched.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <div className="flex gap-2">
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-20" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Interactive Components */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-8">
          <Zap className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Interactive Components</h2>
        </div>
        <p className="text-muted-foreground mb-8">
          Components that provide rich user interactions and feedback.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="group hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg mb-2">Button Group</CardTitle>
              <CardDescription>
                A collection of related buttons grouped together.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Save</Button>
                <Button variant="outline" size="sm">Cancel</Button>
                <Button size="sm">Submit</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg mb-2">Form Layout</CardTitle>
              <CardDescription>
                A complete form example with multiple input types.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstname">First Name</Label>
                  <Input id="firstname" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastname">Last Name</Label>
                  <Input id="lastname" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="agree" />
                <Label htmlFor="agree">I agree to the terms</Label>
              </div>
              <Button className="w-full">Send Message</Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg mb-2">Settings Panel</CardTitle>
              <CardDescription>
                A settings interface with various control types.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="autosave">Auto-save</Label>
                <Switch id="autosave" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="notifications">Notifications</Label>
                <Switch id="notifications" />
              </div>
              <div className="space-y-2">
                <Label>Theme</Label>
                <Select options={[
                  { value: "light", label: "Light" },
                  { value: "dark", label: "Dark" },
                  { value: "system", label: "System" }
                ]} />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 bg-muted/30 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Start building beautiful user interfaces with Mad UI components. Copy the components you need and customize them to match your design system.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            <Package className="mr-2 h-4 w-4" />
            View All Components
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            <Code className="mr-2 h-4 w-4" />
            View Source Code
          </Button>
        </div>
      </section>
    </div>
  )
}
