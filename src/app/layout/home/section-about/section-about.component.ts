import { Component } from '@angular/core';

interface item {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-section-about',
  templateUrl: './section-about.component.html',
  styleUrls: ['./section-about.component.scss'],
})
export class SectionAboutComponent {
  bgImage = 'about/bg-image.png';
  bgColor: string | null = null;
  headline: string = 'ABOUT_HEADLINE';
  title: string = 'ABOUT_HEADLINE';
  titles: string[] = ['ABOUT_CARD_TITLE_1', 'ABOUT_CARD_TITLE_2'];
  text: string = 'ABOUT_CONTENT';
  subTitle: string = 'ABOUT_SUBTITLE';
  titleCard: string = 'ABOUT_CARD_TITLE';
  textCard2: string = 'ABOUT_CARD_CONTENT_1';
  textCard1: string = 'ABOUT_CARD_CONTENT_1';
  subTitleCard: string = 'ABOUT_CARD_FOOT';
  bgImageCard = '/assets/images/about/owner.png';

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
