"use client"

import React, { useState } from 'react'
import { Button } from 'mad-ui-components/button'
import { Badge } from 'mad-ui-components/badge'
import { Tabs } from 'mad-ui-components/tabs'
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
      <div className="bg-background border rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/50">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground font-medium">{filename}</span>
            <Badge variant="outline" className="text-xs px-2 py-0.5">
              {language}
            </Badge>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleCopy}
            className="h-8 w-8 p-0"
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
        <div className="p-4">
          <pre className="text-sm overflow-x-auto">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export const LivePreview: React.FC<{ children: React.ReactNode; title: string }> = ({ children, title }) => (
  <div className="space-y-4">
    <h4 className="text-sm font-medium">{title}</h4>
    <div className="flex min-h-[200px] w-full items-center justify-center rounded-lg border bg-background p-8">
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
