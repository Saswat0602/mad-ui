import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ComponentDocumentation } from '@/components/ComponentDocumentation'
import { getComponentBySlug, getAllComponents } from '@/lib/component-registry'
import { ComponentCategory } from '@/types/component'

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
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Components</h1>
        <p className="text-lg text-muted-foreground">
          Explore all available components in the MAD UI library
        </p>
      </div>

      {Object.entries(categories).map(([category, components]) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 capitalize">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((component) => (
              <a
                key={component.slug}
                href={`/docs/components/${component.slug}`}
                className="block p-6 border rounded-lg hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-2">{component.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {component.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {component.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-muted rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
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
