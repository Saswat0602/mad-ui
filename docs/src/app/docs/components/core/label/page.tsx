"use client"

import React from 'react'
import { Label } from 'mad-ui-components/label'
import { Input } from 'mad-ui-components/input'
import { Checkbox } from 'mad-ui-components/checkbox'
import { Radio } from 'mad-ui-components/radio'
import { Switch } from 'mad-ui-components/switch'
import { ComponentDocLayout, LivePreview, CopyCodeBlock } from '@/components/component-doc-layout'

export default function LabelDocPage() {
  const labelExamples = (
    <div className="space-y-8">
      {/* Basic Label */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Label</h3>
        <LivePreview title="Basic Label Usage">
          <div className="w-full max-w-sm space-y-4">
            <div className="space-y-2">
              <Label htmlFor="basic-input">Basic Input Label</Label>
              <Input id="basic-input" placeholder="Enter text..." />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email-input">Email Address</Label>
              <Input id="email-input" type="email" placeholder="your@email.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password-input">Password</Label>
              <Input id="password-input" type="password" placeholder="Enter password" />
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="basic-label.tsx"
          code={`<div className="space-y-2">
  <Label htmlFor="basic-input">Basic Input Label</Label>
  <Input id="basic-input" placeholder="Enter text..." />
</div>

<div className="space-y-2">
  <Label htmlFor="email-input">Email Address</Label>
  <Input id="email-input" type="email" placeholder="your@email.com" />
</div>

<div className="space-y-2">
  <Label htmlFor="password-input">Password</Label>
  <Input id="password-input" type="password" placeholder="Enter password" />
</div>`}
        />
      </div>

      {/* Label with Form Controls */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Form Controls</h3>
        <LivePreview title="Labels with Different Form Controls">
          <div className="w-full max-w-sm space-y-6">
            {/* Checkbox */}
            <div className="space-y-2">
              <Label>Preferences</Label>
              <div className="space-y-2">
                <Checkbox label="Email notifications" />
                <Checkbox label="SMS notifications" />
                <Checkbox label="Push notifications" />
              </div>
            </div>
            
            {/* Radio */}
            <div className="space-y-2">
              <Label>Payment Method</Label>
              <div className="space-y-2">
                <Radio name="payment" label="Credit Card" />
                <Radio name="payment" label="PayPal" />
                <Radio name="payment" label="Bank Transfer" />
              </div>
            </div>
            
            {/* Switch */}
            <div className="space-y-2">
              <Label>Settings</Label>
              <div className="space-y-2">
                <Switch label="Dark Mode" />
                <Switch label="Auto-save" />
                <Switch label="Notifications" />
              </div>
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="label-with-controls.tsx"
          code={`{/* Checkbox */}
<div className="space-y-2">
  <Label>Preferences</Label>
  <div className="space-y-2">
    <Checkbox label="Email notifications" />
    <Checkbox label="SMS notifications" />
    <Checkbox label="Push notifications" />
  </div>
</div>

{/* Radio */}
<div className="space-y-2">
  <Label>Payment Method</Label>
  <div className="space-y-2">
    <Radio name="payment" label="Credit Card" />
    <Radio name="payment" label="PayPal" />
    <Radio name="payment" label="Bank Transfer" />
  </div>
</div>

{/* Switch */}
<div className="space-y-2">
  <Label>Settings</Label>
  <div className="space-y-2">
    <Switch label="Dark Mode" />
    <Switch label="Auto-save" />
    <Switch label="Notifications" />
  </div>
</div>`}
        />
      </div>

      {/* Required Labels */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Required Fields</h3>
        <LivePreview title="Required Field Labels">
          <div className="w-full max-w-sm space-y-4">
            <div className="space-y-2">
              <Label htmlFor="required-name">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input id="required-name" placeholder="Enter your full name" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="required-email">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input id="required-email" type="email" placeholder="your@email.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="required-phone">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input id="required-phone" type="tel" placeholder="+1 (555) 123-4567" />
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="required-labels.tsx"
          code={`<div className="space-y-2">
  <Label htmlFor="required-name">
    Full Name <span className="text-red-500">*</span>
  </Label>
  <Input id="required-name" placeholder="Enter your full name" />
</div>

<div className="space-y-2">
  <Label htmlFor="required-email">
    Email Address <span className="text-red-500">*</span>
  </Label>
  <Input id="required-email" type="email" placeholder="your@email.com" />
</div>

<div className="space-y-2">
  <Label htmlFor="required-phone">
    Phone Number <span className="text-red-500">*</span>
  </Label>
  <Input id="required-phone" type="tel" placeholder="+1 (555) 123-4567" />
</div>`}
        />
      </div>

      {/* Custom Styling */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Styling</h3>
        <LivePreview title="Custom Styled Labels">
          <div className="w-full max-w-sm space-y-4">
            <div className="space-y-2">
              <Label htmlFor="custom-1" className="text-blue-600 font-bold">
                Custom Blue Label
              </Label>
              <Input id="custom-1" placeholder="Blue label input" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="custom-2" className="text-green-600 text-lg">
                Large Green Label
              </Label>
              <Input id="custom-2" placeholder="Green label input" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="custom-3" className="text-purple-600 font-semibold uppercase tracking-wide">
                Purple Uppercase Label
              </Label>
              <Input id="custom-3" placeholder="Purple label input" />
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="custom-labels.tsx"
          code={`<div className="space-y-2">
  <Label htmlFor="custom-1" className="text-blue-600 font-bold">
    Custom Blue Label
  </Label>
  <Input id="custom-1" placeholder="Blue label input" />
</div>

<div className="space-y-2">
  <Label htmlFor="custom-2" className="text-green-600 text-lg">
    Large Green Label
  </Label>
  <Input id="custom-2" placeholder="Green label input" />
</div>

<div className="space-y-2">
  <Label htmlFor="custom-3" className="text-purple-600 font-semibold uppercase tracking-wide">
    Purple Uppercase Label
  </Label>
  <Input id="custom-3" placeholder="Purple label input" />
</div>`}
        />
      </div>

      {/* Form Layout Example */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Form Layout Example</h3>
        <LivePreview title="Complete Form with Labels">
          <div className="w-full max-w-md space-y-6 p-6 border rounded-lg">
            <h2 className="text-xl font-bold mb-4">User Registration</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Doe" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter password" />
            </div>
            
            <div className="space-y-2">
              <Label>Newsletter Subscription</Label>
              <div className="space-y-2">
                <Checkbox label="Subscribe to weekly newsletter" />
                <Checkbox label="Subscribe to product updates" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Account Type</Label>
              <div className="space-y-2">
                <Radio name="account-type" label="Personal" />
                <Radio name="account-type" label="Business" />
              </div>
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="form-layout.tsx"
          code={`<div className="w-full max-w-md space-y-6 p-6 border rounded-lg">
  <h2 className="text-xl font-bold mb-4">User Registration</h2>
  
  <div className="grid grid-cols-2 gap-4">
    <div className="space-y-2">
      <Label htmlFor="first-name">First Name</Label>
      <Input id="first-name" placeholder="John" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="last-name">Last Name</Label>
      <Input id="last-name" placeholder="Doe" />
    </div>
  </div>
  
  <div className="space-y-2">
    <Label htmlFor="email">Email Address</Label>
    <Input id="email" type="email" placeholder="john@example.com" />
  </div>
  
  <div className="space-y-2">
    <Label htmlFor="password">Password</Label>
    <Input id="password" type="password" placeholder="Enter password" />
  </div>
  
  <div className="space-y-2">
    <Label>Newsletter Subscription</Label>
    <div className="space-y-2">
      <Checkbox label="Subscribe to weekly newsletter" />
      <Checkbox label="Subscribe to product updates" />
    </div>
  </div>
  
  <div className="space-y-2">
    <Label>Account Type</Label>
    <div className="space-y-2">
      <Radio name="account-type" label="Personal" />
      <Radio name="account-type" label="Business" />
    </div>
  </div>
</div>`}
        />
      </div>
    </div>
  )

  return (
    <ComponentDocLayout
      name="Label"
      description="Accessible form labels that provide clear identification for form controls. Essential for form accessibility and user experience."
      category="core"
    >
      {labelExamples}
    </ComponentDocLayout>
  )
}