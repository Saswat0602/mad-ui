'use client'

import React, { useState } from 'react'
import { CodeBlock } from './CodeBlock'
import { Button } from 'mad-ui-components'
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
    <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01] group">
      {title && (
        <div className="border-b border-border px-6 py-4 bg-muted/30">
          <h4 className="font-semibold text-lg bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">{title}</h4>
          {description && (
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{description}</p>
          )}
        </div>
      )}
      
      <div className="relative">
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowCode(!showCode)}
            className="h-8 px-3 text-xs hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-105"
          >
            {showCode ? <Eye className="w-3 h-3" /> : <Code className="w-3 h-3" />}
            {showCode ? 'Preview' : 'Code'}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="h-8 px-3 text-xs hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-105"
          >
            <Copy className="w-3 h-3 mr-1" />
            {copied ? 'Copied!' : 'Copy'}
          </Button>
        </div>
        
        {!showCode ? (
          <div className="p-8 bg-background min-h-[200px] flex items-center justify-center animate-slide-in-bottom">
            <div className="w-full">
              {children}
            </div>
          </div>
        ) : (
          <div className="bg-muted/50 animate-slide-in-bottom">
            <CodeBlock language="tsx" code={code} />
          </div>
        )}
      </div>
    </div>
  )
}
