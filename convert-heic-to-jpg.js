const fs = require('fs');
const path = require('path');
const heicConvert = require('heic-convert');
const sharp = require('sharp');

const inputDir = path.join(__dirname, 'heic'); // Input folder
const outputDir = path.join(__dirname, 'jpg');   // Output folder

// Optimization settings
const OPTIMIZATION_CONFIG = {
  quality: 90,        // JPEG quality (80-90 recommended for good quality)
  progressive: true,  // Progressive JPEG for better loading
  maxWidth: 1920,     // Maximum width (adjust based on your needs)
  maxHeight: 1080,    // Maximum height (adjust based on your needs)
  stripMetadata: true // Remove metadata to reduce size
};

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

async function processFile(file) {
  if (path.extname(file).toLowerCase() === '.heic') {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace(/\.heic$/i, '.jpg'));
    
    try {
      console.log(`Processing: ${file}...`);
      
      // Get original file size
      const originalStats = fs.statSync(inputPath);
      const originalSize = originalStats.size;
      
      // Convert HEIC to JPEG buffer
      const inputBuffer = fs.readFileSync(inputPath);
      const jpegBuffer = await heicConvert({
        buffer: inputBuffer,
        format: 'JPEG',
        quality: 0.95 // High quality for initial conversion
      });
      
      // Optimize with Sharp
      const optimizedBuffer = await sharp(jpegBuffer)
        .jpeg({
          quality: OPTIMIZATION_CONFIG.quality,
          progressive: OPTIMIZATION_CONFIG.progressive,
          mozjpeg: true // Use mozjpeg encoder for better compression
        })
        .resize({
          width: OPTIMIZATION_CONFIG.maxWidth,
          height: OPTIMIZATION_CONFIG.maxHeight,
          fit: 'inside',
          withoutEnlargement: true
        })
        .toBuffer();
      
      // Save optimized image
      fs.writeFileSync(outputPath, optimizedBuffer);
      
      // Calculate size reduction
      const newSize = optimizedBuffer.length;
      const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);
      const originalMB = (originalSize / 1024 / 1024).toFixed(2);
      const newMB = (newSize / 1024 / 1024).toFixed(2);
      
      console.log(`✅ Converted: ${file}`);
      console.log(`   Size: ${originalMB}MB → ${newMB}MB (${reduction}% reduction)`);
      
    } catch (err) {
      console.error(`❌ Error converting ${file}:`, err.message);
    }
  }
}

// Process files sequentially to avoid memory issues
async function processAllFiles() {
  try {
    const files = fs.readdirSync(inputDir);
    console.log(`Found ${files.filter(f => f.toLowerCase().endsWith('.heic')).length} HEIC files to process\n`);
    
    for (const file of files) {
      await processFile(file);
    }
    
    console.log('\n🎉 All files processed successfully!');
  } catch (err) {
    console.error('Error reading input directory:', err.message);
  }
}

processAllFiles();
