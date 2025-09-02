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
          className="relative w-14 h-14 p-0 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50 hover:border-slate-600/80 group shadow-xl"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          
          {/* Icon container with better positioning */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Sun className="absolute h-6 w-6 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-yellow-400 drop-shadow-lg" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-blue-300 drop-shadow-lg" />
          </div>
          
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-64 bg-slate-900/95 backdrop-blur-2xl border-slate-700/50 shadow-2xl rounded-3xl p-3 border-2 z-[9999]"
      >
        <div className="p-2">
          <h3 className="text-sm font-semibold text-slate-300 mb-3 px-2">Choose Theme</h3>
          
          <DropdownMenuItem 
            onClick={() => setTheme("light")}
            className="flex items-center cursor-pointer p-4 rounded-2xl hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-orange-500/20 transition-all duration-200 group border border-transparent hover:border-yellow-500/30"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200 shadow-lg">
              <Sun className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <span className="font-semibold text-slate-200">Light Mode</span>
              <p className="text-xs text-slate-400">Clean and bright interface</p>
            </div>
            {theme === "light" && (
              <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg"></div>
            )}
          </DropdownMenuItem>
          
          <DropdownMenuItem 
            onClick={() => setTheme("dark")}
            className="flex items-center cursor-pointer p-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-200 group border border-transparent hover:border-blue-500/30 mt-2"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200 shadow-lg">
              <Moon className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <span className="font-semibold text-slate-200">Dark Mode</span>
              <p className="text-xs text-slate-400">Easy on the eyes</p>
            </div>
            {theme === "dark" && (
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-lg"></div>
            )}
          </DropdownMenuItem>
          
          <DropdownMenuItem 
            onClick={() => setTheme("system")}
            className="flex items-center cursor-pointer p-4 rounded-2xl hover:bg-gradient-to-r hover:from-green-500/20 hover:to-emerald-500/20 transition-all duration-200 group border border-transparent hover:border-green-500/30 mt-2"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200 shadow-lg">
              <Monitor className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <span className="font-semibold text-slate-200">System</span>
              <p className="text-xs text-slate-400">Follows your OS theme</p>
            </div>
            {theme === "system" && (
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-lg"></div>
            )}
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

