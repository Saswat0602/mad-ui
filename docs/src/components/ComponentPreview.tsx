'use client'

import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Copy, Eye, Code2, Check, FileCode } from 'lucide-react'

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
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback
    }
  }

  return (
    <div className="rounded-xl border border-border/70 bg-card overflow-hidden shadow-xs transition-colors w-full">
      {/* Unified Window Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-muted/40 border-b border-border/60 select-none flex-wrap gap-2">
        {/* Left: Window Traffic Light Dots & Segmented Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          <div className="hidden sm:flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] opacity-80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] opacity-80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] opacity-80 inline-block" />
          </div>

          {/* Clean Segmented Preview/Code Toggle */}
          <div className="inline-flex items-center p-0.5 rounded-lg bg-muted border border-border/50 text-xs">
            <button
              onClick={() => setShowCode(false)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium text-xs transition-all cursor-pointer ${
                !showCode
                  ? 'bg-background text-foreground shadow-2xs font-semibold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview</span>
            </button>
            <button
              onClick={() => setShowCode(true)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium text-xs transition-all cursor-pointer ${
                showCode
                  ? 'bg-background text-foreground shadow-2xs font-semibold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Code</span>
            </button>
          </div>
        </div>

        {/* Right: Active Tab/Tag & Copy Button */}
        <div className="flex items-center gap-2">
          {showCode ? (
            <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-muted/60 border border-border/40 text-[11px] font-mono text-muted-foreground">
              <FileCode className="w-3 h-3 text-blue-400" />
              <span>example.tsx</span>
            </div>
          ) : (
            <span className="hidden sm:inline-block text-[11px] font-mono text-muted-foreground/60">
              interactive
            </span>
          )}

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
            title="Copy code"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-500 font-medium">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Content Stage */}
      {!showCode ? (
        <div className="p-4 sm:p-6 md:p-10 min-h-[160px] flex items-center justify-center bg-zinc-50/80 dark:bg-[#0c0d12] bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:20px_20px] transition-colors overflow-x-auto">
          <div className="w-full max-w-full flex items-center justify-center overflow-x-auto py-2">
            {children}
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto text-[13px] leading-[1.65] font-mono selection:bg-blue-500/30">
          <SyntaxHighlighter
            language="tsx"
            style={vscDarkPlus}
            showLineNumbers={true}
            customStyle={{
              margin: 0,
              padding: '1.25rem',
              background: 'transparent',
              fontSize: '0.8125rem',
              lineHeight: '1.65',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            }}
            lineNumberStyle={{
              minWidth: '2.25em',
              paddingRight: '1em',
              color: '#6e7681',
              textAlign: 'right',
              userSelect: 'none',
            }}
            wrapLines={true}
          >
            {code.trim()}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  )
}
