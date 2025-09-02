// Core components only - minimal bundle size
export { cn } from './lib/utils'

// Export color system
export { 
  componentColors, 
  lightColors, 
  darkColors, 
  defaultColors,
  getColorValue,
  createCSSVariables 
} from './lib/colors'

// Export core components only
export { Button } from './components/button'
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/card'
export { Input } from './components/input'
export { Label } from './components/label'
export { Textarea } from './components/textarea'
export { Select } from './components/select'
export { Checkbox } from './components/checkbox'
export { Switch } from './components/switch'
export { Alert } from './components/alert'
export { Modal } from './components/modal'
export { Progress } from './components/progress'
export { Radio } from './components/radio'
export { Rating } from './components/rating'
export { Skeleton } from './components/skeleton'
export { Breadcrumbs } from './components/breadcrumbs'
export { Table } from './components/table'
export { Popover } from './components/popover'

// Export core types only
export type { ButtonProps } from './components/button'
export type { CardProps, CardContentProps, CardDescriptionProps, CardFooterProps, CardHeaderProps, CardTitleProps } from './components/card'
export type { InputProps } from './components/input'
export type { LabelProps } from './components/label'
export type { TextareaProps } from './components/textarea'
export type { SelectProps, SelectOption } from './components/select'
export type { CheckboxProps } from './components/checkbox'
export type { SwitchProps } from './components/switch'
export type { AlertProps } from './components/alert'
export type { ModalProps } from './components/modal'
export type { ProgressProps } from './components/progress'
export type { RadioProps } from './components/radio'
export type { RatingProps } from './components/rating'
export type { SkeletonProps } from './components/skeleton'
export type { BreadcrumbsProps, BreadcrumbItem } from './components/breadcrumbs'
export type { TableProps, TableColumn } from './components/table'
export type { PopoverProps } from './components/popover'
export type { ColorScheme } from './lib/colors'
