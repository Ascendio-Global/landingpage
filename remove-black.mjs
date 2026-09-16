import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function removeBlack() {
  const filePath = path.join(process.cwd(), 'public/Logos/landing-dark.webp');
  console.log('Processing:', filePath);
  
  const { data, info } = await sharp(filePath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    const brightness = (r + g + b) / 3;
    
    if (brightness < 10) {
       data[i + 3] = 0;
    } else if (brightness < 40) {
       data[i + 3] = Math.floor((brightness - 10) * (255 / 30));
    }
  }
  
  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .webp({ quality: 90 })
    .toFile(path.join(process.cwd(), 'public/Logos/landing-dark-transparent.webp'));
  console.log('Saved to landing-dark-transparent.webp');
}

removeBlack().catch(console.error);
