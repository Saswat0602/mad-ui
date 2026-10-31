"use client"

import Link from "next/link"
import { MainNav } from "./main-nav"
import { ThemeToggle } from "./ThemeToggle"
import { Menu, X, Search, ExternalLink, Github } from "lucide-react"
import { useState, useEffect } from "react"
import { ComponentSearch } from "./ComponentSearch"
import { DocsSidebar } from "./DocsSidebar"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  // Keyboard shortcut for search (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault()
        setIsSearchOpen(true)
      }
      if (event.key === 'Escape') {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-14">
          {/* Logo & Desktop Nav */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-2.5 group">
              <div className="w-7 h-7 rounded-md bg-zinc-900 border border-zinc-700/60 dark:border-zinc-800 flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="font-bold text-xs bg-gradient-to-br from-blue-400 to-indigo-400 bg-clip-text text-transparent">M</span>
              </div>
              <span className="font-bold text-base tracking-tight text-foreground">
                Mad UI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <MainNav />
            </div>
          </div>

          {/* Right Side Actions (Desktop) */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-md bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors text-xs font-medium border border-border/40 cursor-pointer"
              title="Search components (⌘K)"
            >
              <Search className="h-3.5 w-3.5" />
              <span>Search docs...</span>
              <kbd className="pointer-events-none hidden h-4 select-none items-center gap-0.5 rounded border border-border/60 bg-muted px-1 font-mono text-[9px] font-medium sm:flex">
                <span>⌘</span>K
              </kbd>
            </button>

            {/* npm Link */}
            <a 
              href="https://www.npmjs.com/package/mad-ui-components" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors text-xs font-medium"
              title="View on npm (mad-ui-components)"
            >
              <span className="font-bold text-red-500 text-xs tracking-tighter">npm</span>
              <span className="hidden xl:inline text-[11px] text-muted-foreground/80">v3.0.0</span>
            </a>

            {/* GitHub Link */}
            <a 
              href="https://github.com/Saswat0602/mad-ui" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              title="View source on GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            
            <div className="w-px h-4 bg-border/60 mx-1"></div>
            <ThemeToggle />
          </div>

          {/* Mobile Actions (< md / < lg) */}
          <div className="flex lg:hidden items-center space-x-1">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label="Search documentation"
            >
              <Search className="h-4 w-4" />
            </button>
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer ml-1"
              aria-label="Open navigation menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Mobile Slide-over Sheet Drawer (shadcn-style) */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer Panel */}
            <div className="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-card border-r border-border shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-200">
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 border-b border-border/40 bg-muted/20">
                <Link 
                  href="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-2.5"
                >
                  <div className="w-7 h-7 rounded-md bg-zinc-900 border border-zinc-700/60 dark:border-zinc-800 flex items-center justify-center">
                    <span className="font-bold text-xs bg-gradient-to-br from-blue-400 to-indigo-400 bg-clip-text text-transparent">M</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm tracking-tight text-foreground">Mad UI</span>
                    <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-mono font-semibold">v3.0.0</span>
                  </div>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  aria-label="Close navigation menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Quick Search Button inside Drawer */}
              <div className="p-3 border-b border-border/40">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    setIsSearchOpen(true)
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md bg-muted/40 hover:bg-muted text-muted-foreground text-xs font-medium border border-border/50 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Search className="h-3.5 w-3.5" />
                    <span>Search components...</span>
                  </div>
                  <kbd className="h-4 select-none items-center gap-0.5 rounded border border-border/60 bg-muted px-1 font-mono text-[9px] font-medium flex">
                    <span>⌘</span>K
                  </kbd>
                </button>
              </div>

              {/* Scrollable Navigation Tree */}
              <div className="flex-1 overflow-y-auto">
                <DocsSidebar onItemClick={() => setIsMobileMenuOpen(false)} />
              </div>

              {/* Drawer Footer with Links */}
              <div className="p-3 border-t border-border/40 bg-muted/20 flex items-center justify-between text-xs text-muted-foreground">
                <a 
                  href="https://github.com/Saswat0602/mad-ui" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
                <a 
                  href="https://www.npmjs.com/package/mad-ui-components" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 hover:text-foreground transition-colors"
                >
                  <span className="font-bold text-red-500 text-xs">npm</span>
                  <span>v3.0.0</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Search Modal */}
      {isSearchOpen && (
        <ComponentSearch onClose={() => setIsSearchOpen(false)} />
      )}
    </header>
  )
}
