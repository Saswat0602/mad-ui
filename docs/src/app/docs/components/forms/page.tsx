"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'mad-ui-components/card'
import { Badge } from 'mad-ui-components/badge'
import { Button } from 'mad-ui-components/button'
import { 
  FileText, 
  ArrowLeft,
  ExternalLink,
  ChevronRight
} from 'lucide-react'

const formsComponents = [
  { name: 'Accordion', path: '/docs/components/forms/accordion', description: 'Collapsible content sections', status: 'stable', complexity: 'moderate' },
  { name: 'Breadcrumbs', path: '/docs/components/forms/breadcrumbs', description: 'Navigation breadcrumb trail', status: 'stable', complexity: 'simple' },
  { name: 'Tabs', path: '/docs/components/forms/tabs', description: 'Tabbed interface component', status: 'stable', complexity: 'moderate' },
  { name: 'Calendar', path: '/docs/components/forms/calendar', description: 'Date selection calendar', status: 'stable', complexity: 'complex' },
  { name: 'Date Picker', path: '/docs/components/forms/datepicker', description: 'Date input with calendar popup', status: 'stable', complexity: 'complex' },
  { name: 'Time Picker', path: '/docs/components/forms/timepicker', description: 'Time selection component', status: 'stable', complexity: 'complex' },
  { name: 'Input OTP', path: '/docs/components/forms/inputotp', description: 'One-time password input', status: 'stable', complexity: 'moderate' },
  { name: 'Radio Group', path: '/docs/components/forms/radiogroup', description: 'Group of radio button options', status: 'stable', complexity: 'simple' },
  { name: 'Form', path: '/docs/components/forms/form', description: 'React Hook Form integration', status: 'stable', complexity: 'complex' }
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

export default function FormsComponentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto max-w-7xl px-4 py-16 lg:py-24">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm mb-8">
          <Link href="/docs/components" className="text-muted-foreground hover:text-foreground transition-colors">
            Components
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="text-foreground font-medium">Form Components</span>
        </nav>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <Link href="/docs/components">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Components
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-lg shadow-emerald-500/25">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black mb-2 leading-tight tracking-tight">
                Form Components
              </h1>
              <Badge variant="outline" className="text-sm">
                {formsComponents.length} Components
              </Badge>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Advanced form controls and layouts with built-in validation and accessibility features. Perfect for building complex forms and interactive interfaces.
          </p>
        </motion.div>

        {/* Components Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {formsComponents.map((component) => (
            <motion.div key={component.name} variants={itemVariants}>
              <Link href={component.path}>
                <Card className="group hover-lift elevation-1 transition-all duration-300 hover:elevation-3 cursor-pointer h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {component.name}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        {component.status === 'new' && (
                          <Badge variant="success" className="text-xs">New</Badge>
                        )}
                        {component.status === 'beta' && (
                          <Badge variant="warning" className="text-xs">Beta</Badge>
                        )}
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                    <CardDescription className="leading-relaxed">
                      {component.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
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
                        <Badge variant="outline" className="text-xs">
                          TypeScript
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Stats */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 rounded-3xl p-8 border border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Advanced Form Building</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These components provide advanced functionality for complex forms, data collection, and user interactions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { label: 'Interactive', value: '6' },
                { label: 'Date & Time', value: '3' },
                { label: 'Validation', value: '9' },
                { label: 'Total Forms', value: '9' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
