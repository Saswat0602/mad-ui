# Next.js Integration Example

## Quick Start

### 1. Install the package
```bash
npm install mad-ui-components
```

### 2. Copy components to your project
```bash
# Copy individual components
npx mad-ui-components copy button input card

# This creates:
# components/ui/mad-ui/button.tsx
# components/ui/mad-ui/input.tsx
# components/ui/mad-ui/card.tsx
```

### 3. Use in your components
```tsx
// app/page.tsx
import { Button } from '@/components/ui/mad-ui/button';
import { Input } from '@/components/ui/mad-ui/input';
import { Card } from '@/components/ui/mad-ui/card';

export default function HomePage() {
  return (
    <div className="p-8">
      <Card className="max-w-md mx-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Welcome</h2>
          <div className="space-y-4">
            <Input placeholder="Enter your name" />
            <Button className="w-full">Submit</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
```

## Advanced Usage

### Copy Multiple Components at Once
```bash
# Copy all core components
npx mad-ui-components copy button input label checkbox radio select textarea

# Copy form components
npx mad-ui-components copy accordion tabs date-picker timepicker

# Copy layout components
npx mad-ui-components copy navbar sidebar modal drawer
```

### Import from Package (Alternative)
If you prefer not to copy locally:

```tsx
// Import individual components (smaller bundle)
import { Button } from 'mad-ui-components/button';
import { Input } from 'mad-ui-components/input';

// Import from categories
import { Button, Input, Label } from 'mad-ui-components/core';
import { Accordion, Tabs } from 'mad-ui-components/forms';
```

## Project Structure After Copying

```
your-nextjs-project/
├── components/
│   └── ui/
│       └── mad-ui/
│           ├── button.tsx          # Copied from package
│           ├── input.tsx           # Copied from package
│           ├── card.tsx            # Copied from package
│           ├── icons.tsx           # Icons dependency
│           └── utils.ts            # Utils dependency
├── app/
│   └── page.tsx
└── package.json
```

## Customization

After copying, you can modify the components directly:

```tsx
// components/ui/mad-ui/button.tsx
// You can now edit this file to match your design system

export interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  children: React.ReactNode;
  // Add your custom props here
  loading?: boolean;
  icon?: React.ReactNode;
}
```

## Benefits of Local Copy

1. **Full Control**: Modify components to match your design system
2. **No Bundle Bloat**: Only include what you actually use
3. **Easy Debugging**: Source code is right in your project
4. **Version Control**: Track changes to components in your git history
5. **Customization**: Add new variants, props, or styling

## Troubleshooting

### Component not found
```bash
# List all available components
npx mad-ui-components copy --help
```

### Missing dependencies
If you get import errors, make sure to copy dependencies:
```bash
# Copy icons and utils if needed
npx mad-ui-components copy icons utils
```

### TypeScript errors
Make sure your `tsconfig.json` includes the components directory:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

## Performance Comparison

| Method | Bundle Size | Customization | Maintenance |
|--------|-------------|---------------|-------------|
| **Local Copy** | 0KB (only what you use) | Full control | Your responsibility |
| **Individual Import** | 2-15KB per component | Limited | Package updates |
| **Category Import** | 20-50KB per category | Limited | Package updates |
| **Full Import** | 120KB+ | Limited | Package updates |

## Best Practices

1. **Start Small**: Copy only the components you need initially
2. **Group Related**: Copy components from the same category together
3. **Version Control**: Commit your copied components to git
4. **Update Strategy**: Periodically check for package updates and re-copy if needed
5. **Documentation**: Keep notes on any customizations you make
