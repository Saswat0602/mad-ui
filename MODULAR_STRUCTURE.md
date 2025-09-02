# MAD UI Components - Modular Structure

## Overview

MAD UI Components now features a clean, organized modular structure that allows developers to import only the components they need, significantly reducing bundle sizes and improving performance.

## Directory Structure

```
src/
├── index.ts              # Full library entry point
├── core.ts               # Core components entry point
├── modules/              # Organized module exports
│   ├── core.ts          # Core components module
│   ├── forms.ts         # Form components module
│   ├── overlay.ts       # Overlay components module
│   ├── layout.ts        # Layout components module
│   ├── data.ts          # Data display components module
│   ├── feedback.ts      # Feedback components module
│   ├── navigation.ts    # Navigation components module
│   └── media.ts         # Media components module
├── components/           # Component implementations
│   ├── core/            # Core UI components
│   ├── forms/           # Form-related components
│   ├── overlay/         # Overlay components
│   ├── layout/          # Layout components
│   ├── data/            # Data display components
│   ├── feedback/        # Feedback components
│   ├── navigation/      # Navigation components
│   └── media/           # Media components
└── lib/                 # Utilities and helpers
    ├── utils.ts         # Utility functions
    └── colors.ts        # Color system
```

## Import Options

### 1. Full Library (Everything)
```typescript
import { Button, Card, Modal, Form } from 'mad-ui-components'
```
- **Bundle Size**: ~115KB (ESM) / ~122KB (CJS)
- **Use Case**: When you need most or all components
- **Entry Point**: `src/index.ts`

### 2. Core Components Only
```typescript
import { Button, Input, Label, Card } from 'mad-ui-components/core'
```
- **Bundle Size**: ~26KB (ESM) / ~28KB (CJS)
- **Use Case**: When you only need essential UI components
- **Entry Point**: `src/core.ts`

### 3. Module-Specific Imports
```typescript
// Forms only
import { Form, Calendar, DatePicker } from 'mad-ui-components/forms'

// Layout only
import { Layout, Navbar, Sidebar } from 'mad-ui-components/layout'

// Overlay only
import { Modal, Dialog, Popover } from 'mad-ui-components/overlay'

// Data only
import { Table, DataTable, Chart } from 'mad-ui-components/data'

// Navigation only
import { NavigationMenu, Menubar, Command } from 'mad-ui-components/navigation'

// Media only
import { Avatar, Badge, TypographyH1 } from 'mad-ui-components/media'
```

### 4. Utilities Only
```typescript
import { cn } from 'mad-ui-components/utils'
import { componentColors } from 'mad-ui-components/colors'
```

## Module Breakdown

### Core Module (`/core`)
Essential UI building blocks:
- Button, Input, Label, Card
- Checkbox, Radio, Select, Switch
- Progress, Slider, Rating, Skeleton, Textarea

### Forms Module (`/forms`)
Form-related components:
- Form, FormField, FormItem, FormLabel
- Calendar, DatePicker, TimePicker
- Accordion, Tabs, Breadcrumbs
- RadioGroup, InputOTP

### Layout Module (`/layout`)
Layout and structure components:
- Layout, Navbar, Sidebar
- Modal, Popover, Tooltip
- Sheet, Drawer, Resizable, ScrollArea

### Overlay Module (`/overlay`)
Overlay and interactive components:
- Dialog, AlertDialog, HoverCard
- Collapsible, ContextMenu, DropdownMenu
- Toggle, Separator

### Data Module (`/data`)
Data display components:
- Table, DataTable, Chart

### Feedback Module (`/feedback`)
User feedback components:
- Alert

### Navigation Module (`/navigation`)
Navigation components:
- NavigationMenu, Menubar
- Command, Combobox, Pagination

### Media Module (`/media`)
Media and content components:
- Avatar, Badge, AspectRatio, Carousel
- Typography components (H1-H6, P, Blockquote, etc.)

## Bundle Size Comparison

| Import Method | ESM Size | CJS Size | Use Case |
|---------------|----------|----------|----------|
| Full Library | ~115KB | ~122KB | Complete applications |
| Core Only | ~26KB | ~28KB | Minimal UI needs |
| Forms | ~33KB | ~35KB | Form-heavy applications |
| Layout | ~33KB | ~35KB | Layout-focused apps |
| Overlay | ~3.6KB | ~3.9KB | Modal/dialog heavy |
| Data | ~12KB | ~14KB | Data display apps |
| Navigation | ~5.3KB | ~5.7KB | Navigation heavy |
| Media | ~6.0KB | ~6.6KB | Content heavy apps |
| Utils | ~539B | ~559B | Utilities only |
| Colors | ~3.0KB | ~3.1KB | Color system only |

## Best Practices

### 1. Start with Core
```typescript
// Start with essential components
import { Button, Input, Label } from 'mad-ui-components/core'

// Add specific modules as needed
import { Form, Calendar } from 'mad-ui-components/forms'
```

### 2. Use Tree Shaking
```typescript
// This will only include Button in your bundle
import { Button } from 'mad-ui-components/core'
```

### 3. Combine Related Modules
```typescript
// For form-heavy applications
import { Form, Calendar, DatePicker } from 'mad-ui-components/forms'
import { Modal, Dialog } from 'mad-ui-components/layout'
```

### 4. Avoid Full Library for Small Apps
```typescript
// ❌ Don't do this for small apps
import * from 'mad-ui-components'

// ✅ Do this instead
import { Button, Input } from 'mad-ui-components/core'
```

## Migration Guide

### From Previous Version
If you were using the previous version with individual component imports:

```typescript
// Old way (no longer available)
import { Button } from 'mad-ui-components/button'

// New way
import { Button } from 'mad-ui-components/core'
```

### From Full Library to Modular
```typescript
// Old way
import { Button, Form, Modal } from 'mad-ui-components'

// New way - more efficient
import { Button } from 'mad-ui-components/core'
import { Form } from 'mad-ui-components/forms'
import { Modal } from 'mad-ui-components/layout'
```

## Performance Benefits

1. **Smaller Bundle Sizes**: Import only what you need
2. **Better Tree Shaking**: Modern bundlers can optimize better
3. **Faster Build Times**: Less code to process
4. **Improved Caching**: Smaller chunks are cached more efficiently
5. **Better Code Splitting**: Easier to implement lazy loading

## Examples

### Basic App
```typescript
import { Button, Input, Label } from 'mad-ui-components/core'
import { cn } from 'mad-ui-components/utils'
```

### Form-Heavy App
```typescript
import { Button, Input, Label } from 'mad-ui-components/core'
import { Form, Calendar, DatePicker, Tabs } from 'mad-ui-components/forms'
import { Modal, Dialog } from 'mad-ui-components/layout'
```

### Dashboard App
```typescript
import { Button, Card, Badge } from 'mad-ui-components/core'
import { Table, Chart } from 'mad-ui-components/data'
import { Layout, Sidebar, Navbar } from 'mad-ui-components/layout'
import { NavigationMenu, Command } from 'mad-ui-components/navigation'
```

This modular structure provides the flexibility to build efficient, performant applications while maintaining the full power of the MAD UI Components library.
