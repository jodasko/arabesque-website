import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    TranslateModule,
    NavbarComponent,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
