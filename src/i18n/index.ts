import { en } from './en';
import { fr } from './fr';
import { toLocale } from './config';

export type { Content } from './fr';

const content = { en, fr };

/** Copy for the locale Astro is rendering (Astro.currentLocale). */
export const getContent = (locale: string | undefined) => content[toLocale(locale)];
