import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import { componentManifest } from '../src/component.manifest'
import { COMPONENT_PROPS, getComponentProps } from '../docs/src/lib/component-props'

describe('Component & Documentation Parity Test Suite', () => {
  it('ensures all manifest components have documented props tables', () => {
    expect(componentManifest.length).toBe(67)

    const missingProps: string[] = []

    for (const component of componentManifest) {
      const props = getComponentProps(component.name)
      if (!props || props.length === 0) {
        missingProps.push(component.name)
      }
    }

    expect(missingProps).toEqual([])
  })

  it('ensures all prop definitions contain required fields and valid descriptions', () => {
    for (const [componentName, props] of Object.entries(COMPONENT_PROPS)) {
      expect(props.length).toBeGreaterThan(0)

      for (const prop of props) {
        expect(prop.name, `Prop in ${componentName} missing name`).toBeTruthy()
        expect(prop.type, `Prop ${prop.name} in ${componentName} missing type`).toBeTruthy()
        expect(prop.description, `Prop ${prop.name} in ${componentName} missing description`).toBeTruthy()
        expect(typeof prop.required).toBe('boolean')
      }
    }
  })

  it('ensures CLI component distributor maps to real source files on disk', () => {
    const cliScriptPath = path.resolve(__dirname, '../scripts/copy-component.js')
    const cliContent = fs.readFileSync(cliScriptPath, 'utf8')

    // Extract all mapped component paths
    const matches = [...cliContent.matchAll(/path:\s*['"]([^'"]+)['"]/g)]
    expect(matches.length).toBe(67)

    for (const match of matches) {
      const relativePath = match[1]
      const fullPath = path.resolve(__dirname, '..', relativePath)
      expect(fs.existsSync(fullPath), `CLI source file does not exist: ${relativePath}`).toBe(true)
    }
  })

  it('ensures zero third-party UI dependencies in package.json', () => {
    const pkgPath = path.resolve(__dirname, '../package.json')
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))

    const prodDeps = Object.keys(pkg.dependencies || {})
    
    // Disallow external UI frameworks
    expect(prodDeps.some(d => d.startsWith('@radix-ui/'))).toBe(false)
    expect(prodDeps.some(d => d.startsWith('@tanstack/'))).toBe(false)
    expect(prodDeps.some(d => d.startsWith('framer-motion'))).toBe(false)

    // Allowed base dependencies only
    expect(prodDeps.sort()).toEqual(['clsx', 'lucide-react', 'tailwind-merge'].sort())
  })

  it('executes CLI list and dry-run copy commands successfully', async () => {
    const { execSync } = await import('child_process')
    const listOutput = execSync('node scripts/copy-component.js list', { encoding: 'utf8' })
    expect(listOutput).toContain('Mad UI Available Components (55 Total)')
    expect(listOutput).toContain('button')
    expect(listOutput).toContain('data-table')
    expect(listOutput).toContain('dialog')

    const dryRunOutput = execSync('node scripts/copy-component.js dialog --dry-run', { encoding: 'utf8' })
    expect(dryRunOutput).toContain('[DRY RUN MODE')
    expect(dryRunOutput).toContain('Would create')
    expect(dryRunOutput).toContain('Primitive: primitives/presence.tsx')
  })
})
