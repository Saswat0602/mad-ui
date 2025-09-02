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
  MessageSquare
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
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Components</h1>
        <p className="text-xl text-muted-foreground">
          Explore our complete collection of React components with examples, variants, and usage instructions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {componentCategories.map((category) => (
          <Card key={category.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg ${category.color} text-white`}>
                  <category.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </div>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {category.components.map((component) => (
                  <Badge key={component} variant="secondary" className="text-xs">
                    {component}
                  </Badge>
                ))}
              </div>
              <Button className="w-full" variant="outline">
                <Link href={category.href}>
                  View Components
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

