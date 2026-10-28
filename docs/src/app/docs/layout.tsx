"use client"

import React, { useState } from 'react'
import { DocsSidebar } from '@/components/DocsSidebar'
import { PanelLeft, X } from 'lucide-react'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Mobile Sidebar Toggle Bar */}
      <div className="md:hidden flex items-center justify-between py-2.5 border-b border-border/40 mb-4">
        <button
          onClick={() => setMobileSidebarOpen(true)}
          className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground py-1 px-2.5 rounded-md bg-muted/40 border border-border/40"
        >
          <PanelLeft className="h-3.5 w-3.5 text-primary" />
          <span>Documentation Menu</span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-background/80 backdrop-blur-sm">
          <div className="fixed inset-y-0 left-0 w-72 bg-card border-r border-border p-0 shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-border/40">
              <span className="font-semibold text-sm">Components &amp; Docs</span>
              <button
                onClick={() => setMobileSidebarOpen(false)}
                className="p-1 rounded-md hover:bg-muted text-muted-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <DocsSidebar onItemClick={() => setMobileSidebarOpen(false)} />
            </div>
          </div>
          <div 
            className="fixed inset-0 -z-10"
            onClick={() => setMobileSidebarOpen(false)}
          />
        </div>
      )}

      {/* Desktop Layout */}
      <div className="flex gap-8">
        {/* Sticky Sidebar */}
        <div className="hidden md:block w-60 lg:w-64 shrink-0 border-r border-border/40 min-h-[calc(100vh-3.5rem)] sticky top-14 py-6 pr-2">
          <DocsSidebar />
        </div>

        {/* Content Area */}
        <div className="flex-1 min-w-0 py-6 max-w-5xl">
          {children}
        </div>
      </div>
    </div>
  )
}
