import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

/*
  Полноразмерный вариант изображения для просмотра на всё окно.

  На странице картинки намеренно отдаются под свой размер в вёрстке — иначе
  мобильный вес вырастает в разы. Но при открытии в Lightbox нужен весь
  исходник: до этой правки слайдер «до/после» отдавал 2400px при источнике
  4096, и зум упирался в 59% доступной детализации.

  Вариант не попадает в разметку как src — только в data-zoom-src, поэтому
  скачивается лениво, ровно в момент открытия. Ширину отдаём отдельно
  (data-zoom-w): пока полный вариант в пути, Lightbox показывает страничный,
  и предел зума нужно считать по будущему файлу, а не по текущему — иначе на
  телефоне потолок падал до 1.5× с растягиванием.
*/
const MAX_WIDTH = 4096;

export interface ZoomSource {
  'data-zoom-src': string;
  'data-zoom-w': number;
}

export async function zoomSource(image: ImageMetadata): Promise<ZoomSource> {
  const width = Math.min(MAX_WIDTH, image.width);
  const zoom = await getImage({ src: image, format: 'webp', width });
  return { 'data-zoom-src': zoom.src, 'data-zoom-w': width };
}
