export interface ComponentMeta {
  name: string
  title: string
  category: 'core' | 'forms' | 'layout' | 'overlay' | 'navigation' | 'data' | 'media' | 'feedback'
  status: 'stable' | 'beta' | 'deprecated'
  subpath: string
  sourceFile: string
  exports: string[]
  description: string
}

export const componentManifest: ComponentMeta[] = [
  // Core
  {
    name: 'button',
    title: 'Button',
    category: 'core',
    status: 'stable',
    subpath: './button',
    sourceFile: 'src/components/core/button.tsx',
    exports: ['Button', 'ButtonProps', 'buttonVariants'],
    description: 'Interactive button with multiple semantic variants, sizes, and states.'
  },
  {
    name: 'card',
    title: 'Card',
    category: 'core',
    status: 'stable',
    subpath: './card',
    sourceFile: 'src/components/core/card.tsx',
    exports: ['Card', 'CardHeader', 'CardTitle', 'CardDescription', 'CardContent', 'CardFooter', 'CardProps'],
    description: 'Structured container for grouping related content and actions.'
  },
  {
    name: 'input',
    title: 'Input',
    category: 'core',
    status: 'stable',
    subpath: './input',
    sourceFile: 'src/components/core/input.tsx',
    exports: ['Input', 'InputProps'],
    description: 'Single-line text input field supporting validation and icon adornments.'
  },
  {
    name: 'label',
    title: 'Label',
    category: 'core',
    status: 'stable',
    subpath: './label',
    sourceFile: 'src/components/core/label.tsx',
    exports: ['Label', 'LabelProps'],
    description: 'Accessible label component associated with form controls.'
  },
  {
    name: 'checkbox',
    title: 'Checkbox',
    category: 'core',
    status: 'stable',
    subpath: './checkbox',
    sourceFile: 'src/components/core/checkbox.tsx',
    exports: ['Checkbox', 'CheckboxProps'],
    description: 'Two-state or indeterminate control allowing users to toggle options.'
  },
  {
    name: 'radio',
    title: 'Radio',
    category: 'core',
    status: 'stable',
    subpath: './radio',
    sourceFile: 'src/components/core/radio.tsx',
    exports: ['Radio', 'RadioProps'],
    description: 'Individual radio button item for single-selection groups.'
  },
  {
    name: 'select',
    title: 'Select',
    category: 'core',
    status: 'stable',
    subpath: './select',
    sourceFile: 'src/components/core/select.tsx',
    exports: ['Select', 'SelectTrigger', 'SelectContent', 'SelectItem', 'SelectValue', 'SelectProps'],
    description: 'Dropdown select component for choosing from a list of options.'
  },
  {
    name: 'switch',
    title: 'Switch',
    category: 'core',
    status: 'stable',
    subpath: './switch',
    sourceFile: 'src/components/core/switch.tsx',
    exports: ['Switch', 'SwitchProps'],
    description: 'Toggle switch control for binary settings.'
  },
  {
    name: 'progress',
    title: 'Progress',
    category: 'core',
    status: 'stable',
    subpath: './progress',
    sourceFile: 'src/components/core/progress.tsx',
    exports: ['Progress', 'ProgressProps'],
    description: 'Visual indicator of task completion or ongoing progress.'
  },
  {
    name: 'slider',
    title: 'Slider',
    category: 'core',
    status: 'stable',
    subpath: './slider',
    sourceFile: 'src/components/core/slider.tsx',
    exports: ['Slider', 'SliderProps'],
    description: 'Draggable range slider for numeric value selection.'
  },
  {
    name: 'rating',
    title: 'Rating',
    category: 'core',
    status: 'beta',
    subpath: './rating',
    sourceFile: 'src/components/core/rating.tsx',
    exports: ['Rating', 'RatingProps'],
    description: 'Star-based rating input and display component.'
  },
  {
    name: 'skeleton',
    title: 'Skeleton',
    category: 'core',
    status: 'stable',
    subpath: './skeleton',
    sourceFile: 'src/components/core/skeleton.tsx',
    exports: ['Skeleton', 'SkeletonProps'],
    description: 'Animated placeholder preview while asynchronous content loads.'
  },
  {
    name: 'textarea',
    title: 'Textarea',
    category: 'core',
    status: 'stable',
    subpath: './textarea',
    sourceFile: 'src/components/core/textarea.tsx',
    exports: ['Textarea', 'TextareaProps'],
    description: 'Multi-line text input with auto-resize and validation.'
  },
  {
    name: 'button-group',
    title: 'Button Group',
    category: 'core',
    status: 'stable',
    subpath: './button-group',
    sourceFile: 'src/components/core/button-group.tsx',
    exports: ['ButtonGroup', 'ButtonGroupProps'],
    description: 'Container for grouping adjacent buttons with seamless border merging.'
  },
  {
    name: 'input-group',
    title: 'Input Group',
    category: 'core',
    status: 'stable',
    subpath: './input-group',
    sourceFile: 'src/components/core/input-group.tsx',
    exports: ['InputGroup', 'InputGroupAddon', 'InputGroupProps', 'InputGroupAddonProps'],
    description: 'Composite input wrapper with text addons and prefix/suffix action slots.'
  },

  // Forms
  {
    name: 'accordion',
    title: 'Accordion',
    category: 'forms',
    status: 'stable',
    subpath: './accordion',
    sourceFile: 'src/components/forms/accordion.tsx',
    exports: ['Accordion', 'AccordionProps', 'AccordionItem'],
    description: 'Vertically stacked interactive disclosures with collapsible sections.'
  },
  {
    name: 'breadcrumbs',
    title: 'Breadcrumbs',
    category: 'forms',
    status: 'stable',
    subpath: './breadcrumbs',
    sourceFile: 'src/components/forms/breadcrumbs.tsx',
    exports: ['Breadcrumbs', 'BreadcrumbsProps', 'BreadcrumbItem'],
    description: 'Hierarchical navigation trail indicating current page location.'
  },
  {
    name: 'calendar',
    title: 'Calendar',
    category: 'forms',
    status: 'stable',
    subpath: './calendar',
    sourceFile: 'src/components/forms/calendar.tsx',
    exports: ['Calendar', 'CalendarProps'],
    description: 'Interactive month-view calendar with single and range date selection.'
  },
  {
    name: 'datetime-picker',
    title: 'DateTime Picker',
    category: 'forms',
    status: 'stable',
    subpath: './datetime-picker',
    sourceFile: 'src/components/forms/datetime-picker.tsx',
    exports: ['DateTimePicker', 'DateTimePickerProps'],
    description: 'Combined date and time picker input with dropdown selection.'
  },
  {
    name: 'input-otp',
    title: 'Input OTP',
    category: 'forms',
    status: 'beta',
    subpath: './input-otp',
    sourceFile: 'src/components/forms/input-otp.tsx',
    exports: ['InputOTP', 'InputOTPGroup', 'InputOTPSlot', 'InputOTPProps'],
    description: 'Segmented one-time password input with automatic focus shifting.'
  },
  {
    name: 'radio-group',
    title: 'Radio Group',
    category: 'forms',
    status: 'stable',
    subpath: './radio-group',
    sourceFile: 'src/components/forms/radio-group.tsx',
    exports: ['RadioGroup', 'RadioGroupItem', 'RadioGroupProps'],
    description: 'A set of checkable buttons where only one may be checked at a time.'
  },
  {
    name: 'form',
    title: 'Form',
    category: 'forms',
    status: 'stable',
    subpath: './form',
    sourceFile: 'src/components/forms/react-hook-form.tsx',
    exports: ['Form', 'FormField', 'FormItem', 'FormLabel', 'FormControl', 'FormDescription', 'FormMessage', 'useFormField'],
    description: 'Form integration wrappers with validation feedback.'
  },
  {
    name: 'tabs',
    title: 'Tabs',
    category: 'forms',
    status: 'stable',
    subpath: './tabs',
    sourceFile: 'src/components/forms/tabs.tsx',
    exports: ['Tabs', 'TabsProps', 'TabItem'],
    description: 'Layered panels of content displaying one view at a time.'
  },
  {
    name: 'password-input',
    title: 'Password Input',
    category: 'forms',
    status: 'stable',
    subpath: './password-input',
    sourceFile: 'src/components/forms/password-input.tsx',
    exports: ['PasswordInput', 'PasswordInputProps'],
    description: 'Password input with integrated reveal toggle, strength meter, and caps-lock detection.'
  },
  {
    name: 'number-input',
    title: 'Number Input',
    category: 'forms',
    status: 'stable',
    subpath: './number-input',
    sourceFile: 'src/components/forms/number-input.tsx',
    exports: ['NumberInput', 'NumberInputProps'],
    description: 'Numeric stepper input with increment buttons, clamp bounds, and arrow key support.'
  },

  // Layout
  {
    name: 'drawer',
    title: 'Drawer',
    category: 'layout',
    status: 'stable',
    subpath: './drawer',
    sourceFile: 'src/components/layout/drawer.tsx',
    exports: ['Drawer', 'DrawerProps'],
    description: 'Off-canvas sliding overlay from any viewport edge.'
  },
  {
    name: 'layout-shell',
    title: 'Layout',
    category: 'layout',
    status: 'stable',
    subpath: './layout-shell',
    sourceFile: 'src/components/layout/layout.tsx',
    exports: ['Layout', 'LayoutProps'],
    description: 'Responsive shell layout with header, sidebar, and container.'
  },
  {
    name: 'modal',
    title: 'Modal',
    category: 'layout',
    status: 'stable',
    subpath: './modal',
    sourceFile: 'src/components/layout/modal.tsx',
    exports: ['Modal', 'ModalProps'],
    description: 'Centered dialog window overlaid above primary page content.'
  },
  {
    name: 'navbar',
    title: 'Navbar',
    category: 'layout',
    status: 'stable',
    subpath: './navbar',
    sourceFile: 'src/components/layout/navbar.tsx',
    exports: ['Navbar', 'NavbarProps'],
    description: 'Top header navigation bar with profile menu and mobile collapse.'
  },
  {
    name: 'popover',
    title: 'Popover',
    category: 'layout',
    status: 'stable',
    subpath: './popover',
    sourceFile: 'src/components/layout/popover.tsx',
    exports: ['Popover', 'PopoverTrigger', 'PopoverContent', 'PopoverProps'],
    description: 'Floating contextual container anchored to a trigger element.'
  },
  {
    name: 'resizable',
    title: 'Resizable',
    category: 'layout',
    status: 'stable',
    subpath: './resizable',
    sourceFile: 'src/components/layout/resizable.tsx',
    exports: ['Resizable', 'ResizableProps'],
    description: 'Draggable dividing panels for split-pane interfaces.'
  },
  {
    name: 'scroll-area',
    title: 'Scroll Area',
    category: 'layout',
    status: 'stable',
    subpath: './scroll-area',
    sourceFile: 'src/components/layout/scroll-area.tsx',
    exports: ['ScrollArea', 'ScrollAreaProps'],
    description: 'Cross-browser custom scrollable container with styled scrollbars.'
  },
  {
    name: 'sheet',
    title: 'Sheet',
    category: 'layout',
    status: 'stable',
    subpath: './sheet',
    sourceFile: 'src/components/layout/sheet.tsx',
    exports: ['Sheet', 'SheetTrigger', 'SheetContent', 'SheetHeader', 'SheetFooter', 'SheetTitle', 'SheetDescription', 'SheetProps'],
    description: 'Side sheet modal overlay for detailed workflows and filters.'
  },
  {
    name: 'sidebar',
    title: 'Sidebar',
    category: 'layout',
    status: 'stable',
    subpath: './sidebar',
    sourceFile: 'src/components/layout/sidebar.tsx',
    exports: ['Sidebar', 'SidebarProps'],
    description: 'Persistent or collapsible lateral navigation menu.'
  },
  {
    name: 'tooltip',
    title: 'Tooltip',
    category: 'layout',
    status: 'stable',
    subpath: './tooltip',
    sourceFile: 'src/components/layout/tooltip.tsx',
    exports: ['Tooltip', 'TooltipTrigger', 'TooltipContent', 'TooltipProvider', 'TooltipProps'],
    description: 'Floating popup that provides contextual help on hover and focus.'
  },

  // Overlay
  {
    name: 'dialog',
    title: 'Dialog',
    category: 'overlay',
    status: 'stable',
    subpath: './dialog',
    sourceFile: 'src/components/overlay/dialog.tsx',
    exports: ['Dialog', 'DialogTrigger', 'DialogContent', 'DialogHeader', 'DialogFooter', 'DialogTitle', 'DialogDescription', 'DialogClose', 'useDialog', 'DialogProps'],
    description: 'Modal dialog overlay that demands user interaction.'
  },
  {
    name: 'alert-dialog',
    title: 'Alert Dialog',
    category: 'overlay',
    status: 'stable',
    subpath: './alert-dialog',
    sourceFile: 'src/components/overlay/alert-dialog.tsx',
    exports: ['AlertDialog', 'AlertDialogTrigger', 'AlertDialogContent', 'AlertDialogHeader', 'AlertDialogFooter', 'AlertDialogTitle', 'AlertDialogDescription', 'AlertDialogAction', 'AlertDialogCancel', 'useAlertDialog', 'AlertDialogProps'],
    description: 'Confirmation modal window for destructive and critical user actions.'
  },
  {
    name: 'dropdown-menu',
    title: 'Dropdown Menu',
    category: 'overlay',
    status: 'stable',
    subpath: './dropdown-menu',
    sourceFile: 'src/components/overlay/dropdown-menu.tsx',
    exports: ['DropdownMenu', 'DropdownMenuTrigger', 'DropdownMenuContent', 'DropdownMenuItem', 'DropdownMenuLabel', 'DropdownMenuSeparator', 'DropdownMenuGroup', 'DropdownMenuCheckboxItem', 'DropdownMenuProps'],
    description: 'Contextual action menu triggered by a click or hover.'
  },
  {
    name: 'context-menu',
    title: 'Context Menu',
    category: 'overlay',
    status: 'stable',
    subpath: './context-menu',
    sourceFile: 'src/components/overlay/context-menu.tsx',
    exports: ['ContextMenu', 'ContextMenuTrigger', 'ContextMenuContent', 'ContextMenuItem', 'ContextMenuProps'],
    description: 'Menu displayed upon right-clicking a designated trigger area.'
  },
  {
    name: 'hover-card',
    title: 'Hover Card',
    category: 'overlay',
    status: 'stable',
    subpath: './hover-card',
    sourceFile: 'src/components/overlay/hover-card.tsx',
    exports: ['HoverCard', 'HoverCardTrigger', 'HoverCardContent', 'HoverCardProps'],
    description: 'Rich preview content displayed when hovering over an anchor.'
  },
  {
    name: 'collapsible',
    title: 'Collapsible',
    category: 'overlay',
    status: 'stable',
    subpath: './collapsible',
    sourceFile: 'src/components/overlay/collapsible.tsx',
    exports: ['Collapsible', 'CollapsibleTrigger', 'CollapsibleContent', 'CollapsibleProps'],
    description: 'Single-element disclosure toggle for expanding content.'
  },
  {
    name: 'separator',
    title: 'Separator',
    category: 'overlay',
    status: 'stable',
    subpath: './separator',
    sourceFile: 'src/components/overlay/separator.tsx',
    exports: ['Separator', 'SeparatorProps'],
    description: 'Horizontal or vertical line visually separating sections.'
  },
  {
    name: 'toggle',
    title: 'Toggle',
    category: 'overlay',
    status: 'stable',
    subpath: './toggle',
    sourceFile: 'src/components/overlay/toggle.tsx',
    exports: ['Toggle', 'ToggleProps'],
    description: 'Two-state button that can be either active or inactive.'
  },

  // Navigation
  {
    name: 'combobox',
    title: 'Combobox',
    category: 'navigation',
    status: 'stable',
    subpath: './combobox',
    sourceFile: 'src/components/navigation/combobox.tsx',
    exports: ['Combobox', 'ComboboxProps'],
    description: 'Searchable autocomplete dropdown for large option sets.'
  },
  {
    name: 'command',
    title: 'Command',
    category: 'navigation',
    status: 'stable',
    subpath: './command',
    sourceFile: 'src/components/navigation/command.tsx',
    exports: ['Command', 'CommandInput', 'CommandList', 'CommandEmpty', 'CommandGroup', 'CommandItem', 'CommandShortcut', 'CommandSeparator', 'CommandDialog', 'CommandProps'],
    description: 'Fast, composable command palette with keyboard navigation.'
  },
  {
    name: 'menubar',
    title: 'Menubar',
    category: 'navigation',
    status: 'stable',
    subpath: './menubar',
    sourceFile: 'src/components/navigation/menubar.tsx',
    exports: ['Menubar', 'MenubarMenu', 'MenubarTrigger', 'MenubarContent', 'MenubarItem', 'MenubarSeparator', 'MenubarProps'],
    description: 'Desktop-application style horizontal top menu bar.'
  },
  {
    name: 'navigation-menu',
    title: 'Navigation Menu',
    category: 'navigation',
    status: 'stable',
    subpath: './navigation-menu',
    sourceFile: 'src/components/navigation/navigation-menu.tsx',
    exports: ['NavigationMenu', 'NavigationMenuList', 'NavigationMenuItem', 'NavigationMenuContent', 'NavigationMenuTrigger', 'NavigationMenuLink', 'NavigationMenuProps'],
    description: 'Mega-menu collection of links for primary site navigation.'
  },
  {
    name: 'pagination',
    title: 'Pagination',
    category: 'navigation',
    status: 'stable',
    subpath: './pagination',
    sourceFile: 'src/components/navigation/pagination.tsx',
    exports: ['Pagination', 'PaginationProps'],
    description: 'Navigation control across segmented pages of data.'
  },

  // Data
  {
    name: 'table',
    title: 'Table',
    category: 'data',
    status: 'stable',
    subpath: './table',
    sourceFile: 'src/components/data/table.tsx',
    exports: ['Table', 'TableHeader', 'TableBody', 'TableFooter', 'TableHead', 'TableRow', 'TableCell', 'TableCaption', 'TableProps'],
    description: 'HTML table primitives for clean structured data presentation.'
  },
  {
    name: 'data-table',
    title: 'Data Table',
    category: 'data',
    status: 'stable',
    subpath: './data-table',
    sourceFile: 'src/components/data/data-table.tsx',
    exports: ['DataTable', 'DataTableProps'],
    description: 'Table with column sorting, filtering, selection, and pagination.'
  },
  {
    name: 'chart',
    title: 'Chart',
    category: 'data',
    status: 'beta',
    subpath: './chart',
    sourceFile: 'src/components/data/chart.tsx',
    exports: ['Chart', 'ChartProps'],
    description: 'SVG charts supporting bar and line visualizations.'
  },

  // Feedback
  {
    name: 'alert',
    title: 'Alert',
    category: 'feedback',
    status: 'stable',
    subpath: './alert',
    sourceFile: 'src/components/feedback/alert.tsx',
    exports: ['Alert', 'AlertTitle', 'AlertDescription', 'AlertProps'],
    description: 'In-page banner conveying important status messages.'
  },
  {
    name: 'toast',
    title: 'Toast',
    category: 'feedback',
    status: 'stable',
    subpath: './toast',
    sourceFile: 'src/components/feedback/toast.tsx',
    exports: ['Toast', 'ToastProvider', 'useToast', 'ToastProps'],
    description: 'Temporary floating notifications with auto-dismiss timers.'
  },
  {
    name: 'sonner',
    title: 'Sonner',
    category: 'feedback',
    status: 'stable',
    subpath: './sonner',
    sourceFile: 'src/components/feedback/sonner.tsx',
    exports: ['Toaster', 'toast', 'SonnerProps'],
    description: 'Opinionated stacked toast manager with swipe dismiss gestures.'
  },
  {
    name: 'spinner',
    title: 'Spinner',
    category: 'feedback',
    status: 'stable',
    subpath: './spinner',
    sourceFile: 'src/components/feedback/spinner.tsx',
    exports: ['Spinner', 'SpinnerProps'],
    description: 'Accessible animated indeterminate loading indicator with screen reader support.'
  },
  {
    name: 'empty-state',
    title: 'Empty State',
    category: 'feedback',
    status: 'stable',
    subpath: './empty-state',
    sourceFile: 'src/components/feedback/empty-state.tsx',
    exports: ['EmptyState', 'EmptyStateIcon', 'EmptyStateTitle', 'EmptyStateDescription', 'EmptyStateActions', 'EmptyStateProps'],
    description: 'Clean zero-data graphic container for empty lists, search results, and tables.'
  },

  // Media
  {
    name: 'avatar',
    title: 'Avatar',
    category: 'media',
    status: 'stable',
    subpath: './avatar',
    sourceFile: 'src/components/media/avatar.tsx',
    exports: ['Avatar', 'AvatarProps'],
    description: 'User avatar displaying image with fallback to initials.'
  },
  {
    name: 'badge',
    title: 'Badge',
    category: 'media',
    status: 'stable',
    subpath: './badge',
    sourceFile: 'src/components/media/badge.tsx',
    exports: ['Badge', 'BadgeProps'],
    description: 'Small status indicator and categorical pill.'
  },
  {
    name: 'aspect-ratio',
    title: 'Aspect Ratio',
    category: 'media',
    status: 'stable',
    subpath: './aspect-ratio',
    sourceFile: 'src/components/media/aspect-ratio.tsx',
    exports: ['AspectRatio', 'AspectRatioProps'],
    description: 'Container ensuring desired width-to-height ratio for embeds.'
  },
  {
    name: 'carousel',
    title: 'Carousel',
    category: 'media',
    status: 'stable',
    subpath: './carousel',
    sourceFile: 'src/components/media/carousel.tsx',
    exports: ['Carousel', 'CarouselContent', 'CarouselItem', 'CarouselPrevious', 'CarouselNext', 'CarouselProps'],
    description: 'Interactive slide carousel with keyboard and touch support.'
  },
  {
    name: 'typography',
    title: 'Typography',
    category: 'media',
    status: 'stable',
    subpath: './typography',
    sourceFile: 'src/components/media/typography.tsx',
    exports: ['TypographyH1', 'TypographyH2', 'TypographyH3', 'TypographyH4', 'TypographyP', 'TypographyBlockquote', 'TypographyCode', 'TypographyLead', 'TypographyProps'],
    description: 'Semantic text elements styled with consistent typography scale.'
  },
  {
    name: 'kbd',
    title: 'Kbd',
    category: 'media',
    status: 'stable',
    subpath: './kbd',
    sourceFile: 'src/components/media/kbd.tsx',
    exports: ['Kbd', 'KbdProps', 'formatKeySymbol'],
    description: 'Keyboard key and shortcut indicator badge with platform normalization.'
  }
]
