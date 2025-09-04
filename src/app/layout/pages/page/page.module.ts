import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../../shared/shared.module';
import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';

import { PageHeroComponent } from '../page/page-hero/page-hero.component';
import { PageSection1Component } from '../page/page-section1/page-section1.component';
import { PageSection2Component } from '../page/page-section2/page-section2.component';

@NgModule({
  declarations: [
    PageComponent,
    PageHeroComponent,
    PageSection1Component,
    PageSection2Component,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    TranslateModule,
    SharedModule,
    PageRoutingModule,
  ],
  exports: [PageComponent],
})
export class PageModule {}
