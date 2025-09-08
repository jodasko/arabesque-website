import {
  Directive,
  HostBinding,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[app-sticky-nav]',
  standalone: true,
})
export class StickyNavDirective implements OnInit, OnDestroy {
  // @HostBinding('class.solid-navbar') isSolid = false;

  @HostBinding('class.solid-navbar__home') isHomeSolid = false;
  @HostBinding('class.solid-navbar__experiences') isExperiencesSolid = false;

  private currentRoute: string = '';
  private routerEventsSubscription: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentRoute = this.router.url;
    this.routerEventsSubscription = this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  ngOnDestroy(): void {
    if (this.routerEventsSubscription) {
      this.routerEventsSubscription.unsubscribe();
    }
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    // console.log('scrollY:', window.pageYOffset, 'innerH:', window.innerHeight);
    const scrolled = window.pageYOffset >= window.innerHeight;

    this.isHomeSolid = this.currentRoute === '/' && scrolled;
    this.isExperiencesSolid = this.currentRoute === '/experiences' && scrolled;
  }
}
