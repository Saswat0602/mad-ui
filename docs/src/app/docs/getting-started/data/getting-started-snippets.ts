// Getting started snippets and installation commands
// Extracted to keep page component clean, declarative, and maintainable.

export const installCommands = {
  npm: 'npm install mad-ui-components',
  pnpm: 'pnpm add mad-ui-components',
  yarn: 'yarn add mad-ui-components',
  bun: 'bun add mad-ui-components',
}

export const tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/mad-ui-components/dist/**/*.{mjs,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`

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
