import { Routes } from '@angular/router';

import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroeComponent } from './pages/heroe/heroe/heroe.component';
import { SignalComponent } from './pages/signal/signal.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball.component';
import { DragonballSuperPageComponent } from './pages/dragonball -super/dragonball-super-page.component';

export const routes: Routes = [

    {
        path:'',
        component: CounterPageComponent,
        
    },
    {
        path:'signal',
        component: SignalComponent
    },
    {
        path:'heroe',
        component: HeroeComponent
    },
    {
        path:'dragonball',
        component:DragonballPageComponent
    },
    {
        path:'dragonball-super',
        component:DragonballSuperPageComponent
    },
    {
        path:'**',
        redirectTo: ''
    }

];
