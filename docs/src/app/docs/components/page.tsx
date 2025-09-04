"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'mad-ui-components/card'
import { Badge } from 'mad-ui-components/badge'
import { Button } from 'mad-ui-components/button'
import { Input } from 'mad-ui-components/input'
import { 
  Package, 
  ArrowRight, 
  Search,
  Code,
  FileText,
  Layout,
  Zap,
  Navigation,
  Bell,
  Image,
  BarChart3,
  Layers,
  Sparkles,
  ExternalLink,
  BookOpen
} from 'lucide-react'
import { ComponentsHero } from "@/components/hero-section"

interface ComponentCategory {
  id: string
  title: string
  description: string
  icon: React.ElementType
  count: number
  color: string
  components: ComponentItem[]
}

interface ComponentItem {
  name: string
  path: string
  description: string
  status: 'stable' | 'beta' | 'new'
  complexity: 'simple' | 'moderate' | 'complex'
}

const componentCategories: ComponentCategory[] = [
  {
    id: 'core',
    title: 'Core Components',
    description: 'Essential building blocks for any UI',
    icon: Package,
    count: 13,
    color: 'from-blue-500 to-cyan-500',
    components: [
      { name: 'Button', path: '/docs/components/core/button', description: 'Versatile button component with multiple variants', status: 'stable', complexity: 'simple' },
      { name: 'Input', path: '/docs/components/core/input', description: 'Form input with validation states', status: 'stable', complexity: 'simple' },
      { name: 'Card', path: '/docs/components/core/card', description: 'Flexible container component', status: 'stable', complexity: 'simple' },
      { name: 'Label', path: '/docs/components/core/label', description: 'Accessible form labels', status: 'stable', complexity: 'simple' },
      { name: 'Checkbox', path: '/docs/components/core/checkbox', description: 'Boolean input control', status: 'stable', complexity: 'simple' },
      { name: 'Radio', path: '/docs/components/core/radio', description: 'Single selection input', status: 'stable', complexity: 'simple' },
      { name: 'Switch', path: '/docs/components/core/switch', description: 'Toggle control component', status: 'stable', complexity: 'simple' },
      { name: 'Slider', path: '/docs/components/core/slider', description: 'Range input component', status: 'stable', complexity: 'moderate' },
      { name: 'Progress', path: '/docs/components/core/progress', description: 'Progress indicator', status: 'stable', complexity: 'simple' },
      { name: 'Rating', path: '/docs/components/core/rating', description: 'Star rating component', status: 'stable', complexity: 'moderate' },
      { name: 'Select', path: '/docs/components/core/select', description: 'Dropdown selection', status: 'stable', complexity: 'moderate' },
      { name: 'Textarea', path: '/docs/components/core/textarea', description: 'Multi-line text input', status: 'stable', complexity: 'simple' },
      { name: 'Skeleton', path: '/docs/components/core/skeleton', description: 'Loading placeholder', status: 'stable', complexity: 'simple' }
    ]
  },
  {
    id: 'forms',
    title: 'Form Components',
    description: 'Advanced form controls and layouts',
    icon: FileText,
    count: 9,
    color: 'from-emerald-500 to-green-500',
    components: [
      { name: 'Accordion', path: '/docs/components/forms/accordion', description: 'Collapsible content sections', status: 'stable', complexity: 'moderate' },
      { name: 'Breadcrumbs', path: '/docs/components/forms/breadcrumbs', description: 'Navigation breadcrumb trail', status: 'stable', complexity: 'simple' },
      { name: 'Tabs', path: '/docs/components/forms/tabs', description: 'Tabbed interface component', status: 'stable', complexity: 'moderate' },
      { name: 'Calendar', path: '/docs/components/forms/calendar', description: 'Date selection calendar', status: 'stable', complexity: 'complex' },
      { name: 'Date Picker', path: '/docs/components/forms/date-picker', description: 'Date input with calendar', status: 'stable', complexity: 'complex' },
      { name: 'Time Picker', path: '/docs/components/forms/time-picker', description: 'Time selection component', status: 'stable', complexity: 'complex' },
      { name: 'Input OTP', path: '/docs/components/forms/input-otp', description: 'One-time password input', status: 'stable', complexity: 'moderate' },
      { name: 'Radio Group', path: '/docs/components/forms/radio-group', description: 'Group of radio buttons', status: 'stable', complexity: 'simple' },
      { name: 'Form', path: '/docs/components/forms/form', description: 'React Hook Form integration', status: 'stable', complexity: 'complex' }
    ]
  },
  {
    id: 'layout',
    title: 'Layout Components',
    description: 'Structure and organize your content',
    icon: Layout,
    count: 10,
    color: 'from-purple-500 to-pink-500',
    components: [
      { name: 'Layout', path: '/docs/components/layout/layout', description: 'Page layout structure', status: 'stable', complexity: 'moderate' },
      { name: 'Navbar', path: '/docs/components/layout/navbar', description: 'Navigation bar component', status: 'stable', complexity: 'moderate' },
      { name: 'Sidebar', path: '/docs/components/layout/sidebar', description: 'Collapsible sidebar', status: 'stable', complexity: 'complex' },
      { name: 'Modal', path: '/docs/components/layout/modal', description: 'Overlay modal dialog', status: 'stable', complexity: 'moderate' },
      { name: 'Drawer', path: '/docs/components/layout/drawer', description: 'Slide-out panel', status: 'stable', complexity: 'moderate' },
      { name: 'Sheet', path: '/docs/components/layout/sheet', description: 'Side overlay panel', status: 'stable', complexity: 'moderate' },
      { name: 'Popover', path: '/docs/components/layout/popover', description: 'Floating content container', status: 'stable', complexity: 'moderate' },
      { name: 'Tooltip', path: '/docs/components/layout/tooltip', description: 'Informational tooltip', status: 'stable', complexity: 'simple' },
      { name: 'Scroll Area', path: '/docs/components/layout/scroll-area', description: 'Custom scrollable area', status: 'stable', complexity: 'simple' },
      { name: 'Resizable', path: '/docs/components/layout/resizable', description: 'Resizable panels', status: 'stable', complexity: 'complex' }
    ]
  },
  {
    id: 'overlay',
    title: 'Overlay Components',
    description: 'Modal and overlay interactions',
    icon: Layers,
    count: 8,
    color: 'from-orange-500 to-red-500',
    components: [
      { name: 'Dialog', path: '/docs/components/overlay/dialog', description: 'Modal dialog component', status: 'stable', complexity: 'moderate' },
      { name: 'Alert Dialog', path: '/docs/components/overlay/alert-dialog', description: 'Alert confirmation dialog', status: 'stable', complexity: 'moderate' },
      { name: 'Dropdown Menu', path: '/docs/components/overlay/dropdown-menu', description: 'Dropdown menu component', status: 'stable', complexity: 'moderate' },
      { name: 'Context Menu', path: '/docs/components/overlay/context-menu', description: 'Right-click context menu', status: 'stable', complexity: 'moderate' },
      { name: 'Hover Card', path: '/docs/components/overlay/hover-card', description: 'Hover-triggered content card', status: 'stable', complexity: 'simple' },
      { name: 'Collapsible', path: '/docs/components/overlay/collapsible', description: 'Collapsible content area', status: 'stable', complexity: 'simple' },
      { name: 'Toggle', path: '/docs/components/overlay/toggle', description: 'Toggle button component', status: 'stable', complexity: 'simple' },
      { name: 'Separator', path: '/docs/components/overlay/separator', description: 'Visual content separator', status: 'stable', complexity: 'simple' }
    ]
  },
  {
    id: 'media',
    title: 'Media Components',
    description: 'Images, avatars, and visual content',
    icon: Image,
    count: 5,
    color: 'from-pink-500 to-rose-500',
    components: [
      { name: 'Avatar', path: '/docs/components/media/avatar', description: 'User profile picture', status: 'stable', complexity: 'simple' },
      { name: 'Badge', path: '/docs/components/media/badge', description: 'Status and notification badge', status: 'stable', complexity: 'simple' },
      { name: 'Carousel', path: '/docs/components/media/carousel', description: 'Image and content carousel', status: 'stable', complexity: 'complex' },
      { name: 'Aspect Ratio', path: '/docs/components/media/aspect-ratio', description: 'Responsive aspect ratio container', status: 'stable', complexity: 'simple' },
      { name: 'Typography', path: '/docs/components/media/typography', description: 'Text styling components', status: 'stable', complexity: 'simple' }
    ]
  },
  {
    id: 'navigation',
    title: 'Navigation Components',
    description: 'Site and app navigation elements',
    icon: Navigation,
    count: 5,
    color: 'from-indigo-500 to-purple-500',
    components: [
      { name: 'Navigation Menu', path: '/docs/components/navigation/navigation-menu', description: 'Site navigation menu', status: 'stable', complexity: 'complex' },
      { name: 'Menubar', path: '/docs/components/navigation/menubar', description: 'Application menu bar', status: 'stable', complexity: 'moderate' },
      { name: 'Pagination', path: '/docs/components/navigation/pagination', description: 'Page navigation controls', status: 'stable', complexity: 'moderate' },
      { name: 'Command', path: '/docs/components/navigation/command', description: 'Command palette interface', status: 'stable', complexity: 'complex' },
      { name: 'Combobox', path: '/docs/components/navigation/combobox', description: 'Searchable select dropdown', status: 'stable', complexity: 'complex' }
    ]
  },
  {
    id: 'data',
    title: 'Data Display',
    description: 'Tables, charts, and data visualization',
    icon: BarChart3,
    count: 3,
    color: 'from-cyan-500 to-blue-500',
    components: [
      { name: 'Table', path: '/docs/components/data/table', description: 'Basic table component', status: 'stable', complexity: 'moderate' },
      { name: 'Data Table', path: '/docs/components/data/data-table', description: 'Advanced data table with sorting', status: 'stable', complexity: 'complex' },
      { name: 'Chart', path: '/docs/components/data/chart', description: 'Data visualization charts', status: 'stable', complexity: 'complex' }
    ]
  },
  {
    id: 'feedback',
    title: 'Feedback Components',
    description: 'Notifications, alerts, and user feedback',
    icon: Bell,
    count: 3,
    color: 'from-yellow-500 to-orange-500',
    components: [
      { name: 'Alert', path: '/docs/components/feedback/alert', description: 'Alert message component', status: 'stable', complexity: 'simple' },
      { name: 'Toast', path: '/docs/components/feedback/toast', description: 'Toast notification component', status: 'stable', complexity: 'moderate' },
      { name: 'Sonner', path: '/docs/components/feedback/sonner', description: 'Toast notification system', status: 'stable', complexity: 'moderate' }
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function ComponentsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredCategories = componentCategories.filter(category => {
    if (selectedCategory && category.id !== selectedCategory) return false
    
    if (!searchTerm) return true
    
    return category.components.some(component => 
      component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      component.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }).map(category => ({
    ...category,
    components: category.components.filter(component => 
      !searchTerm || 
      component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      component.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }))

  const totalComponents = componentCategories.reduce((sum, cat) => sum + cat.count, 0)

  return (
    <div className="min-h-screen">
      <ComponentsHero />
      
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Badge variant="success" className="text-sm px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              {totalComponents} Components
            </Badge>
            <Badge variant="info" className="text-sm px-4 py-2">
              <Code className="w-4 h-4 mr-2" />
              TypeScript Ready
            </Badge>
            <Badge variant="warning" className="text-sm px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Zero Dependencies
            </Badge>
          </div>

          {/* Search */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search components..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border border-border rounded-2xl bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            <Button
              variant={selectedCategory === null ? "primary" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className="rounded-full"
            >
              All Categories
            </Button>
            {componentCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "primary" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full"
              >
                {category.title}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Component Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
        >
          {filteredCategories.map((category) => (
            <motion.div key={category.id} variants={itemVariants}>
              <Card className="group hover-lift elevation-1 transition-all duration-300 hover:elevation-3 cursor-pointer h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                        {category.title}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs mt-1">
                        {category.count} Components
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="leading-relaxed text-sm">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {category.components.slice(0, 3).map((component) => (
                      <div key={component.name} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{component.name}</span>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            component.complexity === 'simple' ? 'border-green-300 text-green-700' :
                            component.complexity === 'moderate' ? 'border-yellow-300 text-yellow-700' :
                            'border-red-300 text-red-700'
                          }`}
                        >
                          {component.complexity}
                        </Badge>
                      </div>
                    ))}
                    {category.components.length > 3 && (
                      <div className="text-xs text-muted-foreground pt-1">
                        +{category.components.length - 3} more components
                      </div>
                    )}
                  </div>
                  <Link href={`/docs/components/${category.id}`}>
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-all">
                      View Components
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Individual Components Quick Access */}
        {(searchTerm || selectedCategory) && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              {searchTerm ? `Search Results for "${searchTerm}"` : `${componentCategories.find(c => c.id === selectedCategory)?.title} Components`}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredCategories.flatMap(category => category.components).map((component) => (
                <Link key={component.name} href={component.path}>
                  <Card className="group hover-lift transition-all duration-200 cursor-pointer">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base font-semibold group-hover:text-primary transition-colors">
                          {component.name}
                        </CardTitle>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <CardDescription className="text-sm leading-relaxed">
                        {component.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </motion.section>
        )}

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 rounded-3xl p-12 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to build something amazing?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start building beautiful user interfaces with Mad UI components. Each component comes with detailed documentation, examples, and copy-paste code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/docs/getting-started">
                <Button size="lg" className="elevation-2 hover-lift">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/docs/examples">
                <Button variant="outline" size="lg" className="hover-lift">
                  <Code className="mr-2 h-5 w-5" />
                  View Examples
                </Button>
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}