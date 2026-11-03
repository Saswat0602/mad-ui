"use client"

import React, { useState, useEffect } from "react"
import {
  Search,
  Bell,
  User,
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  Globe,
  Settings,
  LogOut,
} from "../../icons"
import { cn } from "../../lib/utils"

export interface NavbarNavItem {
  id?: string
  label: string
  href?: string
  icon?: any
  active?: boolean
  badge?: string | number
  badgeColor?: string
  dropdown?: Array<{
    label: string
    href?: string
    icon?: any
    action?: () => void
    danger?: boolean
  }>
}

export interface NavbarProfileItem {
  label: string
  href?: string
  icon?: any
  action?: () => void
  danger?: boolean
}

export interface NavbarNotificationItem {
  id?: string
  title: string
  message: string
  time: string
  unread?: boolean
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  // Content props
  brand?: string
  brandLogo?: React.ReactNode
  navItems?: NavbarNavItem[]

  // User/Profile props
  showProfile?: boolean
  profileImage?: string
  profileName?: string
  profileRole?: string
  profileMenuItems?: NavbarProfileItem[]

  // Search props
  showSearch?: boolean
  searchPlaceholder?: string
  searchWidth?: string
  onSearch?: (query: string) => void

  // Notification props
  showNotifications?: boolean
  notificationCount?: number
  notificationItems?: NavbarNotificationItem[]
  onNotificationClick?: () => void

  // Theme & Styling
  theme?: "default" | "light" | "dark" | "bordered" | "transparent" | "glass"
  position?: "sticky" | "fixed" | "static"
  height?: string
  blur?: boolean

  // Layout props
  container?: string
  padding?: string
  alignment?: "justify-between" | "justify-center" | "justify-start"
  mobileBreakpoint?: "md" | "lg" | "xl"

  // Behavior props
  showMobileMenu?: boolean
  onMobileToggle?: (open: boolean) => void
  hideOnScroll?: boolean
  shrinkOnScroll?: boolean

  // Additional features
  showLanguageSwitch?: boolean
  showThemeToggle?: boolean
  showCTA?: boolean
  ctaText?: string
  ctaAction?: () => void

  // Advanced customization
  leftContent?: React.ReactNode
  centerContent?: React.ReactNode
  rightContent?: React.ReactNode
  customClasses?: string
  itemCustomClasses?: string

  // Callbacks
  onItemClick?: (item: NavbarNavItem, index: number) => void
  onBrandClick?: () => void
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      brand = "Acme UI",
      brandLogo = null,
      navItems = [],

      showProfile = true,
      profileImage = "",
      profileName = "Jane Doe",
      profileRole = "Admin",
      profileMenuItems = [],

      showSearch = false,
      searchPlaceholder = "Search documentation...",
      searchWidth = "w-64",
      onSearch = () => {},

      showNotifications = false,
      notificationCount = 0,
      notificationItems = [],
      onNotificationClick = () => {},

      theme = "default",
      position = "sticky",
      height = "h-14",
      blur = true,

      container = "max-w-7xl mx-auto",
      padding = "px-4 sm:px-6",
      alignment = "justify-between",
      mobileBreakpoint = "lg",

      showMobileMenu = false,
      onMobileToggle = () => {},
      hideOnScroll = false,
      shrinkOnScroll = false,

      showLanguageSwitch = false,
      showThemeToggle = false,
      showCTA = false,
      ctaText = "Get Started",
      ctaAction = () => {},

      leftContent = null,
      centerContent = null,
      rightContent = null,
      customClasses = "",
      itemCustomClasses = "",

      onItemClick = () => {},
      onBrandClick = () => {},

      className,
      children,
      ...props
    },
    ref
  ) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [showProfileMenu, setShowProfileMenu] = useState(false)
    const [showNotificationMenu, setShowNotificationMenu] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(showMobileMenu)
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null)

    useEffect(() => {
      if (hideOnScroll || shrinkOnScroll) {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
      }
    }, [hideOnScroll, shrinkOnScroll])

    const handleMobileToggle = () => {
      const next = !isMobileMenuOpen
      setIsMobileMenuOpen(next)
      onMobileToggle(next)
    }

    const defaultProfileItems: NavbarProfileItem[] = [
      { icon: User, label: "Account settings", action: () => {} },
      { icon: Settings, label: "Preferences", action: () => {} },
      { icon: LogOut, label: "Sign out", action: () => {}, danger: true },
    ]

    const profileItems = profileMenuItems.length > 0 ? profileMenuItems : defaultProfileItems

    // If declarative children are passed, render clean shell
    if (children) {
      return (
        <nav
          ref={ref}
          role="navigation"
          aria-label={props["aria-label"] || "Main navigation"}
          className={cn(
            position === "fixed" ? "fixed" : position === "sticky" ? "sticky" : "relative",
            "top-0 left-0 right-0 z-40 w-full border-b border-border/80 bg-background/95 backdrop-blur-md text-foreground transition-all duration-200",
            height,
            className
          )}
          {...props}
        >
          <div className={cn(container, padding, "h-full flex items-center justify-between")}>
            {children}
          </div>
        </nav>
      )
    }

    return (
      <nav
        ref={ref}
        role="navigation"
        aria-label={props["aria-label"] || "Main navigation"}
        className={cn(
          position === "fixed" ? "fixed" : position === "sticky" ? "sticky" : "relative",
          "top-0 left-0 right-0 z-40 w-full border-b border-border/80 bg-background/95 backdrop-blur-md text-foreground transition-all duration-200",
          shrinkOnScroll && isScrolled ? "h-12" : height,
          hideOnScroll && isScrolled ? "-translate-y-full" : "translate-y-0",
          theme === "bordered" && "bg-card border-b border-border shadow-xs",
          theme === "transparent" && "bg-transparent border-transparent",
          customClasses,
          className
        )}
        {...props}
      >
        <div className={cn(container, padding, "h-full")}>
          <div className={cn("flex items-center", alignment, "h-full gap-4")}>
            {/* Left Content / Brand */}
            <div className="flex items-center gap-6">
              {leftContent || (
                <>
                  <button
                    type="button"
                    onClick={onBrandClick}
                    className="flex items-center gap-2.5 text-foreground hover:opacity-80 transition-opacity font-semibold text-sm tracking-tight cursor-pointer"
                  >
                    {brandLogo && (
                      <div className="flex items-center justify-center shrink-0">
                        {brandLogo}
                      </div>
                    )}
                    <span className="font-semibold text-sm sm:text-base text-foreground tracking-tight">
                      {brand}
                    </span>
                  </button>

                  {/* Desktop Nav Items */}
                  <div
                    className={cn(
                      "hidden items-center gap-1",
                      mobileBreakpoint === "md"
                        ? "md:flex"
                        : mobileBreakpoint === "xl"
                        ? "xl:flex"
                        : "lg:flex"
                    )}
                  >
                    {navItems.map((item, index) => {
                      const Icon = item.icon
                      const hasDropdown = item.dropdown && item.dropdown.length > 0
                      const isDropdownOpen = activeDropdown === index

                      return (
                        <div
                          key={item.id || index}
                          className="relative"
                          onMouseEnter={() => hasDropdown && setActiveDropdown(index)}
                          onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                        >
                          <button
                            type="button"
                            onClick={() => {
                              onItemClick(item, index)
                              if (hasDropdown) setActiveDropdown(isDropdownOpen ? null : index)
                            }}
                            className={cn(
                              "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer select-none",
                              item.active
                                ? "bg-accent text-accent-foreground font-semibold"
                                : "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
                              itemCustomClasses
                            )}
                          >
                            {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
                            <span>{item.label}</span>
                            {item.badge && (
                              <span className="ml-1 px-1.5 py-0.2 text-[10px] font-mono rounded-full bg-muted text-muted-foreground border border-border/50">
                                {item.badge}
                              </span>
                            )}
                            {hasDropdown && (
                              <ChevronDown
                                className={cn(
                                  "w-3 h-3 text-muted-foreground transition-transform duration-150",
                                  isDropdownOpen && "rotate-180 text-foreground"
                                )}
                              />
                            )}
                          </button>

                          {/* Dropdown Menu */}
                          {hasDropdown && isDropdownOpen && (
                            <div className="absolute top-full left-0 mt-1.5 w-48 rounded-xl border border-border bg-popover p-1 text-popover-foreground shadow-xl z-50 duration-150 animate-in fade-in-0 zoom-in-95">
                              {item.dropdown?.map((dropItem, dropIndex) => {
                                const DropIcon = dropItem.icon
                                return (
                                  <button
                                    key={dropIndex}
                                    type="button"
                                    onClick={() => {
                                      dropItem.action?.()
                                      setActiveDropdown(null)
                                    }}
                                    className={cn(
                                      "w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-left transition-colors cursor-pointer",
                                      dropItem.danger
                                        ? "text-red-500 hover:bg-red-500/10"
                                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                                    )}
                                  >
                                    {DropIcon && <DropIcon className="w-3.5 h-3.5 shrink-0" />}
                                    <span>{dropItem.label}</span>
                                  </button>
                                )
                              })}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </>
              )}
            </div>

            {/* Center Content (e.g. Search) */}
            <div className="flex-1 flex items-center justify-center max-w-md mx-auto">
              {centerContent || (
                showSearch && (
                  <div className={cn("hidden md:block w-full", searchWidth)}>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder={searchPlaceholder}
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value)
                          onSearch(e.target.value)
                        }}
                        className="w-full h-8 pl-8 pr-7 rounded-lg border border-border/80 bg-muted/40 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:bg-background transition-all"
                      />
                      {searchQuery && (
                        <button
                          type="button"
                          onClick={() => {
                            setSearchQuery("")
                            onSearch("")
                          }}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Right Content */}
            <div className="flex items-center gap-2">
              {rightContent || (
                <>
                  {/* Notifications */}
                  {showNotifications && (
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => {
                          setShowNotificationMenu(!showNotificationMenu)
                          onNotificationClick()
                        }}
                        className="h-8 w-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors relative cursor-pointer"
                        aria-label="Notifications"
                      >
                        <Bell className="w-4 h-4" />
                        {notificationCount > 0 && (
                          <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 rounded-full bg-primary text-primary-foreground text-[10px] font-mono flex items-center justify-center font-bold">
                            {notificationCount > 9 ? "9+" : notificationCount}
                          </span>
                        )}
                      </button>

                      {showNotificationMenu && (
                        <div className="absolute top-full right-0 mt-2 w-72 rounded-xl border border-border bg-popover p-2 text-popover-foreground shadow-xl z-50 duration-150 animate-in fade-in-0 zoom-in-95">
                          <div className="px-2.5 py-1.5 border-b border-border/60 font-semibold text-xs text-foreground">
                            Notifications
                          </div>
                          <div className="max-h-64 overflow-y-auto py-1">
                            {notificationItems.length > 0 ? (
                              notificationItems.map((n, i) => (
                                <div
                                  key={n.id || i}
                                  className="px-2.5 py-2 rounded-lg hover:bg-accent transition-colors cursor-pointer text-xs"
                                >
                                  <div className="font-medium text-foreground">{n.title}</div>
                                  <div className="text-muted-foreground text-[11px] mt-0.5">
                                    {n.message}
                                  </div>
                                  <div className="text-muted-foreground/60 text-[10px] mt-1">
                                    {n.time}
                                  </div>
                                </div>
                              ))
                            ) : (
                              <div className="py-6 text-center text-xs text-muted-foreground">
                                No new notifications
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Profile Menu */}
                  {showProfile && (
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setShowProfileMenu(!showProfileMenu)}
                        className="flex items-center gap-2 p-1 pl-1.5 rounded-lg hover:bg-accent transition-colors cursor-pointer"
                      >
                        <div className="w-7 h-7 rounded-full bg-accent text-accent-foreground border border-border/80 flex items-center justify-center font-semibold text-xs overflow-hidden">
                          {profileImage ? (
                            <img src={profileImage} alt={profileName} className="w-full h-full object-cover" />
                          ) : (
                            <User className="w-3.5 h-3.5 text-muted-foreground" />
                          )}
                        </div>
                        <div className="hidden sm:flex flex-col text-left">
                          <span className="text-xs font-medium text-foreground leading-none">
                            {profileName}
                          </span>
                          {profileRole && (
                            <span className="text-[10px] text-muted-foreground leading-tight mt-0.5">
                              {profileRole}
                            </span>
                          )}
                        </div>
                        <ChevronDown className="w-3 h-3 text-muted-foreground hidden sm:block" />
                      </button>

                      {showProfileMenu && (
                        <div className="absolute top-full right-0 mt-2 w-48 rounded-xl border border-border bg-popover p-1 text-popover-foreground shadow-xl z-50 duration-150 animate-in fade-in-0 zoom-in-95">
                          {profileItems.map((item, index) => {
                            const Icon = item.icon
                            return (
                              <button
                                key={index}
                                type="button"
                                onClick={() => {
                                  item.action?.()
                                  setShowProfileMenu(false)
                                }}
                                className={cn(
                                  "w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-left transition-colors cursor-pointer",
                                  item.danger
                                    ? "text-red-500 hover:bg-red-500/10"
                                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                                )}
                              >
                                {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
                                <span>{item.label}</span>
                              </button>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )}

                  {/* CTA Button */}
                  {showCTA && (
                    <button
                      type="button"
                      onClick={ctaAction}
                      className="hidden sm:inline-flex items-center justify-center h-8 px-3 rounded-lg text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-2xs cursor-pointer select-none"
                    >
                      {ctaText}
                    </button>
                  )}

                  {/* Mobile Menu Toggle */}
                  <button
                    type="button"
                    onClick={handleMobileToggle}
                    className={cn(
                      "p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors cursor-pointer",
                      mobileBreakpoint === "md"
                        ? "md:hidden"
                        : mobileBreakpoint === "xl"
                        ? "xl:hidden"
                        : "lg:hidden"
                    )}
                    aria-label="Toggle navigation menu"
                  >
                    {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {isMobileMenuOpen && (
          <div
            className={cn(
              "border-t border-border bg-background px-4 py-4 space-y-3 duration-150 animate-in slide-in-from-top-2",
              mobileBreakpoint === "md"
                ? "md:hidden"
                : mobileBreakpoint === "xl"
                ? "xl:hidden"
                : "lg:hidden"
            )}
          >
            {showSearch && (
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    onSearch(e.target.value)
                  }}
                  className="w-full h-9 pl-8 pr-3 rounded-lg border border-border bg-muted/40 text-xs text-foreground placeholder:text-muted-foreground"
                />
              </div>
            )}

            <div className="space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={item.id || index}
                  type="button"
                  onClick={() => {
                    onItemClick(item, index)
                    setIsMobileMenuOpen(false)
                  }}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors cursor-pointer",
                    item.active
                      ? "bg-accent text-accent-foreground font-semibold"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                >
                  <span className="flex items-center gap-2">
                    {item.icon && <item.icon className="w-4 h-4" />}
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className="px-1.5 py-0.2 text-[10px] font-mono rounded-full bg-muted text-muted-foreground border border-border/50">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {showCTA && (
              <button
                type="button"
                onClick={() => {
                  ctaAction()
                  setIsMobileMenuOpen(false)
                }}
                className="w-full h-9 rounded-lg text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-2xs"
              >
                {ctaText}
              </button>
            )}
          </div>
        )}
      </nav>
    )
  }
)

Navbar.displayName = "Navbar"

// Composable Compound Subcomponents
export const NavbarBrand = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center gap-2 font-semibold text-sm tracking-tight", className)} {...props} />
  )
)
NavbarBrand.displayName = "NavbarBrand"

export const NavbarNav = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("hidden md:flex items-center gap-1", className)} {...props} />
  )
)
NavbarNav.displayName = "NavbarNav"

export const NavbarItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("relative inline-flex items-center", className)} {...props} />
  )
)
NavbarItem.displayName = "NavbarItem"

export const NavbarLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { active?: boolean }
>(({ className, active, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer select-none",
      active
        ? "bg-accent text-accent-foreground font-semibold"
        : "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
      className
    )}
    {...props}
  />
))
NavbarLink.displayName = "NavbarLink"

export const NavbarActions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center gap-2", className)} {...props} />
  )
)
NavbarActions.displayName = "NavbarActions"

// Attach compound subcomponents to Navbar
;(Navbar as any).Brand = NavbarBrand
;(Navbar as any).Nav = NavbarNav
;(Navbar as any).Item = NavbarItem
;(Navbar as any).Link = NavbarLink
;(Navbar as any).Actions = NavbarActions

export default Navbar
export { Navbar }
