import { Component } from '@angular/core';

@Component({
  selector: 'app-section-service',
  standalone: false,
  templateUrl: './section-service.component.html',
  styleUrl: './section-service.component.scss',
})
export class SectionServiceComponent {
  headLine = 'SERVICE_SECTION_HEADLINE';
  title = 'SERVICE_SECTION_TITLE';
  ctaButtonText = 'SERVICE_SECTION_CTA';
  cardData = 'SERVICE_SECTION_DETAILS';
}
