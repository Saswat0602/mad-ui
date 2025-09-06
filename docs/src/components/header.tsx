"use client"

import Link from "next/link"
import { MainNav } from "./main-nav"
import { ThemeToggle } from "./ThemeToggle"
import { Github, Sparkles, Menu, X, BookOpen, Search } from "lucide-react"
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
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background/95 backdrop-blur-xl border-b border-border/20 shadow-lg shadow-black/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:from-primary/90 group-hover:to-primary/70 transition-all duration-300 shadow-lg shadow-primary/25">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl text-foreground">
                Mad UI
              </span>
              <span className="text-xs text-muted-foreground -mt-1">v2.0</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <MainNav />
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-muted/50 hover:bg-muted/80 transition-all duration-200 text-sm font-medium border border-border/50 hover:border-border/80"
            >
              <Search className="h-4 w-4" />
              <span>Search</span>
              <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>
            
            <Link 
              href="/docs"
              className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-muted/50 hover:bg-muted/80 transition-all duration-200 text-sm font-medium border border-border/50 hover:border-border/80"
            >
              <BookOpen className="h-4 w-4" />
              <span>Documentation</span>
            </Link>
            
            <Link 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-muted/50 hover:bg-muted/80 transition-all duration-200 text-sm font-medium border border-border/50 hover:border-border/80"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </Link>
            
            <div className="w-px h-8 bg-border/50"></div>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-muted/50 hover:bg-muted/80 transition-all duration-200 border border-border/50"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border/20">
            <div className="space-y-4">
              <MainNav />
              <div className="pt-4 border-t border-border/20 space-y-3">
                <Link 
                  href="/docs"
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-muted/50 hover:bg-muted/80 transition-all duration-200 text-sm font-medium border border-border/50"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Documentation</span>
                </Link>
                <Link 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-muted/50 hover:bg-muted/80 transition-all duration-200 text-sm font-medium border border-border/50"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </Link>
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

