import { Component, inject, linkedSignal, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'by-country-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-country-page.component.html'
})
export class ByCountryPageComponent { 
  
  bypaisService = inject(CountryService)
  rutaActiva = inject(ActivatedRoute)
  ruta = inject(Router)

  busquedavalue = signal('Buscar Pais')


  
  queryParam = this.rutaActiva.snapshot.queryParamMap.get('query') ?? '';
  queryPais = linkedSignal(() => this.queryParam)
  
  
  bypaisResource = rxResource({
    request: () => ( {query:this.queryPais()}),
    loader: ({request}) => {
      if (!request.query ) return of([]);

      this.ruta.navigate(['/country/by-country'],{
        queryParams : {
          query: request.query
        }
      })
      return this.bypaisService.buscarPorPais(request.query)
    }
    
  })
  
  
  
  
  
  
  
  
  // countries = signal<Country[]>([])
    // bypaisResource2 = resource({
    //   //resource trabaja con promesas
    //   request: () => ({ querypais:this.queryPais()}),
    //   loader: async ({request}) => {
    //     if (!request.querypais ) return [];

    //     return  await firstValueFrom(
    //       this.bypais.buscarPorPais(request.querypais)
    //     )
    //   }
    // })

    
  //    bypaisResource = rxResource({
  //     request: () => ( { query:this.queryPais()}),
  //     loader: ({request}) => {
  //       if (!request.query ) return of([]);

  //       return this.bypais.buscarPorPais(request.query)
      
  //     }

  // })
}
