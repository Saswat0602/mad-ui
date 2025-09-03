"use client"

import React from 'react'
import { ComponentDocLayout } from '@/components/component-doc-layout'

const SidebarPage = () => {
  return (
    <ComponentDocLayout
      name="Sidebar"
      description="Collapsible sidebar navigation"
      category="layout"
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

export default SidebarPage
