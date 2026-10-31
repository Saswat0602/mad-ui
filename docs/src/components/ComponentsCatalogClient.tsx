'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { ComponentCategory } from '@/types/component'
import { ArrowUpRight, Search } from 'lucide-react'

interface ComponentMetadata {
  title: string
  slug: string
  description?: string
  category: ComponentCategory
  version?: string
  status?: 'stable' | 'beta' | 'alpha' | 'deprecated'
  tags?: readonly string[]
}

interface ComponentsCatalogClientProps {
  components: ComponentMetadata[]
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

export function ComponentsCatalogClient({ components }: ComponentsCatalogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredComponents = useMemo(() => {
    return components.filter((comp) => {
      const matchesCategory = selectedCategory === 'all' || comp.category === selectedCategory
      const matchesSearch =
        searchQuery === '' ||
        comp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comp.category.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [components, selectedCategory, searchQuery])

  const grouped = useMemo(() => {
    if (selectedCategory !== 'all') {
      return { [selectedCategory]: filteredComponents }
    }
    return CATEGORY_ORDER.reduce((acc, cat) => {
      const items = filteredComponents.filter((c) => c.category === cat)
      if (items.length > 0) {
        acc[cat] = items
      }
      return acc
    }, {} as Record<string, ComponentMetadata[]>)
  }, [filteredComponents, selectedCategory])

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: components.length }
    components.forEach((c) => {
      counts[c.category] = (counts[c.category] || 0) + 1
    })
    return counts
  }, [components])

  return (
    <div className="space-y-8 w-full">
      {/* Header (Clean, minimal shadcn-style) */}
      <div className="space-y-3 border-b border-border/40 pb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Library Catalog</span>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground font-mono">{components.length} Production Components</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Components
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
          Here you can find all the components available in the library. Built with TypeScript and Tailwind CSS with full theme support.
        </p>

        {/* Live Filter Search Bar */}
        <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search components (e.g. Button, Dialog, Form)..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-muted/40 hover:bg-muted/60 focus:bg-background border border-border/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
            />
          </div>

          <span className="text-xs text-muted-foreground font-mono self-end sm:self-auto">
            {filteredComponents.length} {filteredComponents.length === 1 ? 'component' : 'components'}
          </span>
        </div>

        {/* Category Filter Pills (Horizontal swipe on mobile) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-foreground text-background font-semibold shadow-2xs'
                : 'bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            <span>All</span>
            <span className="text-[10px] opacity-75 font-mono">{categoryCounts.all}</span>
          </button>

          {CATEGORY_ORDER.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-foreground text-background font-semibold shadow-2xs'
                  : 'bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <span>{cat}</span>
              <span className="text-[10px] opacity-75 font-mono">{categoryCounts[cat] || 0}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Components Stream (No bulky descriptions — clean, minimal links) */}
      <div className="space-y-8">
        {Object.entries(grouped).map(([category, items]) => (
          <section key={category} className="space-y-3">
            <div className="flex items-baseline justify-between border-b border-border/30 pb-2">
              <h2 className="text-base sm:text-lg font-semibold tracking-tight text-foreground flex items-center gap-2">
                <span>{category}</span>
              </h2>
              <span className="text-xs text-muted-foreground font-mono">
                {items.length} {items.length === 1 ? 'component' : 'components'}
              </span>
            </div>

            {/* Clean Component Grid: 2 columns on mobile, 3 on tablet, 4 on desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-2.5">
              {items.map((component) => (
                <Link
                  key={component.slug}
                  href={`/docs/components/${component.slug}`}
                  className="group flex items-center justify-between px-3.5 py-2.5 rounded-lg border border-border/50 bg-card/40 hover:bg-card hover:border-primary/50 hover:shadow-2xs transition-all duration-150"
                >
                  <span className="text-xs sm:text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                    {component.title}
                  </span>
                  <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-primary shrink-0 ml-1.5" />
                </Link>
              ))}
            </div>
          </section>
        ))}

        {filteredComponents.length === 0 && (
          <div className="p-12 text-center border border-dashed border-border/60 rounded-xl space-y-2">
            <p className="text-sm font-medium text-foreground">No components found</p>
            <p className="text-xs text-muted-foreground">
              No components match &quot;{searchQuery}&quot;. Try searching for &quot;Button&quot;, &quot;Modal&quot;, or &quot;Input&quot;.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
