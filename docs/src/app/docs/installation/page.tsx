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
import { useState, useEffect } from "react"
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/components/prism-bash"
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-json"
import { InstallationHero } from "@/components/hero-section"

interface CodeBlockProps {
  code: string
  language: string
  filename?: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, filename }) => {
  const [copied, setCopied] = useState(false)
  
  useEffect(() => {
    Prism.highlightAll()
  }, [code])

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
        {filename && (
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900/50">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="h-4 w-px bg-slate-700 mx-2"></div>
              <span className="text-sm text-slate-400 font-medium">{filename}</span>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleCopy}
              className="h-8 w-8 p-0 hover:bg-slate-800 text-slate-400 hover:text-slate-200"
            >
              {copied ? (
                <CheckCircle className="h-4 w-4 text-green-400" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        )}
        <div className="p-6">
          <pre className="text-sm font-mono text-slate-100 overflow-x-auto">
            <code className={`language-${language}`}>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default function InstallationPage() {
  return (
    <div className="min-h-screen">
      <InstallationHero />
      
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="space-y-16">
          {/* Package Installation */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Package Installation</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Add Mad UI components to your project using your preferred package manager
              </p>
            </div>
            
            <Card className="border-2 border-border/50 shadow-xl shadow-primary/5">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                    <Package className="h-5 w-5 text-primary-foreground" />
                  </div>
                  Install the package
                </CardTitle>
                <CardDescription className="text-base">
                  Choose your preferred package manager and run the installation command
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs
                  items={[
                    {
                      id: 'npm',
                      label: 'npm',
                      content: (
                        <CodeBlock 
                          code="npm install mad-ui-components"
                          language="bash"
                          filename="Terminal"
                        />
                      )
                    },
                    {
                      id: 'yarn',
                      label: 'yarn',
                      content: (
                        <CodeBlock 
                          code="yarn add mad-ui-components"
                          language="bash"
                          filename="Terminal"
                        />
                      )
                    },
                    {
                      id: 'pnpm',
                      label: 'pnpm',
                      content: (
                        <CodeBlock 
                          code="pnpm add mad-ui-components"
                          language="bash"
                          filename="Terminal"
                        />
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
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Usage Methods</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the approach that best fits your project architecture and development workflow
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-2 border-border/50 shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Code className="h-5 w-5 text-white" />
                    </div>
                    Individual Import
                  </CardTitle>
                  <CardDescription className="text-base">
                    Import only the components you need for smaller bundles
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CodeBlock 
                    code={`import { Button } from 'mad-ui-components/button'
import { Input } from 'mad-ui-components/input'
import { Card } from 'mad-ui-components/card'`}
                    language="javascript"
                    filename="components.tsx"
                  />
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                      <span className="text-sm font-medium text-green-800 dark:text-green-300">Smaller bundle sizes</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-sm font-medium text-blue-800 dark:text-blue-300">Tree-shaking friendly</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                      <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                      <span className="text-sm font-medium text-purple-800 dark:text-purple-300">Easy to use</span>
                    </div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg border border-border/50">
                    <p className="text-sm font-medium text-muted-foreground">
                      Bundle size: ~2-5KB per component
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-border/50 shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
                      <Copy className="h-5 w-5 text-white" />
                    </div>
                    Copy Components
                  </CardTitle>
                  <CardDescription className="text-base">
                    Copy components directly into your project for full customization
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CodeBlock 
                    code={`npx mad-ui-components copy button input card

# This creates:
# components/ui/mad-ui/button.tsx
# components/ui/mad-ui/input.tsx
# components/ui/mad-ui/card.tsx`}
                    language="bash"
                    filename="Terminal"
                  />
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                      <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span className="text-sm font-medium text-emerald-800 dark:text-emerald-300">Full customization control</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                      <CheckCircle className="h-5 w-5 text-orange-600 dark:text-orange-400 flex-shrink-0" />
                      <span className="text-sm font-medium text-orange-800 dark:text-orange-300">No bundle size impact</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
                      <CheckCircle className="h-5 w-5 text-pink-600 dark:text-pink-400 flex-shrink-0" />
                      <span className="text-sm font-medium text-pink-800 dark:text-pink-300">Version control friendly</span>
                    </div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg border border-border/50">
                    <p className="text-sm font-medium text-muted-foreground">
                      Bundle size: 0KB (only what you use)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Copy Commands */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Copy Commands</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Use these commands to copy components to your project
              </p>
            </div>
            
            <Card className="border-2 border-border/50 shadow-xl shadow-primary/5">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Copy className="h-5 w-5 text-white" />
                  </div>
                  Available Copy Commands
                </CardTitle>
                <CardDescription className="text-base">
                  Powerful commands to copy components to your project
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Copy Individual Components</h4>
                    <CodeBlock 
                      code="npx mad-ui-components copy button input card"
                      language="bash"
                      filename="Terminal"
                    />
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Copy All Components</h4>
                    <CodeBlock 
                      code="npx mad-ui-components copy --all"
                      language="bash"
                      filename="Terminal"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Copy by Category</h4>
                    <CodeBlock 
                      code="npx mad-ui-components copy --category core"
                      language="bash"
                      filename="Terminal"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Copy with Dependencies</h4>
                    <CodeBlock 
                      code="npx mad-ui-components copy button --with-deps"
                      language="bash"
                      filename="Terminal"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Setup Instructions */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Setup Instructions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Follow these steps to configure Mad UI in your project
              </p>
            </div>
            
            <div className="space-y-8">
              <Card className="border-2 border-border/50 shadow-xl shadow-primary/5">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Settings className="h-5 w-5 text-white" />
                    </div>
                    Step 1: Install Dependencies
                  </CardTitle>
                  <CardDescription className="text-base">
                    Ensure you have the required dependencies in your project
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock 
                    code={`npm install mad-ui-components
npm install tailwindcss @tailwindcss/forms
npm install clsx tailwind-merge`}
                    language="bash"
                    filename="Terminal"
                  />
                </CardContent>
              </Card>

              <Card className="border-2 border-border/50 shadow-xl shadow-primary/5">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
                      <Code className="h-5 w-5 text-white" />
                    </div>
                    Step 2: Configure Tailwind CSS
                  </CardTitle>
                  <CardDescription className="text-base">
                    Add the necessary Tailwind CSS configuration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock 
                    code={`// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/mad-ui-components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}`}
                    language="javascript"
                    filename="tailwind.config.js"
                  />
                </CardContent>
              </Card>

              <Card className="border-2 border-border/50 shadow-xl shadow-primary/5">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    Step 3: Start Using Components
                  </CardTitle>
                  <CardDescription className="text-base">
                    Import and use components in your React components
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock 
                    code={`import { Button } from 'mad-ui-components/button'
import { Input } from 'mad-ui-components/input'

export default function MyForm() {
  return (
    <form className="space-y-4">
      <Input placeholder="Enter your name" />
      <Button type="submit">Submit</Button>
    </form>
  )
}`}
                    language="jsx"
                    filename="MyForm.tsx"
                  />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Troubleshooting</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Solutions to frequently encountered problems
              </p>
            </div>
            
            <Card className="border-2 border-border/50 shadow-xl shadow-primary/5">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                    <AlertCircle className="h-5 w-5 text-white" />
                  </div>
                  Common Issues and Solutions
                </CardTitle>
                <CardDescription className="text-base">
                  Quick fixes for the most common installation and setup issues
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Component not found</h4>
                    <p className="text-muted-foreground mb-4">
                      Make sure you&apos;ve installed the package and imported correctly.
                    </p>
                    <CodeBlock 
                      code="npm install mad-ui-components"
                      language="bash"
                      filename="Terminal"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Styling not applied</h4>
                    <p className="text-muted-foreground mb-4">
                      Ensure Tailwind CSS is properly configured and imported.
                    </p>
                    <CodeBlock 
                      code={`@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";`}
                      language="css"
                      filename="globals.css"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">TypeScript errors</h4>
                    <p className="text-muted-foreground mb-4">
                      Make sure your tsconfig.json includes the components directory.
                    </p>
                    <CodeBlock 
                      code={`{
  "include": ["src/**/*", "components/**/*"]
}`}
                      language="json"
                      filename="tsconfig.json"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Next Steps */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Next Steps</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Continue your journey with Mad UI
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-2 border-border/50 shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <Package className="h-5 w-5 text-white" />
                    </div>
                    Explore Components
                  </CardTitle>
                  <CardDescription className="text-base">
                    Browse our complete collection of components with examples and variants.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg">
                    <Link href="/docs/components" className="flex items-center gap-2">
                      View Components
                      <Package className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-border/50 shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    Get Started
                  </CardTitle>
                  <CardDescription className="text-base">
                    Learn the basics and start building with our components.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-2 hover:bg-primary hover:text-primary-foreground">
                    <Link href="/docs/getting-started" className="flex items-center gap-2">
                      Getting Started
                      <Zap className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
