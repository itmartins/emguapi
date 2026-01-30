// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const noticias = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    data: z.string(),
    categoria: z.string(),
    imagem: z.string().optional(),
  }),
});

const turismo = defineCollection({
  type: 'content',
  schema: z.object({
    nome: z.string(),
    categoria: z.string(), // Ex: Cachoeira, Trilha, Monumento
    imagem: z.string(),
    localizacao: z.string(),
    dificuldade: z.string().optional(),
  }),
});

export const collections = { 
    'noticias': noticias,
    'turismo': turismo 
};