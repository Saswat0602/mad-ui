"use client"

import Link from "next/link"
import { Button } from "mad-ui-components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "mad-ui-components/card"

import { Tabs } from "mad-ui-components/tabs"
import { 
  Package, 
  Copy, 
  Code, 
  Settings, 
  Zap,
  CheckCircle,
  AlertCircle
} from "lucide-react"

export default function InstallationPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Installation Guide</h1>
        <p className="text-xl text-muted-foreground">
          Learn how to install and set up Mad UI components in your project.
        </p>
      </div>

      <div className="space-y-8">
        {/* Package Installation */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Package Installation</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Install the package
              </CardTitle>
              <CardDescription>
                Add Mad UI components to your project using your preferred package manager
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs
                items={[
                  {
                    id: 'npm',
                    label: 'npm',
                    content: (
                      <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm">npm install mad-ui-components</code>
                      </div>
                    )
                  },
                  {
                    id: 'yarn',
                    label: 'yarn',
                    content: (
                      <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm">yarn add mad-ui-components</code>
                      </div>
                    )
                  },
                  {
                    id: 'pnpm',
                    label: 'pnpm',
                    content: (
                      <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm">pnpm add mad-ui-components</code>
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

        {/* Usage Methods */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Usage Methods</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Individual Import
                </CardTitle>
                <CardDescription>
                  Import only the components you need for smaller bundles
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted p-4 rounded-lg text-sm">
                  <pre>{`import { Button } from 'mad-ui-components/button'
import { Input } from 'mad-ui-components/input'
import { Card } from 'mad-ui-components/card'`}</pre>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Smaller bundle sizes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Tree-shaking friendly</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Easy to use</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
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
                  Copy components directly into your project for full customization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted p-4 rounded-lg text-sm">
                  <pre>{`npx mad-ui-components copy button input card

# This creates:
# components/ui/mad-ui/button.tsx
# components/ui/mad-ui/input.tsx
# components/ui/mad-ui/card.tsx`}</pre>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Full customization control</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">No bundle size impact</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Version control friendly</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Bundle size: 0KB (only what you use)
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Copy Commands */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Copy Commands</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Copy className="h-5 w-5" />
                Available Copy Commands
              </CardTitle>
              <CardDescription>
                Use these commands to copy components to your project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Copy Individual Components</h4>
                  <div className="bg-muted p-3 rounded-lg text-sm">
                    <code>npx mad-ui-components copy button input card</code>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Copy All Components</h4>
                  <div className="bg-muted p-3 rounded-lg text-sm">
                    <code>npx mad-ui-components copy --all</code>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Copy by Category</h4>
                  <div className="bg-muted p-3 rounded-lg text-sm">
                    <code>npx mad-ui-components copy --category core</code>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Copy with Dependencies</h4>
                  <div className="bg-muted p-3 rounded-lg text-sm">
                    <code>npx mad-ui-components copy button --with-deps</code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Setup Instructions */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Setup Instructions</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Step 1: Install Dependencies
                </CardTitle>
                <CardDescription>
                  Ensure you have the required dependencies in your project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg text-sm">
                  <pre>{`npm install mad-ui-components
npm install tailwindcss @tailwindcss/forms
npm install clsx tailwind-merge`}</pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Step 2: Configure Tailwind CSS
                </CardTitle>
                <CardDescription>
                  Add the necessary Tailwind CSS configuration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg text-sm">
                  <pre>{`// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/mad-ui-components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}`}</pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Step 3: Start Using Components
                </CardTitle>
                <CardDescription>
                  Import and use components in your React components
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg text-sm">
                  <pre>{`import { Button } from 'mad-ui-components/button'
import { Input } from 'mad-ui-components/input'

export default function MyForm() {
  return (
    <form className="space-y-4">
      <Input placeholder="Enter your name" />
      <Button type="submit">Submit</Button>
    </form>
  )
}`}</pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Troubleshooting */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Common Issues and Solutions
              </CardTitle>
              <CardDescription>
                Solutions to frequently encountered problems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Component not found</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Make sure you&apos;ve installed the package and imported correctly.
                  </p>
                  <div className="bg-muted p-3 rounded-lg text-sm">
                    <code>npm install mad-ui-components</code>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Styling not applied</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Ensure Tailwind CSS is properly configured and imported.
                  </p>
                  <div className="bg-muted p-3 rounded-lg text-sm">
                    <code>@import &quot;tailwindcss/base&quot;; @import &quot;tailwindcss/components&quot;; @import &quot;tailwindcss/utilities&quot;;</code>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">TypeScript errors</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Make sure your tsconfig.json includes the components directory.
                  </p>
                  <div className="bg-muted p-3 rounded-lg text-sm">
                    <code>{`"include": ["src/**/*", "components/**/*"]`}</code>
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
                <Button className="w-full">
                  <Link href="/docs/components">View Components</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Get Started</CardTitle>
                <CardDescription>
                  Learn the basics and start building with our components.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Link href="/docs/getting-started">Getting Started</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
