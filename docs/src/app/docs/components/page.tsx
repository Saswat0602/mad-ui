"use client"

import Link from "next/link"
import { Button } from "mad-ui-components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "mad-ui-components/card"
import { Badge } from "mad-ui-components/badge"
import { 
  Package, 
  FormInput, 
  Layout, 
  Image, 
  Navigation, 
  Layers,
  BarChart3,
  MessageSquare,
  ArrowRight
} from "lucide-react"

const componentCategories = [
  {
    title: "Core Components",
    description: "Essential building blocks for every application",
    icon: Package,
    href: "/docs/components/core",
    components: ["Button", "Input", "Label", "Card", "Checkbox", "Radio", "Select", "Textarea", "Slider", "Switch", "Progress", "Rating"],
    color: "bg-blue-500"
  },
  {
    title: "Form Components",
    description: "Advanced form elements and validation",
    icon: FormInput,
    href: "/docs/components/forms",
    components: ["Accordion", "Tabs", "Date Picker", "Time Picker", "Input OTP", "Radio Group", "Breadcrumbs", "Calendar"],
    color: "bg-green-500"
  },
  {
    title: "Layout Components",
    description: "Structure and organization components",
    icon: Layout,
    href: "/docs/components/layout",
    components: ["Navbar", "Sidebar", "Modal", "Drawer", "Sheet", "Resizable", "Scroll Area", "Separator", "Toggle", "Collapsible"],
    color: "bg-purple-500"
  },
  {
    title: "Media Components",
    description: "Image, video, and content display",
    icon: Image,
    href: "/docs/components/media",
    components: ["Avatar", "Badge", "Aspect Ratio", "Carousel", "Typography", "Skeleton"],
    color: "bg-orange-500"
  },
  {
    title: "Navigation Components",
    description: "Menu and navigation elements",
    icon: Navigation,
    href: "/docs/components/navigation",
    components: ["Command", "Combobox", "Navigation Menu", "Menubar", "Pagination"],
    color: "bg-indigo-500"
  },
  {
    title: "Overlay Components",
    description: "Modals, popovers, and overlays",
    icon: Layers,
    href: "/docs/components/overlay",
    components: ["Dialog", "Alert Dialog", "Popover", "Tooltip", "Hover Card", "Context Menu", "Dropdown Menu"],
    color: "bg-pink-500"
  },
  {
    title: "Data Components",
    description: "Data display and visualization",
    icon: BarChart3,
    href: "/docs/components/data",
    components: ["Table", "Data Table", "Chart"],
    color: "bg-teal-500"
  },
  {
    title: "Feedback Components",
    description: "User feedback and notifications",
    icon: MessageSquare,
    href: "/docs/components/feedback",
    components: ["Alert", "Toast", "Sonner"],
    color: "bg-red-500"
  }
]

export default function ComponentsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 lg:py-16">
      {/* Hero Section */}
      <div className="text-center mb-16 animate-slide-up">
        <Badge variant="outline" className="mb-6 px-4 py-2">
          <Package className="w-4 h-4 mr-2" />
          Component Library
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          50+ Beautiful
          <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            React Components
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Explore our complete collection of components with examples, variants, and comprehensive documentation. Build faster with production-ready components.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {componentCategories.map((category, index) => (
          <Card key={category.title} className={`group hover-lift bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/20 transition-all duration-300 animate-slide-up`} style={{animationDelay: `${index * 100}ms`}}>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-12 h-12 rounded-xl ${category.color} bg-gradient-to-br flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{category.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{category.components.length} components</p>
                </div>
              </div>
              <CardDescription className="text-base leading-relaxed">{category.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {category.components.slice(0, 6).map((component) => (
                  <Badge key={component} variant="secondary" className="text-xs hover:bg-primary/10 transition-colors">
                    {component}
                  </Badge>
                ))}
                {category.components.length > 6 && (
                  <Badge variant="secondary" className="text-xs">
                    +{category.components.length - 6} more
                  </Badge>
                )}
              </div>
              <Button className="w-full group/btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300">
                <Link href={category.href} className="flex items-center">
                  View Components
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-12 p-6 bg-muted rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Copy All Components</CardTitle>
              <CardDescription>
                Copy all components to your project for full customization control.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-background p-3 rounded-lg text-sm">
                <code>npx mad-ui-components copy --all</code>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Copy Specific Category</CardTitle>
              <CardDescription>
                Copy all components from a specific category.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-background p-3 rounded-lg text-sm">
                <code>npx mad-ui-components copy --category core</code>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Installation Reminder */}
      <div className="mt-8 p-6 bg-primary text-primary-foreground rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">Ready to get started?</h2>
        <p className="mb-4 opacity-90">
          Install Mad UI components and start building beautiful interfaces today.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="secondary" size="lg">
            <Link href="/docs/getting-started">Get Started</Link>
          </Button>
          <Button variant="outline" size="lg">
            <Link href="/docs/installation">Installation Guide</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

