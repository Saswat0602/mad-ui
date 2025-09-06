'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ComponentCategory } from '@/types/component'
import { ComponentPreview } from './ComponentPreview'
import { PropsTable } from './PropsTable'
import { CodeBlock } from './CodeBlock'
import { StatusBadge } from './StatusBadge'
import { Badge } from 'mad-ui-components'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getComponentExamples } from '@/lib/component-examples'
import { getComponentProps } from '@/lib/component-props'
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
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link 
              href="/docs/components" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-all duration-200 hover:scale-105 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Components
            </Link>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              {component.title}
            </h1>
            <StatusBadge status={component.status} />
          </motion.div>
          
          <motion.p 
            className="text-xl text-muted-foreground mb-6 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {component.description}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-2 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {component.tags.map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                <Badge 
                  variant="secondary" 
                  className="text-xs transition-all duration-200 hover:scale-105 hover:shadow-md"
                >
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg inline-block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Version {component.version} • {component.category} Component
          </motion.div>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          className="border-b border-border mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <nav className="flex space-x-8">
            {[
              { id: 'examples', label: 'Examples' },
              { id: 'props', label: 'API Reference' },
              { id: 'usage', label: 'Usage' },
              { id: 'guide', label: 'Best Practices' }
            ].map((tab, index) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'examples' | 'props' | 'usage' | 'guide')}
                className={`py-3 px-1 border-b-2 font-medium text-sm transition-all duration-200 hover:scale-105 ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </nav>
        </motion.div>

        {/* Content */}
        <div className="max-w-5xl">
          <AnimatePresence mode="wait">
            {activeTab === 'examples' && (
              <motion.div 
                key="examples"
                className="space-y-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {examples.map((example, index) => (
                  <motion.div 
                    key={index} 
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                        {example.title}
                      </h3>
                      {example.description && (
                        <p className="text-muted-foreground text-lg leading-relaxed">{example.description}</p>
                      )}
                    </div>
                    <motion.div 
                      className="hover-lift"
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ComponentPreview
                        code={example.code}
                        title={example.title}
                        description={example.description}
                      >
                        {example.preview}
                      </ComponentPreview>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'props' && (
              <motion.div 
                key="props"
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    API Reference
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    Complete reference for all props and their types.
                  </p>
                </div>
                <motion.div 
                  className="hover-lift"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <PropsTable props={props} />
                </motion.div>
              </motion.div>
            )}

            {activeTab === 'usage' && (
              <motion.div 
                key="usage"
                className="space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    Installation
                  </h3>
                  <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                    Install the component library to get started.
                  </p>
                  <motion.div 
                    className="hover-lift"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CodeBlock language="bash" code={`npm install mad-ui-components`} />
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    Import
                  </h3>
                  <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                    Import the component in your React application.
                  </p>
                  <motion.div 
                    className="hover-lift"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CodeBlock 
                      language="tsx" 
                      code={`import { ${component.title} } from 'mad-ui-components'`} 
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    Basic Usage
                  </h3>
                  <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                    Here&apos;s a simple example to get you started.
                  </p>
                  <motion.div 
                    className="hover-lift"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CodeBlock 
                      language="tsx" 
                      code={examples[0]?.code || `// Basic usage example\n<${component.title} />`} 
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            )}

            {activeTab === 'guide' && (
              <motion.div 
                key="guide"
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    Best Practices & Guidelines
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    Learn how to use {component.title} effectively with best practices, common mistakes to avoid, and accessibility guidelines.
                  </p>
                </div>
                <motion.div 
                  className="hover-lift"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <UsageGuide 
                    componentName={component.title}
                    bestPractices={getBestPractices(slug)}
                    commonMistakes={getCommonMistakes(slug)}
                    tips={getTips(slug)}
                    examples={getUsageExamples(slug)}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
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

