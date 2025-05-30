import { ChangeDetectionStrategy, Component, inject, input, resource, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'by-country-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-country-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryPageComponent { 

   boton = input()
   countries = signal<Country[]>([])

    bypais = inject(CountryService)

    queryPais = signal('')


  //    bypaisResource = rxResource({
  //     request: () => ( { query:this.queryPais()}),
  //     loader: ({request}) => {
  //       if (!request.query ) return of([]);

  //       return this.bypais.buscarPorPais(request.query)
      
  //     }

  // })

    bypaisResource = rxResource({
    request: () => ( { query:this.queryPais()}),
    loader: ({request}) => {
       if (!request.query ) return of([]);
      return this.bypais.buscarPorPais(request.query)
    }

  })

    bypaisResource2 = resource({
      //resource trabaja con promesas
      request: () => ({ querypais:this.queryPais()}),
      loader: async ({request}) => {
        if (!request.querypais ) return [];

        return  await firstValueFrom(
          this.bypais.buscarPorPais(request.querypais)
        )
      }
    })
}
