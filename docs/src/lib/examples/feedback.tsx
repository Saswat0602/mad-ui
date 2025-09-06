import React from 'react'
import { Alert, Sonner, Toast } from 'mad-ui-components'

export interface ComponentExample {
  title: string
  description?: string
  code: string
  preview: React.ReactNode
}

export const feedbackExamples: Record<string, ComponentExample[]> = {
  alert: [
    {
      title: 'Basic Alert',
      description: 'A simple alert component',
      code: `import { Alert } from 'mad-ui-components'

export function AlertExample() {
  return (
    <Alert>
      <p>This is an alert message.</p>
    </Alert>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Alert>
            <p>This is an alert message.</p>
          </Alert>
        </div>
      )
    },
    {
      title: 'Alert Variants',
      description: 'Different alert variants',
      code: `import { Alert } from 'mad-ui-components'

export function AlertVariants() {
  return (
    <div className="space-y-4">
      <Alert variant="default">
        <p>Default alert message.</p>
      </Alert>
      <Alert variant="destructive">
        <p>Destructive alert message.</p>
      </Alert>
      <Alert variant="success">
        <p>Success alert message.</p>
      </Alert>
      <Alert variant="warning">
        <p>Warning alert message.</p>
      </Alert>
    </div>
  )
}`,
      preview: (
        <div className="w-full max-w-sm space-y-4">
          <Alert variant="default">
            <p>Default alert message.</p>
          </Alert>
          <Alert variant="destructive">
            <p>Destructive alert message.</p>
          </Alert>
          <Alert variant="success">
            <p>Success alert message.</p>
          </Alert>
          <Alert variant="warning">
            <p>Warning alert message.</p>
          </Alert>
        </div>
      )
    }
  ],

  sonner: [
    {
      title: 'Basic Sonner',
      description: 'A simple sonner toast component',
      code: `import { Sonner } from 'mad-ui-components'

export function SonnerExample() {
  return (
    <Sonner>
      <button onClick={() => Sonner.success('Success message!')}>
        Show Success
      </button>
    </Sonner>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Sonner>
            <button 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
              onClick={() => Sonner.success('Success message!')}
            >
              Show Success
            </button>
          </Sonner>
        </div>
      )
    }
  ],

  toast: [
    {
      title: 'Basic Toast',
      description: 'A simple toast component',
      code: `import { Toast } from 'mad-ui-components'

export function ToastExample() {
  return (
    <Toast>
      <button onClick={() => Toast.success('Success!')}>
        Show Toast
      </button>
    </Toast>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Toast>
            <button 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
              onClick={() => Toast.success('Success!')}
            >
              Show Toast
            </button>
          </Toast>
        </div>
      )
    }
  ]
}
