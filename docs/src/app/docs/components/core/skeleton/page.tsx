"use client"

import React, { useState, useEffect } from 'react'
import { Skeleton } from 'mad-ui-components/skeleton'
import { ComponentDocLayout, LivePreview, CopyCodeBlock } from '@/components/component-doc-layout'

export default function SkeletonDocPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const skeletonExamples = (
    <div className="space-y-8">
      {/* Basic Skeleton */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Skeleton</h3>
        <LivePreview title="Basic Skeleton Usage">
          <div className="w-full max-w-sm space-y-4">
            <Skeleton />
            <Skeleton width="75%" />
            <Skeleton width="50%" />
            <Skeleton width="25%" />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="basic-skeleton.tsx"
          code={`<Skeleton />
<Skeleton width="75%" />
<Skeleton width="50%" />
<Skeleton width="25%" />`}
        />
      </div>

      {/* Skeleton Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Variants</h3>
        <LivePreview title="Skeleton Variants">
          <div className="w-full max-w-sm space-y-4">
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width="100%" height={60} />
            <Skeleton variant="rounded" width="100%" height={40} />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="skeleton-variants.tsx"
          code={`<Skeleton variant="text" width="100%" />
<Skeleton variant="circular" width={40} height={40} />
<Skeleton variant="rectangular" width="100%" height={60} />
<Skeleton variant="rounded" width="100%" height={40} />`}
        />
      </div>

      {/* Skeleton Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <LivePreview title="Skeleton Sizes">
          <div className="w-full max-w-sm space-y-4">
            <Skeleton size="xs" width="100%" />
            <Skeleton size="sm" width="100%" />
            <Skeleton size="md" width="100%" />
            <Skeleton size="lg" width="100%" />
            <Skeleton size="xl" width="100%" />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="skeleton-sizes.tsx"
          code={`<Skeleton size="xs" width="100%" />
<Skeleton size="sm" width="100%" />
<Skeleton size="md" width="100%" />
<Skeleton size="lg" width="100%" />
<Skeleton size="xl" width="100%" />`}
        />
      </div>

      {/* Skeleton Animations */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Animations</h3>
        <LivePreview title="Skeleton Animations">
          <div className="w-full max-w-sm space-y-4">
            <Skeleton animation="pulse" width="100%" />
            <Skeleton animation="wave" width="100%" />
            <Skeleton animation="none" width="100%" />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="skeleton-animations.tsx"
          code={`<Skeleton animation="pulse" width="100%" />
<Skeleton animation="wave" width="100%" />
<Skeleton animation="none" width="100%" />`}
        />
      </div>

      {/* Multiple Lines */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Multiple Lines</h3>
        <LivePreview title="Skeleton with Multiple Lines">
          <div className="w-full max-w-sm space-y-4">
            <Skeleton lines={3} />
            <Skeleton lines={5} spacing="tight" />
            <Skeleton lines={4} spacing="loose" />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="skeleton-lines.tsx"
          code={`<Skeleton lines={3} />
<Skeleton lines={5} spacing="tight" />
<Skeleton lines={4} spacing="loose" />`}
        />
      </div>

      {/* Card Skeleton */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Card Skeleton</h3>
        <LivePreview title="Card Loading Skeleton">
          <div className="w-full max-w-sm space-y-4">
            <div className="p-4 border rounded-lg space-y-3">
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton width="100%" />
              <Skeleton width="80%" />
              <Skeleton width="60%" />
            </div>
            
            <div className="p-4 border rounded-lg space-y-3">
              <Skeleton variant="rectangular" width="100%" height={120} />
              <Skeleton width="100%" />
              <Skeleton width="75%" />
              <Skeleton width="50%" />
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="card-skeleton.tsx"
          code={`<div className="p-4 border rounded-lg space-y-3">
  <Skeleton variant="circular" width={40} height={40} />
  <Skeleton width="100%" />
  <Skeleton width="80%" />
  <Skeleton width="60%" />
</div>

<div className="p-4 border rounded-lg space-y-3">
  <Skeleton variant="rectangular" width="100%" height={120} />
  <Skeleton width="100%" />
  <Skeleton width="75%" />
  <Skeleton width="50%" />
</div>`}
        />
      </div>

      {/* Loading State Example */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Loading State Example</h3>
        <LivePreview title="Loading State with Skeleton">
          <div className="w-full max-w-md space-y-4">
            {isLoading ? (
              <div className="p-6 border rounded-lg space-y-4">
                <div className="flex items-center space-x-3">
                  <Skeleton variant="circular" width={48} height={48} />
                  <div className="space-y-2 flex-1">
                    <Skeleton width="60%" />
                    <Skeleton width="40%" />
                  </div>
                </div>
                <Skeleton width="100%" />
                <Skeleton width="90%" />
                <Skeleton width="80%" />
                <div className="flex space-x-2">
                  <Skeleton width="80px" height={32} />
                  <Skeleton width="100px" height={32} />
                </div>
              </div>
            ) : (
              <div className="p-6 border rounded-lg space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div>
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Software Engineer</p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  This is the actual content that loads after the skeleton animation completes.
                  The skeleton provides a smooth loading experience for users.
                </p>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm">
                    Follow
                  </button>
                  <button className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md text-sm">
                    Message
                  </button>
                </div>
              </div>
            )}
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="loading-state.tsx"
          code={`const [isLoading, setIsLoading] = useState(true)

{isLoading ? (
  <div className="p-6 border rounded-lg space-y-4">
    <div className="flex items-center space-x-3">
      <Skeleton variant="circular" width={48} height={48} />
      <div className="space-y-2 flex-1">
        <Skeleton width="60%" />
        <Skeleton width="40%" />
      </div>
    </div>
    <Skeleton width="100%" />
    <Skeleton width="90%" />
    <Skeleton width="80%" />
    <div className="flex space-x-2">
      <Skeleton width="80px" height={32} />
      <Skeleton width="100px" height={32} />
    </div>
  </div>
) : (
  <div className="p-6 border rounded-lg space-y-4">
    {/* Actual content */}
  </div>
)}`}
        />
      </div>

      {/* Custom Styling */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Styling</h3>
        <LivePreview title="Custom Styled Skeletons">
          <div className="w-full max-w-sm space-y-4">
            <Skeleton 
              width="100%" 
              color="#10b981"
              backgroundColor="#d1fae5"
            />
            
            <Skeleton 
              width="100%" 
              color="#8b5cf6"
              backgroundColor="#ede9fe"
            />
            
            <Skeleton 
              width="100%" 
              color="#f59e0b"
              backgroundColor="#fef3c7"
            />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="custom-styling.tsx"
          code={`<Skeleton 
  width="100%" 
  color="#10b981"
  backgroundColor="#d1fae5"
/>

<Skeleton 
  width="100%" 
  color="#8b5cf6"
  backgroundColor="#ede9fe"
/>

<Skeleton 
  width="100%" 
  color="#f59e0b"
  backgroundColor="#fef3c7"
/>`}
        />
      </div>
    </div>
  )

  return (
    <ComponentDocLayout
      name="Skeleton"
      description="A loading placeholder component that shows a shimmer effect while content is loading. Perfect for improving perceived performance and user experience."
      category="core"
    >
      {skeletonExamples}
    </ComponentDocLayout>
  )
}