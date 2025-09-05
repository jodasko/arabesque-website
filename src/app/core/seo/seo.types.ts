export interface RouteSeo {
  title?: string; // plain title
  description?: string;
  keywords?: string[];
  imageUrl?: string; //absolute URL to image e.g. https://clientwebsite.com/assets/seo-image.png
  canonicalPath?: string; // e.g. '/services/web'
  noIndex?: boolean; //if true, adds <meta name="robots" content="noindex" />
  type?: 'website' | 'article';
  jsonLd?: Record<string, any>[]; // extra JSON-LD blocks if needed
  locale?: string; //e.g. 'en', 'fr', 'ar' - must be in SEO_DEFAULTS.locales
}
