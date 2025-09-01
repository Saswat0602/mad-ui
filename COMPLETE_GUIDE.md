# 🚀 Complete Guide: Creating & Publishing Your Own npm Package

## 📋 Table of Contents
1. [Prerequisites](#prerequisites)
2. [Project Setup](#project-setup)
3. [Package Configuration](#package-configuration)
4. [Building & Testing](#building--testing)
5. [Publishing to npm](#publishing-to-npm)
6. [Maintenance & Updates](#maintenance--updates)
7. [Best Practices](#best-practices)
8. [Troubleshooting](#troubleshooting)

---

## 🎯 Prerequisites

### Required Software
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (for version control) - [Download here](https://git-scm.com/)

### Required Accounts
- **npm account** - [Sign up here](https://www.npmjs.com/signup)
- **GitHub account** (recommended) - [Sign up here](https://github.com/signup)

### Verify Installation
```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check Git version
git --version
```

---

## 🏗️ Project Setup

### 1. Create Project Directory
```bash
# Create and navigate to project folder
mkdir my-awesome-package
cd my-awesome-package

# Initialize Git repository
git init
```

### 2. Initialize npm Package
```bash
# Initialize package.json (interactive)
npm init

# Or initialize with defaults
npm init -y
```

### 3. Create Project Structure
```bash
# Create essential directories
mkdir src
mkdir dist
mkdir scripts
mkdir docs
mkdir tests
mkdir examples

# Create essential files
touch README.md
touch .gitignore
touch .npmignore
touch LICENSE
```

### 4. Basic Project Structure
```
my-awesome-package/
├── src/                 # Source code
├── dist/               # Built files (auto-generated)
├── scripts/            # Build scripts
├── docs/              # Documentation
├── tests/             # Test files
├── examples/          # Usage examples
├── package.json       # Package configuration
├── README.md          # Package description
├── .gitignore         # Git ignore rules
├── .npmignore         # npm ignore rules
└── LICENSE            # License file
```

---

## ⚙️ Package Configuration

### 1. Essential package.json Fields

```json
{
  "name": "@yourusername/package-name",
  "version": "1.0.0",
  "description": "A brief description of your package",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.js"
    },
    "./styles": "./dist/styles.css"
  },
  "files": [
    "dist"
  ],
  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch",
    "clean": "rm -rf dist",
    "prepublishOnly": "npm run clean && npm run build",
    "test": "jest",
    "lint": "eslint src/**/*.{ts,tsx}",
    "format": "prettier --write src/**/*.{ts,tsx}"
  },
  "keywords": ["your", "keywords", "here"],
  "author": "Your Name <your.email@example.com>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/your-package.git"
  },
  "bugs": {
    "url": "https://github.com/yourusername/your-package/issues"
  },
  "homepage": "https://github.com/yourusername/your-package#readme"
}
```

### 2. Install Essential Dependencies

#### For TypeScript Projects
```bash
# Install TypeScript and build tools
npm install --save-dev typescript tsup @types/node

# Install React dependencies (if building React components)
npm install --save-dev react react-dom @types/react @types/react-dom

# Install testing tools
npm install --save-dev jest @types/jest ts-jest

# Install linting and formatting
npm install --save-dev eslint prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin

# Install utility libraries
npm install clsx
```

#### For CSS/Styling Projects
```bash
# Install Tailwind CSS (if using)
npm install --save-dev tailwindcss postcss autoprefixer

# Install CSS processing tools
npm install --save-dev sass less
```

### 3. TypeScript Configuration (tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": false,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true,
    "declarationDir": "dist",
    "outDir": "dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "tests"]
}
```

### 4. Build Configuration (tsup.config.ts)

```typescript
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  esbuildOptions(options) {
    options.jsx = 'automatic'
  },
  onSuccess: 'npm run build:css',
  treeshake: true,
  minify: true,
})
```

### 5. ESLint Configuration (.eslintrc.js)

```javascript
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  env: {
    node: true,
    es6: true,
  },
}
```

### 6. Prettier Configuration (.prettierrc)

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

---

## 🔨 Building & Testing

### 1. Build Commands

```bash
# Build the package
npm run build

# Build in watch mode (development)
npm run dev

# Clean build directory
npm run clean

# Build before publishing (automatic)
npm run prepublishOnly
```

### 2. Testing Commands

```bash
# Run tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test -- src/components/Button.test.ts
```

### 3. Quality Checks

```bash
# Lint code
npm run lint

# Fix linting issues automatically
npm run lint -- --fix

# Format code
npm run format

# Check for security vulnerabilities
npm audit

# Fix security vulnerabilities
npm audit fix
```

---

## 📤 Publishing to npm

### 1. Prepare for Publishing

```bash
# Ensure you're logged in to npm
npm whoami

# If not logged in, login
npm login

# Check what will be published
npm pack --dry-run

# Build the package
npm run build
```

### 2. Publish Commands

#### First Time Publishing
```bash
# Publish with public access (for scoped packages)
npm publish --access public

# Publish without scope (for regular packages)
npm publish
```

#### Publishing Updates
```bash
# Update version (patch, minor, major)
npm version patch    # 1.0.0 → 1.0.1
npm version minor    # 1.0.1 → 1.1.0
npm version major    # 1.1.0 → 2.0.0

# Publish new version
npm publish
```

### 3. Publishing Scoped Packages

```bash
# Create scoped package name
npm init --scope=@yourusername

# Publish scoped package
npm publish --access public
```

### 4. Unpublishing (if needed)

```bash
# Unpublish specific version (within 72 hours)
npm unpublish @yourusername/package-name@1.0.0

# Unpublish entire package (within 72 hours)
npm unpublish @yourusername/package-name --force
```

---

## 🔄 Maintenance & Updates

### 1. Version Management

```bash
# Check current version
npm version

# Update version automatically
npm version patch    # Bug fixes
npm version minor    # New features
npm version major    # Breaking changes

# Set specific version
npm version 2.1.0
```

### 2. Dependency Updates

```bash
# Check outdated dependencies
npm outdated

# Update dependencies
npm update

# Update specific package
npm update package-name

# Install latest version
npm install package-name@latest
```

### 3. Security Updates

```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities automatically
npm audit fix

# Fix vulnerabilities manually
npm audit fix --force
```

---

## 📚 Best Practices

### 1. Package Naming
- ✅ Use descriptive names: `react-date-picker`, `node-http-client`
- ✅ Use scoped names for personal packages: `@username/package-name`
- ✅ Check name availability: `npm search package-name`
- ❌ Avoid generic names: `utils`, `helper`, `tools`

### 2. File Organization
```
src/
├── index.ts          # Main entry point
├── components/       # Component files
├── utils/           # Utility functions
├── types/           # Type definitions
└── constants/       # Constants
```

### 3. Documentation
- Write clear README.md
- Include usage examples
- Document API changes
- Add TypeScript types
- Include CHANGELOG.md

### 4. Testing
- Write unit tests for all functions
- Test edge cases
- Maintain good test coverage
- Use CI/CD for automated testing

### 5. Publishing Checklist
- [ ] Code is tested and working
- [ ] All dependencies are correct
- [ ] README is updated
- [ ] Version is bumped
- [ ] Build is successful
- [ ] Package is ready for production

---

## 🚨 Troubleshooting

### Common Issues & Solutions

#### 1. Package Name Already Taken
```bash
# Solution: Use scoped package name
npm init --scope=@yourusername
# Result: @yourusername/package-name
```

#### 2. Build Failures
```bash
# Clean and rebuild
npm run clean
npm run build

# Check TypeScript errors
npx tsc --noEmit
```

#### 3. Publishing Errors
```bash
# Check if logged in
npm whoami

# Re-login if needed
npm logout
npm login

# Check package.json validity
npm run prepublishOnly
```

#### 4. TypeScript Issues
```bash
# Check TypeScript configuration
npx tsc --showConfig

# Fix module resolution
# Update tsconfig.json moduleResolution
```

#### 5. Dependency Conflicts
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 📖 Example: Complete Package Setup

### Step-by-Step Example

```bash
# 1. Create project
mkdir my-utility-lib
cd my-utility-lib

# 2. Initialize
npm init -y
git init

# 3. Install dependencies
npm install --save-dev typescript tsup @types/node
npm install lodash

# 4. Create source file
mkdir src
echo 'export const formatDate = (date: Date): string => date.toISOString();' > src/index.ts

# 5. Configure TypeScript
npx tsc --init

# 6. Configure build
echo 'import { defineConfig } from "tsup"; export default defineConfig({ entry: ["src/index.ts"], format: ["cjs", "esm"], dts: true });' > tsup.config.ts

# 7. Update package.json
npm pkg set main="./dist/index.js"
npm pkg set module="./dist/index.mjs"
npm pkg set types="./dist/index.d.ts"
npm pkg set scripts.build="tsup"
npm pkg set scripts.prepublishOnly="npm run build"

# 8. Build and test
npm run build

# 9. Publish
npm login
npm publish --access public
```

---

## 🔗 Useful Resources

- [npm Documentation](https://docs.npmjs.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [tsup Documentation](https://tsup.egoist.dev/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Prettier Options](https://prettier.io/docs/en/options.html)
- [npm Package Guidelines](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)

---

## 📝 License

This guide is provided as-is for educational purposes. Feel free to use and modify as needed.

---

**Happy Publishing! 🎉**

Remember: The key to a successful npm package is good documentation, proper testing, and regular maintenance.
