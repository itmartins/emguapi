// src/content.config.ts
import { defineCollection, z } from 'astro:content';
// Importação nova obrigatória do Astro 7
import { glob } from 'astro/loaders'; 

// 1. Definição para Notícias
const noticias = defineCollection({
  // O type: 'content' saiu, o loader entrou apontando para a pasta correta:
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/noticias" }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    data: z.coerce.date(),
    categoria: z.string(),
    autor: z.string().default("Equipe emguapi"), 
    imagem: z.string().optional(),
    destaque: z.boolean().optional(),
    tags: z.array(z.string()).optional(), 
  }),
});

// 2. Definição para Turismo
const turismo = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/turismo" }),
  schema: z.object({
    nome: z.string(),
    categoria: z.string(),
    imagem: z.string(),
    localizacao: z.string(),
    dificuldade: z.string().optional(),
  }),
});

// 3. Definição para Denúncias / Voz da Comunidade
const denuncias = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/denuncias" }),
  schema: z.object({
    autor: z.string(),
    bairro: z.string(),
    data: z.coerce.date(), // Importante para ordenar pela mais recente
    resumo_relato: z.string(), // O texto curto que vai no balão
  }),
});

// Exportação final das coleções
export const collections = { 
    'noticias': noticias,
    'turismo': turismo,
    'denuncias': denuncias
};