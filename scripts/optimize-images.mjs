import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = './public';
const outputDir = './public/optimized';

// Images to optimize with their settings
const imagesToOptimize = [
  { name: 'imesha.png', width: 640, quality: 85, format: 'webp' },
  { name: 'PL1.jpg', width: 800, quality: 80, format: 'webp' },
  { name: 'CW1.jpg', width: 800, quality: 80, format: 'webp' },
  { name: 'J1.jpg', width: 800, quality: 80, format: 'webp' },
];

// Create output directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(imageConfig) {
  const { name, width, quality, format } = imageConfig;
  const inputPath = path.join(publicDir, name);
  const baseName = path.basename(name, path.extname(name));
  const outputPath = path.join(outputDir, `${baseName}.${format}`);
  
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Skipping ${name} - file not found`);
    return;
  }

  try {
    const inputStats = fs.statSync(inputPath);
    const inputSize = (inputStats.size / 1024).toFixed(1);

    let pipeline = sharp(inputPath)
      .resize(width, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      });

    if (format === 'webp') {
      pipeline = pipeline.webp({ quality });
    } else if (format === 'avif') {
      pipeline = pipeline.avif({ quality });
    } else if (format === 'jpg' || format === 'jpeg') {
      pipeline = pipeline.jpeg({ quality, mozjpeg: true });
    }

    await pipeline.toFile(outputPath);

    const outputStats = fs.statSync(outputPath);
    const outputSize = (outputStats.size / 1024).toFixed(1);
    const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

    console.log(`✅ ${name}: ${inputSize} KB → ${outputSize} KB (${savings}% smaller)`);
  } catch (error) {
    console.error(`❌ Error optimizing ${name}:`, error.message);
  }
}

async function main() {
  console.log('🖼️  Optimizing images...\n');
  
  for (const config of imagesToOptimize) {
    await optimizeImage(config);
  }

  console.log('\n📁 Optimized images saved to:', outputDir);
  console.log('\n⚠️  Next steps:');
  console.log('1. Review the optimized images in /public/optimized/');
  console.log('2. If quality is acceptable, replace the originals');
  console.log('3. Update image references in your code to use .webp extension');
}

main();
