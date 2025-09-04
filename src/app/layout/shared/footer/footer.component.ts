import { Component } from '@angular/core';

import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { ScrollService } from 'src/app/services/scroll/scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  // responsiveMenuVisible: Boolean = false;
  navLinks = [
    { id: 'menu1', label: 'FOOTER_NAV_MENU_1' },
    { id: 'menu2', label: 'FOOTER_NAV_MENU_2' },
    { id: 'menu3', label: 'FOOTER_NAV_MENU_3' },
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
}
