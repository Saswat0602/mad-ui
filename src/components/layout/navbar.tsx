import React, { useState, useEffect } from 'react';
import { 
  Search, Bell, User, Menu, X, ChevronDown, Sun, Moon, Globe, 
  Settings, LogOut, Heart, Star, ShoppingCart, MessageCircle,
  Home, Info, Mail, Phone, Briefcase, Image, Award, Zap
} from 'lucide-react';
import { cn } from '../../lib/utils';

// Enhanced Navbar Component
export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  // Content props
  brand?: string;
  brandLogo?: React.ReactNode;
  navItems?: Array<{
    id: string;
    label: string;
    icon?: React.ComponentType<{ size?: number; className?: string }>;
    active?: boolean;
    badge?: string;
    badgeColor?: string;
    dropdown?: Array<{
      label: string;
      icon?: React.ComponentType<{ size?: number; className?: string }>;
      action?: () => void;
      danger?: boolean;
    }>;
  }>;
  
  // User/Profile props
  showProfile?: boolean;
  profileImage?: string;
  profileName?: string;
  profileRole?: string;
  profileMenuItems?: Array<{
    label: string;
    icon?: React.ComponentType<{ size?: number; className?: string }>;
    action?: () => void;
    danger?: boolean;
  }>;
  
  // Search props
  showSearch?: boolean;
  searchPlaceholder?: string;
  searchWidth?: string;
  onSearch?: (query: string) => void;
  
  // Notification props
  showNotifications?: boolean;
  notificationCount?: number;
  notificationItems?: Array<{
    title: string;
    message: string;
    time: string;
    unread?: boolean;
  }>;
  onNotificationClick?: () => void;
  
  // Theme & Styling
  theme?: "light" | "dark" | "gradient" | "glass" | "colorful";
  position?: "sticky" | "fixed" | "static";
  height?: string;
  backgroundColor?: string;
  textColor?: string;
  primaryColor?: string;
  gradient?: string;
  blur?: boolean;
  shadow?: string;
  borderRadius?: string;
  
  // Layout props
  container?: string;
  padding?: string;
  alignment?: "justify-between" | "justify-center" | "justify-start";
  mobileBreakpoint?: string;
  
  // Behavior props
  showMobileMenu?: boolean;
  onMobileToggle?: (open: boolean) => void;
  hideOnScroll?: boolean;
  shrinkOnScroll?: boolean;
  animationDuration?: string;
  
  // Additional features
  showLanguageSwitch?: boolean;
  showThemeToggle?: boolean;
  showCTA?: boolean;
  ctaText?: string;
  ctaAction?: () => void;
  
  // Advanced customization
  leftContent?: React.ReactNode;
  centerContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  customClasses?: string;
  itemCustomClasses?: string;
  
  // Callbacks
  onItemClick?: (item: any, index: number) => void;
  onBrandClick?: () => void;
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({
    // Content props
    brand = "Brand",
    brandLogo = null,
    navItems = [],
    
    // User/Profile props
    showProfile = true,
    profileImage = "",
    profileName = "User",
    profileRole = "",
    profileMenuItems = [],
    
    // Search props
    showSearch = true,
    searchPlaceholder = "Search...",
    searchWidth = "w-96",
    onSearch = () => {},
    
    // Notification props
    showNotifications = true,
    notificationCount = 0,
    notificationItems = [],
    onNotificationClick = () => {},
    
    // Theme & Styling
    theme = "light",
    position = "sticky",
    height = "h-16",
    backgroundColor = "",
    textColor = "",
    primaryColor = "blue",
    gradient = "from-blue-600 to-purple-600",
    blur = true,
    shadow = "shadow-lg",
    borderRadius = "",
    
    // Layout props
    container = "container mx-auto",
    padding = "px-6",
    alignment = "justify-between",
    mobileBreakpoint = "lg",
    
    // Behavior props
    showMobileMenu = false,
    onMobileToggle = () => {},
    hideOnScroll = false,
    shrinkOnScroll = false,
    animationDuration = "duration-300",
    
    // Additional features
    showLanguageSwitch = false,
    showThemeToggle = false,
    showCTA = false,
    ctaText = "Get Started",
    ctaAction = () => {},
    
    // Advanced customization
    leftContent = null,
    centerContent = null,
    rightContent = null,
    customClasses = "",
    itemCustomClasses = "",
    
    // Callbacks
    onItemClick = () => {},
    onBrandClick = () => {},
    
    className,
    ...props
  }, ref) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [showNotificationMenu, setShowNotificationMenu] = useState(false);
    const [currentTheme, setCurrentTheme] = useState("light");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(showMobileMenu);

    // Handle scroll effects
    useEffect(() => {
      if (hideOnScroll || shrinkOnScroll) {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }
    }, [hideOnScroll, shrinkOnScroll]);

    // Theme configurations
    const themes = {
      light: {
        bg: blur ? "bg-white/80 backdrop-blur-xl" : "bg-white",
        text: "text-gray-900",
        textSecondary: "text-gray-600",
        hover: "hover:text-blue-600 hover:bg-gray-100",
        border: "border-gray-200",
        dropdown: "bg-white border-gray-200 shadow-xl"
      },
      dark: {
        bg: blur ? "bg-gray-900/80 backdrop-blur-xl" : "bg-gray-900",
        text: "text-white",
        textSecondary: "text-gray-300",
        hover: "hover:text-blue-400 hover:bg-gray-800",
        border: "border-gray-700",
        dropdown: "bg-gray-800 border-gray-700 shadow-xl"
      },
      gradient: {
        bg: `bg-gradient-to-r ${gradient} ${blur ? 'backdrop-blur-xl' : ''}`,
        text: "text-white",
        textSecondary: "text-white/80",
        hover: "hover:text-white hover:bg-white/10",
        border: "border-white/20",
        dropdown: "bg-gray-900 border-gray-700 shadow-xl"
      },
      glass: {
        bg: "bg-white/10 backdrop-blur-2xl border-white/20",
        text: "text-white",
        textSecondary: "text-white/70",
        hover: "hover:text-white hover:bg-white/20",
        border: "border-white/30",
        dropdown: "bg-white/10 backdrop-blur-xl border-white/20 shadow-xl"
      },
      colorful: {
        bg: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
        text: "text-white",
        textSecondary: "text-white/90",
        hover: "hover:text-white hover:bg-black/10",
        border: "border-white/30",
        dropdown: "bg-gray-900 border-gray-700 shadow-xl"
      }
    };

    const themeConfig = themes[theme];

    // Dynamic classes based on scroll
    const navbarClasses = cn(
      position === 'fixed' ? 'fixed' : position === 'sticky' ? 'sticky' : 'relative',
      'top-0 left-0 right-0 z-50',
      shrinkOnScroll && isScrolled ? 'h-12' : height,
      themeConfig.bg,
      themeConfig.text,
      shadow,
      borderRadius,
      customClasses,
      `transition-all ${animationDuration}`,
      hideOnScroll && isScrolled ? '-translate-y-full' : 'translate-y-0',
      `border-b ${themeConfig.border}`,
      className
    );

    const handleMobileToggle = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
      onMobileToggle(!isMobileMenuOpen);
    };

    const handleSearch = (value: string) => {
      setSearchQuery(value);
      onSearch(value);
    };

    // Profile menu items default
    const defaultProfileItems = [
      { icon: User, label: "Profile", action: () => console.log("Profile") },
      { icon: Settings, label: "Settings", action: () => console.log("Settings") },
      { icon: LogOut, label: "Sign Out", action: () => console.log("Sign Out"), danger: true }
    ];

    const profileItems = profileMenuItems.length > 0 ? profileMenuItems : defaultProfileItems;

    return (
      <nav ref={ref} className={navbarClasses} {...props}>
        <div className={cn(container, padding, "h-full")}>
          <div className={cn("flex items-center", alignment, "h-full")}>
            
            {/* Left Content */}
            <div className="flex items-center space-x-8">
              {leftContent || (
                <>
                  {/* Brand/Logo */}
                  <button
                    onClick={onBrandClick}
                    className={cn(
                      "flex items-center space-x-3",
                      themeConfig.hover,
                      "rounded-lg px-3 py-2 transition-all",
                      animationDuration,
                      "group"
                    )}
                  >
                    {brandLogo && (
                      <div className={cn(
                        shrinkOnScroll && isScrolled ? 'w-6 h-6' : 'w-8 h-8',
                        "transition-all",
                        animationDuration,
                        "group-hover:scale-110"
                      )}>
                        {brandLogo}
                      </div>
                    )}
                    <span className={cn(
                      "font-bold",
                      shrinkOnScroll && isScrolled ? 'text-lg' : 'text-xl',
                      "transition-all",
                      animationDuration
                    )}>
                      {brand}
                    </span>
                  </button>

                  {/* Desktop Navigation Items */}
                  <div className={cn("hidden", `${mobileBreakpoint}:flex`, "items-center space-x-1")}>
                    {navItems.map((item, index) => {
                      const Icon = item.icon;
                      const hasDropdown = item.dropdown && item.dropdown.length > 0;
                      
                      return (
                        <div key={item.id || index} className="relative group">
                          <button
                            onClick={() => onItemClick(item, index)}
                            className={cn(
                              "flex items-center space-x-2 px-4 py-2 rounded-lg",
                              `transition-all ${animationDuration}`,
                              themeConfig.hover,
                              item.active ? `bg-${primaryColor}-100 text-${primaryColor}-600` : '',
                              itemCustomClasses,
                              "group"
                            )}
                          >
                            {Icon && <Icon size={18} className="group-hover:scale-110 transition-transform" />}
                            <span className="font-medium">{item.label}</span>
                            {hasDropdown && <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />}
                            {item.badge && (
                              <span className={cn(
                                "ml-2 px-2 py-1 text-xs rounded-full",
                                item.badgeColor || `bg-${primaryColor}-500 text-white`,
                                "animate-pulse"
                              )}>
                                {item.badge}
                              </span>
                            )}
                          </button>
                          
                          {/* Dropdown Menu */}
                          {hasDropdown && (
                            <div className={cn(
                              "absolute top-full left-0 mt-2 w-48 rounded-xl",
                              themeConfig.dropdown,
                              `border ${themeConfig.border}`,
                              "opacity-0 invisible group-hover:opacity-100 group-hover:visible",
                              `transition-all ${animationDuration}`,
                              "transform translate-y-2 group-hover:translate-y-0"
                            )}>
                              {item.dropdown?.map((dropItem, dropIndex) => {
                                const DropIcon = dropItem.icon;
                                return (
                                  <button
                                    key={dropIndex}
                                    onClick={() => dropItem.action && dropItem.action()}
                                    className={cn(
                                      "w-full flex items-center space-x-3 px-4 py-3",
                                      themeConfig.hover,
                                      `transition-all ${animationDuration}`,
                                      dropIndex === 0 ? 'rounded-t-xl' : '',
                                      dropIndex === (item.dropdown?.length || 0) - 1 ? 'rounded-b-xl' : '',
                                      dropItem.danger ? 'text-red-500 hover:text-red-400' : ''
                                    )}
                                  >
                                    {DropIcon && <DropIcon size={16} />}
                                    <span>{dropItem.label}</span>
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            {/* Center Content */}
            <div className="flex-1 flex justify-center">
              {centerContent || (
                showSearch && (
                  <div className={cn("hidden md:block", searchWidth, "max-w-lg")}>
                    <div className="relative">
                      <Search size={20} className={cn("absolute left-3 top-1/2 transform -translate-y-1/2", themeConfig.textSecondary)} />
                      <input
                        type="text"
                        placeholder={searchPlaceholder}
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        className={cn(
                          "w-full pl-10 pr-4 py-2 rounded-xl border",
                          themeConfig.border,
                          themeConfig.hover,
                          "bg-transparent placeholder-gray-400",
                          `focus:outline-none focus:ring-2 focus:ring-${primaryColor}-500`,
                          `transition-all ${animationDuration}`,
                          "backdrop-blur-sm"
                        )}
                      />
                      {searchQuery && (
                        <button
                          onClick={() => handleSearch("")}
                          className={cn("absolute right-3 top-1/2 transform -translate-y-1/2", themeConfig.textSecondary, "hover:text-red-500")}
                        >
                          <X size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Right Content */}
            <div className="flex items-center space-x-4">
              {rightContent || (
                <>
                  {/* Theme Toggle */}
                  {showThemeToggle && (
                    <button
                      onClick={() => setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')}
                      className={cn(
                        "p-2 rounded-lg",
                        themeConfig.hover,
                        `transition-all ${animationDuration}`,
                        "group"
                      )}
                      title="Toggle theme"
                    >
                      <div className="group-hover:rotate-180 transition-transform duration-500">
                        {currentTheme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                      </div>
                    </button>
                  )}

                  {/* Language Switch */}
                  {showLanguageSwitch && (
                    <button
                      className={cn(
                        "p-2 rounded-lg",
                        themeConfig.hover,
                        `transition-all ${animationDuration}`,
                        "group"
                      )}
                      title="Language"
                    >
                      <Globe size={20} className="group-hover:scale-110 transition-transform" />
                    </button>
                  )}

                  {/* Notifications */}
                  {showNotifications && (
                    <div className="relative">
                      <button
                        onClick={() => {
                          setShowNotificationMenu(!showNotificationMenu);
                          onNotificationClick();
                        }}
                        className={cn(
                          "relative p-2 rounded-lg",
                          themeConfig.hover,
                          `transition-all ${animationDuration}`,
                          "group"
                        )}
                        title="Notifications"
                      >
                        <Bell size={20} className="group-hover:animate-pulse" />
                        {notificationCount > 0 && (
                          <span className={cn(
                            "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse"
                          )}>
                            {notificationCount > 9 ? '9+' : notificationCount}
                          </span>
                        )}
                      </button>

                      {/* Notifications Dropdown */}
                      {showNotificationMenu && (
                        <div className={cn(
                          "absolute top-full right-0 mt-2 w-80 rounded-xl",
                          themeConfig.dropdown,
                          `border ${themeConfig.border}`,
                          "max-h-96 overflow-y-auto",
                          "animate-in slide-in-from-top-2 duration-200"
                        )}>
                          <div className="p-4 border-b border-gray-200">
                            <h3 className="font-semibold">Notifications</h3>
                          </div>
                          <div className="max-h-64 overflow-y-auto">
                            {notificationItems.length > 0 ? (
                              notificationItems.map((notification, index) => (
                                <div
                                  key={index}
                                  className={cn(
                                    "p-4 border-b border-gray-100 last:border-b-0",
                                    themeConfig.hover,
                                    `transition-all ${animationDuration}`
                                  )}
                                >
                                  <div className="flex items-start space-x-3">
                                    <div className={cn(
                                      "w-2 h-2 rounded-full mt-2",
                                      notification.unread ? 'bg-blue-500' : 'bg-gray-300'
                                    )}></div>
                                    <div className="flex-1">
                                      <p className="font-medium text-sm">{notification.title}</p>
                                      <p className={cn("text-sm", themeConfig.textSecondary, "mt-1")}>{notification.message}</p>
                                      <p className={cn("text-xs", themeConfig.textSecondary, "mt-2")}>{notification.time}</p>
                                    </div>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <div className="p-8 text-center">
                                <Bell size={32} className={cn("mx-auto", themeConfig.textSecondary, "mb-2")} />
                                <p className={themeConfig.textSecondary}>No notifications</p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* CTA Button */}
                  {showCTA && (
                    <button
                      onClick={ctaAction}
                      className={cn(
                        "hidden md:block px-6 py-2",
                        `bg-${primaryColor}-600 hover:bg-${primaryColor}-700`,
                        "text-white rounded-lg font-medium",
                        `transition-all ${animationDuration}`,
                        "transform hover:scale-105 hover:shadow-lg"
                      )}
                    >
                      {ctaText}
                    </button>
                  )}

                  {/* Profile Menu */}
                  {showProfile && (
                    <div className="relative">
                      <button
                        onClick={() => setShowProfileMenu(!showProfileMenu)}
                        className={cn(
                          "flex items-center space-x-3",
                          themeConfig.hover,
                          "rounded-lg px-3 py-2",
                          `transition-all ${animationDuration}`,
                          "group"
                        )}
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                          {profileImage ? (
                            <img src={profileImage} alt="Profile" className="w-full h-full rounded-full object-cover" />
                          ) : (
                            <User size={16} className="text-white" />
                          )}
                        </div>
                        <div className="hidden md:block text-left">
                          <p className="font-medium text-sm">{profileName}</p>
                          {profileRole && (
                            <p className={cn("text-xs", themeConfig.textSecondary)}>{profileRole}</p>
                          )}
                        </div>
                        <ChevronDown size={16} className={cn("hidden md:block group-hover:rotate-180 transition-transform", animationDuration)} />
                      </button>

                      {/* Profile Dropdown */}
                      {showProfileMenu && (
                        <div className={cn(
                          "absolute top-full right-0 mt-2 w-48 rounded-xl",
                          themeConfig.dropdown,
                          `border ${themeConfig.border}`,
                          "animate-in slide-in-from-top-2 duration-200"
                        )}>
                          {profileItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                              <button
                                key={index}
                                onClick={() => {
                                  item.action && item.action();
                                  setShowProfileMenu(false);
                                }}
                                className={cn(
                                  "w-full flex items-center space-x-3 px-4 py-3",
                                  themeConfig.hover,
                                  `transition-all ${animationDuration}`,
                                  index === 0 ? 'rounded-t-xl' : '',
                                  index === profileItems.length - 1 ? 'rounded-b-xl' : '',
                                  item.danger ? 'text-red-500 hover:text-red-400' : ''
                                )}
                              >
                                {Icon && <Icon size={16} />}
                                <span>{item.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Mobile Menu Toggle */}
                  <button
                    onClick={handleMobileToggle}
                    className={cn(
                      `${mobileBreakpoint}:hidden`,
                      "p-2 rounded-lg",
                      themeConfig.hover,
                      `transition-all ${animationDuration}`
                    )}
                    aria-label="Toggle mobile menu"
                  >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          mobileBreakpoint + ":hidden",
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0',
          "overflow-hidden transition-all",
          animationDuration,
          themeConfig.bg,
          `border-t ${themeConfig.border}`
        )}>
          <div className="p-6 space-y-4">
            {/* Mobile Search */}
            {showSearch && (
              <div className="relative">
                <Search size={20} className={cn("absolute left-3 top-1/2 transform -translate-y-1/2", themeConfig.textSecondary)} />
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className={cn(
                    "w-full pl-10 pr-4 py-3 rounded-xl border",
                    themeConfig.border,
                    themeConfig.hover,
                    "bg-transparent placeholder-gray-400",
                    `focus:outline-none focus:ring-2 focus:ring-${primaryColor}-500`,
                    `transition-all ${animationDuration}`
                  )}
                />
              </div>
            )}

            {/* Mobile Navigation Items */}
            <div className="space-y-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id || index}
                    onClick={() => {
                      onItemClick(item, index);
                      setIsMobileMenuOpen(false);
                    }}
                    className={cn(
                      "w-full flex items-center space-x-3 p-3 rounded-lg",
                      themeConfig.hover,
                      `transition-all ${animationDuration}`,
                      item.active ? `bg-${primaryColor}-100 text-${primaryColor}-600` : ''
                    )}
                  >
                    {Icon && <Icon size={20} />}
                    <span className="font-medium">{item.label}</span>
                    {item.badge && (
                      <span className={cn(
                        "ml-auto px-2 py-1 text-xs rounded-full",
                        item.badgeColor || `bg-${primaryColor}-500 text-white`
                      )}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile CTA */}
            {showCTA && (
              <button
                onClick={ctaAction}
                className={cn(
                  "w-full px-6 py-3",
                  `bg-${primaryColor}-600 hover:bg-${primaryColor}-700`,
                  "text-white rounded-lg font-medium",
                  `transition-all ${animationDuration}`
                )}
              >
                {ctaText}
              </button>
            )}
          </div>
        </div>
      </nav>
    );
  }
);

Navbar.displayName = "Navbar";

export { Navbar };
