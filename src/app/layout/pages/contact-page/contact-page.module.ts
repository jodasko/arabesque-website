import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../../shared/shared.module';
import { ContactPageComponent } from './contact-page.component';
import { ContactPageRoutingModule } from './contact-page-routing.module';

@NgModule({
  declarations: [ContactPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactPageRoutingModule,
    TranslateModule,
    SharedModule,
  ],
  exports: [ContactPageComponent],
})
export class ContactPageModule {}
