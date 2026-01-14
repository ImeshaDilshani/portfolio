import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectDir = path.join(__dirname, '..');

// Directories to search for code files
const codeDirs = ['app', 'components', 'lib'];

// File extensions to process
const codeExtensions = ['.tsx', '.ts', '.jsx', '.js'];

// Image extensions to replace
const imageExtensions = ['.jpg', '.jpeg', '.png', '.jfif'];

function getAllCodeFiles(dir) {
  const files = [];
  
  if (!fs.existsSync(dir)) return files;
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory() && entry.name !== 'node_modules') {
      files.push(...getAllCodeFiles(fullPath));
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (codeExtensions.includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  
  return files;
}

function updateImageReferences(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;
  const changes = [];

  for (const ext of imageExtensions) {
    // Match patterns like "/path/image.jpg" or '/path/image.png'
    const regex = new RegExp(`(["'\`])(/[^"'\`]*)(${ext.replace('.', '\\.')})\\1`, 'gi');
    
    const newContent = content.replace(regex, (match, quote, imgPath, extension) => {
      // Check if the webp version exists
      const webpPath = path.join(projectDir, 'public', imgPath + '.webp');
      
      if (fs.existsSync(webpPath)) {
        modified = true;
        changes.push(`  ${imgPath}${extension} → ${imgPath}.webp`);
        return `${quote}${imgPath}.webp${quote}`;
      }
      return match;
    });
    
    content = newContent;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    return changes;
  }
  
  return null;
}

async function main() {
  console.log('🔄 Updating image references to WebP...\n');

  let totalChanges = 0;
  
  for (const codeDir of codeDirs) {
    const dirPath = path.join(projectDir, codeDir);
    const files = getAllCodeFiles(dirPath);
    
    for (const file of files) {
      const relativePath = path.relative(projectDir, file);
      const changes = updateImageReferences(file);
      
      if (changes && changes.length > 0) {
        console.log(`✅ ${relativePath}:`);
        changes.forEach(change => console.log(change));
        console.log('');
        totalChanges += changes.length;
      }
    }
  }

  console.log('─'.repeat(60));
  console.log(`\n📊 Summary: Updated ${totalChanges} image references to WebP`);
  
  if (totalChanges > 0) {
    console.log('\n⚠️  Please review the changes and test your site!');
  } else {
    console.log('\n✨ No changes needed - all references already use WebP or originals not converted.');
  }
}

main().catch(console.error);
