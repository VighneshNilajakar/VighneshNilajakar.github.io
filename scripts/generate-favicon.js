// This script generates static favicon files for GitHub Pages
// Run this with: node scripts/generate-favicon.js

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

// Create an SVG favicon
const svgContent = `
<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="6" fill="#0D9488"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">VN</text>
</svg>
`;

// Save SVG favicon
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent.trim());
console.log('Created favicon.svg');

// If sharp is available, generate PNG and ICO files
try {
  const svg = Buffer.from(svgContent);
  
  // Generate 32x32 PNG (standard favicon)
  sharp(svg)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'))
    .then(() => console.log('Created favicon-32x32.png'))
    .catch(err => console.error('Error creating favicon-32x32.png:', err));
  
  // Generate 16x16 PNG
  sharp(svg)
    .resize(16, 16)
    .png()
    .toFile(path.join(publicDir, 'favicon-16x16.png'))
    .then(() => console.log('Created favicon-16x16.png'))
    .catch(err => console.error('Error creating favicon-16x16.png:', err));
  
  // Generate 192x192 PNG (Android)
  sharp(svg)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'android-chrome-192x192.png'))
    .then(() => console.log('Created android-chrome-192x192.png'))
    .catch(err => console.error('Error creating android-chrome-192x192.png:', err));
  
  // Generate 512x512 PNG (Android)
  sharp(svg)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'android-chrome-512x512.png'))
    .then(() => console.log('Created android-chrome-512x512.png'))
    .catch(err => console.error('Error creating android-chrome-512x512.png:', err));
  
  // Generate 180x180 PNG (Apple Touch Icon)
  sharp(svg)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'))
    .then(() => console.log('Created apple-touch-icon.png'))
    .catch(err => console.error('Error creating apple-touch-icon.png:', err));
  
  // Generate ICO (using 32x32)
  sharp(svg)
    .resize(32, 32)
    .toFormat('png')
    .toBuffer()
    .then(buffer => {
      // Simple ICO file format (just wrapping the PNG)
      fs.writeFileSync(path.join(publicDir, 'favicon.ico'), buffer);
      console.log('Created favicon.ico');
    })
    .catch(err => console.error('Error creating favicon.ico:', err));
    
} catch (err) {
  console.log('Sharp not available, only SVG favicon created.');
  console.log('Install sharp to generate PNG and ICO files: npm install sharp');
}
