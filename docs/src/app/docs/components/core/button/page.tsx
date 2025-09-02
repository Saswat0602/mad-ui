import { Button } from "mad-ui-components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "mad-ui-components/card"
import { Badge } from "mad-ui-components/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "mad-ui-components/tabs"
import { Code, Copy, Download, Play } from "lucide-react"

export default function ButtonPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary">Core</Badge>
          <Badge variant="outline">Button</Badge>
        </div>
        <h1 className="text-4xl font-bold mb-4">Button</h1>
        <p className="text-xl text-muted-foreground">
          A versatile button component with multiple variants, sizes, and states.
        </p>
      </div>

      <div className="space-y-8">
        {/* Installation */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <Card>
            <CardHeader>
              <CardTitle>Install the package</CardTitle>
              <CardDescription>
                Add Mad UI components to your project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg">
                <code className="text-sm">npm install mad-ui-components</code>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Usage */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Usage</h2>
          <Tabs defaultValue="import" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="import">Import</TabsTrigger>
              <TabsTrigger value="copy">Copy Component</TabsTrigger>
              <TabsTrigger value="basic">Basic Usage</TabsTrigger>
            </TabsList>
            
            <TabsContent value="import" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Individual Import</CardTitle>
                  <CardDescription>
                    Import only the Button component for smaller bundles
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-4 rounded-lg text-sm">
                    <pre>{`import { Button } from 'mad-ui-components/button'

export default function MyComponent() {
  return (
    <Button>Click me</Button>
  )
}`}</pre>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Bundle size: ~3KB
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="copy" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Copy Component</CardTitle>
                  <CardDescription>
                    Copy the Button component to your project for full customization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-4 rounded-lg text-sm">
                    <pre>{`npx mad-ui-components copy button

# This creates:
# components/ui/mad-ui/button.tsx`}</pre>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Bundle size: 0KB (only what you use)
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="basic" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Usage</CardTitle>
                  <CardDescription>
                    Simple button with default styling
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg text-sm">
                      <pre>{`import { Button } from 'mad-ui-components/button'

<Button>Click me</Button>`}</pre>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <Button>Click me</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Variants */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Variants</h2>
          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>
                Different visual styles for different use cases
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Default Variant</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="default">Default</Button>
                    <Button variant="default" disabled>Disabled</Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Secondary Variant</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="secondary" disabled>Disabled</Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Destructive Variant</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="destructive" disabled>Disabled</Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Outline Variant</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline">Outline</Button>
                    <Button variant="outline" disabled>Disabled</Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Ghost Variant</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="ghost" disabled>Disabled</Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Link Variant</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="link">Link</Button>
                    <Button variant="link" disabled>Disabled</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Sizes */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
          <Card>
            <CardHeader>
              <CardTitle>Button Sizes</CardTitle>
              <CardDescription>
                Different sizes for different contexts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Size Variants</h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon" className="w-10 h-10">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">With Icons</h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                    <Button size="default">
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </Button>
                    <Button size="lg">
                      <Play className="mr-2 h-5 w-5" />
                      Play
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* States */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">States</h2>
          <Card>
            <CardHeader>
              <CardTitle>Button States</CardTitle>
              <CardDescription>
                Different states for user interaction feedback
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Loading State</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button disabled>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Loading...
                    </Button>
                    <Button variant="outline" disabled>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Loading...
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Disabled State</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button disabled>Disabled</Button>
                    <Button variant="secondary" disabled>Disabled</Button>
                    <Button variant="outline" disabled>Disabled</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Examples */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Examples</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Form Actions</CardTitle>
                <CardDescription>
                  Common button patterns in forms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Button type="submit">Save Changes</Button>
                    <Button variant="outline" type="button">Cancel</Button>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="destructive" size="sm">Delete</Button>
                    <Button variant="ghost" size="sm">Archive</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Navigation</CardTitle>
                <CardDescription>
                  Button usage in navigation contexts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Previous</Button>
                    <Button size="sm">Next</Button>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">Back</Button>
                    <Button variant="ghost" size="sm">Home</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* API Reference */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
          <Card>
            <CardHeader>
              <CardTitle>Button Props</CardTitle>
              <CardDescription>
                All available props and their types
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Props</h4>
                  <div className="bg-muted p-4 rounded-lg text-sm">
                    <pre>{`interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  disabled?: boolean
  className?: string
  children: React.ReactNode
  // ... other HTML button props
}`}</pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Variants</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li><code>default</code> - Primary button style</li>
                    <li><code>destructive</code> - For dangerous actions</li>
                    <li><code>outline</code> - Bordered button style</li>
                    <li><code>secondary</code> - Secondary button style</li>
                    <li><code>ghost</code> - Minimal button style</li>
                    <li><code>link</code> - Link-like button style</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Sizes</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li><code>sm</code> - Small button</li>
                    <li><code>default</code> - Default button size</li>
                    <li><code>lg</code> - Large button</li>
                    <li><code>icon</code> - Square button for icons</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

