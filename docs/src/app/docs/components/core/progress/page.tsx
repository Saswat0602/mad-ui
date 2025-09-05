"use client"

import React, { useState, useEffect } from 'react'
import { Progress } from 'mad-ui-components/progress'
import { ComponentDocLayout, LivePreview, CopyCodeBlock } from '@/components/component-doc-layout'

export default function ProgressDocPage() {
  const [uploadProgress, setUploadProgress] = useState(0)
  const [downloadProgress, setDownloadProgress] = useState(0)

  // Simulate progress updates
  useEffect(() => {
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) return 0
        return prev + Math.random() * 10
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) return 0
        return prev + Math.random() * 15
      })
    }, 300)

    return () => clearInterval(interval)
  }, [])

  const progressExamples = (
    <div className="space-y-8">
      {/* Basic Progress */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Progress</h3>
        <LivePreview title="Basic Progress Bars">
          <div className="w-full max-w-sm space-y-4">
            <Progress value={25} />
            <Progress value={50} />
            <Progress value={75} />
            <Progress value={100} />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="basic-progress.tsx"
          code={`<Progress value={25} />
<Progress value={50} />
<Progress value={75} />
<Progress value={100} />`}
        />
      </div>

      {/* Progress Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <LivePreview title="Progress Bar Sizes">
          <div className="w-full max-w-sm space-y-4">
            <Progress value={60} size="sm" />
            <Progress value={60} size="md" />
            <Progress value={60} size="lg" />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="progress-sizes.tsx"
          code={`<Progress value={60} size="sm" />
<Progress value={60} size="md" />
<Progress value={60} size="lg" />`}
        />
      </div>

      {/* Progress Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Variants</h3>
        <LivePreview title="Progress Bar Variants">
          <div className="w-full max-w-sm space-y-4">
            <Progress value={60} variant="default" />
            <Progress value={60} variant="success" />
            <Progress value={60} variant="warning" />
            <Progress value={60} variant="error" />
            <Progress value={60} variant="info" />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="progress-variants.tsx"
          code={`<Progress value={60} variant="default" />
<Progress value={60} variant="success" />
<Progress value={60} variant="warning" />
<Progress value={60} variant="error" />
<Progress value={60} variant="info" />`}
        />
      </div>

      {/* Progress with Labels */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Labels and Values</h3>
        <LivePreview title="Progress with Labels">
          <div className="w-full max-w-sm space-y-4">
            <Progress 
              value={75} 
              label="Project Progress" 
              showValue 
            />
            <Progress 
              value={45} 
              label="Storage Used" 
              showValue 
              showLabel 
            />
            <Progress 
              value={90} 
              label="Task Completion" 
              showValue 
              showLabel 
            />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="progress-with-labels.tsx"
          code={`<Progress 
  value={75} 
  label="Project Progress" 
  showValue 
/>
<Progress 
  value={45} 
  label="Storage Used" 
  showValue 
  showLabel 
/>
<Progress 
  value={90} 
  label="Task Completion" 
  showValue 
  showLabel 
/>`}
        />
      </div>

      {/* Animated Progress */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Animated Progress</h3>
        <LivePreview title="Animated Progress Bars">
          <div className="w-full max-w-sm space-y-4">
            <Progress 
              value={uploadProgress} 
              label="File Upload" 
              showValue 
              animated 
            />
            <Progress 
              value={downloadProgress} 
              label="Download Progress" 
              showValue 
              animated 
              striped 
            />
            <Progress 
              value={85} 
              label="Processing" 
              showValue 
              animated 
              striped 
            />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="animated-progress.tsx"
          code={`const [uploadProgress, setUploadProgress] = useState(0)

<Progress 
  value={uploadProgress} 
  label="File Upload" 
  showValue 
  animated 
/>
<Progress 
  value={downloadProgress} 
  label="Download Progress" 
  showValue 
  animated 
  striped 
/>
<Progress 
  value={85} 
  label="Processing" 
  showValue 
  animated 
  striped 
/>`}
        />
      </div>

      {/* File Upload Progress */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">File Upload Progress</h3>
        <LivePreview title="File Upload Progress">
          <div className="w-full max-w-md space-y-6 p-6 border rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Upload Files</h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">document.pdf</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {Math.round(uploadProgress)}%
                  </span>
                </div>
                <Progress 
                  value={uploadProgress} 
                  variant="default"
                  animated
                  showValue={false}
                />
                <p className="text-xs text-slate-500">2.4 MB of 5.2 MB</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">image.jpg</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">100%</span>
                </div>
                <Progress 
                  value={100} 
                  variant="success"
                  showValue={false}
                />
                <p className="text-xs text-green-600">Upload complete</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">video.mp4</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">45%</span>
                </div>
                <Progress 
                  value={45} 
                  variant="warning"
                  showValue={false}
                />
                <p className="text-xs text-slate-500">12.8 MB of 28.4 MB</p>
              </div>
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="file-upload-progress.tsx"
          code={`<div className="w-full max-w-md space-y-6 p-6 border rounded-lg">
  <h2 className="text-lg font-semibold mb-4">Upload Files</h2>
  
  <div className="space-y-4">
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">document.pdf</span>
        <span className="text-sm text-slate-600 dark:text-slate-400">
          {Math.round(uploadProgress)}%
        </span>
      </div>
      <Progress 
        value={uploadProgress} 
        variant="default"
        animated
        showValue={false}
      />
      <p className="text-xs text-slate-500">2.4 MB of 5.2 MB</p>
    </div>
    
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">image.jpg</span>
        <span className="text-sm text-slate-600 dark:text-slate-400">100%</span>
      </div>
      <Progress 
        value={100} 
        variant="success"
        showValue={false}
      />
      <p className="text-xs text-green-600">Upload complete</p>
    </div>
  </div>
</div>`}
        />
      </div>

      {/* Dashboard Progress */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Dashboard Progress</h3>
        <LivePreview title="Dashboard Progress Cards">
          <div className="w-full max-w-md space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">Storage Usage</h3>
                <span className="text-sm text-slate-600 dark:text-slate-400">7.2 GB of 10 GB</span>
              </div>
              <Progress value={72} variant="warning" showValue={false} />
              <p className="text-xs text-slate-500 mt-1">72% used</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">Monthly Goal</h3>
                <span className="text-sm text-slate-600 dark:text-slate-400">$2,400 of $3,000</span>
              </div>
              <Progress value={80} variant="success" showValue={false} />
              <p className="text-xs text-green-600 mt-1">80% complete</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">CPU Usage</h3>
                <span className="text-sm text-slate-600 dark:text-slate-400">45%</span>
              </div>
              <Progress value={45} variant="info" showValue={false} />
              <p className="text-xs text-slate-500 mt-1">Normal usage</p>
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="dashboard-progress.tsx"
          code={`<div className="p-4 border rounded-lg">
  <div className="flex justify-between items-center mb-2">
    <h3 className="font-semibold">Storage Usage</h3>
    <span className="text-sm text-slate-600 dark:text-slate-400">7.2 GB of 10 GB</span>
  </div>
  <Progress value={72} variant="warning" showValue={false} />
  <p className="text-xs text-slate-500 mt-1">72% used</p>
</div>

<div className="p-4 border rounded-lg">
  <div className="flex justify-between items-center mb-2">
    <h3 className="font-semibold">Monthly Goal</h3>
    <span className="text-sm text-slate-600 dark:text-slate-400">$2,400 of $3,000</span>
  </div>
  <Progress value={80} variant="success" showValue={false} />
  <p className="text-xs text-green-600 mt-1">80% complete</p>
</div>

<div className="p-4 border rounded-lg">
  <div className="flex justify-between items-center mb-2">
    <h3 className="font-semibold">CPU Usage</h3>
    <span className="text-sm text-slate-600 dark:text-slate-400">45%</span>
  </div>
  <Progress value={45} variant="info" showValue={false} />
  <p className="text-xs text-slate-500 mt-1">Normal usage</p>
</div>`}
        />
      </div>

      {/* Custom Styling */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Styling</h3>
        <LivePreview title="Custom Styled Progress Bars">
          <div className="w-full max-w-sm space-y-4">
            <Progress 
              value={60} 
              color="#10b981"
              showValue={false}
            />
            <Progress 
              value={80} 
              color="#8b5cf6"
              showValue={false}
            />
            <Progress 
              value={40} 
              color="#f59e0b"
              showValue={false}
            />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="custom-styling.tsx"
          code={`<Progress 
  value={60} 
  color="#10b981"
  showValue={false}
/>
<Progress 
  value={80} 
  color="#8b5cf6"
  showValue={false}
/>
<Progress 
  value={40} 
  color="#f59e0b"
  showValue={false}
/>`}
        />
      </div>
    </div>
  )

  return (
    <ComponentDocLayout
      name="Progress"
      description="A progress indicator component for showing completion status, loading states, and task progress. Perfect for uploads, downloads, and process tracking."
      category="core"
    >
      {progressExamples}
    </ComponentDocLayout>
  )
}