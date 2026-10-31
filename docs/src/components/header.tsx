"use client"

import Link from "next/link"
import { MainNav } from "./main-nav"
import { ThemeToggle } from "./ThemeToggle"
import { Menu, X, Search, ExternalLink, Github } from "lucide-react"
import { useState, useEffect } from "react"
import { ComponentSearch } from "./ComponentSearch"

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
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
            <div className="hidden md:flex items-center">
              <MainNav />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-md bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors text-xs font-medium border border-border/40"
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

          {/* Mobile Menu & Search Button */}
          <div className="flex md:hidden items-center space-x-1">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-md hover:bg-muted text-muted-foreground"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md hover:bg-muted text-muted-foreground"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/40 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col space-y-1">
              <Link 
                href="/docs/components" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted text-foreground"
              >
                Components
              </Link>
              <Link 
                href="/docs/hooks" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted text-foreground"
              >
                Hooks
              </Link>
              <Link 
                href="/docs/installation" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted text-foreground"
              >
                Installation
              </Link>
              <Link 
                href="/docs/getting-started" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted text-foreground"
              >
                Getting Started
              </Link>
              <Link 
                href="/docs/examples" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted text-foreground"
              >
                Examples
              </Link>
              <Link 
                href="/theme-builder" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted text-foreground"
              >
                Theme Builder
              </Link>
            </div>
            <div className="pt-3 border-t border-border/40 flex items-center justify-between px-3">
              <a 
                href="https://github.com/Saswat0602/mad-ui" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-xs text-muted-foreground hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
                <ExternalLink className="h-3 w-3 opacity-60" />
              </a>
              <a 
                href="https://www.npmjs.com/package/mad-ui-components" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-xs text-muted-foreground hover:text-foreground"
              >
                <span className="font-bold text-red-500 text-xs">npm</span>
                <span>mad-ui-components</span>
                <ExternalLink className="h-3 w-3 opacity-60" />
              </a>
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
