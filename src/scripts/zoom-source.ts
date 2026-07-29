import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

/*
  Полноразмерный вариант изображения для просмотра на всё окно.

  На странице картинки намеренно отдаются под свой размер в вёрстке — иначе
  мобильный вес вырастает в разы. Но при открытии в Lightbox нужен весь
  исходник: до этой правки слайдер «до/после» отдавал 2400px при источнике
  4096, и зум упирался в 59% доступной детализации.

  Этот вариант не попадает в разметку как src — только в data-zoom-src,
  поэтому скачивается лениво, ровно в момент открытия.
*/
const MAX_WIDTH = 4096;

export async function zoomSource(image: ImageMetadata): Promise<string> {
  const zoom = await getImage({
    src: image,
    format: 'webp',
    width: Math.min(MAX_WIDTH, image.width),
  });
  return zoom.src;
}
