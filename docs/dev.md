# TypeScript Component Library Documentation Architecture Guide

## 🎯 Best Practices Overview

### **Recommended Solution: Dynamic Routing + MDX + TypeScript**
- Use Next.js 14+ with App Router and TypeScript
- Single template component with strict typing
- Type-safe MDX processing with frontmatter validation
- Scalable from 57 to 1000+ components with full type safety

## 📁 Project Structure

```
/docs
├── app/
│   └── components/
│       └── [slug]/
│           └── page.tsx         # Dynamic route handler
├── content/
│   └── components/
│       ├── button.mdx
│       ├── input.mdx
│       ├── card.mdx
│       └── ...
├── components/
│   ├── DocumentationLayout.tsx
│   ├── ComponentPreview.tsx
│   ├── CodeBlock.tsx
│   ├── PropsTable.tsx
│   └── ui/                      # Your component library
├── lib/
│   ├── mdx-utils.ts
│   ├── types.ts
│   └── schemas.ts
├── types/
│   ├── component.ts
│   ├── frontmatter.ts
│   └── mdx.ts
└── package.json
```

## 🔧 TypeScript Types & Interfaces

### File: `types/component.ts`
```typescript
export interface ComponentMeta {
  title: string
  description: string
  category: ComponentCategory
  version: string
  status: ComponentStatus
  lastUpdated: Date
  deprecated?: boolean
  migrationGuide?: string
  tags: string[]
}

export interface ComponentProp {
  name: string
  type: string
  required: boolean
  default?: string | number | boolean
  description: string
  deprecated?: boolean
}

export interface ComponentExample {
  title: string
  description?: string
  code: string
  preview?: React.ReactNode
}

export interface ComponentDoc {
  slug: string
  meta: ComponentMeta
  content: string
  props: ComponentProp[]
  examples: ComponentExample[]
  relatedComponents: string[]
}

export type ComponentCategory = 
  | 'Layout' 
  | 'Form' 
  | 'Navigation' 
  | 'Feedback' 
  | 'Data Display' 
  | 'Overlay' 
  | 'Media'

export type ComponentStatus = 
  | 'stable' 
  | 'beta' 
  | 'alpha' 
  | 'deprecated'
```

### File: `types/frontmatter.ts`
```typescript
import { z } from 'zod'

export const FrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.enum(['Layout', 'Form', 'Navigation', 'Feedback', 'Data Display', 'Overlay', 'Media']),
  version: z.string(),
  status: z.enum(['stable', 'beta', 'alpha', 'deprecated']).default('stable'),
  lastUpdated: z.string().transform((str) => new Date(str)),
  deprecated: z.boolean().optional(),
  migrationGuide: z.string().optional(),
  tags: z.array(z.string()).default([]),
})

export type Frontmatter = z.infer<typeof FrontmatterSchema>
```

### File: `types/mdx.ts`
```typescript
export interface MDXContent {
  frontmatter: Frontmatter
  content: string
  slug: string
}

export interface SerializedMDX {
  compiledSource: string
  frontmatter: Frontmatter
  scope: Record<string, unknown>
}

export interface MDXComponents {
  [key: string]: React.ComponentType<any>
}
```

## 🔧 Implementation with TypeScript

### File: `app/components/[slug]/page.tsx`
```typescript
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllComponents, getComponentBySlug } from '@/lib/mdx-utils'
import DocumentationLayout from '@/components/DocumentationLayout'
import { ComponentDoc } from '@/types/component'
import { mdxComponents } from '@/lib/mdx-components'

interface ComponentPageProps {
  params: {
    slug: string
  }
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const component = await getComponentBySlug(params.slug)
  
  if (!component) {
    notFound()
  }

  return (
    <DocumentationLayout 
      title={component.meta.title}
      category={component.meta.category}
      status={component.meta.status}
    >
      <MDXRemote 
        source={component.content} 
        components={mdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
          }
        }}
      />
    </DocumentationLayout>
  )
}

export async function generateStaticParams() {
  const components = await getAllComponents()
  
  return components.map((component) => ({
    slug: component.slug,
  }))
}

export async function generateMetadata({ 
  params 
}: ComponentPageProps): Promise<Metadata> {
  const component = await getComponentBySlug(params.slug)
  
  if (!component) {
    return {
      title: 'Component Not Found'
    }
  }

  return {
    title: `${component.meta.title} - Component Library`,
    description: component.meta.description,
    keywords: component.meta.tags,
    openGraph: {
      title: component.meta.title,
      description: component.meta.description,
      type: 'article',
    },
  }
}
```

### File: `lib/mdx-utils.ts`
```typescript
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { ComponentDoc } from '@/types/component'
import { FrontmatterSchema, type Frontmatter } from '@/types/frontmatter'

const COMPONENTS_PATH = path.join(process.cwd(), 'content/components')

export async function getAllComponents(): Promise<ComponentDoc[]> {
  const files = fs.readdirSync(COMPONENTS_PATH)
  const mdxFiles = files.filter((file) => file.endsWith('.mdx'))
  
  const components = await Promise.all(
    mdxFiles.map(async (file) => {
      const slug = file.replace('.mdx', '')
      return await getComponentBySlug(slug)
    })
  )
  
  return components.filter((component): component is ComponentDoc => 
    component !== null
  )
}

export async function getComponentBySlug(
  slug: string
): Promise<ComponentDoc | null> {
  try {
    const filePath = path.join(COMPONENTS_PATH, `${slug}.mdx`)
    
    if (!fs.existsSync(filePath)) {
      return null
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)
    
    // Validate frontmatter with Zod
    const validatedMeta = FrontmatterSchema.parse(data)
    
    // Extract props from component if TypeScript file exists
    const props = await extractComponentProps(slug)
    
    return {
      slug,
      meta: validatedMeta,
      content,
      props,
      examples: [], // Extract from content or separate files
      relatedComponents: data.relatedComponents || [],
    }
  } catch (error) {
    console.error(`Error loading component ${slug}:`, error)
    return null
  }
}

export async function getComponentsByCategory(
  category: string
): Promise<ComponentDoc[]> {
  const allComponents = await getAllComponents()
  return allComponents.filter(
    (component) => component.meta.category === category
  )
}

async function extractComponentProps(slug: string): Promise<ComponentProp[]> {
  // Extract props from TypeScript component files
  const componentPath = path.join(
    process.cwd(), 
    'components/ui', 
    `${slug}.tsx`
  )
  
  if (!fs.existsSync(componentPath)) {
    return []
  }
  
  // Use react-docgen-typescript to extract props
  try {
    const { parseFromFile } = await import('react-docgen-typescript')
    const docs = parseFromFile(componentPath)
    
    if (docs.length === 0) return []
    
    const componentDoc = docs[0]
    
    return Object.entries(componentDoc.props).map(([name, prop]) => ({
      name,
      type: prop.type.name,
      required: prop.required,
      default: prop.defaultValue?.value,
      description: prop.description,
      deprecated: prop.tags?.deprecated !== undefined,
    }))
  } catch (error) {
    console.warn(`Could not extract props for ${slug}:`, error)
    return []
  }
}
```

### File: `components/DocumentationLayout.tsx`
```typescript
import React from 'react'
import { ComponentCategory, ComponentStatus } from '@/types/component'
import { Sidebar } from './Sidebar'
import { Breadcrumb } from './Breadcrumb'
import { TableOfContents } from './TableOfContents'
import { StatusBadge } from './StatusBadge'

interface DocumentationLayoutProps {
  title: string
  category: ComponentCategory
  status: ComponentStatus
  children: React.ReactNode
}

export default function DocumentationLayout({
  title,
  category,
  status,
  children,
}: DocumentationLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="pl-64">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Breadcrumb category={category} title={title} />
          <div className="flex items-center gap-2 mb-6">
            <h1 className="text-3xl font-bold">{title}</h1>
            <StatusBadge status={status} />
          </div>
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            {children}
          </article>
        </div>
      </main>
      <TableOfContents />
    </div>
  )
}
```

### File: `components/ComponentPreview.tsx`
```typescript
'use client'

import React, { useState } from 'react'
import { CodeBlock } from './CodeBlock'
import { Button } from '@/components/ui/button'
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
```

### File: `components/PropsTable.tsx`
```typescript
import React from 'react'
import { ComponentProp } from '@/types/component'
import { Badge } from '@/components/ui/badge'

interface PropsTableProps {
  props: ComponentProp[]
}

export function PropsTable({ props }: PropsTableProps) {
  if (props.length === 0) {
    return (
      <div className="text-sm text-muted-foreground">
        No props available for this component.
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Prop</th>
            <th className="text-left p-2">Type</th>
            <th className="text-left p-2">Default</th>
            <th className="text-left p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className="border-b">
              <td className="p-2">
                <code className="text-xs bg-muted px-1 py-0.5 rounded">
                  {prop.name}
                </code>
                {prop.required && (
                  <Badge variant="destructive" className="ml-1 text-xs">
                    required
                  </Badge>
                )}
                {prop.deprecated && (
                  <Badge variant="outline" className="ml-1 text-xs">
                    deprecated
                  </Badge>
                )}
              </td>
              <td className="p-2">
                <code className="text-xs text-muted-foreground">
                  {prop.type}
                </code>
              </td>
              <td className="p-2">
                {prop.default !== undefined ? (
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">
                    {String(prop.default)}
                  </code>
                ) : (
                  <span className="text-muted-foreground">-</span>
                )}
              </td>
              <td className="p-2 text-muted-foreground">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
```

## 🔧 MDX Components with TypeScript

### File: `lib/mdx-components.tsx`
```typescript
import React from 'react'
import { ComponentPreview } from '@/components/ComponentPreview'
import { PropsTable } from '@/components/PropsTable'
import { CodeBlock } from '@/components/CodeBlock'
import { Alert, AlertDescription } from '@/components/ui/alert'
import * as UIComponents from '@/components/ui' // All your components
import { MDXComponents } from '@/types/mdx'

export const mdxComponents: MDXComponents = {
  // Custom components for documentation
  ComponentPreview,
  PropsTable,
  CodeBlock,
  Alert,
  AlertDescription,
  
  // All your UI components (for live preview)
  ...UIComponents,
  
  // Override default HTML elements
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto" {...props}>
      {children}
    </pre>
  ),
  
  code: ({ 
    children, 
    className,
    ...props 
  }: React.HTMLAttributes<HTMLElement>) => {
    const isInlineCode = !className?.includes('language-')
    
    if (isInlineCode) {
      return (
        <code 
          className="bg-muted px-1 py-0.5 rounded text-sm" 
          {...props}
        >
          {children}
        </code>
      )
    }
    
    return <code className={className} {...props}>{children}</code>
  },
  
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-bold mb-6" {...props}>
      {children}
    </h1>
  ),
  
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-semibold mt-8 mb-4" {...props}>
      {children}
    </h2>
  ),
  
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold mt-6 mb-3" {...props}>
      {children}
    </h3>
  ),
}
```

## 🔧 Configuration Files

### File: `package.json`
```json
{
  "name": "component-library-docs",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "generate-props": "node scripts/generate-props.js"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "next-mdx-remote": "^4.4.1",
    "gray-matter": "^4.0.3",
    "zod": "^3.22.4",
    "lucide-react": "^0.263.1",
    "@tailwindcss/typography": "^0.5.10"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "react-docgen-typescript": "^2.2.2",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0"
  }
}
```

### File: `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/components/*": ["components/*"],
      "@/lib/*": ["lib/*"],
      "@/types/*": ["types/*"],
      "@/content/*": ["content/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}
```

### File: `next.config.js`
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
    typedRoutes: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
```

## 📝 Example MDX Component Documentation

### File: `content/components/button.mdx`
```mdx
---
title: "Button Component"
description: "Customizable button component with multiple variants and sizes"
category: "Form"
version: "2.1.0"
status: "stable"
lastUpdated: "2024-01-15"
tags: ["form", "action", "interactive"]
---

# Button

A versatile button component that supports multiple variants, sizes, and states.

## Installation

```bash
npm install @your-org/ui-button
```

## Usage

<ComponentPreview code={`
import { Button } from '@your-org/ui'

export function Example() {
  return (
    <div className="flex gap-4">
      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  )
}
`}>
  <div className="flex gap-4">
    <Button variant="default">Default</Button>
    <Button variant="primary">Primary</Button>
    <Button variant="destructive">Destructive</Button>
  </div>
</ComponentPreview>

## API Reference

<PropsTable props={[
  {
    name: "variant",
    type: "'default' | 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost'",
    required: false,
    default: "default",
    description: "The visual style variant of the button"
  },
  {
    name: "size",
    type: "'sm' | 'default' | 'lg'",
    required: false,
    default: "default",
    description: "The size of the button"
  },
  {
    name: "disabled",
    type: "boolean",
    required: false,
    default: "false",
    description: "Whether the button is disabled"
  }
]} />

## Examples

### Sizes

<ComponentPreview 
  title="Button Sizes"
  description="Different button sizes for various use cases"
  code={`
<div className="flex items-center gap-4">
  <Button size="sm">Small</Button>
  <Button size="default">Default</Button>
  <Button size="lg">Large</Button>
</div>
`}>
  <div className="flex items-center gap-4">
    <Button size="sm">Small</Button>
    <Button size="default">Default</Button>
    <Button size="lg">Large</Button>
  </div>
</ComponentPreview>
```

## 🚀 Automated Props Generation

### File: `scripts/generate-props.ts`
```typescript
import fs from 'fs'
import path from 'path'
import { parseFromFile } from 'react-docgen-typescript'
import { ComponentProp } from '../types/component'

interface ComponentConfig {
  name: string
  path: string
}

const components: ComponentConfig[] = [
  { name: 'Button', path: 'components/ui/button.tsx' },
  { name: 'Input', path: 'components/ui/input.tsx' },
  // Add all your components
]

async function generatePropsDocumentation() {
  for (const component of components) {
    try {
      const docs = parseFromFile(component.path)
      
      if (docs.length === 0) continue
      
      const componentDoc = docs[0]
      const props: ComponentProp[] = Object.entries(componentDoc.props).map(
        ([name, prop]) => ({
          name,
          type: prop.type.name,
          required: prop.required,
          default: prop.defaultValue?.value,
          description: prop.description,
          deprecated: prop.tags?.deprecated !== undefined,
        })
      )
      
      const outputPath = path.join(
        process.cwd(),
        'content/props',
        `${component.name.toLowerCase()}.json`
      )
      
      fs.writeFileSync(outputPath, JSON.stringify(props, null, 2))
      console.log(`Generated props for ${component.name}`)
    } catch (error) {
      console.error(`Error generating props for ${component.name}:`, error)
    }
  }
}

generatePropsDocumentation()
```

## ✅ TypeScript Benefits Summary

### **Type Safety**
- ✅ Compile-time validation of component props
- ✅ Strict typing for frontmatter data
- ✅ Type-safe MDX component usage
- ✅ Autocomplete for component APIs

### **Developer Experience**
- ✅ IntelliSense for all documentation APIs
- ✅ Catch errors before build time
- ✅ Refactoring safety across the codebase
- ✅ Auto-generated props documentation

### **Maintenance**
- ✅ Schema validation with Zod
- ✅ Consistent data structures
- ✅ Easy to add new component types
- ✅ Automated testing capabilities

This TypeScript setup provides a robust, scalable foundation for your component library documentation that grows with your needs while maintaining type safety and excellent developer experience.