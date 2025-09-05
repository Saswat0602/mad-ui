"use client"

import React, { useState } from 'react'
import { Checkbox } from 'mad-ui-components/checkbox'
import { ComponentDocLayout, LivePreview, CopyCodeBlock } from '@/components/component-doc-layout'

export default function CheckboxDocPage() {
  const [basicChecked, setBasicChecked] = useState(false)
  const [preferences, setPreferences] = useState({
    email: false,
    sms: true,
    push: false
  })
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [indeterminateState, setIndeterminateState] = useState(false)

  const handlePreferenceChange = (key: string, checked: boolean) => {
    setPreferences(prev => ({ ...prev, [key]: checked }))
  }

  const checkboxExamples = (
    <div className="space-y-8">
      {/* Basic Checkbox */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Checkbox</h3>
        <LivePreview title="Basic Checkbox Usage">
          <div className="w-full max-w-sm space-y-4">
            <Checkbox 
              label="Basic checkbox" 
              checked={basicChecked}
              onChange={(e) => setBasicChecked(e.target.checked)}
            />
            <Checkbox label="Unchecked checkbox" />
            <Checkbox label="Checked checkbox" defaultChecked />
            <Checkbox label="Disabled checkbox" disabled />
            <Checkbox label="Disabled checked" disabled defaultChecked />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="basic-checkbox.tsx"
          code={`<Checkbox label="Basic checkbox" />
<Checkbox label="Unchecked checkbox" />
<Checkbox label="Checked checkbox" defaultChecked />
<Checkbox label="Disabled checkbox" disabled />
<Checkbox label="Disabled checked" disabled defaultChecked />`}
        />
      </div>

      {/* Checkbox Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <LivePreview title="Checkbox Sizes">
          <div className="w-full max-w-sm space-y-4">
            <Checkbox size="sm" label="Small checkbox" />
            <Checkbox size="md" label="Medium checkbox" />
            <Checkbox size="lg" label="Large checkbox" />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="checkbox-sizes.tsx"
          code={`<Checkbox size="sm" label="Small checkbox" />
<Checkbox size="md" label="Medium checkbox" />
<Checkbox size="lg" label="Large checkbox" />`}
        />
      </div>

      {/* Checkbox States */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">States</h3>
        <LivePreview title="Checkbox States">
          <div className="w-full max-w-sm space-y-4">
            <Checkbox label="Default state" />
            <Checkbox label="Error state" error="This field is required" />
            <Checkbox label="Success state" success helperText="All good!" />
            <Checkbox label="With helper text" helperText="This is helpful information" />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="checkbox-states.tsx"
          code={`<Checkbox label="Default state" />
<Checkbox label="Error state" error="This field is required" />
<Checkbox label="Success state" success helperText="All good!" />
<Checkbox label="With helper text" helperText="This is helpful information" />`}
        />
      </div>

      {/* Indeterminate State */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Indeterminate State</h3>
        <LivePreview title="Indeterminate Checkbox">
          <div className="w-full max-w-sm space-y-4">
            <Checkbox 
              label="Select All" 
              indeterminate={indeterminateState}
              checked={preferences.email && preferences.sms && preferences.push}
              onChange={(e) => {
                const checked = e.target.checked
                setPreferences({ email: checked, sms: checked, push: checked })
                setIndeterminateState(false)
              }}
            />
            <div className="ml-6 space-y-2">
              <Checkbox 
                label="Email notifications" 
                checked={preferences.email}
                onChange={(e) => {
                  const newPreferences = { ...preferences, email: e.target.checked }
                  setPreferences(newPreferences)
                  const allChecked = Object.values(newPreferences).every(Boolean)
                  const someChecked = Object.values(newPreferences).some(Boolean)
                  setIndeterminateState(someChecked && !allChecked)
                }}
              />
              <Checkbox 
                label="SMS notifications" 
                checked={preferences.sms}
                onChange={(e) => {
                  const newPreferences = { ...preferences, sms: e.target.checked }
                  setPreferences(newPreferences)
                  const allChecked = Object.values(newPreferences).every(Boolean)
                  const someChecked = Object.values(newPreferences).some(Boolean)
                  setIndeterminateState(someChecked && !allChecked)
                }}
              />
              <Checkbox 
                label="Push notifications" 
                checked={preferences.push}
                onChange={(e) => {
                  const newPreferences = { ...preferences, push: e.target.checked }
                  setPreferences(newPreferences)
                  const allChecked = Object.values(newPreferences).every(Boolean)
                  const someChecked = Object.values(newPreferences).some(Boolean)
                  setIndeterminateState(someChecked && !allChecked)
                }}
              />
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="indeterminate-checkbox.tsx"
          code={`const [preferences, setPreferences] = useState({
  email: false,
  sms: true,
  push: false
})
const [indeterminateState, setIndeterminateState] = useState(false)

<Checkbox 
  label="Select All" 
  indeterminate={indeterminateState}
  checked={preferences.email && preferences.sms && preferences.push}
  onChange={(e) => {
    const checked = e.target.checked
    setPreferences({ email: checked, sms: checked, push: checked })
    setIndeterminateState(false)
  }}
/>
<div className="ml-6 space-y-2">
  <Checkbox 
    label="Email notifications" 
    checked={preferences.email}
    onChange={(e) => {
      const newPreferences = { ...preferences, email: e.target.checked }
      setPreferences(newPreferences)
      const allChecked = Object.values(newPreferences).every(Boolean)
      const someChecked = Object.values(newPreferences).some(Boolean)
      setIndeterminateState(someChecked && !allChecked)
    }}
  />
  {/* ... more checkboxes */}
</div>`}
        />
      </div>

      {/* Form Integration */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Form Integration</h3>
        <LivePreview title="Checkbox in Forms">
          <div className="w-full max-w-md space-y-6 p-6 border rounded-lg">
            <h2 className="text-xl font-bold mb-4">User Preferences</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Communication Preferences</h3>
                <div className="space-y-2">
                  <Checkbox 
                    label="Email notifications" 
                    checked={preferences.email}
                    onChange={(e) => handlePreferenceChange('email', e.target.checked)}
                  />
                  <Checkbox 
                    label="SMS notifications" 
                    checked={preferences.sms}
                    onChange={(e) => handlePreferenceChange('sms', e.target.checked)}
                  />
                  <Checkbox 
                    label="Push notifications" 
                    checked={preferences.push}
                    onChange={(e) => handlePreferenceChange('push', e.target.checked)}
                  />
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Account Settings</h3>
                <div className="space-y-2">
                  <Checkbox label="Two-factor authentication" />
                  <Checkbox label="Public profile" />
                  <Checkbox label="Show online status" />
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <Checkbox 
                  label="I agree to the Terms of Service and Privacy Policy" 
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  error={!termsAccepted ? "You must accept the terms to continue" : undefined}
                />
              </div>
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="form-integration.tsx"
          code={`<div className="w-full max-w-md space-y-6 p-6 border rounded-lg">
  <h2 className="text-xl font-bold mb-4">User Preferences</h2>
  
  <div className="space-y-4">
    <div>
      <h3 className="font-semibold mb-2">Communication Preferences</h3>
      <div className="space-y-2">
        <Checkbox 
          label="Email notifications" 
          checked={preferences.email}
          onChange={(e) => handlePreferenceChange('email', e.target.checked)}
        />
        <Checkbox 
          label="SMS notifications" 
          checked={preferences.sms}
          onChange={(e) => handlePreferenceChange('sms', e.target.checked)}
        />
        <Checkbox 
          label="Push notifications" 
          checked={preferences.push}
          onChange={(e) => handlePreferenceChange('push', e.target.checked)}
        />
      </div>
    </div>
    
    <div>
      <h3 className="font-semibold mb-2">Account Settings</h3>
      <div className="space-y-2">
        <Checkbox label="Two-factor authentication" />
        <Checkbox label="Public profile" />
        <Checkbox label="Show online status" />
      </div>
    </div>
    
    <div className="pt-4 border-t">
      <Checkbox 
        label="I agree to the Terms of Service and Privacy Policy" 
        checked={termsAccepted}
        onChange={(e) => setTermsAccepted(e.target.checked)}
        error={!termsAccepted ? "You must accept the terms to continue" : undefined}
      />
    </div>
  </div>
</div>`}
        />
      </div>

      {/* Custom Styling */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Styling</h3>
        <LivePreview title="Custom Styled Checkboxes">
          <div className="w-full max-w-sm space-y-4">
            <Checkbox 
              label="Custom styled checkbox" 
              className="text-blue-600"
            />
            <Checkbox 
              label="Large checkbox with custom spacing" 
              size="lg"
              className="text-green-600"
            />
            <Checkbox 
              label="Checkbox with custom colors" 
              className="text-purple-600"
            />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="custom-styling.tsx"
          code={`<Checkbox 
  label="Custom styled checkbox" 
  className="text-blue-600"
/>
<Checkbox 
  label="Large checkbox with custom spacing" 
  size="lg"
  className="text-green-600"
/>
<Checkbox 
  label="Checkbox with custom colors" 
  className="text-purple-600"
/>`}
        />
      </div>
    </div>
  )

  return (
    <ComponentDocLayout
      name="Checkbox"
      description="A boolean input control component with support for multiple states, sizes, and validation. Perfect for forms, preferences, and toggles."
      category="core"
    >
      {checkboxExamples}
    </ComponentDocLayout>
  )
}