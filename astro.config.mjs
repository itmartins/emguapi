import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx"; // 1. Nova importação do MDX adicionada aqui

export default defineConfig({
  // Apenas isso deve estar aqui
  site: 'https://www.emguapi.com', // URL do site
  
  // 2. mdx() adicionado na lista abaixo
  integrations: [tailwind(), sitemap(), mdx()], 

  adapter: vercel(),
});