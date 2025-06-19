const fs = require('fs');
const path = require('path');
const heicConvert = require('heic-convert');

const inputDir = path.join(__dirname, 'heic'); // Input folder
const outputDir = path.join(__dirname, 'jpg');   // Output folder

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.readdirSync(inputDir).forEach(async (file) => {
  if (path.extname(file).toLowerCase() === '.heic') {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace(/\.heic$/i, '.jpg'));
    try {
      const inputBuffer = fs.readFileSync(inputPath);
      const outputBuffer = await heicConvert({
        buffer: inputBuffer,
        format: 'JPEG',
        quality: 1
      });
      fs.writeFileSync(outputPath, outputBuffer);
      console.log(`Converted: ${file} -> ${path.basename(outputPath)}`);
    } catch (err) {
      console.error(`Error converting ${file}:`, err);
    }
  }
});
