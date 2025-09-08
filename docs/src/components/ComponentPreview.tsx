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
        <div className="absolute top-2 right-2 z-10 flex gap-1.5">
          <Button
            variant={showCode ? "secondary" : "outline"}
            size="sm"
            onClick={() => setShowCode(!showCode)}
            className="h-6 px-2 text-xs bg-background/90 backdrop-blur-sm border-border/50 hover:bg-background shadow-sm"
          >
            {showCode ? <Eye className="w-3 h-3" /> : <Code className="w-3 h-3" />}
            <span className="ml-1 hidden sm:inline">{showCode ? 'View' : 'Code'}</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="h-6 px-2 text-xs bg-background/90 backdrop-blur-sm border-border/50 hover:bg-background shadow-sm"
          >
            <Copy className="w-3 h-3" />
            <span className="ml-1 hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
          </Button>
        </div>
        
        <AnimatePresence mode="wait">
          {!showCode ? (
            <div 
              key="preview"
              className="p-4 sm:p-6 bg-gradient-to-br from-background to-muted/20 min-h-[100px] flex items-center justify-center"
            >
              <div className="w-full">
                {children}
              </div>
            </div>
          ) : (
            <div 
              key="code"
              className="bg-muted/30 overflow-hidden"
            >
              <div className="pt-8">
                <CodeBlock language="tsx" code={code} />
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
