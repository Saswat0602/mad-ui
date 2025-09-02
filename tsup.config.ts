import { defineConfig } from 'tsup'

export default defineConfig([
  // Full build - everything
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
    treeshake: true,
    minify: true,
    target: 'es2020',
    platform: 'browser',
    noExternal: [],
    outDir: 'dist',
    name: 'full'
  },
  // Core build - essential components only
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
  // Module builds (forms, overlay, layout, data, feedback, navigation, media) ...
  {
    entry: ['src/modules/forms.ts'],
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
    name: 'forms'
  },
  {
    entry: ['src/modules/overlay.ts'],
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
    name: 'overlay'
  },
  {
    entry: ['src/modules/layout.ts'],
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
    name: 'layout'
  },
  {
    entry: ['src/modules/data.ts'],
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
    name: 'data'
  },
  {
    entry: ['src/modules/feedback.ts'],
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
    name: 'feedback'
  },
  {
    entry: ['src/modules/navigation.ts'],
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
    name: 'navigation'
  },
  {
    entry: ['src/modules/media.ts'],
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
    name: 'media'
  },
  // Individual single-component builds - ALL COMPONENTS
  {
    entry: [
      'src/individual/button.ts',
      'src/individual/input.ts',
      'src/individual/label.ts',
      'src/individual/skeleton.ts',
      'src/individual/textarea.ts',
      'src/individual/select.ts',
      'src/individual/checkbox.ts',
      'src/individual/rating.ts',
      'src/individual/switch.ts',
      'src/individual/progress.ts',
      'src/individual/radio.ts',
      'src/individual/slider.ts',
      'src/individual/card.ts',
      'src/individual/form.ts',
      'src/individual/calendar.ts',
      'src/individual/date-picker.ts',
      'src/individual/timepicker.ts',
      'src/individual/accordion.ts',
      'src/individual/breadcrumbs.ts',
      'src/individual/input-otp.ts',
      'src/individual/tabs.ts',
      'src/individual/radio-group.ts',
      'src/individual/context-menu.ts',
      'src/individual/dropdown-menu.ts',
      'src/individual/collapsible.ts',
      'src/individual/toggle.ts',
      'src/individual/separator.ts',
      'src/individual/hover-card.ts',
      'src/individual/alert-dialog.ts',
      'src/individual/layout.ts',
      'src/individual/sidebar.ts',
      'src/individual/navbar.ts',
      'src/individual/modal.ts',
      'src/individual/tooltip.ts',
      'src/individual/drawer.ts',
      'src/individual/resizable.ts',
      'src/individual/scroll-area.ts',
      'src/individual/sheet.ts',
      'src/individual/popover.ts',
      'src/individual/table.ts',
      'src/individual/chart.ts',
      'src/individual/data-table.ts',
      'src/individual/alert.ts',
      'src/individual/toast.ts',
      'src/individual/sonner.ts',
      'src/individual/menubar.ts',
      'src/individual/command.ts',
      'src/individual/combobox.ts',
      'src/individual/navigation-menu.ts',
      'src/individual/pagination.ts',
      'src/individual/carousel.ts',
      'src/individual/badge.ts',
      'src/individual/avatar.ts',
      'src/individual/aspect-ratio.ts',
      'src/individual/typography.ts',
      'src/individual/dialog.ts'
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
