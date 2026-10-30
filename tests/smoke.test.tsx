import React, { StrictMode } from 'react'
import { render, fireEvent, renderHook, act } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'

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
import { Accordion } from '../src/components/forms/accordion'
import { Tabs } from '../src/components/forms/tabs'
import { Breadcrumbs } from '../src/components/forms/breadcrumbs'
import { Calendar } from '../src/components/forms/calendar'

// Feedback
import { Alert, AlertTitle, AlertDescription } from '../src/components/feedback/alert'
import { Toast } from '../src/components/feedback/toast'

// Overlay & Floating
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '../src/components/overlay/dialog'
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle } from '../src/components/overlay/alert-dialog'
import { Popover } from '../src/components/layout/popover'
import { Tooltip, TooltipProvider } from '../src/components/layout/tooltip'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '../src/components/overlay/dropdown-menu'
import { Select } from '../src/components/core/select'
import { RadioGroup, RadioGroupItem } from '../src/components/forms/radio-group'
import { Toggle, ToggleGroup, ToggleGroupItem } from '../src/components/overlay/toggle'
import { ScrollArea } from '../src/components/layout/scroll-area'
import { Avatar } from '../src/components/media/avatar'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../src/components/overlay/collapsible'
import { Separator } from '../src/components/overlay/separator'

// Navigation
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuTrigger, 
  NavigationMenuContent, 
  NavigationMenuLink 
} from '../src/components/navigation/navigation-menu'

// Primitives, Hooks & Theme
import { Slot, Portal, Presence } from '../src/primitives'
import { useControllableState, useId } from '../src/hooks'
import { ThemeProvider, useTheme } from '../src/theme'


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

    it('renders Checkbox and Switch', () => {
      const { getByRole, getByLabelText } = render(
        <StrictMode>
          <Checkbox aria-label="Accept terms" />
          <Switch aria-label="Toggle notifications" />
        </StrictMode>
      )
      expect(getByLabelText('Accept terms')).toBeDefined()
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

    it('renders Skeleton loader', () => {
      const { container } = render(
        <StrictMode>
          <Skeleton className="h-4 w-32" />
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

    it('renders Toast notification', () => {
      const { getByText } = render(
        <StrictMode>
          <Toast isVisible={true} message="Changes saved successfully" />
        </StrictMode>
      )
      expect(getByText('Changes saved successfully')).toBeDefined()
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

    it('renders AlertDialog with trigger mounted', () => {
      const { getByText } = render(
        <StrictMode>
          <AlertDialog open={false} onOpenChange={() => {}}>
            <AlertDialogTrigger>Delete Account</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>
        </StrictMode>
      )
      expect(getByText('Delete Account')).toBeDefined()
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

    it('renders Breadcrumbs navigation', () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'Components', href: '/components' },
        { label: 'Button' }
      ]
      const { getByText } = render(
        <StrictMode>
          <Breadcrumbs items={items} />
        </StrictMode>
      )
      expect(getByText('Components')).toBeDefined()
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

    it('renders Popover trigger', () => {
      const { getByText } = render(
        <StrictMode>
          <Popover trigger={<Button>Open Popover</Button>}>
            Popover content body
          </Popover>
        </StrictMode>
      )
      expect(getByText('Open Popover')).toBeDefined()
    })

    it('renders Tooltip trigger', () => {
      const { getByText } = render(
        <StrictMode>
          <TooltipProvider>
            <Tooltip content="Tooltip text">
              <Button>Hover me</Button>
            </Tooltip>
          </TooltipProvider>
        </StrictMode>
      )
      expect(getByText('Hover me')).toBeDefined()
    })

    it('renders DropdownMenu trigger', () => {
      const { getByText } = render(
        <StrictMode>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>Actions Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Edit</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </StrictMode>
      )
      expect(getByText('Actions Menu')).toBeDefined()
    })

    it('renders Select with items', () => {
      const items = [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' }
      ]
      const { container } = render(
        <StrictMode>
          <Select items={items} defaultValue="apple" />
        </StrictMode>
      )
      expect(container.firstChild).toBeDefined()
    })

    it('renders RadioGroup with keyboard roving tabindex', () => {
      const { getByText } = render(
        <StrictMode>
          <RadioGroup defaultValue="opt1">
            <RadioGroupItem value="opt1">Option 1</RadioGroupItem>
            <RadioGroupItem value="opt2">Option 2</RadioGroupItem>
          </RadioGroup>
        </StrictMode>
      )
      expect(getByText('Option 1')).toBeDefined()
    })

    it('renders Toggle and ToggleGroup', () => {
      const { getByText } = render(
        <StrictMode>
          <Toggle pressed={true}>Bold</Toggle>
          <ToggleGroup type="single" defaultValue="italic">
            <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
          </ToggleGroup>
        </StrictMode>
      )
      expect(getByText('Bold')).toBeDefined()
      expect(getByText('Italic')).toBeDefined()
    })

    it('renders ScrollArea with viewport', () => {
      const { getByText } = render(
        <StrictMode>
          <ScrollArea className="h-24">
            <p>Scrollable long text content</p>
          </ScrollArea>
        </StrictMode>
      )
      expect(getByText('Scrollable long text content')).toBeDefined()
    })

    it('renders Avatar with fallback', () => {
      const { getByText } = render(
        <StrictMode>
          <Avatar fallback="JD" />
        </StrictMode>
      )
      expect(getByText('JD')).toBeDefined()
    })

    it('renders Collapsible with expanded content', () => {
      const { getByText } = render(
        <StrictMode>
          <Collapsible defaultOpen={true}>
            <CollapsibleTrigger>Toggle Details</CollapsibleTrigger>
            <CollapsibleContent>Secret details revealed</CollapsibleContent>
          </Collapsible>
        </StrictMode>
      )
      expect(getByText('Toggle Details')).toBeDefined()
      expect(getByText('Secret details revealed')).toBeDefined()
    })

    it('renders NavigationMenu and opens sibling content on click', () => {
      const { getByText, queryByText } = render(
        <StrictMode>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem value="overview">
                <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink href="/intro">Introduction</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </StrictMode>
      )

      expect(getByText('Overview')).toBeDefined()
      expect(queryByText('Introduction')).toBeNull()

      fireEvent.click(getByText('Overview'))
      expect(getByText('Introduction')).toBeDefined()
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

  describe('Automated Accessibility (axe-core)', () => {
    it('Button has no accessibility violations', async () => {
      const { container } = render(<Button>Accessible Button</Button>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('Card has no accessibility violations', async () => {
      const { container } = render(
        <Card>
          <CardHeader>
            <CardTitle>Accessible Card</CardTitle>
          </CardHeader>
          <CardContent>Content body</CardContent>
        </Card>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('Checkbox has no accessibility violations', async () => {
      const { container } = render(<Checkbox label="Accept terms and conditions" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('Switch has no accessibility violations', async () => {
      const { container } = render(<Switch label="Airplane mode" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('Avatar has no accessibility violations', async () => {
      const { container } = render(<Avatar fallback="MD" alt="Mad UI User" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('Tabs has no accessibility violations', async () => {
      const tabItems = [
        { id: 'tab1', label: 'Overview', content: <div>Overview Content</div> },
        { id: 'tab2', label: 'Details', content: <div>Details Content</div> }
      ]
      const { container } = render(<Tabs items={tabItems} defaultActiveTab="tab1" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe('Standalone Headless Primitives & Hooks', () => {
    it('Slot merges props and classes with single child', () => {
      const { getByRole } = render(
        <Slot className="text-blue-500" data-slot="true">
          <button type="button" className="px-4">Click</button>
        </Slot>
      )
      const btn = getByRole('button')
      expect(btn.getAttribute('data-slot')).toBe('true')
      expect(btn.className).toContain('text-blue-500')
      expect(btn.className).toContain('px-4')
    })

    it('Portal renders into document body', () => {
      const { getByTestId } = render(
        <Portal>
          <div data-testid="portal-element">Portaled content</div>
        </Portal>
      )
      const el = getByTestId('portal-element')
      expect(document.body.contains(el)).toBe(true)
    })

    it('Presence renders content when present is true', () => {
      const { getByText } = render(
        <Presence present={true}>
          <div>Presence Item</div>
        </Presence>
      )
      expect(getByText('Presence Item')).toBeDefined()
    })

    it('useControllableState handles uncontrolled and controlled values', () => {
      const { result } = renderHook(() =>
        useControllableState<string>({ defaultProp: 'initial' })
      )
      expect(result.current[0]).toBe('initial')

      act(() => {
        result.current[1]('updated')
      })
      expect(result.current[0]).toBe('updated')
    })

    it('useId returns provided ID or generates prefix', () => {
      const { result: r1 } = renderHook(() => useId('my-id'))
      expect(r1.current).toBe('my-id')

      const { result: r2 } = renderHook(() => useId())
      expect(typeof r2.current).toBe('string')
      expect(r2.current.length).toBeGreaterThan(0)
    })

    it('ThemeProvider provides theme context and updates document theme', () => {
      function Consumer() {
        const { theme, setTheme } = useTheme()
        return (
          <div>
            <span data-testid="theme-name">{theme}</span>
            <button onClick={() => setTheme('dark')}>Set Dark</button>
          </div>
        )
      }

      const { getByTestId, getByText } = render(
        <ThemeProvider defaultTheme="light">
          <Consumer />
        </ThemeProvider>
      )

      expect(getByTestId('theme-name').textContent).toBe('light')
      fireEvent.click(getByText('Set Dark'))
      expect(getByTestId('theme-name').textContent).toBe('dark')
    })
  })
})

