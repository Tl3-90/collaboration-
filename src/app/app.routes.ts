import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'login', loadChildren: () => import('./login/login.routes').then(m => m.routes), data: { text: 'Login' } },
  { path: 'master-view', loadChildren: () => import('./master-view/master-view.routes').then(m => m.routes), data: { text: 'Master View' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
