import { defineCollection, z } from 'astro:content';

// Definição única e completa para Notícias
const noticias = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    data: z.coerce.date(),
    categoria: z.string(),
    // O campo autor agora está integrado e tem um valor padrão
    autor: z.string().default("Equipe emguapi"), 
    imagem: z.string().optional(),
    destaque: z.boolean().optional(),
  }),
});

// Definição para Turismo
const turismo = defineCollection({
  type: 'content',
  schema: z.object({
    nome: z.string(),
    categoria: z.string(),
    imagem: z.string(),
    localizacao: z.string(),
    dificuldade: z.string().optional(),
  }),
});

// NOVA DEFINIÇÃO: Denúncias / Voz da Comunidade
const denuncias = defineCollection({
  type: 'content',
  schema: z.object({
    autor: z.string(),
    bairro: z.string(),
    data: z.coerce.date(), // Importante para ordenar pela mais recente
    resumo_relato: z.string(), // O texto curto que vai no balão
  }),
});

// Atualize o export final para incluir a nova coleção
export const collections = { 
    'noticias': noticias,
    'turismo': turismo,
    'denuncias': denuncias // <--- Adicione esta linha
};