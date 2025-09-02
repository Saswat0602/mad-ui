#!/bin/bash

# Update all export files to use the new organized folder structure

# Core components
sed -i '' 's|./components/button|./components/core/button|g' src/button.tsx
sed -i '' 's|./components/card|./components/core/card|g' src/card.tsx
sed -i '' 's|./components/input|./components/core/input|g' src/input.tsx
sed -i '' 's|./components/label|./components/core/label|g' src/label.tsx
sed -i '' 's|./components/textarea|./components/core/textarea|g' src/textarea.tsx
sed -i '' 's|./components/checkbox|./components/core/checkbox|g' src/checkbox.tsx
sed -i '' 's|./components/switch|./components/core/switch|g' src/switch.tsx
sed -i '' 's|./components/radio|./components/core/radio|g' src/radio.tsx
sed -i '' 's|./components/rating|./components/core/rating|g' src/rating.tsx
sed -i '' 's|./components/select|./components/core/select|g' src/select.tsx
sed -i '' 's|./components/slider|./components/core/slider|g' src/slider.tsx
sed -i '' 's|./components/progress|./components/core/progress|g' src/progress.tsx
sed -i '' 's|./components/skeleton|./components/core/skeleton|g' src/skeleton.tsx

# Layout components
sed -i '' 's|./components/layout|./components/layout/layout|g' src/layout.tsx
sed -i '' 's|./components/navbar|./components/layout/navbar|g' src/navbar.tsx
sed -i '' 's|./components/sidebar|./components/layout/sidebar|g' src/sidebar.tsx
sed -i '' 's|./components/modal|./components/layout/modal|g' src/modal.tsx
sed -i '' 's|./components/popover|./components/layout/popover|g' src/popover.tsx
sed -i '' 's|./components/tooltip|./components/layout/tooltip|g' src/tooltip.tsx
sed -i '' 's|./components/drawer|./components/layout/drawer|g' src/drawer.tsx
sed -i '' 's|./components/sheet|./components/layout/sheet|g' src/sheet.tsx
sed -i '' 's|./components/resizable|./components/layout/resizable|g' src/resizable.tsx
sed -i '' 's|./components/scroll-area|./components/layout/scroll-area|g' src/scroll-area.tsx

# Form components
sed -i '' 's|./components/accordion|./components/forms/accordion|g' src/accordion.tsx
sed -i '' 's|./components/tabs|./components/forms/tabs|g' src/tabs.tsx
sed -i '' 's|./components/breadcrumbs|./components/forms/breadcrumbs|g' src/breadcrumbs.tsx
sed -i '' 's|./components/calendar|./components/forms/calendar|g' src/calendar.tsx
sed -i '' 's|./components/timepicker|./components/forms/timepicker|g' src/timepicker.tsx
sed -i '' 's|./components/input-otp|./components/forms/input-otp|g' src/input-otp.tsx
sed -i '' 's|./components/radio-group|./components/forms/radio-group|g' src/radio-group.tsx
sed -i '' 's|./components/react-hook-form|./components/forms/react-hook-form|g' src/react-hook-form.tsx

# Feedback components
sed -i '' 's|./components/alert|./components/feedback/alert|g' src/alert.tsx
sed -i '' 's|./components/toast|./components/feedback/toast|g' src/toast.tsx
sed -i '' 's|./components/sonner|./components/feedback/sonner|g' src/sonner.tsx

# Navigation components
sed -i '' 's|./components/navigation-menu|./components/navigation/navigation-menu|g' src/navigation-menu.tsx
sed -i '' 's|./components/menubar|./components/navigation/menubar|g' src/menubar.tsx
sed -i '' 's|./components/command|./components/navigation/command|g' src/command.tsx
sed -i '' 's|./components/combobox|./components/navigation/combobox|g' src/combobox.tsx
sed -i '' 's|./components/pagination|./components/navigation/pagination|g' src/pagination.tsx

# Data components
sed -i '' 's|./components/table|./components/data/table|g' src/table.tsx
sed -i '' 's|./components/data-table|./components/data/data-table|g' src/data-table.tsx
sed -i '' 's|./components/chart|./components/data/chart|g' src/chart.tsx

# Overlay components
sed -i '' 's|./components/dialog|./components/overlay/dialog|g' src/dialog.tsx
sed -i '' 's|./components/alert-dialog|./components/overlay/alert-dialog|g' src/alert-dialog.tsx
sed -i '' 's|./components/dropdown-menu|./components/overlay/dropdown-menu|g' src/dropdown-menu.tsx
sed -i '' 's|./components/context-menu|./components/overlay/context-menu|g' src/context-menu.tsx
sed -i '' 's|./components/hover-card|./components/overlay/hover-card|g' src/hover-card.tsx
sed -i '' 's|./components/separator|./components/overlay/separator|g' src/separator.tsx
sed -i '' 's|./components/toggle|./components/overlay/toggle|g' src/toggle.tsx
sed -i '' 's|./components/collapsible|./components/overlay/collapsible|g' src/collapsible.tsx

# Media components
sed -i '' 's|./components/avatar|./components/media/avatar|g' src/avatar.tsx
sed -i '' 's|./components/badge|./components/media/badge|g' src/badge.tsx
sed -i '' 's|./components/aspect-ratio|./components/media/aspect-ratio|g' src/aspect-ratio.tsx
sed -i '' 's|./components/carousel|./components/media/carousel|g' src/carousel.tsx
sed -i '' 's|./components/typography|./components/media/typography|g' src/typography.tsx

echo "All export files updated to use new organized folder structure!"
