const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const filesToConvert = [
  'hero.png',
  'testmonial.png',
  'mentorship.png',
  'logo-3.png',
  'favicon.png',
  'wasg.png'
];

async function convert() {
  for (const file of filesToConvert) {
    const filePath = path.join(publicDir, file);
    if (fs.existsSync(filePath)) {
      const ext = path.extname(file);
      const base = path.basename(file, ext);
      const outPath = path.join(publicDir, `${base}.webp`);
      console.log(`Converting ${file} to ${base}.webp...`);
      await sharp(filePath).webp({ quality: 80 }).toFile(outPath);
      console.log(`Converted ${file}`);
    } else {
      console.log(`File not found: ${filePath}`);
    }
  }
}

convert().catch(console.error);
