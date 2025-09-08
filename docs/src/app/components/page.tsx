'use client'

import React, { useState } from 'react'
import { Drawer } from '../../../../src/components/layout/drawer'
import { Accordion } from '../../../../src/components/forms/accordion'
import { Menu } from 'lucide-react'

export default function ComponentsDemo() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerPosition, setDrawerPosition] = useState<'right' | 'left' | 'top' | 'bottom'>('right')
  const [drawerSize, setDrawerSize] = useState<'sm' | 'md' | 'lg' | 'full'>('md')

  const accordionItems = [
    {
      id: 'item1',
      title: 'What is React?',
      content: 'React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called &quot;components&quot;.'
    },
    {
      id: 'item2',
      title: 'How do components work?',
      content: (
        <div>
          <p>Components are like JavaScript functions. They accept arbitrary inputs (called &quot;props&quot;) and return React elements describing what should appear on the screen.</p>
          <ul className="mt-2 list-disc list-inside">
            <li>Reusable pieces of UI</li>
            <li>Can have their own state</li>
            <li>Can receive data via props</li>
          </ul>
        </div>
      )
    },
    {
      id: 'item3',
      title: 'Why use custom components?',
      content: 'Custom components give you complete control over styling, behavior, and functionality. They can be tailored to your exact needs and maintain consistency across your application.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            New Drawer & Accordion Components
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Clean, simple, and powerful components with smooth animations and flexible APIs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Drawer Demo */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Drawer Component</h2>
            
            <div className="space-y-6">
              {/* Position Controls */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position
                </label>
                <div className="flex gap-2">
                  {(['right', 'left', 'top', 'bottom'] as const).map((pos) => (
                    <button
                      key={pos}
                      onClick={() => setDrawerPosition(pos)}
                      className={`px-3 py-2 text-sm rounded-md transition-colors ${
                        drawerPosition === pos
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {pos}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Controls */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Size
                </label>
                <div className="flex gap-2">
                  {(['sm', 'md', 'lg', 'full'] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => setDrawerSize(size)}
                      className={`px-3 py-2 text-sm rounded-md transition-colors ${
                        drawerSize === size
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Open Drawer Button */}
              <button
                onClick={() => setDrawerOpen(true)}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Menu size={20} />
                Open {drawerPosition} Drawer ({drawerSize})
              </button>
            </div>

            {/* Drawer Component */}
            <Drawer
              isOpen={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              position={drawerPosition}
              size={drawerSize}
              className="bg-gradient-to-br from-blue-50 to-white"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Custom Drawer</h3>
              <p className="text-gray-700 mb-6">
                This drawer is completely customizable! You can control:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Position (left, right, top, bottom)</li>
                <li>Size (sm, md, lg, full)</li>
                <li>Overlay behavior</li>
                <li>Close button visibility</li>
                <li>Custom styling and animations</li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  Close Drawer
                </button>
              </div>
            </Drawer>
          </div>

          {/* Accordion Demo */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Accordion Component</h2>
            
            <div className="space-y-6">
              {/* Basic Accordion */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Basic Accordion</h3>
                <Accordion 
                  items={accordionItems}
                  allowMultiple={false}
                  defaultOpen={[0]}
                />
              </div>

              {/* Multiple Open Accordion */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Multiple Open</h3>
                <Accordion 
                  items={accordionItems}
                  allowMultiple={true}
                  defaultOpen={[0, 1]}
                />
              </div>

              {/* Custom Icon Position */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Left Icon Position</h3>
                <Accordion 
                  items={accordionItems.slice(0, 2)}
                  iconPosition="left"
                  allowMultiple={true}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Usage Examples</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Drawer Code */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Drawer Usage</h3>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
                <code>{`import { Drawer } from 'mad-ui-components'

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Drawer
      </button>
      
      <Drawer 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        position="right"
        size="md"
      >
        <h3>Drawer Content</h3>
        <p>Your content here...</p>
      </Drawer>
    </>
  )
}`}</code>
              </pre>
            </div>

            {/* Accordion Code */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Accordion Usage</h3>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
                <code>{`import { Accordion } from 'mad-ui-components'

function MyComponent() {
  const items = [
    {
      id: 'item1',
      title: 'What is React?',
      content: 'React is a JavaScript library...'
    },
    {
      id: 'item2', 
      title: 'How do components work?',
      content: 'Components are like functions...'
    }
  ]
  
  return (
    <Accordion 
      items={items}
      allowMultiple={true}
      defaultOpen={[0]}
    />
  )
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Drawer Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Multiple positions (left, right, top, bottom)</li>
                <li>• Flexible sizing (sm, md, lg, full)</li>
                <li>• Smooth animations</li>
                <li>• Keyboard navigation (ESC to close)</li>
                <li>• Overlay click to close</li>
                <li>• Customizable styling</li>
                <li>• TypeScript support</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Accordion Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Single or multiple open items</li>
                <li>• Smooth expand/collapse animations</li>
                <li>• Custom icon positioning</li>
                <li>• Rich content support</li>
                <li>• Default open items</li>
                <li>• Customizable styling</li>
                <li>• TypeScript support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}