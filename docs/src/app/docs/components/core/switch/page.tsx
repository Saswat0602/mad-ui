"use client"

import React, { useState } from 'react'
import { Switch } from 'mad-ui-components/switch'
import { ComponentDocLayout, LivePreview, CopyCodeBlock } from '@/components/component-doc-layout'

export default function SwitchDocPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    marketing: false
  })
  const [darkMode, setDarkMode] = useState(false)
  const [autoSave, setAutoSave] = useState(true)

  const switchExamples = (
    <div className="space-y-8">
      {/* Basic Switch */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Switch</h3>
        <LivePreview title="Basic Switch Usage">
          <div className="w-full max-w-sm space-y-4">
            <Switch label="Basic switch" />
            <Switch label="Switch with default checked" defaultChecked />
            <Switch label="Disabled switch" disabled />
            <Switch label="Disabled checked" disabled defaultChecked />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="basic-switch.tsx"
          code={`<Switch label="Basic switch" />
<Switch label="Switch with default checked" defaultChecked />
<Switch label="Disabled switch" disabled />
<Switch label="Disabled checked" disabled defaultChecked />`}
        />
      </div>

      {/* Switch Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <LivePreview title="Switch Sizes">
          <div className="w-full max-w-sm space-y-4">
            <Switch size="sm" label="Small switch" />
            <Switch size="md" label="Medium switch" />
            <Switch size="lg" label="Large switch" />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="switch-sizes.tsx"
          code={`<Switch size="sm" label="Small switch" />
<Switch size="md" label="Medium switch" />
<Switch size="lg" label="Large switch" />`}
        />
      </div>

      {/* Switch States */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">States</h3>
        <LivePreview title="Switch States">
          <div className="w-full max-w-sm space-y-4">
            <Switch label="Default state" />
            <Switch label="Error state" error="This setting is required" />
            <Switch label="Success state" success helperText="Setting applied successfully" />
            <Switch label="With helper text" helperText="This setting controls app behavior" />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="switch-states.tsx"
          code={`<Switch label="Default state" />
<Switch label="Error state" error="This setting is required" />
<Switch label="Success state" success helperText="Setting applied successfully" />
<Switch label="With helper text" helperText="This setting controls app behavior" />`}
        />
      </div>

      {/* Notification Settings */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Notification Settings</h3>
        <LivePreview title="Notification Settings Panel">
          <div className="w-full max-w-sm space-y-4">
            <div className="space-y-4">
              <Switch 
                label="Email Notifications" 
                checked={notifications.email}
                onChange={(e) => setNotifications(prev => ({ ...prev, email: e.target.checked }))}
              />
              <Switch 
                label="SMS Notifications" 
                checked={notifications.sms}
                onChange={(e) => setNotifications(prev => ({ ...prev, sms: e.target.checked }))}
              />
              <Switch 
                label="Push Notifications" 
                checked={notifications.push}
                onChange={(e) => setNotifications(prev => ({ ...prev, push: e.target.checked }))}
              />
              <Switch 
                label="Marketing Emails" 
                checked={notifications.marketing}
                onChange={(e) => setNotifications(prev => ({ ...prev, marketing: e.target.checked }))}
              />
            </div>
            <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Active notifications: {Object.values(notifications).filter(Boolean).length} of {Object.keys(notifications).length}
              </p>
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="notification-settings.tsx"
          code={`const [notifications, setNotifications] = useState({
  email: true,
  sms: false,
  push: true,
  marketing: false
})

<div className="space-y-4">
  <Switch 
    label="Email Notifications" 
    checked={notifications.email}
    onChange={(e) => setNotifications(prev => ({ ...prev, email: e.target.checked }))}
  />
  <Switch 
    label="SMS Notifications" 
    checked={notifications.sms}
    onChange={(e) => setNotifications(prev => ({ ...prev, sms: e.target.checked }))}
  />
  <Switch 
    label="Push Notifications" 
    checked={notifications.push}
    onChange={(e) => setNotifications(prev => ({ ...prev, push: e.target.checked }))}
  />
  <Switch 
    label="Marketing Emails" 
    checked={notifications.marketing}
    onChange={(e) => setNotifications(prev => ({ ...prev, marketing: e.target.checked }))}
  />
</div>`}
        />
      </div>

      {/* App Settings */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">App Settings</h3>
        <LivePreview title="Application Settings">
          <div className="w-full max-w-md space-y-6 p-6 border rounded-lg">
            <h2 className="text-xl font-bold mb-4">Settings</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Dark Mode</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Switch to dark theme</p>
                </div>
                <Switch 
                  checked={darkMode}
                  onChange={(e) => setDarkMode(e.target.checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Auto-save</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Automatically save changes</p>
                </div>
                <Switch 
                  checked={autoSave}
                  onChange={(e) => setAutoSave(e.target.checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Two-factor Authentication</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Add extra security to your account</p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Public Profile</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Make your profile visible to others</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="app-settings.tsx"
          code={`<div className="w-full max-w-md space-y-6 p-6 border rounded-lg">
  <h2 className="text-xl font-bold mb-4">Settings</h2>
  
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-semibold">Dark Mode</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">Switch to dark theme</p>
      </div>
      <Switch 
        checked={darkMode}
        onChange={(e) => setDarkMode(e.target.checked)}
      />
    </div>
    
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-semibold">Auto-save</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">Automatically save changes</p>
      </div>
      <Switch 
        checked={autoSave}
        onChange={(e) => setAutoSave(e.target.checked)}
      />
    </div>
    
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-semibold">Two-factor Authentication</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">Add extra security to your account</p>
      </div>
      <Switch />
    </div>
  </div>
</div>`}
        />
      </div>

      {/* Custom Styling */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Styling</h3>
        <LivePreview title="Custom Styled Switches">
          <div className="w-full max-w-sm space-y-4">
            <Switch 
              label="Custom styled switch" 
              className="text-blue-600"
            />
            <Switch 
              label="Large switch with custom spacing" 
              size="lg"
              className="text-green-600"
            />
            <Switch 
              label="Switch with custom colors" 
              className="text-purple-600"
            />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="custom-styling.tsx"
          code={`<Switch 
  label="Custom styled switch" 
  className="text-blue-600"
/>
<Switch 
  label="Large switch with custom spacing" 
  size="lg"
  className="text-green-600"
/>
<Switch 
  label="Switch with custom colors" 
  className="text-purple-600"
/>`}
        />
      </div>
    </div>
  )

  return (
    <ComponentDocLayout
      name="Switch"
      description="A toggle control component for boolean values. Perfect for settings, preferences, and on/off states."
      category="core"
    >
      {switchExamples}
    </ComponentDocLayout>
  )
}