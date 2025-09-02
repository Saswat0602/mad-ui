import Link from "next/link"
import { Button } from "mad-ui-components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "mad-ui-components/card"
import { Badge } from "mad-ui-components/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "mad-ui-components/tabs"
import { Code, Package, Copy, Zap } from "lucide-react"

export default function GettingStartedPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Getting Started</h1>
        <p className="text-xl text-muted-foreground">
          Learn how to install and use Mad UI components in your project.
        </p>
      </div>

      <div className="space-y-8">
        {/* Installation Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Install the package
              </CardTitle>
              <CardDescription>
                Add Mad UI components to your project using npm, yarn, or pnpm.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="npm" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="npm">npm</TabsTrigger>
                  <TabsTrigger value="yarn">yarn</TabsTrigger>
                  <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                </TabsList>
                <TabsContent value="npm" className="mt-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">npm install mad-ui-components</code>
                  </div>
                </TabsContent>
                <TabsContent value="yarn" className="mt-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">yarn add mad-ui-components</code>
                  </div>
                </TabsContent>
                <TabsContent value="pnpm" className="mt-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">pnpm add mad-ui-components</code>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* Usage Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Usage</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Individual Import
                </CardTitle>
                <CardDescription>
                  Import only the components you need for smaller bundles.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg text-sm">
                  <pre>{`import { Button } from 'mad-ui-components/button'
import { Input } from 'mad-ui-components/input'
import { Card } from 'mad-ui-components/card'`}</pre>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Bundle size: ~2-5KB per component
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Copy className="h-5 w-5" />
                  Copy Components
                </CardTitle>
                <CardDescription>
                  Copy components directly into your project for full customization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg text-sm">
                  <pre>{`npx mad-ui-components copy button input card

# This creates:
# components/ui/mad-ui/button.tsx
# components/ui/mad-ui/input.tsx
# components/ui/mad-ui/card.tsx`}</pre>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Bundle size: 0KB (only what you use)
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick Start Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Your First Component
              </CardTitle>
              <CardDescription>
                Get started with a simple button component.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">1. Install the package</h4>
                  <div className="bg-muted p-3 rounded-lg">
                    <code className="text-sm">npm install mad-ui-components</code>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">2. Import and use</h4>
                  <div className="bg-muted p-3 rounded-lg">
                    <pre className="text-sm">{`import { Button } from 'mad-ui-components/button'

export default function MyComponent() {
  return (
    <Button variant="default" size="lg">
      Click me
    </Button>
  )
}`}</pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">3. Result</h4>
                  <div className="p-4 border rounded-lg">
                    <Button variant="default" size="lg">
                      Click me
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Explore Components</CardTitle>
                <CardDescription>
                  Browse our complete collection of components with examples and variants.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/docs/components">View Components</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Copy Components</CardTitle>
                <CardDescription>
                  Learn how to copy and customize components in your project.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/docs/installation">Installation Guide</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

