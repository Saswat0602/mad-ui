import React, { useState } from 'react'
import { 
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  Layout, 
  Modal, 
  Navbar, 
  Popover, 
  Resizable, 
  ScrollArea, 
  Sheet, 
  Sidebar, 
  Tooltip 
} from 'mad-ui-components'
import { 
  Home, 
  BarChart, 
  Users, 
  FileText, 
  Calendar, 
  Mail, 
  Settings, 
  HelpCircle, 
  LogOut,
  Search,
  Bell,
  User,
  Menu,
  ChevronDown,
  Sun,
  Moon,
  Globe,
  Heart,
  Star,
  ShoppingCart,
  MessageCircle,
  Info,
  Phone,
  Briefcase,
  Image,
  Award,
  Zap,
  Palette
} from 'lucide-react'

export interface ComponentExample {
  title: string
  description?: string
  code: string
  preview: React.ReactNode
}

export const layoutExamples: Record<string, ComponentExample[]> = {
  drawer: [
    {
      title: 'Basic Drawer',
      description: 'A simple drawer component',
      code: `import { 
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription
} from 'mad-ui-components'

export function DrawerExample() {
  const [open, setOpen] = useState(false)
  
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>This is a drawer description.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>Drawer content goes here.</p>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Drawer open={false} onOpenChange={() => {}}>
            <DrawerTrigger asChild>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Open Drawer</button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Drawer Title</DrawerTitle>
                <DrawerDescription>This is a drawer description.</DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <p>Drawer content goes here.</p>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      )
    },
    {
      title: 'Drawer with Footer',
      description: 'A drawer component with header, content, and footer',
      code: `import { 
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose
} from 'mad-ui-components'

export function DrawerWithFooter() {
  const [open, setOpen] = useState(false)
  
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit Profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input 
                type="text" 
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
        </div>
        <DrawerFooter>
          <Button>Save changes</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Drawer open={false} onOpenChange={() => {}}>
            <DrawerTrigger asChild>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Open Drawer</button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Edit Profile</DrawerTitle>
                <DrawerDescription>
                  Make changes to your profile here. Click save when you&apos;re done.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>
              </div>
              <DrawerFooter>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Save changes</button>
                <DrawerClose asChild>
                  <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md">Cancel</button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      )
    }
  ],

  layout: [
    {
      title: 'Basic Layout',
      description: 'A simple layout component',
      code: `import { Layout } from 'mad-ui-components'

export function LayoutExample() {
  return (
    <Layout>
      <div className="p-4">Layout content</div>
    </Layout>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Layout>
            <div className="p-4">Layout content</div>
          </Layout>
        </div>
      )
    }
  ],

  modal: [
    {
      title: 'Basic Modal',
      description: 'A simple modal component',
      code: `import { Modal } from 'mad-ui-components'

export function ModalExample() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className="p-4">Modal content</div>
    </Modal>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Modal isOpen={false} onClose={() => {}}>
            <div className="p-4">Modal content</div>
          </Modal>
        </div>
      )
    }
  ],

  navbar: [
    {
      title: 'Enhanced Navbar',
      description: 'A modern navbar with advanced features',
      code: `import { Navbar } from 'mad-ui-components'
import { Home, Info, Mail, Phone, Briefcase, Image, Award, Zap } from 'lucide-react'

export function EnhancedNavbarExample() {
  const [activeNavItem, setActiveNavItem] = useState('home')
  
  const sampleNavItems = [
    {
      id: 'home',
      label: 'Home',
      icon: Home,
      active: activeNavItem === 'home'
    },
    {
      id: 'about',
      label: 'About',
      icon: Info,
      active: activeNavItem === 'about',
      dropdown: [
        { icon: Award, label: 'Our Story', action: () => console.log('Our Story') },
        { icon: Briefcase, label: 'Careers', action: () => console.log('Careers') },
        { icon: Heart, label: 'Values', action: () => console.log('Values') }
      ]
    },
    {
      id: 'services',
      label: 'Services',
      icon: Briefcase,
      active: activeNavItem === 'services',
      badge: 'New'
    },
    {
      id: 'portfolio',
      label: 'Portfolio',
      icon: Image,
      active: activeNavItem === 'portfolio'
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: Mail,
      active: activeNavItem === 'contact'
    }
  ]

  const sampleNotifications = [
    {
      title: 'New message received',
      message: 'You have a new message from John Doe',
      time: '2 minutes ago',
      unread: true
    },
    {
      title: 'Project updated',
      message: 'Your project has been successfully updated',
      time: '1 hour ago',
      unread: true
    }
  ]

  const handleNavClick = (item) => {
    setActiveNavItem(item.id)
    console.log('Nav clicked:', item.label)
  }

  return (
    <Navbar
      brand="Creative Studio"
      brandLogo={<Zap className="w-full h-full text-purple-600" />}
      navItems={sampleNavItems}
      onItemClick={handleNavClick}
      
      // Enhanced features
      theme="light"
      primaryColor="purple"
      showProfile={true}
      profileName="Alex Johnson"
      profileRole="Designer"
      
      // Search
      showSearch={true}
      
      // Notifications
      showNotifications={true}
      notificationCount={2}
      notificationItems={sampleNotifications}
      
      // Additional features
      showThemeToggle={true}
      showLanguageSwitch={true}
      showCTA={true}
      ctaText="Sign Up Free"
      ctaAction={() => console.log('CTA clicked')}
      
      // Behavior
      shrinkOnScroll={true}
      blur={true}
      shadow="shadow-xl"
      
      customClasses="border-b-2 border-purple-100"
    />
  )
}`,
      preview: (
        <div className="w-full max-w-4xl">
          <Navbar
            brand="Creative Studio"
            brandLogo={<Zap className="w-full h-full text-purple-600" />}
            navItems={[
              {
                id: 'home',
                label: 'Home',
                icon: Home,
                active: true
              },
              {
                id: 'about',
                label: 'About',
                icon: Info,
                active: false,
                dropdown: [
                  { icon: Award, label: 'Our Story', action: () => {} },
                  { icon: Briefcase, label: 'Careers', action: () => {} },
                  { icon: Heart, label: 'Values', action: () => {} }
                ]
              },
              {
                id: 'services',
                label: 'Services',
                icon: Briefcase,
                active: false,
                badge: 'New'
              },
              {
                id: 'portfolio',
                label: 'Portfolio',
                icon: Image,
                active: false
              },
              {
                id: 'contact',
                label: 'Contact',
                icon: Mail,
                active: false
              }
            ]}
            onItemClick={() => {}}
            theme="light"
            primaryColor="purple"
            showProfile={true}
            profileName="Alex Johnson"
            profileRole="Designer"
            showSearch={true}
            showNotifications={true}
            notificationCount={2}
            notificationItems={[
              {
                title: 'New message received',
                message: 'You have a new message from John Doe',
                time: '2 minutes ago',
                unread: true
              },
              {
                title: 'Project updated',
                message: 'Your project has been successfully updated',
                time: '1 hour ago',
                unread: true
              }
            ]}
            showThemeToggle={true}
            showLanguageSwitch={true}
            showCTA={true}
            ctaText="Sign Up Free"
            ctaAction={() => {}}
            shrinkOnScroll={true}
            blur={true}
            shadow="shadow-xl"
            customClasses="border-b-2 border-purple-100"
          />
        </div>
      )
    },
    {
      title: 'Dark Theme Navbar',
      description: 'A navbar with dark theme and glassmorphism',
      code: `import { Navbar } from 'mad-ui-components'
import { Home, BarChart, Users, Settings, Zap } from 'lucide-react'

export function DarkNavbarExample() {
  const navItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: Home,
      active: true
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: BarChart,
      active: false,
      badge: '5'
    },
    {
      id: 'users',
      label: 'Users',
      icon: Users,
      active: false
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      active: false
    }
  ]

  return (
    <Navbar
      brand="Dashboard"
      brandLogo={<Zap className="w-full h-full text-blue-400" />}
      navItems={navItems}
      theme="dark"
      primaryColor="blue"
      showProfile={true}
      profileName="John Doe"
      profileRole="Admin"
      showSearch={true}
      showNotifications={true}
      notificationCount={3}
      blur={true}
      gradient="from-slate-900 to-slate-800"
    />
  )
}`,
      preview: (
        <div className="w-full max-w-4xl bg-slate-900 p-4 rounded-lg">
          <Navbar
            brand="Dashboard"
            brandLogo={<Zap className="w-full h-full text-blue-400" />}
            navItems={[
              {
                id: 'dashboard',
                label: 'Dashboard',
                icon: Home,
                active: true
              },
              {
                id: 'analytics',
                label: 'Analytics',
                icon: BarChart,
                active: false,
                badge: '5'
              },
              {
                id: 'users',
                label: 'Users',
                icon: Users,
                active: false
              },
              {
                id: 'settings',
                label: 'Settings',
                icon: Settings,
                active: false
              }
            ]}
            onItemClick={() => {}}
            theme="dark"
            primaryColor="blue"
            showProfile={true}
            profileName="John Doe"
            profileRole="Admin"
            showSearch={true}
            showNotifications={true}
            notificationCount={3}
            blur={true}
            gradient="from-slate-900 to-slate-800"
          />
        </div>
      )
    },
    {
      title: 'Gradient Navbar',
      description: 'A navbar with colorful gradient theme',
      code: `import { Navbar } from 'mad-ui-components'
import { Heart, Star, ShoppingCart, MessageCircle, Palette } from 'lucide-react'

export function GradientNavbarExample() {
  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: Heart,
      active: true
    },
    {
      id: 'products',
      label: 'Products',
      icon: Star,
      active: false,
      badge: 'Hot'
    },
    {
      id: 'cart',
      label: 'Cart',
      icon: ShoppingCart,
      active: false,
      badge: '3'
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: MessageCircle,
      active: false
    }
  ]

  return (
    <Navbar
      brand="Creative Store"
      brandLogo={<Palette className="w-full h-full text-white" />}
      navItems={navItems}
      theme="colorful"
      primaryColor="pink"
      showProfile={true}
      profileName="Sarah Wilson"
      profileRole="Customer"
      showSearch={true}
      showCTA={true}
      ctaText="Shop Now"
      ctaAction={() => console.log('Shop now clicked')}
    />
  )
}`,
      preview: (
        <div className="w-full max-w-4xl">
          <Navbar
            brand="Creative Store"
            brandLogo={<Palette className="w-full h-full text-white" />}
            navItems={[
              {
                id: 'home',
                label: 'Home',
                icon: Heart,
                active: true
              },
              {
                id: 'products',
                label: 'Products',
                icon: Star,
                active: false,
                badge: 'Hot'
              },
              {
                id: 'cart',
                label: 'Cart',
                icon: ShoppingCart,
                active: false,
                badge: '3'
              },
              {
                id: 'contact',
                label: 'Contact',
                icon: MessageCircle,
                active: false
              }
            ]}
            onItemClick={() => {}}
            theme="colorful"
            primaryColor="pink"
            showProfile={true}
            profileName="Sarah Wilson"
            profileRole="Customer"
            showSearch={true}
            showCTA={true}
            ctaText="Shop Now"
            ctaAction={() => {}}
          />
        </div>
      )
    }
  ],

  popover: [
    {
      title: 'Basic Popover',
      description: 'A simple popover component',
      code: `import { Popover } from 'mad-ui-components'

export function PopoverExample() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Popover 
      isOpen={isOpen} 
      onClose={() => setIsOpen(false)} 
      trigger={<button onClick={() => setIsOpen(true)}>Trigger</button>}
    >
      <div className="p-4">Popover content</div>
    </Popover>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Popover 
            isOpen={false} 
            onClose={() => {}} 
            trigger={<button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Trigger</button>}
          >
            <div className="p-4">Popover content</div>
          </Popover>
        </div>
      )
    }
  ],

  resizable: [
    {
      title: 'Basic Resizable',
      description: 'A simple resizable component',
      code: `import { Resizable } from 'mad-ui-components'

export function ResizableExample() {
  return (
    <Resizable>
      <div className="p-4">Resizable content</div>
    </Resizable>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Resizable>
            <div className="p-4">Resizable content</div>
          </Resizable>
        </div>
      )
    }
  ],

  'scroll-area': [
    {
      title: 'Basic Scroll Area',
      description: 'A simple scroll area component',
      code: `import { ScrollArea } from 'mad-ui-components'

export function ScrollAreaExample() {
  return (
    <ScrollArea className="h-32">
      <div className="p-4">
        <p>This is scrollable content.</p>
        <p>This is scrollable content.</p>
        <p>This is scrollable content.</p>
        <p>This is scrollable content.</p>
        <p>This is scrollable content.</p>
        <p>This is scrollable content.</p>
      </div>
    </ScrollArea>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <ScrollArea className="h-32">
            <div className="p-4">
              <p>This is scrollable content.</p>
              <p>This is scrollable content.</p>
              <p>This is scrollable content.</p>
              <p>This is scrollable content.</p>
              <p>This is scrollable content.</p>
              <p>This is scrollable content.</p>
            </div>
          </ScrollArea>
        </div>
      )
    }
  ],

  sheet: [
    {
      title: 'Basic Sheet',
      description: 'A simple sheet component',
      code: `import { Sheet } from 'mad-ui-components'

export function SheetExample() {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <div className="p-4">Sheet content</div>
    </Sheet>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Sheet open={false} onOpenChange={() => {}}>
            <div className="p-4">Sheet content</div>
          </Sheet>
        </div>
      )
    }
  ],

  sidebar: [
    {
      title: 'Enhanced Sidebar',
      description: 'A modern sidebar with advanced features',
      code: `import { Sidebar } from 'mad-ui-components'
import { Home, BarChart, Users, FileText, Calendar, Mail, Settings, User, Palette } from 'lucide-react'

export function EnhancedSidebarExample() {
  const [activeItem, setActiveItem] = useState('dashboard')

  const sampleSections = [
    {
      title: "Main",
      items: [
        {
          id: 'dashboard',
          label: 'Dashboard',
          icon: Home,
          active: activeItem === 'dashboard',
          shortcut: '⌘D'
        },
        {
          id: 'analytics',
          label: 'Analytics',
          icon: BarChart,
          active: activeItem === 'analytics',
          badge: '5',
          badgeColor: 'bg-green-500 text-white'
        },
        {
          id: 'calendar',
          label: 'Calendar',
          icon: Calendar,
          active: activeItem === 'calendar',
          shortcut: '⌘C'
        }
      ]
    },
    {
      title: "Content",
      items: [
        {
          id: 'documents',
          label: 'Documents',
          icon: FileText,
          active: activeItem === 'documents',
          badge: '12'
        },
        {
          id: 'users',
          label: 'Users',
          icon: Users,
          active: activeItem === 'users'
        },
        {
          id: 'messages',
          label: 'Messages',
          icon: Mail,
          active: activeItem === 'messages',
          badge: '3',
          badgeColor: 'bg-red-500 text-white'
        }
      ]
    },
    {
      title: "Settings",
      items: [
        {
          id: 'profile',
          label: 'Profile',
          icon: User,
          active: activeItem === 'profile'
        },
        {
          id: 'settings',
          label: 'Settings',
          icon: Settings,
          active: activeItem === 'settings',
          shortcut: '⌘S'
        }
      ]
    }
  ]

  const handleItemClick = (item) => {
    setActiveItem(item.id)
    console.log('Clicked:', item.label)
  }

  return (
    <div className="flex h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
      <Sidebar
        title="Creative Studio"
        subtitle="Design Dashboard"
        sections={sampleSections}
        onItemClick={handleItemClick}
        
        // Enhanced styling
        theme="dark"
        primaryColor="purple"
        width="w-80"
        borderRadius="rounded-2xl"
        shadow="shadow-2xl"
        
        // Advanced features
        showAvatar={true}
        userName="John Doe"
        userRole="Creative Director"
        showSearch={true}
        hoverEffect="glow"
        animationType="slide"
        
        // Logo
        logo={<Palette className="w-full h-full text-purple-400" />}
        
        customClasses="m-4 border border-white/10"
      />
    </div>
  )
}`,
      preview: (
        <div className="w-full max-w-4xl">
          <div className="flex h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
            <Sidebar
              title="Creative Studio"
              subtitle="Design Dashboard"
              sections={[
                {
                  title: "Main",
                  items: [
                    {
                      id: 'dashboard',
                      label: 'Dashboard',
                      icon: Home,
                      active: true,
                      shortcut: '⌘D'
                    },
                    {
                      id: 'analytics',
                      label: 'Analytics',
                      icon: BarChart,
                      active: false,
                      badge: '5',
                      badgeColor: 'bg-green-500 text-white'
                    },
                    {
                      id: 'calendar',
                      label: 'Calendar',
                      icon: Calendar,
                      active: false,
                      shortcut: '⌘C'
                    }
                  ]
                },
                {
                  title: "Content",
                  items: [
                    {
                      id: 'documents',
                      label: 'Documents',
                      icon: FileText,
                      active: false,
                      badge: '12'
                    },
                    {
                      id: 'users',
                      label: 'Users',
                      icon: Users,
                      active: false
                    },
                    {
                      id: 'messages',
                      label: 'Messages',
                      icon: Mail,
                      active: false,
                      badge: '3',
                      badgeColor: 'bg-red-500 text-white'
                    }
                  ]
                },
                {
                  title: "Settings",
                  items: [
                    {
                      id: 'profile',
                      label: 'Profile',
                      icon: User,
                      active: false
                    },
                    {
                      id: 'settings',
                      label: 'Settings',
                      icon: Settings,
                      active: false,
                      shortcut: '⌘S'
                    }
                  ]
                }
              ]}
              onItemClick={() => {}}
              theme="dark"
              primaryColor="purple"
              width="w-80"
              borderRadius="rounded-2xl"
              shadow="shadow-2xl"
              showAvatar={true}
              userName="John Doe"
              userRole="Creative Director"
              showSearch={true}
              hoverEffect="glow"
              animationType="slide"
              logo={<Palette className="w-full h-full text-purple-400" />}
              customClasses="m-4 border border-white/10"
            />
          </div>
        </div>
      )
    },
    {
      title: 'Light Theme Sidebar',
      description: 'A sidebar with light theme and clean design',
      code: `import { Sidebar } from 'mad-ui-components'
import { Home, BarChart, Users, Settings, Zap } from 'lucide-react'

export function LightSidebarExample() {
  const items = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: Home,
      active: true
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: BarChart,
      active: false,
      badge: 'New'
    },
    {
      id: 'users',
      label: 'Users',
      icon: Users,
      active: false
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      active: false
    }
  ]

  return (
    <div className="flex h-96 bg-white rounded-lg overflow-hidden border">
      <Sidebar
        title="Dashboard"
        subtitle="Admin Panel"
        items={items}
        theme="light"
        primaryColor="blue"
        width="w-72"
        showAvatar={true}
        userName="Admin User"
        userRole="Administrator"
        showSearch={true}
        logo={<Zap className="w-full h-full text-blue-600" />}
        customClasses="border-r"
      />
    </div>
  )
}`,
      preview: (
        <div className="w-full max-w-4xl">
          <div className="flex h-96 bg-white rounded-lg overflow-hidden border">
            <Sidebar
              title="Dashboard"
              subtitle="Admin Panel"
              items={[
                {
                  id: 'dashboard',
                  label: 'Dashboard',
                  icon: Home,
                  active: true
                },
                {
                  id: 'analytics',
                  label: 'Analytics',
                  icon: BarChart,
                  active: false,
                  badge: 'New'
                },
                {
                  id: 'users',
                  label: 'Users',
                  icon: Users,
                  active: false
                },
                {
                  id: 'settings',
                  label: 'Settings',
                  icon: Settings,
                  active: false
                }
              ]}
              onItemClick={() => {}}
              theme="light"
              primaryColor="blue"
              width="w-72"
              showAvatar={true}
              userName="Admin User"
              userRole="Administrator"
              showSearch={true}
              logo={<Zap className="w-full h-full text-blue-600" />}
              customClasses="border-r"
            />
          </div>
        </div>
      )
    },
    {
      title: 'Collapsible Sidebar',
      description: 'A sidebar that can be collapsed and expanded',
      code: `import { Sidebar } from 'mad-ui-components'
import { Home, BarChart, Users, Settings, Heart } from 'lucide-react'

export function CollapsibleSidebarExample() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  
  const items = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: Home,
      active: true
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: BarChart,
      active: false
    },
    {
      id: 'users',
      label: 'Users',
      icon: Users,
      active: false
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      active: false
    }
  ]

  return (
    <div className="flex h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg overflow-hidden">
      <Sidebar
        title="My App"
        subtitle="Application"
        items={items}
        defaultCollapsed={isCollapsed}
        onToggle={setIsCollapsed}
        theme="gradient"
        primaryColor="purple"
        width="w-80"
        collapsedWidth="w-16"
        showToggleButton={true}
        showAvatar={true}
        userName="User Name"
        userRole="Developer"
        logo={<Heart className="w-full h-full text-pink-500" />}
        customClasses="m-2"
      />
    </div>
  )
}`,
      preview: (
        <div className="w-full max-w-4xl">
          <div className="flex h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg overflow-hidden">
            <Sidebar
              title="My App"
              subtitle="Application"
              items={[
                {
                  id: 'dashboard',
                  label: 'Dashboard',
                  icon: Home,
                  active: true
                },
                {
                  id: 'analytics',
                  label: 'Analytics',
                  icon: BarChart,
                  active: false
                },
                {
                  id: 'users',
                  label: 'Users',
                  icon: Users,
                  active: false
                },
                {
                  id: 'settings',
                  label: 'Settings',
                  icon: Settings,
                  active: false
                }
              ]}
              onItemClick={() => {}}
              defaultCollapsed={false}
              onToggle={() => {}}
              theme="gradient"
              primaryColor="purple"
              width="w-80"
              collapsedWidth="w-16"
              showToggleButton={true}
              showAvatar={true}
              userName="User Name"
              userRole="Developer"
              logo={<Heart className="w-full h-full text-pink-500" />}
              customClasses="m-2"
            />
          </div>
        </div>
      )
    }
  ],

  tooltip: [
    {
      title: 'Basic Tooltip',
      description: 'A simple tooltip component',
      code: `import { Tooltip } from 'mad-ui-components'

export function TooltipExample() {
  return (
    <Tooltip content="This is a tooltip">
      <button>Hover me</button>
    </Tooltip>
  )
}`,
      preview: (
        <div className="w-full max-w-sm">
          <Tooltip content="This is a tooltip">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Hover me</button>
          </Tooltip>
        </div>
      )
    }
  ]
}
