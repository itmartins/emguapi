import { defineCollection } from 'astro:content';

export const collections = {
  noticias: defineCollection({
    type: 'content'
  }),
  turismo: defineCollection({
    type: 'content'
  }),
  denuncias: defineCollection({
    type: 'content'
  })
};