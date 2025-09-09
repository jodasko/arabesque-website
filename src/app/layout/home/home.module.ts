import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../shared/shared.module';

/*Components */
import { BannerComponent } from '../../components/banner/banner.component';
import { ArticleComponent } from 'src/app/components/article/article.component';
import { CtaButtonComponent } from 'src/app/components/cta-button/cta-button.component';
import { HomeComponent } from './home.component';

/*Sections */
import { HeroComponent } from './hero/hero.component';
import { SectionServiceComponent } from './section-service/section-service.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    SectionServiceComponent,
    Section2Component,
    Section3Component,
    Section4Component,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbNavModule,
    CarouselModule,
    TranslateModule,
    SharedModule,
    BannerComponent,
    ArticleComponent,
    CtaButtonComponent,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
