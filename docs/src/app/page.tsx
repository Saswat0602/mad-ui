"use client"

import Link from "next/link"
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
import { 
  ArrowRight, 
  Package, 
  Code, 
  Zap, 
  Layers,
  Github,
  Star,
  Download,
  Rocket,
  Heart
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-24 lg:py-32 text-center">
        <div className="container mx-auto max-w-6xl relative">
          <div className="animate-slide-up">
            {/* Simple Badge */}
            <div className="flex items-center justify-center mb-8">
              <Badge variant="outline" className="px-4 py-2">
                ✨ Mad UI v2.0
              </Badge>
            </div>
            
            {/* Clean Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
              <span className="block text-foreground">Beautiful</span>
              <span className="block text-primary">React Components</span>
            </h1>
            
            {/* Simple Description */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              A comprehensive, modern UI component library built with 
              <span className="font-semibold text-foreground"> React</span> and 
              <span className="font-semibold text-foreground"> Tailwind CSS</span>. 
              Beautiful, accessible, and fully customizable.
            </p>
            
            {/* Clean CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 h-14"
              >
                <Link href="/docs/getting-started" className="flex items-center">
                  <Rocket className="mr-3 h-5 w-5" />
                  Get Started
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 h-14"
              >
                <Link href="/components" className="flex items-center">
                  <Package className="mr-3 h-5 w-5" />
                  View Components
                </Link>
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-lg px-8 py-4 h-14"
              >
                <Link href="https://github.com" className="flex items-center">
                  <Github className="mr-3 h-5 w-5" />
                  <Star className="mr-2 h-4 w-4" />
                  Star on GitHub
                </Link>
              </Button>
            </div>
            
            {/* Simple Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">50+</div>
                <div className="text-muted-foreground">Components</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">100%</div>
                <div className="text-muted-foreground">TypeScript</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">0KB</div>
                <div className="text-muted-foreground">Runtime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Component Showcase Section */}
      <section className="relative px-4 py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6">
              <Package className="w-4 h-4 mr-2" />
              Component Showcase
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Beautiful components,
              <span className="block text-primary">ready to use</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore our collection of carefully crafted components with multiple variants, styles, and comprehensive documentation.
            </p>
          </div>

          {/* Core Components */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center">Core Components</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="group hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg mb-2">Button</CardTitle>
                  <CardDescription>
                    A versatile button component with multiple variants and sizes.
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
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg mb-2">Input</CardTitle>
                  <CardDescription>
                    A flexible input component for various input types.
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
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg mb-2">Card</CardTitle>
                  <CardDescription>
                    A container component for grouping related content.
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
                  <CardTitle className="text-lg mb-2">Checkbox & Radio</CardTitle>
                  <CardDescription>
                    Form controls for boolean and single selection.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Radio id="option1" name="options" />
                    <Label htmlFor="option1">Option 1</Label>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg mb-2">Switch & Slider</CardTitle>
                  <CardDescription>
                    Interactive controls for settings and values.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Switch id="notifications" />
                    <Label htmlFor="notifications">Notifications</Label>
                  </div>
                  <div className="space-y-2">
                    <Label>Volume</Label>
                    <Slider defaultValue={50} max={100} step={1} />
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg mb-2">Progress & Rating</CardTitle>
                  <CardDescription>
                    Visual indicators for progress and ratings.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Upload Progress</Label>
                    <Progress value={65} className="w-full" />
                  </div>
                  <div className="space-y-2">
                    <Label>Rating</Label>
                    <Rating value={4} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Form Components */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center">Form Components</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="group hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg mb-2">Select</CardTitle>
                  <CardDescription>
                    A dropdown select component for options.
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
                    Multi-line text input component.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea placeholder="Enter your message here..." />
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg mb-2">Skeleton</CardTitle>
                  <CardDescription>
                    Loading placeholders for content.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Layout Components */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center">Layout Components</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="group hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg mb-2">Badge</CardTitle>
                  <CardDescription>
                    Small status indicators and labels.
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
                    Visual dividers for content sections.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p>Content above</p>
                    <hr className="border-border" />
                    <p>Content below</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg mb-2">Scroll Area</CardTitle>
                  <CardDescription>
                    Custom scrollable content areas.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-20 overflow-y-auto border rounded p-2">
                    <div className="space-y-1">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="text-sm">Item {i + 1}</div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-4 py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Why Choose Mad UI
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Everything you need to
              <span className="block text-primary">build amazing UIs</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From basic form elements to complex data displays, we&apos;ve got you covered with beautiful, accessible, and performant components.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="group hover:shadow-lg transition-all duration-200">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Copy & Customize</CardTitle>
                <CardDescription>
                  Copy components directly into your project and customize them to match your design system. Full control, zero dependencies.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-200">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">TypeScript Ready</CardTitle>
                <CardDescription>
                  Built with TypeScript from the ground up for superior developer experience with full type safety and IntelliSense.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-200">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Lightning Fast</CardTitle>
                <CardDescription>
                  Optimized for performance with tree-shaking, minimal bundle sizes, and zero runtime overhead.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-200">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Tailwind Powered</CardTitle>
                <CardDescription>
                  Built on top of Tailwind CSS for consistent design, easy customization, and utility-first styling.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-200">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Accessible</CardTitle>
                <CardDescription>
                  Built with accessibility in mind. WCAG compliant components with keyboard navigation and screen reader support.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-200">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Modular Design</CardTitle>
                <CardDescription>
                  Import only what you need with our modular architecture. Tree-shakeable and dependency-free.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 py-20 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-slide-up">
            <Badge variant="secondary" className="mb-6 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
              <Heart className="w-4 h-4 mr-2" />
              Join the Community
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to build something
              <span className="block text-primary-foreground">amazing?</span>
            </h2>
            
            <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Join thousands of developers who are already building better UIs with Mad UI components. Start your journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg px-6 py-3 h-12 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link href="/docs/getting-started" className="flex items-center">
                  <Rocket className="mr-2 h-5 w-5" />
                  Start Building
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-6 py-3 h-12 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="https://github.com" className="flex items-center">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </Link>
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-lg px-6 py-3 h-12 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/components" className="flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  Download Components
                </Link>
              </Button>
            </div>
            
            {/* Social proof */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-xl mx-auto">
              <div>
                <div className="text-2xl font-bold mb-1">10K+</div>
                <div className="opacity-80 text-sm">Downloads</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">50+</div>
                <div className="opacity-80 text-sm">Components</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">99%</div>
                <div className="opacity-80 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
