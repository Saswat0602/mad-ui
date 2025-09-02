"use client"

import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "./theme-provider"
import { Button } from "mad-ui-components/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme("light")}
        className={`h-10 w-10 p-0 rounded-lg transition-all duration-200 ${
          theme === "light"
            ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400"
            : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
        }`}
        title="Light mode"
      >
        <Sun className="h-5 w-5" />
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme("dark")}
        className={`h-10 w-10 p-0 rounded-lg transition-all duration-200 ${
          theme === "dark"
            ? "bg-gray-800 text-gray-200"
            : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
        }`}
        title="Dark mode"
      >
        <Moon className="h-5 w-5" />
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme("system")}
        className={`h-10 w-10 p-0 rounded-lg transition-all duration-200 ${
          theme === "system"
            ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
            : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
        }`}
        title="System theme"
      >
        <Monitor className="h-5 w-5" />
      </Button>
    </div>
  )
}

