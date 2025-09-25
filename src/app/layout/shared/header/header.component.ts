import { Component, OnInit } from '@angular/core';
import { SupportedLang } from 'src/app/i18n/i18n.config';
import { TranslateService } from '@ngx-translate/core';

interface NavLink {
  id: string;
  label: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navLinks = [
    { id: 'services', labelKey: 'NAV_MENU_1' },
    { id: 'aboutus', labelKey: 'NAV_MENU_2' },
    { id: 'work', labelKey: 'NAV_MENU_3' },
    { id: 'gallery', labelKey: 'NAV_MENU_4' },
  ];
  isMulilingual = true;
  listLanguages: SupportedLang[] = ['fr', 'en', 'ar'];
  tagline = 'NAV_TAGLINE';
  companyName = 'COMPANY_NAME';
  backgroundColor = '#ffffff';

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {}

  get sectionIds(): string[] {
    return this.navLinks.map((l) => l.id);
  }

  get sectionIdsByKey(): string[] {
    // derive dynamically from navLinks (first 3 only if you want)
    return this.navLinks
      .slice(0, this.navLinks.length)
      .map((link) => link.id.toLowerCase().replace(/\s+/g, ''));
  }

  private translateByKey(keys: string[]): void {
    // const keys = ['NAV_MENU_1', 'NAV_MENU_2', 'NAV_MENU_3', 'NAV_MENU_4'];
    this.translate.get(keys).subscribe((transition) => {
      this.navLinks = keys.map((k) => ({
        id: this.slugify(transition[k]),
        labelKey: transition[k], // translated label
      }));
    });
  }

  private slugify(value: string): string {
    return value
      .toLowerCase()
      .replace(/[^a-z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
  }
}
