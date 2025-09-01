# 🚀 npm Package Development - Quick Reference

## 📦 Essential Commands

### Setup & Initialization
```bash
# Create project
mkdir my-package && cd my-package

# Initialize npm package
npm init -y

# Initialize Git
git init

# Install essential dev dependencies
npm install --save-dev typescript tsup @types/node
```

### Development
```bash
# Build package
npm run build

# Watch mode (development)
npm run dev

# Clean build directory
npm run clean

# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format
```

### Publishing
```bash
# Login to npm
npm login

# Check login status
npm whoami

# Preview what will be published
npm pack --dry-run

# Publish package
npm publish --access public

# Update version
npm version patch    # 1.0.0 → 1.0.1
npm version minor    # 1.0.1 → 1.1.0
npm version major    # 1.1.0 → 2.0.0

# Publish new version
npm publish
```

### Maintenance
```bash
# Check outdated packages
npm outdated

# Update dependencies
npm update

# Security audit
npm audit

# Fix security issues
npm audit fix

# Clear cache
npm cache clean --force
```

## ⚡ Quick Start Template

### 1. Create Project
```bash
mkdir my-awesome-lib
cd my-awesome-lib
npm init -y
git init
```

### 2. Install Dependencies
```bash
npm install --save-dev typescript tsup @types/node
npm install clsx
```

### 3. Create Files
```bash
mkdir src
echo 'export const hello = () => "Hello World!";' > src/index.ts
```

### 4. Configure Build
```bash
echo 'import { defineConfig } from "tsup"; export default defineConfig({ entry: ["src/index.ts"], format: ["cjs", "esm"], dts: true });' > tsup.config.ts
```

### 5. Update package.json
```bash
npm pkg set main="./dist/index.js"
npm pkg set module="./dist/index.mjs"
npm pkg set types="./dist/index.d.ts"
npm pkg set scripts.build="tsup"
npm pkg set scripts.prepublishOnly="npm run build"
```

### 6. Build & Publish
```bash
npm run build
npm login
npm publish --access public
```

## 🔧 Essential Configurations

### package.json
```json
{
  "name": "@username/package-name",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "files": ["dist"],
  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch",
    "clean": "rm -rf dist",
    "prepublishOnly": "npm run clean && npm run build"
  }
}
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "declaration": true,
    "outDir": "dist",
    "strict": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### tsup.config.ts
```typescript
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  external: ['react', 'react-dom']
})
```

## 🚨 Common Issues

### Package Name Taken
```bash
# Use scoped name
npm init --scope=@yourusername
```

### Build Fails
```bash
# Clean and rebuild
npm run clean && npm run build
```

### Publishing Fails
```bash
# Check login
npm whoami

# Re-login if needed
npm logout && npm login
```

## 📚 File Structure
```
my-package/
├── src/
│   └── index.ts      # Main entry
├── dist/             # Built files
├── package.json      # Package config
├── tsconfig.json     # TypeScript config
├── tsup.config.ts    # Build config
└── README.md         # Documentation
```

## 🎯 Publishing Checklist
- [ ] Code builds successfully
- [ ] Tests pass
- [ ] README is updated
- [ ] Version is bumped
- [ ] Logged in to npm
- [ ] Package name is available

---

**Quick Tip**: Use `npm run dev` during development to automatically rebuild on file changes!
