# 🎨 mad-ui-components

A comprehensive, customizable React UI component library built with TypeScript and Tailwind CSS. Features 57+ components with extensive customization options, multiple design variants, and smooth animations.

## ✨ Features

- 🚀 **57+ Components** - From basic inputs to complex data displays
- 🎨 **Multiple Design Styles** - Classic, Modern, Minimal, Card, Grid variants
- 🌈 **Full Customization** - Colors, sizes, animations, and behavior
- 📱 **Responsive Design** - Mobile-first approach with touch-friendly interactions
- 🌙 **Dark Mode Support** - Built-in dark theme compatibility with CSS variables
- ⚡ **TypeScript First** - Full type safety and IntelliSense support
- 🎭 **Smooth Animations** - Fade, Slide, Scale, Bounce transitions
- 🔧 **Highly Configurable** - Extensive prop-based customization
- 📦 **Modular & Tree Shakeable** - Import full library, core bundle, feature modules, or individual components

## 🚀 Quick Start

### Installation

```bash
npm install mad-ui-components
```

### Import Options

#### **Full Library** (All Components)
```tsx
import { Button, Card, Input, Layout, Navbar, Sidebar } from 'mad-ui-components';
```

#### **Core Bundle** (Essential Components Only)
```tsx
import { Button, Card, Input } from 'mad-ui-components/core';
```

#### **Feature Modules** (Efficient imports by category)
```tsx
// Forms
import { Form, Calendar, DatePicker, Tabs } from 'mad-ui-components/forms'

// Layout
import { Layout, Navbar, Sidebar, Modal, Popover } from 'mad-ui-components/layout'

// Overlay
import { Dialog, AlertDialog, HoverCard } from 'mad-ui-components/overlay'

// Data
import { Table, DataTable, Chart } from 'mad-ui-components/data'

// Navigation
import { NavigationMenu, Menubar, Command, Combobox, Pagination } from 'mad-ui-components/navigation'

// Media
import { Avatar, Badge, AspectRatio, Carousel } from 'mad-ui-components/media'
```

#### **Individual Components** (Maximum tree-shaking)
```tsx
// Core
import { Button } from 'mad-ui-components/button'
import { Input } from 'mad-ui-components/input'
import { Label } from 'mad-ui-components/label'
import { Card } from 'mad-ui-components/card'
import { Checkbox } from 'mad-ui-components/checkbox'
import { Radio } from 'mad-ui-components/radio'
import { Select } from 'mad-ui-components/select'
import { Switch } from 'mad-ui-components/switch'
import { Progress } from 'mad-ui-components/progress'
import { Slider } from 'mad-ui-components/slider'
import { Rating } from 'mad-ui-components/rating'
import { Skeleton } from 'mad-ui-components/skeleton'
import { Textarea } from 'mad-ui-components/textarea'

// Forms
import { Form } from 'mad-ui-components/form'
import { Calendar } from 'mad-ui-components/calendar'
import { DatePicker } from 'mad-ui-components/date-picker'
import { TimePicker } from 'mad-ui-components/timepicker'
import { Accordion } from 'mad-ui-components/accordion'
import { Breadcrumbs } from 'mad-ui-components/breadcrumbs'
import { InputOTP } from 'mad-ui-components/input-otp'
import { Tabs } from 'mad-ui-components/tabs'
import { RadioGroup } from 'mad-ui-components/radio-group'

// Layout
import { Layout } from 'mad-ui-components/layout-component'
import { Navbar } from 'mad-ui-components/navbar'
import { Sidebar } from 'mad-ui-components/sidebar'
import { Modal } from 'mad-ui-components/modal'
import { Popover } from 'mad-ui-components/popover'
import { Tooltip } from 'mad-ui-components/tooltip'
import { Sheet } from 'mad-ui-components/sheet'
import { Drawer } from 'mad-ui-components/drawer'
import { Resizable } from 'mad-ui-components/resizable'
import { ScrollArea } from 'mad-ui-components/scroll-area'

// Overlay
import { Dialog } from 'mad-ui-components/dialog'
import { AlertDialog } from 'mad-ui-components/alert-dialog'
import { HoverCard } from 'mad-ui-components/hover-card'
import { Collapsible } from 'mad-ui-components/collapsible'
import { ContextMenu } from 'mad-ui-components/context-menu'
import { DropdownMenu } from 'mad-ui-components/dropdown-menu'
import { Toggle } from 'mad-ui-components/toggle'
import { Separator } from 'mad-ui-components/separator'

// Data
import { Table } from 'mad-ui-components/table'
import { DataTable } from 'mad-ui-components/data-table'
import { Chart } from 'mad-ui-components/chart'

// Feedback
import { Alert } from 'mad-ui-components/alert'
import { Toast } from 'mad-ui-components/toast'
import { Sonner } from 'mad-ui-components/sonner'

// Navigation
import { NavigationMenu } from 'mad-ui-components/navigation-menu'
import { Menubar } from 'mad-ui-components/menubar'
import { Command } from 'mad-ui-components/command'
import { Combobox } from 'mad-ui-components/combobox'
import { Pagination } from 'mad-ui-components/pagination'

// Media
import { Avatar } from 'mad-ui-components/avatar'
import { Badge } from 'mad-ui-components/badge'
import { AspectRatio } from 'mad-ui-components/aspect-ratio'
import { Carousel } from 'mad-ui-components/carousel'
import { TypographyH1, TypographyP } from 'mad-ui-components/typography'
```

### Bundle Size Comparison

| Option | Size | Components | Use Case |
|--------|------|------------|----------|
| **Full Library** | ~115KB ESM | All 57+ components | Complete applications, prototyping |
| **Core Bundle** | ~26KB ESM | Essential components | Production apps, bundle size critical |
| **Feature Modules** | Varies | Category-specific | When you need specific functionality |
| **Individual Components** | Minimal | Single component | Maximum tree-shaking, minimal payload |

**Note**: See `MODULAR_STRUCTURE.md` for detailed bundle size breakdown.

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

### 🎯 Core Components

| Component | Description | Key Features | Variants | Sizes |
|-----------|-------------|--------------|----------|-------|
| **Button** | Interactive button with multiple styles | Loading states, icons, colors | 8 variants | 5 sizes |
| **Input** | Text input with validation | Labels, errors, icons | 4 variants | 3 sizes |
| **Label** | Form label component | Required indicators | 2 variants | 3 sizes |
| **Textarea** | Multi-line text input | Auto-resize, validation | 4 variants | 3 sizes |
| **Card** | Container with header, content, footer | Flexible layout, shadows | 4 variants | 3 sizes |
| **Checkbox** | Checkbox input | Indeterminate state, labels | 4 variants | 3 sizes |
| **Radio** | Radio button group | Group selection, labels | 4 variants | 3 sizes |
| **Select** | Dropdown selection | Options, search, multi-select | 4 variants | 3 sizes |
| **Switch** | Toggle switch | Labels, icons | 4 variants | 3 sizes |
| **Progress** | Progress indicator | Animated, striped, labels | 4 variants | 3 sizes |
| **Slider** | Range slider | Min/max, steps, labels | 4 variants | 3 sizes |
| **Rating** | Star rating component | Half stars, custom icons | 4 variants | 3 sizes |
| **Skeleton** | Loading placeholder | Multiple shapes, animations | 4 variants | 3 sizes |

### 🎨 Layout Components

| Component | Description | Key Features | Variants | Sizes |
|-----------|-------------|--------------|----------|-------|
| **Layout** | Main layout container | Responsive, sidebar support | 3 variants | 3 sizes |
| **Navbar** | Top navigation bar | Responsive, mobile menu | 4 variants | 3 sizes |
| **Sidebar** | Side navigation | Collapsible, nested items | 4 variants | 3 sizes |
| **Modal** | Overlay dialog component | Backdrop, animations | 3 variants | 4 sizes |
| **Popover** | Floating content container | Positioning, arrows | 4 variants | 3 sizes |
| **Tooltip** | Hover information | Positioning, themes | 4 variants | 3 sizes |
| **Sheet** | Slide-out panel | Multiple positions, animations | 4 variants | 3 sizes |
| **Drawer** | Drawer component | Multiple positions, overlay | 4 variants | 3 sizes |
| **Resizable** | Resizable panels | Multiple handles, constraints | 3 variants | 3 sizes |
| **ScrollArea** | Custom scrollbar | Smooth scrolling, themes | 4 variants | 3 sizes |

### 🔘 Form Components

| Component | Description | Key Features | Variants | Sizes |
|-----------|-------------|--------------|----------|-------|
| **Form** | React Hook Form integration | Validation, error handling | 4 variants | 3 sizes |
| **Calendar** | Date picker component | Multiple designs, animations | 5 designs | 3 sizes |
| **DatePicker** | Date selection | Range picker, presets | 4 variants | 3 sizes |
| **TimePicker** | Time selection component | 12/24h format, AM/PM | 4 designs | 3 sizes |
| **Accordion** | Collapsible content | Single/multiple, animations | 4 variants | 3 sizes |
| **Breadcrumbs** | Navigation breadcrumbs | Collapsible, icons | 4 variants | 3 sizes |
| **InputOTP** | OTP input fields | Auto-focus, validation | 4 variants | 3 sizes |
| **Tabs** | Tab navigation | Vertical/horizontal, animations | 4 variants | 3 sizes |
| **RadioGroup** | Radio button group | Controlled, validation | 4 variants | 3 sizes |

### 📊 Data Display Components

| Component | Description | Key Features | Variants | Sizes |
|-----------|-------------|--------------|----------|-------|
| **Table** | Data table with sorting | Pagination, selection, sorting | 4 variants | 3 sizes |
| **DataTable** | Advanced data table | Filters, search, bulk actions | 4 variants | 3 sizes |
| **Chart** | Data visualization | Multiple chart types, themes | 6 types | 3 sizes |

### 🚨 Feedback Components

| Component | Description | Key Features | Variants | Sizes |
|-----------|-------------|--------------|----------|-------|
| **Alert** | Status message display | Types, actions, closable | 4 variants | 3 sizes |
| **Toast** | Notification toast | Multiple positions, themes | 4 variants | 3 sizes |
| **Sonner** | Toast notifications | Multiple positions, themes | 4 variants | 3 sizes |

### 🧭 Navigation Components

| Component | Description | Key Features | Variants | Sizes |
|-----------|-------------|--------------|----------|-------|
| **NavigationMenu** | Main navigation | Dropdown, mega menu | 4 variants | 3 sizes |
| **Menubar** | Application menu bar | Nested menus, shortcuts | 4 variants | 3 sizes |
| **Command** | Command palette | Search, keyboard navigation | 4 variants | 3 sizes |
| **Combobox** | Searchable dropdown | Async options, multi-select | 4 variants | 3 sizes |
| **Pagination** | Page navigation | Multiple styles, info display | 4 variants | 3 sizes |

### 🎬 Media Components

| Component | Description | Key Features | Variants | Sizes |
|-----------|-------------|--------------|----------|-------|
| **Avatar** | User avatar | Image fallback, initials | 4 variants | 4 sizes |
| **Badge** | Status indicator | Multiple colors, variants | 6 variants | 3 sizes |
| **AspectRatio** | Aspect ratio container | Multiple ratios, responsive | 6 ratios | 3 sizes |
| **Carousel** | Image carousel | Auto-play, navigation | 4 variants | 3 sizes |
| **Typography** | Text components | H1-H6, P, Blockquote, Code | 13 variants | 3 sizes |

### 🔴 Overlay Components

| Component | Description | Key Features | Variants | Sizes |
|-----------|-------------|--------------|----------|-------|
| **Dialog** | Modal dialog | Backdrop, animations | 4 variants | 3 sizes |
| **AlertDialog** | Confirmation dialog | Destructive actions | 4 variants | 3 sizes |
| **HoverCard** | Hover information card | Positioning, themes | 4 variants | 3 sizes |
| **Collapsible** | Collapsible content | Smooth animations | 4 variants | 3 sizes |
| **ContextMenu** | Right-click menu | Nested items, themes | 4 variants | 3 sizes |
| **DropdownMenu** | Dropdown menu | Nested items, themes | 4 variants | 3 sizes |
| **Toggle** | Toggle button | Multiple states, themes | 4 variants | 3 sizes |
| **Separator** | Visual separator | Horizontal/vertical | 4 variants | 3 sizes |

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

## 🎨 Theming & Colors

The library includes a comprehensive color system with CSS variables for consistent theming:

### Default Color Tokens

```css
:root {
  /* Background Colors */
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --bg-tertiary: #f1f5f9;
  --bg-card: #ffffff;
  --bg-overlay: rgba(0, 0, 0, 0.5);
  
  /* Text Colors */
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --text-muted: #64748b;
  --text-inverse: #ffffff;
  
  /* Accent Colors */
  --accent-primary: #3b82f6;
  --accent-secondary: #2563eb;
  --accent-success: #10b981;
  --accent-warning: #f59e0b;
  --accent-error: #ef4444;
  --accent-info: #06b6d4;
  
  /* Border Colors */
  --border-primary: #e2e8f0;
  --border-secondary: #cbd5e1;
  --border-focus: #3b82f6;
  
  /* Shadow Colors */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  
  /* Status Colors */
  --success: #10b981;
  --warning: #f59e0b;
  --error: #ef4444;
  --info: #06b6d4;
}
```

### Runtime Theme Switching

```tsx
import { createCSSVariables } from 'mad-ui-components/colors'

// Enable light theme
document.head.insertAdjacentHTML(
  'beforeend',
  `<style id="madui-colors">${createCSSVariables('light')}</style>`
)

// Switch to dark theme
document.getElementById('madui-colors')?.remove()
document.head.insertAdjacentHTML(
  'beforeend',
  `<style id="madui-colors">${createCSSVariables('dark')}</style>`
)
```

### Global Color Overrides

```css
:root {
  --accent-primary: #7c3aed;
  --border-focus: #7c3aed;
  --accent-success: #16a34a;
}
```

### Per-Component Color Overrides

```tsx
<div style={{ ['--accent-primary' as any]: '#16a34a' }}>
  <Button>Success Accent</Button>
</div>
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

# Publish to npm
npm publish
```

### Project Structure

```
src/
├── components/           # React components
│   ├── core/           # Core components (Button, Input, etc.)
│   ├── forms/          # Form components (Form, Calendar, etc.)
│   ├── layout/         # Layout components (Layout, Navbar, etc.)
│   ├── overlay/        # Overlay components (Dialog, AlertDialog, etc.)
│   ├── data/           # Data display components (Table, Chart, etc.)
│   ├── feedback/       # Feedback components (Alert, Toast, etc.)
│   ├── navigation/     # Navigation components (NavigationMenu, etc.)
│   └── media/          # Media components (Avatar, Badge, etc.)
├── modules/             # Module entry points (forms, layout, etc.)
├── individual/          # Individual component entry points
├── lib/                 # Utility functions and colors
├── index.ts             # Full library exports
└── core.ts              # Core bundle exports
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
