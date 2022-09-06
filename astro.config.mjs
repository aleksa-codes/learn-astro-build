import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  site: 'https://aleksastojsic.github.io',
  base: '/first-astro-site',
  integrations: [tailwind(), image()]
});
