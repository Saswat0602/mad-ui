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
  },
  {
    title: "Components",
    href: "/docs/components",
    icon: Package,
  },
  {
    title: "Installation",
    href: "/docs/installation",
    icon: Download,
  },
  {
    title: "Examples",
    href: "/docs/examples",
    icon: Code2,
  },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center space-x-1">
      {navigation.map((item) => {
        const Icon = item.icon
        const isActive = pathname === item.href
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-muted/50 group",
              isActive 
                ? "text-foreground bg-muted/70 shadow-sm" 
                : "text-foreground/70 hover:text-foreground"
            )}
          >
            <Icon className={cn(
              "h-4 w-4 transition-colors duration-200",
              isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
            )} />
            <span>{item.title}</span>
          </Link>
        )
      })}
    </nav>
  )
}

