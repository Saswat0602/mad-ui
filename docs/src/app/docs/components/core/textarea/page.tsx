"use client"

import React, { useState } from 'react'
import { Textarea } from 'mad-ui-components/textarea'
import { ComponentDocLayout, LivePreview, CopyCodeBlock } from '@/components/component-doc-layout'

export default function TextareaDocPage() {
  const [comment, setComment] = useState('')
  const [feedback, setFeedback] = useState('')

  const textareaExamples = (
    <div className="space-y-8">
      {/* Basic Textarea */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Textarea</h3>
        <LivePreview title="Basic Textarea Usage">
          <div className="w-full max-w-sm space-y-4">
            <Textarea 
              label="Comments"
              placeholder="Enter your comments..."
              rows={3}
            />
            
            <Textarea 
              label="Description"
              placeholder="Enter description..."
              rows={4}
            />
            
            <Textarea 
              label="Disabled textarea"
              placeholder="This is disabled..."
              disabled
            />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="basic-textarea.tsx"
          code={`<Textarea 
  label="Comments"
  placeholder="Enter your comments..."
  rows={3}
/>

<Textarea 
  label="Description"
  placeholder="Enter description..."
  rows={4}
/>

<Textarea 
  label="Disabled textarea"
  placeholder="This is disabled..."
  disabled
/>`}
        />
      </div>

      {/* Textarea Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <LivePreview title="Textarea Sizes">
          <div className="w-full max-w-sm space-y-4">
            <Textarea 
              size="sm"
              label="Small textarea"
              placeholder="Small size..."
              rows={2}
            />
            
            <Textarea 
              size="md"
              label="Medium textarea"
              placeholder="Medium size..."
              rows={3}
            />
            
            <Textarea 
              size="lg"
              label="Large textarea"
              placeholder="Large size..."
              rows={4}
            />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="textarea-sizes.tsx"
          code={`<Textarea 
  size="sm"
  label="Small textarea"
  placeholder="Small size..."
  rows={2}
/>

<Textarea 
  size="md"
  label="Medium textarea"
  placeholder="Medium size..."
  rows={3}
/>

<Textarea 
  size="lg"
  label="Large textarea"
  placeholder="Large size..."
  rows={4}
/>`}
        />
      </div>

      {/* Textarea States */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">States</h3>
        <LivePreview title="Textarea States">
          <div className="w-full max-w-sm space-y-4">
            <Textarea 
              label="Default state"
              placeholder="Enter text..."
              rows={3}
            />
            
            <Textarea 
              label="Error state"
              placeholder="Enter text..."
              rows={3}
              error="This field is required"
            />
            
            <Textarea 
              label="Success state"
              placeholder="Enter text..."
              rows={3}
              success
              helperText="Text looks good!"
            />
            
            <Textarea 
              label="With helper text"
              placeholder="Enter text..."
              rows={3}
              helperText="This is helpful information"
            />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="textarea-states.tsx"
          code={`<Textarea 
  label="Default state"
  placeholder="Enter text..."
  rows={3}
/>

<Textarea 
  label="Error state"
  placeholder="Enter text..."
  rows={3}
  error="This field is required"
/>

<Textarea 
  label="Success state"
  placeholder="Enter text..."
  rows={3}
  success
  helperText="Text looks good!"
/>

<Textarea 
  label="With helper text"
  placeholder="Enter text..."
  rows={3}
  helperText="This is helpful information"
/>`}
        />
      </div>

      {/* Resize Options */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Resize Options</h3>
        <LivePreview title="Textarea Resize Options">
          <div className="w-full max-w-sm space-y-4">
            <Textarea 
              label="No resize"
              placeholder="Cannot resize..."
              rows={3}
              resize="none"
            />
            
            <Textarea 
              label="Vertical resize"
              placeholder="Resize vertically..."
              rows={3}
              resize="vertical"
            />
            
            <Textarea 
              label="Horizontal resize"
              placeholder="Resize horizontally..."
              rows={3}
              resize="horizontal"
            />
            
            <Textarea 
              label="Both directions"
              placeholder="Resize both ways..."
              rows={3}
              resize="both"
            />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="textarea-resize.tsx"
          code={`<Textarea 
  label="No resize"
  placeholder="Cannot resize..."
  rows={3}
  resize="none"
/>

<Textarea 
  label="Vertical resize"
  placeholder="Resize vertically..."
  rows={3}
  resize="vertical"
/>

<Textarea 
  label="Horizontal resize"
  placeholder="Resize horizontally..."
  rows={3}
  resize="horizontal"
/>

<Textarea 
  label="Both directions"
  placeholder="Resize both ways..."
  rows={3}
  resize="both"
/>`}
        />
      </div>

      {/* Form Integration */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Form Integration</h3>
        <LivePreview title="Textarea in Forms">
          <div className="w-full max-w-md space-y-6 p-6 border rounded-lg">
            <h2 className="text-xl font-bold mb-4">Contact Form</h2>
            
            <div className="space-y-4">
              <Textarea 
                label="Message"
                placeholder="Enter your message..."
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              
              <Textarea 
                label="Additional Comments"
                placeholder="Any additional information..."
                rows={3}
                helperText="Optional field"
              />
              
              <Textarea 
                label="Feedback"
                placeholder="Share your feedback..."
                rows={3}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </div>
            
            <div className="pt-4 border-t">
              <div className="text-sm text-slate-600 dark:text-slate-400">
                <p>Message length: {comment.length} characters</p>
                <p>Feedback length: {feedback.length} characters</p>
              </div>
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="form-integration.tsx"
          code={`<div className="w-full max-w-md space-y-6 p-6 border rounded-lg">
  <h2 className="text-xl font-bold mb-4">Contact Form</h2>
  
  <div className="space-y-4">
    <Textarea 
      label="Message"
      placeholder="Enter your message..."
      rows={4}
      value={comment}
      onChange={(e) => setComment(e.target.value)}
    />
    
    <Textarea 
      label="Additional Comments"
      placeholder="Any additional information..."
      rows={3}
      helperText="Optional field"
    />
    
    <Textarea 
      label="Feedback"
      placeholder="Share your feedback..."
      rows={3}
      value={feedback}
      onChange={(e) => setFeedback(e.target.value)}
    />
  </div>
  
  <div className="pt-4 border-t">
    <div className="text-sm text-slate-600 dark:text-slate-400">
      <p>Message length: {comment.length} characters</p>
      <p>Feedback length: {feedback.length} characters</p>
    </div>
  </div>
</div>`}
        />
      </div>

      {/* Custom Styling */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Styling</h3>
        <LivePreview title="Custom Styled Textareas">
          <div className="w-full max-w-sm space-y-4">
            <Textarea 
              label="Custom styled textarea"
              placeholder="Custom styling..."
              rows={3}
              className="border-blue-500 focus:ring-blue-500"
            />
            
            <Textarea 
              label="Large custom textarea"
              placeholder="Large custom styling..."
              rows={4}
              size="lg"
              className="border-green-500 focus:ring-green-500"
            />
            
            <Textarea 
              label="Custom colored textarea"
              placeholder="Custom colors..."
              rows={3}
              className="border-purple-500 focus:ring-purple-500"
            />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="custom-styling.tsx"
          code={`<Textarea 
  label="Custom styled textarea"
  placeholder="Custom styling..."
  rows={3}
  className="border-blue-500 focus:ring-blue-500"
/>

<Textarea 
  label="Large custom textarea"
  placeholder="Large custom styling..."
  rows={4}
  size="lg"
  className="border-green-500 focus:ring-green-500"
/>

<Textarea 
  label="Custom colored textarea"
  placeholder="Custom colors..."
  rows={3}
  className="border-purple-500 focus:ring-purple-500"
/>`}
        />
      </div>
    </div>
  )

  return (
    <ComponentDocLayout
      name="Textarea"
      description="A multi-line text input component for longer text content. Perfect for comments, descriptions, and detailed user input."
      category="core"
    >
      {textareaExamples}
    </ComponentDocLayout>
  )
}