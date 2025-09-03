"use client"

import React, { useState } from 'react'
import { Button } from 'mad-ui-components/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'mad-ui-components/card'
import { Badge } from 'mad-ui-components/badge'
import { Tabs } from 'mad-ui-components/tabs'
import { 
  Copy, 
  Check, 
  Code, 
  Play,
  Download,
  Settings,
  BookOpen,
  Zap,
  ArrowRight,
  Package
} from 'lucide-react'

interface ComponentDocLayoutProps {
  name: string
  description: string
  category: string
  bundleSize?: string
  variants?: number
  complexity: 'Simple' | 'Intermediate' | 'Advanced'
  children: React.ReactNode
}

interface CopyCodeBlockProps {
  code: string
  filename: string
  language?: string
}

export const CopyCodeBlock: React.FC<CopyCodeBlockProps> = ({ code, filename, language = 'tsx' }) => {
  const [copied, setCopied] = useState(false)
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  return (
    <div className="relative group">
      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900/50">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="h-4 w-px bg-slate-700 mx-2"></div>
            <span className="text-sm text-slate-400 font-medium">{filename}</span>
            <Badge variant="outline" className="text-xs px-2 py-0.5 bg-slate-800 border-slate-700 text-slate-300">
              {language}
            </Badge>
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
        <div className="p-4">
          <pre className="text-sm font-mono text-slate-100 overflow-x-auto whitespace-pre-wrap">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export const LivePreview: React.FC<{ children: React.ReactNode; title: string }> = ({ children, title }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-2">
      <Play className="h-4 w-4 text-emerald-500" />
      <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">{title}</span>
    </div>
    <div className="p-8 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50">
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {children}
      </div>
    </div>
  </div>
)

export const ComponentDocLayout: React.FC<ComponentDocLayoutProps> = ({
  name,
  description,
  category,
  bundleSize,
  variants,
  complexity,
  children
}) => {
  const complexityColors = {
    Simple: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    Intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    Advanced: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
  }

  const installationCode = `npm install mad-ui-components`
  const importCode = `import { ${name} } from 'mad-ui-components/${name.toLowerCase()}'`

  const tabItems = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="space-y-8">
          {/* Installation */}
          <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-primary" />
                  Installation
                </CardTitle>
                <CardDescription>
                  Get started with the {name} component in your project.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <CopyCodeBlock
                  filename="Terminal"
                  language="bash"
                  code={installationCode}
                />
                <CopyCodeBlock
                  filename="component.tsx"
                  code={importCode}
                />
              </CardContent>
            </Card>
          </section>

          {/* Basic Usage */}
          <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Basic Usage
                </CardTitle>
                <CardDescription>
                  Simple {name.toLowerCase()} implementations and common patterns.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {children}
              </CardContent>
            </Card>
          </section>
        </div>
      )
    },
    {
      id: 'examples',
      label: 'Examples',
      content: (
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>More Examples</CardTitle>
              <CardDescription>
                Advanced usage patterns and real-world examples.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">More examples coming soon...</p>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: 'api',
      label: 'API Reference',
      content: (
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>API Reference</CardTitle>
              <CardDescription>
                Complete list of props and their descriptions for the {name} component.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">API documentation coming soon...</p>
            </CardContent>
          </Card>
        </div>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto max-w-6xl px-4 py-16 lg:py-24">
        {/* Header */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
              <Code className="h-6 w-6 text-white" />
            </div>
            <div>
              <Badge variant="outline" className="mb-2 px-3 py-1 text-xs font-semibold border-primary/20 bg-primary/5">
                {category}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                {name}
              </h1>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed font-medium">
            {description}
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: 'Bundle Size', value: bundleSize || 'N/A', color: 'text-green-600 dark:text-green-400' },
              { label: 'Variants', value: variants?.toString() || 'N/A', color: 'text-blue-600 dark:text-blue-400' },
              { label: 'Complexity', value: complexity, color: 'text-purple-600 dark:text-purple-400' },
              { label: 'TypeScript', value: '100%', color: 'text-orange-600 dark:text-orange-400' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-card rounded-xl border border-border/50">
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <Tabs items={tabItems} defaultActiveTab="overview" className="space-y-8" />

        {/* Navigation */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-border">
          <Button variant="outline" size="lg">
            <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
            Previous Component
          </Button>
          <Button size="lg">
            Next Component
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
