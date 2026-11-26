import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx()],
  devToolbar: { enabled: false },
  vite: {
    resolve: {
      alias: {
        '@components': new URL('./src/components/', import.meta.url).pathname,
        '@data': new URL('./src/data/', import.meta.url).pathname,
        '@layouts': new URL('./src/layouts/', import.meta.url).pathname,
        '@styles': new URL('./src/styles/', import.meta.url).pathname,
      },
    },
  },
});
