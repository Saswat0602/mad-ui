import { Metadata } from 'next'
import { notFound } from 'next/navigation'
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
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Components</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-6">
          Browse our collection of components. Click on any component to view detailed documentation, examples, and usage guidelines.
        </p>
        
        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <input
            type="text"
            placeholder="Search components..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
          />
        </div>
      </div>

      {Object.entries(categories).map(([category, components]) => (
        <div key={category} className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-8 bg-primary rounded-full"></div>
            <h2 className="text-2xl font-semibold capitalize">{category}</h2>
            <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">
              {components.length} components
            </span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {components.map((component) => (
              <a
                key={component.slug}
                href={`/docs/components/${component.slug}`}
                className="group relative block p-6 border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-200 hover:scale-105 bg-card"
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {component.title}
                  </h3>
                  
                  {/* Status indicator */}
                  <div className="flex justify-center mb-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      component.status === 'stable' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                        : component.status === 'beta'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                        : 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'
                    }`}>
                      {component.status}
                    </span>
                  </div>
                  
                  {/* Hover overlay with description */}
                  <div className="absolute inset-0 bg-background/95 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {component.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1 justify-center">
                        {component.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-muted rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                        {component.tags.length > 3 && (
                          <span className="px-2 py-1 text-xs bg-muted rounded-md">
                            +{component.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
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
