import { ChangeDetectionStrategy, Component, inject, linkedSignal, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router} from '@angular/router';
import { of } from 'rxjs';

import { CountryService } from '../../services/country.service';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.interface';



@Component({
  selector: 'by-region-page',
  imports: [CountryListComponent],
  templateUrl: './by-region-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ByRegionPageComponent {

  countries = signal<Country[]>([])
  countryReservices = inject(CountryService)
  rutaActiva = inject(ActivatedRoute)
  ruta = inject(Router)

    public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];



queryParamsRegion = this.rutaActiva.snapshot.queryParamMap.get('query') ?? ''


 selecioneRegion = linkedSignal<Region | null >(() => this.queryParamsRegion as Region)
  
 bypaisResource = rxResource({
    request: () => ( { region:this.selecioneRegion()}),
    loader: ({request}) => {
       if (!request.region ) return of([]);

       this.ruta.navigate(['/country/by-region'],{
        queryParams: {
          query: request.region
        }
       })

      return this.countryReservices.buscarPorRegion(request.region)
    }

  })


  selecioneRegiones(region:Region){

    this.selecioneRegion.set(region)

  }



}


 






  //creamos la señal


 






 


  








  //  queryPais = signal('')

  //  bypais = inject(CountryService)

  //   bycapital = inject(CountryService)
  //   isloading = signal(false)
  //   isError = signal<string|null>(null)


  //     bypaisResource = rxResource({
  //   request: () => ( { query:this.queryPais()}),
  //   loader: ({request}) => {
  //      if (!request.query ) return of([]);
  //     return this.bypais.buscarPorRegion(request.query)
  //   }

  // })


  //  buscarRegion(query: string) {
  //   if( this.isloading()) return;
  //   this.isloading.set(true)
  //   this.isError.set(null)
    
  //   this.bycapital.buscarPorRegion(query)
  //   .subscribe({
  //     next :(capital) => {
  //          this.isloading.set(false)
  //          this.countries.set(capital)
          
  //     },

  //     error:(err) => {
        
  //         this.isloading.set(false)
  //         this.countries.set([])
  //         this.isError.set(err)
  //     },
  //   }
      
  //   )
  //   // Aquí puedes usar `valor` para hacer búsquedas, etc.
  // }

