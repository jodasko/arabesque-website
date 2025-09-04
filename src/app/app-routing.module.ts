import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { layoutRoutes } from './layout/layout-routing.module';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: layoutRoutes },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top', // scrolls to top on route change
      // anchorScrolling: 'disabled', // optional: enables #anchor navigation
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
