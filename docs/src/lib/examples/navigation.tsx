import React from 'react'
import { 
  Combobox, 
  Command, 
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  Menubar, 
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  NavigationMenu, 
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  Pagination 
} from 'mad-ui-components'
import { Search, Settings, User, CreditCard, HelpCircle, FileText, Layout } from 'lucide-react'

export interface ComponentExample {
  title: string
  description?: string
  code: string
  preview: React.ReactNode
}

export const navigationExamples: Record<string, ComponentExample[]> = {
  combobox: [
    {
      title: 'Basic Combobox',
      description: 'A searchable dropdown select component with keyboard navigation',
      code: `import { Combobox } from 'mad-ui-components'

export function ComboboxExample() {
  const options = [
    { value: 'nextjs', label: 'Next.js App Router' },
    { value: 'react', label: 'React 19' },
    { value: 'tailwind', label: 'Tailwind CSS' },
    { value: 'typescript', label: 'TypeScript' }
  ]

  return (
    <div className="w-full max-w-sm">
      <Combobox options={options} placeholder="Select framework..." />
    </div>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Combobox 
            options={[
              { value: 'nextjs', label: 'Next.js App Router' },
              { value: 'react', label: 'React 19' },
              { value: 'tailwind', label: 'Tailwind CSS' },
              { value: 'typescript', label: 'TypeScript' }
            ]} 
            placeholder="Select framework..." 
          />
        </div>
      )
    }
  ],

  command: [
    {
      title: 'Command Palette',
      description: 'Fast, composable command menu with filtering and keyboard accessibility',
      code: `import { 
  Command, 
  CommandInput, 
  CommandList, 
  CommandEmpty, 
  CommandGroup, 
  CommandItem, 
  CommandSeparator 
} from 'mad-ui-components'
import { Search, Settings, User, CreditCard, HelpCircle } from 'lucide-react'

export function CommandExample() {
  return (
    <Command className="rounded-xl border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span>Profile Settings</span>
          </CommandItem>
          <CommandItem className="flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-muted-foreground" />
            <span>Billing & Invoices</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem className="flex items-center gap-2">
            <Settings className="h-4 w-4 text-muted-foreground" />
            <span>Workspace Preferences</span>
          </CommandItem>
          <CommandItem className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
            <span>Support & Documentation</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`,
      preview: (
        <div className="w-full max-w-md">
          <Command className="rounded-xl border shadow-sm">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>Profile Settings</span>
                </CommandItem>
                <CommandItem className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                  <span>Billing & Invoices</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem className="flex items-center gap-2">
                  <Settings className="h-4 w-4 text-muted-foreground" />
                  <span>Workspace Preferences</span>
                </CommandItem>
                <CommandItem className="flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  <span>Support & Documentation</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      )
    }
  ],

  menubar: [
    {
      title: 'Desktop Menubar',
      description: 'Application menubar with dropdown menus and nested items',
      code: `import { 
  Menubar, 
  MenubarMenu, 
  MenubarTrigger, 
  MenubarContent, 
  MenubarItem, 
  MenubarSeparator 
} from 'mad-ui-components'

export function MenubarExample() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Tab</MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Always Show Bookmarks Bar</MenubarItem>
          <MenubarItem>Reload Page</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}`,
      preview: (
        <div className="w-full max-w-lg flex items-center justify-center p-4">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>New Tab</MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print...</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Undo</MenubarItem>
                <MenubarItem>Redo</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Cut</MenubarItem>
                <MenubarItem>Copy</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Always Show Bookmarks Bar</MenubarItem>
                <MenubarItem>Reload Page</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      )
    }
  ],

  'navigation-menu': [
    {
      title: 'Navigation Menu',
      description: 'A collection of navigation links with animated flyout content',
      code: `import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuTrigger, 
  NavigationMenuContent, 
  NavigationMenuLink 
} from 'mad-ui-components'

export function NavigationMenuExample() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent className="p-4 w-72 space-y-2">
            <NavigationMenuLink href="/docs/getting-started" className="block p-2 rounded-lg hover:bg-muted font-medium text-sm">
              Overview &amp; Quickstart
            </NavigationMenuLink>
            <NavigationMenuLink href="/docs/installation" className="block p-2 rounded-lg hover:bg-muted font-medium text-sm">
              Installation Guides
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent className="p-4 w-72 space-y-2">
            <NavigationMenuLink href="/docs/components" className="block p-2 rounded-lg hover:bg-muted font-medium text-sm">
              All 57+ Primitives
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/docs/examples" className="px-4 py-2 font-medium text-sm text-muted-foreground hover:text-foreground">
            Examples
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
      preview: (
        <div className="w-full flex items-center justify-center p-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 w-72 space-y-2">
                  <NavigationMenuLink href="/docs/getting-started" className="block p-2 rounded-lg hover:bg-muted font-medium text-sm">
                    Overview &amp; Quickstart
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/docs/installation" className="block p-2 rounded-lg hover:bg-muted font-medium text-sm">
                    Installation Guides
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 w-72 space-y-2">
                  <NavigationMenuLink href="/docs/components" className="block p-2 rounded-lg hover:bg-muted font-medium text-sm">
                    All 57+ Primitives
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/docs/examples" className="px-4 py-2 font-medium text-sm text-muted-foreground hover:text-foreground">
                  Examples
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )
    }
  ],

  pagination: [
    {
      title: 'Pagination Control',
      description: 'Page pagination component with active state and button navigation',
      code: `import { Pagination } from 'mad-ui-components'
import { useState } from 'react'

export function PaginationExample() {
  const [page, setPage] = useState(1)

  return (
    <Pagination 
      currentPage={page} 
      totalPages={8} 
      onPageChange={setPage} 
    />
  )
}`,
      preview: (
        <div className="w-full flex justify-center py-2">
          <Pagination 
            currentPage={1} 
            totalPages={8} 
            onPageChange={(page) => console.log('Page:', page)} 
          />
        </div>
      )
    }
  ]
}
