export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

// Each page and its URL in every language, so the switcher lands on the same page.
export const routes = {
  home: { en: '/', fr: '/fr/' },
  legal: { en: '/legal-notice/', fr: '/fr/mentions-legales/' },
} satisfies Record<string, Record<Locale, string>>;

export type PageKey = keyof typeof routes;

export function toLocale(value: string | undefined): Locale {
  return (locales as readonly string[]).includes(value ?? '') ? (value as Locale) : defaultLocale;
}

export const otherLocale = (locale: Locale): Locale => (locale === 'en' ? 'fr' : 'en');
