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
    <div className="border border-border/60 rounded-lg overflow-hidden bg-card/40">
      <div className="relative">
        {/* Action Buttons */}
        <div className="absolute top-2.5 right-2.5 z-10 flex gap-1.5">
          <Button
            variant={showCode ? "secondary" : "outline"}
            size="sm"
            onClick={() => setShowCode(!showCode)}
            className="h-7 px-2.5 text-xs bg-background/80 backdrop-blur-sm border-border/60 hover:bg-background"
          >
            {showCode ? <Eye className="w-3 h-3" /> : <Code className="w-3 h-3" />}
            <span className="ml-1 hidden sm:inline font-medium text-[11px]">{showCode ? 'Preview' : 'Code'}</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="h-7 px-2.5 text-xs bg-background/80 backdrop-blur-sm border-border/60 hover:bg-background"
          >
            <Copy className="w-3 h-3" />
            <span className="ml-1 hidden sm:inline font-medium text-[11px]">{copied ? 'Copied' : 'Copy'}</span>
          </Button>
        </div>
        
        <AnimatePresence mode="wait">
          {!showCode ? (
            <div 
              key="preview"
              className="p-6 sm:p-8 bg-muted/10 min-h-[140px] flex items-center justify-center"
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
