import fs from 'fs';
import path from 'path';

const APP_DIR = path.join(process.cwd(), 'app');

function updateReferences(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      updateReferences(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      
      const originalContent = content;
      
      // Replace image extensions, but only inside string literals or paths
      // This regex looks for .png, .jpg, .jpeg that are part of a file path
      content = content.replace(/\.png/gi, '.webp');
      content = content.replace(/\.jpg/gi, '.webp');
      content = content.replace(/\.jpeg/gi, '.webp');
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated references in ${fullPath}`);
      }
    }
  }
}

updateReferences(APP_DIR);
console.log('Finished updating references');
