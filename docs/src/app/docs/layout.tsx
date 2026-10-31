"use client"

import React, { useState } from 'react'
import { DocsSidebar } from '@/components/DocsSidebar'
import { PanelLeft, X, Layers } from 'lucide-react'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
      {/* Mobile Sub-Header & Breadcrumb Bar (< lg) */}
      <div className="lg:hidden sticky top-14 z-40 -mx-4 sm:-mx-6 px-4 sm:px-6 py-2.5 bg-background/90 backdrop-blur-md border-b border-border/40 flex items-center justify-between mb-6 shadow-2xs">
        <button
          onClick={() => setMobileSidebarOpen(true)}
          className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs font-medium bg-muted/60 hover:bg-muted text-foreground border border-border/50 transition-colors cursor-pointer"
        >
          <PanelLeft className="h-3.5 w-3.5 text-primary" />
          <span>Documentation Menu</span>
        </button>

        <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
          <Layers className="h-3.5 w-3.5 text-primary/70" />
          <span>75 Components</span>
        </div>
      </div>

      {/* Mobile Drawer Sheet */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
            onClick={() => setMobileSidebarOpen(false)}
          />
          
          {/* Slide-over Panel */}
          <div className="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-card border-r border-border shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-200">
            <div className="flex items-center justify-between p-4 border-b border-border/40 bg-muted/20">
              <div className="flex items-center space-x-2.5">
                <div className="w-6 h-6 rounded-md bg-zinc-900 border border-zinc-700/60 flex items-center justify-center">
                  <span className="font-bold text-xs bg-gradient-to-br from-blue-400 to-indigo-400 bg-clip-text text-transparent">M</span>
                </div>
                <span className="font-bold text-sm tracking-tight text-foreground">Mad UI Docs</span>
              </div>
              <button
                onClick={() => setMobileSidebarOpen(false)}
                className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                aria-label="Close documentation menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <DocsSidebar onItemClick={() => setMobileSidebarOpen(false)} />
            </div>
          </div>
        </div>
      )}

      {/* Desktop & Content Layout */}
      <div className="flex gap-8 lg:gap-10 xl:gap-12">
        {/* Sticky Desktop Sidebar (>= lg) */}
        <div className="hidden lg:block w-64 lg:w-72 shrink-0 border-r border-border/40 sticky top-14 h-[calc(100vh-3.5rem)] py-6 pr-4 overflow-hidden flex flex-col">
          <DocsSidebar />
        </div>

        {/* Content Area */}
        <div className="flex-1 min-w-0 py-6 lg:py-10 max-w-full lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
          {children}
        </div>
      </div>
    </div>
  )
}
