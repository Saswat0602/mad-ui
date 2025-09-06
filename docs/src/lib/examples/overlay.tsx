import React from 'react'
import { AlertDialog, Collapsible, ContextMenu, Dialog, DropdownMenu, HoverCard, Separator, Toggle } from 'mad-ui-components'

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
  return (
    <AlertDialog>
      <button>Open Alert</button>
      <div className="p-4">
        <h3>Alert Dialog</h3>
        <p>This is an alert dialog content.</p>
      </div>
    </AlertDialog>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <AlertDialog>
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
  const items = [
    { label: 'Copy', action: () => console.log('Copy') },
    { label: 'Paste', action: () => console.log('Paste') },
    { label: 'Delete', action: () => console.log('Delete') }
  ]

  return (
    <ContextMenu items={items}>
      <div className="p-4 border rounded-md">Right click me</div>
    </ContextMenu>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <ContextMenu 
            items={[
              { label: 'Copy', action: () => console.log('Copy') },
              { label: 'Paste', action: () => console.log('Paste') },
              { label: 'Delete', action: () => console.log('Delete') }
            ]}
          >
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
  return (
    <Dialog>
      <button>Open Dialog</button>
      <div className="p-4">
        <h3>Dialog Title</h3>
        <p>This is dialog content.</p>
      </div>
    </Dialog>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Dialog>
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
      code: `import { DropdownMenu } from 'mad-ui-components'

export function DropdownMenuExample() {
  const items = [
    { label: 'Profile', action: () => console.log('Profile') },
    { label: 'Settings', action: () => console.log('Settings') },
    { label: 'Logout', action: () => console.log('Logout') }
  ]

  return (
    <DropdownMenu items={items}>
      <button>Menu</button>
    </DropdownMenu>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <DropdownMenu 
            items={[
              { label: 'Profile', action: () => console.log('Profile') },
              { label: 'Settings', action: () => console.log('Settings') },
              { label: 'Logout', action: () => console.log('Logout') }
            ]}
          >
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Menu</button>
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
