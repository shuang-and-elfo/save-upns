import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://upns.info',
  base: '/',
  output: 'static',
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
