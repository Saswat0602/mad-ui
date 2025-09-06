export interface ComponentMeta {
  title: string
  description: string
  category: ComponentCategory
  version: string
  status: ComponentStatus
  lastUpdated: Date
  deprecated?: boolean
  migrationGuide?: string
  tags: string[]
}

export interface ComponentProp {
  name: string
  type: string
  required: boolean
  default?: string | number | boolean
  description: string
  deprecated?: boolean
}

export interface ComponentExample {
  title: string
  description?: string
  code: string
  preview?: React.ReactNode
}

export interface ComponentDoc {
  slug: string
  meta: ComponentMeta
  content: string
  props: ComponentProp[]
  examples: ComponentExample[]
  relatedComponents: string[]
}

export type ComponentCategory = 
  | 'Core' 
  | 'Form' 
  | 'Navigation' 
  | 'Feedback' 
  | 'Data Display' 
  | 'Overlay' 
  | 'Layout'
  | 'Media'

export type ComponentStatus = 
  | 'stable' 
  | 'beta' 
  | 'alpha' 
  | 'deprecated'
