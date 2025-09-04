import { Routes } from '@angular/router';
import { HomeComponent } from '../layout/home/home.component';

export const layoutRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'pageOne',
    loadChildren: () =>
      import('./pages/page/page.module').then((m) => m.PageModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact-page/contact-page.module').then(
        (m) => m.ContactPageModule
      ),
  },
];
