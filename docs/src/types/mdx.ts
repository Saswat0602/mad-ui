export interface MDXContent {
  frontmatter: Frontmatter
  content: string
  slug: string
}

export interface SerializedMDX {
  compiledSource: string
  frontmatter: Frontmatter
  scope: Record<string, unknown>
}

export interface MDXComponents {
  [key: string]: React.ComponentType<any>
}

import { Frontmatter } from './frontmatter'
