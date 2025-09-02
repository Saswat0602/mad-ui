"use client"

import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "./theme-provider"
import { Button } from "mad-ui-components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "mad-ui-components/dropdown-menu"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-10 h-10 p-0 hover:bg-muted/50 transition-all duration-200 hover:scale-105"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-48 bg-background/95 backdrop-blur-xl border-border/50 shadow-lg"
      >
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className="flex items-center cursor-pointer hover:bg-muted/50 transition-colors"
        >
          <Sun className="mr-3 h-4 w-4" />
          <span className="flex-1">Light</span>
          {theme === "light" && (
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className="flex items-center cursor-pointer hover:bg-muted/50 transition-colors"
        >
          <Moon className="mr-3 h-4 w-4" />
          <span className="flex-1">Dark</span>
          {theme === "dark" && (
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className="flex items-center cursor-pointer hover:bg-muted/50 transition-colors"
        >
          <Monitor className="mr-3 h-4 w-4" />
          <span className="flex-1">System</span>
          {theme === "system" && (
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

