import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'list',
    loadChildren: async () =>
      (await import('@org/cars-list-feature')).CARS_LIST_FEATURE_ROUTES,
  },
  {
    path: 'form',
    loadChildren: async () =>
      (await import('@org/cars-form-feature')).CARS_FORM_FEATURE_ROUTES,
  },
  {
    path: '**',
    redirectTo: 'list',
  },
];
