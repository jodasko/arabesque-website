import { Component } from '@angular/core';

@Component({
  selector: 'app-page-hero',
  templateUrl: './page-hero.component.html',
  styleUrl: './page-hero.component.scss',
})
export class PageHeroComponent {
  readonly titleLines = ['PAGE_HERO_TITLE_1', 'PAGE_HERO_TITLE_2'];
}
