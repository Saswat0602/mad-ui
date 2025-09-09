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
    <div className="border border-border rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-200 hover:shadow-lg hover:shadow-primary/5">
      <div className="relative">
        {/* Action Buttons */}
        <div className="absolute top-3 right-3 z-10 flex gap-2">
          <Button
            variant={showCode ? "secondary" : "outline"}
            size="sm"
            onClick={() => setShowCode(!showCode)}
            className="h-8 px-3 text-xs bg-background/95 backdrop-blur-sm border-border/60 hover:bg-background shadow-sm hover:shadow-md transition-all duration-200"
          >
            {showCode ? <Eye className="w-3.5 h-3.5" /> : <Code className="w-3.5 h-3.5" />}
            <span className="ml-1.5 hidden sm:inline font-medium">{showCode ? 'Preview' : 'Code'}</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="h-8 px-3 text-xs bg-background/95 backdrop-blur-sm border-border/60 hover:bg-background shadow-sm hover:shadow-md transition-all duration-200"
          >
            <Copy className="w-3.5 h-3.5" />
            <span className="ml-1.5 hidden sm:inline font-medium">{copied ? 'Copied!' : 'Copy'}</span>
          </Button>
        </div>
        
        <AnimatePresence mode="wait">
          {!showCode ? (
            <div 
              key="preview"
              className="p-6 sm:p-8 bg-gradient-to-br from-background via-background/95 to-muted/10 min-h-[120px] flex items-center justify-center"
            >
              <div className="w-full max-w-full">
                {children}
              </div>
            </div>
          ) : (
            <div 
              key="code"
              className="bg-muted/20 overflow-hidden"
            >
              <div className="pt-12 pb-4">
                <CodeBlock language="tsx" code={code} />
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
