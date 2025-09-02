"use client"

import Link from "next/link"
import { MainNav } from "./main-nav"
import { ThemeToggle } from "./theme-toggle"
import { Github, Sparkles, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-xl border-b border-border/20 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
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
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-muted/50 hover:bg-muted/80 transition-all duration-200 text-sm font-medium border border-border/50 hover:border-border/80"
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
            className="lg:hidden p-2 rounded-xl bg-muted/50 hover:bg-muted/80 transition-colors border border-border/50"
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
          <div className="lg:hidden py-6 border-t border-border/20 animate-slide-down">
            <div className="space-y-4">
              <MainNav />
              <div className="pt-4 border-t border-border/20">
                <Link 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-3 rounded-xl bg-muted/50 hover:bg-muted/80 transition-colors text-sm font-medium"
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

