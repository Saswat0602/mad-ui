"use client"

import React, { useState } from 'react'
import { Button } from 'mad-ui-components/button'
import { ComponentDocLayout, LivePreview, CopyCodeBlock } from '@/components/component-doc-layout'
import { 
  Download,
  Heart,
  Star,
  Plus,
  Settings,
  Send,
  ArrowRight,
  ChevronDown,
  Loader2,
  Archive,
  BookOpen,
  Check
} from 'lucide-react'

export default function ButtonDocPage() {
  const [loading, setLoading] = useState(false)

  const handleLoadingDemo = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  const buttonExamples = (
    <div className="space-y-8">
      {/* Basic Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Variants</h3>
        <LivePreview title="Button Variants">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </LivePreview>
        
        <CopyCodeBlock
          filename="variants.tsx"
          code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>`}
        />
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <LivePreview title="Button Sizes">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </LivePreview>
        
        <CopyCodeBlock
          filename="sizes.tsx"
          code={`<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>`}
        />
      </div>

      {/* With Icons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Icons</h3>
        <LivePreview title="Icon Buttons">
          <Button leftIcon={<Download className="h-4 w-4" />}>
            Download
          </Button>
          <Button rightIcon={<ArrowRight className="h-4 w-4" />}>
            Continue
          </Button>
          <Button leftIcon={<Heart className="h-4 w-4" />} variant="outline">
            Like
          </Button>
          <Button rightIcon={<ChevronDown className="h-4 w-4" />} variant="ghost">
            Options
          </Button>
        </LivePreview>
        
        <CopyCodeBlock
          filename="icon-buttons.tsx"
          code={`import { Download, ArrowRight, Heart, ChevronDown } from 'lucide-react'

<Button leftIcon={<Download className="h-4 w-4" />}>
  Download
</Button>
<Button rightIcon={<ArrowRight className="h-4 w-4" />}>
  Continue
</Button>
<Button leftIcon={<Heart className="h-4 w-4" />} variant="outline">
  Like
</Button>
<Button rightIcon={<ChevronDown className="h-4 w-4" />} variant="ghost">
  Options
</Button>`}
        />
      </div>

      {/* Loading States */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Loading States</h3>
        <LivePreview title="Loading Buttons">
          <Button loading={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
          <Button 
            variant="outline" 
            onClick={handleLoadingDemo}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Try Loading Demo'}
          </Button>
          <Button loading variant="ghost">
            Loading State
          </Button>
        </LivePreview>
        
        <CopyCodeBlock
          filename="loading-buttons.tsx"
          code={`const [loading, setLoading] = useState(false)

const handleSubmit = () => {
  setLoading(true)
  // Simulate API call
  setTimeout(() => setLoading(false), 2000)
}

<Button loading={loading} onClick={handleSubmit}>
  {loading ? 'Submitting...' : 'Submit'}
</Button>
<Button loading variant="outline">
  Processing...
</Button>`}
        />
      </div>

      {/* Status Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Status Variants</h3>
        <LivePreview title="Status Colors">
          <Button variant="success" leftIcon={<Check className="h-4 w-4" />}>
            Success
          </Button>
          <Button variant="warning" leftIcon={<Archive className="h-4 w-4" />}>
            Warning
          </Button>
          <Button variant="error" leftIcon={<Plus className="h-4 w-4 rotate-45" />}>
            Error
          </Button>
          <Button variant="info" leftIcon={<BookOpen className="h-4 w-4" />}>
            Info
          </Button>
        </LivePreview>
        
        <CopyCodeBlock
          filename="status-buttons.tsx"
          code={`<Button variant="success" leftIcon={<Check className="h-4 w-4" />}>
  Success
</Button>
<Button variant="warning" leftIcon={<Archive className="h-4 w-4" />}>
  Warning
</Button>
<Button variant="error" leftIcon={<Plus className="h-4 w-4 rotate-45" />}>
  Error
</Button>
<Button variant="info" leftIcon={<BookOpen className="h-4 w-4" />}>
  Info
</Button>`}
        />
      </div>

      {/* Additional Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Additional Variants</h3>
        <LivePreview title="Status Button Variants">
          <Button variant="success">
            Success Button
          </Button>
          <Button variant="warning">
            Warning Button
          </Button>
          <Button variant="error">
            Error Button
          </Button>
          <Button variant="info">
            Info Button
          </Button>
        </LivePreview>
        
        <CopyCodeBlock
          filename="status-buttons.tsx"
          code={`<Button variant="success">Success Button</Button>
<Button variant="warning">Warning Button</Button>
<Button variant="error">Error Button</Button>
<Button variant="info">Info Button</Button>`}
        />
      </div>
    </div>
  )

  return (
    <ComponentDocLayout
      name="Button"
      description="A versatile button component with multiple variants, sizes, and states. Perfect for actions, navigation, and user interactions."
      category="Core Component"
      bundleSize="~3.7KB"
      variants={8}
      complexity="Simple"
    >
      {buttonExamples}
    </ComponentDocLayout>
  )
}