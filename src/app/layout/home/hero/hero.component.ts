import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  readonly image = 'bg-hero';
  readonly imageExt = 'png';
  readonly titleLines = ['HERO_TITLE', 'HERO_TITLE_2'];
  readonly ctaButtonText = 'HERO_CTA';

  constructor(public analyticsService: AnalyticsService) {}

  ngOnInit(): void {}
}
