import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(p => p.Home)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then(p => p.Contact)
  },
  { path: '**', redirectTo: '' }
];
