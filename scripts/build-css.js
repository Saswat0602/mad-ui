const fs = require('fs');
const path = require('path');

console.log('🔨 Building optimized CSS...');

// Check if Tailwind CLI is available
const tailwindPath = path.join(__dirname, '../node_modules/.bin/tailwindcss');
const tailwindExists = fs.existsSync(tailwindPath);

if (tailwindExists) {
  // Use Tailwind CLI with purging
  const { execSync } = require('child_process');
  
  try {
    // Build with purging to remove unused styles
    execSync(`${tailwindPath} src/styles.css -o dist/styles.css --minify`, {
      stdio: 'inherit',
      cwd: path.join(__dirname, '..')
    });
    
    // Read the built CSS and remove unnecessary whitespace
    let css = fs.readFileSync('dist/styles.css', 'utf8');
    
    // Remove comments and extra whitespace
    css = css
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove CSS comments
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .replace(/\s*{\s*/g, '{') // Remove spaces around braces
      .replace(/\s*}\s*/g, '}') // Remove spaces around braces
      .replace(/\s*:\s*/g, ':') // Remove spaces around colons
      .replace(/\s*;\s*/g, ';') // Remove spaces around semicolons
      .replace(/\s*,\s*/g, ',') // Remove spaces around commas
      .trim();
    
    fs.writeFileSync('dist/styles.css', css);
    
    const stats = fs.statSync('dist/styles.css');
    const sizeKB = (stats.size / 1024).toFixed(2);
    
    console.log(`✅ CSS built and optimized: ${sizeKB} KB`);
  } catch (error) {
    console.error('❌ Tailwind build failed, falling back to copy method');
    fallbackCopy();
  }
} else {
  fallbackCopy();
}

function fallbackCopy() {
  try {
    // Copy source CSS file
    fs.copyFileSync('src/styles.css', 'dist/styles.css');
    
    // Read and optimize the CSS
    let css = fs.readFileSync('dist/styles.css', 'utf8');
    
    // Remove comments and extra whitespace
    css = css
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove CSS comments
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .replace(/\s*{\s*/g, '{') // Remove spaces around braces
      .replace(/\s*}\s*/g, '}') // Remove spaces around braces
      .replace(/\s*:\s*/g, ':') // Remove spaces around colons
      .replace(/\s*;\s*/g, ';') // Remove spaces around semicolons
      .replace(/\s*,\s*/g, ',') // Remove spaces around commas
      .trim();
    
    fs.writeFileSync('dist/styles.css', css);
    
    const stats = fs.statSync('dist/styles.css');
    const sizeKB = (stats.size / 1024).toFixed(2);
    
    console.log(`✅ CSS copied and optimized: ${sizeKB} KB`);
  } catch (error) {
    console.error('❌ CSS copy failed:', error.message);
    process.exit(1);
  }
}
