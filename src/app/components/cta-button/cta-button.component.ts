import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'cta-button-component',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './cta-button.component.html',
  styleUrl: './cta-button.component.scss',
})
export class CtaButtonComponent {
  @Input() ctaButtonText?: string | null = null;
}
