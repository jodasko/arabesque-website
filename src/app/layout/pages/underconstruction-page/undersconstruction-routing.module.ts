import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { UnderconstructionComponent } from './underconstruction.component';

const routes: Routes = [{ path: '', component: UnderconstructionComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnderconstructionRoutingModule {}
