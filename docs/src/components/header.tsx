"use client"

import Link from "next/link"
import { MainNav } from "./main-nav"
import { ThemeToggle } from "./theme-toggle"
import { Github, Sparkles, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-xl border-b border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center group-hover:bg-primary/90 transition-colors">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-foreground">
                Mad UI
              </span>
              <span className="text-xs text-muted-foreground -mt-1">v2.0</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <MainNav />
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors text-sm font-medium"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </Link>
            
            <div className="w-px h-6 bg-border/50"></div>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors"
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
          <div className="lg:hidden py-4 border-t border-border/20">
            <div className="space-y-4">
              <MainNav />
              <div className="pt-4 border-t border-border/20">
                <Link 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-3 rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors text-sm font-medium"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

