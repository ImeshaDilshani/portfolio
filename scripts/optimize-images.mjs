import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');

// Configuration for different image types
const config = {
  // Hero/profile images - higher quality, moderate size
  hero: { width: 800, quality: 85 },
  // Card images - medium size
  card: { width: 800, quality: 80 },
  // Gallery/presentation images - medium size
  gallery: { width: 1200, quality: 80 },
  // Thumbnails/small images - smaller size
  thumbnail: { width: 400, quality: 80 },
  // Large background images
  background: { width: 1920, quality: 75 },
};

// Skip these files (already optimized or placeholders)
const skipFiles = [
  'placeholder.jpg',
  'placeholder-user.jpg', 
  'placeholder-logo.png',
  'placeholder-logo.svg',
  'placeholder.svg',
];

// Files already converted to webp
const alreadyOptimized = [
  'imesha.webp',
  'PL1.webp',
  'CW1.webp',
  'J1.webp',
];

async function getAllImages(dir) {
  const images = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      if (entry.name !== 'optimized' && entry.name !== 'fonts') {
        images.push(...await getAllImages(fullPath));
      }
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.jfif', '.heic'].includes(ext)) {
        if (!skipFiles.includes(entry.name) && !alreadyOptimized.includes(entry.name)) {
          images.push(fullPath);
        }
      }
    }
  }
  
  return images;
}

async function optimizeImage(inputPath) {
  const relativePath = path.relative(publicDir, inputPath);
  const ext = path.extname(inputPath).toLowerCase();
  const baseName = path.basename(inputPath, ext);
  const dirName = path.dirname(inputPath);
  const outputPath = path.join(dirName, `${baseName}.webp`);

  // Skip if webp already exists
  if (fs.existsSync(outputPath)) {
    console.log(`⏭️  Skipping ${relativePath} - WebP already exists`);
    return { skipped: true };
  }

  try {
    const inputStats = fs.statSync(inputPath);
    const inputSize = inputStats.size / 1024;

    // Determine optimal settings based on file size and location
    let settings;
    if (inputSize > 5000) {
      // Very large images - aggressive compression
      settings = { width: 1200, quality: 75 };
    } else if (inputSize > 2000) {
      settings = { width: 1200, quality: 78 };
    } else if (inputSize > 1000) {
      settings = config.gallery;
    } else if (inputSize > 500) {
      settings = config.card;
    } else {
      settings = { width: 800, quality: 82 };
    }

    let pipeline = sharp(inputPath, { failOn: 'none' })
      .resize(settings.width, null, {
        withoutEnlargement: true,
        fit: 'inside',
      })
      .webp({ quality: settings.quality });

    await pipeline.toFile(outputPath);

    const outputStats = fs.statSync(outputPath);
    const outputSize = outputStats.size / 1024;
    const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

    console.log(`✅ ${relativePath}: ${inputSize.toFixed(1)} KB → ${outputSize.toFixed(1)} KB (${savings}% smaller)`);
    
    return {
      input: inputPath,
      output: outputPath,
      inputSize,
      outputSize,
      savings: parseFloat(savings),
    };
  } catch (error) {
    console.error(`❌ Error: ${relativePath} - ${error.message}`);
    return { error: true, path: relativePath };
  }
}

async function main() {
  console.log('🖼️  Finding all images...\n');
  
  const images = await getAllImages(publicDir);
  console.log(`Found ${images.length} images to optimize\n`);
  console.log('─'.repeat(80));

  let totalInputSize = 0;
  let totalOutputSize = 0;
  let successCount = 0;
  let errorCount = 0;
  let skippedCount = 0;

  for (const imagePath of images) {
    const result = await optimizeImage(imagePath);
    
    if (result.skipped) {
      skippedCount++;
    } else if (result.error) {
      errorCount++;
    } else {
      successCount++;
      totalInputSize += result.inputSize;
      totalOutputSize += result.outputSize;
    }
  }

  console.log('\n' + '─'.repeat(80));
  console.log('\n📊 Summary:');
  console.log(`   ✅ Optimized: ${successCount} images`);
  console.log(`   ⏭️  Skipped: ${skippedCount} images`);
  console.log(`   ❌ Errors: ${errorCount} images`);
  console.log(`\n   📦 Total size reduced: ${(totalInputSize / 1024).toFixed(2)} MB → ${(totalOutputSize / 1024).toFixed(2)} MB`);
  console.log(`   💾 Saved: ${((totalInputSize - totalOutputSize) / 1024).toFixed(2)} MB (${((1 - totalOutputSize / totalInputSize) * 100).toFixed(1)}%)`);
  
  console.log('\n⚠️  Next steps:');
  console.log('1. Update image references in your code from .jpg/.png to .webp');
  console.log('2. Optionally delete the original large files after verification');
  console.log('3. Rebuild and redeploy your site');
}

main().catch(console.error);

