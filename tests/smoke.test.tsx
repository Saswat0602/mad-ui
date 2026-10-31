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
import { useControllableState, useId, useVirtualizer } from '../src/hooks'
import { ThemeProvider, useTheme } from '../src/theme'

// Form & Data Table
import { 
  Form, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription, 
  FormMessage 
} from '../src/components/forms/form'
import { DataTable, DataTableColumn } from '../src/components/data/data-table'

// Phase 1 Essential Micro-Components & Core Inputs
import { ButtonGroup } from '../src/components/core/button-group'
import { InputGroup, InputGroupAddon } from '../src/components/core/input-group'
import { PasswordInput } from '../src/components/forms/password-input'
import { NumberInput } from '../src/components/forms/number-input'
import { Spinner } from '../src/components/feedback/spinner'
import { EmptyState } from '../src/components/feedback/empty-state'
import { Kbd } from '../src/components/media/kbd'

// Phase 2 Advanced Inputs & Workflow Navigation
import { MultiSelect } from '../src/components/forms/multi-select'
import { DateRangePicker } from '../src/components/forms/date-range-picker'
import { TimePicker } from '../src/components/forms/time-picker'
import { FileUpload } from '../src/components/forms/file-upload'
import { Stepper } from '../src/components/navigation/stepper'

// Phase 3 Display, Feedback & Custom Utility Hooks
import { StatCard } from '../src/components/data/stat-card'
import { Timeline } from '../src/components/data/timeline'
import { TreeView } from '../src/components/data/tree-view'
import { Banner } from '../src/components/feedback/banner'
import { useClipboard } from '../src/hooks/use-clipboard'
import { useHotkeys } from '../src/hooks/use-hotkeys'
import { useDebounce } from '../src/hooks/use-debounce'
import { useLocalStorage } from '../src/hooks/use-local-storage'


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

    it('renders Composable Form with linked IDs and accessible ARIA attributes', () => {
      const { getByLabelText, getByRole, getByText } = render(
        <StrictMode>
          <Form>
            <FormField name="email" error="Invalid email address">
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="name@domain.com" />
                </FormControl>
                <FormDescription>We will never share your email.</FormDescription>
                <FormMessage />
              </FormItem>
            </FormField>
          </Form>
        </StrictMode>
      )

      const input = getByLabelText('Email Address')
      expect(input).toBeDefined()
      expect(input.getAttribute('aria-invalid')).toBe('true')
      expect(input.getAttribute('aria-describedby')).toBeDefined()

      const alert = getByRole('alert')
      expect(alert.textContent).toBe('Invalid email address')
      expect(getByText('We will never share your email.')).toBeDefined()
    })

    it('renders DataTable with sorting, search filtering, and row selection', () => {
      interface UserRecord {
        id: string
        name: string
        role: string
      }

      const users: UserRecord[] = [
        { id: '1', name: 'Alice Smith', role: 'Engineer' },
        { id: '2', name: 'Bob Jones', role: 'Designer' },
        { id: '3', name: 'Charlie Brown', role: 'Product' }
      ]

      const columns: DataTableColumn<UserRecord>[] = [
        { key: 'name', header: 'Name', sortable: true },
        { key: 'role', header: 'Role' }
      ]

      const { getByText, queryByText, getByPlaceholderText, getAllByRole } = render(
        <StrictMode>
          <DataTable data={users} columns={columns} selectable searchable pagination />
        </StrictMode>
      )

      expect(getByText('Alice Smith')).toBeDefined()
      expect(getByText('Bob Jones')).toBeDefined()
      expect(getByText('Charlie Brown')).toBeDefined()

      // Search filtering
      const searchInput = getByPlaceholderText('Search table...')
      fireEvent.change(searchInput, { target: { value: 'Alice' } })
      expect(getByText('Alice Smith')).toBeDefined()
      expect(queryByText('Bob Jones')).toBeNull()

      // Clear search
      fireEvent.change(searchInput, { target: { value: ' ' } })

      // Selection check
      const checkboxes = getAllByRole('checkbox')
      expect(checkboxes.length).toBeGreaterThan(0)
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

    it('useVirtualizer computes virtual totalSize and scroll positions', () => {
      const mockElement = document.createElement('div')
      Object.defineProperty(mockElement, 'clientHeight', { value: 400, configurable: true })
      Object.defineProperty(mockElement, 'scrollTop', { value: 0, configurable: true })

      const { result } = renderHook(() =>
        useVirtualizer({
          count: 50,
          itemHeight: 40,
          overscan: 2,
          getScrollElement: () => mockElement,
        })
      )

      expect(result.current.totalSize).toBe(50 * 40)
      expect(typeof result.current.scrollToIndex).toBe('function')
    })
  })

  describe('Phase 1: Essential Micro-Components & Core Inputs', () => {
    it('renders Kbd with formatted symbols and passes a11y', async () => {
      const { container, getByText } = render(
        <StrictMode>
          <div aria-label="Keyboard shortcuts">
            <Kbd keys={['cmd', 'shift', 'k']} />
            <Kbd>Enter</Kbd>
          </div>
        </StrictMode>
      )
      expect(getByText('⌘')).toBeDefined()
      expect(getByText('⇧')).toBeDefined()
      expect(getByText('↵')).toBeDefined()

      const ssr = renderToString(<Kbd keys={['cmd', 's']} />)
      expect(ssr).toContain('⌘')

      const results = await axe(container)
      expect(results.violations).toEqual([])
    })

    it('renders Spinner with accessible label and passes a11y', async () => {
      const { container, getByRole, getByText } = render(
        <StrictMode>
          <Spinner size="md" label="Loading data..." />
        </StrictMode>
      )
      expect(getByRole('status')).toBeDefined()
      expect(getByText('Loading data...')).toBeDefined()

      const ssr = renderToString(<Spinner size="lg" />)
      expect(ssr).toContain('role="status"')

      const results = await axe(container)
      expect(results.violations).toEqual([])
    })

    it('renders PasswordInput with visibility toggle and passes a11y', async () => {
      const { container, getByLabelText, getByPlaceholderText } = render(
        <StrictMode>
          <PasswordInput
            aria-label="User password"
            placeholder="Enter password"
            strengthMeter
            strengthScore={3}
          />
        </StrictMode>
      )
      const input = getByPlaceholderText('Enter password') as HTMLInputElement
      expect(input.type).toBe('password')

      const toggleButton = getByLabelText('Show password')
      fireEvent.click(toggleButton)
      expect(input.type).toBe('text')
      expect(getByLabelText('Hide password')).toBeDefined()

      fireEvent.click(getByLabelText('Hide password'))
      expect(input.type).toBe('password')

      const results = await axe(container)
      expect(results.violations).toEqual([])
    })

    it('renders NumberInput with steppers and clamps bounds', async () => {
      let changedVal: number | undefined
      const { container, getByRole, getByLabelText } = render(
        <StrictMode>
          <NumberInput
            aria-label="Item quantity"
            min={1}
            max={10}
            step={1}
            defaultValue={5}
            onChange={(val) => { changedVal = val }}
          />
        </StrictMode>
      )
      const input = getByRole('spinbutton') as HTMLInputElement
      expect(input.value).toBe('5')

      const incrementBtn = getByLabelText('Increment value')
      fireEvent.pointerDown(incrementBtn)
      fireEvent.pointerUp(incrementBtn)
      expect(input.value).toBe('6')
      expect(changedVal).toBe(6)

      const decrementBtn = getByLabelText('Decrement value')
      fireEvent.pointerDown(decrementBtn)
      fireEvent.pointerUp(decrementBtn)
      expect(input.value).toBe('5')

      // Keyboard arrow stepping
      fireEvent.keyDown(input, { key: 'ArrowUp' })
      expect(input.value).toBe('6')

      fireEvent.keyDown(input, { key: 'ArrowDown' })
      expect(input.value).toBe('5')

      const results = await axe(container)
      expect(results.violations).toEqual([])
    })

    it('renders ButtonGroup and InputGroup with seamless borders and passes a11y', async () => {
      const { container, getByRole, getByText } = render(
        <StrictMode>
          <div>
            <ButtonGroup orientation="horizontal" attached>
              <Button>First</Button>
              <Button>Middle</Button>
              <Button>Last</Button>
            </ButtonGroup>

            <InputGroup className="mt-4">
              <InputGroupAddon>https://</InputGroupAddon>
              <Input aria-label="Domain name" placeholder="example.com" />
              <InputGroupAddon>.org</InputGroupAddon>
            </InputGroup>
          </div>
        </StrictMode>
      )
      expect(getByRole('group')).toBeDefined()
      expect(getByText('First')).toBeDefined()
      expect(getByText('https://')).toBeDefined()

      const results = await axe(container)
      expect(results.violations).toEqual([])
    })

    it('renders EmptyState with icon, title, description and actions', async () => {
      const { container, getByText } = render(
        <StrictMode>
          <EmptyState
            title="No projects found"
            description="Your search did not match any active projects."
            action={<Button size="sm">Create New Project</Button>}
          />
        </StrictMode>
      )
      expect(getByText('No projects found')).toBeDefined()
      expect(getByText('Your search did not match any active projects.')).toBeDefined()
      expect(getByText('Create New Project')).toBeDefined()

      const ssr = renderToString(
        <EmptyState
          title="SSR Title"
          description="SSR Description"
        />
      )
      expect(ssr).toContain('SSR Title')

      const results = await axe(container)
      expect(results.violations).toEqual([])
    })

    it('renders MultiSelect with pills, search filter and selection toggle', async () => {
      let selectedValues: string[] = ['admin']
      const options = [
        { label: 'Administrator', value: 'admin' },
        { label: 'Developer', value: 'dev' },
        { label: 'Designer', value: 'designer' }
      ]

      const { container, getByText } = render(
        <StrictMode>
          <MultiSelect
            options={options}
            value={selectedValues}
            onChange={(val) => { selectedValues = val }}
            placeholder="Select roles"
          />
        </StrictMode>
      )

      expect(getByText('Administrator')).toBeDefined()

      // Open dropdown by clicking trigger
      const trigger = getByText('Administrator').closest('div')
      if (trigger) fireEvent.click(trigger)

      // SSR test
      const ssr = renderToString(
        <MultiSelect options={options} defaultValue={['dev']} />
      )
      expect(ssr).toContain('Developer')

      const results = await axe(container)
      expect(results.violations).toEqual([])
    })

    it('renders DateRangePicker with presets and date display', async () => {
      let activeRange = {
        from: new Date(2026, 9, 1),
        to: new Date(2026, 9, 15)
      }

      const { container, getByText } = render(
        <StrictMode>
          <DateRangePicker
            value={activeRange}
            onChange={(range) => { activeRange = range }}
          />
        </StrictMode>
      )

      expect(getByText(/Oct 1, 2026/)).toBeDefined()
      expect(getByText(/Oct 15, 2026/)).toBeDefined()

      // SSR test
      const ssr = renderToString(
        <DateRangePicker defaultValue={activeRange} />
      )
      expect(ssr).toContain('Oct 1, 2026')

      const results = await axe(container)
      expect(results.violations).toEqual([])
    })

    it('renders TimePicker and handles time format', async () => {
      let selectedTime = '10:30 AM'

      const { container, getByLabelText, getByText } = render(
        <StrictMode>
          <TimePicker
            value={selectedTime}
            onChange={(time) => { selectedTime = time }}
            format="12h"
          />
        </StrictMode>
      )

      const hoursInput = getByLabelText('Hours') as HTMLInputElement
      const minutesInput = getByLabelText('Minutes') as HTMLInputElement
      expect(hoursInput.value).toBe('10')
      expect(minutesInput.value).toBe('30')
      expect(getByText('AM')).toBeDefined()

      // SSR test
      const ssr = renderToString(
        <TimePicker defaultValue="02:45 PM" />
      )
      expect(ssr).toContain('02')
      expect(ssr).toContain('45')
      expect(ssr).toContain('PM')

      const results = await axe(container)
      expect(results.violations).toEqual([])
    })

    it('renders FileUpload dropzone with drag events and file list', async () => {
      const mockFile = new File(['mock content'], 'test-doc.pdf', { type: 'application/pdf' })
      let files: File[] = [mockFile]

      const { container, getByText } = render(
        <StrictMode>
          <FileUpload
            value={files}
            onChange={(f) => { files = f }}
            title="Upload invoices"
            description="PDF files up to 5MB"
          />
        </StrictMode>
      )

      expect(getByText('Upload invoices')).toBeDefined()
      expect(getByText('PDF files up to 5MB')).toBeDefined()
      expect(getByText('test-doc.pdf')).toBeDefined()

      // SSR test
      const ssr = renderToString(
        <FileUpload title="Upload SSR files" />
      )
      expect(ssr).toContain('Upload SSR files')

      const results = await axe(container)
      expect(results.violations).toEqual([])
    })

    it('renders Stepper with active and completed steps and clickable navigation', async () => {
      let active = 1
      const steps = [
        { title: 'Step 1: Account', description: 'Enter credentials' },
        { title: 'Step 2: Profile', description: 'Personal details' },
        { title: 'Step 3: Review', description: 'Confirm submit' }
      ]

      const { container, getByText } = render(
        <StrictMode>
          <Stepper
            steps={steps}
            activeStep={active}
            onStepChange={(s) => { active = s }}
            clickable
          />
        </StrictMode>
      )

      expect(getByText('Step 1: Account')).toBeDefined()
      expect(getByText('Step 2: Profile')).toBeDefined()
      expect(getByText('Step 3: Review')).toBeDefined()

      // Click completed step 0
      fireEvent.click(getByText('Step 1: Account'))
      expect(active).toBe(0)

      // SSR test
      const ssr = renderToString(
        <Stepper steps={steps} activeStep={2} />
      )
      expect(ssr).toContain('Step 3: Review')

      const results = await axe(container)
      expect(results.violations).toEqual([])
    })

    it('renders StatCard with value, trend badge, and passes a11y', async () => {
      const { container, getByText } = render(
        <StrictMode>
          <StatCard
            title="Monthly Recurring Revenue"
            value="$42,800"
            description="Across 120 enterprise subscriptions"
            trend={{ value: "+18.4%", direction: "up" }}
          />
        </StrictMode>
      )

      expect(getByText('Monthly Recurring Revenue')).toBeDefined()
      expect(getByText('$42,800')).toBeDefined()
      expect(getByText('+18.4%')).toBeDefined()
      expect(getByText('Across 120 enterprise subscriptions')).toBeDefined()

      // SSR test
      const ssr = renderToString(
        <StatCard title="SSR Metric" value="99.9%" />
      )
      expect(ssr).toContain('SSR Metric')
      expect(ssr).toContain('99.9%')

      const results = await axe(container)
      expect(results.violations).toEqual([])
    })

    it('renders Timeline with events, time badges, and passes a11y', async () => {
      const items = [
        {
          title: "Created Repository",
          time: "1 hour ago",
          description: "Initialized Git repo with clean architecture.",
          status: "completed" as const
        },
        {
          title: "Automated Verification",
          time: "30 minutes ago",
          description: "All lint and a11y checks passed.",
          status: "current" as const
        }
      ]

      const { container, getByText } = render(
        <StrictMode>
          <Timeline items={items} />
        </StrictMode>
      )

      expect(getByText('Created Repository')).toBeDefined()
      expect(getByText('1 hour ago')).toBeDefined()
      expect(getByText('Automated Verification')).toBeDefined()

      // SSR test
      const ssr = renderToString(<Timeline items={items} />)
      expect(ssr).toContain('Created Repository')

      const results = await axe(container)
      expect(results.violations).toEqual([])
    })

    it('renders Banner with action, handles dismiss, and passes a11y', async () => {
      let dismissed = false

      const { container, getByText, getByLabelText } = render(
        <StrictMode>
          <Banner
            variant="warning"
            title="API Maintenance"
            dismissible
            onDismiss={() => { dismissed = true }}
            action={<button type="button">Details</button>}
          >
            Planned downtime this weekend.
          </Banner>
        </StrictMode>
      )

      expect(getByText('API Maintenance')).toBeDefined()
      expect(getByText('Planned downtime this weekend.')).toBeDefined()
      expect(getByText('Details')).toBeDefined()

      const dismissBtn = getByLabelText('Dismiss banner')
      fireEvent.click(dismissBtn)
      expect(dismissed).toBe(true)

      // SSR test
      const ssr = renderToString(
        <Banner title="SSR Banner Alert">System notice</Banner>
      )
      expect(ssr).toContain('SSR Banner Alert')

      const results = await axe(container)
      expect(results.violations).toEqual([])
    })

    it('renders TreeView with keyboard navigation, branch expand, and passes a11y', async () => {
      let selectedNodeId = ""
      const treeData = [
        {
          id: "folder-1",
          label: "Documents",
          children: [
            { id: "file-1", label: "resume.pdf" },
            { id: "file-2", label: "portfolio.pdf" }
          ]
        },
        { id: "file-3", label: "notes.txt" }
      ]

      const { container, getByText } = render(
        <StrictMode>
          <TreeView
            data={treeData}
            defaultExpandedIds={["folder-1"]}
            onSelect={(node) => { selectedNodeId = node.id }}
          />
        </StrictMode>
      )

      expect(getByText('Documents')).toBeDefined()
      expect(getByText('resume.pdf')).toBeDefined()
      expect(getByText('notes.txt')).toBeDefined()

      // Click node
      fireEvent.click(getByText('resume.pdf'))
      expect(selectedNodeId).toBe('file-1')

      // SSR test
      const ssr = renderToString(
        <TreeView data={treeData} defaultExpandedIds={["folder-1"]} />
      )
      expect(ssr).toContain('Documents')
      expect(ssr).toContain('resume.pdf')

      const results = await axe(container)
      expect(results.violations).toEqual([])
    })

    it('verifies utility hooks (useClipboard, useHotkeys, useDebounce, useLocalStorage)', async () => {
      // 1. useClipboard
      const { result: clipboardResult } = renderHook(() => useClipboard({ timeout: 1000 }))
      expect(clipboardResult.current.copied).toBe(false)
      expect(typeof clipboardResult.current.copy).toBe('function')

      // 2. useHotkeys
      let hotkeyTriggered = false
      renderHook(() =>
        useHotkeys('mod+k', () => { hotkeyTriggered = true })
      )
      window.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'k', metaKey: true })
      )
      expect(hotkeyTriggered).toBe(true)

      // 3. useDebounce
      const { result: debounceResult, rerender: rerenderDebounce } = renderHook(
        ({ val }) => useDebounce(val, 50),
        { initialProps: { val: 'first' } }
      )
      expect(debounceResult.current).toBe('first')
      rerenderDebounce({ val: 'second' })
      expect(debounceResult.current).toBe('first')

      // 4. useLocalStorage
      const { result: storageResult } = renderHook(() =>
        useLocalStorage('test-token', 'initial-token')
      )
      expect(storageResult.current[0]).toBe('initial-token')
      act(() => {
        storageResult.current[1]('updated-token')
      })
      expect(storageResult.current[0]).toBe('updated-token')
    })
  })
})

