const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '../..');
const docsDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const indexMjs = path.join(distDir, 'index.mjs');
const stylesCss = path.join(distDir, 'styles.css');

console.log('[build-package] Checking mad-ui-components dist status...');

const isInstalledPackage = fs.existsSync(path.join(docsDir, 'node_modules', 'mad-ui-components', 'package.json'));

if (fs.existsSync(indexMjs) && fs.existsSync(stylesCss)) {
  console.log('[build-package] Local dist/ is up to date.');
} else if (isInstalledPackage) {
  console.log('[build-package] Using installed mad-ui-components package from npm.');
} else {
  console.log('[build-package] dist/ incomplete or missing. Building mad-ui-components from source...');
  
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

  const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  let buildSuccess = false;

  // Strategy 1: Run root build directly via npm (handles both tsup and build-css.js)
  try {
    console.log('[build-package] Attempting root npm run build...');
    execSync(`${npmCmd} run build`, {
      cwd: rootDir,
      stdio: 'inherit',
      env: { ...process.env, NODE_ENV: 'production' }
    });
    buildSuccess = fs.existsSync(indexMjs);
  } catch (err) {
    console.warn('[build-package] Direct npm run build failed:', err.message);
  }

  // Strategy 2: If Strategy 1 failed, locate tsup binary directly across workspaces and execute
  if (!buildSuccess) {
    console.log('[build-package] Attempting fallback binary search for tsup...');
    const candidates = [
      path.join(rootDir, 'node_modules', '.bin', 'tsup'),
      path.join(docsDir, 'node_modules', '.bin', 'tsup'),
    ];

    const tsupBin = candidates.find(p => fs.existsSync(p));
    const tsupCmd = tsupBin ? `"${tsupBin}"` : 'npx tsup';

    try {
      execSync(tsupCmd, {
        cwd: rootDir,
        stdio: 'inherit',
        env: { ...process.env, NODE_ENV: 'production' }
      });

      // Build CSS assets
      execSync('node scripts/build-css.js', {
        cwd: rootDir,
        stdio: 'inherit',
        env: { ...process.env, NODE_ENV: 'production' }
      });

      buildSuccess = fs.existsSync(indexMjs);
    } catch (fallbackErr) {
      console.error('[build-package] Binary fallback failed:', fallbackErr.message);
    }
  }

  if (buildSuccess) {
    console.log('[build-package] mad-ui-components built successfully from source!');
  } else {
    console.error('[build-package] ERROR: Failed to produce dist/index.mjs.');
    process.exit(1);
  }
}
