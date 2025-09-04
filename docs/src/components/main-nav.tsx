"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { BookOpen, Package, Download, Code2 } from "lucide-react"
import { useState } from "react"

const navigation = [
  {
    title: "Getting Started",
    href: "/docs/getting-started",
    icon: BookOpen,
    description: "Quick start guide"
  },
  {
    title: "Components",
    href: "/docs/components",
    icon: Package,
    description: "UI component library"
  },
  {
    title: "Installation",
    href: "/docs/installation",
    icon: Download,
    description: "Setup instructions"
  },
  {
    title: "Examples",
    href: "/docs/examples",
    icon: Code2,
    description: "Live examples"
  },
]

export function MainNav() {
  const pathname = usePathname()
  const router = useRouter()
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleNavigation = (href: string, e: React.MouseEvent) => {
    e.preventDefault()
    
    if (pathname === href) return
    
    setIsTransitioning(true)
    
    // Add smooth transition effect
    setTimeout(() => {
      router.push(href)
      setIsTransitioning(false)
    }, 150)
  }

  return (
    <nav className="flex items-center space-x-3">
      {navigation.map((item) => {
        const Icon = item.icon
        const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
        
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={(e) => handleNavigation(item.href, e)}
            className={cn(
              "group relative flex items-center space-x-3 px-5 py-3.5 rounded-xl transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg transform",
              isActive 
                ? "bg-primary/10 text-primary border-2 border-primary/20 shadow-lg shadow-primary/25 scale-105" 
                : "text-foreground/70 hover:text-foreground hover:bg-muted/60 border-2 border-transparent hover:border-border/30",
              isTransitioning && "opacity-70 scale-95"
            )}
          >
            <div className={cn(
              "flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-500 ease-in-out shadow-sm",
              isActive 
                ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25 scale-110" 
                : "bg-muted/60 text-muted-foreground group-hover:bg-muted/80 group-hover:text-foreground group-hover:shadow-md group-hover:scale-105"
            )}>
              <Icon className={cn(
                "h-4 w-4 transition-all duration-300",
                isActive && "scale-110"
              )} />
            </div>
            
            <div className="flex flex-col">
              <span className={cn(
                "font-semibold text-sm leading-tight transition-all duration-300",
                isActive && "text-primary"
              )}>{item.title}</span>
              <span className={cn(
                "text-xs leading-tight transition-all duration-300",
                isActive ? "text-primary/70" : "text-muted-foreground"
              )}>{item.description}</span>
            </div>
            
            {isActive && (
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full shadow-lg shadow-primary/50 animate-pulse" />
            )}
          </Link>
        )
      })}
    </nav>
  )
}

