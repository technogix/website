// Generates the social share images (public/og-<locale>.png, 1200x630) from the site copy.
// Usage: bun scripts/og.ts — needs Chrome or Chromium (set CHROME to its path if it is not found).
// Run it again whenever the hero title, eyebrow or portrait changes, and commit the images.
import { spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { site } from '../src/data/site';
import { getContent } from '../src/i18n';
import { locales } from '../src/i18n/config';

const root = resolve(import.meta.dir, '..');
const file = (path: string) => pathToFileURL(join(root, path)).href;

const chrome = [
  process.env.CHROME,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].find((path) => path && existsSync(path));
if (!chrome) throw new Error('Chrome not found: set the CHROME environment variable to its path.');

const tmp = mkdtempSync(join(tmpdir(), 'technogix-og-'));

for (const locale of locales) {
  const { hero } = getContent(locale);
  const html = `<!doctype html>
<html lang="${locale}"><head><meta charset="utf-8"><style>
  @font-face { font-family: SourceSerif; src: url(${file('node_modules/@fontsource-variable/source-serif-4/files/source-serif-4-latin-wght-normal.woff2')}); font-weight: 200 900; }
  @font-face { font-family: PlexSans; src: url(${file('node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-500-normal.woff2')}); font-weight: 500; }
  @font-face { font-family: PlexSans; src: url(${file('node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-600-normal.woff2')}); font-weight: 600; }
  * { box-sizing: border-box; margin: 0; }
  body { width: 1200px; height: 630px; overflow: hidden; background: #0e2230; color: #fff; font-family: PlexSans, sans-serif;
         display: grid; grid-template-columns: 1fr 300px; gap: 56px; padding: 64px 80px 72px; position: relative; }
  body::after { content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 8px; background: #23a8d4; }
  .text { display: flex; flex-direction: column; }
  .brand { display: flex; align-items: center; gap: 14px; font-weight: 600; font-size: 28px; }
  .brand img { width: 52px; }
  .eyebrow { margin-top: auto; color: #23a8d4; font-weight: 600; font-size: 17px; letter-spacing: 0.08em; text-transform: uppercase; }
  h1 { margin-top: 18px; font-family: SourceSerif, serif; font-weight: 600; font-size: 58px; line-height: 1.12; letter-spacing: -0.01em; }
  .url { margin-top: 28px; color: rgb(255 255 255 / 0.7); font-size: 22px; }
  .person { align-self: center; text-align: center; }
  .person img { width: 240px; height: 240px; border-radius: 50%; border: 4px solid #23a8d4; object-fit: cover; }
  .name { margin-top: 22px; font-weight: 600; font-size: 26px; }
  .role { margin-top: 4px; color: rgb(255 255 255 / 0.7); font-size: 20px; }
</style></head><body>
  <div class="text">
    <div class="brand"><img src="${file('public/logo.png')}" alt=""><span>${site.name}</span></div>
    <p class="eyebrow">${hero.eyebrow}</p>
    <h1>${hero.title}</h1>
    <p class="url">${new URL(site.url).host}</p>
  </div>
  <div class="person">
    <img src="${file('src/assets/portrait.jpg')}" alt="">
    <p class="name">${site.person}</p>
    <p class="role">${hero.card.role}</p>
  </div>
</body></html>`;

  const page = join(tmp, `${locale}.html`);
  writeFileSync(page, html);
  const out = join(root, 'public', `og-${locale}.png`);
  const run = spawnSync(chrome, [
    '--headless=new', '--disable-gpu', '--hide-scrollbars', '--allow-file-access-from-files',
    `--user-data-dir=${join(tmp, 'profile')}`, '--window-size=1200,630', '--virtual-time-budget=3000',
    `--screenshot=${out}`, pathToFileURL(page).href,
  ]);
  if (run.status !== 0 || !existsSync(out)) throw new Error(`Chrome failed for ${locale}: ${run.stderr}`);
  console.log(out);
}
