import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'home',
        title: 'Home',
        loadComponent:() => import('./pages/home/home.component')
    },
    {
        path:'basic',
        title: 'Pipes basicos',
        loadComponent:() => import('./pages/basic-pages/basic-pages.component')
    },
    {
        path:'date',
        title: 'Date Pipes',
        loadComponent:() => import('./pages/date-page/date-page.component')
    },
    {
        path:'numbers',
        title: 'Numbers Pipes',
        loadComponent:() => import('./pages/numbers-page/numbers-page.component')
    },
    {
        path:'nocomunes',
        title: 'Pipes no tan comunes',
        loadComponent:() => import('./pages/nocomunes-page/nocomunes-page.component')
    },
    {
        path:'custom',
        title: 'Pipes Personalizados',
        loadComponent:() => import('./pages/custon-page/custon-page.component')
    },
    {
        path:'**',
        redirectTo:'home'
    }
];
