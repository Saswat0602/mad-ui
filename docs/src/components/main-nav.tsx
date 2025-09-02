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
    href: "/components",
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
              "group relative flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-muted/50",
              isActive 
                ? "bg-primary/10 text-primary border border-primary/20" 
                : "text-foreground/70 hover:text-foreground"
            )}
          >
            <div className={cn(
              "flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200",
              isActive 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted/50 text-muted-foreground group-hover:bg-muted/80 group-hover:text-foreground"
            )}>
              <Icon className="h-4 w-4" />
            </div>
            
            <div className="flex flex-col">
              <span className="font-semibold text-sm">{item.title}</span>
              <span className="text-xs text-muted-foreground">{item.description}</span>
            </div>
          </Link>
        )
      })}
    </nav>
  )
}

