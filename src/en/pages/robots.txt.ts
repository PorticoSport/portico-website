import type { APIRoute } from 'astro';
import { getI18N } from "../../shared/i18n/index";

const i18n = getI18N({ language: 'en' });

const robotsTxt = `
User-agent: *
Allow: /
Sitemap: ${new URL('padel-news/news-sitemap.xml', i18n.SITE).href}
Sitemap: ${new URL('sitemap-index.xml', i18n.SITE).href}
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
