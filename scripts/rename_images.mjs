import fs from 'fs';
import path from 'path';

const projectDir = 'd:\\tahsin-al-kosasiyah\\public\\images';

const filesToMove = [
  {
    old: 'WhatsApp Image 2026-05-05 at 04.55.32.jpeg',
    newFolder: 'buku',
    newFile: 'buku-utsmani-anak.jpeg'
  },
  {
    old: 'WhatsApp Image 2026-05-05 at 04.55.32 (1).jpeg',
    newFolder: 'buku',
    newFile: 'buku-utsmani-dewasa.jpeg'
  },
  {
    old: 'WhatsApp Image 2026-05-05 at 05.07.58.jpeg',
    newFolder: 'logo',
    newFile: 'logo-yayasan.jpeg'
  },
  {
    old: 'WhatsApp Image 2026-05-05 at 05.11.13.jpeg',
    newFolder: 'profil',
    newFile: 'tahun-berdiri.jpeg'
  }
];

filesToMove.forEach(item => {
  const oldPath = path.join(projectDir, item.old);
  const newDir = path.join(projectDir, item.newFolder);
  const newPath = path.join(newDir, item.newFile);

  if (fs.existsSync(oldPath)) {
    if (!fs.existsSync(newDir)) {
      fs.mkdirSync(newDir, { recursive: true });
    }
    fs.renameSync(oldPath, newPath);
    console.log(`Moved: ${item.old} -> ${item.newFolder}/${item.newFile}`);
  } else {
    console.log(`File not found, maybe already moved? : ${item.old}`);
  }
});

console.log('Selesai merapikan file gambar.');
