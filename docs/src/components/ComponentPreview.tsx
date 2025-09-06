'use client'

import React, { useState } from 'react'
import { CodeBlock } from './CodeBlock'
import { Button } from '../../../src/components/core/button'
import { Copy, Eye, Code } from 'lucide-react'

interface ComponentPreviewProps {
  children: React.ReactNode
  code: string
  title?: string
  description?: string
}

export function ComponentPreview({
  children,
  code,
  title,
  description,
}: ComponentPreviewProps) {
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow duration-200">
      {title && (
        <div className="border-b border-border px-6 py-4 bg-muted/30">
          <h4 className="font-semibold text-lg">{title}</h4>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
      )}
      
      <div className="relative">
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowCode(!showCode)}
            className="h-8 px-3 text-xs hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {showCode ? <Eye className="w-3 h-3" /> : <Code className="w-3 h-3" />}
            {showCode ? 'Preview' : 'Code'}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="h-8 px-3 text-xs hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Copy className="w-3 h-3 mr-1" />
            {copied ? 'Copied!' : 'Copy'}
          </Button>
        </div>
        
        {!showCode ? (
          <div className="p-8 bg-background min-h-[200px] flex items-center justify-center">
            <div className="w-full">
              {children}
            </div>
          </div>
        ) : (
          <div className="bg-muted/50">
            <CodeBlock language="tsx" code={code} />
          </div>
        )}
      </div>
    </div>
  )
}
