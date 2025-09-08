'use client'

import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ComponentCategory } from '@/types/component'
import { ComponentPreview } from './ComponentPreview'
import { PropsTable } from './PropsTable'
import { CodeBlock } from './CodeBlock'
import { StatusBadge } from './StatusBadge'
import { Badge } from 'mad-ui-components'
import { ArrowLeft, Copy } from 'lucide-react'
import Link from 'next/link'
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

  // Get component examples and props based on slug
  const examples = getComponentExamples(slug)
  const props = getComponentProps(slug)

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4 max-w-7xl">
          <Link 
            href="/docs/components" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Components
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-12 space-y-6">
          <div className="flex items-start justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  {component.title}
                </h1>
                <StatusBadge status={component.status} />
              </div>
              
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                {component.description}
              </p>
            </div>
            
            <div className="text-right space-y-2">
              <div className="text-sm text-muted-foreground">
                Version {component.version}
              </div>
              <div className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                {component.category}
              </div>
            </div>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {component.tags.map((tag) => (
              <Badge 
                key={tag}
                variant="secondary" 
                className="text-xs font-medium"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="border-b border-border">
            <nav className="flex space-x-8">
              {[
                { id: 'examples', label: 'Examples', icon: '🎨' },
                { id: 'props', label: 'API Reference', icon: '📝' },
                { id: 'usage', label: 'Usage', icon: '⚡' },
                { id: 'guide', label: 'Best Practices', icon: '💡' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'examples' | 'props' | 'usage' | 'guide')}
                  className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
                  }`}
                >
                  <span className="text-base">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <AnimatePresence mode="wait">
            {activeTab === 'examples' && (
              <div className="space-y-6">
                {examples.length > 0 ? (
                  examples.map((example, index) => (
                    <div key={index} className="space-y-3">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold">
                          {example.title}
                        </h3>
                        {example.description && (
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {example.description}
                          </p>
                        )}
                      </div>
                      <ComponentPreview
                        code={example.code}
                      >
                        {example.preview}
                      </ComponentPreview>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <div className="text-3xl mb-3">🎨</div>
                    <h3 className="text-lg font-semibold mb-2">No Examples Available</h3>
                    <p className="text-muted-foreground text-sm">
                      Examples for this component are coming soon.
                    </p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'props' && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    API Reference
                  </h3>
                  <p className="text-muted-foreground">
                    Complete reference for all props and their types.
                  </p>
                </div>
                <PropsTable props={props} />
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="space-y-6">
                {/* Installation */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Installation</h3>
                    <p className="text-sm text-muted-foreground">Choose your preferred installation method.</p>
                  </div>
                  
                  <div className="space-y-3">
                    {/* Individual Component Installation */}
                    {getIndividualInstallCommand(slug) && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Individual Component</h4>
                        <div className="relative">
                          <CodeBlock language="bash" code={getIndividualInstallCommand(slug)!} />
                          <button
                            onClick={() => navigator.clipboard.writeText(getIndividualInstallCommand(slug)!)}
                            className="absolute top-2 right-2 p-1.5 rounded-md bg-background/80 backdrop-blur-sm hover:bg-background border border-border/50 text-xs transition-all hover:scale-105"
                            title="Copy individual installation"
                          >
                            <Copy className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    )}
                    
                    {/* Full Package */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Full Package</h4>
                      <div className="relative">
                        <CodeBlock language="bash" code={`npm install mad-ui-components`} />
                        <button
                          onClick={() => navigator.clipboard.writeText('npm install mad-ui-components')}
                          className="absolute top-2 right-2 p-1.5 rounded-md bg-background/80 backdrop-blur-sm hover:bg-background border border-border/50 text-xs transition-all hover:scale-105"
                          title="Copy full installation"
                        >
                          <Copy className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Import */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Import</h3>
                    <p className="text-sm text-muted-foreground">Import the component in your React application.</p>
                  </div>
                  
                  <div className="space-y-3">
                    {/* Main Import */}
                    <div className="relative">
                      <CodeBlock 
                        language="tsx" 
                        code={`import { ${component.title} } from 'mad-ui-components'`} 
                      />
                      <button
                        onClick={() => navigator.clipboard.writeText(`import { ${component.title} } from 'mad-ui-components'`)}
                        className="absolute top-2 right-2 p-1.5 rounded-md bg-background/80 backdrop-blur-sm hover:bg-background border border-border/50 text-xs transition-all hover:scale-105"
                        title="Copy import statement"
                      >
                        <Copy className="w-3 h-3" />
                      </button>
                    </div>
                    
                    {/* Tree-shaking Import */}
                    {getIndividualImportCommand(slug) && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Tree-shaking Optimized</h4>
                        <div className="relative">
                          <CodeBlock 
                            language="tsx" 
                            code={getIndividualImportCommand(slug)!} 
                          />
                          <button
                            onClick={() => navigator.clipboard.writeText(getIndividualImportCommand(slug)!)}
                            className="absolute top-2 right-2 p-1.5 rounded-md bg-background/80 backdrop-blur-sm hover:bg-background border border-border/50 text-xs transition-all hover:scale-105"
                            title="Copy optimized import"
                          >
                            <Copy className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Basic Usage */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Basic Usage</h3>
                    <p className="text-sm text-muted-foreground">Here&apos;s a simple example to get you started.</p>
                  </div>
                  <div className="relative">
                    <CodeBlock 
                      language="tsx" 
                      code={examples[0]?.code || `// Basic usage example\n<${component.title} />`} 
                    />
                    <button
                      onClick={() => navigator.clipboard.writeText(examples[0]?.code || `// Basic usage example\n<${component.title} />`)}
                      className="absolute top-2 right-2 p-1.5 rounded-md bg-background/80 backdrop-blur-sm hover:bg-background border border-border/50 text-xs transition-all hover:scale-105"
                      title="Copy usage example"
                    >
                      <Copy className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'guide' && (
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Best Practices & Guidelines</h3>
                  <p className="text-muted-foreground">
                    Learn how to use {component.title} effectively with best practices, common mistakes to avoid, and accessibility guidelines.
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
                  <div className="text-center py-12">
                    <div className="text-4xl mb-4">💡</div>
                    <h3 className="text-lg font-semibold mb-2">Best Practices Coming Soon</h3>
                    <p className="text-muted-foreground">
                      Best practices and guidelines for this component are being prepared.
                    </p>
                  </div>
                )}
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

// Helper functions for installation and import commands
function getIndividualInstallCommand(slug: string): string | null {
  // Map component slugs to their package.json export names
  const componentMap: Record<string, string> = {
    button: 'button',
    input: 'input',
    label: 'label',
    card: 'card',
    checkbox: 'checkbox',
    radio: 'radio',
    select: 'select',
    switch: 'switch',
    progress: 'progress',
    slider: 'slider',
    rating: 'rating',
    textarea: 'textarea',
    accordion: 'accordion',
    breadcrumbs: 'breadcrumbs',
    calendar: 'calendar',
    datepicker: 'date-picker',
    timepicker: 'timepicker',
    inputotp: 'input-otp',
    radiogroup: 'radio-group',
    tabs: 'tabs',
    modal: 'modal',
    tooltip: 'tooltip',
    drawer: 'drawer',
    popover: 'popover',
    navbar: 'navbar',
    sidebar: 'sidebar',
    table: 'table',
    alert: 'alert',
    toast: 'toast',
    sonner: 'sonner',
    avatar: 'avatar',
    badge: 'badge',
    carousel: 'carousel',
    skeleton: 'skeleton'
  }
  
  const exportName = componentMap[slug]
  return exportName ? `npm install mad-ui-components/${exportName}` : null
}

function getIndividualImportCommand(slug: string): string | null {
  // Map component slugs to their package.json export names
  const componentMap: Record<string, string> = {
    button: 'button',
    input: 'input',
    label: 'label',
    card: 'card',
    checkbox: 'checkbox',
    radio: 'radio',
    select: 'select',
    switch: 'switch',
    progress: 'progress',
    slider: 'slider',
    rating: 'rating',
    textarea: 'textarea',
    accordion: 'accordion',
    breadcrumbs: 'breadcrumbs',
    calendar: 'calendar',
    datepicker: 'date-picker',
    timepicker: 'timepicker',
    inputotp: 'input-otp',
    radiogroup: 'radio-group',
    tabs: 'tabs',
    modal: 'modal',
    tooltip: 'tooltip',
    drawer: 'drawer',
    popover: 'popover',
    navbar: 'navbar',
    sidebar: 'sidebar',
    table: 'table',
    alert: 'alert',
    toast: 'toast',
    sonner: 'sonner',
    avatar: 'avatar',
    badge: 'badge',
    carousel: 'carousel',
    skeleton: 'skeleton'
  }
  
  const exportName = componentMap[slug]
  if (!exportName) return null
  
  // Get component title from registry
  const component = getComponentBySlug(slug)
  const componentName = component?.title || slug
  
  return `import { ${componentName} } from 'mad-ui-components/${exportName}'`
}

// Helper functions for usage guide data
function getBestPractices(slug: string): string[] {
  const practices: Record<string, string[]> = {
    button: [
      'Use clear, action-oriented labels that describe what the button does',
      'Provide loading states for async operations',
      'Use appropriate button variants (primary for main actions, secondary for supporting actions)',
      'Ensure sufficient color contrast for accessibility',
      'Include proper ARIA labels for screen readers'
    ],
    input: [
      'Always provide labels for form inputs',
      'Use appropriate input types (email, password, number, etc.)',
      'Provide clear error messages and validation feedback',
      'Use placeholder text sparingly and only for hints, not as labels',
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
      'Using too many primary buttons on the same page',
      'Making buttons too small to tap on mobile devices',
      'Not providing proper focus indicators'
    ],
    input: [
      'Using placeholder text as the only label',
      'Not providing validation feedback',
      'Using the wrong input type for the data',
      'Not handling empty states properly',
      'Making inputs too narrow for the expected content'
    ],
    checkbox: [
      'Using checkboxes for single selections (use radio buttons instead)',
      'Not providing clear labels',
      'Using indeterminate state incorrectly',
      'Not handling the "select all" pattern properly',
      'Making checkboxes too small to interact with easily'
    ],
    select: [
      'Having too many options without grouping or search',
      'Not providing a default/placeholder option',
      'Using unclear option labels',
      'Not handling the empty state properly',
      'Making the dropdown too narrow for the content'
    ],
    slider: [
      'Not showing the current value clearly',
      'Using inappropriate step sizes',
      'Not providing keyboard navigation',
      'Making the slider too small to interact with',
      'Not handling edge cases (min/max values)'
    ]
  }
  return mistakes[slug] || []
}

function getTips(slug: string): string[] {
  const tips: Record<string, string[]> = {
    button: [
      'Use icons to enhance button meaning and visual appeal',
      'Consider using different sizes for different contexts',
      'Implement proper hover and focus states',
      'Use disabled state appropriately to prevent invalid actions',
      'Consider using button groups for related actions'
    ],
    input: [
      'Use input masks for formatted data like phone numbers',
      'Implement real-time validation for better UX',
      'Consider using floating labels for space-constrained layouts',
      'Use input groups for related fields',
      'Implement proper error recovery mechanisms'
    ],
    checkbox: [
      'Use the indeterminate state for hierarchical selections',
      'Consider using checkbox groups for related options',
      'Implement proper keyboard navigation between checkboxes',
      'Use consistent spacing and alignment',
      'Consider using custom styling for brand consistency'
    ],
    select: [
      'Use search functionality for long option lists',
      'Consider using multi-select for multiple choices',
      'Implement proper keyboard navigation',
      'Use option groups for better organization',
      'Consider using custom dropdowns for complex interactions'
    ],
    slider: [
      'Use range sliders for selecting value ranges',
      'Implement proper touch support for mobile devices',
      'Consider using different colors for different value ranges',
      'Use marks to indicate important values',
      'Implement proper accessibility with ARIA attributes'
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
      },
      {
        title: 'Good: Loading State',
        description: 'Provide loading feedback for async operations.',
        code: `<Button loading={isLoading}>
  {isLoading ? 'Saving...' : 'Save Changes'}
</Button>`,
        good: true
      }
    ],
    input: [
      {
        title: 'Good: Proper Labeling',
        description: 'Always provide clear labels for inputs.',
        code: `<Input 
  label="Email Address" 
  type="email" 
  placeholder="Enter your email" 
/>`,
        good: true
      },
      {
        title: 'Bad: Placeholder as Label',
        description: 'Don\'t rely on placeholder text as the only label.',
        code: `<Input placeholder="Email Address" />`,
        good: false
      }
    ]
  }
  return examples[slug] || []
}

