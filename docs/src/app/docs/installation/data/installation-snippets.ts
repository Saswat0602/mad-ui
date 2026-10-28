// Framework installation commands and configuration snippets
// Extracted to keep the installation page clean, declarative, and maintainable.

export const pkgCommands = {
  npm: "npm install mad-ui-components",
  pnpm: "pnpm add mad-ui-components",
  yarn: "yarn add mad-ui-components",
  bun: "bun add mad-ui-components"
}

export const nextjs = {
  createApp: "npx create-next-app@latest my-app --typescript --tailwind --eslint --app",
  install: "npm install mad-ui-components",
  tailwindConfig: `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/mad-ui-components/dist/**/*.{mjs,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`,
  pageUsage: `'use client'

import { Button, Card, Input } from 'mad-ui-components'

export default function Home() {
  return (
    <main className="p-8 max-w-md mx-auto space-y-4">
      <Card className="p-6 space-y-4">
        <h1 className="text-xl font-bold">Welcome to Mad UI</h1>
        <Input placeholder="Enter your email" />
        <Button className="w-full">Get Started</Button>
      </Card>
    </main>
  )
}`
}

export const vite = {
  createApp: "npm create vite@latest my-app -- --template react-ts",
  install: "npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p\nnpm install mad-ui-components",
  tailwindConfig: `/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/mad-ui-components/dist/**/*.{mjs,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`,
  appUsage: `import { Button, Card, Badge } from 'mad-ui-components'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="p-6 space-y-4 max-w-sm">
        <Badge variant="secondary">Vite + React</Badge>
        <h2 className="text-lg font-bold">Fast & Modern UI</h2>
        <Button variant="default">Click Me</Button>
      </Card>
    </div>
  )
}

export default App`
}

export const manual = {
  install: "npm install react react-dom mad-ui-components",
  css: `@tailwind base;\n@tailwind components;\n@tailwind utilities;`
}

export const cli = {
  copyCommand: "npx mad-ui-components copy button card input"
}
