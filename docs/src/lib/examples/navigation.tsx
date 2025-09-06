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
  const items = [
    { id: '1', label: 'Search', icon: '🔍' },
    { id: '2', label: 'Settings', icon: '⚙️' },
    { id: '3', label: 'Help', icon: '❓' }
  ]

  return <Command items={items} />
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Command 
            items={[
              { id: '1', label: 'Search', icon: '🔍' },
              { id: '2', label: 'Settings', icon: '⚙️' },
              { id: '3', label: 'Help', icon: '❓' }
            ]} 
          />
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
  const items = [
    {
      label: 'File',
      items: [
        { label: 'New', action: () => console.log('New') },
        { label: 'Open', action: () => console.log('Open') },
        { label: 'Save', action: () => console.log('Save') }
      ]
    },
    {
      label: 'Edit',
      items: [
        { label: 'Cut', action: () => console.log('Cut') },
        { label: 'Copy', action: () => console.log('Copy') },
        { label: 'Paste', action: () => console.log('Paste') }
      ]
    }
  ]

  return <Menubar items={items} />
}`,
      preview: (
        <div className="w-full max-w-md">
          <Menubar 
            items={[
              {
                label: 'File',
                items: [
                  { label: 'New', action: () => console.log('New') },
                  { label: 'Open', action: () => console.log('Open') },
                  { label: 'Save', action: () => console.log('Save') }
                ]
              },
              {
                label: 'Edit',
                items: [
                  { label: 'Cut', action: () => console.log('Cut') },
                  { label: 'Copy', action: () => console.log('Copy') },
                  { label: 'Paste', action: () => console.log('Paste') }
                ]
              }
            ]} 
          />
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
  const items = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' }
  ]

  return <NavigationMenu items={items} />
}`,
      preview: (
        <div className="w-full max-w-md">
          <NavigationMenu 
            items={[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Services', href: '/services' },
              { label: 'Contact', href: '/contact' }
            ]} 
          />
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
