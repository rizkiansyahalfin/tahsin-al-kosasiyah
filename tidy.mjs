import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, 'tahsin-al-kosasiyah');
const targetDir = path.join(__dirname, 'public', 'images', 'kegiatan');

// Buat folder target jika belum ada
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Pindahkan dan rename file gambar
if (fs.existsSync(sourceDir)) {
  const files = fs.readdirSync(sourceDir);
  
  files.forEach((file, index) => {
    const oldPath = path.join(sourceDir, file);
    // Kita namakan kegiatan-1.jpg, kegiatan-2.jpg dst.
    const ext = path.extname(file);
    const newFileName = `kegiatan-${index + 1}${ext}`;
    const newPath = path.join(targetDir, newFileName);
    
    fs.renameSync(oldPath, newPath);
    console.log(`Berhasil memindahkan: ${file} -> ${newFileName}`);
  });

  // Hapus folder lama setelah kosong
  fs.rmdirSync(sourceDir);
  console.log('Folder tahsin-al-kosasiyah lama berhasil dihapus.');
} else {
  console.log('Folder sumber tidak ditemukan atau sudah dirapikan.');
}

// Hapus index.html karena kita sudah pakai src/pages/index.astro
const indexHtmlPath = path.join(__dirname, 'index.html');
if (fs.existsSync(indexHtmlPath)) {
  fs.unlinkSync(indexHtmlPath);
  console.log('index.html berhasil dihapus.');
}

console.log('✅ Proses merapikan file selesai!');
