// Getting started snippets and installation commands
// Extracted to keep page component clean, declarative, and maintainable.

export const installCommands = {
  npm: 'npm install mad-ui-components',
  pnpm: 'pnpm add mad-ui-components',
  yarn: 'yarn add mad-ui-components',
  bun: 'bun add mad-ui-components',
}

export const tailwindConfig = `const path = require("path")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Monorepo & hoisting-safe resolution
    path.dirname(require.resolve("mad-ui-components/package.json")) + "/dist/**/*.{mjs,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`

export const tailwindV4Config = `@import "tailwindcss";
@source "../node_modules/mad-ui-components/dist";`

export const cssImport = `// In your root layout or main entry:
import "mad-ui-components/styles.css"`

export const usage = `import { Button, Card, Input } from 'mad-ui-components'

export function LoginCard() {
  return (
    <Card className="p-6 max-w-sm space-y-4">
      <h2 className="text-xl font-bold">Sign In</h2>
      <Input placeholder="name@example.com" type="email" />
      <Button className="w-full">Continue</Button>
    </Card>
  )
}`
