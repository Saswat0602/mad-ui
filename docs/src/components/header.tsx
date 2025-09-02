import Link from "next/link"
import { MainNav } from "./main-nav"
import { ThemeToggle } from "./theme-toggle"
import { Github, Sparkles } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center px-4">
        <div className="mr-6 flex">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-xl gradient-text">Mad UI</span>
          </Link>
        </div>
        
        <MainNav />
        
        <div className="ml-auto flex items-center space-x-3">
          <Link 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-muted/50 transition-colors text-sm font-medium"
          >
            <Github className="h-4 w-4" />
            <span className="text-sm">GitHub</span>
          </Link>
          
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

