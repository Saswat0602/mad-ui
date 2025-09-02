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
export { Button } from './components/core/button'
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/core/card'
export { Input } from './components/core/input'
export { Label } from './components/core/label'
export { Textarea } from './components/core/textarea'
export { Select } from './components/core/select'
export { Checkbox } from './components/core/checkbox'
export { Switch } from './components/core/switch'
export { Progress } from './components/core/progress'
export { Radio } from './components/core/radio'
export { Rating } from './components/core/rating'
export { Skeleton } from './components/core/skeleton'
export { Slider } from './components/core/slider'

// Export core types only
export type { ButtonProps } from './components/core/button'
export type { CardProps, CardContentProps, CardDescriptionProps, CardFooterProps, CardHeaderProps, CardTitleProps } from './components/core/card'
export type { InputProps } from './components/core/input'
export type { LabelProps } from './components/core/label'
export type { TextareaProps } from './components/core/textarea'
export type { SelectProps, SelectOption } from './components/core/select'
export type { CheckboxProps } from './components/core/checkbox'
export type { SwitchProps } from './components/core/switch'
export type { ProgressProps } from './components/core/progress'
export type { RadioProps } from './components/core/radio'
export type { RatingProps } from './components/core/rating'
export type { SkeletonProps } from './components/core/skeleton'
export type { SliderProps } from './components/core/slider'
export type { ColorScheme } from './lib/colors'
