"use client"

import React, { useState } from 'react'
import { Radio } from 'mad-ui-components/radio'
import { ComponentDocLayout, LivePreview, CopyCodeBlock } from '@/components/component-doc-layout'

export default function RadioDocPage() {
  const [selectedPayment, setSelectedPayment] = useState('credit-card')

  const radioExamples = (
    <div className="space-y-8">
      {/* Basic Radio */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Radio</h3>
        <LivePreview title="Basic Radio Usage">
          <div className="w-full max-w-sm space-y-4">
            <Radio name="basic" label="Option 1" />
            <Radio name="basic" label="Option 2" />
            <Radio name="basic" label="Option 3" />
            <Radio name="basic" label="Disabled option" disabled />
            <Radio name="basic" label="Disabled selected" disabled defaultChecked />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="basic-radio.tsx"
          code={`<Radio name="basic" label="Option 1" />
<Radio name="basic" label="Option 2" />
<Radio name="basic" label="Option 3" />
<Radio name="basic" label="Disabled option" disabled />
<Radio name="basic" label="Disabled selected" disabled defaultChecked />`}
        />
      </div>

      {/* Radio Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <LivePreview title="Radio Sizes">
          <div className="w-full max-w-sm space-y-4">
            <Radio name="size-sm" label="Small radio" size="sm" />
            <Radio name="size-md" label="Medium radio" size="md" />
            <Radio name="size-lg" label="Large radio" size="lg" />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="radio-sizes.tsx"
          code={`<Radio name="size-sm" label="Small radio" size="sm" />
<Radio name="size-md" label="Medium radio" size="md" />
<Radio name="size-lg" label="Large radio" size="lg" />`}
        />
      </div>

      {/* Payment Method Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Payment Method Selection</h3>
        <LivePreview title="Payment Method Radio Group">
          <div className="w-full max-w-sm space-y-4">
            <div className="space-y-2">
              <Radio 
                name="payment" 
                label="Credit Card" 
                value="credit-card"
                checked={selectedPayment === 'credit-card'}
                onChange={(e) => setSelectedPayment(e.target.value)}
              />
              <Radio 
                name="payment" 
                label="PayPal" 
                value="paypal"
                checked={selectedPayment === 'paypal'}
                onChange={(e) => setSelectedPayment(e.target.value)}
              />
              <Radio 
                name="payment" 
                label="Bank Transfer" 
                value="bank-transfer"
                checked={selectedPayment === 'bank-transfer'}
                onChange={(e) => setSelectedPayment(e.target.value)}
              />
            </div>
            <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Selected: <span className="font-medium">{selectedPayment}</span>
              </p>
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="payment-selection.tsx"
          code={`const [selectedPayment, setSelectedPayment] = useState('credit-card')

<div className="space-y-2">
  <Radio 
    name="payment" 
    label="Credit Card" 
    value="credit-card"
    checked={selectedPayment === 'credit-card'}
    onChange={(e) => setSelectedPayment(e.target.value)}
  />
  <Radio 
    name="payment" 
    label="PayPal" 
    value="paypal"
    checked={selectedPayment === 'paypal'}
    onChange={(e) => setSelectedPayment(e.target.value)}
  />
  <Radio 
    name="payment" 
    label="Bank Transfer" 
    value="bank-transfer"
    checked={selectedPayment === 'bank-transfer'}
    onChange={(e) => setSelectedPayment(e.target.value)}
  />
</div>`}
        />
      </div>
    </div>
  )

  return (
    <ComponentDocLayout
      name="Radio"
      description="A single selection input control component for choosing one option from a group. Perfect for forms, settings, and configuration options."
      category="core"
    >
      {radioExamples}
    </ComponentDocLayout>
  )
}