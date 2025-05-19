import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:'dashboard',
        loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page.component'),
        // rutas hijas
        children:[
            {
                path:'trending',
                loadComponent: () => import('./gifs/pages/trending-page/trending-page.component')
            },
            {
                path:'search',
                loadComponent: () => import('./gifs/pages/search-page/search-page.component')
            },
            {
                path:'historial/:query', // esi se reciben los argumentos de manera dimanica por el url
                loadComponent: () => import('./gifs/pages/gif-history/history.component')
            },
            {
                path:'**',
                redirectTo:'trending'
            }
        ]
    },
  
    {
        path: '**',
        redirectTo:'dashboard'
    }
];
