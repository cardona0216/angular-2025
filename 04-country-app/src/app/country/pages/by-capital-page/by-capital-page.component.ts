import { Component, inject, input, resource, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { RESTCountry } from '../../interfaces/rest-countries.interface';
import { CountryMapper } from '../../mappers/country.mapper';
import { Country } from '../../interfaces/country.interface';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent { 
  bycapital = inject(CountryService)
  isloading = signal(false)
  isError = signal<string|null>(null)
  countries = signal<Country[]>([])
  // placeholder = input<string>()
 
   boton= input()


  onBuscarCapital(query: string) {
    if( this.isloading()) return;
    this.isloading.set(true)
    this.isError.set(null)
    
    this.bycapital.buscarPorCapital(query)
    .subscribe({
      next :(capital) => {
           this.isloading.set(false)
           this.countries.set(capital)
          
      },

      error:(err) => {
        
          this.isloading.set(false)
          this.countries.set([])
          this.isError.set(err)
      },
    }
      
    )
    // Aquí puedes usar `valor` para hacer búsquedas, etc.
  }


  //vamos a rabajar con un objeto que nos permite trabar mejor
  //rellaman recuros o Resouces


  //trabajemos con el rxResource este trabaja con obsevables
  query = signal('')

  capitalResource = rxResource({
    request: () => ( { query:this.query()}),
    loader: ({request}) => {
       if (!request.query ) return of([]);
      return this.bycapital.buscarPorCapital(request.query)
    }

  })





  // query = signal('')
  //resource trabaja con promesas
  // capitalResource = resource({
  //   request:() => ({query:this.query() }),
  //   loader: async({request}) =>{
  //     if (!request.query ) return [];

  //     return await firstValueFrom(
  //       this.bycapital.buscarPorCapital(request.query)
  //     )
  //   }

  // })




}



       
