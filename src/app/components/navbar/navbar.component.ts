import { Component, OnInit, HostListener, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SupportedLang } from 'src/app/i18n/i18n.config';
import { LanguageService } from 'src/app/services/language/language.service';
import { ScrollService } from 'src/app/services/scroll/scroll.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { StickyNavDirective } from 'src/app/directives/sticky-nav.directive';
import { SHARED_STANDALONE_IMPORTS } from '../shared-standalone.imports';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'navbar-component',
  standalone: true,
  imports: [
    ...SHARED_STANDALONE_IMPORTS,
    StickyNavDirective,
    RouterModule,
    CarouselModule,
    NgbModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  @Input() logo: string = 'logo';
  @Input() logoTagline: string | null = null;
  @Input() imageExt?: 'jpg' | 'png' = 'png';
  @Input() alt?: string = 'logo';
  @Input() bgHighlight: string | null = '';
  @Input() navLinks: NavLink[] = [];
  @Input() sectionIds: string[] = [];
  @Input() isMultilingual: boolean = false;
  @Input() languages: string[] = [];

  language: string;
  activeSection: string = '';
  isMenuOpen = false;
  isMobile = false;

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

  get logoUrl(): string {
    return `/assets/images/${this.logo}.${this.imageExt}`;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.activeSectionByScroll();
  }

  onScrollTo(el: string): void {
    this.scrollService.scrollTo(this.setIdFormat(el));
  }

  setIdFormat(value: string): string {
    return value.toLocaleLowerCase();
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

interface NavLink {
  id: string;
  label: string;
}
