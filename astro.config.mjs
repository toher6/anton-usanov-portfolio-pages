// @ts-check
import { defineConfig } from 'astro/config';
import typograph from './scripts/typograph-integration.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://antnusnv.com',
  integrations: [typograph()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // Скриншоты интерфейсов с градиентами разваливаются на блоки при
        // любом lossy-сжатии, поэтому весь webp кодируем без потерь
        webp: { lossless: true, effort: 4 },
      },
    },
  },
});
