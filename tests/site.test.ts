// Checks run against the built site (dist/). Build first: `npx astro build`.
import { describe, expect, test } from 'bun:test';
import { existsSync, readFileSync } from 'node:fs';
import { routes } from '../src/i18n/config';
import { TODO } from '../src/data/site';

const dist = new URL('../dist/', import.meta.url);
const file = (url: string) => new URL(url.replace(/^\//, '') + (url.endsWith('/') ? 'index.html' : ''), dist);
const read = (url: string) => readFileSync(file(url), 'utf8');

// Every page in every language, from the route table the site itself uses.
const pages = Object.entries(routes).flatMap(([key, byLocale]) =>
  Object.entries(byLocale).map(([locale, url]) => ({ key, locale, url })),
);

describe('built site', () => {
  for (const { key, locale, url } of pages) {
    describe(`${url} (${key}, ${locale})`, () => {
      const html = existsSync(file(url)) ? read(url) : '';

      test('exists', () => {
        expect(html).not.toBe('');
      });

      test('declares its language, a title and a description', () => {
        expect(html).toContain(`<html lang="${locale}"`);
        expect(html).toMatch(/<title>[^<]+<\/title>/);
        expect(html).toMatch(/<meta name="description" content="[^"]+"/);
      });

      test('lists every language version of itself', () => {
        for (const [l, u] of Object.entries(routes[key as keyof typeof routes])) {
          expect(html).toContain(`hreflang="${l}" href="https://technogix.dev${u}"`);
        }
      });

      test('language switcher points to the same page in the other language', () => {
        const other = Object.entries(routes[key as keyof typeof routes]).find(([l]) => l !== locale)!;
        expect(html).toMatch(new RegExp(`class="lang"[^>]*href="${other[1]}"|href="${other[1]}"[^>]*class="lang"`));
      });

      test('loads nothing from a third party (no cookie banner needed)', () => {
        const sources = [...html.matchAll(/<(?:script|link|img|iframe)\b[^>]*\b(?:src|href)="([^"]+)"/g)]
          .map((m) => m[1])
          .filter((u) => /^(https?:)?\/\//.test(u));
        // Only canonical and alternate links may be absolute, and they point to our own domain.
        expect(sources.filter((u) => !u.startsWith('https://technogix.dev/'))).toEqual([]);
      });

      test('has its share image', () => {
        expect(html).toContain(`<meta property="og:image" content="https://technogix.dev/og-${locale}.png"`);
        expect(existsSync(file(`/og-${locale}.png`))).toBe(true);
      });

      test('every image has an alt attribute', () => {
        const imgs = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
        // A bare `alt` counts: it is how Astro writes alt="" for a decorative image.
        expect(imgs.filter((tag) => !/\salt(?:=|[\s>])/.test(tag))).toEqual([]);
      });

      test('internal links point to built pages', () => {
        const links = [...html.matchAll(/href="(\/[^"#]*)/g)].map((m) => m[1]);
        expect(links.filter((l) => !existsSync(file(l)))).toEqual([]);
      });
    });
  }

  test('in-page anchors point to existing ids, in both languages', () => {
    for (const url of Object.values(routes.home)) {
      const html = read(url);
      const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));
      const anchors = [...html.matchAll(/href="(?:\/(?:fr\/)?)?#([^"]+)"/g)].map((m) => m[1]);
      expect(anchors.length).toBeGreaterThan(0);
      expect(anchors.filter((a) => !ids.has(a))).toEqual([]);
    }
  });

  test('the sitemap lists every page, and robots.txt points to it', () => {
    const sitemap = readFileSync(new URL('sitemap.xml', dist), 'utf8');
    for (const { url } of pages) expect(sitemap).toContain(`<loc>https://technogix.dev${url}</loc>`);
    expect(readFileSync(new URL('robots.txt', dist), 'utf8')).toContain('Sitemap: https://technogix.dev/sitemap.xml');
  });

  // Blocks a release while a fact is still missing. Run with RELEASE=1.
  test.skipIf(!process.env.RELEASE)('no placeholder left', () => {
    for (const { url } of pages) expect(read(url)).not.toContain(TODO);
  });
});
