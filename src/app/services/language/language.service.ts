import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SUPPORTED_LANGUAGES, SupportedLang } from 'src/app/i18n/i18n.config';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  language: SupportedLang = 'fr';
  defaultLanguage: SupportedLang = 'fr';
  browserLanguageEnabled: boolean = false;
  constructor(public translate: TranslateService) {}

  initLanguage() {
    const savedLang = localStorage.getItem('lang') as SupportedLang | null;
    const langToUse: SupportedLang = this.languageToUse(
      this.browserLanguageEnabled,
      savedLang,
      this.defaultLanguage
    );
    this.setLanguage(langToUse);
  }

  setLanguage(lang: SupportedLang): void {
    this.language = lang;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }

  /**
   * Determine which language to use based on localStorage, browser settings, and default.
   * @param hasLocalStorage
   * @param useBrowserLanguage
   * @param defaultLanguage
   * @returns SupportedLang
   */
  private languageToUse(
    useBrowserLanguage: boolean,
    hasLocalStorage: string | null,
    defaultLanguage: SupportedLang
  ): SupportedLang {
    if (!!hasLocalStorage) {
      return hasLocalStorage as SupportedLang;
    }

    if (useBrowserLanguage) {
      const browserLang = navigator.language.split('-')[0]; // e.g., 'es' from 'es-MX'
      return SUPPORTED_LANGUAGES.includes(browserLang as SupportedLang)
        ? (browserLang as SupportedLang)
        : defaultLanguage;
    }

    return defaultLanguage;
  }
}
