import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// Para GitHub Pages em repositório de projeto, defina BASE_PATH=/nome-do-repo
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://cassio12.github.io',
  base: '/aurayen',
  trailingSlash: 'always',
  integrations: [react(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
