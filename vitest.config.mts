import './tests/polyfill.cjs'
import { defineConfig } from 'vitest/config'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const polyfillPath = path.resolve(__dirname, 'tests/polyfill.cjs')

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.ts'],
    forks: {
      execArgv: ['--require', polyfillPath],
    },
  },
})
