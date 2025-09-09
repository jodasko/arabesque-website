import { Component, Input } from '@angular/core';
import { CtaButtonComponent } from '../cta-button/cta-button.component';
import { SHARED_STANDALONE_IMPORTS } from '../shared-standalone.imports';

@Component({
  selector: 'banner-component',
  standalone: true,
  imports: [...SHARED_STANDALONE_IMPORTS, CtaButtonComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  @Input() bgImage?: string | null = null;
  @Input() imageExt?: 'jpg' | 'png' | null = null;
  @Input() bgColor?: string | null = null;
  @Input() title: string[] = [];
  @Input() subTitle: string | null = '';
  @Input() isUnderConstruction?: boolean = false;
  @Input() underConstructionText?: string = '';
  @Input() ctaButtonText?: string | null = null;

  constructor() {}

  get backgroundStyle(): string | null {
    return this.bgImage && this.imageExt
      ? this.backgroundImage()
      : this.backgroundColor();
  }

  private backgroundImage(): any {
    return {
      backgroundImage: `url(/assets/images/${this.bgImage}.${this.imageExt})`,
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
