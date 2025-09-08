import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { SupportedLang } from 'src/app/i18n/i18n.config';
import { LanguageService } from 'src/app/services/language/language.service';
import { ScrollService } from 'src/app/services/scroll/scroll.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { StickyNavDirective } from 'src/app/directives/sticky-nav.directive';

@Component({
  selector: 'navbar-component',
  standalone: true,
  imports: [
    CommonModule,
    StickyNavDirective,
    TranslateModule,
    RouterModule,
    CarouselModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  @Input() logo?: string = 'logo';
  @Input() imageExt?: 'jpg' | 'png' = 'png';
  @Input() alt?: string = 'logo';
  @Input() bgHighlight: string | null = '';

  language: string;
  activeSection: string = '';
  sectionIds = ['hero', 'studio', 'work', 'services', 'process'];
  navLinks = [
    { id: 'menu1', label: 'NAV_MENU_1' },
    { id: 'menu2', label: 'NAV_MENU_2' },
    { id: 'menu3', label: 'NAV_MENU_3' },
    { id: 'menu4', label: 'NAV_MENU_4' },
  ];
  isMenuOpen = false;
  isMobile = false;
  hasTagline = true;

  constructor(
    private languageService: LanguageService,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.isMobile = window.innerWidth <= 991;
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 991;
      if (!this.isMobile) {
        this.isMenuOpen = false; // reset menu state on desktop
      }
    });
    this.language = this.languageService.language;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.activeSectionByScroll();
  }

  onScrollTo(el: string): void {
    this.scrollService.scrollTo(el);
  }

  scrollToTop(): void {
    this.scrollService.scrollToTop();
  }

  onSwitchLanguage(lang: SupportedLang): void {
    this.languageService.setLanguage(lang);
  }

  onToggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  get logoUrl(): string {
    return `/assets/images/${this.logo}.${this.imageExt}`;
  }

  private activeSectionByScroll() {
    const scrollY = window.pageYOffset;
    let closestSection = '';
    let minDistance = Number.MAX_VALUE;
    for (const id of this.sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        const distance = Math.abs(el.offsetTop - scrollY);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = id;
        }
      }
    }
    if (closestSection && closestSection !== this.activeSection) {
      this.activeSection = closestSection;
    }
  }
}
