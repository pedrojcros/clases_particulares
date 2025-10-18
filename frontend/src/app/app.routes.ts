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
      import('./pages/contact/contact.component').then(p => p.ContactComponent)
  },
  {
    path: 'packs',
    loadComponent: () =>
      import('./pages/packs/packs.component').then(p => p.PacksComponent)
  },
  { path: '**', redirectTo: '' }
];
