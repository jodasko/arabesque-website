import { Component } from '@angular/core';

import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { ScrollService } from 'src/app/services/scroll/scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  navLinks = [
    { id: 'services', labelKey: 'FOOTER_NAV_MENU_1' },
    { id: 'aboutus', labelKey: 'FOOTER_NAV_MENU_2' },
    { id: 'work', labelKey: 'FOOTER_NAV_MENU_3' },
    { id: 'gallery', labelKey: 'FOOTER_NAV_MENU_4' },
  ];
  socialLinks = [
    {
      id: 'facebook',
      labelKey: 'FOOTER_SOCIAL_NETWORK_1',
      icon: 'fa-brands fa-facebook-f',
      // url: 'https://www.facebook.com/arabesquejoinery',
      url: '#',
    },
    {
      id: 'instagram',
      labelKey: 'FOOTER_SOCIAL_NETWORK_2',
      icon: 'fa-brands fa-instagram',
      // url: 'https://www.instagram.com/arabesquejoinery/',
      url: '#',
    },
    {
      id: 'tiktok',
      labelKey: 'FOOTER_SOCIAL_NETWORK_3',
      icon: 'fa-brands fa-tiktok',
      // url: 'https://www.tiktok.com/@arabesquejoinery',
      url: '#',
    },
  ];

  constructor(
    public analyticsService: AnalyticsService,
    private scrollService: ScrollService
  ) {}

  // Current year
  readonly year = new Date().getFullYear();

  onScrollTo(el: string) {
    this.scrollService.scrollTo(el);
  }

  setIdFormat(value: string): string {
    return value.toLocaleLowerCase();
  }
}
