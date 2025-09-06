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
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link 
          href="/docs/components" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Components
        </Link>
        
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl font-bold">{component.title}</h1>
          <StatusBadge status={component.status} />
        </div>
        
        <p className="text-lg text-muted-foreground mb-4">
          {component.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {component.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="text-sm text-muted-foreground">
          Version {component.version} • {component.category} Component
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b mb-8">
        <nav className="flex space-x-8">
          {[
            { id: 'examples', label: 'Examples' },
            { id: 'props', label: 'API Reference' },
            { id: 'usage', label: 'Usage' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'examples' | 'props' | 'usage')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="max-w-4xl">
        {activeTab === 'examples' && (
          <div className="space-y-8">
            {examples.map((example, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-4">{example.title}</h3>
                {example.description && (
                  <p className="text-muted-foreground mb-4">{example.description}</p>
                )}
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
          <div>
            <h3 className="text-xl font-semibold mb-4">Props</h3>
            <PropsTable props={props} />
          </div>
        )}

        {activeTab === 'usage' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Installation</h3>
              <CodeBlock language="bash" code={`npm install mad-ui-components`} />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Import</h3>
              <CodeBlock 
                language="tsx" 
                code={`import { ${component.title} } from 'mad-ui-components'`} 
              />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
              <CodeBlock 
                language="tsx" 
                code={examples[0]?.code || `// Basic usage example\n<${component.title} />`} 
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

