import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
// import { Section1Component } from './studio/studio.component';
// import { WorkComponent } from './work/work.component';
// import { ProcessComponent } from './section4/section4.component';
// import { ServicesComponent } from './section3/section3.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    Section1Component,
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
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
