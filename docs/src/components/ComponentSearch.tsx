'use client'

import React, { useState, useMemo } from 'react'
import { Search, X } from 'lucide-react'
import { getAllComponents } from '@/lib/component-registry'
import Link from 'next/link'

interface ComponentSearchProps {
  onClose?: () => void
}

export function ComponentSearch({ onClose }: ComponentSearchProps) {
  const [query, setQuery] = useState('')
  const components = getAllComponents()

  const filteredComponents = useMemo(() => {
    if (!query) return components.slice(0, 8) // Show first 8 components when no query

    return components.filter((component) =>
      component.title.toLowerCase().includes(query.toLowerCase()) ||
      component.description.toLowerCase().includes(query.toLowerCase()) ||
      component.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    )
  }, [query, components])

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="fixed left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 transform">
        <div className="rounded-lg border bg-background p-4 shadow-lg">
          {/* Search Input */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search components..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-md border border-input bg-background px-10 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              autoFocus
            />
            {onClose && (
              <button
                onClick={onClose}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {filteredComponents.length === 0 ? (
              <div className="py-8 text-center text-sm text-muted-foreground">
                No components found for &quot;{query}&quot;
              </div>
            ) : (
              <div className="space-y-1">
                {filteredComponents.map((component) => (
                  <Link
                    key={component.slug}
                    href={`/docs/components/${component.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between rounded-md p-3 text-sm hover:bg-accent hover:text-accent-foreground"
                  >
                    <div>
                      <div className="font-medium">{component.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {component.description}
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {component.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-muted px-2 py-0.5 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-4 border-t pt-4 text-xs text-muted-foreground">
            Press <kbd className="rounded border bg-muted px-1">Esc</kbd> to close
          </div>
        </div>
      </div>
    </div>
  )
}
