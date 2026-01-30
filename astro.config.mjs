import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // Apenas isso deve estar aqui
  integrations: [tailwind()],
});