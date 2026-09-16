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
        console.log(`Converting: ${fullPath}`);
        
        try {
          const newPath = fullPath.substring(0, fullPath.lastIndexOf('.')) + '.webp';
          
          await sharp(fullPath)
            .resize({ width: 1200, withoutEnlargement: true }) // Resize to max 1200px width
            .webp({ quality: 60, effort: 6 }) // Convert to webp with high compression
            .toFile(newPath);
            
          fs.unlinkSync(fullPath); // Delete old file
          console.log(`Converted and deleted original: ${file}`);
        } catch (error) {
          console.error(`Failed to process ${file}:`, error);
        }
      }
    }
  }
}

processDirectory(PUBLIC_DIR)
  .then(() => console.log('Finished WebP conversion'))
  .catch(err => console.error(err));
