import { Component, Input } from '@angular/core';
import { SHARED_STANDALONE_IMPORTS } from '../shared-standalone.imports';

@Component({
  selector: 'cta-button-component',
  standalone: true,
  imports: [...SHARED_STANDALONE_IMPORTS],
  templateUrl: './cta-button.component.html',
  styleUrl: './cta-button.component.scss',
})
export class CtaButtonComponent {
  @Input() ctaButtonText?: string | null = null;
  @Input() backgroundColorBtn: string | undefined = undefined;

  get backgroundColor(): string {
    return this.backgroundColorBtn ? this.backgroundColorBtn : 'transparent';
  }
}
