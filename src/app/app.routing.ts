import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main/main-layout.component';

export const AppRoutes: Routes = [
    {
      path: '', 
      redirectTo: 'pages/main',
      pathMatch: 'full',
    }, {
      path: '',
      component: MainLayoutComponent,
      children: [{
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule'
      }]
    }
];
