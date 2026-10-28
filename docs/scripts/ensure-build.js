/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const distPath = path.resolve(__dirname, '../../dist/index.mjs');

if (!fs.existsSync(distPath)) {
  console.log('[ensure-build] dist/ not found. Building root mad-ui-components package...');
  try {
    execSync('npm --prefix .. run build', { stdio: 'inherit' });
    console.log('[ensure-build] Root package successfully built.');
  } catch (err) {
    console.warn('[ensure-build] Note: Could not run root build command directly:', err.message);
  }
} else {
  console.log('[ensure-build] mad-ui-components dist/ is present.');
}
