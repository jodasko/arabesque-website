import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StickyNavDirective } from 'src/app/directives/sticky-nav.directive';

@NgModule({
  declarations: [StickyNavDirective, HeaderComponent, FooterComponent],
  imports: [CommonModule, NgbModule, RouterModule, TranslateModule],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
