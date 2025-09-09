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
  cardData = [
    {
      imgSrc: 'assets/images/services/demo-service.png',
      title: 'Space Planning',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum.',
    },
    {
      imgSrc: 'assets/images/services/demo-service.png',
      title: 'Custom Furniture',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum.',
    },
    {
      imgSrc: 'assets/images/services/demo-service.png',
      title: 'Furniture Layouts',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum.',
    },
  ];
}
