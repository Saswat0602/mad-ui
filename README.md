# 🎨 mad-ui-components

A comprehensive, customizable React UI component library built with TypeScript and Tailwind CSS. Features 20+ components with extensive customization options, multiple design variants, and smooth animations.

## ✨ Features

- 🚀 **20+ Components** - From basic inputs to complex data displays
- 🎨 **Multiple Design Styles** - Classic, Modern, Minimal, Card, Grid variants
- 🌈 **Full Customization** - Colors, sizes, animations, and behavior
- 📱 **Responsive Design** - Mobile-first approach with touch-friendly interactions
- 🌙 **Dark Mode Support** - Built-in dark theme compatibility
- ⚡ **TypeScript First** - Full type safety and IntelliSense support
- 🎭 **Smooth Animations** - Fade, Slide, Scale, Bounce transitions
- 🎯 **No Dependencies** - Pure React implementation, no external libraries
- 🔧 **Highly Configurable** - Extensive prop-based customization
- 📦 **Tree Shakeable** - Import only what you need

## 🚀 Quick Start

### Installation

```bash
npm install mad-ui-components
```

### Usage Options

#### **Full Library** (All Components - 188KB)
```tsx
import { Button, Card, Input, Layout, Navbar, Sidebar } from 'mad-ui-components';
```

#### **Core Library** (Essential Components Only - 120KB) ⚡
```tsx
import { Button, Card, Input } from 'mad-ui-components/core';
```

#### **Styles** (Required for both)
```tsx
import 'mad-ui-components/styles';
```

### Bundle Size Comparison

| Option | Size | Components | Use Case |
|--------|------|------------|----------|
| **Full Library** | 188KB | All 23+ components | Complete applications, prototyping |
| **Core Library** | 120KB | Essential 16 components | Production apps, bundle size critical |
| **Styles** | 4KB | CSS only | When importing styles separately |

**Note**: The core library excludes Calendar, TimePicker, Navbar, Sidebar, and Layout components to reduce bundle size by 36%.

### Basic Usage

```tsx
import { Button, Card, Input } from 'mad-ui-components';

function App() {
  return (
    <div className="p-6">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
          <CardDescription>Sign in to your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Button className="w-full">Sign In</Button>
        </CardContent>
      </Card>
    </div>
  );
}
```

## 📚 Component Library

### 🎯 Basic Components

| Component | Description | Key Features | Variants | Sizes |
|-----------|-------------|--------------|----------|-------|
| **Button** | Interactive button with multiple styles | Loading states, icons, colors | 8 variants | 5 sizes |
| **Input** | Text input with validation | Labels, errors, icons | 4 variants | 3 sizes |
| **Label** | Form label component | Required indicators | 2 variants | 3 sizes |
| **Textarea** | Multi-line text input | Auto-resize, validation | 4 variants | 3 sizes |

### 🎨 Layout Components

| Component | Description | Key Features | Variants | Sizes |
|-----------|-------------|--------------|----------|-------|
| **Card** | Container with header, content, footer | Flexible layout, shadows | 4 variants | 3 sizes |
| **Modal** | Overlay dialog component | Backdrop, animations | 3 variants | 4 sizes |
| **Popover** | Floating content container | Positioning, arrows | 4 variants | 3 sizes |

### 🔘 Form Components

| Component | Description | Key Features | Variants | Sizes |
|-----------|-------------|--------------|----------|-------|
| **Checkbox** | Checkbox input | Indeterminate state, labels | 4 variants | 3 sizes |
| **Radio** | Radio button group | Group selection, labels | 4 variants | 3 sizes |
| **Switch** | Toggle switch | Labels, icons | 4 variants | 3 sizes |
| **Select** | Dropdown selection | Options, search, multi-select | 4 variants | 3 sizes |

### 📅 Date & Time Components

| Component | Description | Key Features | Variants | Sizes |
|-----------|-------------|--------------|----------|-------|
| **Calendar** | Date picker component | Multiple designs, animations | 5 designs | 3 sizes |
| **TimePicker** | Time selection component | 12/24h format, AM/PM | 4 designs | 3 sizes |

### 📊 Data Display Components

| Component | Description | Key Features | Variants | Sizes |
|-----------|-------------|--------------|----------|-------|
| **Table** | Data table with sorting | Pagination, selection, sorting | 4 variants | 3 sizes |
| **Progress** | Progress indicator | Animated, striped, labels | 4 variants | 3 sizes |
| **Rating** | Star rating component | Half stars, custom icons | 4 variants | 3 sizes |
| **Skeleton** | Loading placeholder | Multiple shapes, animations | 4 variants | 3 sizes |

### 🚨 Feedback Components

| Component | Description | Key Features | Variants | Sizes |
|-----------|-------------|--------------|----------|-------|
| **Alert** | Status message display | Types, actions, closable | 4 variants | 3 sizes |
| **Breadcrumbs** | Navigation breadcrumbs | Collapsible, icons | 4 variants | 3 sizes |

## 🎨 Design System

### Variants

| Variant | Description | Use Case |
|---------|-------------|----------|
| `default` | Standard appearance | General use |
| `filled` | Solid background | Primary actions |
| `outlined` | Border with transparent background | Secondary actions |
| `minimal` | Minimal styling | Subtle interactions |

### Sizes

| Size | Height | Padding | Font Size | Use Case |
|------|--------|---------|-----------|----------|
| `xs` | 24px | 6px 12px | 12px | Compact spaces |
| `sm` | 32px | 8px 16px | 14px | Forms, lists |
| `md` | 40px | 12px 20px | 16px | Standard buttons |
| `lg` | 48px | 16px 24px | 18px | Prominent actions |
| `xl` | 56px | 20px 28px | 20px | Hero sections |

### Animations

| Animation | Description | Duration | Use Case |
|-----------|-------------|----------|----------|
| `fade` | Opacity transition | 300ms | Smooth appearance |
| `slide` | Slide from edge | 300ms | Menu transitions |
| `scale` | Scale transform | 300ms | Button interactions |
| `bounce` | Bounce effect | 300ms | Playful interactions |
| `none` | No animation | 0ms | Performance critical |

## 🎯 Component Props Reference

### Button Component

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"primary" \| "secondary" \| "outline" \| "ghost" \| "success" \| "warning" \| "error" \| "info"` | `"primary"` | Button style variant |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Button size |
| `loading` | `boolean` | `false` | Show loading spinner |
| `disabled` | `boolean` | `false` | Disable button |
| `fullWidth` | `boolean` | `false` | Full width button |
| `leftIcon` | `ReactNode` | `undefined` | Icon before text |
| `rightIcon` | `ReactNode` | `undefined` | Icon after text |
| `color` | `string` | `undefined` | Custom text color |
| `backgroundColor` | `string` | `undefined` | Custom background color |
| `borderColor` | `string` | `undefined` | Custom border color |
| `borderRadius` | `string \| number` | `undefined` | Custom border radius |
| `shadow` | `"none" \| "sm" \| "md" \| "lg" \| "xl"` | `"none"` | Shadow size |

### Input Component

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "filled" \| "outlined" \| "minimal"` | `"default"` | Input style variant |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Input size |
| `label` | `string` | `undefined` | Input label |
| `error` | `string` | `undefined` | Error message |
| `helperText` | `string` | `undefined` | Helper text below input |
| `success` | `boolean` | `false` | Show success state |
| `leftIcon` | `ReactNode` | `undefined` | Icon before input |
| `rightIcon` | `ReactNode` | `undefined` | Icon after input |
| `fullWidth` | `boolean` | `true` | Full width input |
| `color` | `string` | `undefined` | Custom text color |
| `backgroundColor` | `string` | `undefined` | Custom background color |
| `borderColor` | `string` | `undefined` | Custom border color |
| `focusColor` | `string` | `undefined` | Custom focus color |
| `borderRadius` | `string \| number` | `undefined` | Custom border radius |
| `shadow` | `"none" \| "sm" \| "md" \| "lg" \| "xl"` | `"none"` | Shadow size |

### Calendar Component

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `design` | `"classic" \| "modern" \| "minimal" \| "card" \| "grid"` | `"classic"` | Calendar design style |
| `animation` | `"fade" \| "slide" \| "scale" \| "bounce" \| "none"` | `"fade"` | Animation type |
| `variant` | `"default" \| "filled" \| "outlined" \| "minimal"` | `"default"` | Calendar style variant |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Calendar size |
| `showHeader` | `boolean` | `true` | Show month/year header |
| `showFooter` | `boolean` | `false` | Show footer with today button |
| `showMonthNavigation` | `boolean` | `true` | Show month navigation |
| `showYearNavigation` | `boolean` | `false` | Show year navigation |
| `highlightWeekends` | `boolean` | `false` | Highlight weekend days |
| `highlightHolidays` | `boolean` | `false` | Highlight holiday dates |
| `firstDayOfWeek` | `0 \| 1` | `0` | 0=Sunday, 1=Monday |
| `minDate` | `Date` | `undefined` | Minimum selectable date |
| `maxDate` | `Date` | `undefined` | Maximum selectable date |
| `closeOnSelect` | `boolean` | `true` | Close calendar on date selection |

### TimePicker Component

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `design` | `"classic" \| "modern" \| "minimal" \| "analog"` | `"classic"` | TimePicker design style |
| `animation` | `"fade" \| "slide" \| "scale" \| "bounce" \| "none"` | `"fade"` | Animation type |
| `variant` | `"default" \| "filled" \| "outlined" \| "minimal"` | `"default"` | TimePicker style variant |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | TimePicker size |
| `format` | `"12h" \| "24h"` | `"12h"` | Time format |
| `showSeconds` | `boolean` | `false` | Show seconds selection |
| `showAMPM` | `boolean` | `true` | Show AM/PM toggle |
| `step` | `number` | `1` | Minute increment step |
| `minTime` | `string` | `undefined` | Minimum time (HH:MM) |
| `maxTime` | `string` | `undefined` | Maximum time (HH:MM) |
| `showHeader` | `boolean` | `true` | Show header |
| `showFooter` | `boolean` | `false` | Show footer with now button |
| `closeOnSelect` | `boolean` | `true` | Close on time selection |

### Card Component

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "filled" \| "outlined" \| "minimal"` | `"default"` | Card style variant |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Card size |
| `fullWidth` | `boolean` | `false` | Full width card |
| `padding` | `string` | `undefined` | Custom padding |
| `margin` | `string` | `undefined` | Custom margin |
| `borderRadius` | `string \| number` | `undefined` | Custom border radius |
| `shadow` | `"none" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Shadow size |
| `color` | `string` | `undefined` | Custom text color |
| `backgroundColor` | `string` | `undefined` | Custom background color |
| `borderColor` | `string` | `undefined` | Custom border color |

### Table Component

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "filled" \| "outlined" \| "minimal"` | `"default"` | Table style variant |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Table size |
| `data` | `any[]` | `[]` | Table data array |
| `columns` | `TableColumn[]` | `[]` | Column definitions |
| `sortable` | `boolean` | `false` | Enable sorting |
| `selectable` | `boolean` | `false` | Enable row selection |
| `hoverable` | `boolean` | `true` | Row hover effects |
| `striped` | `boolean` | `false` | Alternating row colors |
| `bordered` | `boolean` | `false` | Show table borders |
| `pagination` | `PaginationProps` | `undefined` | Pagination configuration |
| `loading` | `boolean` | `false` | Show loading state |
| `emptyMessage` | `string` | `"No data available"` | Empty state message |

## 🎨 Color System

The library includes a comprehensive color system with CSS variables for consistent theming:

```css
:root {
  /* Background Colors */
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --bg-tertiary: #f1f5f9;
  --bg-card: #ffffff;
  
  /* Text Colors */
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --text-muted: #64748b;
  
  /* Accent Colors */
  --accent-primary: #3b82f6;
  --accent-secondary: #8b5cf6;
  --accent-success: #10b981;
  --accent-warning: #f59e0b;
  --accent-error: #ef4444;
  
  /* Border Colors */
  --border-primary: #e2e8f0;
  --border-secondary: #cbd5e0;
  
  /* Shadow Colors */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}
```

## 🚀 Advanced Usage

### Custom Styling

```tsx
<Button
  color="#ffffff"
  backgroundColor="#1f2937"
  borderColor="#374151"
  borderRadius="12px"
  shadow="xl"
  className="hover:scale-105 transition-transform"
>
  Custom Button
</Button>
```

### Component Composition

```tsx
<Card variant="outlined" className="max-w-lg">
  <CardHeader>
    <CardTitle>User Profile</CardTitle>
    <CardDescription>Manage your account settings</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="grid grid-cols-2 gap-4">
      <Input label="First Name" placeholder="John" />
      <Input label="Last Name" placeholder="Doe" />
    </div>
    <Input label="Email" type="email" placeholder="john@example.com" />
    <Textarea label="Bio" placeholder="Tell us about yourself" rows={3} />
  </CardContent>
  <CardFooter className="flex justify-end space-x-2">
    <Button variant="outline">Cancel</Button>
    <Button>Save Changes</Button>
  </CardFooter>
</Card>
```

### Form Validation

```tsx
const [errors, setErrors] = useState({});

<Input
  label="Email Address"
  type="email"
  error={errors.email}
  helperText="We'll never share your email"
  success={!errors.email && email.length > 0}
/>
```

### Date and Time Selection

```tsx
<div className="grid grid-cols-2 gap-4">
  <Calendar
    design="modern"
    animation="bounce"
    highlightWeekends={true}
    showYearNavigation={true}
    variant="filled"
    size="lg"
  />
  <TimePicker
    design="analog"
    format="12h"
    showSeconds={true}
    showAMPM={true}
    step={15}
    animation="scale"
  />
</div>
```

## 🧪 Development

### Available Scripts

```bash
# Build the library
npm run build

# Development mode with watch
npm run dev

# Clean build artifacts
npm run clean

# Build CSS
npm run build:css

# Open demos
npm run demo                    # Basic demo
npm run showcase               # Components showcase
npm run showcase-calendar      # Calendar & TimePicker showcase

# Publish to npm
npm run prepublishOnly         # Build before publish
npm publish
```

### Project Structure

```
src/
├── components/           # React components
│   ├── button.tsx      # Button component
│   ├── input.tsx       # Input component
│   ├── calendar.tsx    # Calendar component
│   ├── timepicker.tsx  # TimePicker component
│   └── ...             # Other components
├── lib/                 # Utility functions
│   ├── utils.ts        # Common utilities
│   └── colors.ts       # Color system
├── styles.css          # Global styles
└── index.ts            # Main exports
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 🆘 Support

- 📖 [Documentation](https://github.com/saswat0602/mad-ui)
- 🐛 [Report Issues](https://github.com/saswat0602/mad-ui/issues)
- 💡 [Request Features](https://github.com/saswat0602/mad-ui/issues)
- ⭐ [Star the Project](https://github.com/saswat0602/mad-ui)

---

Built with ❤️ by [Saswat Ranjan Mohanty](https://github.com/saswat0602)
