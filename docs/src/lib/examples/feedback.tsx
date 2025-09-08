import React from 'react'
import { Alert, Toast } from 'mad-ui-components'

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
      <Alert type="error">
        <p>Error alert message.</p>
      </Alert>
      <Alert type="success">
        <p>Success alert message.</p>
      </Alert>
      <Alert type="warning">
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
          <Alert type="error">
            <p>Error alert message.</p>
          </Alert>
          <Alert type="success">
            <p>Success alert message.</p>
          </Alert>
          <Alert type="warning">
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
  const [toasts, setToasts] = useState([])
  
  const showToast = (message: string, type: 'success' | 'error' | 'warning' | 'info' = 'success') => {
    const newToast = {
      id: Date.now().toString(),
      title: message,
      type
    }
    setToasts(prev => [...prev, newToast])
  }

  const dismissToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }

  return (
    <div>
      <button onClick={() => showToast('Success message!', 'success')}>
        Show Success
      </button>
      <Sonner toasts={toasts} onDismiss={dismissToast} />
    </div>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <button 
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
            onClick={() => console.log('Show Success')}
          >
            Show Success
          </button>
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
    <Toast message="This is a toast message" type="success" />
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Toast message="This is a toast message" type="success" />
        </div>
      )
    }
  ]
}
