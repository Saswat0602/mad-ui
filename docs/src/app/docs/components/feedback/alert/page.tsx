"use client"

import React from 'react'
import { ComponentDocLayout } from '@/components/component-doc-layout'

const AlertPage = () => {
  return (
    <ComponentDocLayout
      name="Alert"
      description="Alert message component"
      category="feedback"
      complexity="Simple"
    >
      <div className="space-y-8">
        <h2 className="text-2xl font-bold">Examples</h2>
        <div className="text-sm text-muted-foreground">
          <p>Live preview and code examples coming soon</p>
        </div>
      </div>
    </ComponentDocLayout>
  )
}

export default AlertPage
