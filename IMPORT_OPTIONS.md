# Import Options

This library provides multiple import options to optimize bundle size based on your needs.

## 🚀 Import Options

### 1. **Full Library** (Largest Bundle)
Import everything from the main package:
```tsx
import { Button, Card, Badge, Dialog } from 'mad-ui-components'
```
- **Bundle Size**: ~147 KB (unpacked), ~30 KB (gzipped)
- **Use Case**: When you need most components or building a design system

### 2. **Core Components Only** (Medium Bundle)
Import only essential components:
```tsx
import { Button, Input, Label } from 'mad-ui-components/core'
```
- **Bundle Size**: ~54 KB (unpacked), ~12 KB (gzipped)
- **Use Case**: When you only need basic UI components

### 3. **Components Only** (Medium Bundle)
Import all components without utilities:
```tsx
import { Button, Card, Badge } from 'mad-ui-components/components'
```
- **Bundle Size**: ~130 KB (unpacked), ~28 KB (gzipped)
- **Use Case**: When you need components but have your own utilities

### 4. **Individual Components** (Smallest Bundle)
Import only the components you need:
```tsx
import { Button } from 'mad-ui-components/button'
import { Card } from 'mad-ui-components/card'
import { Badge } from 'mad-ui-components/badge'
import { Dialog } from 'mad-ui-components/dialog'
```
- **Bundle Size**: Only what you import (typically 2-5 KB per component)
- **Use Case**: When you need just a few specific components

### 5. **Utilities Only**
Import only utility functions:
```tsx
import { cn, componentColors } from 'mad-ui-components/utils'
```
- **Bundle Size**: ~5 KB (unpacked), ~1 KB (gzipped)
- **Use Case**: When you only need utility functions

## 📊 Bundle Size Comparison

| Import Method | Unpacked | Gzipped | Use Case |
|---------------|----------|---------|----------|
| **Full Library** | 144 KB | 30.2 KB | Complete design system |
| **Core Only** | 56 KB | 12.5 KB | Basic UI needs |
| **Components Only** | 136 KB | 29.8 KB | Components without utils |
| **Individual** | 1-4 KB each | 0.8-3.1 KB each | Minimal bundle |
| **Utils Only** | 3.2 KB | 1.2 KB | Just utilities |

## 🎯 Recommended Usage

### For **Production Apps** (Minimal Bundle):
```tsx
// Import only what you need
import { Button } from 'mad-ui-components/button'
import { Card } from 'mad-ui-components/card'
import { cn } from 'mad-ui-components/utils'
```

### For **Design Systems** (Full Bundle):
```tsx
// Import everything
import { Button, Card, Badge, Dialog, /* ... */ } from 'mad-ui-components'
```

### For **Prototyping** (Quick Start):
```tsx
// Start with core, add more as needed
import { Button, Input, Label } from 'mad-ui-components/core'
```

## 🔧 Tree Shaking

All import methods support tree shaking. Even when importing from the full library, unused components will be removed from your final bundle if your bundler supports it.

## 📦 Package Structure

```
mad-ui-components/
├── index.js          # Full library (147 KB)
├── core.js           # Core components (54 KB)
├── components.js     # All components (130 KB)
├── button.js         # Button only (~2 KB)
├── card.js           # Card only (~3 KB)
├── badge.js          # Badge only (~1 KB)
├── dialog.js         # Dialog only (~4 KB)
├── utils.js          # Utilities only (~5 KB)
└── styles.css        # CSS (3 KB)
```

## 🚀 Performance Tips

1. **Start Small**: Begin with individual component imports
2. **Bundle Analysis**: Use tools like `webpack-bundle-analyzer` to see actual impact
3. **Lazy Loading**: Import components only when needed
4. **Tree Shaking**: Ensure your bundler supports tree shaking

## 💡 Examples

### Minimal Button Implementation:
```tsx
import { Button } from 'mad-ui-components/button'
import { cn } from 'mad-ui-components/utils'

// Only ~3 KB total in your bundle
```

### Full Design System:
```tsx
import { 
  Button, Card, Badge, Dialog, 
  DropdownMenu, Tooltip, Avatar 
} from 'mad-ui-components'

// ~30 KB gzipped, but you get everything
```

Choose the import method that best fits your project's needs! 🎯
