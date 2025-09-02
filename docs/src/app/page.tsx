"use client"

import Link from "next/link"
import { Button } from "mad-ui-components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "mad-ui-components/card"
import { Badge } from "mad-ui-components/badge"
import { 
  ArrowRight, 
  Package, 
  Code, 
  Zap, 
  Palette, 
  Layers,
  Github,
  Star,
  Download,
  Rocket,
  Shield,
  Heart
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-32 lg:py-40 text-center overflow-hidden">
        {/* Enhanced background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/30 to-orange-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-float-delayed"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-float-delayed-4s"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative">
          <div className="animate-slide-up">
            {/* Enhanced Badge */}
            <div className="flex items-center justify-center mb-8">
              <div className="inline-flex items-center px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm shadow-lg">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ✨ Now Available - Version 2.0
                </span>
              </div>
            </div>
            
            {/* Enhanced Title */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight mb-10 leading-none">
              <span className="block text-foreground">Beautiful</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                React Components
              </span>
            </h1>
            
            {/* Enhanced Description */}
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed font-light">
              A comprehensive, modern UI component library built with 
              <span className="font-semibold text-foreground"> React</span> and 
              <span className="font-semibold text-foreground"> Tailwind CSS</span>. 
              Beautiful, accessible, and fully customizable.
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="group relative text-lg px-10 py-5 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 border-0"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Link href="/docs/getting-started" className="relative flex items-center">
                  <Rocket className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                  Get Started
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-10 py-5 h-16 border-2 border-border/50 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group hover:scale-105 backdrop-blur-sm"
              >
                <Link href="/docs/components" className="flex items-center">
                  <Package className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                  View Components
                </Link>
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-lg px-10 py-5 h-16 hover:bg-muted/50 transition-all duration-300 group backdrop-blur-sm"
              >
                <Link href="https://github.com" className="flex items-center">
                  <Github className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  <Star className="mr-2 h-5 w-5" />
                  Star on GitHub
                </Link>
              </Button>
            </div>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto">
              <div className="group text-center">
                <div className="text-4xl font-black text-foreground mb-3 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">50+</div>
                <div className="text-muted-foreground font-medium">Components</div>
              </div>
              <div className="group text-center">
                <div className="text-4xl font-black text-foreground mb-3 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">100%</div>
                <div className="text-muted-foreground font-medium">TypeScript</div>
              </div>
              <div className="group text-center">
                <div className="text-4xl font-black text-foreground mb-3 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">0KB</div>
                <div className="text-muted-foreground font-medium">Runtime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-4 py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 animate-slide-up">
            <Badge variant="outline" className="mb-6 px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Why Choose Mad UI
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Everything you need to
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                build amazing UIs
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From basic form elements to complex data displays, we&apos;ve got you covered with beautiful, accessible, and performant components.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <Card className="group hover-lift bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/20 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">Copy & Customize</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Copy components directly into your project and customize them to match your design system. Full control, zero dependencies.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover-lift bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/20 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">TypeScript Ready</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Built with TypeScript from the ground up for superior developer experience with full type safety and IntelliSense.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover-lift bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/20 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">Lightning Fast</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Optimized for performance with tree-shaking, minimal bundle sizes, and zero runtime overhead.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover-lift bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/20 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">Tailwind Powered</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Built on top of Tailwind CSS for consistent design, easy customization, and utility-first styling.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover-lift bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/20 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">Accessible</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Built with accessibility in mind. WCAG compliant components with keyboard navigation and screen reader support.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover-lift bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/20 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Layers className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">Modular Design</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Import only what you need with our modular architecture. Tree-shakeable and dependency-free.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Component Preview Section */}
      <section className="relative px-4 py-24 lg:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 animate-slide-up">
            <Badge variant="outline" className="mb-6 px-4 py-2">
              <Package className="w-4 h-4 mr-2" />
              Component Library
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Beautiful components,
              <span className="block bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                ready to use
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our collection of carefully crafted components with multiple variants, styles, and comprehensive documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <Card className="group hover-lift bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/20 transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mr-3">
                    <Package className="h-4 w-4 text-white" />
                  </div>
                  Core Components
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Essential building blocks for every application - buttons, inputs, cards, and more.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">Button</Badge>
                  <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">Input</Badge>
                  <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">Card</Badge>
                  <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">Label</Badge>
                  <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">+12 more</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Link href="/docs/components/core" className="flex items-center">
                    View All Core Components
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover-lift bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/20 transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mr-3">
                    <Code className="h-4 w-4 text-white" />
                  </div>
                  Form Components
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Advanced form elements with built-in validation and accessibility features.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">Select</Badge>
                  <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">Checkbox</Badge>
                  <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">Date Picker</Badge>
                  <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">Slider</Badge>
                  <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">+8 more</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Link href="/docs/components/forms" className="flex items-center">
                    View All Form Components
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover-lift bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/20 transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center mr-3">
                    <Layers className="h-4 w-4 text-white" />
                  </div>
                  Layout Components
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Structure and organization components for complex application layouts.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">Navbar</Badge>
                  <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">Sidebar</Badge>
                  <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">Modal</Badge>
                  <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">Drawer</Badge>
                  <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">+6 more</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Link href="/docs/components/layout" className="flex items-center">
                    View All Layout Components
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-pink-600 opacity-90"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="animate-slide-up">
            <Badge variant="secondary" className="mb-6 px-4 py-2 bg-white/10 border-white/20 text-white">
              <Heart className="w-4 h-4 mr-2" />
              Join the Community
            </Badge>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Ready to build something
              <span className="block text-yellow-300">amazing?</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 opacity-90 text-white max-w-3xl mx-auto leading-relaxed">
              Join thousands of developers who are already building better UIs with Mad UI components. Start your journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg px-8 py-4 h-14 bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 group hover-lift"
              >
                <Link href="/docs/getting-started" className="flex items-center">
                  <Rocket className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Start Building
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 h-14 border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300 group hover-lift"
              >
                <Link href="https://github.com" className="flex items-center">
                  <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  View on GitHub
                </Link>
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-lg px-8 py-4 h-14 text-white hover:bg-white/10 transition-all duration-300 group"
              >
                <Link href="/docs/components" className="flex items-center">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce transition-transform" />
                  Download Components
                </Link>
              </Button>
            </div>
            
            {/* Social proof */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto text-white">
              <div className="group">
                <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">10K+</div>
                <div className="opacity-80">Downloads</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">50+</div>
                <div className="opacity-80">Components</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">99%</div>
                <div className="opacity-80">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
