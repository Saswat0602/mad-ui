# Bundle Size Analysis & Import Options

## 📊 Complete Bundle Analysis

### **Full Library** (Complete Design System)
- **Unpacked**: 144 KB (CJS), 136 KB (ESM)
- **Gzipped**: 30.2 KB (CJS), 29.8 KB (ESM)
- **Use Case**: Complete design system, prototyping, when you need most components

### **Core Only** (Essential Components)
- **Unpacked**: 56 KB (CJS), 52 KB (ESM)  
- **Gzipped**: 12.5 KB (CJS), 12.2 KB (ESM)
- **Use Case**: Basic UI needs, minimal design system

### **Individual Components** (Tree-Shakable)
- **Button**: 4.0 KB (CJS), 3.4 KB (ESM) → **Gzipped**: ~3.1 KB
- **Card**: 3.2 KB (CJS), 2.7 KB (ESM) → **Gzipped**: ~2.5 KB
- **Badge**: 831 B (CJS), 800 B (ESM) → **Gzipped**: ~0.8 KB
- **Avatar**: 1.3 KB (CJS), 1.1 KB (ESM) → **Gzipped**: ~1.0 KB
- **Dialog**: 2.0 KB (CJS), 1.7 KB (ESM) → **Gzipped**: ~1.6 KB
- **Utils**: 3.2 KB (CJS), 3.1 KB (ESM) → **Gzipped**: ~1.2 KB

## 🚀 Import Options

### 1. **Full Library** (Largest)
```tsx
import { Button, Card, Badge, Dialog } from 'mad-ui-components'
// 30.2 KB gzipped
```

### 2. **Core Only** (Medium)
```tsx
import { Button, Input, Label } from 'mad-ui-components/core'
// 12.5 KB gzipped
```

### 3. **Individual Components** (Smallest)
```tsx
import { Button } from 'mad-ui-components/button'      // 3.1 KB
import { Card } from 'mad-ui-components/card'          // 2.5 KB
import { Badge } from 'mad-ui-components/badge'        // 0.8 KB
import { cn } from 'mad-ui-components/utils'           // 1.2 KB
// Total: ~7.6 KB gzipped (vs 30.2 KB full library)
```

## 💡 Performance Impact

- **Full Library**: 30.2 KB → Good for design systems
- **Core Only**: 12.5 KB → 59% smaller than full library
- **Individual**: 7.6 KB → 75% smaller than full library

## 🎯 Recommendations

- **Production Apps**: Use individual component imports
- **Design Systems**: Use full library
- **Prototyping**: Start with core, add more as needed
- **Performance Critical**: Individual components + tree shaking
