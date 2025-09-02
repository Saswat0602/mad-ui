import Link from "next/link"
import { Button } from "mad-ui-components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "mad-ui-components/card"
import { Badge } from "mad-ui-components/badge"
import { 
  ArrowRight, 
  Package, 
  Code, 
  Zap, 
  Palette, 
  Smartphone,
  Layers,
  Sparkles
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="px-4 py-20 text-center">
        <div className="container mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            🚀 Now Available
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Beautiful, accessible, and
            <span className="text-primary"> customizable</span> React components
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A comprehensive UI component library built with React and Tailwind CSS. 
            Copy components, customize them, and ship faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/docs/getting-started">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="/docs/components">
                View Components
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to build amazing UIs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From basic form elements to complex data displays, we've got you covered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Package className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Copy & Customize</CardTitle>
                <CardDescription>
                  Copy components directly into your project and customize them to match your design system.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Code className="h-12 w-12 text-primary mb-4" />
                <CardTitle>TypeScript Ready</CardTitle>
                <CardDescription>
                  Built with TypeScript from the ground up for better developer experience.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Optimized for performance with tree-shaking and minimal bundle sizes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Palette className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Tailwind CSS</CardTitle>
                <CardDescription>
                  Built on top of Tailwind CSS for consistent design and easy customization.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Smartphone className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Responsive</CardTitle>
                <CardDescription>
                  All components are mobile-first and responsive by default.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Layers className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Modular</CardTitle>
                <CardDescription>
                  Import only what you need with our modular architecture.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Component Preview Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Beautiful components, ready to use
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of carefully crafted components with multiple variants and styles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Core Components</CardTitle>
                <CardDescription>
                  Essential building blocks for every application
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Button</Badge>
                  <Badge variant="secondary">Input</Badge>
                  <Badge variant="secondary">Card</Badge>
                  <Badge variant="secondary">Label</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/docs/components/core">View All</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Form Components</CardTitle>
                <CardDescription>
                  Advanced form elements and validation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Accordion</Badge>
                  <Badge variant="secondary">Tabs</Badge>
                  <Badge variant="secondary">Date Picker</Badge>
                  <Badge variant="secondary">Select</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/docs/components/forms">View All</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Layout Components</CardTitle>
                <CardDescription>
                  Structure and organization components
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Navbar</Badge>
                  <Badge variant="secondary">Sidebar</Badge>
                  <Badge variant="secondary">Modal</Badge>
                  <Badge variant="secondary">Sheet</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/docs/components/layout">View All</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of developers building better UIs with Mad UI components.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="/docs/getting-started">
                Start Building
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="https://github.com/your-username/mad-ui-components">
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
