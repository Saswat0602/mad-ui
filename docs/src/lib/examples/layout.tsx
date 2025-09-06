import React, { useState } from 'react'
import { 
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  Layout, 
  Modal, 
  Navbar, 
  Popover, 
  Resizable, 
  ScrollArea, 
  Sheet, 
  Sidebar, 
  Tooltip 
} from 'mad-ui-components'

export interface ComponentExample {
  title: string
  description?: string
  code: string
  preview: React.ReactNode
}

export const layoutExamples: Record<string, ComponentExample[]> = {
  drawer: [
    {
      title: 'Basic Drawer',
      description: 'A simple drawer component',
      code: `import { 
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription
} from 'mad-ui-components'

export function DrawerExample() {
  const [open, setOpen] = useState(false)
  
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>This is a drawer description.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>Drawer content goes here.</p>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Drawer open={false} onOpenChange={() => {}}>
            <DrawerTrigger asChild>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Open Drawer</button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Drawer Title</DrawerTitle>
                <DrawerDescription>This is a drawer description.</DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <p>Drawer content goes here.</p>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      )
    },
    {
      title: 'Drawer with Footer',
      description: 'A drawer component with header, content, and footer',
      code: `import { 
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose
} from 'mad-ui-components'

export function DrawerWithFooter() {
  const [open, setOpen] = useState(false)
  
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit Profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input 
                type="text" 
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
        </div>
        <DrawerFooter>
          <Button>Save changes</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Drawer open={false} onOpenChange={() => {}}>
            <DrawerTrigger asChild>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Open Drawer</button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Edit Profile</DrawerTitle>
                <DrawerDescription>
                  Make changes to your profile here. Click save when you&apos;re done.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>
              </div>
              <DrawerFooter>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Save changes</button>
                <DrawerClose asChild>
                  <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md">Cancel</button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      )
    }
  ],

  layout: [
    {
      title: 'Basic Layout',
      description: 'A simple layout component',
      code: `import { Layout } from 'mad-ui-components'

export function LayoutExample() {
  return (
    <Layout>
      <div className="p-4">Layout content</div>
    </Layout>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Layout>
            <div className="p-4">Layout content</div>
          </Layout>
        </div>
      )
    }
  ],

  modal: [
    {
      title: 'Basic Modal',
      description: 'A simple modal component',
      code: `import { Modal } from 'mad-ui-components'

export function ModalExample() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className="p-4">Modal content</div>
    </Modal>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Modal isOpen={false} onClose={() => {}}>
            <div className="p-4">Modal content</div>
          </Modal>
        </div>
      )
    }
  ],

  navbar: [
    {
      title: 'Basic Navbar',
      description: 'A simple navbar component',
      code: `import { Navbar } from 'mad-ui-components'

export function NavbarExample() {
  return <Navbar title="My App" />
}`,
      preview: (
        <div className="w-full max-w-md">
          <Navbar title="My App" />
        </div>
      )
    },
    {
      title: 'Centered Navbar',
      description: 'A navbar with centered navigation',
      code: `import { Navbar } from 'mad-ui-components'

export function CenteredNavbarExample() {
  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ]

  return (
    <Navbar 
      title="My App"
      variant="centered"
      navigationItems={navigationItems}
      showNavigation
    />
  )
}`,
      preview: (
        <div className="w-full max-w-md">
          <Navbar 
            title="My App"
            variant="centered"
            navigationItems={[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' }
            ]}
            showNavigation
          />
        </div>
      )
    },
    {
      title: 'Floating Navbar',
      description: 'A floating navbar with modern design',
      code: `import { Navbar } from 'mad-ui-components'

export function FloatingNavbarExample() {
  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ]

  return (
    <Navbar 
      title="My App"
      variant="floating"
      navigationItems={navigationItems}
      showNavigation
      showActions
    />
  )
}`,
      preview: (
        <div className="w-full max-w-md">
          <Navbar 
            title="My App"
            variant="floating"
            navigationItems={[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' }
            ]}
            showNavigation
            showActions
          />
        </div>
      )
    }
  ],

  popover: [
    {
      title: 'Basic Popover',
      description: 'A simple popover component',
      code: `import { Popover } from 'mad-ui-components'

export function PopoverExample() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Popover 
      isOpen={isOpen} 
      onClose={() => setIsOpen(false)} 
      trigger={<button onClick={() => setIsOpen(true)}>Trigger</button>}
    >
      <div className="p-4">Popover content</div>
    </Popover>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Popover 
            isOpen={false} 
            onClose={() => {}} 
            trigger={<button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Trigger</button>}
          >
            <div className="p-4">Popover content</div>
          </Popover>
        </div>
      )
    }
  ],

  resizable: [
    {
      title: 'Basic Resizable',
      description: 'A simple resizable component',
      code: `import { Resizable } from 'mad-ui-components'

export function ResizableExample() {
  return (
    <Resizable>
      <div className="p-4">Resizable content</div>
    </Resizable>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Resizable>
            <div className="p-4">Resizable content</div>
          </Resizable>
        </div>
      )
    }
  ],

  'scroll-area': [
    {
      title: 'Basic Scroll Area',
      description: 'A simple scroll area component',
      code: `import { ScrollArea } from 'mad-ui-components'

export function ScrollAreaExample() {
  return (
    <ScrollArea className="h-32">
      <div className="p-4">
        <p>This is scrollable content.</p>
        <p>This is scrollable content.</p>
        <p>This is scrollable content.</p>
        <p>This is scrollable content.</p>
        <p>This is scrollable content.</p>
        <p>This is scrollable content.</p>
      </div>
    </ScrollArea>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <ScrollArea className="h-32">
            <div className="p-4">
              <p>This is scrollable content.</p>
              <p>This is scrollable content.</p>
              <p>This is scrollable content.</p>
              <p>This is scrollable content.</p>
              <p>This is scrollable content.</p>
              <p>This is scrollable content.</p>
            </div>
          </ScrollArea>
        </div>
      )
    }
  ],

  sheet: [
    {
      title: 'Basic Sheet',
      description: 'A simple sheet component',
      code: `import { Sheet } from 'mad-ui-components'

export function SheetExample() {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <div className="p-4">Sheet content</div>
    </Sheet>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Sheet open={false} onOpenChange={() => {}}>
            <div className="p-4">Sheet content</div>
          </Sheet>
        </div>
      )
    }
  ],

  sidebar: [
    {
      title: 'Basic Sidebar',
      description: 'A simple sidebar component',
      code: `import { Sidebar } from 'mad-ui-components'

export function SidebarExample() {
  const items = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Analytics', href: '/analytics' },
    { label: 'Settings', href: '/settings' }
  ]

  return <Sidebar items={items} />
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Sidebar 
            items={[
              { label: 'Dashboard', href: '/dashboard' },
              { label: 'Analytics', href: '/analytics' },
              { label: 'Settings', href: '/settings' }
            ]} 
          />
        </div>
      )
    }
  ],

  tooltip: [
    {
      title: 'Basic Tooltip',
      description: 'A simple tooltip component',
      code: `import { Tooltip } from 'mad-ui-components'

export function TooltipExample() {
  return (
    <Tooltip content="This is a tooltip">
      <button>Hover me</button>
    </Tooltip>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Tooltip content="This is a tooltip">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Hover me</button>
          </Tooltip>
        </div>
      )
    }
  ]
}
