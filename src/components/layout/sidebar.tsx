import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, ChevronRight, Home, Settings, User, FileText, BarChart, Mail, 
  Search, Bell, Shield, Bookmark, Calendar, Clock, Zap, Heart, Star, 
  Palette, Moon, Sun, Volume2, VolumeX, Wifi, WifiOff 
} from 'lucide-react';
import { cn } from '../../lib/utils';

// Enhanced Sidebar Component
export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // Content props
  title?: string;
  subtitle?: string;
  items?: Array<{
    id?: string;
    label: string;
    icon?: React.ComponentType<{ size?: number; className?: string }>;
    active?: boolean;
    badge?: string | number;
    badgeColor?: string;
    shortcut?: string;
    disabled?: boolean;
    iconSize?: number;
    iconColor?: string;
  }>;
  sections?: Array<{
    title?: string;
    items: Array<{
      id?: string;
      label: string;
      icon?: React.ComponentType<{ size?: number; className?: string }>;
      active?: boolean;
      badge?: string | number;
      badgeColor?: string;
      shortcut?: string;
      disabled?: boolean;
      iconSize?: number;
      iconColor?: string;
    }>;
  }>;
  
  // Logo/Avatar props
  logo?: React.ReactNode;
  logoSize?: string;
  showAvatar?: boolean;
  avatarUrl?: string;
  userName?: string;
  userRole?: string;
  
  // Styling props
  theme?: "dark" | "light" | "gradient" | "glass";
  width?: string;
  collapsedWidth?: string;
  backgroundColor?: string;
  gradient?: string;
  textColor?: string;
  primaryColor?: string;
  borderRadius?: string;
  shadow?: string;
  
  // Spacing & Typography
  padding?: string;
  itemSpacing?: string;
  itemPadding?: string;
  headerSpacing?: string;
  fontSize?: string;
  fontWeight?: string;
  
  // Interactive props
  defaultCollapsed?: boolean;
  showToggleButton?: boolean;
  position?: "left" | "right";
  animationType?: "slide" | "fade" | "scale";
  animationDuration?: string;
  hoverEffect?: "lift" | "glow" | "scale" | "none";
  
  // Advanced features
  showSearch?: boolean;
  showFooter?: boolean;
  footerContent?: React.ReactNode;
  backdrop?: boolean;
  autoCollapse?: boolean;
  persistent?: boolean;
  
  // Callbacks
  onItemClick?: (item: any, index: number, sectionIndex?: number) => void;
  onToggle?: (collapsed: boolean) => void;
  onSearch?: (query: string) => void;
  
  // Custom classes
  customClasses?: string;
  itemCustomClasses?: string;
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({
    // Content props
    title = "Dashboard",
    subtitle = "",
    items = [],
    sections = [],
    
    // Logo/Avatar props
    logo = null,
    logoSize = "w-8 h-8",
    showAvatar = false,
    avatarUrl = "",
    userName = "",
    userRole = "",
    
    // Styling props
    theme = "dark",
    width = "w-72",
    collapsedWidth = "w-20",
    backgroundColor = "",
    gradient = "from-slate-900 via-slate-800 to-slate-900",
    textColor = "",
    primaryColor = "blue",
    borderRadius = "rounded-xl",
    shadow = "shadow-2xl",
    
    // Spacing & Typography
    padding = "p-6",
    itemSpacing = "space-y-1",
    itemPadding = "px-4 py-3",
    headerSpacing = "mb-8",
    fontSize = "text-sm",
    fontWeight = "font-medium",
    
    // Interactive props
    defaultCollapsed = false,
    showToggleButton = true,
    position = "left",
    animationType = "slide",
    animationDuration = "duration-300",
    hoverEffect = "lift",
    
    // Advanced features
    showSearch = false,
    showFooter = true,
    footerContent = null,
    backdrop = false,
    autoCollapse = false,
    persistent = true,
    
    // Callbacks
    onItemClick = () => {},
    onToggle = () => {},
    onSearch = () => {},
    
    // Custom classes
    customClasses = "",
    itemCustomClasses = "",
    
    className,
    ...props
  }, ref) => {
    const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
    const [searchQuery, setSearchQuery] = useState("");
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    // Theme configurations
    const themes = {
      dark: {
        bg: "bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900",
        text: "text-slate-100",
        textSecondary: "text-slate-400",
        hover: "hover:bg-slate-700/50",
        active: `bg-${primaryColor}-600`,
        border: "border-slate-700",
        glass: "backdrop-blur-xl bg-slate-900/80"
      },
      light: {
        bg: "bg-gradient-to-b from-white via-gray-50 to-white",
        text: "text-gray-900",
        textSecondary: "text-gray-500",
        hover: "hover:bg-gray-100",
        active: `bg-${primaryColor}-500 text-white`,
        border: "border-gray-200",
        glass: "backdrop-blur-xl bg-white/80"
      },
      gradient: {
        bg: `bg-gradient-to-br ${gradient}`,
        text: "text-white",
        textSecondary: "text-white/70",
        hover: "hover:bg-white/10",
        active: "bg-white/20",
        border: "border-white/20",
        glass: "backdrop-blur-xl"
      },
      glass: {
        bg: "backdrop-blur-xl bg-white/10 border border-white/20",
        text: "text-white",
        textSecondary: "text-white/70",
        hover: "hover:bg-white/20",
        active: "bg-white/30",
        border: "border-white/30",
        glass: "backdrop-blur-xl"
      }
    };

    const currentTheme = themes[theme];

    // Animation classes
    const animations = {
      slide: `transform transition-all ${animationDuration} ease-in-out`,
      fade: `transition-all ${animationDuration} ease-in-out`,
      scale: `transform transition-all ${animationDuration} ease-in-out ${isCollapsed ? 'scale-95' : 'scale-100'}`
    };

    // Hover effects
    const hoverEffects = {
      lift: "hover:translate-y-[-2px] hover:shadow-lg transition-all duration-200",
      glow: `hover:shadow-lg hover:shadow-${primaryColor}-500/25 transition-all duration-200`,
      scale: "hover:scale-105 transition-transform duration-200",
      none: ""
    };

    const handleToggle = () => {
      setIsCollapsed(!isCollapsed);
      onToggle(!isCollapsed);
    };

    const handleItemClick = (item: any, index: number, sectionIndex?: number) => {
      onItemClick(item, index, sectionIndex);
    };

    const filteredItems = items.filter(item =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sidebarClasses = cn(
      isCollapsed ? collapsedWidth : width,
      currentTheme.bg,
      currentTheme.text,
      padding,
      animations[animationType],
      shadow,
      borderRadius,
      customClasses,
      "h-full",
      "flex",
      "flex-col",
      "relative",
      "overflow-hidden",
      position === 'right' ? 'ml-auto' : '',
      className
    );

    const renderItems = (itemsToRender: any[], sectionIndex?: number) => {
      return itemsToRender.map((item, index) => {
        const Icon = item.icon;
        const isActive = item.active;
        const isHovered = hoveredItem === `${sectionIndex}-${index}`;
        
        return (
          <li key={item.id || `${sectionIndex}-${index}`}>
            <button
              onClick={() => handleItemClick(item, index, sectionIndex)}
              onMouseEnter={() => setHoveredItem(`${sectionIndex}-${index}`)}
              onMouseLeave={() => setHoveredItem(null)}
              className={cn(
                "w-full",
                "flex",
                "items-center",
                itemPadding,
                borderRadius === 'rounded-xl' ? 'rounded-lg' : 'rounded-md',
                "transition-all",
                animationDuration,
                isActive ? currentTheme.active : currentTheme.hover,
                isCollapsed ? 'justify-center' : 'justify-start',
                hoverEffects[hoverEffect],
                fontWeight,
                fontSize,
                "group",
                "relative",
                item.disabled ? 'opacity-50 cursor-not-allowed' : '',
                itemCustomClasses
              )}
              title={isCollapsed ? item.label : ''}
              disabled={item.disabled}
            >
              {/* Icon with animation */}
              {Icon && (
                <div className={cn(
                  isCollapsed ? '' : 'mr-4', 
                  "flex-shrink-0", 
                  "transition-transform", 
                  animationDuration,
                  isHovered ? 'scale-110' : ''
                )}>
                  <Icon 
                    size={item.iconSize || 20} 
                    className={item.iconColor || ''}
                  />
                </div>
              )}
              
              {!isCollapsed && (
                <div className="flex-1 flex items-center justify-between min-w-0">
                  <span className="truncate">{item.label}</span>
                  <div className="flex items-center space-x-2 ml-2">
                    {item.badge && (
                      <span className={cn(
                        "px-2 py-1 text-xs rounded-full", 
                        item.badgeColor || `bg-${primaryColor}-500 text-white`,
                        "animate-pulse"
                      )}>
                        {item.badge}
                      </span>
                    )}
                    {item.shortcut && (
                      <span className={cn("text-xs", currentTheme.textSecondary, "font-mono")}>
                        {item.shortcut}
                      </span>
                    )}
                  </div>
                </div>
              )}
              
              {/* Enhanced tooltip for collapsed state */}
              {isCollapsed && (
                <div className={cn(
                  "absolute",
                  position === 'right' ? 'right-full mr-3' : 'left-full ml-3',
                  "top-1/2",
                  "transform",
                  "-translate-y-1/2",
                  "bg-gray-900",
                  "text-white",
                  "px-3",
                  "py-2",
                  "rounded-lg",
                  "text-sm",
                  "whitespace-nowrap",
                  "opacity-0",
                  "group-hover:opacity-100",
                  "transition-all",
                  animationDuration,
                  "pointer-events-none",
                  "z-50",
                  "shadow-lg",
                  "backdrop-blur-sm"
                )}>
                  <div className="flex items-center space-x-2">
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-1 py-0.5 text-xs rounded bg-red-500">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  {/* Tooltip arrow */}
                  <div className={cn(
                    "absolute top-1/2 transform -translate-y-1/2",
                    position === 'right' ? 'left-0 translate-x-[-4px]' : 'right-0 translate-x-[4px]',
                    "w-2 h-2 bg-gray-900 rotate-45"
                  )}></div>
                </div>
              )}
            </button>
          </li>
        );
      });
    };

    return (
      <div ref={ref} className={sidebarClasses} {...props}>
        {/* Header Section */}
        <div className={headerSpacing}>
          <div className="flex items-center justify-between mb-4">
            <div className={cn("flex items-center", isCollapsed ? 'justify-center w-full' : '')}>
              {logo && (
                <div className={cn(logoSize, isCollapsed ? '' : 'mr-3', "flex-shrink-0")}>
                  {logo}
                </div>
              )}
              {!isCollapsed && (
                <div>
                  <h2 className="text-xl font-bold truncate">{title}</h2>
                  {subtitle && (
                    <p className={cn("text-xs", currentTheme.textSecondary, "truncate")}>
                      {subtitle}
                    </p>
                  )}
                </div>
              )}
            </div>
            
            {showToggleButton && (
              <button
                onClick={handleToggle}
                className={cn(
                  "p-2 rounded-lg transition-all",
                  animationDuration,
                  currentTheme.hover,
                  "group",
                  isCollapsed ? 'mx-auto' : ''
                )}
                aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {isCollapsed ? (
                    position === 'right' ? <ChevronLeft size={18} /> : <ChevronRight size={18} />
                  ) : (
                    position === 'right' ? <ChevronRight size={18} /> : <ChevronLeft size={18} />
                  )}
                </div>
              </button>
            )}
          </div>

          {/* User Avatar Section */}
          {showAvatar && !isCollapsed && (
            <div className={cn("flex items-center space-x-3 p-3 rounded-lg", currentTheme.hover, "mb-4")}>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                {avatarUrl ? (
                  <img src={avatarUrl} alt="User" className="w-full h-full rounded-full object-cover" />
                ) : (
                  <User size={18} className="text-white" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{userName || "User Name"}</p>
                <p className={cn("text-xs", currentTheme.textSecondary, "truncate")}>
                  {userRole || "Role"}
                </p>
              </div>
            </div>
          )}

          {/* Search Bar */}
          {showSearch && !isCollapsed && (
            <div className="relative mb-4">
              <Search size={16} className={cn("absolute left-3 top-1/2 transform -translate-y-1/2", currentTheme.textSecondary)} />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  onSearch(e.target.value);
                }}
                className={cn(
                  "w-full pl-10 pr-4 py-2 rounded-lg border",
                  currentTheme.border,
                  currentTheme.hover,
                  "bg-transparent placeholder-gray-400",
                  `focus:outline-none focus:ring-2 focus:ring-${primaryColor}-500`,
                  `transition-all ${animationDuration}`
                )}
              />
            </div>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto custom-scrollbar">
          {sections.length > 0 ? (
            // Render sections
            <div className="space-y-6">
              {sections.map((section, sectionIndex) => (
                <div key={section.title || sectionIndex}>
                  {!isCollapsed && section.title && (
                    <h3 className={cn("text-xs font-semibold", currentTheme.textSecondary, "uppercase tracking-wider mb-2 px-2")}>
                      {section.title}
                    </h3>
                  )}
                  <ul className={itemSpacing}>
                    {renderItems(section.items, sectionIndex)}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            // Render regular items
            <ul className={itemSpacing}>
              {renderItems(showSearch ? filteredItems : items)}
            </ul>
          )}
        </nav>
        
        {/* Footer Section */}
        {showFooter && (
          <div className="mt-auto pt-4">
            {footerContent ? (
              footerContent
            ) : (
              !isCollapsed && (
                <div className={cn("text-xs", currentTheme.textSecondary, "text-center p-3 rounded-lg", currentTheme.hover)}>
                  <div className="flex items-center justify-center space-x-2">
                    <Heart size={12} className="text-red-400" />
                    <span>Made with love</span>
                  </div>
                </div>
              )
            )}
          </div>
        )}

        {/* Backdrop overlay for mobile */}
        {backdrop && !isCollapsed && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[-1] lg:hidden"
            onClick={handleToggle}
          />
        )}
      </div>
    );
  }
);

Sidebar.displayName = "Sidebar";

export { Sidebar };
