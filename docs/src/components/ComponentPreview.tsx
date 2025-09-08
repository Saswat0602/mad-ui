'use client'

import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { CodeBlock } from './CodeBlock'
import { Button } from 'mad-ui-components'
import { Copy, Eye, Code } from 'lucide-react'

interface ComponentPreviewProps {
  children: React.ReactNode
  code: string
}

export function ComponentPreview({
  children,
  code,
}: ComponentPreviewProps) {
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-200 hover:shadow-md hover:shadow-primary/5">
      <div className="relative">
        {/* Action Buttons */}
        <div className="absolute top-3 right-3 z-10 flex gap-2">
          <Button
            variant={showCode ? "secondary" : "outline"}
            size="sm"
            onClick={() => setShowCode(!showCode)}
            className="h-7 px-2 text-xs bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90"
          >
            {showCode ? <Eye className="w-3 h-3 mr-1" /> : <Code className="w-3 h-3 mr-1" />}
            {showCode ? 'View' : 'Code'}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="h-7 px-2 text-xs bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90"
          >
            <Copy className="w-3 h-3 mr-1" />
            {copied ? 'Copied!' : 'Copy'}
          </Button>
        </div>
        
        <AnimatePresence mode="wait">
          {!showCode ? (
            <div 
              key="preview"
              className="p-6 bg-gradient-to-br from-background to-muted/20 min-h-[120px] flex items-center justify-center"
            >
              <div className="w-full">
                {children}
              </div>
            </div>
          ) : (
            <div 
              key="code"
              className="bg-muted/30"
            >
              <CodeBlock language="tsx" code={code} />
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
