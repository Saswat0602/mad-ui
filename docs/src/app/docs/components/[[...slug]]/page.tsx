import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ComponentDocumentation } from '@/components/ComponentDocumentation'
import { getComponentBySlug, getAllComponents } from '@/lib/component-registry'
import { ComponentCategory } from '@/types/component'
import { ArrowUpRight } from 'lucide-react'

interface ComponentPageProps {
  params: Promise<{
    slug?: string[]
  }>
}

const CATEGORY_ORDER: ComponentCategory[] = [
  'Core',
  'Form',
  'Layout',
  'Navigation',
  'Overlay',
  'Data Display',
  'Feedback',
  'Media'
]

export default async function ComponentPage({ params }: ComponentPageProps) {
  const resolvedParams = await params
  const slug = resolvedParams.slug?.[0]
  
  if (!slug) {
    // Show clean categorized list
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

  const categories = CATEGORY_ORDER.reduce((acc, cat) => {
    const items = allComponents.filter(c => c.category === cat)
    if (items.length > 0) {
      acc[cat] = items
    }
    return acc
  }, {} as Record<string, typeof allComponents>)

  return (
    <div className="space-y-12">
      {/* Clean Header */}
      <div className="border-b border-border/40 pb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Library Catalog</span>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">{allComponents.length} Production Components</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Components
        </h1>
        <p className="mt-2 text-base text-muted-foreground max-w-3xl leading-relaxed">
          Production-ready, accessible, and themeable React UI components crafted with TypeScript and Tailwind CSS.
        </p>
      </div>

      {/* Categorized Component Grid */}
      <div className="space-y-10">
        {Object.entries(categories).map(([category, components]) => (
          <section key={category} className="space-y-4">
            <div className="flex items-baseline justify-between border-b border-border/30 pb-2">
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                {category}
              </h2>
              <span className="text-xs text-muted-foreground font-mono">
                {components.length} {components.length === 1 ? 'component' : 'components'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {components.map((component) => (
                <Link
                  key={component.slug}
                  href={`/docs/components/${component.slug}`}
                  className="group relative flex flex-col justify-between p-4 rounded-lg border border-border/50 bg-card/40 hover:bg-card hover:border-primary/40 hover:shadow-sm transition-all duration-150"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                        {component.title}
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                      </h3>
                      {component.status === 'beta' && (
                        <span className="text-[10px] uppercase font-medium tracking-tight px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20">
                          Beta
                        </span>
                      )}
                    </div>
                    
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {component.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-border/30 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span className="text-muted-foreground/70">{component.category}</span>
                    <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                      View component &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
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
      title: 'Components - Mad UI',
      description: 'Explore all 57+ production-ready React components in the Mad UI library.',
    }
  }

  const component = getComponentBySlug(slug)
  
  if (!component) {
    return {
      title: 'Component Not Found - Mad UI'
    }
  }

  return {
    title: `${component.title} - Mad UI Component Library`,
    description: component.description,
    keywords: [...component.tags],
    openGraph: {
      title: `${component.title} - Mad UI`,
      description: component.description,
      type: 'article',
    },
  }
}
