import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.join(process.cwd(), 'public');

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        console.log(`Processing: ${fullPath}`);
        
        try {
          const tempPath = fullPath + '.tmp' + ext;
          
          if (ext === '.png') {
            await sharp(fullPath)
              .resize({ width: 1920, withoutEnlargement: true })
              .png({ quality: 75, compressionLevel: 9 })
              .toFile(tempPath);
          } else {
            await sharp(fullPath)
              .resize({ width: 1920, withoutEnlargement: true })
              .jpeg({ quality: 75, progressive: true })
              .toFile(tempPath);
          }
          
          fs.renameSync(tempPath, fullPath);
          console.log(`Optimized: ${file}`);
        } catch (error) {
          console.error(`Failed to process ${file}:`, error);
        }
      }
    }
  }
}

processDirectory(PUBLIC_DIR)
  .then(() => console.log('Finished image optimization'))
  .catch(err => console.error(err));
