import { Routes } from '@angular/router';
import { HomePageComponent } from '../shared/pages/home-page/home-page.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountryLayoutComponent } from './layouts/CountryLayout/CountryLayout.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import CountrypageComponent from './pages/countrypage/countrypage.component';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPageComponent,
      },

      //byCountry-page
      {
        path: 'by-country',
        component: ByCountryPageComponent
      },

      //byRegion-page
      {
        path: 'by-region',
        component:ByRegionPageComponent
      },
      {
        path: 'by/:code',
        component: CountrypageComponent
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
  // {
  //     path: 'country2',
  //     component: HomePageComponent
  // },
  //     {
  //         path:'**',
  //         redirectTo: ''
  //     }
];

export default countryRoutes;
