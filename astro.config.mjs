// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://landingTemplate001.github.io',
  base: 'landingTemplate001',
  integrations: [tailwind()],
  vite: {
    build: {
      outDir: 'dist'
    }
  }
});