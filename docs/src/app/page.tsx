"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "mad-ui-components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "mad-ui-components/card"
import { Badge } from "mad-ui-components/badge"
import { Input } from "mad-ui-components/input"
import { Label } from "mad-ui-components/label"
import { Checkbox } from "mad-ui-components/checkbox"

import { Slider } from "mad-ui-components/slider"
import { Progress } from "mad-ui-components/progress"
import { Rating } from "mad-ui-components/rating"
import { 
  ArrowRight, 
  Package, 
  Code, 
  Zap, 
  Layers,
  Github,
  Star,
  Download,
  Rocket,
  Heart,
  Shield,
  Palette,
  CheckCircle,
  Sparkles,
  Play
} from "lucide-react"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

// Simple CSS animations instead of complex Framer Motion

export default function HomePage() {
  const [demoLoading, setDemoLoading] = React.useState(false)
  const [demoProgress, setDemoProgress] = React.useState(0)
  const [demoRating] = React.useState(5)
  const [demoChecked, setDemoChecked] = React.useState(false)
  const [demoSlider, setDemoSlider] = React.useState(75)

  const handleDemoInteraction = () => {
    setDemoLoading(true)
    setTimeout(() => {
      setDemoLoading(false)
      setDemoProgress(85)
    }, 2000)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-success/10 to-info/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-warning/10 to-error/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      {/* Hero Section */}
      <section className="relative px-6 py-24 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto max-w-7xl relative"
        >
          <div className="text-center">
            <motion.div variants={itemVariants}>
              <Badge variant="outline" className="mb-8 px-6 py-3 text-sm font-semibold glass">
                <Sparkles className="w-4 h-4 mr-2" />
                Mad UI v2.0 - Now Available
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight"
            >
              <span className="block text-foreground">Beautiful</span>
              <span className="block bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                React Components
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
            >
              A comprehensive, modern UI component library built with React and Tailwind CSS. 
              Beautiful, accessible, and fully customizable components for your next project.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Link href="/docs/getting-started">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 h-auto elevation-2 hover-lift bg-gradient-primary flex items-center"
                >
                  <Rocket className="mr-3 h-5 w-5" />
                  Get Started
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              
              <Link href="/docs/components">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 h-auto hover-lift glass flex items-center"
                >
                  <Package className="mr-3 h-5 w-5" />
                  View Components
                </Button>
              </Link>
              
              <Link href="https://github.com">
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="text-lg px-8 py-6 h-auto hover-lift flex items-center"
                >
                  <Github className="mr-3 h-5 w-5" />
                  <Star className="mr-2 h-4 w-4" />
                  Star on GitHub
                </Button>
              </Link>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {[
                { label: "Components", value: "50+", icon: Package },
                { label: "TypeScript", value: "100%", icon: Shield },
                { label: "Bundle Size", value: "~3KB", icon: Zap },
                { label: "Downloads", value: "10K+", icon: Download }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover-lift"
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Interactive Demo Section */}
      <section className="relative px-6 py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 glass">
              <Play className="w-4 h-4 mr-2" />
              Live Demo
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Try It
              <span className="block text-primary">Yourself</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Interact with our components and see how easy it is to build beautiful UIs with Mad UI.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Demo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 elevation-2 glass">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl">Interactive Components</CardTitle>
                  <CardDescription>
                    Try our components in real-time
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label>Email Address</Label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com"
                      className="transition-all duration-300"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Checkbox 
                      id="demo-check"
                      checked={demoChecked}
                      onChange={(e) => setDemoChecked(e.target.checked)}
                    />
                    <Label htmlFor="demo-check">Subscribe to newsletter</Label>
                  </div>

                  <div className="space-y-3">
                    <Label>Volume: {demoSlider}%</Label>
                    <Slider
                      value={demoSlider}
                      onChange={(value) => setDemoSlider(Array.isArray(value) ? value[0] : value)}
                      max={100}
                      step={1}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Rating</Label>
                    <Rating value={demoRating} />
                  </div>

                  <div className="space-y-3">
                    <Label>Progress: {demoProgress}%</Label>
                    <Progress value={demoProgress} />
                  </div>

                  <Button 
                    onClick={handleDemoInteraction}
                    loading={demoLoading}
                    className="w-full elevation-1 hover-lift"
                  >
                    {demoLoading ? 'Processing...' : 'Try Demo'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Code Preview */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-slate-950 rounded-2xl overflow-hidden elevation-3">
                <div className="flex items-center gap-2 px-6 py-4 bg-slate-900/50 border-b border-slate-800">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-sm text-slate-400 ml-4">components.tsx</span>
                </div>
                <div className="p-6">
                  <pre className="text-sm text-slate-100 overflow-x-auto">
                    <code>{`import { Button, Input, Card } from 'mad-ui-components'

export function MyComponent() {
  return (
    <Card className="p-6">
      <Input placeholder="Enter email..." />
      <Button className="w-full mt-4">
        Get Started
      </Button>
    </Card>
  )
}`}</code>
                  </pre>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-success/10 rounded-xl border border-success/20">
                  <CheckCircle className="h-6 w-6 mx-auto mb-2 text-success" />
                  <div className="text-sm font-medium">Type Safe</div>
                </div>
                <div className="text-center p-4 bg-info/10 rounded-xl border border-info/20">
                  <Zap className="h-6 w-6 mx-auto mb-2 text-info" />
                  <div className="text-sm font-medium">Tree Shakable</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative px-6 py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-7xl"
        >
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 glass">
              <Zap className="w-4 h-4 mr-2" />
              Why Choose Mad UI
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Everything you need
              <span className="block text-primary">to build amazing UIs</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From basic form elements to complex data displays, we&apos;ve got you covered with beautiful, 
              accessible, and performant components.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: "Copy & Customize",
                description: "Copy components directly into your project and customize them to match your design system. Full control, zero dependencies.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Code,
                title: "TypeScript Ready",
                description: "Built with TypeScript from the ground up for superior developer experience with full type safety and IntelliSense.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized for performance with tree-shaking, minimal bundle sizes, and zero runtime overhead.",
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                icon: Layers,
                title: "Tailwind Powered",
                description: "Built on top of Tailwind CSS for consistent design, easy customization, and utility-first styling.",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: Shield,
                title: "Accessible",
                description: "Built with accessibility in mind. WCAG compliant components with keyboard navigation and screen reader support.",
                gradient: "from-indigo-500 to-blue-500"
              },
              {
                icon: Palette,
                title: "Themeable",
                description: "Comprehensive theming system with CSS variables, dark mode support, and custom color schemes.",
                gradient: "from-pink-500 to-rose-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover-lift elevation-1 glass">
                  <CardHeader className="pb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 elevation-2`}>
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-12 text-center elevation-3">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"></div>
            <div className="relative">
              <Badge variant="secondary" className="mb-6 bg-white/20 border-white/30 text-white">
                <Heart className="w-4 h-4 mr-2" />
                Join the Community
              </Badge>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-white">
                Ready to build something
                <span className="block">amazing?</span>
              </h2>
              
              <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
                Join thousands of developers who are already building better UIs with Mad UI components. 
                Start your journey today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                <Link href="/docs/getting-started">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="text-lg px-8 py-6 h-auto bg-white text-primary hover:bg-white/90 elevation-2 flex items-center"
                  >
                    <Rocket className="mr-3 h-5 w-5" />
                    Start Building
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </Link>
                
                <Link href="https://github.com">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-lg px-8 py-6 h-auto border-2 border-white/30 text-white hover:bg-white/10 flex items-center"
                  >
                    <Github className="mr-3 h-5 w-5" />
                    View on GitHub
                  </Button>
                </Link>
              </div>
              
              {/* Social Proof */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-xl mx-auto">
                {[
                  { label: "Downloads", value: "10K+" },
                  { label: "Components", value: "50+" },
                  { label: "Satisfaction", value: "99%" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold mb-1 text-white">{stat.value}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}