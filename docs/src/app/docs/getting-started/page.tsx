"use client"

import React, { useState, useEffect } from 'react'
import { Button } from 'mad-ui-components/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'mad-ui-components/card'
import { Badge } from 'mad-ui-components/badge'
import { 
  Code, 
  Package, 
  Copy, 
  Zap, 
  ArrowRight, 
  Download, 
  Rocket, 
  CheckCircle,
  BookOpen,
  Sparkles,
  Terminal,
  PlayCircle,
  Layers,
  Settings,
  Check
} from "lucide-react"
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/components/prism-bash"
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-json"

interface CopyCodeBlockProps {
  code: string
  filename: string
  language?: string
}

const CopyCodeBlock: React.FC<CopyCodeBlockProps> = ({ code, filename, language = "bash" }) => {
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
              <Check className="h-4 w-4 text-green-400" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
        <div className="p-6">
          <pre className="text-sm font-mono text-slate-100 overflow-x-auto">
            <code className={`language-${language}`}>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}

interface StepCardProps {
  step: number
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
  gradient: string
}

const StepCard: React.FC<StepCardProps> = ({ step, icon: Icon, title, description, children, gradient }) => (
  <Card className="group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border-slate-200/50 dark:border-slate-800/50 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900/50 dark:to-slate-900/20">
    <CardHeader className="pb-6">
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-2xl ${gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <Badge variant="outline" className="px-3 py-1 text-xs font-semibold">
          Step {step}
        </Badge>
      </div>
      <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-200">
        {title}
      </CardTitle>
      <CardDescription className="text-base leading-relaxed">
        {description}
      </CardDescription>
    </CardHeader>
    <CardContent>
      {children}
    </CardContent>
  </Card>
)

interface PackageManagerTabProps {
  manager: string
  isActive: boolean
  onClick: () => void
}

const PackageManagerTab: React.FC<PackageManagerTabProps> = ({ manager, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
      isActive 
        ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25' 
        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
    }`}
  >
    {manager}
  </button>
)

export default function GettingStartedPage() {
  const [activeTab, setActiveTab] = useState('npm')
  
  const packageCommands: Record<string, string> = {
    npm: 'npm install mad-ui-components',
    yarn: 'yarn add mad-ui-components',
    pnpm: 'pnpm add mad-ui-components',
    bun: 'bun add mad-ui-components'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto max-w-6xl px-4 py-16 lg:py-24">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <Badge variant="outline" className="mb-6 px-6 py-3 text-sm font-semibold border-primary/20 bg-primary/5">
            <BookOpen className="w-4 h-4 mr-2" />
            Documentation
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
            Getting Started with
            <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
              Mad UI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed font-medium">
            Build beautiful interfaces in minutes. Install, import, and start creating with our comprehensive component library designed for modern web development.
          </p>
        </div>

        <div className="space-y-24">
          {/* Installation Section */}
          <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            <StepCard
              step={1}
              icon={Package}
              title="Installation"
              description="Choose your preferred package manager and get Mad UI components installed in your project instantly."
              gradient="bg-gradient-to-br from-blue-500 to-cyan-500"
            >
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
                  {Object.keys(packageCommands).map((manager) => (
                    <PackageManagerTab
                      key={manager}
                      manager={manager}
                      isActive={activeTab === manager}
                      onClick={() => setActiveTab(manager)}
                    />
                  ))}
                </div>
                
                <CopyCodeBlock 
                  code={packageCommands[activeTab]}
                  filename="Terminal"
                  language="bash"
                />
                
                <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span className="text-sm text-green-800 dark:text-green-300 font-medium">
                    Bundle size: ~50KB gzipped for complete library, tree-shakable components
                  </span>
                </div>
              </div>
            </StepCard>
          </section>

          {/* Usage Options */}
          <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-semibold border-primary/20 bg-primary/5">
                <Settings className="h-4 w-4 mr-2" />
                Step 2
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Usage Strategies</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Choose the approach that best fits your project architecture and development workflow.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="group hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 border-slate-200/50 dark:border-slate-800/50 bg-gradient-to-br from-white to-purple-50/20 dark:from-slate-900/50 dark:to-purple-950/10">
                <CardHeader className="pb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                    <Code className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-purple-600 transition-colors">
                    Individual Import
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Import only the components you need for optimal bundle sizes and automatic tree-shaking.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CopyCodeBlock 
                    code={`import { Button } from 'mad-ui-components/button'
import { Input } from 'mad-ui-components/input'
import { Card } from 'mad-ui-components/card'

export function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter text..." />
      <Button>Submit</Button>
    </Card>
  )
}`}
                    filename="components.tsx"
                    language="jsx"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span className="text-green-800 dark:text-green-300 font-medium">Tree-shakable</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <Zap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-blue-800 dark:text-blue-300 font-medium">2-5KB per component</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 border-slate-200/50 dark:border-slate-800/50 bg-gradient-to-br from-white to-emerald-50/20 dark:from-slate-900/50 dark:to-emerald-950/10">
                <CardHeader className="pb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/25">
                    <Layers className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-emerald-600 transition-colors">
                    Copy Components
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Copy components directly into your project for complete customization and control.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CopyCodeBlock 
                    code={`npx mad-ui-components copy button input card

# Components will be created at:
# components/ui/mad-ui/button.tsx
# components/ui/mad-ui/input.tsx  
# components/ui/mad-ui/card.tsx

# Then import locally:
import { Button } from '@/components/ui/mad-ui/button'`}
                    filename="Terminal"
                    language="bash"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-800 dark:text-emerald-300 font-medium">Full control</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <Rocket className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                      <span className="text-purple-800 dark:text-purple-300 font-medium">Zero runtime</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Quick Start */}
          <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
            <StepCard
              step={3}
              icon={PlayCircle}
              title="Quick Start Example"
              description="Get up and running with your first Mad UI component in under 60 seconds. Follow this simple example to see it in action."
              gradient="bg-gradient-to-br from-orange-500 to-red-500"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-4 text-lg flex items-center gap-2">
                      <Terminal className="h-5 w-5 text-primary" />
                      Complete Example
                    </h4>
                    <CopyCodeBlock 
                      code={`import { Button } from 'mad-ui-components/button'
import { Card, CardContent, CardHeader, CardTitle } from 'mad-ui-components/card'
import { Input } from 'mad-ui-components/input'

export default function App() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Mad UI</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Enter your name..." />
          <Button className="w-full" variant="default">
            Get Started
          </Button>
        </CardContent>
      </Card>
  )
}`}
                      filename="app.tsx"
                      language="jsx"
                    />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Live Preview
                  </h4>
                  <div className="p-8 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50">
                    <Card className="max-w-sm mx-auto shadow-lg">
                      <CardHeader>
                        <CardTitle>Welcome to Mad UI</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <input 
                          placeholder="Enter your name..." 
                          className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                        />
                        <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg">
                          Get Started
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="text-center">
                    <Badge variant="outline" className="px-4 py-2 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600 dark:text-green-400" />
                      <span className="text-green-800 dark:text-green-300 font-medium">
                        🎉 Your first Mad UI component is ready!
                      </span>
                    </Badge>
                  </div>
                </div>
              </div>
            </StepCard>
          </section>

          {/* Next Steps */}
          <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-800">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-semibold border-primary/20 bg-primary/5">
                <Sparkles className="h-4 w-4 mr-2" />
                What&apos;s Next?
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Continue Your Journey</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Explore our comprehensive component library and master advanced techniques to build exceptional user interfaces.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {([
                {
                  icon: Package,
                  title: "Explore Components",
                  description: "Browse our complete collection of 50+ production-ready components with live examples and comprehensive documentation.",
                  gradient: "bg-gradient-to-br from-blue-500 to-purple-500",
                  buttonText: "View All Components",
                  buttonVariant: "primary" as const
                },
                {
                  icon: Download,
                  title: "Advanced Setup",
                  description: "Learn advanced installation techniques, theming, customization, and project configuration best practices.",
                  gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
                  buttonText: "Installation Guide",
                  buttonVariant: "outline" as const
                },
                {
                  icon: Code,
                  title: "Live Examples",
                  description: "Explore real-world examples, templates, and learn advanced patterns from our comprehensive showcase.",
                  gradient: "bg-gradient-to-br from-orange-500 to-red-500",
                  buttonText: "View Examples",
                  buttonVariant: "ghost" as const
                }
              ] as const).map((item, index) => (
                <Card key={index} className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-slate-200/50 dark:border-slate-800/50 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900/50 dark:to-slate-900/20">
                  <CardHeader className="pb-6">
                    <div className={`w-14 h-14 rounded-2xl ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant={item.buttonVariant} 
                      className={`w-full group/btn transition-all duration-300 ${
                        item.buttonVariant === 'primary' 
                          ? 'bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg' 
                          : item.buttonVariant === 'outline'
                          ? 'border-2 hover:bg-primary hover:text-primary-foreground'
                          : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className="flex items-center">
                        {item.buttonText}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}