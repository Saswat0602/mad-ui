import { defineConfig } from 'tsup'

export default defineConfig([
  // Full library build
  {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: false,
    clean: true,
    external: ['react', 'react-dom'],
    esbuildOptions(options) {
      options.jsx = 'automatic'
      options.minifyIdentifiers = true
      options.drop = ['console', 'debugger']
      options.keepNames = false
      options.mangleProps = /^_/
    },
    onSuccess: 'npm run build:css',
    treeshake: true,
    minify: true,
    target: 'es2020',
    platform: 'browser',
    noExternal: [],
    outDir: 'dist',
    name: 'full'
  },
  // Core-only build (minimal bundle)
  {
    entry: ['src/core.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: false,
    clean: false,
    external: ['react', 'react-dom'],
    esbuildOptions(options) {
      options.jsx = 'automatic'
      options.minifyIdentifiers = true
      options.drop = ['console', 'debugger']
      options.keepNames = false
      options.mangleProps = /^_/
    },
    treeshake: true,
    minify: true,
    target: 'es2020',
    platform: 'browser',
    noExternal: [],
    outDir: 'dist',
    name: 'core'
  },
  // Components-only build
  {
    entry: ['src/components/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: false,
    clean: false,
    external: ['react', 'react-dom'],
    esbuildOptions(options) {
      options.jsx = 'automatic'
      options.minifyIdentifiers = true
      options.drop = ['console', 'debugger']
      options.keepNames = false
      options.mangleProps = /^_/
    },
    treeshake: true,
    minify: true,
    target: 'es2020',
    platform: 'browser',
    noExternal: [],
    outDir: 'dist',
    name: 'components'
  },
  // Individual component builds
  {
    entry: [
      'src/button.tsx',
      'src/card.tsx',
      'src/badge.tsx',
      'src/avatar.tsx',
      'src/dialog.tsx',
      'src/utils.ts'
    ],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: false,
    clean: false,
    external: ['react', 'react-dom'],
    esbuildOptions(options) {
      options.jsx = 'automatic'
      options.minifyIdentifiers = true
      options.drop = ['console', 'debugger']
      options.keepNames = false
      options.mangleProps = /^_/
    },
    treeshake: true,
    minify: true,
    target: 'es2020',
    platform: 'browser',
    noExternal: [],
    outDir: 'dist',
    name: 'individual'
  }
])
