import { Route } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminLayoutComponent } from './shared/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { EstablishmentLayoutComponent } from './shared/layouts/establishment-layout/establishment-layout.component';
import { PageNotFoundComponent } from './shared/layouts/page-not-found/page-not-found.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: EstablishmentLayoutComponent,
    children: [
      { path: '', redirectTo: '/establishment', pathMatch: 'full' },
      {
        path: 'establishment',
        loadChildren: () =>
          import('./establishment/establishment.module').then(
            (m) => m.EstablishmentModule
          ),
      },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: '/auth', pathMatch: 'full' },
      {
        path: 'auth',
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: '/admin', pathMatch: 'full' },
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
    ],
  },
  { path: 'about-us', component: AboutUsComponent },
  { path: '**', component: PageNotFoundComponent },
];
