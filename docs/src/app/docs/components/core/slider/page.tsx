"use client"

import React, { useState } from 'react'
import { Slider } from 'mad-ui-components/slider'
import { ComponentDocLayout, LivePreview, CopyCodeBlock } from '@/components/component-doc-layout'

export default function SliderDocPage() {
  const [volume, setVolume] = useState(50)
  const [priceRange, setPriceRange] = useState<[number, number]>([20, 80])
  const [temperature, setTemperature] = useState<[number, number]>([18, 25])

  const sliderExamples = (
    <div className="space-y-8">
      {/* Basic Slider */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Slider</h3>
        <LivePreview title="Basic Slider Usage">
          <div className="w-full max-w-sm space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Volume: {volume}%</label>
              <Slider 
                value={volume}
                onChange={(value) => setVolume(value as number)}
                showValue={false}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Default slider</label>
              <Slider defaultValue={30} />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Disabled slider</label>
              <Slider defaultValue={60} disabled />
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="basic-slider.tsx"
          code={`const [volume, setVolume] = useState(50)

<div className="space-y-2">
  <label className="text-sm font-medium">Volume: {volume}%</label>
  <Slider 
    value={volume}
    onChange={(value) => setVolume(value as number)}
    showValue={false}
  />
</div>

<Slider defaultValue={30} />
<Slider defaultValue={60} disabled />`}
        />
      </div>

      {/* Slider Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <LivePreview title="Slider Sizes">
          <div className="w-full max-w-sm space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Small slider</label>
              <Slider size="sm" defaultValue={40} />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Medium slider</label>
              <Slider size="md" defaultValue={40} />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Large slider</label>
              <Slider size="lg" defaultValue={40} />
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="slider-sizes.tsx"
          code={`<div className="space-y-2">
  <label className="text-sm font-medium">Small slider</label>
  <Slider size="sm" defaultValue={40} />
</div>

<div className="space-y-2">
  <label className="text-sm font-medium">Medium slider</label>
  <Slider size="md" defaultValue={40} />
</div>

<div className="space-y-2">
  <label className="text-sm font-medium">Large slider</label>
  <Slider size="lg" defaultValue={40} />
</div>`}
        />
      </div>

      {/* Range Slider */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Range Slider</h3>
        <LivePreview title="Range Slider">
          <div className="w-full max-w-sm space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <Slider 
                range
                value={priceRange}
                onChange={(value) => setPriceRange(value as [number, number])}
                min={0}
                max={100}
                showValue={false}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Temperature Range</label>
              <Slider 
                range
                value={temperature}
                onChange={(value) => setTemperature(value as [number, number])}
                min={10}
                max={35}
                step={1}
              />
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="range-slider.tsx"
          code={`const [priceRange, setPriceRange] = useState([20, 80])

<div className="space-y-2">
  <label className="text-sm font-medium">
    Price Range: ${priceRange[0]} - ${priceRange[1]}
  </label>
  <Slider 
    range
    value={priceRange}
    onChange={(value) => setPriceRange(value as [number, number])}
    min={0}
    max={100}
    showValue={false}
  />
</div>

<Slider 
  range
  value={temperature}
  onChange={(value) => setTemperature(value as [number, number])}
  min={10}
  max={35}
  step={1}
/>`}
        />
      </div>

      {/* Slider Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Variants</h3>
        <LivePreview title="Slider Variants">
          <div className="w-full max-w-sm space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Default variant</label>
              <Slider variant="default" defaultValue={50} />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Filled variant</label>
              <Slider variant="filled" defaultValue={50} />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Outlined variant</label>
              <Slider variant="outlined" defaultValue={50} />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Minimal variant</label>
              <Slider variant="minimal" defaultValue={50} />
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="slider-variants.tsx"
          code={`<Slider variant="default" defaultValue={50} />
<Slider variant="filled" defaultValue={50} />
<Slider variant="outlined" defaultValue={50} />
<Slider variant="minimal" defaultValue={50} />`}
        />
      </div>

      {/* Audio Controls */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Audio Controls</h3>
        <LivePreview title="Audio Control Sliders">
          <div className="w-full max-w-sm space-y-6 p-6 border rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Audio Settings</h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Master Volume</label>
                  <span className="text-sm text-slate-600 dark:text-slate-400">{volume}%</span>
                </div>
                <Slider 
                  value={volume}
                  onChange={(value) => setVolume(value as number)}
                  showValue={false}
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Bass</label>
                  <span className="text-sm text-slate-600 dark:text-slate-400">75%</span>
                </div>
                <Slider defaultValue={75} showValue={false} />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Treble</label>
                  <span className="text-sm text-slate-600 dark:text-slate-400">60%</span>
                </div>
                <Slider defaultValue={60} showValue={false} />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Balance</label>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Center</span>
                </div>
                <Slider defaultValue={50} min={0} max={100} showValue={false} />
              </div>
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="audio-controls.tsx"
          code={`<div className="w-full max-w-sm space-y-6 p-6 border rounded-lg">
  <h2 className="text-lg font-semibold mb-4">Audio Settings</h2>
  
  <div className="space-y-4">
    <div className="space-y-2">
      <div className="flex justify-between">
        <label className="text-sm font-medium">Master Volume</label>
        <span className="text-sm text-slate-600 dark:text-slate-400">{volume}%</span>
      </div>
      <Slider 
        value={volume}
        onChange={(value) => setVolume(value as number)}
        showValue={false}
      />
    </div>
    
    <div className="space-y-2">
      <div className="flex justify-between">
        <label className="text-sm font-medium">Bass</label>
        <span className="text-sm text-slate-600 dark:text-slate-400">75%</span>
      </div>
      <Slider defaultValue={75} showValue={false} />
    </div>
    
    <div className="space-y-2">
      <div className="flex justify-between">
        <label className="text-sm font-medium">Treble</label>
        <span className="text-sm text-slate-600 dark:text-slate-400">60%</span>
      </div>
      <Slider defaultValue={60} showValue={false} />
    </div>
  </div>
</div>`}
        />
      </div>

      {/* Custom Styling */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Styling</h3>
        <LivePreview title="Custom Styled Sliders">
          <div className="w-full max-w-sm space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Custom colored slider</label>
              <Slider 
                defaultValue={40} 
                color="#10b981"
                showValue={false}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Large custom slider</label>
              <Slider 
                size="lg"
                defaultValue={60} 
                color="#8b5cf6"
                showValue={false}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Custom range slider</label>
              <Slider 
                range
                defaultValue={[25, 75]} 
                color="#f59e0b"
                showValue={false}
              />
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="custom-styling.tsx"
          code={`<Slider 
  defaultValue={40} 
  color="#10b981"
  showValue={false}
/>

<Slider 
  size="lg"
  defaultValue={60} 
  color="#8b5cf6"
  showValue={false}
/>

<Slider 
  range
  defaultValue={[25, 75]} 
  color="#f59e0b"
  showValue={false}
/>`}
        />
      </div>
    </div>
  )

  return (
    <ComponentDocLayout
      name="Slider"
      description="A range input component for selecting numeric values. Perfect for volume controls, price ranges, and any numeric input needs."
      category="core"
    >
      {sliderExamples}
    </ComponentDocLayout>
  )
}