import { defineConfig } from "astro/config";
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';


// https://astro.build/config
export default defineConfig({
     site: 'https://isabellelamarre.fr',
  integrations: [tailwind(), sitemap(), compress()],
  output: 'static',

  vite: {
    server: {
      headers: {
        // Sécurité maximale côté développement (et build SSR si utilisé)
        'Content-Security-Policy': `
          default-src 'self';
          img-src 'self' data: https://res.cloudinary.com;
          script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://assets.calendly.com;
          style-src 'self' 'unsafe-inline' https://assets.calendly.com;
          font-src 'self' data:;
          connect-src 'self' https://api.calendly.com https://res.cloudinary.com;
          frame-src https://calendly.com;
          object-src 'none';
          base-uri 'self';
          form-action 'self';
          frame-ancestors 'none';
        `.replace(/\s{2,}/g, ' ').trim(),
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'Permissions-Policy': 'geolocation=(), camera=(), microphone=(), payment=()',
        'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload'
      }
    }
  }
});