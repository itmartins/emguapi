// src/content.config.ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
  noticias: defineCollection({
    // Mudamos para **/*.md para contornar o bug do Windows
    loader: glob({ pattern: "**/*.md", base: "./src/content/noticias" })
  }),
  turismo: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/turismo" })
  }),
  denuncias: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/denuncias" })
  })
};