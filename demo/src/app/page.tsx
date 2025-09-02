'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'mad-ui-components';

const components = [
  {
    name: 'Alert',
    description: 'Displays a callout for user attention',
    category: 'Feedback',
    href: '/components/alert',
    icon: '🔔'
  },
  {
    name: 'Button',
    description: 'Interactive button component with various styles',
    category: 'Input',
    href: '/components/button',
    icon: '🔘'
  },
  {
    name: 'Card',
    description: 'Container for organizing content and actions',
    category: 'Layout',
    href: '/components/card',
    icon: '📋'
  },
  {
    name: 'Input',
    description: 'Text input field for user data entry',
    category: 'Input',
    href: '/components/input',
    icon: '✏️'
  },
  {
    name: 'Label',
    description: 'Accessible label for form controls',
    category: 'Input',
    href: '/components/label',
    icon: '🏷️'
  },
  {
    name: 'Textarea',
    description: 'Multi-line text input area',
    category: 'Input',
    href: '/components/textarea',
    icon: '📝'
  },
  {
    name: 'Select',
    description: 'Dropdown selection component',
    category: 'Input',
    href: '/components/select',
    icon: '📋'
  },
  {
    name: 'Checkbox',
    description: 'Checkbox input for boolean selection',
    category: 'Input',
    href: '/components/checkbox',
    icon: '☑️'
  },
  {
    name: 'Switch',
    description: 'Toggle switch for binary states',
    category: 'Input',
    href: '/components/switch',
    icon: '🔀'
  },
  {
    name: 'Radio',
    description: 'Radio button for single selection',
    category: 'Input',
    href: '/components/radio',
    icon: '🔘'
  },
  {
    name: 'Calendar',
    description: 'Date picker calendar component',
    category: 'Input',
    href: '/components/calendar',
    icon: '📅'
  },
  {
    name: 'TimePicker',
    description: 'Time selection component',
    category: 'Input',
    href: '/components/timepicker',
    icon: '⏰'
  },
  {
    name: 'Rating',
    description: 'Star rating component',
    category: 'Feedback',
    href: '/components/rating',
    icon: '⭐'
  },
  {
    name: 'Progress',
    description: 'Progress bar for loading states',
    category: 'Feedback',
    href: '/components/progress',
    icon: '📊'
  },
  {
    name: 'Skeleton',
    description: 'Loading placeholder component',
    category: 'Feedback',
    href: '/components/skeleton',
    icon: '💀'
  },
  {
    name: 'Breadcrumbs',
    description: 'Navigation breadcrumb component',
    category: 'Navigation',
    href: '/components/breadcrumbs',
    icon: '🍞'
  },
  {
    name: 'Table',
    description: 'Data table with sorting and pagination',
    category: 'Data Display',
    href: '/components/table',
    icon: '📊'
  },
  {
    name: 'Popover',
    description: 'Contextual overlay component',
    category: 'Overlay',
    href: '/components/popover',
    icon: '💭'
  },
  {
    name: 'Modal',
    description: 'Dialog overlay for important actions',
    category: 'Overlay',
    href: '/components/modal',
    icon: '🪟'
  },
  {
    name: 'Navbar',
    description: 'Top navigation bar component',
    category: 'Navigation',
    href: '/components/navbar',
    icon: '🧭'
  },
  {
    name: 'Sidebar',
    description: 'Side navigation component',
    category: 'Navigation',
    href: '/components/sidebar',
    icon: '📱'
  },
  {
    name: 'Layout',
    description: 'Page layout structure component',
    category: 'Layout',
    href: '/components/layout',
    icon: '🏗️'
  }
];

const categories = ['All', 'Input', 'Feedback', 'Layout', 'Navigation', 'Data Display', 'Overlay'];

export default function ComponentLibrary() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">mad-ui-components</h1>
                <p className="text-slate-400 text-sm">Beautiful, accessible components</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search components..."
                  className="w-64 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <span className="absolute right-3 top-2.5 text-slate-400 text-sm">⌘K</span>
              </div>
              <a
                href="https://github.com"
                className="text-slate-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Build beautiful interfaces
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A collection of beautifully designed, accessible components that you can copy and paste into your apps. 
            Built with TypeScript, Tailwind CSS, and React.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors border border-slate-700"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component) => (
            <Link key={component.name} href={component.href}>
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800 hover:border-purple-500 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{component.icon}</span>
                    <div>
                      <CardTitle className="text-white group-hover:text-purple-400 transition-colors">
                        {component.name}
                      </CardTitle>
                      <span className="text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">
                        {component.category}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400">
                    {component.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-12 border-t border-slate-800">
          <p className="text-slate-400">
            Built with ❤️ by the mad-ui-components team
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Documentation</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Examples</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Discord</a>
          </div>
        </div>
      </div>
    </div>
  );
}
