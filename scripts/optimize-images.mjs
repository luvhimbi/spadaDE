import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const jobs = [
  { src: 'src/assets/logo.jpg', out: 'src/assets/logo.webp', width: 96 },
  { src: 'src/assets/exterior-courtyard.jpeg', out: 'src/assets/exterior-courtyard.webp', width: 1280 },
  { src: 'src/assets/exterior-facade.jpeg', out: 'src/assets/exterior-facade.webp', width: 900 },
  { src: 'src/assets/spadade-collage.jpeg', out: 'src/assets/spadade-collage.webp', width: 900 },
  { src: 'src/assets/room-bedroom.jpeg', out: 'src/assets/room-bedroom.webp', width: 900 },
  { src: 'src/assets/room-bedroom-angle.jpeg', out: 'src/assets/room-bedroom-angle.webp', width: 900 },
  { src: 'src/assets/room-dining-area.jpeg', out: 'src/assets/room-dining-area.webp', width: 900 },
  { src: 'src/assets/hallway-decor.jpg', out: 'src/assets/hallway-decor.webp', width: 800 },
  { src: 'src/assets/dining-nook-art.jpg', out: 'src/assets/dining-nook-art.webp', width: 800 },
  { src: 'src/assets/wall-planters.jpg', out: 'src/assets/wall-planters.webp', width: 800 },
  { src: 'src/assets/bathroom-marble.jpg', out: 'src/assets/bathroom-marble.webp', width: 800 },
  { src: 'src/assets/gallery-addition-1.jpg', out: 'src/assets/gallery-addition-1.webp', width: 900 },
  { src: 'src/assets/gallery-addition-2.jpg', out: 'src/assets/gallery-addition-2.webp', width: 800 },
  { src: 'src/assets/gallery-addition-3.jpg', out: 'src/assets/gallery-addition-3.webp', width: 800 },
  { src: 'src/assets/northcliff-ridge.jpg', out: 'src/assets/northcliff-ridge.webp', width: 800 },
  { src: 'src/assets/walter-sisulu.jpg', out: 'src/assets/walter-sisulu.webp', width: 800 },
  { src: 'src/assets/kloofendal.jpg', out: 'src/assets/kloofendal.webp', width: 800 },
  { src: 'public/Spa image.jpeg', out: 'public/spa-image.webp', width: 900 },
  { src: 'public/rooftop-poster.jpg', out: 'public/rooftop-poster.webp', width: 640 },
  { src: 'src/assets/exterior-courtyard.jpeg', out: 'public/hero.webp', width: 1280 },
]

for (const job of jobs) {
  const input = path.resolve(job.src)
  if (!fs.existsSync(input)) {
    console.warn('skip missing', job.src)
    continue
  }
  await sharp(input)
    .rotate()
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: 72, effort: 4 })
    .toFile(path.resolve(job.out))
  const before = fs.statSync(input).size
  const after = fs.statSync(path.resolve(job.out)).size
  console.log(`${job.out}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`)
}
