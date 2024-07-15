import legacy from '@vitejs/plugin-legacy';
import topLevelAwait from 'vite-plugin-top-level-await';
import node from '@astrojs/node';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  // prefetch: {
  //   prefetchAll: true
  // },

  adapter: node({ mode: 'standalone' }),

  output: 'server',

  integrations: [react(), tailwind()],

  vite: {
    build: {
      manifest: true,
    },
    // Example: Add custom vite plugins directly to your Astro project
    plugins: [
      legacy({
        polyfills: ['es.promise.finally', 'es/map', 'es/set'],
        modernPolyfills: ['es.promise.finally'],
        targets: ['default not IE 11'],
        renderLegacyChunks: true,
      }),
      topLevelAwait({
        // The export name of top-level await promise for each chunk module
        promiseExportName: '__tla',
        // The function to generate import names of top-level await promise in each chunk module
        promiseImportName: (i) => `__tla_${i}`,
      }),
    ],
  },
});
