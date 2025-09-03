"use client"

import React from 'react'
import { ComponentDocLayout } from '@/components/component-doc-layout'

const RatingPage = () => {
  return (
    <ComponentDocLayout
      name="Rating"
      description="Star rating component for feedback"
      category="core"
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

export default RatingPage
