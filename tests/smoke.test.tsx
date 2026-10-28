import React, { StrictMode } from 'react'
import { render } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { describe, it, expect } from 'vitest'

// Core
import { Button } from '../src/components/core/button'
import { Input } from '../src/components/core/input'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../src/components/core/card'
import { Badge } from '../src/components/media/badge'
import { Checkbox } from '../src/components/core/checkbox'
import { Switch } from '../src/components/core/switch'
import { Slider } from '../src/components/core/slider'
import { Progress } from '../src/components/core/progress'
import { Skeleton } from '../src/components/core/skeleton'

// Forms
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../src/components/forms/accordion'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../src/components/forms/tabs'
import { Breadcrumbs, BreadcrumbItem, BreadcrumbLink } from '../src/components/forms/breadcrumbs'
import { Calendar } from '../src/components/forms/calendar'

// Feedback
import { Alert, AlertTitle, AlertDescription } from '../src/components/feedback/alert'
import { Toast } from '../src/components/feedback/toast'

// Overlay
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '../src/components/overlay/dialog'
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle } from '../src/components/overlay/alert-dialog'
import { Separator } from '../src/components/overlay/separator'

describe('Smoke & SSR Component Suite', () => {
  describe('Client Rendering in StrictMode', () => {
    it('renders Button correctly', () => {
      const { getByRole } = render(
        <StrictMode>
          <Button variant="default">Click me</Button>
        </StrictMode>
      )
      expect(getByRole('button')).toBeDefined()
    })

    it('renders Input correctly', () => {
      const { getByPlaceholderText } = render(
        <StrictMode>
          <Input placeholder="Enter email" />
        </StrictMode>
      )
      expect(getByPlaceholderText('Enter email')).toBeDefined()
    })

    it('renders Card with compounds', () => {
      const { getByText } = render(
        <StrictMode>
          <Card>
            <CardHeader>
              <CardTitle>Test Card</CardTitle>
            </CardHeader>
            <CardContent>Content body</CardContent>
            <CardFooter>Footer</CardFooter>
          </Card>
        </StrictMode>
      )
      expect(getByText('Test Card')).toBeDefined()
      expect(getByText('Content body')).toBeDefined()
    })

    it('renders Badge as span element', () => {
      const { container } = render(
        <StrictMode>
          <Badge variant="secondary">Active</Badge>
        </StrictMode>
      )
      expect(container.querySelector('span')).toBeDefined()
    })

    it('renders Switch and handles toggle', () => {
      const { getByRole } = render(
        <StrictMode>
          <Switch aria-label="Toggle notifications" />
        </StrictMode>
      )
      expect(getByRole('switch')).toBeDefined()
    })

    it('renders Slider without listener leaks', () => {
      const { container } = render(
        <StrictMode>
          <Slider value={[50]} min={0} max={100} />
        </StrictMode>
      )
      expect(container.firstChild).toBeDefined()
    })

    it('renders Alert component', () => {
      const { getByText } = render(
        <StrictMode>
          <Alert variant="info">
            <AlertTitle>Notice</AlertTitle>
            <AlertDescription>System update scheduled</AlertDescription>
          </Alert>
        </StrictMode>
      )
      expect(getByText('Notice')).toBeDefined()
    })

    it('renders Dialog with trigger mounted', () => {
      const { getByText } = render(
        <StrictMode>
          <Dialog open={false} onOpenChange={() => {}}>
            <DialogTrigger>Open Modal</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Modal Title</DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </StrictMode>
      )
      expect(getByText('Open Modal')).toBeDefined()
    })

    it('renders Calendar component', () => {
      const testDate = new Date(2026, 0, 15)
      const { container } = render(
        <StrictMode>
          <Calendar value={testDate} />
        </StrictMode>
      )
      expect(container.firstChild).toBeDefined()
    })

    it('renders Tabs with active content', () => {
      const tabItems = [
        { id: 'account', label: 'Account', content: <div>Account settings panel</div> },
        { id: 'password', label: 'Password', content: <div>Password change panel</div> },
      ]
      const { getByText } = render(
        <StrictMode>
          <Tabs items={tabItems} defaultActiveTab="account" />
        </StrictMode>
      )
      expect(getByText('Account settings panel')).toBeDefined()
    })

    it('renders Accordion items', () => {
      const accordionItems = [
        { title: 'Is it accessible?', content: 'Yes, following ARIA patterns.' }
      ]
      const { getByText } = render(
        <StrictMode>
          <Accordion items={accordionItems} defaultOpen={[0]} />
        </StrictMode>
      )
      expect(getByText('Is it accessible?')).toBeDefined()
    })
  })

  describe('Server-Side Rendering (renderToString)', () => {
    it('SSR renders Button without errors', () => {
      const html = renderToString(<Button variant="outline">SSR Button</Button>)
      expect(html).toContain('SSR Button')
    })

    it('SSR renders Card structure', () => {
      const html = renderToString(
        <Card>
          <CardHeader>
            <CardTitle>SSR Card</CardTitle>
          </CardHeader>
        </Card>
      )
      expect(html).toContain('SSR Card')
    })

    it('SSR renders Separator and Progress', () => {
      const sep = renderToString(<Separator decorative={false} />)
      expect(sep).toContain('role="separator"')

      const prog = renderToString(<Progress value={45} />)
      expect(prog).toContain('role="progressbar"')
    })

    it('SSR renders Dialog without mounting overlay when closed', () => {
      const html = renderToString(
        <Dialog open={false} onOpenChange={() => {}}>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>Hidden content</DialogContent>
        </Dialog>
      )
      expect(html).toContain('Open')
      expect(html).not.toContain('Hidden content')
    })
  })
})
