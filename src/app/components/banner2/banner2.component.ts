import { Component, Input } from '@angular/core';
import { SHARED_STANDALONE_IMPORTS } from '../shared-standalone.imports';
import { StickyNavDirective } from 'src/app/directives/sticky-nav.directive';

@Component({
  selector: 'banner2-component',
  standalone: true,
  imports: [...SHARED_STANDALONE_IMPORTS, StickyNavDirective],
  templateUrl: './banner2.component.html',
  styleUrl: './banner2.component.scss',
})
export class Banner2Component {
  @Input() bgImage?: string | null = null;
  @Input() imageExt?: 'jpg' | 'png' = 'png';
  @Input() bgColor?: string | null = null;
  @Input() headline: string = ' ';
  @Input() subTitle: string | null = '';
  @Input() content: string | null = '';

  constructor() {}

  get backgroundStyle(): string | null {
    return this.bgImage ? this.backgroundImage() : this.backgroundColor();
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
