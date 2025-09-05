export type Locale = 'fr' | 'ar' | 'en';

export interface SeoDefaults {
  siteName: string;
  baseUrl: string; //no trailing slash e.g. https://clientwebsite.com
  defaultLocale: Locale;
  locales: Locale[]; //for hreflang
  brandLogoUrl: string; //**full URL to logo e.g. https://clientwebsite.com/assets/logo.png
  twitterHandle?: string; //e.g. @companyName
  fallbackImage: string; // absolute OG image
  fallbackSeoImageUrl: string; //absolute OG image **full URL to image e.g. https://clientwebsite.com/assets/seo-image.png
}

export const SEO_DEFAULTS: SeoDefaults = {
  siteName: 'Arabesque Menuiserie',
  baseUrl: 'https://arabesquemenuiserie.fr',
  defaultLocale: 'fr',
  locales: ['fr', 'ar', 'en'],
  brandLogoUrl: 'https://arabesquemenuiserie.fr/assets/images/logo.png',
  twitterHandle: '@arabesquemenuisier',
  fallbackImage: 'https://arabesquemenuiserie.fr/assets/images/og-default.png',
  fallbackSeoImageUrl:
    'https://arabesquemenuiserie.fr/assets/images/og-default.png',
};
