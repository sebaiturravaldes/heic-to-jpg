# HEIC to JPG Converter with Opt## Usage
1. Place your `.heic` files in the `heic` folder (create it if it doesn't exist).
2. Run the script:
   ```bash
   node convert-heic-to-jpg.js
   ```
3. Optimized `.jpg` files will appear in the `jpg` folder.

## Optimization Settings
You can customize the optimization in the `OPTIMIZATION_CONFIG` object:

```javascript
const OPTIMIZATION_CONFIG = {
  quality: 90,        // JPEG quality (70-90 recommended)
  progressive: true,  // Progressive JPEG for better loading
  maxWidth: 1920,     // Maximum width in pixels
  maxHeight: 1080,    // Maximum height in pixels
  stripMetadata: true // Remove metadata to reduce size
};
```

### Quality Guidelines:
- **90-95**: Highest quality, minimal compression (~20-30% reduction)
- **85**: High quality, good compression (~40-50% reduction) **[Recommended]**
- **75-80**: Good quality, strong compression (~50-60% reduction)
- **70**: Acceptable quality, maximum compression (~60-70% reduction)
This Node.js script converts all HEIC images in the `heic` folder to optimized JPG format, saving the results in the `jpg` output folder. The script can reduce file sizes by up to 50% while maintaining high visual quality.

## Features
- Converts all `.heic` files in the input directory to optimized `.jpg`.
- **Smart compression**: Reduces file size by 30-60% without noticeable quality loss.
- **Automatic resizing**: Limits maximum dimensions to 1920x1080 (configurable).
- **Progressive JPEG**: Better loading experience for web use.
- **Metadata stripping**: Removes unnecessary data to reduce file size.
- **Batch processing**: Handles multiple files sequentially to avoid memory issues.
- **Size reporting**: Shows original vs optimized file sizes and reduction percentage.
- Handles errors gracefully and prints detailed progress information.o JPG Converter

This Node.js script converts all HEIC images in the `heic` folder to JPG format, saving the results in the `jpg` output folder.

## Features
- Converts all `.heic` files in the input directory to `.jpg`.
- Handles errors gracefully and prints a message for each successful conversion.
- Uses only JavaScript and Node.js libraries (`heic-convert`).

## Prerequisites
- Node.js (v14 or higher recommended)
- npm

## Installation
1. Clone or download this repository.
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage
1. Place your `.heic` files in the `heic` folder (create it if it doesn't exist).
2. Run the script:
   ```bash
   node convert-heic-to-jpg.js
   ```
3. Converted `.jpg` files will appear in the `jpg` folder.

## Customization
- To change the input or output folder, edit the `inputDir` and `outputDir` variables in `convert-heic-to-jpg.js`.

## Example Output
```
Found 3 HEIC files to process

Processing: IMG_1234.heic...
✅ Converted: IMG_1234.heic
   Size: 4.25MB → 1.89MB (55.5% reduction)

Processing: IMG_5678.heic...
✅ Converted: IMG_5678.heic
   Size: 6.12MB → 2.84MB (53.6% reduction)

Processing: IMG_9012.heic...
✅ Converted: IMG_9012.heic
   Size: 3.78MB → 1.65MB (56.3% reduction)

🎉 All files processed successfully!
```

## License
MIT
