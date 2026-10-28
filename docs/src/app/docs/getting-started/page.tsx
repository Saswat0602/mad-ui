"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  Check, 
  Copy, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react'

export default function GettingStartedPage() {
  const [activeTab, setActiveTab] = useState<'npm' | 'pnpm' | 'yarn' | 'bun'>('npm')
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  const copyCode = (text: string, key: string) => {
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
    <div className="space-y-12 w-full">
      {/* Header */}
      <div className="border-b border-border/40 pb-8">
        <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
          <span>Documentation</span>
          <span>•</span>
          <span>Overview</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Getting Started with Mad UI
        </h1>
        <p className="mt-2 text-base text-muted-foreground leading-relaxed max-w-3xl">
          Mad UI is an enterprise-grade React component library built with TypeScript and Tailwind CSS.
          It gives you accessible, themeable, high-performance UI primitives ready for production.
        </p>

        <div className="flex items-center gap-4 mt-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Check className="h-4 w-4 text-emerald-500" />
            <span>57+ Components</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="h-4 w-4 text-emerald-500" />
            <span>React 18 &amp; 19 Ready</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="h-4 w-4 text-emerald-500" />
            <span>TypeScript First</span>
          </div>
        </div>
      </div>

      {/* Step 1: Install */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
            1
          </div>
          <h2 className="text-lg font-bold text-foreground">Install the Package</h2>
        </div>

        <p className="text-xs text-muted-foreground">
          Install <code className="text-foreground font-mono">mad-ui-components</code> into your project (dependencies like <code className="font-mono text-foreground">clsx</code>, <code className="font-mono text-foreground">tailwind-merge</code>, and <code className="font-mono text-foreground">lucide-react</code> are bundled automatically):
        </p>

        <div className="rounded-lg border border-border/60 bg-zinc-950 overflow-hidden text-xs">
          <div className="flex items-center justify-between px-3.5 py-2 border-b border-border/40 bg-zinc-900/60 text-zinc-400">
            <div className="flex items-center space-x-1">
              {(['npm', 'pnpm', 'yarn', 'bun'] as const).map((pm) => (
                <button
                  key={pm}
                  onClick={() => setActiveTab(pm)}
                  className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                    activeTab === pm
                      ? 'bg-zinc-800 text-zinc-100 font-semibold'
                      : 'hover:text-zinc-200'
                  }`}
                >
                  {pm}
                </button>
              ))}
            </div>
            <button
              onClick={() => copyCode(installCommands[activeTab], 'install')}
              className="flex items-center gap-1 text-[11px] hover:text-zinc-200 transition-colors"
            >
              {copiedKey === 'install' ? (
                <>
                  <Check className="h-3 w-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <div className="p-4 font-mono text-zinc-100">
            <code>{installCommands[activeTab]}</code>
          </div>
        </div>
      </section>

      {/* Step 2: Configure Tailwind */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
            2
          </div>
          <h2 className="text-lg font-bold text-foreground">Configure Tailwind CSS</h2>
        </div>

        <p className="text-xs text-muted-foreground">
          Add the Mad UI build path to your <code className="text-foreground font-mono">tailwind.config.js</code> so Tailwind compiles component styles:
        </p>

        <div className="rounded-lg border border-border/60 bg-zinc-950 overflow-hidden text-xs">
          <div className="flex items-center justify-between px-3.5 py-2 border-b border-border/40 bg-zinc-900/60 text-zinc-400">
            <span className="font-mono text-[11px]">tailwind.config.js</span>
            <button
              onClick={() => copyCode(`/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/mad-ui-components/dist/**/*.{mjs,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`, 'tailwind')}
              className="flex items-center gap-1 text-[11px] hover:text-zinc-200 transition-colors"
            >
              {copiedKey === 'tailwind' ? (
                <>
                  <Check className="h-3 w-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-4 font-mono text-zinc-100 overflow-x-auto leading-relaxed">
            <code>{`/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/mad-ui-components/dist/**/*.{mjs,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}</code>
          </pre>
        </div>
      </section>

      {/* Step 3: Usage */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
            3
          </div>
          <h2 className="text-lg font-bold text-foreground">Import &amp; Use Components</h2>
        </div>

        <p className="text-xs text-muted-foreground">
          Import components anywhere in your application:
        </p>

        <div className="rounded-lg border border-border/60 bg-zinc-950 overflow-hidden text-xs">
          <div className="flex items-center justify-between px-3.5 py-2 border-b border-border/40 bg-zinc-900/60 text-zinc-400">
            <span className="font-mono text-[11px]">MyComponent.tsx</span>
            <button
              onClick={() => copyCode(`import { Button, Card, Input } from 'mad-ui-components'

export function LoginCard() {
  return (
    <Card className="p-6 max-w-sm space-y-4">
      <h2 className="text-xl font-bold">Sign In</h2>
      <Input placeholder="name@example.com" type="email" />
      <Button className="w-full">Continue</Button>
    </Card>
  )
}`, 'usage')}
              className="flex items-center gap-1 text-[11px] hover:text-zinc-200 transition-colors"
            >
              {copiedKey === 'usage' ? (
                <>
                  <Check className="h-3 w-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-4 font-mono text-zinc-100 overflow-x-auto leading-relaxed">
            <code>{`import { Button, Card, Input } from 'mad-ui-components'

export function LoginCard() {
  return (
    <Card className="p-6 max-w-sm space-y-4">
      <h2 className="text-xl font-bold">Sign In</h2>
      <Input placeholder="name@example.com" type="email" />
      <Button className="w-full">Continue</Button>
    </Card>
  )
}`}</code>
          </pre>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="space-y-4 border-t border-border/40 pt-8">
        <h2 className="text-xl font-bold text-foreground">Why Mad UI?</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="p-4 rounded-lg border border-border/50 bg-card/40 space-y-1.5">
            <div className="flex items-center gap-2 text-primary font-semibold text-xs">
              <Zap className="h-4 w-4" />
              <span>Modular &amp; Tree-shakable</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Import from root or individual subpaths (<code className="text-foreground">/button</code>, <code className="text-foreground">/core</code>) for minimal bundle size.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-border/50 bg-card/40 space-y-1.5">
            <div className="flex items-center gap-2 text-primary font-semibold text-xs">
              <ShieldCheck className="h-4 w-4" />
              <span>Full Accessibility</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Keyboard navigation, focus rings, and ARIA roles pre-configured across all interactive elements.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-border/50 bg-card/40 space-y-1.5">
            <div className="flex items-center gap-2 text-primary font-semibold text-xs">
              <Sparkles className="h-4 w-4" />
              <span>Dark &amp; Light Theming</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Tailwind CSS CSS variables system with automatic dark-mode switching and theme tokens.
            </p>
          </div>
        </div>
      </section>

      {/* Next links */}
      <div className="border-t border-border/40 pt-6 flex items-center justify-between">
        <Link 
          href="/docs/installation"
          className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          View Framework Installation Guides &rarr;
        </Link>
        <Link 
          href="/docs/components"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
        >
          <span>Browse All Components</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  )
}