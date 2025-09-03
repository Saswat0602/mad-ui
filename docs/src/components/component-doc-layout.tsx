"use client"

import React, { useState } from 'react'
import { Button } from 'mad-ui-components/button'
import { Badge } from 'mad-ui-components/badge'
import { Tabs } from 'mad-ui-components/tabs'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { 
  Copy, 
  Check
} from 'lucide-react'

interface ComponentDocLayoutProps {
  name: string
  description: string
  category: string
  children: React.ReactNode
}

interface CopyCodeBlockProps {
  code: string
  filename: string
  language?: string
}

export const CopyCodeBlock: React.FC<CopyCodeBlockProps> = ({ code, filename, language = 'tsx' }) => {
  const [copied, setCopied] = useState(false)
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  return (
    <div className="relative group">
      <div className="bg-slate-950 border border-slate-800 rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-900">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm text-slate-400 font-medium ml-2">{filename}</span>
            <Badge variant="outline" className="text-xs px-2 py-0.5 bg-slate-800 border-slate-700 text-slate-300">
              {language}
            </Badge>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleCopy}
            className="h-8 w-8 p-0 hover:bg-slate-800 text-slate-400 hover:text-slate-200"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-400" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
        <div className="p-0 bg-slate-950">
          <SyntaxHighlighter
            language={language}
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: '1rem',
              backgroundColor: 'rgb(2 6 23)',
              fontSize: '14px',
              lineHeight: '1.5'
            }}
            showLineNumbers={false}
            wrapLines={true}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}

export const LivePreview: React.FC<{ children: React.ReactNode; title: string }> = ({ children, title }) => (
  <div className="space-y-4">
    <h4 className="text-sm font-medium">{title}</h4>
    <div className="flex min-h-[200px] w-full items-center justify-center rounded-lg border-2 border-dashed border-border p-8 bg-card">
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {children}
      </div>
    </div>
  </div>
)

export const ComponentDocLayout: React.FC<ComponentDocLayoutProps> = ({
  name,
  description,
  category,
  children
}) => {
  const installationCode = `npm install mad-ui-components`
  const importCode = `import { ${name} } from 'mad-ui-components/${name.toLowerCase()}'`

  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: (
        <div className="space-y-8">
          {children}
        </div>
      )
    },
    {
      id: 'code',
      label: 'Code',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Installation</h3>
            <CopyCodeBlock
              filename="Terminal"
              language="bash"
              code={installationCode}
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Import</h3>
            <CopyCodeBlock
              filename="component.tsx"
              code={importCode}
            />
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{name}</h1>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>

      {/* Tabs */}
      <Tabs items={tabItems} defaultActiveTab="preview" className="w-full" />
    </div>
  )
}
