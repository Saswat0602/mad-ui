'use client'

import React from 'react'
import { CodeBlock } from './CodeBlock'
import { Badge } from '../../../src/components/media/badge'
import { CheckCircle, AlertTriangle, Info, Lightbulb } from 'lucide-react'

interface UsageGuideProps {
  componentName: string
  bestPractices?: string[]
  commonMistakes?: string[]
  tips?: string[]
  examples?: Array<{
    title: string
    description: string
    code: string
    good?: boolean
  }>
}

export function UsageGuide({ 
  bestPractices = [], 
  commonMistakes = [], 
  tips = [],
  examples = []
}: UsageGuideProps) {
  return (
    <div className="space-y-8">
      {/* Best Practices */}
      {bestPractices.length > 0 && (
        <section>
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-green-500" />
            Best Practices
          </h3>
          <div className="space-y-3">
            {bestPractices.map((practice, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-green-800 dark:text-green-200">{practice}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Common Mistakes */}
      {commonMistakes.length > 0 && (
        <section>
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-red-500" />
            Common Mistakes
          </h3>
          <div className="space-y-3">
            {commonMistakes.map((mistake, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-red-800 dark:text-red-200">{mistake}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tips */}
      {tips.length > 0 && (
        <section>
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-yellow-500" />
            Pro Tips
          </h3>
          <div className="space-y-3">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <p className="text-yellow-800 dark:text-yellow-200">{tip}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Examples */}
      {examples.length > 0 && (
        <section>
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Info className="h-6 w-6 text-blue-500" />
            Usage Examples
          </h3>
          <div className="space-y-6">
            {examples.map((example, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center gap-2">
                  <h4 className="text-lg font-medium">{example.title}</h4>
                  {example.good !== undefined && (
                    <Badge variant={example.good ? "default" : "destructive"}>
                      {example.good ? "Good" : "Bad"}
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground">{example.description}</p>
                <CodeBlock language="tsx" code={example.code} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Accessibility Guidelines */}
      <section>
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Info className="h-6 w-6 text-blue-500" />
          Accessibility Guidelines
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Keyboard Navigation</h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              Ensure all interactive elements are keyboard accessible. Use proper tab order and provide keyboard shortcuts where appropriate.
            </p>
          </div>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Screen Reader Support</h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              Provide appropriate ARIA labels, descriptions, and roles. Test with screen readers to ensure proper announcements.
            </p>
          </div>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Color Contrast</h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              Maintain sufficient color contrast ratios (4.5:1 for normal text, 3:1 for large text) for all text and interactive elements.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
