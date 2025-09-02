"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BookOpen, Package, Download, Code2 } from "lucide-react"

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

  return (
    <nav className="flex items-center space-x-2">
      {navigation.map((item) => {
        const Icon = item.icon
        const isActive = pathname === item.href
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "group relative flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105",
              isActive 
                ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-foreground shadow-lg border border-blue-500/30" 
                : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
            )}
          >
            <div className={cn(
              "flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300",
              isActive 
                ? "bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg" 
                : "bg-muted/50 text-muted-foreground group-hover:bg-muted/80 group-hover:text-foreground"
            )}>
              <Icon className="h-4 w-4" />
            </div>
            
            <div className="flex flex-col">
              <span className="font-semibold text-sm">{item.title}</span>
              <span className="text-xs text-muted-foreground">{item.description}</span>
            </div>

            {/* Active indicator */}
            {isActive && (
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            )}
          </Link>
        )
      })}
    </nav>
  )
}

