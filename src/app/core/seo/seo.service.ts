import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { SEO_DEFAULTS } from './seo.config';
import { RouteSeo } from './seo.types';

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  set(seo: RouteSeo = {}) {
    const seoDefaults = SEO_DEFAULTS;

    const fullUrl =
      seo.canonicalPath ?? this.doc.defaultView?.location.pathname ?? '/';
    const absUrl = this.absUrl(fullUrl);
    const pageTitle = seo.title
      ? `${seo.title} | ${seoDefaults.siteName}`
      : seoDefaults.siteName;
    const description =
      seo.description ?? 'We build high-quality web & software products.';
    const image = seo.imageUrl ?? seoDefaults.fallbackImage;
    const type = seo.type ?? 'website';

    // Title
    this.title.setTitle(pageTitle);

    // Basic metas
    this.setMetaTag({ name: 'description', content: description });
    this.setMetaTag(
      { name: 'keywords', content: (seo.keywords ?? []).join(', ') },
      !seo.keywords?.length
    );

    // Robots
    this.setMetaTag({
      name: 'robots',
      content: seo.noIndex ? 'noindex,nofollow' : 'index,follow',
    });

    // Canonical
    this.setOrUpdateLink('canonical', absUrl);

    // Hreflang
    seoDefaults.locales.forEach((locale) => {
      const href = this.localizedUrl(absUrl, locale, seoDefaults.defaultLocale);
      this.setOrUpdateLink('alternate', href, [
        { name: 'hreflang', value: locale },
      ]);
    });
    // x-default
    this.setOrUpdateLink('alternate', absUrl, [
      { name: 'hreflang', value: 'x-default' },
    ]);

    // Open Graph
    this.setMetaTag({ property: 'og:title', content: pageTitle });
    this.setMetaTag({ property: 'og:description', content: description });
    this.setMetaTag({ property: 'og:type', content: type });
    this.setMetaTag({ property: 'og:url', content: absUrl });
    this.setMetaTag({
      property: 'og:site_name',
      content: seoDefaults.siteName,
    });
    this.setMetaTag({ property: 'og:image', content: image });

    // Twitter
    this.setMetaTag({ name: 'twitter:card', content: 'summary_large_image' });
    if (seoDefaults.twitterHandle)
      this.setMetaTag({
        name: 'twitter:site',
        content: seoDefaults.twitterHandle,
      });
    this.setMetaTag({ name: 'twitter:title', content: pageTitle });
    this.setMetaTag({ name: 'twitter:description', content: description });
    this.setMetaTag({ name: 'twitter:image', content: image });

    // JSON-LD
    this.applyJsonLd(this.defaultOrgJsonLd());
    this.applyJsonLd(this.defaultWebsiteJsonLd(absUrl));
    (seo.jsonLd ?? []).forEach((block) => this.applyJsonLd(block));
  }

  // Helpers
  private setMetaTag(tag: MetaDefinition, skip = false) {
    if (skip) return;
    const selector = tag.name
      ? `name="${tag.name}"`
      : `property="${tag.property}"`;
    this.meta.updateTag(tag, selector);
  }

  private setOrUpdateLink(
    rel: string,
    href: string,
    extraAttrs: { name: string; value: string }[] = []
  ) {
    const head = this.doc.head;
    let link: HTMLLinkElement | null = head.querySelector(
      `link[rel="${rel}"]${this.selectorFrom(extraAttrs)}`
    );
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', rel);
      extraAttrs.forEach((a) => link!.setAttribute(a.name, a.value));
      head.appendChild(link);
    }
    link.setAttribute('href', href);
  }

  private selectorFrom(attrs: { name: string; value: string }[]) {
    return attrs.map((a) => `[${a.name}="${a.value}"]`).join('');
  }

  private absUrl(pathOrAbs: string) {
    if (/^https?:\/\//.test(pathOrAbs)) return pathOrAbs;
    return `${SEO_DEFAULTS.baseUrl}${
      pathOrAbs.startsWith('/') ? '' : '/'
    }${pathOrAbs}`;
  }

  private localizedUrl(absUrl: string, locale: string, defaultLocale: string) {
    const url = new URL(absUrl);
    const parts = url.pathname.split('/').filter(Boolean);
    if (parts[0] && parts[0].length === 2) parts.shift();
    if (locale !== defaultLocale) parts.unshift(locale);
    url.pathname = '/' + parts.join('/');
    return url.toString();
  }

  private applyJsonLd(data: Record<string, any>) {
    // Remove previous of same @type to avoid duplication (simple heuristic)
    const type = data['@type'];
    Array.from(
      this.doc.querySelectorAll(
        `script[type="application/ld+json"][data-ld="${type}"]`
      )
    ).forEach((n) => n.remove());

    const script = this.doc.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-ld', String(type));
    script.text = JSON.stringify(data);
    this.doc.head.appendChild(script);
  }

  private defaultOrgJsonLd() {
    const seoDefaults = SEO_DEFAULTS;
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: seoDefaults.siteName,
      url: seoDefaults.baseUrl,
      logo: seoDefaults.brandLogoUrl,
    };
  }

  private defaultWebsiteJsonLd(absUrl: string) {
    const d = SEO_DEFAULTS;
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: d.siteName,
      url: d.baseUrl,
      inLanguage: d.defaultLocale,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${d.baseUrl}/search?q={query}`,
        'query-input': 'required name=query',
      },
    };
  }
}
