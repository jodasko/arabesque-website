import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './layout.component';
import { HomeModule } from './home/home.module';
import { PageModule } from './pages/page/page.module';
import { ContactPageModule } from './pages/contact-page/contact-page.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HomeModule,
    PageModule,
    ContactPageModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
