"use client"

import React, { useState } from 'react'
import { Select } from 'mad-ui-components/select'
import { ComponentDocLayout, LivePreview, CopyCodeBlock } from '@/components/component-doc-layout'

export default function SelectDocPage() {
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedSize, setSelectedSize] = useState('')

  const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' }
  ]

  const sizeOptions = [
    { value: 'xs', label: 'Extra Small' },
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
    { value: 'xl', label: 'Extra Large' }
  ]

  const selectExamples = (
    <div className="space-y-8">
      {/* Basic Select */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Select</h3>
        <LivePreview title="Basic Select Usage">
          <div className="w-full max-w-sm space-y-4">
            <Select 
              label="Choose a country"
              placeholder="Select country..."
              options={countryOptions}
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            />
            
            <Select 
              label="Size"
              placeholder="Select size..."
              options={sizeOptions}
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="basic-select.tsx"
          code={`const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' }
]

<Select 
  label="Choose a country"
  placeholder="Select country..."
  options={countryOptions}
  value={selectedCountry}
  onChange={(e) => setSelectedCountry(e.target.value)}
/>`}
        />
      </div>

      {/* Select Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <LivePreview title="Select Sizes">
          <div className="w-full max-w-sm space-y-4">
            <Select 
              size="sm"
              label="Small select"
              placeholder="Select option..."
              options={sizeOptions}
            />
            
            <Select 
              size="md"
              label="Medium select"
              placeholder="Select option..."
              options={sizeOptions}
            />
            
            <Select 
              size="lg"
              label="Large select"
              placeholder="Select option..."
              options={sizeOptions}
            />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="select-sizes.tsx"
          code={`<Select 
  size="sm"
  label="Small select"
  placeholder="Select option..."
  options={sizeOptions}
/>

<Select 
  size="md"
  label="Medium select"
  placeholder="Select option..."
  options={sizeOptions}
/>

<Select 
  size="lg"
  label="Large select"
  placeholder="Select option..."
  options={sizeOptions}
/>`}
        />
      </div>

      {/* Select States */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">States</h3>
        <LivePreview title="Select States">
          <div className="w-full max-w-sm space-y-4">
            <Select 
              label="Default state"
              placeholder="Select option..."
              options={sizeOptions}
            />
            
            <Select 
              label="Error state"
              placeholder="Select option..."
              options={sizeOptions}
              error="This field is required"
            />
            
            <Select 
              label="Success state"
              placeholder="Select option..."
              options={sizeOptions}
              success
              helperText="Selection confirmed"
            />
            
            <Select 
              label="Disabled state"
              placeholder="Select option..."
              options={sizeOptions}
              disabled
            />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="select-states.tsx"
          code={`<Select 
  label="Default state"
  placeholder="Select option..."
  options={sizeOptions}
/>

<Select 
  label="Error state"
  placeholder="Select option..."
  options={sizeOptions}
  error="This field is required"
/>

<Select 
  label="Success state"
  placeholder="Select option..."
  options={sizeOptions}
  success
  helperText="Selection confirmed"
/>

<Select 
  label="Disabled state"
  placeholder="Select option..."
  options={sizeOptions}
  disabled
/>`}
        />
      </div>
    </div>
  )

  return (
    <ComponentDocLayout
      name="Select"
      description="A dropdown selection component for choosing from a list of options. Perfect for forms, settings, and configuration options."
      category="core"
    >
      {selectExamples}
    </ComponentDocLayout>
  )
}