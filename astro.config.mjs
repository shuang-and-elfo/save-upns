import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shuang-and-elfo.github.io',
  base: '/upns-website',
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
    '/general-information/about-upns': '/about',
    '/information': '/about#hours',
    '/requirements': '/co-op-life',
    '/information/enrollment': '/apply',
    '/enrollment': '/apply',
    '/staff-and-board-members': '/about#team',
    '/kitten-room': '/classrooms/kitten',
    '/kangaroo-room': '/classrooms/kangaroo',
    '/dolphin-room': '/classrooms/dolphin',
    '/contact-us': '/visit',
    '/health-nutrition-and-safety-policies-and-procedures': '/resources',
    '/discipline-policy': '/resources'
  },
  build: {
    format: 'directory'
  }
});
