import React from 'react'
import { DocsSidebar } from '@/components/DocsSidebar'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
      {/* Desktop & Content Layout */}
      <div className="flex gap-8 lg:gap-10 xl:gap-12">
        {/* Sticky Desktop Sidebar (>= lg) */}
        <div className="hidden lg:block w-64 lg:w-72 shrink-0 border-r border-border/40 sticky top-14 h-[calc(100vh-3.5rem)] py-6 pr-4 overflow-hidden flex flex-col">
          <DocsSidebar />
        </div>

        {/* Content Area */}
        <div className="flex-1 min-w-0 py-6 lg:py-8 max-w-full lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
          {children}
        </div>
      </div>
    </div>
  )
}
