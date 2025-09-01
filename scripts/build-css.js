const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

// Ensure dist directory exists
const distDir = path.join(__dirname, '../dist')
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true })
}

// Build CSS using Tailwind CLI
try {
  // Check if tailwindcss is available
  const tailwindPath = path.join(__dirname, '../node_modules/.bin/tailwindcss')
  if (fs.existsSync(tailwindPath)) {
    execSync(`${tailwindPath} -i ./src/styles.css -o ./dist/styles.css --minify`, {
      stdio: 'inherit',
      cwd: path.join(__dirname, '..')
    })
    console.log('✅ CSS built successfully')
  } else {
    // Fallback: copy the source CSS file
    const sourceCSS = path.join(__dirname, '../src/styles.css')
    const targetCSS = path.join(__dirname, '../dist/styles.css')
    fs.copyFileSync(sourceCSS, targetCSS)
    console.log('✅ CSS copied (Tailwind CLI not available)')
  }
} catch (error) {
  console.error('❌ Error building CSS:', error)
  // Don't exit, just log the error
  console.log('⚠️  Continuing without CSS build...')
}
