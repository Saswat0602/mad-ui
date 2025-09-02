#!/bin/bash

# Fix import paths in all component files after reorganization

# Update lib imports in core components
find src/components/core -name "*.tsx" -exec sed -i '' 's|../lib/utils|../../lib/utils|g' {} \;
find src/components/core -name "*.tsx" -exec sed -i '' 's|../lib/colors|../../lib/colors|g' {} \;

# Update lib imports in layout components
find src/components/layout -name "*.tsx" -exec sed -i '' 's|../lib/utils|../../lib/utils|g' {} \;
find src/components/layout -name "*.tsx" -exec sed -i '' 's|../lib/colors|../../lib/colors|g' {} \;

# Update lib imports in forms components
find src/components/forms -name "*.tsx" -exec sed -i '' 's|../lib/utils|../../lib/utils|g' {} \;
find src/components/forms -name "*.tsx" -exec sed -i '' 's|../lib/colors|../../lib/colors|g' {} \;

# Update lib imports in feedback components
find src/components/feedback -name "*.tsx" -exec sed -i '' 's|../lib/utils|../../lib/utils|g' {} \;
find src/components/feedback -name "*.tsx" -exec sed -i '' 's|../lib/colors|../../lib/colors|g' {} \;

# Update lib imports in navigation components
find src/components/navigation -name "*.tsx" -exec sed -i '' 's|../lib/utils|../../lib/utils|g' {} \;
find src/components/navigation -name "*.tsx" -exec sed -i '' 's|../lib/colors|../../lib/colors|g' {} \;

# Update lib imports in data components
find src/components/data -name "*.tsx" -exec sed -i '' 's|../lib/utils|../../lib/utils|g' {} \;
find src/components/data -name "*.tsx" -exec sed -i '' 's|../lib/colors|../../lib/colors|g' {} \;

# Update lib imports in overlay components
find src/components/overlay -name "*.tsx" -exec sed -i '' 's|../lib/utils|../../lib/utils|g' {} \;
find src/components/overlay -name "*.tsx" -exec sed -i '' 's|../lib/colors|../../lib/colors|g' {} \;

# Update lib imports in media components
find src/components/media -name "*.tsx" -exec sed -i '' 's|../lib/utils|../../lib/utils|g' {} \;
find src/components/media -name "*.tsx" -exec sed -i '' 's|../lib/colors|../../lib/colors|g' {} \;

# Fix component imports in layout components
sed -i '' 's|import { Button } from "./button"|import { Button } from "../core/button"|g' src/components/layout/navbar.tsx
sed -i '' 's|import { Button } from "./button"|import { Button } from "../core/button"|g' src/components/layout/sidebar.tsx

# Fix component imports in layout/layout.tsx
sed -i '' 's|import { Navbar, NavbarProps } from "./navbar"|import { Navbar, NavbarProps } from "./navbar"|g' src/components/layout/layout.tsx
sed -i '' 's|import { Sidebar, SidebarProps } from "./sidebar"|import { Sidebar, SidebarProps } from "./sidebar"|g' src/components/layout/layout.tsx

echo "All import paths fixed!"
