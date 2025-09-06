import React, { useState } from 'react'
import { 
  AlertDialog, 
  Collapsible, 
  ContextMenu, 
  Dialog, 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuCheckboxItem,
  HoverCard, 
  Separator, 
  Toggle 
} from 'mad-ui-components'

export interface ComponentExample {
  title: string
  description?: string
  code: string
  preview: React.ReactNode
}

export const overlayExamples: Record<string, ComponentExample[]> = {
  'alert-dialog': [
    {
      title: 'Basic Alert Dialog',
      description: 'A simple alert dialog component',
      code: `import { AlertDialog } from 'mad-ui-components'

export function AlertDialogExample() {
  const [open, setOpen] = useState(false)
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <button onClick={() => setOpen(true)}>Open Alert</button>
      <div className="p-4">
        <h3>Alert Dialog</h3>
        <p>This is an alert dialog content.</p>
      </div>
    </AlertDialog>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <AlertDialog open={false} onOpenChange={() => {}}>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Open Alert</button>
            <div className="p-4">
              <h3>Alert Dialog</h3>
              <p>This is an alert dialog content.</p>
            </div>
          </AlertDialog>
        </div>
      )
    }
  ],

  collapsible: [
    {
      title: 'Basic Collapsible',
      description: 'A simple collapsible component',
      code: `import { Collapsible } from 'mad-ui-components'

export function CollapsibleExample() {
  return (
    <Collapsible>
      <button>Toggle</button>
      <div className="p-4">Collapsible content</div>
    </Collapsible>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Collapsible>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Toggle</button>
            <div className="p-4">Collapsible content</div>
          </Collapsible>
        </div>
      )
    }
  ],

  'context-menu': [
    {
      title: 'Basic Context Menu',
      description: 'A simple context menu component',
      code: `import { ContextMenu } from 'mad-ui-components'

export function ContextMenuExample() {
  return (
    <ContextMenu>
      <div className="p-4 border rounded-md">Right click me</div>
    </ContextMenu>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <ContextMenu>
            <div className="p-4 border rounded-md">Right click me</div>
          </ContextMenu>
        </div>
      )
    }
  ],

  dialog: [
    {
      title: 'Basic Dialog',
      description: 'A simple dialog component',
      code: `import { Dialog } from 'mad-ui-components'

export function DialogExample() {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <button onClick={() => setOpen(true)}>Open Dialog</button>
      <div className="p-4">
        <h3>Dialog Title</h3>
        <p>This is dialog content.</p>
      </div>
    </Dialog>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Dialog open={false} onOpenChange={() => {}}>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Open Dialog</button>
            <div className="p-4">
              <h3>Dialog Title</h3>
              <p>This is dialog content.</p>
            </div>
          </Dialog>
        </div>
      )
    }
  ],

  'dropdown-menu': [
    {
      title: 'Basic Dropdown Menu',
      description: 'A simple dropdown menu component',
      code: `import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup
} from 'mad-ui-components'

export function DropdownMenuExample() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Open</button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    },
    {
      title: 'Dropdown Menu with Checkboxes',
      description: 'A dropdown menu with checkbox items',
      code: `import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from 'mad-ui-components'

export function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = useState(true)
  const [showActivityBar, setShowActivityBar] = useState(false)
  const [showPanel, setShowPanel] = useState(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Open</button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Appearance</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={true}
                onCheckedChange={() => {}}
              >
                Status Bar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={false}
                onCheckedChange={() => {}}
                disabled
              >
                Activity Bar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={false}
                onCheckedChange={() => {}}
              >
                Panel
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    }
  ],

  'hover-card': [
    {
      title: 'Basic Hover Card',
      description: 'A simple hover card component',
      code: `import { HoverCard } from 'mad-ui-components'

export function HoverCardExample() {
  return (
    <HoverCard>
      <button>Hover me</button>
      <div className="p-4">
        <h3>Hover Card</h3>
        <p>This is hover card content.</p>
      </div>
    </HoverCard>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <HoverCard>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Hover me</button>
            <div className="p-4">
              <h3>Hover Card</h3>
              <p>This is hover card content.</p>
            </div>
          </HoverCard>
        </div>
      )
    }
  ],

  separator: [
    {
      title: 'Basic Separator',
      description: 'A simple separator component',
      code: `import { Separator } from 'mad-ui-components'

export function SeparatorExample() {
  return (
    <div>
      <p>Content above</p>
      <Separator />
      <p>Content below</p>
    </div>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <p>Content above</p>
          <Separator />
          <p>Content below</p>
        </div>
      )
    }
  ],

  toggle: [
    {
      title: 'Basic Toggle',
      description: 'A simple toggle component',
      code: `import { Toggle } from 'mad-ui-components'

export function ToggleExample() {
  return <Toggle>Toggle</Toggle>
}`,
      preview: <Toggle>Toggle</Toggle>
    }
  ]
}
