import { Component } from '@angular/core';

@Component({
  selector: 'app-section-service',
  standalone: false,
  templateUrl: './section-service.component.html',
  styleUrl: './section-service.component.scss',
})
export class SectionServiceComponent {
  headLine = 'SERVICE_HEADLINE';
  title = 'SERVICE_TITLE';
  ctaButtonText = 'SERVICE_CTA';
  cardData = 'SERVICE_DETAILS';
}
