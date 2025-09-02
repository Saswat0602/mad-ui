"use client"

import Link from "next/link"
import { Button } from "mad-ui-components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "mad-ui-components/card"
import { Badge } from "mad-ui-components/badge"
import { 
  MousePointer, 
  Type, 
  Square, 
  CheckSquare, 
  Circle, 
  List, 
  Sliders, 
  ToggleLeft, 
  BarChart3, 
  Star
} from "lucide-react"

const coreComponents = [
  {
    title: "Button",
    description: "A versatile button component with multiple variants, sizes, and states",
    icon: MousePointer,
    href: "/docs/components/core/button",
    variants: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    sizes: ["sm", "default", "lg", "icon"]
  },
  {
    title: "Input",
    description: "A flexible input component for text, email, password, and other input types",
    icon: Type,
    href: "/docs/components/core/input",
    variants: ["default", "error", "success"],
    sizes: ["sm", "default", "lg"]
  },
  {
    title: "Label",
    description: "A semantic label component for form controls and accessibility",
    icon: Type,
    href: "/docs/components/core/label",
    variants: ["default"],
    sizes: ["default"]
  },
  {
    title: "Card",
    description: "A container component for grouping related content and actions",
    icon: Square,
    href: "/docs/components/core/card",
    variants: ["default", "outlined"],
    sizes: ["default"]
  },
  {
    title: "Checkbox",
    description: "A checkbox component for boolean input with custom styling",
    icon: CheckSquare,
    href: "/docs/components/core/checkbox",
    variants: ["default", "error"],
    sizes: ["sm", "default", "lg"]
  },
  {
    title: "Radio",
    description: "A radio button component for single selection from a group",
    icon: Circle,
    href: "/docs/components/core/radio",
    variants: ["default", "error"],
    sizes: ["sm", "default", "lg"]
  },
  {
    title: "Select",
    description: "A select component for choosing from a list of options",
    icon: List,
    href: "/docs/components/core/select",
    variants: ["default", "error"],
    sizes: ["sm", "default", "lg"]
  },
  {
    title: "Textarea",
    description: "A multi-line text input component for longer content",
    icon: Type,
    href: "/docs/components/core/textarea",
    variants: ["default", "error", "success"],
    sizes: ["sm", "default", "lg"]
  },
  {
    title: "Slider",
    description: "A range slider component for numeric input with visual feedback",
    icon: Sliders,
    href: "/docs/components/core/slider",
    variants: ["default"],
    sizes: ["default"]
  },
  {
    title: "Switch",
    description: "A toggle switch component for boolean states",
    icon: ToggleLeft,
    href: "/docs/components/core/switch",
    variants: ["default", "error"],
    sizes: ["sm", "default", "lg"]
  },
  {
    title: "Progress",
    description: "A progress bar component for showing completion status",
    icon: BarChart3,
    href: "/docs/components/core/progress",
    variants: ["default", "success", "warning", "error"],
    sizes: ["sm", "default", "lg"]
  },
  {
    title: "Rating",
    description: "A rating component for displaying and collecting user ratings",
    icon: Star,
    href: "/docs/components/core/rating",
    variants: ["default", "readonly"],
    sizes: ["sm", "default", "lg"]
  }
]

export default function CoreComponentsPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary">Components</Badge>
          <Badge variant="outline">Core</Badge>
        </div>
        <h1 className="text-4xl font-bold mb-4">Core Components</h1>
        <p className="text-xl text-muted-foreground">
          Essential building blocks for every application. These components provide the foundation for user interfaces.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coreComponents.map((component) => (
          <Card key={component.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-500 text-white">
                  <component.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{component.title}</CardTitle>
              </div>
              <CardDescription>{component.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-sm mb-2">Variants</h4>
                <div className="flex flex-wrap gap-1">
                  {component.variants.map((variant) => (
                    <Badge key={variant} variant="secondary" className="text-xs">
                      {variant}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2">Sizes</h4>
                <div className="flex flex-wrap gap-1">
                  {component.sizes.map((size) => (
                    <Badge key={size} variant="outline" className="text-xs">
                      {size}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button className="w-full" variant="outline">
                <Link href={component.href}>
                  View Component
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
              <CardTitle>Copy All Core Components</CardTitle>
              <CardDescription>
                Copy all core components to your project for full customization control.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-background p-3 rounded-lg text-sm">
                <code>npx mad-ui-components copy --category core</code>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Copy Specific Components</CardTitle>
              <CardDescription>
                Copy only the components you need.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-background p-3 rounded-lg text-sm">
                <code>npx mad-ui-components copy button input card</code>
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
