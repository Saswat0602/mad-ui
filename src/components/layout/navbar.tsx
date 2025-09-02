import * as React from "react"
import { cn } from "../../lib/utils"
import { Button } from "../core/button"
import { 
  Menu, 
  Search, 
  Bell, 
  User, 
  Settings, 
  LogOut,
  Sun,
  Moon,
  ChevronDown
} from "lucide-react"

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "elevated" | "outlined" | "minimal"
  size?: "sm" | "md" | "lg"
  color?: string
  backgroundColor?: string
  borderColor?: string
  shadow?: "none" | "sm" | "md" | "lg" | "xl"
  fullWidth?: boolean
  fixed?: boolean
  transparent?: boolean
  glassmorphism?: boolean
  showSearch?: boolean
  showNotifications?: boolean
  showUserMenu?: boolean
  showThemeToggle?: boolean
  showSidebarToggle?: boolean
  onSidebarToggle?: () => void
  onThemeToggle?: () => void
  onSearch?: (query: string) => void
  onNotificationClick?: () => void
  onUserMenuClick?: () => void
  logo?: React.ReactNode
  title?: string
  subtitle?: string
  actions?: React.ReactNode
  searchPlaceholder?: string
  userMenuItems?: Array<{
    label?: string
    icon?: React.ReactNode
    onClick?: () => void
    divider?: boolean
  }>
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ 
    className, 
    variant = "default",
    size = "md",
    color,
    backgroundColor,
    borderColor,
    shadow = "md",
    fullWidth = true,
    fixed = false,
    transparent = false,
    glassmorphism = false,
    showSearch = true,
    showNotifications = true,
    showUserMenu = true,
    showThemeToggle = true,
    showSidebarToggle = false,
    onSidebarToggle,
    onThemeToggle,
    onSearch,
    onNotificationClick,
    onUserMenuClick,
    logo,
    title = "Dashboard",
    subtitle,
    actions,
    searchPlaceholder = "Search...",
    userMenuItems = [
      { label: "Profile", icon: <User className="w-4 h-4" />, onClick: () => {} },
      { label: "Settings", icon: <Settings className="w-4 h-4" />, onClick: () => {} },
      { divider: true },
      { label: "Logout", icon: <LogOut className="w-4 h-4" />, onClick: () => {} }
    ],
    style,
    ...props 
  }, ref) => {
    
    const [isSearchOpen, setIsSearchOpen] = React.useState(false)
    const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false)
    const [searchQuery, setSearchQuery] = React.useState("")
    const [isScrolled, setIsScrolled] = React.useState(false)
    const searchRef = React.useRef<HTMLInputElement>(null)
    const userMenuRef = React.useRef<HTMLDivElement>(null)
    
    // Size classes
    const sizeClasses = {
      sm: "h-12 px-4",
      md: "h-16 px-6",
      lg: "h-20 px-8"
    }
    
    // Shadow classes
    const shadowClasses = {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl"
    }
    
    // Variant styles
    const getVariantStyles = () => {
      switch (variant) {
        case "elevated":
          return {
            backgroundColor: backgroundColor || "var(--bg-card)",
            border: "none",
            boxShadow: glassmorphism ? "0 8px 32px rgba(0, 0, 0, 0.1)" : shadowClasses[shadow]
          }
        case "outlined":
          return {
            backgroundColor: transparent ? "transparent" : (backgroundColor || "var(--bg-card)"),
            border: `1px solid ${borderColor || "var(--border-primary)"}`,
            boxShadow: "none"
          }
        case "minimal":
          return {
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "none"
          }
        default:
          return {
            backgroundColor: backgroundColor || "var(--bg-card)",
            border: `1px solid ${borderColor || "var(--border-primary)"}`,
            boxShadow: shadowClasses[shadow]
          }
      }
    }
    
    // Custom styles
    const customStyles: React.CSSProperties = {
      color: color || "var(--text-primary)",
      ...getVariantStyles(),
      ...style
    }
    
    // Handle scroll effect
    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
      }
      
      if (fixed) {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
      }
    }, [fixed])
    
    // Handle click outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
          setIsSearchOpen(false)
        }
        if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
          setIsUserMenuOpen(false)
        }
      }

      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])
    
    // Handle search
    const handleSearch = (e: React.FormEvent) => {
      e.preventDefault()
      if (onSearch && searchQuery.trim()) {
        onSearch(searchQuery.trim())
        setIsSearchOpen(false)
        setSearchQuery("")
      }
    }
    
    // Handle search toggle
    const toggleSearch = () => {
      setIsSearchOpen(!isSearchOpen)
      if (!isSearchOpen && searchRef.current) {
        setTimeout(() => searchRef.current?.focus(), 100)
      }
    }
    
    return (
      <nav
        ref={ref}
        className={cn(
          "relative z-50 transition-all duration-300 ease-in-out",
          fixed && "fixed top-0 left-0 right-0",
          fullWidth ? "w-full" : "max-w-7xl mx-auto",
          sizeClasses[size],
          glassmorphism && "backdrop-blur-md bg-opacity-80",
          isScrolled && "bg-opacity-95 backdrop-blur-md",
          className
        )}
        style={customStyles}
        {...props}
      >
        <div className="flex items-center justify-between h-full">
          {/* Left Section - Logo & Title */}
          <div className="flex items-center space-x-4">
            {showSidebarToggle && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onSidebarToggle}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Menu className="w-5 h-5" />
              </Button>
            )}
            
            {logo && (
              <div className="flex-shrink-0">
                {logo}
              </div>
            )}
            
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title}
              </h1>
              {subtitle && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          
          {/* Center Section - Search */}
          {showSearch && (
            <div className="flex-1 max-w-md mx-8">
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    ref={searchRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={searchPlaceholder}
                    className={cn(
                      "w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm transition-all duration-200",
                      "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                      "placeholder-gray-400 dark:placeholder-gray-500"
                    )}
                  />
                </div>
              </form>
            </div>
          )}
          
          {/* Right Section - Actions & User Menu */}
          <div className="flex items-center space-x-2">
            {actions}
            
            {showThemeToggle && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onThemeToggle}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Sun className="w-5 h-5 dark:hidden" />
                <Moon className="w-5 h-5 hidden dark:block" />
              </Button>
            )}
            
            {showNotifications && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onNotificationClick}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 relative"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </Button>
            )}
            
            {showUserMenu && (
              <div className="relative" ref={userMenuRef}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="hidden md:block text-sm font-medium">
                    User
                  </span>
                  <ChevronDown className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    isUserMenuOpen && "rotate-180"
                  )} />
                </Button>
                
                {/* User Menu Dropdown */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
                    {userMenuItems.map((item, index) => (
                      <React.Fragment key={index}>
                        {item.divider ? (
                          <div className="border-t border-gray-200 dark:border-gray-700 my-1" />
                        ) : (
                          <button
                            onClick={item.onClick || (() => {})}
                            className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 transition-colors duration-150"
                          >
                            {item.icon}
                            <span>{item.label}</span>
                          </button>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    )
  }
)

Navbar.displayName = "Navbar"

export { Navbar }
