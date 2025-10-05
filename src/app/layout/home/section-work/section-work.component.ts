import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-work',
  templateUrl: './section-work.component.html',
  styleUrls: ['./section-work.component.scss'],
})
export class SectionWorkComponent implements OnInit {
  bgImage = 'bg-work.png';
  bgColor: string | null = null;
  title: string = 'WORK_TITLE';
  workList = ['WORK_EXAMPLE_1', 'WORK_EXAMPLE_2', 'WORK_EXAMPLE_3'];
  headline: string = 'WORK_HEADLINE';
  subTitle: string = '';
  ctaButtonText = 'WORK_CTA';

  constructor() {}

  ngOnInit(): void {}

  get backgroundStyle(): string | null {
    return this.bgImage ? this.backgroundImage() : this.backgroundColor();
  }

  private backgroundImage(): any {
    return {
      backgroundImage: `url(/assets/images/work/${this.bgImage})`,
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
