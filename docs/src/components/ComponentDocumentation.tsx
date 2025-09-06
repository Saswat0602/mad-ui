'use client'

import React, { useState } from 'react'
import { ComponentCategory } from '@/types/component'
import { ComponentPreview } from './ComponentPreview'
import { PropsTable } from './PropsTable'
import { CodeBlock } from './CodeBlock'
import { StatusBadge } from './StatusBadge'
import { Badge } from '../../../src/components/media/badge'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getComponentExamples } from '@/lib/component-examples'
import { getComponentProps } from '@/lib/component-props'

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
  const [activeTab, setActiveTab] = useState<'examples' | 'props' | 'usage'>('examples')

  // Get component examples and props based on slug
  const examples = getComponentExamples(slug)
  const props = getComponentProps(slug)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/docs/components" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Components
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-5xl font-bold tracking-tight">{component.title}</h1>
            <StatusBadge status={component.status} />
          </div>
          
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            {component.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {component.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="text-sm text-muted-foreground">
            Version {component.version} • {component.category} Component
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-border mb-12">
          <nav className="flex space-x-8">
            {[
              { id: 'examples', label: 'Examples' },
              { id: 'props', label: 'API Reference' },
              { id: 'usage', label: 'Usage' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'examples' | 'props' | 'usage')}
                className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="max-w-5xl">
          {activeTab === 'examples' && (
            <div className="space-y-12">
              {examples.map((example, index) => (
                <div key={index} className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{example.title}</h3>
                    {example.description && (
                      <p className="text-muted-foreground text-lg">{example.description}</p>
                    )}
                  </div>
                  <ComponentPreview
                    code={example.code}
                    title={example.title}
                    description={example.description}
                  >
                    {example.preview}
                  </ComponentPreview>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'props' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">API Reference</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  Complete reference for all props and their types.
                </p>
              </div>
              <PropsTable props={props} />
            </div>
          )}

          {activeTab === 'usage' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Installation</h3>
                <p className="text-muted-foreground text-lg mb-4">
                  Install the component library to get started.
                </p>
                <CodeBlock language="bash" code={`npm install mad-ui-components`} />
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">Import</h3>
                <p className="text-muted-foreground text-lg mb-4">
                  Import the component in your React application.
                </p>
                <CodeBlock 
                  language="tsx" 
                  code={`import { ${component.title} } from 'mad-ui-components'`} 
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">Basic Usage</h3>
                <p className="text-muted-foreground text-lg mb-4">
                  Here&apos;s a simple example to get you started.
                </p>
                <CodeBlock 
                  language="tsx" 
                  code={examples[0]?.code || `// Basic usage example\n<${component.title} />`} 
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

