import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  bgImage = 'bg-hero.png';
  bgColor: string | null = null;
  title: string = 'HERO_TITLE';
  titleLines = [];
  oneTitle: string = '';
  subTitle: string = '';
  underConstructionText: string = '';
  ctaButtonText = 'HERO_CTA';
  location = 'HERO_LOCATION';
  region = 'HERO_LOCATION_REGION';
  locationTitle = 'HERO_LOCATION_TITLE';

  constructor() {}

  ngOnInit(): void {}

  get backgroundStyle(): string | null {
    return this.bgImage ? this.backgroundImage() : this.backgroundColor();
  }

  private backgroundImage(): any {
    return {
      backgroundImage: `url(/assets/images/${this.bgImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    };
  }

  private backgroundColor(): any {
    return {
      backgroundColor: this.bgColor || '#000000',
    };
  }
}
