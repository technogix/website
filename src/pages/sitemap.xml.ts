import type { APIRoute } from 'astro';
import { routes } from '../i18n/config';

// Every page in every language, each listing its translations (hreflang).
export const GET: APIRoute = ({ site }) => {
  const abs = (path: string) => new URL(path, site).href;
  const urls = Object.values(routes).flatMap((byLocale) => {
    const alternates = Object.entries(byLocale)
      .map(([locale, path]) => `    <xhtml:link rel="alternate" hreflang="${locale}" href="${abs(path)}"/>`)
      .join('\n');
    return Object.values(byLocale).map((path) => `  <url>\n    <loc>${abs(path)}</loc>\n${alternates}\n  </url>`);
  });
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    '</urlset>',
  ].join('\n');
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
