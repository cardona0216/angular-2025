import { Component, input } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent { 

  placeholder = input<string>()
 
   boton= input()


  onBuscarCapital(valor: string) {
    console.log('Valor recibido del hijo:', valor);
    // Aquí puedes usar `valor` para hacer búsquedas, etc.
  }


}
