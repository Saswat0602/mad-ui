import React from 'react'
import { Combobox, Command, Menubar, NavigationMenu, Pagination } from 'mad-ui-components'

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
      description: 'A simple combobox component',
      code: `import { Combobox } from 'mad-ui-components'

export function ComboboxExample() {
  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' }
  ]

  return <Combobox options={options} placeholder="Search fruits..." />
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Combobox 
            options={[
              { value: 'apple', label: 'Apple' },
              { value: 'banana', label: 'Banana' },
              { value: 'orange', label: 'Orange' }
            ]} 
            placeholder="Search fruits..." 
          />
        </div>
      )
    }
  ],

  command: [
    {
      title: 'Basic Command',
      description: 'A simple command component',
      code: `import { Command } from 'mad-ui-components'

export function CommandExample() {
  return (
    <Command>
      <div>🔍 Search</div>
      <div>⚙️ Settings</div>
      <div>❓ Help</div>
    </Command>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Command>
            <div>🔍 Search</div>
            <div>⚙️ Settings</div>
            <div>❓ Help</div>
          </Command>
        </div>
      )
    }
  ],

  menubar: [
    {
      title: 'Basic Menubar',
      description: 'A simple menubar component',
      code: `import { Menubar } from 'mad-ui-components'

export function MenubarExample() {
  return (
    <Menubar>
      <div>File</div>
      <div>Edit</div>
    </Menubar>
  )
}`,
      preview: (
        <div className="w-full max-w-md">
          <Menubar>
            <div>File</div>
            <div>Edit</div>
          </Menubar>
        </div>
      )
    }
  ],

  'navigation-menu': [
    {
      title: 'Basic Navigation Menu',
      description: 'A simple navigation menu component',
      code: `import { NavigationMenu } from 'mad-ui-components'

export function NavigationMenuExample() {
  return (
    <NavigationMenu>
      <div>Home</div>
      <div>About</div>
      <div>Services</div>
      <div>Contact</div>
    </NavigationMenu>
  )
}`,
      preview: (
        <div className="w-full max-w-md">
          <NavigationMenu>
            <div>Home</div>
            <div>About</div>
            <div>Services</div>
            <div>Contact</div>
          </NavigationMenu>
        </div>
      )
    }
  ],

  pagination: [
    {
      title: 'Basic Pagination',
      description: 'A simple pagination component',
      code: `import { Pagination } from 'mad-ui-components'

export function PaginationExample() {
  return (
    <Pagination 
      currentPage={1} 
      totalPages={10} 
      onPageChange={(page) => console.log('Page:', page)} 
    />
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Pagination 
            currentPage={1} 
            totalPages={10} 
            onPageChange={(page) => console.log('Page:', page)} 
          />
        </div>
      )
    }
  ]
}
