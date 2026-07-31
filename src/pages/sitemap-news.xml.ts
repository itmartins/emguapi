import type { APIRoute } from 'astro';
// Se usar Content Collections do Astro, importe aqui:
// import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  // Exemplo: buscar notícias publicadas nas últimas 48h
  // const posts = await getCollection('noticias');
  
  const articles = [
    {
      slug: 'exemplo-noticia-guapimirim',
      title: 'Título da Notícia Recente de Guapimirim',
      publishedAt: new Date().toISOString()
    }
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
    ${articles.map(art => `
      <url>
        <loc>https://emguapi.com/noticias/${art.slug}</loc>
        <news:news>
          <news:publication>
            <news:name>emguapi.com</news:name>
            <news:language>pt</news:language>
          </news:publication>
          <news:publication_date>${art.publishedAt}</news:publication_date>
          <news:title>${art.title.replace(/[<>&'"]/g, '')}</news:title>
        </news:news>
      </url>
    `).join('')}
  </urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=1800'
    }
  });
};