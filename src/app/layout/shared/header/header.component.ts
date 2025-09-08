import { Component, OnInit, HostListener } from '@angular/core';
import { LanguageService } from 'src/app/services/language/language.service';
import { SupportedLang } from 'src/app/i18n/i18n.config';
import { ScrollService } from 'src/app/services/scroll/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
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
