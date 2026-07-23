// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import { onRequestOptions, onRequestPost, onRequest } from './functions/api/lead.js';

function devLeadApi() {
  return {
    name: 'solar-06-dev-lead-api',
    hooks: {
      'astro:server:setup': ({ server }) => {
        server.middlewares.stack.unshift({ route: '', handle: async (req, res, next) => {
          const path = new URL(req.url || '/', 'http://localhost').pathname;
          if (path !== '/api/lead' && path !== '/api/lead/') return next();
          const request = new Request(new URL(req.url || '/', 'http://localhost'), {
            method: req.method, headers: req.headers,
            body: req.method === 'POST' ? req : undefined,
            duplex: req.method === 'POST' ? 'half' : undefined,
          });
          const response = req.method === 'OPTIONS' ? await onRequestOptions({ request, env: process.env })
            : req.method === 'POST' ? await onRequestPost({ request, env: process.env })
            : await onRequest({ request, env: process.env });
          res.statusCode = response.status;
          response.headers.forEach((value, key) => res.setHeader(key, value));
          res.end(Buffer.from(await response.arrayBuffer()));
        }});
      },
    },
  };
}

export default defineConfig({
  site: 'https://panneau-solaire-alpes-maritimes.fr',
  output: 'static',
  adapter: cloudflare({ imageService: 'passthrough' }),
  integrations: [devLeadApi(), sitemap({
    changefreq: 'weekly',
    filter: (page) => !['/mentions-legales/', '/politique-confidentialite/', '/404/'].some((path) => page.endsWith(path)),
    serialize(item) { item.priority = item.url.endsWith('/') ? 1 : item.url.includes('/guides/') ? 0.75 : 0.85; return item; },
  })],
  build: { format: 'directory' },
});
