import React, { useState } from 'react'
import { 
  Alert, 
  Toast, 
  Spinner, 
  EmptyState, 
  Banner, 
  Button,
  MessageBubble,
  ReasoningDisclosure,
  ToolCallCard
} from 'mad-ui-components'

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
  ],

  spinner: [
    {
      title: 'Spinner Sizes & Variants',
      description: 'Accessible loading indicator across multiple scales and semantic variants',
      code: `import { Spinner } from 'mad-ui-components'

export function SpinnerExample() {
  return (
    <div className="flex items-center gap-6">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" variant="primary" />
      <Spinner size="lg" variant="secondary" />
      <Spinner size="xl" variant="muted" />
    </div>
  )
}`,
      preview: (
        <div className="flex items-center justify-center gap-6 p-4">
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner size="md" variant="primary" />
          <Spinner size="lg" variant="secondary" />
          <Spinner size="xl" variant="muted" />
        </div>
      )
    }
  ],

  'empty-state': [
    {
      title: 'Dashed Empty State',
      description: 'Zero data placeholder with title, subtext, and action buttons',
      code: `import { EmptyState, Button } from 'mad-ui-components'

export function EmptyStateExample() {
  return (
    <EmptyState
      variant="dashed"
      title="No active deployments"
      description="You haven't deployed any services yet. Get started by connecting a Git repository."
      action={<Button size="sm">Deploy Service</Button>}
    />
  )
}`,
      preview: (
        <div className="w-full max-w-md">
          <EmptyState
            variant="dashed"
            title="No active deployments"
            description="You haven't deployed any services yet. Get started by connecting a Git repository."
            action={<Button size="sm">Deploy Service</Button>}
          />
        </div>
      )
    }
  ],

  banner: [
    {
      title: 'Announcement Banner',
      description: 'Full-width banner for maintenance alerts and system notifications with action link and dismiss button',
      code: `import { Banner, Button } from 'mad-ui-components'

export function BannerExample() {
  return (
    <div className="w-full space-y-4">
      <Banner
        variant="info"
        title="Scheduled Maintenance:"
        dismissible
        action={<Button size="sm" variant="outline">Learn More</Button>}
      >
        API v2 will undergo scheduled maintenance tonight at 02:00 UTC.
      </Banner>

      <Banner
        variant="success"
        title="Release v3.0.0 is live!"
        dismissible
      >
        Check out 71 enterprise components and zero external dependencies.
      </Banner>
    </div>
  )
}`,
      preview: (
        <div className="w-full space-y-3">
          <Banner
            variant="info"
            title="Scheduled Maintenance:"
            dismissible
            action={<Button size="sm" variant="outline" className="h-7 text-xs">Learn More</Button>}
          >
            API v2 will undergo scheduled maintenance tonight at 02:00 UTC.
          </Banner>
          <Banner
            variant="success"
            title="Release v3.0.0 is live!"
            dismissible
          >
            All 75 enterprise components compiled with zero external dependencies.
          </Banner>
        </div>
      )
    }
  ],

  'message-bubble': [
    {
      title: 'AI Chat Message Thread',
      description: 'Conversational message bubbles for user queries and AI assistant answers with markdown/code blocks and copy action',
      code: `import { MessageBubble } from 'mad-ui-components'

export function MessageBubbleExample() {
  return (
    <div className="w-full max-w-xl space-y-4">
      <MessageBubble
        role="user"
        content="How do I configure tree-shaking for individual components in Mad UI?"
        timestamp="Just now"
      />
      
      <MessageBubble
        role="assistant"
        content="You can import directly from individual subpaths like \`mad-ui-components/button\` or \`mad-ui-components/dialog\`. Each component bundle includes its required primitives and hooks automatically with zero overhead."
        timestamp="1s ago"
        copyable
      />
    </div>
  )
}`,
      preview: (
        <div className="w-full max-w-xl space-y-4">
          <MessageBubble
            role="user"
            content="How do I configure tree-shaking for individual components in Mad UI?"
            timestamp="Just now"
          />
          <MessageBubble
            role="assistant"
            content="You can import directly from individual subpaths like `mad-ui-components/button` or `mad-ui-components/dialog`. Each component bundle includes its required primitives and hooks automatically with zero overhead."
            timestamp="1s ago"
            copyable
          />
        </div>
      )
    }
  ],

  'reasoning-disclosure': [
    {
      title: 'AI Reasoning & Chain-of-Thought',
      description: 'Collapsible thinking disclosure displaying internal model reasoning steps, duration badge, and streaming animation',
      code: `import { ReasoningDisclosure } from 'mad-ui-components'
import { useState } from 'react'

export function ReasoningDisclosureExample() {
  const [open, setOpen] = useState(true)

  return (
    <div className="w-full max-w-xl">
      <ReasoningDisclosure
        duration={4.2}
        open={open}
        onOpenChange={setOpen}
      >
        <div className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
          <p>1. Analyzing microservices request trace across us-east-1.</p>
          <p>2. Detected 82ms bottleneck in PostgreSQL connection pool sizing.</p>
          <p>3. Synthesizing recommendations for connection pool scaling.</p>
        </div>
      </ReasoningDisclosure>
    </div>
  )
}`,
      preview: (
        <div className="w-full max-w-xl">
          <ReasoningDisclosure
            duration={4.2}
            defaultOpen={true}
          >
            <div className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 font-mono">
              <p>1. Analyzing microservices request trace across us-east-1.</p>
              <p>2. Detected 82ms bottleneck in PostgreSQL connection pool sizing.</p>
              <p>3. Synthesizing recommendations for connection pool scaling.</p>
            </div>
          </ReasoningDisclosure>
        </div>
      )
    }
  ],

  'tool-call-card': [
    {
      title: 'AI Agent Tool Call Card',
      description: 'Structured execution card for AI agent tool invocations, showing arguments, runtime duration, status badges, and output data',
      code: `import { ToolCallCard } from 'mad-ui-components'

export function ToolCallCardExample() {
  return (
    <div className="w-full max-w-xl space-y-3">
      <ToolCallCard
        toolName="query_telemetry_metrics"
        status="completed"
        duration="142ms"
        args={{
          service: 'auth-gateway',
          metric: 'p99_latency',
          timeRange: '1h'
        }}
        result={{
          p99_latency_ms: 18.4,
          sample_count: 48920,
          status: 'healthy'
        }}
      />

      <ToolCallCard
        toolName="restart_kubernetes_pod"
        status="executing"
        args={{
          cluster: 'prod-us-east',
          pod: 'worker-queue-84df'
        }}
      />
    </div>
  )
}`,
      preview: (
        <div className="w-full max-w-xl space-y-3">
          <ToolCallCard
            toolName="query_telemetry_metrics"
            status="completed"
            duration="142ms"
            args={{
              service: 'auth-gateway',
              metric: 'p99_latency',
              timeRange: '1h'
            }}
            result={{
              p99_latency_ms: 18.4,
              sample_count: 48920,
              status: 'healthy'
            }}
          />
          <ToolCallCard
            toolName="restart_kubernetes_pod"
            status="executing"
            args={{
              cluster: 'prod-us-east',
              pod: 'worker-queue-84df'
            }}
          />
        </div>
      )
    }
  ]
}
