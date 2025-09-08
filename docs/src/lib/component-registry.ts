import { ComponentCategory } from '@/types/component'

// Component registry with all available components
export const COMPONENT_REGISTRY = {
  // Core Components
  'button': {
    category: 'Core' as ComponentCategory,
    title: 'Button',
    description: 'Enterprise-level button component with analytics, accessibility, ripple effects, and advanced theming',
    version: '2.12.0',
    status: 'stable' as const,
    tags: ['form', 'action', 'interactive', 'enterprise', 'analytics', 'accessibility']
  },
  'input': {
    category: 'Core' as ComponentCategory,
    title: 'Input',
    description: 'Enterprise-level input component with validation, analytics, accessibility, and character counting',
    version: '2.12.0',
    status: 'stable' as const,
    tags: ['form', 'input', 'text', 'enterprise', 'validation', 'analytics']
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
    description: 'Enterprise-level card component with analytics, badges, loading states, and drag-and-drop support',
    version: '2.12.0',
    status: 'stable' as const,
    tags: ['layout', 'content', 'container', 'enterprise', 'analytics', 'interactive']
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
    description: 'Enterprise-level progress component with smooth animations, analytics, accessibility, and interactive features',
    version: '2.12.3',
    status: 'stable' as const,
    tags: ['feedback', 'progress', 'status', 'enterprise', 'analytics', 'accessibility']
  },
  'slider': {
    category: 'Core' as ComponentCategory,
    title: 'Slider',
    description: 'Enterprise-level slider component with smooth interactions, analytics, accessibility, and advanced functionality',
    version: '2.12.3',
    status: 'stable' as const,
    tags: ['form', 'slider', 'range', 'enterprise', 'analytics', 'accessibility']
  },
  'rating': {
    category: 'Core' as ComponentCategory,
    title: 'Rating',
    description: 'A rating component for displaying and selecting ratings',
    version: '1.0.0',
    status: 'beta' as const,
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
    description: 'Enterprise-level textarea component with character counting, auto-resize, validation, and enterprise features',
    version: '2.12.3',
    status: 'stable' as const,
    tags: ['form', 'textarea', 'multiline', 'enterprise', 'analytics', 'accessibility']
  },

  // Form Components
  'accordion': {
    category: 'Form' as ComponentCategory,
    title: 'Accordion',
    description: 'Enterprise-level accordion component with search functionality, analytics, accessibility, and advanced features',
    version: '2.12.3',
    status: 'beta' as const,
    tags: ['form', 'accordion', 'collapsible', 'enterprise', 'analytics', 'accessibility']
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
    status: 'alpha' as const,
    tags: ['form', 'calendar', 'date']
  },
  'datepicker': {
    category: 'Form' as ComponentCategory,
    title: 'Date Picker',
    description: 'A date picker component with calendar integration',
    version: '1.0.0',
    status: 'alpha' as const,
    tags: ['form', 'datepicker', 'date']
  },
  'timepicker': {
    category: 'Form' as ComponentCategory,
    title: 'Time Picker',
    description: 'A time picker component for time selection',
    version: '1.0.0',
    status: 'alpha' as const,
    tags: ['form', 'timepicker', 'time']
  },
  'inputotp': {
    category: 'Form' as ComponentCategory,
    title: 'Input OTP',
    description: 'An OTP input component for verification codes',
    version: '1.0.0',
    status: 'beta' as const,
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
  'modal': {
    category: 'Layout' as ComponentCategory,
    title: 'Modal',
    description: 'Enterprise-level modal component with analytics, accessibility, drag-and-drop, and advanced animations',
    version: '2.12.2',
    status: 'stable' as const,
    tags: ['layout', 'modal', 'overlay', 'enterprise', 'analytics', 'accessibility']
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
    description: 'Enterprise-level tooltip component with analytics, accessibility, advanced positioning, and animations',
    version: '2.12.2',
    status: 'stable' as const,
    tags: ['layout', 'tooltip', 'help', 'enterprise', 'analytics', 'accessibility']
  },
  'drawer': {
    category: 'Layout' as ComponentCategory,
    title: 'Drawer',
    description: 'Enterprise-level drawer component with analytics, accessibility, drag-and-drop, and advanced animations',
    version: '2.12.2',
    status: 'stable' as const,
    tags: ['layout', 'drawer', 'slide', 'enterprise', 'analytics', 'accessibility']
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
    description: 'Enterprise-level collapsible component with analytics, accessibility, and smooth animations',
    version: '2.12.3',
    status: 'stable' as const,
    tags: ['overlay', 'collapsible', 'expand', 'enterprise', 'analytics', 'accessibility']
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
    description: 'Enterprise-level carousel component with autoplay, analytics, accessibility, and advanced image gallery features',
    version: '2.12.3',
    status: 'stable' as const,
    tags: ['media', 'carousel', 'gallery', 'enterprise', 'analytics', 'accessibility']
  },
  'typography': {
    category: 'Media' as ComponentCategory,
    title: 'Typography',
    description: 'Typography components for text styling',
    version: '1.0.0',
    status: 'stable' as const,
    tags: ['media', 'typography', 'text']
  },

  // Navigation Components
  'navbar': {
    category: 'Navigation' as ComponentCategory,
    title: 'Navbar',
    description: 'A responsive navigation bar component with brand logo, navigation items, mobile menu support, and enterprise features like analytics tracking and accessibility.',
    version: '2.12.3',
    status: 'beta' as const,
    tags: ['navbar', 'navigation', 'header', 'mobile', 'responsive', 'enterprise', 'analytics', 'accessibility']
  },

  'sidebar': {
    category: 'Navigation' as ComponentCategory,
    title: 'Sidebar',
    description: 'A collapsible sidebar navigation component with persistent state, multiple variants, and enterprise features for building modern web applications.',
    version: '2.12.3',
    status: 'beta' as const,
    tags: ['sidebar', 'navigation', 'collapsible', 'persistent', 'enterprise', 'analytics', 'accessibility']
  },

  'breadcrumb': {
    category: 'Navigation' as ComponentCategory,
    title: 'Breadcrumb',
    description: 'A breadcrumb navigation component for showing the current page location within a site hierarchy with customizable separators and enterprise features.',
    version: '2.12.3',
    status: 'stable' as const,
    tags: ['breadcrumb', 'navigation', 'hierarchy', 'enterprise', 'analytics', 'accessibility']
  },

  // Data Components
  'table': {
    category: 'Data' as ComponentCategory,
    title: 'Table',
    description: 'A powerful data table component with sorting, selection, pagination, and enterprise features for displaying and managing large datasets.',
    version: '2.12.3',
    status: 'beta' as const,
    tags: ['table', 'data', 'sorting', 'pagination', 'selection', 'enterprise', 'analytics', 'accessibility']
  },

  // Feedback Components
  'alert': {
    category: 'Feedback' as ComponentCategory,
    title: 'Alert',
    description: 'A flexible alert component for displaying important messages with multiple variants, dismissible options, and enterprise features.',
    version: '2.12.3',
    status: 'stable' as const,
    tags: ['alert', 'notification', 'message', 'dismissible', 'enterprise', 'analytics', 'accessibility']
  },

  'toast': {
    category: 'Feedback' as ComponentCategory,
    title: 'Toast',
    description: 'A toast notification component for displaying temporary messages with customizable positioning, duration, and enterprise features.',
    version: '2.12.3',
    status: 'beta' as const,
    tags: ['toast', 'notification', 'message', 'temporary', 'enterprise', 'analytics', 'accessibility']
  },

  'sonner': {
    category: 'Feedback' as ComponentCategory,
    title: 'Sonner',
    description: 'A modern toast notification system with rich features, customizable themes, and enterprise-grade analytics and accessibility support.',
    version: '2.12.3',
    status: 'alpha' as const,
    tags: ['sonner', 'toast', 'notification', 'modern', 'enterprise', 'analytics', 'accessibility']
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
