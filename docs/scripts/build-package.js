const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '../..');
const docsDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const indexMjs = path.join(distDir, 'index.mjs');

console.log('[build-package] Checking mad-ui-components dist status...');

const isInstalledPackage = fs.existsSync(path.join(docsDir, 'node_modules', 'mad-ui-components', 'package.json'));

if (fs.existsSync(indexMjs)) {
  console.log('[build-package] Local dist/ is up to date.');
} else if (isInstalledPackage) {
  console.log('[build-package] Using installed mad-ui-components package from npm.');
} else {
  console.log('[build-package] dist/ not found. Building mad-ui-components from source...');
  
  // Ensure root node_modules exists (link to docs/node_modules if absent)
  const rootNodeModules = path.join(rootDir, 'node_modules');
  const docsNodeModules = path.join(docsDir, 'node_modules');
  
  if (!fs.existsSync(rootNodeModules) && fs.existsSync(docsNodeModules)) {
    console.log('[build-package] Linking docs/node_modules to root node_modules for build...');
    try {
      fs.symlinkSync(docsNodeModules, rootNodeModules, 'junction');
    } catch (err) {
      console.warn('[build-package] Symlink warning:', err.message);
    }
  }

  // Find tsup binary
  const tsupBin = path.join(docsDir, 'node_modules', '.bin', 'tsup');
  
  try {
    execSync(`"${tsupBin}"`, {
      cwd: rootDir,
      stdio: 'inherit',
      env: { ...process.env, NODE_ENV: 'production' }
    });
    console.log('[build-package] mad-ui-components built successfully!');
  } catch (err) {
    console.error('[build-package] Failed to build mad-ui-components:', err.message);
    process.exit(1);
  }
}
