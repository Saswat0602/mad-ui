'use client'

import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { CodeBlock } from './CodeBlock'
import { Copy, Eye, Code2, Check } from 'lucide-react'

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
    <div className="rounded-xl border border-border/60 overflow-hidden bg-card/30 shadow-xs backdrop-blur-xs transition-all">
      {/* Top Toolbar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-muted/40 border-b border-border/40">
        {/* Segmented Preview/Code Toggle */}
        <div className="inline-flex items-center p-0.5 rounded-lg bg-muted/60 border border-border/40 text-xs">
          <button
            onClick={() => setShowCode(false)}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-medium transition-all ${
              !showCode
                ? 'bg-background text-foreground shadow-xs font-semibold'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Preview</span>
          </button>
          <button
            onClick={() => setShowCode(true)}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-medium transition-all ${
              showCode
                ? 'bg-background text-foreground shadow-xs font-semibold'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Code</span>
          </button>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 border border-transparent hover:border-border/40 transition-colors"
          title="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-emerald-500 font-semibold">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Content Stage */}
      <AnimatePresence mode="wait">
        {!showCode ? (
          <div 
            key="preview"
            className="p-8 sm:p-12 min-h-[180px] flex items-center justify-center bg-gradient-to-b from-muted/20 via-background/40 to-background/80 dark:from-zinc-950/40 dark:via-zinc-950/60 dark:to-zinc-950/80"
          >
            <div className="w-full flex items-center justify-center">
              {children}
            </div>
          </div>
        ) : (
          <div 
            key="code"
            className="bg-zinc-950 p-0 overflow-x-auto text-xs"
          >
            <CodeBlock language="tsx" code={code} />
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

