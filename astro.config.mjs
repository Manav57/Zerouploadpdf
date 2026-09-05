// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://zerouploadpdf.com',
  adapter: cloudflare({
    imageService: 'passthrough',
  }),
  i18n: {
    locales: ['en', 'es', 'ja', 'fr', 'de', 'pt', 'ko', 'it'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: [
          '**/node_modules/**',
          '**/.git/**',
          '**/.wrangler/**',
          '**/.astro/**',
        ],
      },
    },
  },
});