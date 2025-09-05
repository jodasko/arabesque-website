import { Routes } from '@angular/router';
import { HomeComponent } from '../layout/home/home.component';

export const layoutRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      seo: {
        title: 'arabesque menuiserie',
        description: 'carpinteria, pintura y mucho mas',
        canonicalPath: '/',
        type: 'website',
        keywords: ['carpinteria', 'pintura', 'bello', 'todo'],
      },
    },
  },
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
