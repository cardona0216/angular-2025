import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { NoFoundComponent } from "../../../shared/components/no-found/no-found.component";
import { CountryInformationComponent } from './country-information/country-information.component';

@Component({
  selector: 'app-countrypage',
  imports: [NoFoundComponent,CountryInformationComponent],
  templateUrl: './countrypage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CountrypageComponent { 

  //vamos a tomar la ruta en la que estamos
  paiscode= inject(ActivatedRoute).snapshot.params['code']

  //inyectamos el servicio

  countryResource = inject(CountryService)

  //vamos ha hacer el uso del rxresurcer para hacer la peticion 

  paisCodeResource = rxResource({
    //tiene una conficguracion
    request: () => ({code:this.paiscode}),
    loader: ({request}) =>{
      return this.countryResource.buscarPaisPorCodigo(request.code)
    }
  })

}
