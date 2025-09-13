import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../shared/shared.module';

/*Components */
// import { BannerComponent } from '../../components/banner/banner.component';
import { Banner2Component } from '../../components/banner2/banner2.component';
import { ArticleComponent } from '../../components/article/article.component';
import { CtaButtonComponent } from '../../components/cta-button/cta-button.component';
import { HomeComponent } from './home.component';

/*Sections */
import { HeroComponent } from './hero/hero.component';
import { SectionServiceComponent } from './section-service/section-service.component';
import { SectionAboutComponent } from './section-about/section-about.component';
import { SectionWorkComponent } from './section-work/section-work.component';
import { SectionGalleryComponent } from './section-gallery/section-gallery.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    SectionServiceComponent,
    SectionAboutComponent,
    SectionWorkComponent,
    SectionGalleryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbNavModule,
    CarouselModule,
    TranslateModule,
    SharedModule,
    Banner2Component,
    ArticleComponent,
    CtaButtonComponent,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
