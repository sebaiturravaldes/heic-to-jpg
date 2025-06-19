# HEIC to JPG Converter

This Node.js script converts all HEIC images in the `images` folder to JPG format, saving the results in the `jpg` output folder.

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
1. Place your `.heic` files in the `images` folder (create it if it doesn't exist).
2. Run the script:
   ```bash
   node convert-heic-to-jpg.js
   ```
3. Converted `.jpg` files will appear in the `jpg` folder.

## Customization
- To change the input or output folder, edit the `inputDir` and `outputDir` variables in `convert-heic-to-jpg.js`.

## Example Output
```
Converted: photo1.heic -> photo1.jpg
Converted: photo2.heic -> photo2.jpg
```

## License
MIT
