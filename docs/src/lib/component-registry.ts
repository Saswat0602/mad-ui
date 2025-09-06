import { ComponentCategory, ComponentDoc } from '@/types/component'

// Component registry with all available components
export const COMPONENT_REGISTRY = {
  // Core Components
  'button': {
    category: 'Core' as ComponentCategory,
    title: 'Button',
    description: 'A versatile button component with multiple variants and sizes',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['form', 'action', 'interactive']
  },
  'input': {
    category: 'Core' as ComponentCategory,
    title: 'Input',
    description: 'A flexible input component for text, email, password, and other input types',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['form', 'input', 'text']
  },
  'label': {
    category: 'Core' as ComponentCategory,
    title: 'Label',
    description: 'A label component for form elements and accessibility',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['form', 'label', 'accessibility']
  },
  'card': {
    category: 'Core' as ComponentCategory,
    title: 'Card',
    description: 'A flexible card component for displaying content',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['layout', 'content', 'container']
  },
  'checkbox': {
    category: 'Core' as ComponentCategory,
    title: 'Checkbox',
    description: 'A checkbox component for boolean input',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['form', 'checkbox', 'boolean']
  },
  'radio': {
    category: 'Core' as ComponentCategory,
    title: 'Radio',
    description: 'A radio button component for single selection',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['form', 'radio', 'selection']
  },
  'select': {
    category: 'Core' as ComponentCategory,
    title: 'Select',
    description: 'A select dropdown component for choosing from options',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['form', 'select', 'dropdown']
  },
  'switch': {
    category: 'Core' as ComponentCategory,
    title: 'Switch',
    description: 'A toggle switch component for boolean input',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['form', 'switch', 'toggle']
  },
  'progress': {
    category: 'Core' as ComponentCategory,
    title: 'Progress',
    description: 'A progress bar component for showing completion status',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['feedback', 'progress', 'status']
  },
  'slider': {
    category: 'Core' as ComponentCategory,
    title: 'Slider',
    description: 'A range slider component for numeric input',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['form', 'slider', 'range']
  },
  'rating': {
    category: 'Core' as ComponentCategory,
    title: 'Rating',
    description: 'A rating component for displaying and selecting ratings',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['form', 'rating', 'stars']
  },
  'skeleton': {
    category: 'Core' as ComponentCategory,
    title: 'Skeleton',
    description: 'A skeleton loading component for content placeholders',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['feedback', 'loading', 'placeholder']
  },
  'textarea': {
    category: 'Core' as ComponentCategory,
    title: 'Textarea',
    description: 'A textarea component for multi-line text input',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['form', 'textarea', 'multiline']
  },

  // Form Components
  'accordion': {
    category: 'Form' as ComponentCategory,
    title: 'Accordion',
    description: 'A collapsible accordion component for organizing content',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['form', 'accordion', 'collapsible']
  },
  'breadcrumbs': {
    category: 'Form' as ComponentCategory,
    title: 'Breadcrumbs',
    description: 'A breadcrumb navigation component',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['navigation', 'breadcrumbs', 'path']
  },
  'calendar': {
    category: 'Form' as ComponentCategory,
    title: 'Calendar',
    description: 'A calendar component for date selection',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['form', 'calendar', 'date']
  },
  'datepicker': {
    category: 'Form' as ComponentCategory,
    title: 'Date Picker',
    description: 'A date picker component with calendar integration',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['form', 'datepicker', 'date']
  },
  'timepicker': {
    category: 'Form' as ComponentCategory,
    title: 'Time Picker',
    description: 'A time picker component for time selection',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['form', 'timepicker', 'time']
  },
  'inputotp': {
    category: 'Form' as ComponentCategory,
    title: 'Input OTP',
    description: 'An OTP input component for verification codes',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['form', 'otp', 'verification']
  },
  'radiogroup': {
    category: 'Form' as ComponentCategory,
    title: 'Radio Group',
    description: 'A radio group component for managing multiple radio buttons',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['form', 'radiogroup', 'selection']
  },
  'tabs': {
    category: 'Form' as ComponentCategory,
    title: 'Tabs',
    description: 'A tabs component for organizing content into panels',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['form', 'tabs', 'panels']
  },

  // Layout Components
  'layout': {
    category: 'Layout' as ComponentCategory,
    title: 'Layout',
    description: 'A main layout component for page structure',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['layout', 'structure', 'container']
  },
  'navbar': {
    category: 'Layout' as ComponentCategory,
    title: 'Navbar',
    description: 'A navigation bar component',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['layout', 'navbar', 'navigation']
  },
  'sidebar': {
    category: 'Layout' as ComponentCategory,
    title: 'Sidebar',
    description: 'A sidebar component for navigation and content',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['layout', 'sidebar', 'navigation']
  },
  'modal': {
    category: 'Layout' as ComponentCategory,
    title: 'Modal',
    description: 'A modal dialog component for overlays',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['layout', 'modal', 'overlay']
  },
  'popover': {
    category: 'Layout' as ComponentCategory,
    title: 'Popover',
    description: 'A popover component for contextual information',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['layout', 'popover', 'tooltip']
  },
  'tooltip': {
    category: 'Layout' as ComponentCategory,
    title: 'Tooltip',
    description: 'A tooltip component for additional information',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['layout', 'tooltip', 'help']
  },
  'drawer': {
    category: 'Layout' as ComponentCategory,
    title: 'Drawer',
    description: 'A drawer component for slide-out content',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['layout', 'drawer', 'slide']
  },
  'sheet': {
    category: 'Layout' as ComponentCategory,
    title: 'Sheet',
    description: 'A sheet component for overlay content',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['layout', 'sheet', 'overlay']
  },
  'resizable': {
    category: 'Layout' as ComponentCategory,
    title: 'Resizable',
    description: 'A resizable component for adjustable panels',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['layout', 'resizable', 'panels']
  },
  'scrollarea': {
    category: 'Layout' as ComponentCategory,
    title: 'Scroll Area',
    description: 'A scroll area component with custom styling',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['layout', 'scroll', 'area']
  },

  // Data Components
  'table': {
    category: 'Data Display' as ComponentCategory,
    title: 'Table',
    description: 'A table component for displaying tabular data',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['data', 'table', 'tabular']
  },
  'datatable': {
    category: 'Data Display' as ComponentCategory,
    title: 'Data Table',
    description: 'An advanced data table with sorting, filtering, and pagination',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['data', 'datatable', 'advanced']
  },
  'chart': {
    category: 'Data Display' as ComponentCategory,
    title: 'Chart',
    description: 'A chart component for data visualization',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['data', 'chart', 'visualization']
  },

  // Feedback Components
  'alert': {
    category: 'Feedback' as ComponentCategory,
    title: 'Alert',
    description: 'An alert component for displaying messages',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['feedback', 'alert', 'message']
  },
  'toast': {
    category: 'Feedback' as ComponentCategory,
    title: 'Toast',
    description: 'A toast notification component',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['feedback', 'toast', 'notification']
  },
  'sonner': {
    category: 'Feedback' as ComponentCategory,
    title: 'Sonner',
    description: 'A modern toast notification system',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['feedback', 'sonner', 'notification']
  },

  // Navigation Components
  'navigationmenu': {
    category: 'Navigation' as ComponentCategory,
    title: 'Navigation Menu',
    description: 'A navigation menu component with dropdowns',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['navigation', 'menu', 'dropdown']
  },
  'menubar': {
    category: 'Navigation' as ComponentCategory,
    title: 'Menu Bar',
    description: 'A menu bar component for application menus',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['navigation', 'menubar', 'menu']
  },
  'command': {
    category: 'Navigation' as ComponentCategory,
    title: 'Command',
    description: 'A command palette component for quick actions',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['navigation', 'command', 'palette']
  },
  'combobox': {
    category: 'Navigation' as ComponentCategory,
    title: 'Combobox',
    description: 'A combobox component with search and selection',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['navigation', 'combobox', 'search']
  },
  'pagination': {
    category: 'Navigation' as ComponentCategory,
    title: 'Pagination',
    description: 'A pagination component for navigating through pages',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['navigation', 'pagination', 'pages']
  },

  // Overlay Components
  'dialog': {
    category: 'Overlay' as ComponentCategory,
    title: 'Dialog',
    description: 'A dialog component for modal interactions',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['overlay', 'dialog', 'modal']
  },
  'alertdialog': {
    category: 'Overlay' as ComponentCategory,
    title: 'Alert Dialog',
    description: 'An alert dialog component for confirmations',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['overlay', 'alertdialog', 'confirmation']
  },
  'dropdownmenu': {
    category: 'Overlay' as ComponentCategory,
    title: 'Dropdown Menu',
    description: 'A dropdown menu component for actions',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['overlay', 'dropdown', 'menu']
  },
  'contextmenu': {
    category: 'Overlay' as ComponentCategory,
    title: 'Context Menu',
    description: 'A context menu component for right-click actions',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['overlay', 'contextmenu', 'rightclick']
  },
  'hovercard': {
    category: 'Overlay' as ComponentCategory,
    title: 'Hover Card',
    description: 'A hover card component for additional information',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['overlay', 'hovercard', 'information']
  },
  'separator': {
    category: 'Overlay' as ComponentCategory,
    title: 'Separator',
    description: 'A separator component for dividing content',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['overlay', 'separator', 'divider']
  },
  'toggle': {
    category: 'Overlay' as ComponentCategory,
    title: 'Toggle',
    description: 'A toggle component for switching states',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['overlay', 'toggle', 'switch']
  },
  'collapsible': {
    category: 'Overlay' as ComponentCategory,
    title: 'Collapsible',
    description: 'A collapsible component for hiding/showing content',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['overlay', 'collapsible', 'expand']
  },

  // Media Components
  'avatar': {
    category: 'Media' as ComponentCategory,
    title: 'Avatar',
    description: 'An avatar component for user profiles',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['media', 'avatar', 'profile']
  },
  'badge': {
    category: 'Media' as ComponentCategory,
    title: 'Badge',
    description: 'A badge component for labels and status',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['media', 'badge', 'label']
  },
  'aspectratio': {
    category: 'Media' as ComponentCategory,
    title: 'Aspect Ratio',
    description: 'An aspect ratio component for maintaining proportions',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['media', 'aspectratio', 'proportions']
  },
  'carousel': {
    category: 'Media' as ComponentCategory,
    title: 'Carousel',
    description: 'A carousel component for image galleries',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['media', 'carousel', 'gallery']
  },
  'typography': {
    category: 'Media' as ComponentCategory,
    title: 'Typography',
    description: 'Typography components for text styling',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['media', 'typography', 'text']
  }
} as const

export type ComponentSlug = keyof typeof COMPONENT_REGISTRY

export function getComponentBySlug(slug: string) {
  return COMPONENT_REGISTRY[slug as ComponentSlug] || null
}

export function getAllComponents() {
  return Object.entries(COMPONENT_REGISTRY).map(([slug, meta]) => ({
    slug,
    ...meta
  }))
}

export function getComponentsByCategory(category: ComponentCategory) {
  return Object.entries(COMPONENT_REGISTRY)
    .filter(([, meta]) => meta.category === category)
    .map(([slug, meta]) => ({
      slug,
      ...meta
    }))
}
