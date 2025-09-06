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
    <div className="border rounded-lg overflow-hidden">
      {title && (
        <div className="border-b px-4 py-2">
          <h3 className="font-semibold">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      
      <div className="relative">
        <div className="absolute top-2 right-2 z-10 flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowCode(!showCode)}
          >
            {showCode ? <Eye className="w-4 h-4" /> : <Code className="w-4 h-4" />}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
          >
            <Copy className="w-4 h-4" />
            {copied ? 'Copied!' : 'Copy'}
          </Button>
        </div>
        
        {!showCode ? (
          <div className="p-6 bg-card">
            {children}
          </div>
        ) : (
          <CodeBlock language="tsx" code={code} />
        )}
      </div>
    </div>
  )
}
