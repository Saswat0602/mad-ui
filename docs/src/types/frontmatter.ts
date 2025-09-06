import { z } from 'zod'

export const FrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.enum(['Core', 'Form', 'Navigation', 'Feedback', 'Data Display', 'Overlay', 'Layout', 'Media']),
  version: z.string(),
  status: z.enum(['stable', 'beta', 'alpha', 'deprecated']).default('stable'),
  lastUpdated: z.string().transform((str) => new Date(str)),
  deprecated: z.boolean().optional(),
  migrationGuide: z.string().optional(),
  tags: z.array(z.string()).default([]),
})

export type Frontmatter = z.infer<typeof FrontmatterSchema>
