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
      'src/accordion.tsx',
      'src/alert.tsx',
      'src/alert-dialog.tsx',
      'src/aspect-ratio.tsx',
      'src/avatar.tsx',
      'src/badge.tsx',
      'src/breadcrumbs.tsx',
      'src/button.tsx',
      'src/calendar.tsx',
      'src/card.tsx',
      'src/carousel.tsx',
      'src/chart.tsx',
      'src/checkbox.tsx',
      'src/collapsible.tsx',
      'src/combobox.tsx',
      'src/command.tsx',
      'src/context-menu.tsx',
      'src/data-table.tsx',
      'src/date-picker.tsx',
      'src/dialog.tsx',
      'src/drawer.tsx',
      'src/dropdown-menu.tsx',
      'src/hover-card.tsx',
      'src/input.tsx',
      'src/input-otp.tsx',
      'src/label.tsx',
      'src/layout.tsx',
      'src/menubar.tsx',
      'src/modal.tsx',
      'src/navigation-menu.tsx',
      'src/navbar.tsx',
      'src/pagination.tsx',
      'src/popover.tsx',
      'src/progress.tsx',
      'src/radio.tsx',
      'src/radio-group.tsx',
      'src/rating.tsx',
      'src/react-hook-form.tsx',
      'src/resizable.tsx',
      'src/scroll-area.tsx',
      'src/select.tsx',
      'src/separator.tsx',
      'src/sheet.tsx',
      'src/sidebar.tsx',
      'src/skeleton.tsx',
      'src/slider.tsx',
      'src/sonner.tsx',
      'src/switch.tsx',
      'src/table.tsx',
      'src/tabs.tsx',
      'src/textarea.tsx',
      'src/timepicker.tsx',
      'src/toast.tsx',
      'src/toggle.tsx',
      'src/tooltip.tsx',
      'src/typography.tsx',
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
