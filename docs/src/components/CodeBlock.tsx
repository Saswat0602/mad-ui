'use client'

import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Copy, Check, Terminal, FileCode } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
  showLineNumbers?: boolean
  className?: string
}

export function CodeBlock({
  code,
  language = 'tsx',
  filename,
  showLineNumbers = false,
  className
}: CodeBlockProps) {
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

  const isBash = language === 'bash' || language === 'sh' || language === 'shell'
  const displayTitle = filename || (isBash ? 'terminal' : `example.${language === 'tsx' ? 'tsx' : language}`)

  return (
    <div className={`rounded-xl border border-zinc-800 bg-[#1e1e1e] overflow-hidden shadow-xs text-left ${className || ''}`}>
      {/* Monaco / VS Code Header */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#18181b] border-b border-zinc-800/80 select-none">
        {/* Left: Window traffic light dots & Tab */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] opacity-80 hover:opacity-100 transition-opacity inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] opacity-80 hover:opacity-100 transition-opacity inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] opacity-80 hover:opacity-100 transition-opacity inline-block" />
          </div>

          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#1e1e1e] border border-zinc-800 text-[11px] font-mono text-zinc-300 max-w-[140px] sm:max-w-[240px] truncate">
            {isBash ? (
              <Terminal className="w-3 h-3 text-zinc-400 shrink-0" />
            ) : (
              <FileCode className="w-3 h-3 text-blue-400 shrink-0" />
            )}
            <span className="truncate">{displayTitle}</span>
          </div>
        </div>

        {/* Right: Language tag & Copy button */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 hidden sm:inline">
            {language}
          </span>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-mono text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80 transition-colors"
            title="Copy code"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Copied</span>
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

      {/* Code Editor Body */}
      <div className="overflow-x-auto text-[13px] leading-[1.65] font-mono selection:bg-blue-500/30">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            padding: '1rem',
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
    </div>
  )
}
