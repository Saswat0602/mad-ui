# Usage Guide for mad-ui-components

## Installation

```bash
npm install mad-ui-components
```

## Usage Options

### Option 1: Import Individual Components (Recommended for Next.js)

When you import a single component, it gets the complete source code that you can customize:

```tsx
// Import just the button component
import { Button } from 'mad-ui-components/button';

// Import multiple individual components
import { Button } from 'mad-ui-components/button';
import { Input } from 'mad-ui-components/input';
import { Card } from 'mad-ui-components/card';
```

### Option 2: Import from Categories

```tsx
// Import all core components
import { Button, Input, Label } from 'mad-ui-components/core';

// Import all form components
import { Accordion, Tabs, DatePicker } from 'mad-ui-components/forms';

// Import all layout components
import { Navbar, Sidebar, Modal } from 'mad-ui-components/layout';
```

### Option 3: Import Everything

```tsx
// Import all components (larger bundle)
import { Button, Input, Card, Navbar, Sidebar } from 'mad-ui-components';
```

## Copy Components to Local Project

### Using the Copy Script

1. **Navigate to your Next.js project root**
2. **Run the copy script:**

```bash
# Copy a single component
npx mad-ui-components copy button

# Copy multiple components
npx mad-ui-components copy button input card
```

This will create a `components/ui/mad-ui/` folder in your project with the selected components.

### Manual Copy

1. **Create the folder structure:**
```bash
mkdir -p components/ui/mad-ui
```

2. **Copy the component files you need from `node_modules/mad-ui-components/src/components/`**

3. **Copy dependencies:**
```bash
# Copy icons if needed
cp node_modules/mad-ui-components/src/icons/index.tsx components/ui/mad-ui/
# Copy utils if needed
cp node_modules/mad-ui-components/src/lib/utils.ts components/ui/mad-ui/
```

## Example: Setting up Button Component

### Step 1: Copy the component
```bash
npx mad-ui-components copy button
```

### Step 2: Use in your component
```tsx
// components/ui/mad-ui/button.tsx is now available
import { Button } from '@/components/ui/mad-ui/button';

export default function MyPage() {
  return (
    <div>
      <Button variant="default">Click me</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  );
}
```

## Available Components

### Core Components
- `button` - Button component with variants
- `input` - Input field component
- `label` - Label component
- `checkbox` - Checkbox component
- `radio` - Radio button component
- `select` - Select dropdown component
- `textarea` - Textarea component
- `slider` - Slider component
- `switch` - Toggle switch component
- `progress` - Progress bar component
- `rating` - Star rating component
- `skeleton` - Loading skeleton component
- `card` - Card container component

### Form Components
- `accordion` - Collapsible accordion
- `breadcrumbs` - Navigation breadcrumbs
- `calendar` - Date calendar component
- `date-picker` - Date picker component
- `input-otp` - OTP input component
- `radio-group` - Radio button group
- `tabs` - Tab navigation component
- `timepicker` - Time picker component

### Layout Components
- `layout` - Main layout wrapper
- `navbar` - Navigation bar component
- `sidebar` - Sidebar navigation
- `modal` - Modal dialog component
- `drawer` - Drawer/slide-out panel
- `sheet` - Bottom sheet component
- `resizable` - Resizable panels
- `scroll-area` - Custom scroll area
- `separator` - Visual separator
- `toggle` - Toggle button component

### Overlay Components
- `alert-dialog` - Alert dialog component
- `collapsible` - Collapsible content
- `context-menu` - Right-click context menu
- `dialog` - Dialog component
- `dropdown-menu` - Dropdown menu
- `hover-card` - Hover-triggered card
- `popover` - Popover component
- `tooltip` - Tooltip component

### Media Components
- `aspect-ratio` - Aspect ratio wrapper
- `avatar` - Avatar component
- `badge` - Badge/tag component
- `carousel` - Image carousel
- `typography` - Typography components

### Navigation Components
- `combobox` - Searchable combobox
- `command` - Command palette
- `menubar` - Menu bar component
- `navigation-menu` - Navigation menu
- `pagination` - Pagination component

### Data Components
- `table` - Table component
- `data-table` - Advanced data table
- `chart` - Chart component

### Feedback Components
- `alert` - Alert message component
- `toast` - Toast notification
- `sonner` - Toast manager

## Dependencies

Most components require these dependencies:
- `react` (>=18.0.0)
- `react-dom` (>=18.0.0)
- `tailwindcss` (for styling)

## Customization

After copying components to your local project, you can:

1. **Modify the component code directly**
2. **Customize Tailwind classes**
3. **Add your own variants and props**
4. **Integrate with your design system**

## Benefits of Local Copy

- ✅ **Full customization control**
- ✅ **No bundle size impact from unused components**
- ✅ **Direct access to source code**
- ✅ **Easy debugging and modification**
- ✅ **Version control in your project**

## Bundle Size Comparison

- **Individual import**: ~2-15KB per component
- **Category import**: ~20-50KB per category
- **Full import**: ~120KB for everything
- **Local copy**: 0KB (only what you use)
