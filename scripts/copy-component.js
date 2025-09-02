#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];

if (!componentName) {
  console.log('Usage: node copy-component.js <component-name>');
  console.log('Example: node copy-component.js button');
  process.exit(1);
}

// Map component names to their source paths
const componentMap = {
  'button': 'src/components/core/button.tsx',
  'card': 'src/components/core/card.tsx',
  'checkbox': 'src/components/core/checkbox.tsx',
  'input': 'src/components/core/input.tsx',
  'label': 'src/components/core/label.tsx',
  'progress': 'src/components/core/progress.tsx',
  'radio': 'src/components/core/radio.tsx',
  'rating': 'src/components/core/rating.tsx',
  'select': 'src/components/core/select.tsx',
  'skeleton': 'src/components/core/skeleton.tsx',
  'slider': 'src/components/core/slider.tsx',
  'switch': 'src/components/core/switch.tsx',
  'textarea': 'src/components/core/textarea.tsx',
  'accordion': 'src/components/forms/accordion.tsx',
  'breadcrumbs': 'src/components/forms/breadcrumbs.tsx',
  'calendar': 'src/components/forms/calendar.tsx',
  'date-picker': 'src/components/forms/date-picker.tsx',
  'input-otp': 'src/components/forms/input-otp.tsx',
  'radio-group': 'src/components/forms/radio-group.tsx',
  'tabs': 'src/components/forms/tabs.tsx',
  'timepicker': 'src/components/forms/timepicker.tsx',
  'alert-dialog': 'src/components/overlay/alert-dialog.tsx',
  'collapsible': 'src/components/overlay/collapsible.tsx',
  'context-menu': 'src/components/overlay/context-menu.tsx',
  'dialog': 'src/components/overlay/dialog.tsx',
  'drawer': 'src/components/overlay/drawer.tsx',
  'dropdown-menu': 'src/components/overlay/dropdown-menu.tsx',
  'hover-card': 'src/components/overlay/hover-card.tsx',
  'modal': 'src/components/layout/modal.tsx',
  'popover': 'src/components/overlay/popover.tsx',
  'sheet': 'src/components/layout/sheet.tsx',
  'tooltip': 'src/components/overlay/tooltip.tsx',
  'layout': 'src/components/layout/layout.tsx',
  'navbar': 'src/components/layout/navbar.tsx',
  'sidebar': 'src/components/layout/sidebar.tsx',
  'resizable': 'src/components/layout/resizable.tsx',
  'scroll-area': 'src/components/layout/scroll-area.tsx',
  'separator': 'src/components/layout/separator.tsx',
  'toggle': 'src/components/layout/toggle.tsx',
  'aspect-ratio': 'src/components/media/aspect-ratio.tsx',
  'avatar': 'src/components/media/avatar.tsx',
  'badge': 'src/components/media/badge.tsx',
  'carousel': 'src/components/media/carousel.tsx',
  'typography': 'src/components/media/typography.tsx',
  'chart': 'src/components/data/chart.tsx',
  'combobox': 'src/components/navigation/combobox.tsx',
  'command': 'src/components/navigation/command.tsx',
  'data-table': 'src/components/data/data-table.tsx',
  'menubar': 'src/components/navigation/menubar.tsx',
  'navigation-menu': 'src/components/navigation/navigation-menu.tsx',
  'pagination': 'src/components/navigation/pagination.tsx',
  'table': 'src/components/data/table.tsx',
  'alert': 'src/components/feedback/alert.tsx',
  'sonner': 'src/components/feedback/sonner.tsx',
  'toast': 'src/components/feedback/toast.tsx',
  'icons': 'src/icons/index.tsx',
  'utils': 'src/lib/utils.ts',
  'colors': 'src/lib/colors.ts'
};

if (!componentMap[componentName]) {
  console.log(`Component '${componentName}' not found. Available components:`);
  console.log(Object.keys(componentMap).join(', '));
  process.exit(1);
}

const sourcePath = path.join(__dirname, '..', componentMap[componentName]);
const targetDir = path.join(process.cwd(), 'components', 'ui', 'mad-ui');
const targetPath = path.join(targetDir, `${componentName}.tsx`);

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy the component file
try {
  fs.copyFileSync(sourcePath, targetPath);
  console.log(`✅ Copied ${componentName} to ${targetPath}`);
  
  // Also copy dependencies if they exist
  const dependencies = getDependencies(sourcePath);
  dependencies.forEach(dep => {
    const depPath = path.join(__dirname, '..', dep);
    const depTargetPath = path.join(targetDir, path.basename(dep));
    if (fs.existsSync(depPath)) {
      fs.copyFileSync(depPath, depTargetPath);
      console.log(`✅ Copied dependency ${path.basename(dep)}`);
    }
  });
  
  console.log(`\n🎉 Component ${componentName} is now available in your components/ui/mad-ui folder!`);
  console.log(`\nUsage example:`);
  console.log(`import { ${componentName.charAt(0).toUpperCase() + componentName.slice(1)} } from '@/components/ui/mad-ui/${componentName}';`);
  
} catch (error) {
  console.error(`❌ Error copying component: ${error.message}`);
  process.exit(1);
}

function getDependencies(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const dependencies = [];
  
  // Check for imports from our icons or utils
  if (content.includes('../../icons') || content.includes('../../lib/')) {
    dependencies.push('src/icons/index.tsx');
    dependencies.push('src/lib/utils.ts');
  }
  
  return dependencies;
}
