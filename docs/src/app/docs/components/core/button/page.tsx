"use client"

import React, { useState } from 'react'
import { Button } from 'mad-ui-components/button'
import { ComponentDocLayout, LivePreview, CopyCodeBlock } from '@/components/component-doc-layout'
import { 
  Download,
  ArrowRight
} from 'lucide-react'

export default function ButtonDocPage() {
  const [loading, setLoading] = useState(false)

  const handleLoadingDemo = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  const buttonExamples = (
    <div className="space-y-8">
      {/* Default Example */}
      <div className="space-y-4">
        <LivePreview title="Default">
          <Button>Button</Button>
        </LivePreview>
        <CopyCodeBlock
          filename="button.tsx"
          code={`<Button>Button</Button>`}
        />
      </div>

      {/* Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Variants</h3>
        <LivePreview title="Variants">
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
        <LivePreview title="Sizes">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </LivePreview>
        <CopyCodeBlock
          filename="sizes.tsx"
          code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
        />
      </div>

      {/* With Icons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Icons</h3>
        <LivePreview title="With Icons">
          <Button leftIcon={<Download className="h-4 w-4" />}>
            Download
          </Button>
          <Button rightIcon={<ArrowRight className="h-4 w-4" />}>
            Continue
          </Button>
        </LivePreview>
        <CopyCodeBlock
          filename="with-icons.tsx"
          code={`import { Download, ArrowRight } from 'lucide-react'

<Button leftIcon={<Download className="h-4 w-4" />}>
  Download
</Button>
<Button rightIcon={<ArrowRight className="h-4 w-4" />}>
  Continue
</Button>`}
        />
      </div>

      {/* Loading */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Loading</h3>
        <LivePreview title="Loading">
          <Button loading={loading} onClick={handleLoadingDemo}>
            {loading ? 'Loading...' : 'Click me'}
          </Button>
          <Button loading variant="outline">
            Loading
          </Button>
        </LivePreview>
        <CopyCodeBlock
          filename="loading.tsx"
          code={`const [loading, setLoading] = useState(false)

<Button loading={loading}>
  {loading ? 'Loading...' : 'Submit'}
</Button>`}
        />
      </div>

      {/* Disabled */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Disabled</h3>
        <LivePreview title="Disabled">
          <Button disabled>Primary</Button>
          <Button variant="outline" disabled>Outline</Button>
          <Button variant="ghost" disabled>Ghost</Button>
        </LivePreview>
        <CopyCodeBlock
          filename="disabled.tsx"
          code={`<Button disabled>Primary</Button>
<Button variant="outline" disabled>Outline</Button>
<Button variant="ghost" disabled>Ghost</Button>`}
        />
      </div>
    </div>
  )

  return (
    <ComponentDocLayout
      name="Button"
      description="A versatile button component with multiple variants, sizes, and states. Perfect for actions, navigation, and user interactions."
      category="core"
    >
      {buttonExamples}
    </ComponentDocLayout>
  )
}