import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Apenas isso deve estar aqui
  site: 'https://www.emguapi.com', // URL do site
  
  integrations: [tailwind(), sitemap()],

  adapter: vercel(),
});