"use client"

import React from 'react'
import { ComponentDocLayout } from '@/components/component-doc-layout'

const DrawerPage = () => {
  return (
    <ComponentDocLayout
      name="Drawer"
      description="Slide-out panel"
      category="layout"
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

export default DrawerPage
