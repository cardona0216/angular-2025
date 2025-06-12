import { Component, inject, input, linkedSignal, resource, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html'
})

export class ByCapitalPageComponent {

  bycapital = inject(CountryService)
  rutaActiva = inject(ActivatedRoute)
  ruta = inject(Router)

  botonCapital = signal('Buscar por capital')

  //vamos a trabajar con la ruta activa


  //vamos a tomar una fotografia de lo que halla en la ruta

  queryParam = this.rutaActiva.snapshot.queryParamMap.get('query') ?? '';

  query = linkedSignal(() => this.queryParam)

  capitalResource = rxResource({
    request: () => ( { query:this.query()}),
    loader: ({request}) => {
      console.log({query:request.query});
      
       if (!request.query ) return of([]);

       this.ruta.navigate(['/country/by-capital'],{
        queryParams: {
          query: request.query
        }
       })
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
  



  isloading = signal(false)
  isError = signal<string|null>(null)
  countries = signal<Country[]>([])
  // placeholder = input<string>()
 
    


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











}



       
