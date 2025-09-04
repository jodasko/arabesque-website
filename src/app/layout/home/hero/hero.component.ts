import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  readonly titleLines = ['HERO_TITLE', 'HERO_TITLE_2'];

  constructor(public analyticsService: AnalyticsService) {}

  ngOnInit(): void {}
}
