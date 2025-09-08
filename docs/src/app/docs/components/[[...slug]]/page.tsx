import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ComponentDocumentation } from '@/components/ComponentDocumentation'
import { getComponentBySlug, getAllComponents } from '@/lib/component-registry'
import { ComponentCategory } from '@/types/component'
import { Search } from 'lucide-react'

interface ComponentPageProps {
  params: Promise<{
    slug?: string[]
  }>
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const resolvedParams = await params
  const slug = resolvedParams.slug?.[0]
  
  if (!slug) {
    // Show all components
    return <ComponentCategoryPage />
  }

  const component = getComponentBySlug(slug)
  
  if (!component) {
    notFound()
  }

  return <ComponentDocumentation slug={slug} component={component} />
}

function ComponentCategoryPage() {
  const allComponents = getAllComponents()
  const categories = allComponents.reduce((acc, component) => {
    if (!acc[component.category]) {
      acc[component.category] = []
    }
    acc[component.category].push(component)
    return acc
  }, {} as Record<ComponentCategory, typeof allComponents>)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-10 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
            Components
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover our comprehensive collection of enterprise-ready components. Each component is designed with accessibility, 
            performance, and developer experience in mind.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search components..."
              className="w-full pl-12 pr-4 py-4 border border-border rounded-xl bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-base shadow-sm"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {Object.entries(categories).map(([category, components]) => (
            <div key={category} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center gap-4">
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
                <h2 className="text-3xl font-semibold capitalize tracking-tight">
                  {category}
                </h2>
                <div className="flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-full">
                  <span className="text-sm font-medium text-muted-foreground">
                    {components.length}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {components.length === 1 ? 'component' : 'components'}
                  </span>
                </div>
              </div>
              
              {/* Component Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {components.map((component) => (
                  <Link
                    key={component.slug}
                    href={`/docs/components/${component.slug}`}
                    className="group relative block"
                  >
                    <div className="h-full p-6 border border-border rounded-xl bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                      {/* Status Badge */}
                      <div className="flex justify-between items-start mb-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium shadow-sm ${
                          component.status === 'stable' 
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-800/30'
                            : component.status === 'beta'
                            ? 'bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-800/30'
                            : 'bg-orange-50 text-orange-700 border border-orange-200 dark:bg-orange-950/30 dark:text-orange-400 dark:border-orange-800/30'
                        }`}>
                          {component.status}
                        </span>
                        <div className="w-3 h-3 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-colors"></div>
                      </div>
                      
                      {/* Component Title */}
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                        {component.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                        {component.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {component.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-muted/60 text-muted-foreground rounded-md font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        {component.tags.length > 2 && (
                          <span className="px-2 py-1 text-xs bg-muted/60 text-muted-foreground rounded-md font-medium">
                            +{component.tags.length - 2}
                          </span>
                        )}
                      </div>
                      
                      {/* Version */}
                      <div className="text-xs text-muted-foreground font-mono">
                        v{component.version}
                      </div>
                      
                      {/* Hover Arrow */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-2 h-2 border-t-2 border-r-2 border-primary rotate-45"></div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const components = getAllComponents()
  
  return components.map((component) => ({
    slug: [component.slug],
  }))
}

export async function generateMetadata({ 
  params 
}: ComponentPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const slug = resolvedParams.slug?.[0]
  
  if (!slug) {
    return {
      title: 'Components - MAD UI',
      description: 'Explore all available components in the MAD UI library',
    }
  }

  const component = getComponentBySlug(slug)
  
  if (!component) {
    return {
      title: 'Component Not Found'
    }
  }

  return {
    title: `${component.title} - MAD UI`,
    description: component.description,
    keywords: [...component.tags],
    openGraph: {
      title: component.title,
      description: component.description,
      type: 'article',
    },
  }
}
