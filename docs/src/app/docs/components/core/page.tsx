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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coreComponents.map((component, index) => (
          <Card 
            key={component.title} 
            className={`group relative overflow-hidden bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700/50 hover:border-slate-600/80 transition-all duration-500 animate-slide-up hover:scale-105 shadow-xl hover:shadow-2xl`}
            style={{animationDelay: `${index * 100}ms`}}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Top accent line with gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80"></div>
            
            {/* Floating icon background */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardHeader className="pb-6 relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-blue-500/25`}>
                  <component.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="bg-slate-700/50 text-slate-300 border-slate-600/50">
                    Core
                  </Badge>
                </div>
              </div>
              
              <CardTitle className="text-2xl font-bold text-slate-100 group-hover:text-white transition-colors mb-3">
                {component.title}
              </CardTitle>
              
              <CardDescription className="text-base leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                {component.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6 relative z-10">
              {/* Interactive Variants Section */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Variants
                </h4>
                <div className="flex flex-wrap gap-2">
                  {component.variants.map((variant) => (
                    <Badge 
                      key={variant} 
                      variant="secondary" 
                      className="text-xs px-3 py-1 bg-slate-700/50 text-slate-300 border-slate-600/50 hover:bg-blue-500/20 hover:text-blue-300 hover:border-blue-500/30 transition-all duration-200 rounded-lg cursor-pointer"
                    >
                      {variant}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Interactive Sizes Section */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Sizes
                </h4>
                <div className="flex flex-wrap gap-2">
                  {component.sizes.map((size) => (
                    <Badge 
                      key={size} 
                      variant="outline" 
                      className="text-xs px-3 py-1 bg-slate-700/50 text-slate-300 border-slate-600/50 hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-500/30 transition-all duration-200 rounded-lg cursor-pointer"
                    >
                      {size}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Enhanced button with gradient */}
              <Button className="w-full group/btn bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 border-0 text-white transition-all duration-300 h-12 rounded-xl shadow-lg hover:shadow-xl hover:scale-105">
                <Link href={component.href} className="flex items-center justify-center w-full">
                  <span className="font-semibold">Explore {component.title}</span>
                  <span className="ml-2 text-lg">→</span>
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Enhanced Quick Actions */}
      <div className="mt-20 p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-3xl border border-slate-700/50">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-100 mb-3">Quick Actions</h2>
          <p className="text-slate-400 text-lg">Get started quickly with these commands</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600/50 hover:border-slate-500/80 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="text-xl text-slate-100 flex items-center">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center mr-3">
                  <span className="text-green-400 text-lg">⚡</span>
                </div>
                Copy All Core Components
              </CardTitle>
              <CardDescription className="text-slate-400">
                Copy all core components to your project for full customization control.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-600/50">
                <code className="text-sm text-green-400 font-mono">npx mad-ui-components copy --category core</code>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600/50 hover:border-slate-500/80 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="text-xl text-slate-100 flex items-center">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mr-3">
                  <span className="text-blue-400 text-lg">📁</span>
                </div>
                Copy Specific Components
              </CardTitle>
              <CardDescription className="text-slate-400">
                Copy only the components you need.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-600/50">
                <code className="text-sm text-blue-400 font-mono">npx mad-ui-components copy button input card</code>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Enhanced Installation Reminder */}
      <div className="mt-16 relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-90"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="relative z-10 p-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to build amazing UIs?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Install Mad UI components and start building beautiful, professional interfaces today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-white/90 px-8 py-4 h-14 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Link href="/docs/getting-started" className="flex items-center">
                🚀 Get Started
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 h-14 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
            >
              <Link href="/docs/installation" className="flex items-center">
                📚 Installation Guide
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
