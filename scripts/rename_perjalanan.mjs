import fs from 'fs';
import path from 'path';

const projectDir = 'd:\\tahsin-al-kosasiyah';
const imagesDir = path.join(projectDir, 'public', 'images', 'perjalanan');

const filesToMove = [
  { old: 'WhatsApp Image 2026-05-02 at 06.00.21 (1).jpeg', newFile: 'offline-1.jpeg' },
  { old: 'WhatsApp Image 2026-05-02 at 06.00.21.jpeg', newFile: 'offline-2.jpeg' },
  { old: 'WhatsApp Image 2026-05-02 at 06.00.22 (1).jpeg', newFile: 'offline-3.jpeg' },
  { old: 'WhatsApp Image 2026-05-02 at 06.00.22.jpeg', newFile: 'offline-4.jpeg' },
  { old: 'WhatsApp Image 2026-05-02 at 06.00.51.jpeg', newFile: 'offline-5.jpeg' },
  { old: 'WhatsApp Image 2026-05-02 at 06.00.52.jpeg', newFile: 'offline-6.jpeg' },
  { old: 'WhatsApp Image 2026-05-02 at 06.03.07.jpeg', newFile: 'online-1.jpeg' }
];

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

filesToMove.forEach(item => {
  const oldPath = path.join(projectDir, item.old);
  const newPath = path.join(imagesDir, item.newFile);

  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Moved: ${item.old} -> public/images/perjalanan/${item.newFile}`);
  } else {
    console.log(`File not found, maybe already moved? : ${item.old}`);
  }
});

console.log('Selesai merapikan file perjalanan tahsin.');
