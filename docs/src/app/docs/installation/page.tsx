"use client"

import React, { useState } from "react"
import Link from "next/link"
import { 
  Copy, 
  Check, 
  ArrowRight, 
  ExternalLink 
} from "lucide-react"

export default function InstallationPage() {
  const [activePkgManager, setActivePkgManager] = useState<"npm" | "pnpm" | "yarn" | "bun">("npm")
  const [activeFramework, setActiveFramework] = useState<"nextjs" | "vite" | "manual" | "cli">("nextjs")
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  const pkgCommands = {
    npm: "npm install mad-ui-components lucide-react clsx tailwind-merge",
    pnpm: "pnpm add mad-ui-components lucide-react clsx tailwind-merge",
    yarn: "yarn add mad-ui-components lucide-react clsx tailwind-merge",
    bun: "bun add mad-ui-components lucide-react clsx tailwind-merge"
  }

  const CodeSnippet = ({ code, language = "bash", filename, copyKey }: { 
    code: string
    language?: string
    filename?: string
    copyKey?: string 
  }) => {
    const key = copyKey || code
    const isCopied = copiedKey === key

    return (
      <div className="relative group rounded-lg border border-border/60 bg-zinc-950 dark:bg-zinc-950 overflow-hidden text-xs">
        {filename && (
          <div className="flex items-center justify-between px-3.5 py-2 border-b border-border/40 bg-zinc-900/60 text-zinc-400">
            <span className="font-mono text-[11px]">{filename}</span>
            <span className="text-[10px] uppercase font-mono tracking-wider opacity-60">{language}</span>
          </div>
        )}
        <div className="p-4 overflow-x-auto font-mono text-zinc-100 leading-relaxed">
          <pre><code>{code}</code></pre>
        </div>
        <button
          onClick={() => copyText(code, key)}
          className="absolute top-2.5 right-2.5 p-1.5 rounded-md bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 border border-zinc-700/50 opacity-0 group-hover:opacity-100 transition-opacity"
          title="Copy snippet"
        >
          {isCopied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-12 max-w-4xl">
      {/* Page Header */}
      <div className="border-b border-border/40 pb-8">
        <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
          <span>Documentation</span>
          <span>•</span>
          <span>Setup Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Installation &amp; Setup
        </h1>
        <p className="mt-2 text-base text-muted-foreground leading-relaxed max-w-2xl">
          Quickly install and integrate Mad UI into your project with Next.js, Vite, or standard React setups.
        </p>

        <div className="flex flex-wrap items-center gap-3 mt-4 text-xs">
          <a 
            href="https://www.npmjs.com/package/mad-ui-components" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border/60 bg-muted/30 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="font-bold text-red-500">npm</span>
            <span>mad-ui-components</span>
            <ExternalLink className="h-3 w-3 opacity-60" />
          </a>
          <a 
            href="https://github.com/Saswat0602/mad-ui" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border/60 bg-muted/30 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>GitHub Repository</span>
            <ExternalLink className="h-3 w-3 opacity-60" />
          </a>
        </div>
      </div>

      {/* Package Manager Quick Install */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-foreground">1. Install Package</h2>
          <p className="text-xs text-muted-foreground">Select your package manager to copy the install command.</p>
        </div>

        {/* Package Manager Selector */}
        <div className="flex items-center space-x-1 border-b border-border/40 pb-2">
          {(["npm", "pnpm", "yarn", "bun"] as const).map((pm) => (
            <button
              key={pm}
              onClick={() => setActivePkgManager(pm)}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-md transition-colors ${
                activePkgManager === pm
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {pm}
            </button>
          ))}
        </div>

        <CodeSnippet 
          code={pkgCommands[activePkgManager]} 
          language="bash" 
          copyKey={`pkg-${activePkgManager}`} 
        />
      </section>

      {/* Framework Integration Section */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-foreground">2. Framework Setup Guide</h2>
          <p className="text-xs text-muted-foreground">Step-by-step instructions for your specific framework environment.</p>
        </div>

        {/* Framework Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-border/40 pb-2">
          {[
            { id: "nextjs", label: "Next.js (App Router)" },
            { id: "vite", label: "Vite (React + TS)" },
            { id: "manual", label: "React Manual / CRA" },
            { id: "cli", label: "CLI Copy (shadcn style)" },
          ].map((fw) => (
            <button
              key={fw.id}
              onClick={() => setActiveFramework(fw.id as typeof activeFramework)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeFramework === fw.id
                  ? "bg-foreground text-background font-semibold"
                  : "bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted/70"
              }`}
            >
              {fw.label}
            </button>
          ))}
        </div>

        {/* Next.js Setup */}
        {activeFramework === "nextjs" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">1</span>
                Create Next.js Project (if starting new)
              </h3>
              <CodeSnippet 
                code="npx create-next-app@latest my-app --typescript --tailwind --eslint --app"
                language="bash"
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">2</span>
                Install Mad UI &amp; Peer Dependencies
              </h3>
              <CodeSnippet 
                code="npm install mad-ui-components lucide-react clsx tailwind-merge"
                language="bash"
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">3</span>
                Configure Tailwind Content Path
              </h3>
              <p className="text-xs text-muted-foreground">
                Ensure Tailwind scans Mad UI component classes in <code className="text-foreground">tailwind.config.js</code> or <code className="text-foreground">tailwind.config.ts</code>:
              </p>
              <CodeSnippet 
                filename="tailwind.config.js"
                language="javascript"
                code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/mad-ui-components/dist/**/*.{mjs,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">4</span>
                Import and Use in Client or Server Components
              </h3>
              <p className="text-xs text-muted-foreground">
                Interactive components (Drawer, Modal, Dropdown, Tabs) use React hooks and should be rendered in client components:
              </p>
              <CodeSnippet 
                filename="app/page.tsx"
                language="tsx"
                code={`'use client'

import { Button, Card, Input } from 'mad-ui-components'

export default function Home() {
  return (
    <main className="p-8 max-w-md mx-auto space-y-4">
      <Card className="p-6 space-y-4">
        <h1 className="text-xl font-bold">Welcome to Mad UI</h1>
        <Input placeholder="Enter your email" />
        <Button className="w-full">Get Started</Button>
      </Card>
    </main>
  )
}`}
              />
            </div>
          </div>
        )}

        {/* Vite Setup */}
        {activeFramework === "vite" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">1</span>
                Create Vite React + TypeScript App
              </h3>
              <CodeSnippet 
                code="npm create vite@latest my-app -- --template react-ts"
                language="bash"
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">2</span>
                Install Tailwind CSS &amp; Mad UI
              </h3>
              <CodeSnippet 
                code="npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p\nnpm install mad-ui-components lucide-react clsx tailwind-merge"
                language="bash"
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">3</span>
                Update tailwind.config.js
              </h3>
              <CodeSnippet 
                filename="tailwind.config.js"
                language="javascript"
                code={`/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/mad-ui-components/dist/**/*.{mjs,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">4</span>
                Use in App.tsx
              </h3>
              <CodeSnippet 
                filename="src/App.tsx"
                language="tsx"
                code={`import { Button, Card, Badge } from 'mad-ui-components'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="p-6 space-y-4 max-w-sm">
        <Badge variant="secondary">Vite + React</Badge>
        <h2 className="text-lg font-bold">Fast &amp; Modern UI</h2>
        <Button variant="default">Click Me</Button>
      </Card>
    </div>
  )
}

export default App`}
              />
            </div>
          </div>
        )}

        {/* Manual Setup */}
        {activeFramework === "manual" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">Peer Dependencies</h3>
              <p className="text-xs text-muted-foreground">
                Mad UI requires React &gt;= 18.0.0 and Tailwind CSS 3 or 4.
              </p>
              <CodeSnippet 
                code="npm install react react-dom mad-ui-components lucide-react clsx tailwind-merge"
                language="bash"
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">Tailwind CSS Setup</h3>
              <p className="text-xs text-muted-foreground">
                In your primary CSS file (<code className="text-foreground">index.css</code> or <code className="text-foreground">App.css</code>):
              </p>
              <CodeSnippet 
                filename="src/index.css"
                language="css"
                code={`@tailwind base;
@tailwind components;
@tailwind utilities;`}
              />
            </div>
          </div>
        )}

        {/* CLI Tool Setup */}
        {activeFramework === "cli" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">Copy Component Code Directly (Zero Runtime Dependency)</h3>
              <p className="text-xs text-muted-foreground">
                You can copy individual component source files into your project directory using the CLI:
              </p>
              <CodeSnippet 
                code="npx mad-ui-components copy button card input"
                language="bash"
              />
              <p className="text-xs text-muted-foreground">
                This places the component files directly into your project under <code className="text-foreground">components/ui/</code> so you have 100% control over the source.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Import Methods Overview */}
      <section className="space-y-4 border-t border-border/40 pt-8">
        <h2 className="text-xl font-bold text-foreground">3. Import Methods</h2>
        <p className="text-xs text-muted-foreground">Mad UI provides 3 import levels for bundle size optimization.</p>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="p-4 rounded-lg border border-border/50 bg-card/40 space-y-2">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Level 1: Full</span>
            <p className="text-xs text-muted-foreground">Convenient single package import</p>
            <code className="block text-[11px] font-mono text-foreground bg-muted/60 p-2 rounded">
              import &#123; Button &#125; from &apos;mad-ui-components&apos;
            </code>
          </div>

          <div className="p-4 rounded-lg border border-border/50 bg-card/40 space-y-2">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Level 2: Category</span>
            <p className="text-xs text-muted-foreground">Grouped subpath module</p>
            <code className="block text-[11px] font-mono text-foreground bg-muted/60 p-2 rounded">
              import &#123; Button &#125; from &apos;mad-ui-components/core&apos;
            </code>
          </div>

          <div className="p-4 rounded-lg border border-border/50 bg-card/40 space-y-2">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Level 3: Component</span>
            <p className="text-xs text-muted-foreground">Maximum tree-shaking efficiency</p>
            <code className="block text-[11px] font-mono text-foreground bg-muted/60 p-2 rounded">
              import &#123; Button &#125; from &apos;mad-ui-components/button&apos;
            </code>
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <div className="border-t border-border/40 pt-6 flex items-center justify-between">
        <Link 
          href="/docs/getting-started"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          &larr; Getting Started Overview
        </Link>
        <Link 
          href="/docs/components"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
        >
          <span>Explore All 57+ Components</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  )
}
