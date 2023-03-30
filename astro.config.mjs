import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import svelte from '@astrojs/svelte';

import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image(), svelte()],
  output: 'server',
  adapter: netlify(),
});
