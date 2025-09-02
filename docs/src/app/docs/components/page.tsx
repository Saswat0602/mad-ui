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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {componentCategories.map((category, index) => (
          <Card key={category.title} className={`group relative overflow-hidden bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700/50 hover:border-slate-600/80 transition-all duration-500 animate-slide-up hover:scale-105 shadow-xl hover:shadow-2xl`} style={{animationDelay: `${index * 100}ms`}}>
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Top accent line */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} opacity-80`}></div>
            
            <CardHeader className="pb-6 relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-16 h-16 rounded-2xl ${category.color} bg-gradient-to-br flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="bg-slate-700/50 text-slate-300 border-slate-600/50">
                    {category.components.length} components
                  </Badge>
                </div>
              </div>
              
              <CardTitle className="text-2xl font-bold text-slate-100 group-hover:text-white transition-colors mb-3">
                {category.title}
              </CardTitle>
              
              <CardDescription className="text-base leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                {category.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6 relative z-10">
              {/* Component tags with better styling */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Components</h4>
                <div className="flex flex-wrap gap-2">
                  {category.components.slice(0, 8).map((component) => (
                    <Badge 
                      key={component} 
                      variant="secondary" 
                      className="text-xs px-3 py-1 bg-slate-700/50 text-slate-300 border-slate-600/50 hover:bg-slate-600/70 hover:text-white transition-all duration-200 rounded-lg"
                    >
                      {component}
                    </Badge>
                  ))}
                  {category.components.length > 8 && (
                    <Badge variant="secondary" className="text-xs px-3 py-1 bg-blue-600/20 text-blue-300 border-blue-500/30 rounded-lg">
                      +{category.components.length - 8} more
                    </Badge>
                  )}
                </div>
              </div>
              
              {/* Enhanced button */}
              <Button className="w-full group/btn bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 border border-slate-600/50 hover:border-slate-500/80 text-slate-200 hover:text-white transition-all duration-300 h-12 rounded-xl shadow-lg hover:shadow-xl">
                <Link href={category.href} className="flex items-center justify-center w-full">
                  <span className="font-semibold">Explore {category.title}</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
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
                Copy All Components
              </CardTitle>
              <CardDescription className="text-slate-400">
                Copy all components to your project for full customization control.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-600/50">
                <code className="text-sm text-green-400 font-mono">npx mad-ui-components copy --all</code>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600/50 hover:border-slate-500/80 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="text-xl text-slate-100 flex items-center">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mr-3">
                  <span className="text-blue-400 text-lg">📁</span>
                </div>
                Copy Specific Category
              </CardTitle>
              <CardDescription className="text-slate-400">
                Copy all components from a specific category.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-600/50">
                <code className="text-sm text-blue-400 font-mono">npx mad-ui-components copy --category core</code>
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
                <ArrowRight className="ml-2 h-5 w-5" />
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

