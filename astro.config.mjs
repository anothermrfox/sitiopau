import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://paulacarvajal.cl',
  output: 'static',
  integrations: [sitemap()],
});
