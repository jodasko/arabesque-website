import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private currentUrl: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url;
    });
  }

  getCurrentUrl() {
    return this.currentUrl;
  }

  activeSectionByScroll(sectionIds: string[], activeSection: string): void {
    const scrollY = window.pageYOffset;
    let closestSection = '';
    let minDistance = Number.MAX_VALUE;
    console.log('sssss');

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        const distance = Math.abs(el.offsetTop - scrollY);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = id;
        }
      }
    }
    if (closestSection && closestSection !== activeSection) {
      activeSection = closestSection;
    }
  }

  scrollTo(element: string): void {
    this.currentUrl === '/'
      ? this.scrollIntoView(element)
      : this.navigateAndScroll(element);
  }

  scrollToTop(): void {
    this.currentUrl === '/'
      ? window.scrollTo({ top: 0, behavior: 'smooth' })
      : this.router.navigate(['/home']);
  }

  private navigateAndScroll(sectionId: string): void {
    this.router.navigate(['/home']).then(() => {
      // Delay to ensure DOM has rendered
      setTimeout(() => {
        this.scrollIntoView(sectionId);
      }, 50);
    });
  }

  private scrollIntoView(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
