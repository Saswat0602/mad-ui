import * as React from "react"
import { cn } from "../../lib/utils"
import { Button } from "../core/button"
import { 
  ChevronLeft,
  ChevronRight,
  Home,
  BarChart3,
  Users,
  Settings,
  FileText,
  Calendar,
  Mail,
  HelpCircle,
  LogOut,
  Menu,
  X
} from "lucide-react"

export interface SidebarItem {
  label?: string
  icon?: React.ReactNode
  href?: string
  onClick?: () => void
  badge?: string | number
  badgeColor?: "default" | "primary" | "success" | "warning" | "error"
  children?: Array<{
    label: string
    href?: string
    onClick?: () => void
    badge?: string | number
  }>
  divider?: boolean
}

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined" | "minimal" | "glass"
  size?: "sm" | "md" | "lg"
  color?: string
  backgroundColor?: string
  borderColor?: string
  shadow?: "none" | "sm" | "md" | "lg" | "xl"
  width?: number
  collapsedWidth?: number
  collapsed?: boolean
  onCollapsedChange?: (collapsed: boolean) => void
  collapsible?: boolean
  showToggle?: boolean
  fixed?: boolean
  overlay?: boolean
  overlayCloseOnClick?: boolean
  mobileBreakpoint?: number
  items?: SidebarItem[]
  logo?: React.ReactNode
  title?: string
  subtitle?: string
  footer?: React.ReactNode
  showFooter?: boolean
  showLogo?: boolean
  showTitle?: boolean
  showSearch?: boolean
  searchPlaceholder?: string
  onSearch?: (query: string) => void
  onItemClick?: (item: SidebarItem) => void
  activeItem?: string
  defaultCollapsed?: boolean
  animation?: "slide" | "fade" | "scale" | "none"
  duration?: number
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ 
    className, 
    variant = "default",
    size = "md",
    color,
    backgroundColor,
    borderColor,
    shadow = "lg",
    width = 280,
    collapsedWidth = 80,
    collapsed: controlledCollapsed,
    onCollapsedChange,
    collapsible = true,
    showToggle = true,
    fixed = false,
    overlay = false,
    overlayCloseOnClick = true,
    mobileBreakpoint = 768,
    items = [
      { label: "Dashboard", icon: <Home className="w-5 h-5" />, href: "/" },
      { label: "Analytics", icon: <BarChart3 className="w-5 h-5" />, href: "/analytics" },
      { label: "Users", icon: <Users className="w-5 h-5" />, href: "/users" },
      { label: "Documents", icon: <FileText className="w-5 h-5" />, href: "/documents" },
      { label: "Calendar", icon: <Calendar className="w-5 h-5" />, href: "/calendar" },
      { label: "Messages", icon: <Mail className="w-5 h-5" />, href: "/messages" },
      { divider: true },
      { label: "Settings", icon: <Settings className="w-5 h-5" />, href: "/settings" },
      { label: "Help", icon: <HelpCircle className="w-5 h-5" />, href: "/help" },
      { divider: true },
      { label: "Logout", icon: <LogOut className="w-5 h-5" />, href: "/logout" }
    ],
    logo,
    title = "App",
    subtitle,
    footer,
    showFooter = true,
    showLogo = true,
    showTitle = true,
    showSearch = true,
    searchPlaceholder = "Search...",
    onSearch,
    onItemClick,
    activeItem,
    defaultCollapsed = false,
    animation = "slide",
    duration = 300,
    style,
    ...props 
  }, ref) => {
    
    const [internalCollapsed, setInternalCollapsed] = React.useState(defaultCollapsed)
    const [isMobile, setIsMobile] = React.useState(false)
    const [isOpen, setIsOpen] = React.useState(false)
    const [searchQuery, setSearchQuery] = React.useState("")
    const [expandedItems, setExpandedItems] = React.useState<Set<string>>(new Set())
    
    const isCollapsed = controlledCollapsed !== undefined ? controlledCollapsed : internalCollapsed
    const currentWidth = isCollapsed ? collapsedWidth : width
    
    // Size classes
    const sizeClasses = {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    }
    
    // Shadow classes
    const shadowClasses = {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl"
    }
    
    // Animation classes
    const animationClasses = {
      slide: "transition-all duration-300 ease-in-out",
      fade: "transition-opacity duration-300 ease-in-out",
      scale: "transition-all duration-300 ease-in-out transform",
      none: ""
    }
    
    // Variant styles
    const getVariantStyles = () => {
      switch (variant) {
        case "elevated":
          return {
            backgroundColor: backgroundColor || "var(--bg-card)",
            border: "none",
            boxShadow: shadowClasses[shadow]
          }
        case "outlined":
          return {
            backgroundColor: backgroundColor || "var(--bg-card)",
            border: `1px solid ${borderColor || "var(--border-primary)"}`,
            boxShadow: "none"
          }
        case "minimal":
          return {
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "none"
          }
        case "glass":
          return {
            backgroundColor: backgroundColor || "rgba(255, 255, 255, 0.1)",
            border: "none",
            boxShadow: "none",
            backdropFilter: "blur(10px)"
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
      width: currentWidth,
      ...getVariantStyles(),
      ...style
    }
    
    // Handle responsive behavior
    React.useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < mobileBreakpoint)
        if (window.innerWidth < mobileBreakpoint) {
          setIsOpen(false)
        }
      }
      
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [mobileBreakpoint])
    
    // Handle collapse toggle
    const toggleCollapse = () => {
      const newCollapsed = !isCollapsed
      if (controlledCollapsed === undefined) {
        setInternalCollapsed(newCollapsed)
      }
      onCollapsedChange?.(newCollapsed)
    }
    
    // Handle item click
    const handleItemClick = (item: SidebarItem) => {
      if (item.children && item.children.length > 0 && item.label) {
        setExpandedItems(prev => {
          const newSet = new Set(prev)
          if (newSet.has(item.label!)) {
            newSet.delete(item.label!)
          } else {
            newSet.add(item.label!)
          }
          return newSet
        })
      } else {
        onItemClick?.(item)
        if (isMobile) {
          setIsOpen(false)
        }
      }
    }
    
    // Handle search
    const handleSearch = (e: React.FormEvent) => {
      e.preventDefault()
      if (onSearch && searchQuery.trim()) {
        onSearch(searchQuery.trim())
        setSearchQuery("")
      }
    }
    
    // Render sidebar item
    const renderItem = (item: SidebarItem, index: number) => {
      if (item.divider) {
        return (
          <div 
            key={`divider-${index}`}
            className="my-2 border-t border-gray-200 dark:border-gray-700"
          />
        )
      }
      
      const isActive = activeItem === item.href || activeItem === item.label
      const hasChildren = item.children && item.children.length > 0
      const isExpanded = item.label ? expandedItems.has(item.label) : false
      
      return (
        <div key={item.label || `item-${index}`}>
          <button
            onClick={() => handleItemClick(item)}
            className={cn(
              "w-full flex items-center px-4 py-3 text-left transition-all duration-200 rounded-lg",
              "hover:bg-gray-100 dark:hover:bg-gray-800",
              isActive && "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
              !isActive && "text-gray-700 dark:text-gray-300",
              isCollapsed && "justify-center px-2"
            )}
          >
            <div className="flex-shrink-0">
              {item.icon}
            </div>
            
            {!isCollapsed && (
              <div className="flex-1 ml-3 flex items-center justify-between">
                <span className={cn("font-medium", sizeClasses[size])}>
                  {item.label || ""}
                </span>
                
                {item.badge && (
                  <span className={cn(
                    "px-2 py-1 text-xs font-medium rounded-full",
                    item.badgeColor === "primary" && "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
                    item.badgeColor === "success" && "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
                    item.badgeColor === "warning" && "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
                    item.badgeColor === "error" && "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
                    !item.badgeColor && "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                  )}>
                    {item.badge}
                  </span>
                )}
                
                {hasChildren && (
                  <ChevronRight className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    isExpanded && "rotate-90"
                  )} />
                )}
              </div>
            )}
          </button>
          
          {/* Render children */}
          {hasChildren && !isCollapsed && isExpanded && (
            <div className="ml-8 mt-1 space-y-1">
              {item.children!.map((child, childIndex) => (
                <button
                  key={child.label || `child-${childIndex}`}
                  onClick={() => {
                    child.onClick?.()
                    if (isMobile) setIsOpen(false)
                  }}
                  className="w-full flex items-center px-4 py-2 text-left text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-150"
                >
                  {child.label || ""}
                  {child.badge && (
                    <span className="ml-auto px-2 py-1 text-xs bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded-full">
                      {child.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      )
    }
    
    return (
      <>
        {/* Mobile Overlay */}
        {isMobile && overlay && isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={overlayCloseOnClick ? () => setIsOpen(false) : undefined}
          />
        )}
        
        {/* Sidebar */}
        <div
          ref={ref}
          className={cn(
            "flex flex-col transition-all duration-300 ease-in-out",
            fixed && "fixed top-0 left-0 h-full z-50",
            isMobile && "fixed inset-y-0 left-0 z-50",
            !isMobile && !fixed && "relative",
            isMobile && !isOpen && "-translate-x-full",
            animationClasses[animation],
            className
          )}
          style={{
            ...customStyles,
            transitionDuration: `${duration}ms`
          }}
          {...props}
        >
          {/* Header */}
          <div className="flex-shrink-0 p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              {showLogo && logo && (
                <div className="flex-shrink-0">
                  {logo}
                </div>
              )}
              
              {!isCollapsed && showTitle && (
                <div className="flex-1 ml-3">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {title}
                  </h2>
                  {subtitle && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {subtitle}
                    </p>
                  )}
                </div>
              )}
              
              {showToggle && collapsible && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleCollapse}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {isCollapsed ? (
                    <ChevronRight className="w-4 h-4" />
                  ) : (
                    <ChevronLeft className="w-4 h-4" />
                  )}
                </Button>
              )}
              
              {isMobile && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
          
          {/* Search */}
          {showSearch && !isCollapsed && (
            <div className="flex-shrink-0 p-4 border-b border-gray-200 dark:border-gray-700">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={searchPlaceholder}
                  className="w-full pl-3 pr-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </form>
            </div>
          )}
          
          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            {items.map(renderItem)}
          </nav>
          
          {/* Footer */}
          {showFooter && footer && (
            <div className="flex-shrink-0 p-4 border-t border-gray-200 dark:border-gray-700">
              {footer}
            </div>
          )}
        </div>
      </>
    )
  }
)

Sidebar.displayName = "Sidebar"

export { Sidebar }
