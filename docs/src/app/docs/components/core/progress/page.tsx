"use client"

import React, { useState, useEffect } from 'react'
import { Progress } from 'mad-ui-components/progress'
import { Button } from 'mad-ui-components/button'
import { ComponentDocLayout, LivePreview, CopyCodeBlock } from '@/components/component-doc-layout'

const ProgressPage = () => {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  const progressExamples = (
    <div className="space-y-8">
      {/* Default Example */}
      <div className="space-y-4">
        <LivePreview title="Default">
          <Progress value={33} className="w-[60%]" />
        </LivePreview>
        <CopyCodeBlock
          filename="progress.tsx"
          code={`<Progress value={33} className="w-[60%]" />`}
        />
      </div>

      {/* Different Values */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Different Values</h3>
        <LivePreview title="Progress Values">
          <div className="space-y-4 w-full">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>25%</span>
                <span>25/100</span>
              </div>
              <Progress value={25} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>50%</span>
                <span>50/100</span>
              </div>
              <Progress value={50} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>75%</span>
                <span>75/100</span>
              </div>
              <Progress value={75} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>100%</span>
                <span>100/100</span>
              </div>
              <Progress value={100} />
            </div>
          </div>
        </LivePreview>
        <CopyCodeBlock
          filename="progress-values.tsx"
          code={`<Progress value={25} />
<Progress value={50} />
<Progress value={75} />
<Progress value={100} />`}
        />
      </div>

      {/* Animated Progress */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Animated</h3>
        <LivePreview title="Animated Progress">
          <div className="space-y-4 w-full">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Loading...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} />
            </div>
            <Button
              onClick={() => {
                setProgress(13)
                const timer = setTimeout(() => setProgress(66), 500)
                return () => clearTimeout(timer)
              }}
              variant="outline"
              size="sm"
            >
              Reset Animation
            </Button>
          </div>
        </LivePreview>
        <CopyCodeBlock
          filename="animated-progress.tsx"
          code={`const [progress, setProgress] = useState(13)

useEffect(() => {
  const timer = setTimeout(() => setProgress(66), 500)
  return () => clearTimeout(timer)
}, [])

return (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span>Loading...</span>
      <span>{progress}%</span>
    </div>
    <Progress value={progress} />
  </div>
)`}
        />
      </div>

      {/* With Labels */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Labels</h3>
        <LivePreview title="Progress with Labels">
          <div className="space-y-4 w-full">
            <Progress value={40} showLabel label="Download Progress" />
            <Progress value={75} showValue label="Upload Progress" />
            <Progress value={60} showLabel showValue label="Processing" />
          </div>
        </LivePreview>
        <CopyCodeBlock
          filename="progress-with-labels.tsx"
          code={`<Progress value={40} showLabel label="Download Progress" />
<Progress value={75} showValue label="Upload Progress" />
<Progress value={60} showLabel showValue label="Processing" />`}
        />
      </div>
    </div>
  )

  return (
    <ComponentDocLayout
      name="Progress"
      description="Progress indicator for showing completion status"
      category="core"
    >
      {progressExamples}
    </ComponentDocLayout>
  )
}

export default ProgressPage
