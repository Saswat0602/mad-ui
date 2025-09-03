"use client"

import React, { useState } from 'react'
import { Switch } from 'mad-ui-components/switch'
import { Label } from 'mad-ui-components/label'
import { ComponentDocLayout, LivePreview, CopyCodeBlock } from '@/components/component-doc-layout'

const SwitchPage = () => {
  const [notifications, setNotifications] = useState(false)
  const [marketing, setMarketing] = useState(true)
  const [analytics, setAnalytics] = useState(false)

  const switchExamples = (
    <div className="space-y-8">
      {/* Default Example */}
      <div className="space-y-4">
        <LivePreview title="Default">
          <Switch />
        </LivePreview>
        <CopyCodeBlock
          filename="switch.tsx"
          code={`<Switch />`}
        />
      </div>

      {/* With Label */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Label</h3>
        <LivePreview title="Switch with Label">
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
        </LivePreview>
        <CopyCodeBlock
          filename="switch-with-label.tsx"
          code={`<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}
        />
      </div>

      {/* Controlled */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Controlled</h3>
        <LivePreview title="Controlled Switch">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email Notifications</Label>
                <div className="text-sm text-muted-foreground">
                  Receive emails about your account activity.
                </div>
              </div>
              <Switch
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Marketing Emails</Label>
                <div className="text-sm text-muted-foreground">
                  Receive emails about new products, features, and more.
                </div>
              </div>
              <Switch
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Analytics</Label>
                <div className="text-sm text-muted-foreground">
                  Help us improve our platform by sharing usage data.
                </div>
              </div>
              <Switch
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
              />
            </div>
          </div>
        </LivePreview>
        <CopyCodeBlock
          filename="controlled-switch.tsx"
          code={`const [notifications, setNotifications] = useState(false)

return (
  <div className="flex items-center justify-between">
    <div className="space-y-0.5">
      <Label>Email Notifications</Label>
      <div className="text-sm text-muted-foreground">
        Receive emails about your account activity.
      </div>
    </div>
    <Switch
      checked={notifications}
      onChange={(e) => setNotifications(e.target.checked)}
    />
  </div>
)`}
        />
      </div>

      {/* Disabled */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Disabled</h3>
        <LivePreview title="Disabled Switch">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Switch disabled />
              <Label>Disabled (Off)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch disabled checked />
              <Label>Disabled (On)</Label>
            </div>
          </div>
        </LivePreview>
        <CopyCodeBlock
          filename="disabled-switch.tsx"
          code={`<Switch disabled />
<Switch disabled checked />`}
        />
      </div>
    </div>
  )

  return (
    <ComponentDocLayout
      name="Switch"
      description="Toggle switch for boolean values"
      category="core"
    >
      {switchExamples}
    </ComponentDocLayout>
  )
}

export default SwitchPage
