'use client'

import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ComponentCategory } from '@/types/component'
import { ComponentPreview } from './ComponentPreview'
import { PropsTable } from './PropsTable'
import { CodeBlock } from './CodeBlock'
import Link from 'next/link'
import { Copy, Check, Eye, Code2, Terminal, BookOpen, ExternalLink, Github } from 'lucide-react'
import { getComponentExamples } from '@/lib/component-examples'
import { getComponentProps } from '@/lib/component-props'
import { getComponentBySlug } from '@/lib/component-registry'
import { UsageGuide } from './UsageGuide'

interface ComponentDocumentationProps {
  slug: string
  component: {
    title: string
    description: string
    category: ComponentCategory
    version: string
    status: 'stable' | 'beta' | 'alpha' | 'deprecated'
    tags: readonly string[]
  }
}

export function ComponentDocumentation({ slug, component }: ComponentDocumentationProps) {
  const [activeTab, setActiveTab] = useState<'examples' | 'props' | 'usage' | 'guide'>('examples')
  const [copiedInstall, setCopiedInstall] = useState(false)
  const [copiedImport, setCopiedImport] = useState(false)

  // Get component examples and props based on slug
  const examples = getComponentExamples(slug)
  const props = getComponentProps(slug)

  const exportName = (component as any).exportName || component.title.replace(/\s+/g, '')
  const defaultImport = `import { ${exportName} } from 'mad-ui-components'`

  const handleCopyInstall = () => {
    navigator.clipboard.writeText('npm install mad-ui-components')
    setCopiedInstall(true)
    setTimeout(() => setCopiedInstall(false), 2000)
  }

  const handleCopyImport = () => {
    navigator.clipboard.writeText(defaultImport)
    setCopiedImport(true)
    setTimeout(() => setCopiedImport(false), 2000)
  }

  return (
    <div className="space-y-10 w-full">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-1.5 text-xs text-muted-foreground">
        <Link href="/docs/components" className="hover:text-foreground transition-colors">
          Components
        </Link>
        <span>/</span>
        <span>{component.category}</span>
        <span>/</span>
        <span className="text-foreground font-medium">{component.title}</span>
      </nav>

      {/* Component Title & Header */}
      <div className="space-y-4 border-b border-border/40 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              {component.title}
            </h1>
          </div>

          {/* Quick links to npm & GitHub */}
          <div className="flex items-center gap-2">
            <a
              href="https://www.npmjs.com/package/mad-ui-components"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md border border-border/50 bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              title="npm package"
            >
              <span className="font-bold text-red-500">npm</span>
              <span>mad-ui-components</span>
              <ExternalLink className="h-3 w-3 opacity-60" />
            </a>
            <a
              href="https://github.com/Saswat0602/mad-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md border border-border/50 bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              title="GitHub source"
            >
              <Github className="h-3.5 w-3.5" />
              <span>Source</span>
              <ExternalLink className="h-3 w-3 opacity-60" />
            </a>
          </div>
        </div>

        <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
          {component.description}
        </p>

        {/* Quick copy snippet strip */}
        <div className="flex flex-wrap gap-2 pt-2">
          <button
            onClick={handleCopyInstall}
            className="group flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-md bg-muted/40 hover:bg-muted border border-border/40 text-foreground transition-colors"
            title="Copy npm install command"
          >
            <span className="text-muted-foreground">$</span>
            <span>npm i mad-ui-components</span>
            {copiedInstall ? (
              <Check className="h-3.5 w-3.5 text-emerald-500 ml-1" />
            ) : (
              <Copy className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground ml-1" />
            )}
          </button>

          <button
            onClick={handleCopyImport}
            className="group flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-md bg-muted/40 hover:bg-muted border border-border/40 text-foreground transition-colors"
            title="Copy import statement"
          >
            <span className="text-muted-foreground">import</span>
            <span>&#123; {component.title} &#125;</span>
            <span className="text-muted-foreground">from &apos;mad-ui-components&apos;</span>
            {copiedImport ? (
              <Check className="h-3.5 w-3.5 text-emerald-500 ml-1" />
            ) : (
              <Copy className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground ml-1" />
            )}
          </button>
        </div>
      </div>

      {/* Sleek Segmented Navigation Tabs */}
      <div className="flex items-center overflow-x-auto pb-1 scrollbar-none">
        <div className="inline-flex items-center p-1 rounded-xl bg-muted/50 border border-border/40 text-xs sm:text-sm">
          {[
            { id: 'examples', label: 'Live Preview', icon: Eye },
            { id: 'props', label: 'API Reference', icon: Code2 },
            { id: 'usage', label: 'Installation & Import', icon: Terminal },
            { id: 'guide', label: 'Guidelines', icon: BookOpen }
          ].map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'examples' | 'props' | 'usage' | 'guide')}
                className={`flex items-center gap-2 py-2 px-3.5 rounded-lg font-medium text-xs sm:text-sm transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-background text-foreground shadow-xs font-semibold'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="pt-2">
        <AnimatePresence mode="wait">
          {activeTab === 'examples' && (
            <div key="examples" className="space-y-12">
              {examples.length > 0 ? (
                examples.map((example, index) => (
                  <section key={index} className="space-y-4 pt-4 first:pt-0">
                    <div className="flex flex-col gap-1 pb-1">
                      <h2 className="text-base sm:text-lg font-semibold tracking-tight text-foreground">
                        {example.title}
                      </h2>
                      {example.description && (
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {example.description}
                        </p>
                      )}
                    </div>
                    <ComponentPreview code={example.code}>
                      {example.preview}
                    </ComponentPreview>
                  </section>
                ))
              ) : (
                <div className="text-center py-12 border border-dashed border-border/50 rounded-lg">
                  <h3 className="text-sm font-semibold mb-1 text-foreground">Preview in development</h3>
                  <p className="text-xs text-muted-foreground">
                    Interactive examples for {component.title} are being compiled.
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'props' && (
            <div key="props" className="space-y-4">
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  Component Props
                </h3>
                <p className="text-xs text-muted-foreground">
                  TypeScript interfaces and prop specifications for {component.title}.
                </p>
              </div>
              <PropsTable props={props} />
            </div>
          )}

          {activeTab === 'usage' && (
            <div key="usage" className="space-y-8">
              {/* Installation */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-foreground">Package Installation</h3>
                <p className="text-xs text-muted-foreground">Add Mad UI components to your project via your preferred package manager.</p>
                
                <div className="relative">
                  <CodeBlock language="bash" code="npm install mad-ui-components" />
                </div>
              </div>
              
              {/* Import Options */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-foreground">Import Methods</h3>
                  <p className="text-xs text-muted-foreground">Mad UI supports full library imports, categorized module bundles, or direct individual component imports.</p>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-semibold text-foreground">1. Full Library Import (Recommended)</h4>
                    <CodeBlock 
                      language="tsx" 
                      code={`import { ${component.title} } from 'mad-ui-components'`} 
                    />
                  </div>
                  
                  {getIndividualImportCommand(slug) && (
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-semibold text-foreground">2. Individual Tree-shaking Import</h4>
                      <CodeBlock 
                        language="tsx" 
                        code={getIndividualImportCommand(slug)!} 
                      />
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <h4 className="text-xs font-semibold text-foreground">3. CLI Direct Source Copy (shadcn-style)</h4>
                    <CodeBlock 
                      language="bash" 
                      code={`npx mad-ui-components add ${slug}`} 
                    />
                  </div>
                </div>
              </div>
              
              {/* Basic Usage */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-foreground">Basic Code Example</h3>
                <CodeBlock 
                  language="tsx" 
                  code={examples[0]?.code || `import { ${component.title} } from 'mad-ui-components'\n\nexport default function Example() {\n  return <${component.title} />\n}`} 
                />
              </div>
            </div>
          )}

          {activeTab === 'guide' && (
            <div key="guide" className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-foreground">Design &amp; Accessibility Guidelines</h3>
                <p className="text-xs text-muted-foreground">
                  Best practices for using {component.title} in enterprise applications.
                </p>
              </div>
              
              {getBestPractices(slug).length > 0 || getCommonMistakes(slug).length > 0 || getTips(slug).length > 0 ? (
                <UsageGuide 
                  componentName={component.title}
                  bestPractices={getBestPractices(slug)}
                  commonMistakes={getCommonMistakes(slug)}
                  tips={getTips(slug)}
                  examples={getUsageExamples(slug)}
                />
              ) : (
                <div className="space-y-4 p-6 rounded-lg border border-border/40 bg-card/50 text-xs">
                  <h4 className="font-semibold text-foreground">Accessibility Checklist for {component.title}</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Supports standard keyboard navigation and tab ordering.</li>
                    <li>Complies with WCAG 2.1 AA contrast requirements in both light and dark modes.</li>
                    <li>Includes ARIA roles, states, and properties for screen reader accessibility.</li>
                    <li>Accepts standard HTML attributes and forwards ref to root element.</li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function getIndividualImportCommand(slug: string): string {
  const component = getComponentBySlug(slug)
  const componentName = (component as any)?.exportName || component?.title.replace(/\s+/g, '') || slug
  return `import { ${componentName} } from 'mad-ui-components/${slug}'`
}

function getBestPractices(slug: string): string[] {
  const practices: Record<string, string[]> = {
    button: [
      'Use clear, action-oriented labels that describe what the button does',
      'Provide loading states for async operations',
      'Use appropriate button variants (default for primary actions, secondary/outline for supporting actions)',
      'Ensure sufficient color contrast for accessibility',
      'Include proper ARIA labels for icon-only buttons'
    ],
    input: [
      'Always provide labels for form inputs',
      'Use appropriate input types (email, password, number, etc.)',
      'Provide clear error messages and validation feedback',
      'Use placeholder text sparingly as hints, not as labels',
      'Implement proper keyboard navigation and focus management'
    ],
    checkbox: [
      'Use checkboxes for multiple selections or binary choices',
      'Provide clear, descriptive labels',
      'Group related checkboxes logically',
      'Use indeterminate state for "select all" functionality',
      'Ensure proper spacing between checkboxes and labels'
    ],
    select: [
      'Provide a default placeholder option',
      'Group related options when there are many choices',
      'Use clear, descriptive option labels',
      'Consider using search/filter for long option lists',
      'Provide keyboard navigation support'
    ],
    slider: [
      'Use sliders for continuous value selection',
      'Provide clear min/max labels and current value display',
      'Use appropriate step sizes for the data type',
      'Consider using marks for important values',
      'Ensure the slider is accessible via keyboard'
    ]
  }
  return practices[slug] || []
}

function getCommonMistakes(slug: string): string[] {
  const mistakes: Record<string, string[]> = {
    button: [
      'Using vague labels like "Click here" or "Submit"',
      'Not providing loading states for async operations',
      'Using too many destructive buttons on the same page',
      'Making buttons too small to tap on mobile devices',
      'Not providing proper focus indicators'
    ],
    input: [
      'Using placeholder text as the only label',
      'Not providing validation feedback',
      'Using the wrong input type for the data',
      'Not handling empty states properly',
      'Making inputs too narrow for expected content'
    ],
    checkbox: [
      'Using checkboxes for single selections (use radio buttons instead)',
      'Not providing clear labels',
      'Using indeterminate state incorrectly',
      'Making checkboxes too small to interact with easily'
    ],
    select: [
      'Having too many options without grouping or search',
      'Not providing a default/placeholder option',
      'Making the dropdown too narrow for the content'
    ],
    slider: [
      'Not showing the current value clearly',
      'Using inappropriate step sizes',
      'Making the slider too small to interact with'
    ]
  }
  return mistakes[slug] || []
}

function getTips(slug: string): string[] {
  const tips: Record<string, string[]> = {
    button: [
      'Use icons to enhance button meaning and visual hierarchy',
      'Consider using different sizes for different contexts',
      'Implement proper hover and focus states',
      'Use disabled state appropriately to prevent invalid actions'
    ],
    input: [
      'Use input masks for formatted data like phone numbers',
      'Implement real-time validation for better UX',
      'Use input groups for related fields'
    ],
    checkbox: [
      'Use the indeterminate state for hierarchical selections',
      'Consider using checkbox groups for related options',
      'Ensure consistent spacing and alignment'
    ],
    select: [
      'Use search functionality for long option lists',
      'Consider using multi-select for multiple choices'
    ],
    slider: [
      'Use range sliders for selecting value ranges',
      'Implement proper touch support for mobile devices'
    ]
  }
  return tips[slug] || []
}

function getUsageExamples(slug: string) {
  const examples: Record<string, Array<{ title: string; description: string; code: string; good?: boolean }>> = {
    button: [
      {
        title: 'Good: Clear Action Label',
        description: 'Use descriptive labels that clearly indicate the action.',
        code: `<Button>Save Changes</Button>`,
        good: true
      },
      {
        title: 'Bad: Vague Label',
        description: 'Avoid vague labels that don\'t indicate the action.',
        code: `<Button>Click Here</Button>`,
        good: false
      }
    ],
    input: [
      {
        title: 'Good: Proper Labeling',
        description: 'Always provide clear labels for inputs.',
        code: `<Input \n  label="Email Address" \n  type="email" \n  placeholder="name@example.com" \n/>`,
        good: true
      }
    ]
  }
  return examples[slug] || []
}
