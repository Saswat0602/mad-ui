"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  Button, 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription,
  Input, 
  Badge, 
  Switch, 
  Progress, 
  Slider 
} from 'mad-ui-components'
import { 
  ArrowRight, 
  Copy, 
  Check, 
  ShieldCheck, 
  Layers, 
  Cpu
} from 'lucide-react'
import { GithubIcon } from '@/components/GithubIcon'

export default function HomePage() {
  const [activePm, setActivePm] = useState<'npm' | 'pnpm' | 'yarn' | 'bun'>('npm')
  const [copiedKey, setCopiedKey] = useState<string | null>(null)
  const [switchChecked, setSwitchChecked] = useState(true)
  const [sliderValue, setSliderValue] = useState(65)
  const [activeFw, setActiveFw] = useState<'nextjs' | 'vite' | 'manual'>('nextjs')

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  const installCommands = {
    npm: 'npm install mad-ui-components',
    pnpm: 'pnpm add mad-ui-components',
    yarn: 'yarn add mad-ui-components',
    bun: 'bun add mad-ui-components',
  }

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
        {/* Release Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 bg-muted/30 text-xs font-medium text-muted-foreground hover:border-primary/40 transition-colors">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-foreground">Mad UI v2.15</span>
          <span className="text-muted-foreground/60">•</span>
          <span>57+ Production Components</span>
          <ArrowRight className="h-3 w-3 text-primary ml-0.5" />
        </div>

        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            The Modern React Component Library.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Accessible, themeable, and precision-engineered React components built with TypeScript and Tailwind CSS.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link href="/docs/components">
            <Button size="lg" className="px-6 font-semibold shadow-md">
              <span>Explore Components</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
          <Link href="/docs/installation">
            <Button variant="outline" size="lg" className="px-6 font-medium">
              <span>Installation Guide</span>
            </Button>
          </Link>
          <a 
            href="https://github.com/Saswat0602/mad-ui" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 px-4 rounded-md border border-border/60 bg-background hover:bg-muted text-sm font-medium transition-colors"
          >
            <GithubIcon className="h-4 w-4 mr-2" />
            <span>Star on GitHub</span>
          </a>
        </div>

        {/* Quick Install Bar */}
        <div className="max-w-md mx-auto pt-4">
          <div className="rounded-lg border border-border/60 bg-zinc-950 p-2 flex items-center justify-between text-xs font-mono shadow-xl">
            <div className="flex items-center space-x-1 pl-1">
              {(['npm', 'pnpm', 'yarn', 'bun'] as const).map((pm) => (
                <button
                  key={pm}
                  onClick={() => setActivePm(pm)}
                  className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
                    activePm === pm
                      ? 'bg-zinc-800 text-zinc-100 font-bold'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {pm}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 pr-1">
              <span className="text-zinc-300 hidden sm:inline">{installCommands[activePm]}</span>
              <button
                onClick={() => copyToClipboard(installCommands[activePm], 'hero-install')}
                className="p-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
                title="Copy install command"
              >
                {copiedKey === 'hero-install' ? (
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-border/30 max-w-4xl mx-auto">
          <div className="p-3 space-y-0.5">
            <div className="text-2xl font-bold tracking-tight text-foreground">57+</div>
            <div className="text-xs text-muted-foreground">Components &amp; Modules</div>
          </div>
          <div className="p-3 space-y-0.5">
            <div className="text-2xl font-bold tracking-tight text-foreground">100%</div>
            <div className="text-xs text-muted-foreground">TypeScript First</div>
          </div>
          <div className="p-3 space-y-0.5">
            <div className="text-2xl font-bold tracking-tight text-foreground">18 &amp; 19</div>
            <div className="text-xs text-muted-foreground">React Version Support</div>
          </div>
          <div className="p-3 space-y-0.5">
            <div className="text-2xl font-bold tracking-tight text-foreground">0 Config</div>
            <div className="text-xs text-muted-foreground">Tailwind CSS Ready</div>
          </div>
        </div>
      </section>

      {/* Live Interactive Showcase Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Crafted for Enterprise Applications
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Every component is built with semantic design tokens, clean hover effects, and built-in accessibility.
          </p>
        </div>

        {/* Live Interactive Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1: Buttons & Badges */}
          <Card className="border border-border/60 bg-card/60 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-semibold">Actions &amp; Variants</CardTitle>
                <Badge variant="outline" className="text-[10px]">Button</Badge>
              </div>
              <CardDescription className="text-xs">Multiple semantic states and styles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-2">
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Primary</Button>
                <Button variant="secondary" size="sm">Secondary</Button>
                <Button variant="outline" size="sm">Outline</Button>
                <Button variant="destructive" size="sm">Destructive</Button>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="default">Stable</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="outline">Tailwind v4</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Card 2: Interactive Controls */}
          <Card className="border border-border/60 bg-card/60 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-semibold">Form Controls</CardTitle>
                <Badge variant="outline" className="text-[10px]">Slider &amp; Switch</Badge>
              </div>
              <CardDescription className="text-xs">Precision sliders, inputs, and toggles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-2">
              <Input placeholder="Enter username..." />
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-muted-foreground font-mono">
                  <span>Threshold</span>
                  <span>{sliderValue}%</span>
                </div>
                <Slider 
                  value={sliderValue} 
                  onChange={(val) => setSliderValue(Array.isArray(val) ? val[0] : val)}
                  max={100}
                />
              </div>
              <div className="flex items-center justify-between pt-1 text-xs">
                <span className="text-muted-foreground">Dark theme enabled</span>
                <Switch 
                  checked={switchChecked} 
                  onChange={(e) => setSwitchChecked(e.target.checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Card 3: Feedback & Progress */}
          <Card className="border border-border/60 bg-card/60 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-semibold">Progress &amp; Feedback</CardTitle>
                <Badge variant="outline" className="text-[10px]">Feedback</Badge>
              </div>
              <CardDescription className="text-xs">Live status bars and loading indicators</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-2">
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Upload Progress</span>
                  <span className="font-mono">75%</span>
                </div>
                <Progress value={75} />
              </div>

              <div className="p-3 rounded-md bg-muted/30 border border-border/40 text-xs text-muted-foreground space-y-1">
                <span className="font-semibold text-foreground block">Zero Runtime Overhead</span>
                <span>Direct tree-shaking support for minimal bundle footprint.</span>
              </div>

              <Link href="/docs/components" className="block pt-1">
                <Button variant="outline" size="sm" className="w-full text-xs">
                  View all 57+ components &rarr;
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Framework Integration Showcase */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-6">
        <div className="border-t border-border/40 pt-12 space-y-2 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Integrates with Any Modern Stack
          </h2>
          <p className="text-sm text-muted-foreground">
            Choose your framework and start building with Mad UI in under 2 minutes.
          </p>
        </div>

        {/* Framework Selector */}
        <div className="flex justify-center gap-2">
          {[
            { id: 'nextjs', label: 'Next.js App Router' },
            { id: 'vite', label: 'Vite (React + TS)' },
            { id: 'manual', label: 'CRA / Remix / Manual' }
          ].map((fw) => (
            <button
              key={fw.id}
              onClick={() => setActiveFw(fw.id as typeof activeFw)}
              className={`px-4 py-2 rounded-md text-xs font-medium transition-colors ${
                activeFw === fw.id
                  ? 'bg-foreground text-background font-semibold'
                  : 'bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {fw.label}
            </button>
          ))}
        </div>

        {/* Framework Code Box */}
        <div className="rounded-lg border border-border/60 bg-zinc-950 overflow-hidden text-xs max-w-3xl mx-auto shadow-2xl">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-800 bg-zinc-900/60 text-zinc-400">
            <span className="font-mono text-[11px]">
              {activeFw === 'nextjs' ? 'app/page.tsx' : activeFw === 'vite' ? 'src/App.tsx' : 'src/index.tsx'}
            </span>
            <span className="text-[10px] text-zinc-500 uppercase font-mono">React 18 &amp; 19</span>
          </div>
          <pre className="p-5 font-mono text-zinc-100 overflow-x-auto leading-relaxed">
            <code>
              {activeFw === 'nextjs' && `'use client'

import { Button, Card, Input } from 'mad-ui-components'

export default function Home() {
  return (
    <main className="min-h-screen p-8 flex items-center justify-center">
      <Card className="p-6 max-w-md w-full space-y-4">
        <h1 className="text-xl font-bold">Welcome to Next.js + Mad UI</h1>
        <Input placeholder="Enter your email" />
        <Button className="w-full">Get Started</Button>
      </Card>
    </main>
  )
}`}
              {activeFw === 'vite' && `import { Button, Card, Badge } from 'mad-ui-components'

function App() {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <Card className="p-6 max-w-md w-full space-y-4">
        <Badge variant="secondary">Vite + React</Badge>
        <h1 className="text-xl font-bold">Superfast UI with Vite</h1>
        <Button variant="default">Click Me</Button>
      </Card>
    </div>
  )
}

export default App`}
              {activeFw === 'manual' && `import React from 'react'
import { Button, Card } from 'mad-ui-components'

export function App() {
  return (
    <Card className="p-6">
      <Button variant="default">Mad UI Ready</Button>
    </Card>
  )
}`}
            </code>
          </pre>
        </div>
      </section>

      {/* Architectural Features Bento Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-6">
        <div className="border-t border-border/40 pt-12 space-y-2 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Engineered for High-Scale Applications
          </h2>
          <p className="text-sm text-muted-foreground">
            Clean code architecture designed by engineers who care about bundle size and developer experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-lg border border-border/50 bg-card/40 space-y-2">
            <div className="w-8 h-8 rounded-md bg-primary/10 text-primary flex items-center justify-center">
              <Layers className="h-4 w-4" />
            </div>
            <h3 className="font-semibold text-sm text-foreground">3-Tier Import System</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Import from full package, category bundle (<code className="text-foreground">/core</code>, <code className="text-foreground">/forms</code>), or single components (<code className="text-foreground">/button</code>).
            </p>
          </div>

          <div className="p-5 rounded-lg border border-border/50 bg-card/40 space-y-2">
            <div className="w-8 h-8 rounded-md bg-primary/10 text-primary flex items-center justify-center">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <h3 className="font-semibold text-sm text-foreground">Universal React Support</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Strictly typed with peer dependency support across React 18 and React 19 without type friction.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-border/50 bg-card/40 space-y-2">
            <div className="w-8 h-8 rounded-md bg-primary/10 text-primary flex items-center justify-center">
              <Cpu className="h-4 w-4" />
            </div>
            <h3 className="font-semibold text-sm text-foreground">Minimal Dependencies</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Only standard utilities: <code className="text-foreground">clsx</code>, <code className="text-foreground">tailwind-merge</code>, and <code className="text-foreground">lucide-react</code>. No heavy runtime baggage.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center space-y-6">
        <div className="p-8 sm:p-12 rounded-xl border border-border/60 bg-gradient-to-b from-card/80 to-muted/20 space-y-4 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Start Building with Mad UI Today
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Discover all 57+ components with comprehensive interactive previews, props tables, and code snippets.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link href="/docs/components">
              <Button size="lg" className="px-6 font-semibold">
                Explore Component Library &rarr;
              </Button>
            </Link>
            <Link href="/docs/installation">
              <Button variant="outline" size="lg" className="px-6">
                Read Setup Guide
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}