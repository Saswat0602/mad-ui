// Main Library Entry Point - Full Bundle
// This exports everything from all modules

// Core Components
export { Button } from './components/core/button'
export { Input } from './components/core/input'
export { Label } from './components/core/label'
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/core/card'
export { Checkbox } from './components/core/checkbox'
export { Radio } from './components/core/radio'
export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from './components/core/select'
export { Switch } from './components/core/switch'
export { Progress } from './components/core/progress'
export { Slider } from './components/core/slider'
export { Rating } from './components/core/rating'
export { Skeleton } from './components/core/skeleton'
export { Textarea } from './components/core/textarea'

// Form Components
export { RadioGroup, RadioGroupItem } from './components/forms/radio-group'
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/forms/accordion'
export { Calendar } from './components/forms/calendar'
export { DateTimePicker } from './components/forms/datetime-picker'
export { InputOTP, InputOTPGroup, InputOTPSlot } from './components/forms/input-otp'
export { Breadcrumbs } from './components/forms/breadcrumbs'
export { Tabs, TabsList, TabsTrigger, TabsContent } from './components/forms/tabs'
export { 
  Form, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription, 
  FormMessage,
  FormError,
  FormSuccess,
  FormWarning,
  useFormField
} from './components/forms/form'

// Overlay Components
export { 
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
  useDialog
} from './components/overlay/dialog'
export { 
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  useAlertDialog
} from './components/overlay/alert-dialog'
export { 
  HoverCard,
  HoverCardTrigger,
  HoverCardContent
} from './components/overlay/hover-card'
export { 
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
} from './components/overlay/collapsible'
export { 
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel,
  ContextMenuGroup
} from './components/overlay/context-menu'
export { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup
} from './components/overlay/dropdown-menu'
export { Toggle, ToggleGroup, ToggleGroupItem } from './components/overlay/toggle'
export { Separator } from './components/overlay/separator'

// Layout Components
export { Layout } from './components/layout/layout'
export { Navbar } from './components/layout/navbar'
export { 
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarFooter, 
  SidebarGroup, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton 
} from './components/layout/sidebar'
export { Modal } from './components/layout/modal'
export { Popover, PopoverTrigger, PopoverContent, PopoverClose, usePopover } from './components/layout/popover'
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, useTooltip } from './components/layout/tooltip'
export { 
  Sheet, 
  SheetTrigger, 
  SheetContent, 
  SheetHeader, 
  SheetFooter, 
  SheetTitle, 
  SheetDescription, 
  SheetClose, 
  useSheet 
} from './components/layout/sheet'
export { Drawer } from './components/layout/drawer'
export { Resizable, ResizableHandle, ResizablePanel } from './components/layout/resizable'
export { ScrollArea, ScrollBar } from './components/layout/scroll-area'

// Data Components
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption } from './components/data/table'
export { DataTable, DataTableHeader, DataTableRow, DataTablePagination } from './components/data/data-table'
export { Chart, BarChart, LineChart, PieChart, DoughnutChart } from './components/data/chart'

// Feedback Components
export { Alert, AlertTitle, AlertDescription } from './components/feedback/alert'
export { Sonner } from './components/feedback/sonner'
export { 
  Toast, 
  ToastTitle, 
  ToastDescription, 
  ToastAction, 
  ToastClose, 
  ToastViewport, 
  ToastProvider 
} from './components/feedback/toast'


// Navigation Components
export { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuTrigger, 
  NavigationMenuContent, 
  NavigationMenuLink,
  NavigationMenuViewport,
  NavigationMenuIndicator,
  navigationMenuTriggerStyle
} from './components/navigation/navigation-menu'
export { 
  Menubar, 
  MenubarMenu, 
  MenubarTrigger, 
  MenubarContent, 
  MenubarItem, 
  MenubarSeparator, 
  MenubarLabel, 
  MenubarGroup 
} from './components/navigation/menubar'
export { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator, CommandShortcut, CommandDialog } from './components/navigation/command'
export { Combobox } from './components/navigation/combobox'
export { Pagination, PaginationItem, PaginationContent, PaginationEllipsis } from './components/navigation/pagination'

// Media Components
export { Avatar, AvatarImage, AvatarFallback, AvatarGroup } from './components/media/avatar'
export { Badge } from './components/media/badge'
export { AspectRatio } from './components/media/aspect-ratio'
export { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext, 
  CarouselIndicator 
} from './components/media/carousel'

export { 
  TypographyH1, 
  TypographyH2, 
  TypographyH3, 
  TypographyH4, 
  TypographyH5, 
  TypographyH6, 
  TypographyP, 
  TypographyBlockquote, 
  TypographyCode, 
  TypographyLead, 
  TypographyLarge, 
  TypographySmall, 
  TypographyMuted 
} from './components/media/typography'

// Types
export type { ButtonProps } from './components/core/button'
export type { InputProps } from './components/core/input'
export type { LabelProps } from './components/core/label'
export type { CardProps, CardHeaderProps, CardTitleProps, CardDescriptionProps, CardContentProps, CardFooterProps } from './components/core/card'
export type { CheckboxProps } from './components/core/checkbox'
export type { RadioProps } from './components/core/radio'
export type { SelectProps, SelectContentProps, SelectItemProps, SelectTriggerProps, SelectValueProps, SelectGroupProps, SelectLabelProps } from './components/core/select'
export type { SwitchProps } from './components/core/switch'
export type { ProgressProps } from './components/core/progress'
export type { SliderProps } from './components/core/slider'
export type { RatingProps } from './components/core/rating'
export type { SkeletonProps } from './components/core/skeleton'
export type { TextareaProps } from './components/core/textarea'

export type { RadioGroupProps, RadioGroupItemProps } from './components/forms/radio-group'
export type { AccordionProps, AccordionItemData, AccordionItemProps, AccordionTriggerProps, AccordionContentProps } from './components/forms/accordion'
export type { CalendarProps } from './components/forms/calendar'
export type { DateTimePickerProps } from './components/forms/datetime-picker'
export type { InputOTPProps, InputOTPGroupProps, InputOTPSlotProps } from './components/forms/input-otp'
export type { BreadcrumbsProps } from './components/forms/breadcrumbs'
export type { TabsProps, TabItem } from './components/forms/tabs'
export type { 
  FormProps,
  FormFieldProps,
  FormItemProps,
  FormLabelProps,
  FormControlProps,
  FormDescriptionProps,
  FormMessageProps,
  FormFieldError
} from './components/forms/form'

export type { 
  DialogProps,
  DialogTriggerProps,
  DialogContentProps,
  DialogHeaderProps,
  DialogFooterProps,
  DialogTitleProps,
  DialogDescriptionProps,
  DialogCloseProps
} from './components/overlay/dialog'
export type { 
  AlertDialogProps,
  AlertDialogTriggerProps,
  AlertDialogContentProps,
  AlertDialogHeaderProps,
  AlertDialogFooterProps,
  AlertDialogTitleProps,
  AlertDialogDescriptionProps,
  AlertDialogActionProps,
  AlertDialogCancelProps
} from './components/overlay/alert-dialog'
export type { 
  HoverCardProps,
  HoverCardTriggerProps,
  HoverCardContentProps
} from './components/overlay/hover-card'
export type { 
  CollapsibleProps,
  CollapsibleTriggerProps,
  CollapsibleContentProps
} from './components/overlay/collapsible'
export type { 
  ContextMenuProps,
  ContextMenuTriggerProps,
  ContextMenuContentProps,
  ContextMenuItemProps,
  ContextMenuSeparatorProps,
  ContextMenuLabelProps,
  ContextMenuGroupProps
} from './components/overlay/context-menu'
export type { 
  DropdownMenuProps,
  DropdownMenuTriggerProps,
  DropdownMenuContentProps,
  DropdownMenuItemProps,
  DropdownMenuCheckboxItemProps,
  DropdownMenuRadioItemProps,
  DropdownMenuLabelProps,
  DropdownMenuSeparatorProps,
  DropdownMenuShortcutProps,
  DropdownMenuGroupProps,
  DropdownMenuPortalProps,
  DropdownMenuSubProps,
  DropdownMenuSubContentProps,
  DropdownMenuSubTriggerProps,
  DropdownMenuRadioGroupProps
} from './components/overlay/dropdown-menu'
export type { ToggleProps, ToggleGroupProps, ToggleGroupItemProps } from './components/overlay/toggle'
export type { SeparatorProps } from './components/overlay/separator'

export type { LayoutProps } from './components/layout/layout'
export type { NavbarProps } from './components/layout/navbar'
export type { SidebarProps } from './components/layout/sidebar'
export type { ModalProps } from './components/layout/modal'
export type { PopoverProps } from './components/layout/popover'
export type { TooltipProps } from './components/layout/tooltip'
export type { SheetProps } from './components/layout/sheet'
export type { DrawerProps } from './components/layout/drawer'
export type { ResizableProps } from './components/layout/resizable'
export type { ScrollAreaProps } from './components/layout/scroll-area'

export type { TableProps } from './components/data/table'
export type { DataTableProps, DataTableColumn, DataTableHeaderProps, DataTableRowProps, DataTablePaginationProps } from './components/data/data-table'
export type { ChartProps } from './components/data/chart'

export type { AlertProps } from './components/feedback/alert'
export type { SonnerProps } from './components/feedback/sonner'
export type { ToastProps } from './components/feedback/toast'

export type { NavigationMenuProps } from './components/navigation/navigation-menu'
export type { MenubarProps } from './components/navigation/menubar'
export type { CommandProps } from './components/navigation/command'
export type { ComboboxProps } from './components/navigation/combobox'
export type { PaginationProps } from './components/navigation/pagination'

export type { AvatarProps } from './components/media/avatar'
export type { BadgeProps } from './components/media/badge'
export type { AspectRatioProps } from './components/media/aspect-ratio'
export type { CarouselProps } from './components/media/carousel'
export type { 
  TypographyProps,
  TypographyH1Props, 
  TypographyH2Props, 
  TypographyH3Props, 
  TypographyH4Props, 
  TypographyH5Props, 
  TypographyH6Props, 
  TypographyPProps, 
  TypographyBlockquoteProps, 
  TypographyCodeProps, 
  TypographyLeadProps, 
  TypographyLargeProps, 
  TypographySmallProps, 
  TypographyMutedProps 
} from './components/media/typography'

// Primitives & Headless Layer
export * from './primitives'

// Reusable Hooks
export * from './hooks'

// Theming & Tokens
export * from './theme'

// Utilities
export {
  cn,
  createVariants,
  isReactNative,
  getPlatformClassName,
  composeRefs,
  type PlatformProps,
} from './lib/utils'
export * from './lib/colors'
