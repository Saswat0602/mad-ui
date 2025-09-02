"use client"

import Link from "next/link"
import { Button } from "mad-ui-components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "mad-ui-components/card"
import { Badge } from "mad-ui-components/badge"
import { Tabs } from "mad-ui-components/tabs"
import { 
  Code, 
  Package, 
  Copy, 
  Zap, 
  ArrowRight, 
  Download, 
  Rocket, 
  CheckCircle,
  ExternalLink,
  BookOpen,
  Sparkles
} from "lucide-react"

export default function GettingStartedPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 lg:py-16">
      {/* Hero Section */}
      <div className="text-center mb-16 animate-slide-up">
        <Badge variant="outline" className="mb-6 px-4 py-2">
          <BookOpen className="w-4 h-4 mr-2" />
          Documentation
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Getting Started with
          <span className="block bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Mad UI
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Learn how to install and use Mad UI components in your project. Get up and running in minutes with our comprehensive guide.
        </p>
      </div>

      <div className="space-y-16">
        {/* Installation Section */}
        <section className="animate-slide-up">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1">
              <Download className="w-4 h-4 mr-2" />
              Step 1
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Installation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred package manager and get started with Mad UI components in seconds.
            </p>
          </div>
          
          <Card className="hover-lift bg-gradient-to-br from-card to-card/50 border-border/50">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Install Mad UI Components</CardTitle>
              <CardDescription className="text-base">
                Add Mad UI components to your project using your favorite package manager.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs
                items={[
                  {
                    id: 'npm',
                    label: 'npm',
                    content: (
                      <div className="bg-muted/80 p-6 rounded-xl border">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-muted-foreground">Terminal</span>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <code className="text-sm font-mono">npm install mad-ui-components</code>
                      </div>
                    )
                  },
                  {
                    id: 'yarn',
                    label: 'yarn',
                    content: (
                      <div className="bg-muted/80 p-6 rounded-xl border">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-muted-foreground">Terminal</span>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <code className="text-sm font-mono">yarn add mad-ui-components</code>
                      </div>
                    )
                  },
                  {
                    id: 'pnpm',
                    label: 'pnpm',
                    content: (
                      <div className="bg-muted/80 p-6 rounded-xl border">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-muted-foreground">Terminal</span>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <code className="text-sm font-mono">pnpm add mad-ui-components</code>
                      </div>
                    )
                  }
                ]}
                defaultActiveTab="npm"
                className="w-full"
              />
            </CardContent>
          </Card>
        </section>

        {/* Usage Section */}
        <section className="animate-slide-up">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1">
              <Code className="w-4 h-4 mr-2" />
              Step 2
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Usage Options</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the approach that best fits your project and workflow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover-lift bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/20 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">Individual Import</CardTitle>
                <CardDescription className="text-base">
                  Import only the components you need for optimal bundle sizes and tree-shaking.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/80 p-4 rounded-xl border">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">components.tsx</span>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <pre className="text-sm font-mono text-foreground">{`import { Button } from 'mad-ui-components/button'
import { Input } from 'mad-ui-components/input'
import { Card } from 'mad-ui-components/card'`}</pre>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-muted-foreground">Bundle size: ~2-5KB per component</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover-lift bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/20 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Copy className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">Copy Components</CardTitle>
                <CardDescription className="text-base">
                  Copy components directly into your project for full customization and control.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/80 p-4 rounded-xl border">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">Terminal</span>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <pre className="text-sm font-mono text-foreground">{`npx mad-ui-components copy button input card

# This creates:
# components/ui/mad-ui/button.tsx
# components/ui/mad-ui/input.tsx
# components/ui/mad-ui/card.tsx`}</pre>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-muted-foreground">Bundle size: 0KB runtime overhead</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="animate-slide-up">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1">
              <Rocket className="w-4 h-4 mr-2" />
              Step 3
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Start</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get up and running with your first component in under 60 seconds.
            </p>
          </div>
          
          <Card className="hover-lift bg-gradient-to-br from-card to-card/50 border-border/50">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Your First Component</CardTitle>
              <CardDescription className="text-base">
                Follow these simple steps to create your first Mad UI component.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-3 text-lg">Install the package</h4>
                    <div className="bg-muted/80 p-4 rounded-xl border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Terminal</span>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      <code className="text-sm font-mono">npm install mad-ui-components</code>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-3 text-lg">Import and use the component</h4>
                    <div className="bg-muted/80 p-4 rounded-xl border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">app.tsx</span>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      <pre className="text-sm font-mono">{`import { Button } from 'mad-ui-components/button'

export default function App() {
  return (
    <Button variant="default" size="lg">
      Click me!
    </Button>
  )
}`}</pre>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-semibold">
                    ✓
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-3 text-lg">See the result</h4>
                    <div className="p-6 border-2 border-dashed border-muted-foreground/20 rounded-xl bg-muted/20 text-center">
                      <Button variant="primary" size="lg" className="shadow-lg">
                        Click me!
                      </Button>
                      <p className="text-sm text-muted-foreground mt-3">
                        🎉 Your first Mad UI component is ready!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Next Steps */}
        <section className="animate-slide-up">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1">
              <Sparkles className="w-4 h-4 mr-2" />
              What&apos;s Next?
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Continue Your Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive component library and learn advanced techniques.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover-lift bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/20 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">Explore Components</CardTitle>
                <CardDescription className="text-base">
                  Browse our complete collection of 50+ components with live examples and documentation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full group/btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                  <Link href="/docs/components" className="flex items-center">
                    View All Components
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover-lift bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/20 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Download className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">Installation Guide</CardTitle>
                <CardDescription className="text-base">
                  Learn advanced installation techniques and project setup configurations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full group/btn border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Link href="/docs/installation" className="flex items-center">
                    Installation Guide
                    <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover-lift bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/20 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">Live Examples</CardTitle>
                <CardDescription className="text-base">
                  See real-world examples and learn best practices from our showcase.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full group/btn hover:bg-muted/50 transition-colors">
                  <Link href="/docs/examples" className="flex items-center">
                    View Examples
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

