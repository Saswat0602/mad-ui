"use client"

import React, { useState } from 'react'
import { Input } from 'mad-ui-components/input'
import { Label } from 'mad-ui-components/label'
import { ComponentDocLayout, LivePreview, CopyCodeBlock } from '@/components/component-doc-layout'
import { 
  Mail,
  Lock,

  Search,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle
} from 'lucide-react'

export default function InputDocPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const inputExamples = (
    <div className="space-y-8">
      {/* Basic Input */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Input</h3>
        <LivePreview title="Basic Input Fields">
          <div className="w-full max-w-sm space-y-4">
            <div className="space-y-2">
              <Label htmlFor="basic">Basic Input</Label>
              <Input id="basic" placeholder="Enter text..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Input</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="disabled">Disabled Input</Label>
              <Input id="disabled" placeholder="Disabled input" disabled />
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="basic-input.tsx"
          code={`<div className="space-y-2">
  <Label htmlFor="basic">Basic Input</Label>
  <Input id="basic" placeholder="Enter text..." />
</div>

<div className="space-y-2">
  <Label htmlFor="email">Email Input</Label>
  <Input id="email" type="email" placeholder="your@email.com" />
</div>

<div className="space-y-2">
  <Label htmlFor="disabled">Disabled Input</Label>
  <Input id="disabled" placeholder="Disabled input" disabled />
</div>`}
        />
      </div>

      {/* Input Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <LivePreview title="Input Sizes">
          <div className="w-full max-w-sm space-y-4">
            <Input size="sm" placeholder="Small input" />
            <Input size="md" placeholder="Medium input" />
            <Input size="lg" placeholder="Large input" />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="input-sizes.tsx"
          code={`<Input size="sm" placeholder="Small input" />
<Input size="md" placeholder="Medium input" />
<Input size="lg" placeholder="Large input" />`}
        />
      </div>

      {/* Input with Icons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Icons</h3>
        <LivePreview title="Input with Icons">
          <div className="w-full max-w-sm space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email-icon">Email with Icon</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email-icon"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password-icon">Password with Toggle</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password-icon"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="pl-10 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="search-icon">Search Input</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search-icon"
                  type="search"
                  placeholder="Search..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="input-with-icons.tsx"
          code={`import { Mail, Lock, Eye, EyeOff, Search } from 'lucide-react'

// Email with icon
<div className="relative">
  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
  <Input
    type="email"
    placeholder="Enter your email"
    className="pl-10"
  />
</div>

// Password with toggle
<div className="relative">
  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
  <Input
    type={showPassword ? "text" : "password"}
    placeholder="Enter your password"
    className="pl-10 pr-10"
  />
  <button
    type="button"
    className="absolute right-3 top-1/2 transform -translate-y-1/2"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
  </button>
</div>

// Search input
<div className="relative">
  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
  <Input
    type="search"
    placeholder="Search..."
    className="pl-10"
  />
</div>`}
        />
      </div>

      {/* Input States */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">States</h3>
        <LivePreview title="Input States">
          <div className="w-full max-w-sm space-y-4">
            <div className="space-y-2">
              <Label htmlFor="default-state">Default</Label>
              <Input id="default-state" placeholder="Default state" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="error-state">Error State</Label>
              <div className="relative">
                <Input
                  id="error-state"
                  placeholder="Error state"
                  className="border-destructive focus:ring-destructive"
                />
                <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-destructive" />
              </div>
              <p className="text-sm text-destructive">This field is required</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="success-state">Success State</Label>
              <div className="relative">
                <Input
                  id="success-state"
                  placeholder="Success state"
                  className="border-success focus:ring-success"
                  defaultValue="valid@email.com"
                />
                <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-success" />
              </div>
              <p className="text-sm text-success">Email is valid</p>
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="input-states.tsx"
          code={`// Error state
<div className="space-y-2">
  <Label htmlFor="error">Error State</Label>
  <div className="relative">
    <Input
      id="error"
      placeholder="Error state"
      className="border-destructive focus:ring-destructive"
    />
    <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-destructive" />
  </div>
  <p className="text-sm text-destructive">This field is required</p>
</div>

// Success state
<div className="space-y-2">
  <Label htmlFor="success">Success State</Label>
  <div className="relative">
    <Input
      id="success"
      placeholder="Success state"
      className="border-success focus:ring-success"
      defaultValue="valid@email.com"
    />
    <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-success" />
  </div>
  <p className="text-sm text-success">Email is valid</p>
</div>`}
        />
      </div>

      {/* Custom Styling */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Styling</h3>
        <LivePreview title="Custom Styled Inputs">
          <div className="w-full max-w-sm space-y-4">
            <Input
              placeholder="Rounded input"
              className="rounded-full"
            />
            <Input
              placeholder="Large rounded input"
              className="rounded-2xl py-4 text-lg"
            />
            <Input
              placeholder="Custom colors"
              className="border-primary focus:ring-primary bg-primary/5"
            />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="custom-styling.tsx"
          code={`<Input
  placeholder="Rounded input"
  className="rounded-full"
/>

<Input
  placeholder="Large rounded input"
  className="rounded-2xl py-4 text-lg"
/>

<Input
  placeholder="Custom colors"
  className="border-primary focus:ring-primary bg-primary/5"
/>`}
        />
      </div>
    </div>
  )

  return (
    <ComponentDocLayout
      name="Input"
      description="A flexible input component for various input types with support for icons, validation states, and custom styling."
      category="core"
      complexity="Simple"
    >
      {inputExamples}
    </ComponentDocLayout>
  )
}
