import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://saveupns.org',
  base: '/',
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [sitemap()],
  vite: {
    server: {
      allowedHosts: true,
    },
    preview: {
      allowedHosts: true,
    },
  },
  redirects: {
    '/about': '/',
    '/apply': '/',
    '/co-op-life': '/',
    '/traditions': '/',
    '/resources': '/',
    '/visit': '/',
    '/classrooms': '/',
    '/classrooms/kitten': '/',
    '/classrooms/kangaroo': '/',
    '/classrooms/dolphin': '/',
    '/general-information/about-upns': '/',
    '/information': '/',
    '/requirements': '/',
    '/information/enrollment': '/',
    '/enrollment': '/',
    '/staff-and-board-members': '/',
    '/kitten-room': '/',
    '/kangaroo-room': '/',
    '/dolphin-room': '/',
    '/contact-us': '/',
    '/health-nutrition-and-safety-policies-and-procedures': '/',
    '/discipline-policy': '/'
  },
  build: {
    format: 'directory',
    assets: 'assets'
  }
});
