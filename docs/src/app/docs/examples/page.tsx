"use client"

import React, { useState } from 'react'
import { Button } from 'mad-ui-components/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'mad-ui-components/card'
import { Badge } from 'mad-ui-components/badge'
import { Input } from 'mad-ui-components/input'
import { Label } from 'mad-ui-components/label'
import { Checkbox } from 'mad-ui-components/checkbox'
import { Switch } from 'mad-ui-components/switch'
import { Progress } from 'mad-ui-components/progress'
import { Slider } from 'mad-ui-components/slider'
import { Rating } from 'mad-ui-components/rating'
import { Textarea } from 'mad-ui-components/textarea'
import { 
  Copy, 
  Check, 
  Code, 
  Play,
  Star,
  Heart,
  Mail,
  User,
  Lock,
  Eye,
  EyeOff,
  Upload,
  Download,
  Settings,
  Bell,
  Search,
  Filter,
  Calendar,
  ArrowRight,
  Plus,
  Minus,
  ShoppingCart,
  CreditCard,
  Phone,
  MapPin,
  Building,
  Briefcase,
  Monitor,
  Smartphone,
  Tablet
} from 'lucide-react'

interface CopyCodeBlockProps {
  code: string
  filename: string
  language?: string
}

const CopyCodeBlock: React.FC<CopyCodeBlockProps> = ({ code, filename, language = 'tsx' }) => {
  const [copied, setCopied] = useState(false)
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  return (
    <div className="relative group">
      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900/50">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="h-4 w-px bg-slate-700 mx-2"></div>
            <span className="text-sm text-slate-400 font-medium">{filename}</span>
            <Badge variant="outline" className="text-xs px-2 py-0.5 bg-slate-800 border-slate-700 text-slate-300">
              {language}
            </Badge>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleCopy}
            className="h-8 w-8 p-0 hover:bg-slate-800 text-slate-400 hover:text-slate-200"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-400" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
        <div className="p-4">
          <pre className="text-sm font-mono text-slate-100 overflow-x-auto whitespace-pre-wrap">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}

const ExampleCard: React.FC<{ 
  title: string
  description: string
  children: React.ReactNode
  code: string
  complexity: 'Simple' | 'Intermediate' | 'Advanced'
}> = ({ title, description, children, code, complexity }) => {
  const [showCode, setShowCode] = useState(false)
  
  const complexityColors = {
    Simple: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    Intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    Advanced: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge className={`text-xs px-2 py-1 ${complexityColors[complexity]}`}>
            {complexity}
          </Badge>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowCode(!showCode)}
            className="h-8 w-8 p-0"
          >
            <Code className="h-4 w-4" />
          </Button>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="p-6 border-2 border-dashed border-border rounded-xl bg-muted/30">
          {children}
        </div>
        {showCode && (
          <CopyCodeBlock
            filename={`${title.toLowerCase().replace(/\s+/g, '-')}.tsx`}
            code={code}
          />
        )}
      </CardContent>
    </Card>
  )
}

export default function ExamplesPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [volume, setVolume] = useState(50)
  const [rating, setRating] = useState(4)
  const [progress, setProgress] = useState(65)
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto max-w-7xl px-4 py-16 lg:py-24">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <Badge variant="outline" className="mb-6 px-6 py-3 text-sm font-semibold border-primary/20 bg-primary/5">
            <Play className="w-4 h-4 mr-2" />
            Live Examples
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
            <span className="block text-foreground">Real-World</span>
            <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
              Component Examples
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
            Discover how to use Mad UI components in real applications. Copy, paste, and customize these examples for your projects.
          </p>
        </div>

        {/* Examples Grid */}
        <div className="grid lg:grid-cols-2 gap-8 space-y-0">
          {/* Login Form */}
          <ExampleCard
            title="Login Form"
            description="A complete login form with email, password, and remember me functionality."
            complexity="Simple"
            code={`import { useState } from 'react'
import { Button } from 'mad-ui-components/button'
import { Card, CardContent, CardHeader, CardTitle } from 'mad-ui-components/card'
import { Input } from 'mad-ui-components/input'
import { Label } from 'mad-ui-components/label'
import { Checkbox } from 'mad-ui-components/checkbox'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate login
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Welcome Back</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-10"
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={setRememberMe}
            />
            <Label htmlFor="remember" className="text-sm">Remember me</Label>
          </div>
          
          <Button type="submit" className="w-full" loading={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}`}
          >
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle>Welcome Back</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <Label htmlFor="remember" className="text-sm">Remember me</Label>
                  </div>
                  
                  <Button type="submit" className="w-full" loading={loading}>
                    {loading ? 'Signing in...' : 'Sign In'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ExampleCard>

          {/* Settings Panel */}
          <ExampleCard
            title="Settings Panel"
            description="User preferences panel with various controls and progress indicators."
            complexity="Intermediate"
            code={`import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from 'mad-ui-components/card'
import { Label } from 'mad-ui-components/label'
import { Switch } from 'mad-ui-components/switch'
import { Slider } from 'mad-ui-components/slider'
import { Progress } from 'mad-ui-components/progress'
import { Rating } from 'mad-ui-components/rating'
import { Button } from 'mad-ui-components/button'
import { Bell, Settings, Volume2 } from 'lucide-react'

export function SettingsPanel() {
  const [notifications, setNotifications] = useState(true)
  const [volume, setVolume] = useState(50)
  const [rating, setRating] = useState(4)
  const [progress, setProgress] = useState(65)

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          <CardTitle>User Preferences</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="notifications">Push Notifications</Label>
            </div>
            <Switch
              id="notifications"
              checked={notifications}
              onCheckedChange={setNotifications}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Volume2 className="h-4 w-4 text-muted-foreground" />
              <Label>Volume: {volume}%</Label>
            </div>
            <Slider
              value={volume}
              onValueChange={setVolume}
              max={100}
              step={1}
            />
          </div>

          <div className="space-y-2">
            <Label>Rate Your Experience</Label>
            <Rating value={rating} onValueChange={setRating} />
          </div>

          <div className="space-y-2">
            <Label>Profile Completion</Label>
            <Progress value={progress} className="w-full" />
            <p className="text-sm text-muted-foreground">{progress}% complete</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" className="flex-1">Cancel</Button>
          <Button className="flex-1">Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  )
}`}
          >
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  <CardTitle>User Preferences</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="notifications">Push Notifications</Label>
                    </div>
                    <Switch
                      id="notifications"
                      checked={notifications}
                      onChange={(e) => setNotifications(e.target.checked)}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Settings className="h-4 w-4 text-muted-foreground" />
                      <Label>Volume: {volume}%</Label>
                    </div>
                    <Slider
                      value={volume}
                      onChange={(value) => setVolume(Array.isArray(value) ? value[0] : value)}
                      max={100}
                      step={1}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Rate Your Experience</Label>
                    <Rating value={rating} />
                  </div>

                  <div className="space-y-2">
                    <Label>Profile Completion</Label>
                    <Progress value={progress} className="w-full" />
                    <p className="text-sm text-muted-foreground">{progress}% complete</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">Cancel</Button>
                  <Button className="flex-1">Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </ExampleCard>

          {/* Product Card */}
          <ExampleCard
            title="Product Card"
            description="E-commerce style product card with rating, pricing, and action buttons."
            complexity="Simple"
            code={`import { Card, CardContent, CardHeader } from 'mad-ui-components/card'
import { Badge } from 'mad-ui-components/badge'
import { Button } from 'mad-ui-components/button'
import { Rating } from 'mad-ui-components/rating'
import { ShoppingCart, Heart } from 'lucide-react'

export function ProductCard() {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden">
      <div className="relative">
        <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 flex items-center justify-center">
          <div className="text-6xl">📱</div>
        </div>
        <Badge className="absolute top-2 right-2 bg-green-500 text-white">
          20% OFF
        </Badge>
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 left-2 h-8 w-8 p-0 bg-white/80 hover:bg-white"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <Badge variant="outline">Electronics</Badge>
          <Rating value={4.5} readonly size="sm" />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold text-lg">Premium Smartphone</h3>
          <p className="text-sm text-muted-foreground">
            Latest flagship phone with amazing features
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">$799</span>
          <span className="text-lg text-muted-foreground line-through">$999</span>
        </div>
        
        <div className="flex gap-2">
          <Button className="flex-1">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
          <Button variant="outline">
            Buy Now
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}`}
          >
            <Card className="w-full max-w-sm mx-auto overflow-hidden">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 flex items-center justify-center">
                  <div className="text-6xl">📱</div>
                </div>
                <Badge className="absolute top-2 right-2 bg-green-500 text-white">
                  20% OFF
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 left-2 h-8 w-8 p-0 bg-white/80 hover:bg-white"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">Electronics</Badge>
                  <Rating value={4.5} size="sm" />
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">Premium Smartphone</h3>
                  <p className="text-sm text-muted-foreground">
                    Latest flagship phone with amazing features
                  </p>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">$799</span>
                  <span className="text-lg text-muted-foreground line-through">$999</span>
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button variant="outline">
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </ExampleCard>

          {/* Contact Form */}
          <ExampleCard
            title="Contact Form"
            description="Complete contact form with multiple input types and validation."
            complexity="Intermediate"
            code={`import { useState } from 'react'
import { Button } from 'mad-ui-components/button'
import { Card, CardContent, CardHeader, CardTitle } from 'mad-ui-components/card'
import { Input } from 'mad-ui-components/input'
import { Label } from 'mad-ui-components/label'
import { Textarea } from 'mad-ui-components/textarea'
import { Select } from 'mad-ui-components/select'
import { User, Mail, Phone, Building, Send } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission
    setTimeout(() => setLoading(false), 2000)
  }

  const subjectOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Technical Support' },
    { value: 'sales', label: 'Sales Question' },
    { value: 'billing', label: 'Billing Issue' }
  ]

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="pl-10"
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="company"
                  placeholder="Acme Inc."
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Select
              value={formData.subject}
              onValueChange={(value) => setFormData({...formData, subject: value})}
              options={subjectOptions}
              placeholder="Select a subject"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us how we can help you..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={4}
              required
            />
          </div>

          <Button type="submit" className="w-full" loading={loading}>
            <Send className="mr-2 h-4 w-4" />
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}`}
          >
            <Card className="w-full max-w-lg mx-auto">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="name"
                          placeholder="John Doe"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          placeholder="+1 (555) 123-4567"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="company"
                          placeholder="Acme Inc."
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ExampleCard>
        </div>

        {/* Call to Action */}
        <section className="mt-24 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-800">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-12 border border-primary/20">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-primary/25">
                <Code className="h-10 w-10 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Need More Examples?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Check out our comprehensive documentation for more component examples and advanced usage patterns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-4 h-14">
                  <Monitor className="mr-3 h-5 w-5" />
                  View All Components
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-14">
                  <Download className="mr-3 h-5 w-5" />
                  Download Templates
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}