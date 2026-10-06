# Technogix website

[![deploy](https://img.shields.io/github/actions/workflow/status/technogix/website/deploy.yml?branch=main&label=deploy&logo=githubactions)](https://github.com/technogix/website/actions/workflows/deploy.yml)

Source of [technogix.dev](https://technogix.dev), the website of Technogix SARL. Static site built with [Astro](https://astro.build) and React; it ships almost no JavaScript (only the mobile menu is a React island). English at `/`, French under `/fr/`.

## Requirements

- [Node.js](https://nodejs.org) 22.12 or later, to run Astro
- [Bun](https://bun.sh), as package manager and test runner

Astro must run on Node: Bun's own runtime crashes on `react-dom/server` while prerendering.

## Usage

```bash
bun install
npx astro dev        # http://localhost:4321
npx astro build      # static site in dist/
bun test tests/      # checks on dist/ (build first)
RELEASE=1 bun test tests/   # also fails while a [TODO] placeholder is left
bun run og           # regenerates the share images public/og-<locale>.png (needs Chrome)
```

## Layout

```
src/i18n/en.ts, fr.ts  All the copy, one file per language. Edit text here; en.ts is typed against fr.ts.
src/i18n/config.ts     Locales and the URL of each page in each language (used by the switcher)
src/data/site.ts       Facts shared by both languages (contact, links, company registration)
src/components/        One component per section; HomePage and LegalPage assemble them
src/components/MobileNav.tsx   The only interactive part (React)
src/pages/             Thin route files: /, /legal-notice/, /fr/, /fr/mentions-legales/, and sitemap.xml
src/styles/global.css  Design tokens (colours, fonts, spacing) and shared styles
public/                logo.png, robots.txt (served as is)
src/assets/            Portrait and photos, optimised by Astro (see Design rules)
tests/                 Checks on the built site
scripts/og.ts          Builds the 1200x630 share images from the copy, the logo and the portrait
```

## Adding a page

Add its URLs to `routes` in `src/i18n/config.ts`, its copy to both language files, and one route file per language in `src/pages/`. The tests pick up new routes automatically.

## Share images

LinkedIn and other networks show `public/og-<locale>.png` when the site is shared. They are generated from the hero title, the eyebrow and the portrait: run `bun run og` after changing any of them, and commit the images.

## Design rules

- The logo blue `#23a8d4` is an accent only (rules, borders). It is too light for text on white; text and buttons use `--brand-ink` `#0a6d8e`.
- Photos are licensed from iStock. Only resized web versions are committed (`src/assets/*.jpg`, served as WebP by Astro); the full-resolution originals stay in `src/assets/originals/`, which git ignores: committing them to a public repository would redistribute them.
- Fonts are self-hosted, and the site loads nothing from a third party: no cookie banner needed. A test enforces it.

## Deployment

The `deploy` workflow builds and tests every pull request. On `main`, it also refuses any `[TODO]` placeholder (`RELEASE=1`), then publishes `dist/` on GitHub Pages.

`main` only accepts squash-merged pull requests: work on a branch, open a pull request, merge.

The repository, its branch rules, GitHub Pages and the DNS records of technogix.dev are managed by Terraform in [technogix/infrastructure](https://github.com/technogix/infrastructure) (`stacks/website`), not by hand.
