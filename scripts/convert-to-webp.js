// Script to convert images to WebP format
// Run: node scripts/convert-to-webp.js

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = './public/images';

// Get all PNG and JPG files
const files = fs.readdirSync(imagesDir).filter(file => 
  /\.(png|jpg|jpeg)$/i.test(file)
);

console.log(`Found ${files.length} images to convert\n`);

async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const newSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`✓ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${savings}% smaller)`);
    return { originalSize, newSize, savings };
  } catch (error) {
    console.error(`✗ Error converting ${inputPath}:`, error.message);
    return null;
  }
}

async function main() {
  const results = [];
  
  for (const file of files) {
    const inputPath = path.join(imagesDir, file);
    const outputPath = path.join(imagesDir, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
    
    // Skip if WebP already exists
    if (fs.existsSync(outputPath)) {
      console.log(`○ Skipping ${file} (WebP already exists)`);
      continue;
    }
    
    const result = await convertToWebP(inputPath, outputPath);
    if (result) {
      results.push(result);
    }
  }
  
  // Summary
  if (results.length > 0) {
    const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
    const totalNew = results.reduce((sum, r) => sum + r.newSize, 0);
    const totalSavings = ((totalOriginal - totalNew) / totalOriginal * 100).toFixed(1);
    
    console.log('\n--- Summary ---');
    console.log(`Converted: ${results.length} images`);
    console.log(`Total savings: ${totalSavings}% (${formatBytes(totalOriginal)} → ${formatBytes(totalNew)})`);
  }
}

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

main().catch(console.error);