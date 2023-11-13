import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'page1',
    loadComponent: () =>
      import('./pages/page1/page1.component').then((m) => m.Page1Component),
  },
];
