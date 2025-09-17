import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../../shared/shared.module';
import { UnderconstructionRoutingModule } from './undersconstruction-routing.module';
import { UnderconstructionComponent } from './underconstruction.component';

@NgModule({
  declarations: [UnderconstructionComponent],
  imports: [
    CommonModule,
    UnderconstructionRoutingModule,
    TranslateModule,
    SharedModule,
  ],
  exports: [UnderconstructionComponent],
})
export class UnderconstructionModule {}
