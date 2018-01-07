import { Routes } from '@angular/router';
import { NumberComponent } from './main/main.component';

export const PagesRoutes: Routes = [ 
    {
        path: '',
        children: [ {
            path: 'main',
            component: NumberComponent
        }]
    }
];
