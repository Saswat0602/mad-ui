import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: false, // Remove source maps to reduce size
  clean: true,
  external: ['react', 'react-dom'],
  esbuildOptions(options) {
    options.jsx = 'automatic'
    options.minifyIdentifiers = true // Better minification
    options.drop = ['console', 'debugger'] // Remove console logs
  },
  onSuccess: 'npm run build:css',
  treeshake: true,
  minify: true,
  target: 'es2020', // Target modern browsers for smaller bundles
  platform: 'browser', // Optimize for browser
})
