import { defineConfig } from 'tsup'

// Multi-entry build with strategic grouping to minimize unused imports
// while maintaining tree-shaking benefits
export default defineConfig([
  // Main entry point
  {
    entry: ['src/index.ts'],
    format: ['esm'],
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
      options.treeShaking = true
      options.ignoreAnnotations = true
    },
    treeshake: true,
    minify: true,
    target: 'es2020',
    platform: 'browser',
    outDir: 'dist',
    outExtension: () => ({ js: '.mjs' })
  },
  // Core components (most commonly used)
  {
    entry: ['src/core.ts'],
    format: ['esm'],
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
      options.treeShaking = true
      options.ignoreAnnotations = true
    },
    treeshake: true,
    minify: true,
    target: 'es2020',
    platform: 'browser',
    outDir: 'dist',
    outExtension: () => ({ js: '.mjs' })
  },
  // Module groups
  {
    entry: [
      'src/modules/forms.ts',
      'src/modules/overlay.ts',
      'src/modules/layout.ts',
      'src/modules/data.ts',
      'src/modules/feedback.ts',
      'src/modules/navigation.ts',
      'src/modules/media.ts'
    ],
    format: ['esm'],
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
      options.treeShaking = true
      options.ignoreAnnotations = true
    },
    treeshake: true,
    minify: true,
    target: 'es2020',
    platform: 'browser',
    outDir: 'dist',
    outExtension: () => ({ js: '.mjs' })
  },
  // Individual components (grouped by functionality)
  {
    entry: [
      'src/individual/button.ts',
      'src/individual/input.ts',
      'src/individual/label.ts',
      'src/individual/textarea.ts',
      'src/individual/select.ts',
      'src/individual/checkbox.ts',
      'src/individual/radio.ts',
      'src/individual/switch.ts',
      'src/individual/slider.ts',
      'src/individual/rating.ts',
      'src/individual/progress.ts'
    ],
    format: ['esm'],
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
      options.treeShaking = true
      options.ignoreAnnotations = true
    },
    treeshake: true,
    minify: true,
    target: 'es2020',
    platform: 'browser',
    outDir: 'dist',
    outExtension: () => ({ js: '.mjs' })
  },
  {
    entry: [
      'src/individual/card.ts',
      'src/individual/form.ts',
      'src/individual/accordion.ts',
      'src/individual/tabs.ts',
      'src/individual/breadcrumbs.ts',
      'src/individual/input-otp.ts',
      'src/individual/radio-group.ts',
      'src/individual/calendar.ts',
      'src/individual/date-picker.ts',
      'src/individual/timepicker.ts'
    ],
    format: ['esm'],
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
      options.treeShaking = true
      options.ignoreAnnotations = true
    },
    treeshake: true,
    minify: true,
    target: 'es2020',
    platform: 'browser',
    outDir: 'dist',
    outExtension: () => ({ js: '.mjs' })
  },
  {
    entry: [
      'src/individual/context-menu.ts',
      'src/individual/dropdown-menu.ts',
      'src/individual/hover-card.ts',
      'src/individual/tooltip.ts',
      'src/individual/popover.ts',
      'src/individual/alert-dialog.ts',
      'src/individual/dialog.ts',
      'src/individual/modal.ts',
      'src/individual/drawer.ts',
      'src/individual/sheet.ts'
    ],
    format: ['esm'],
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
      options.treeShaking = true
      options.ignoreAnnotations = true
    },
    treeshake: true,
    minify: true,
    target: 'es2020',
    platform: 'browser',
    outDir: 'dist',
    outExtension: () => ({ js: '.mjs' })
  },
  {
    entry: [
      'src/individual/layout.ts',
      'src/individual/sidebar.ts',
      'src/individual/navbar.ts',
      'src/individual/resizable.ts',
      'src/individual/scroll-area.ts',
      'src/individual/separator.ts',
      'src/individual/collapsible.ts',
      'src/individual/toggle.ts'
    ],
    format: ['esm'],
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
      options.treeShaking = true
      options.ignoreAnnotations = true
    },
    treeshake: true,
    minify: true,
    target: 'es2020',
    platform: 'browser',
    outDir: 'dist',
    outExtension: () => ({ js: '.mjs' })
  },
  {
    entry: [
      'src/individual/table.ts',
      'src/individual/data-table.ts',
      'src/individual/chart.ts',
      'src/individual/pagination.ts',
      'src/individual/command.ts',
      'src/individual/combobox.ts',
      'src/individual/navigation-menu.ts',
      'src/individual/menubar.ts'
    ],
    format: ['esm'],
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
      options.treeShaking = true
      options.ignoreAnnotations = true
    },
    treeshake: true,
    minify: true,
    target: 'es2020',
    platform: 'browser',
    outDir: 'dist',
    outExtension: () => ({ js: '.mjs' })
  },
  {
    entry: [
      'src/individual/avatar.ts',
      'src/individual/badge.ts',
      'src/individual/aspect-ratio.ts',
      'src/individual/typography.ts',
      'src/individual/carousel.ts',
      'src/individual/skeleton.ts',
      'src/individual/alert.ts',
      'src/individual/toast.ts',
      'src/individual/sonner.ts'
    ],
    format: ['esm'],
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
      options.treeShaking = true
      options.ignoreAnnotations = true
    },
    treeshake: true,
    minify: true,
    target: 'es2020',
    platform: 'browser',
    outDir: 'dist',
    outExtension: () => ({ js: '.mjs' })
  }
])
