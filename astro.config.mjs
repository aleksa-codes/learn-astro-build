import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  site: 'https://aleksastojsic.github.io',
  base: '/learn-astro-build/',
  integrations: [tailwind(), image()]
});
