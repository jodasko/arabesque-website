import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SUPPORTED_LANGUAGES, SupportedLang } from 'src/app/i18n/i18n.config';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  language: SupportedLang = 'en';

  constructor(public translate: TranslateService) {}

  initLanguage() {
    const savedLang = localStorage.getItem('lang') as SupportedLang | null;
    const browserLang = navigator.language.split('-')[0]; // e.g., 'es' from 'es-MX'
    const fallbackLang: SupportedLang = 'en';
    const langToUse: SupportedLang =
      savedLang && SUPPORTED_LANGUAGES.includes(savedLang as SupportedLang)
        ? (savedLang as SupportedLang)
        : SUPPORTED_LANGUAGES.includes(browserLang as SupportedLang)
        ? (browserLang as SupportedLang)
        : fallbackLang;
    this.setLanguage(langToUse);
  }

  setLanguage(lang: SupportedLang): void {
    this.language = lang;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }
}
