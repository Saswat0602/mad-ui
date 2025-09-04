"use client"

import React, { useState, useEffect } from 'react';
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
  Shield,
  Palette,
  CheckCircle,
  Sparkles,
  Play,
  Copy,
  Check,
  Terminal,
  BookOpen,
  Users
} from "lucide-react";

const HomePage = () => {
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});
  const [demoProgress, setDemoProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('install');

  useEffect(() => {
    const interval = setInterval(() => {
      setDemoProgress(prev => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [key]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const CodeBlock = ({ children, language = 'bash', copyKey }: {
    children: React.ReactNode;
    language?: string;
    copyKey?: string;
  }) => (
    <div className="relative group bg-slate-950 rounded-2xl overflow-hidden border border-slate-800">
      <div className="flex items-center justify-between px-6 py-4 bg-slate-900/50 border-b border-slate-800">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="text-sm text-slate-400">{language}</span>
        </div>
        {copyKey && (
          <button
            onClick={() => copyToClipboard(String(children), copyKey || '')}
            className="flex items-center gap-2 px-3 py-1.5 text-sm bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors"
          >
            {copiedStates[copyKey] ? (
              <>
                <Check className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy
              </>
            )}
          </button>
        )}
      </div>
      <div className="p-6 overflow-x-auto">
        <pre className="text-sm text-slate-100">
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );

  const Badge = ({ children, variant = 'default', className = '' }: {
    children: React.ReactNode;
    variant?: 'default' | 'outline' | 'secondary';
    className?: string;
  }) => {
    const variants: Record<string, string> = {
      default: 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100',
      outline: 'border border-slate-200 bg-transparent dark:border-slate-700',
      secondary: 'bg-slate-200 text-slate-900 dark:bg-slate-700 dark:text-slate-100'
    };
    
    return (
      <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${variants[variant]} ${className}`}>
        {children}
      </span>
    );
  };

  const Button = ({ children, variant = 'default', size = 'default', className = '', onClick, ...props }: {
    children: React.ReactNode;
    variant?: 'default' | 'outline' | 'ghost' | 'secondary';
    size?: 'default' | 'lg' | 'sm';
    className?: string;
    onClick?: () => void;
    [key: string]: unknown;
  }) => {
    const variants: Record<string, string> = {
      default: 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white',
      outline: 'border border-slate-300 bg-transparent hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-800',
      ghost: 'hover:bg-slate-100 dark:hover:bg-slate-800',
      secondary: 'bg-slate-200 hover:bg-slate-300 text-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-slate-100'
    };
    
    const sizes: Record<string, string> = {
      default: 'px-6 py-3',
      lg: 'px-8 py-4 text-lg',
      sm: 'px-4 py-2 text-sm'
    };
    
    return (
      <button 
        onClick={onClick}
        className={`inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 hover:scale-105 ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };

  const Card = ({ children, className = '' }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <div className={`bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 ${className}`}>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative px-6 py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <Badge className="mb-8 backdrop-blur-sm bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50">
              <Sparkles className="w-4 h-4 mr-2" />
              Mad UI v2.0 - Production Ready
            </Badge>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight">
              <span className="block text-slate-900 dark:text-white">Modern</span>
              <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Component Library
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Copy, paste, and customize beautiful React components built with Tailwind CSS. 
              No dependencies, full control, modern design system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button size="lg" className="shadow-xl shadow-violet-500/25" onClick={() => {}}>
                <Rocket className="mr-3 h-5 w-5" />
                Get Started
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              
              <Button variant="outline" size="lg" className="shadow-lg" onClick={() => {}}>
                <Package className="mr-3 h-5 w-5" />
                Browse Components
              </Button>
              
              <Button variant="ghost" size="lg" onClick={() => {}}>
                <Github className="mr-3 h-5 w-5" />
                <Star className="mr-2 h-4 w-4" />
                Star on GitHub
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { label: "Components", value: "50+", icon: Package, gradient: "from-blue-500 to-cyan-500" },
                { label: "TypeScript", value: "100%", icon: Shield, gradient: "from-green-500 to-emerald-500" },
                { label: "Bundle Size", value: "~3KB", icon: Zap, gradient: "from-yellow-500 to-orange-500" },
                { label: "Downloads", value: "10K+", icon: Download, gradient: "from-purple-500 to-pink-500" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:scale-105 transition-transform duration-300"
                >
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center shadow-lg`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="relative px-6 py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 backdrop-blur-sm">
              <Play className="w-4 h-4 mr-2" />
              Live Demo
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900 dark:text-white">
              See It In
              <span className="block text-violet-600">Action</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Experience the power and flexibility of Mad UI components with our interactive playground.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Code Tabs */}
            <div>
              <div className="flex space-x-1 mb-4">
                {[
                  { id: 'install', label: 'Installation' },
                  { id: 'usage', label: 'Usage' },
                  { id: 'custom', label: 'Customize' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300'
                        : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {activeTab === 'install' && (
                <CodeBlock language="bash" copyKey="install">
{`npm install mad-ui-components
# or
yarn add mad-ui-components
# or
pnpm add mad-ui-components`}
                </CodeBlock>
              )}

              {activeTab === 'usage' && (
                <CodeBlock language="tsx" copyKey="usage">
{`import { Button, Card } from 'mad-ui-components'

export function App() {
  return (
    <Card className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Welcome to Mad UI
      </h1>
      <Button variant="primary">
        Get Started
      </Button>
    </Card>
  )
}`}
                </CodeBlock>
              )}

              {activeTab === 'custom' && (
                <CodeBlock language="tsx" copyKey="custom">
{`// Customize with CSS variables
:root {
  --color-primary: 262 83% 58%;
  --color-secondary: 220 14.3% 95.9%;
}

// Or use Tailwind classes
<Button className="bg-gradient-to-r from-pink-500 to-rose-500">
  Custom Button
</Button>`}
                </CodeBlock>
              )}
            </div>

            {/* Live Preview */}
            <Card className="p-8 shadow-2xl">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Live Components</h3>
                  <div className="space-y-4">
                    <Button className="w-full" onClick={() => {}}>Primary Button</Button>
                    <Button variant="outline" className="w-full" onClick={() => {}}>Outline Button</Button>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Progress: {demoProgress}%</label>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-violet-600 to-purple-600 h-2 rounded-full transition-all duration-100"
                          style={{ width: `${demoProgress}%` }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                        <CheckCircle className="h-6 w-6 mx-auto mb-2 text-green-600" />
                        <div className="text-sm font-medium text-green-700 dark:text-green-300">Accessible</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                        <Zap className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                        <div className="text-sm font-medium text-blue-700 dark:text-blue-300">Fast</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-6 py-20 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 backdrop-blur-sm">
              <Zap className="w-4 h-4 mr-2" />
              Why Mad UI?
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900 dark:text-white">
              Everything You Need
              <span className="block text-violet-600">For Modern UIs</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              From simple buttons to complex data tables, Mad UI provides all the building blocks 
              you need to create exceptional user experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: "Copy & Paste",
                description: "No npm installs, no build steps. Copy components directly into your project and customize to your heart's content.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Code,
                title: "TypeScript First",
                description: "Built with TypeScript for superior developer experience. Full type safety, IntelliSense, and autocomplete support.",
                gradient: "from-violet-500 to-purple-500"
              },
              {
                icon: Zap,
                title: "Blazingly Fast",
                description: "Optimized for performance with minimal bundle impact. Tree-shakable, zero runtime overhead, lightning-fast loading.",
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                icon: Layers,
                title: "Tailwind Powered",
                description: "Built on Tailwind CSS for consistent design tokens, easy customization, and utility-first styling approach.",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: Shield,
                title: "Fully Accessible",
                description: "WCAG 2.1 compliant with keyboard navigation, screen reader support, and proper ARIA attributes out of the box.",
                gradient: "from-indigo-500 to-blue-500"
              },
              {
                icon: Palette,
                title: "Customizable",
                description: "Comprehensive theming system with CSS variables, dark mode support, and unlimited color scheme possibilities.",
                gradient: "from-pink-500 to-rose-500"
              }
            ].map((feature, index) => (
              <Card
                key={index}
                className="h-full p-8 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-20 lg:py-24">
        <div className="container mx-auto max-w-4xl">
          <Card className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 text-white shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"></div>
            <div className="relative p-12 text-center">
              <Badge variant="secondary" className="mb-6 bg-white/20 border-white/30 text-white">
                <Users className="w-4 h-4 mr-2" />
                Join 10,000+ Developers
              </Badge>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                Start Building
                <span className="block">Amazing UIs Today</span>
              </h2>
              
              <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
                Join thousands of developers who are already shipping better products with Mad UI. 
                Get started in minutes, not hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                <Button variant="secondary" size="lg" className="shadow-xl" onClick={() => {}}>
                  <Terminal className="mr-3 h-5 w-5" />
                  Quick Start Guide
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
                
                <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10" onClick={() => {}}>
                  <BookOpen className="mr-3 h-5 w-5" />
                  Documentation
                </Button>
              </div>
              
              {/* Social Proof */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-xl mx-auto">
                {[
                  { label: "Active Users", value: "10K+" },
                  { label: "Components", value: "50+" },
                  { label: "GitHub Stars", value: "2.5K+" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HomePage;