import { coreExamples } from './core'
import { formsExamples } from './forms'
import { mediaExamples } from './media'
import { layoutExamples } from './layout'
import { overlayExamples } from './overlay'
import { navigationExamples } from './navigation'
import { dataExamples } from './data'
import { feedbackExamples } from './feedback'

export interface ComponentExample {
  title: string
  description?: string
  code: string
  preview: React.ReactNode
}

// Combine all examples into a single object
export const COMPONENT_EXAMPLES: Record<string, ComponentExample[]> = {
  ...coreExamples,
  ...formsExamples,
  ...mediaExamples,
  ...layoutExamples,
  ...overlayExamples,
  ...navigationExamples,
  ...dataExamples,
  ...feedbackExamples
}

export function getComponentExamples(slug: string): ComponentExample[] {
  return COMPONENT_EXAMPLES[slug] || [
    {
      title: 'Basic Example',
      description: 'A basic example of the component',
      code: `import { ${slug.charAt(0).toUpperCase() + slug.slice(1)} } from 'mad-ui-components'

export function Example() {
  return <${slug.charAt(0).toUpperCase() + slug.slice(1)} />
}`,
      preview: <div className="p-4 border rounded-md bg-card">Component Preview</div>
    }
  ]
}
