import { ChangeDetectionStrategy, Component, EventEmitter, input, Output, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {

  //  capital:OutputEmitterRef<string> = output();
  //  pais:OutputEmitterRef<string> = output();

   buscar = output<string>()
   placeholder = input('buscar')

    boton= input()

  // onBuscarCapital(query: string) {
  //   this.capital.emit(query);
  // }
  // onBuscarCapital2(query: string) {
  //   this.pais.emit(query);
  // }
 }
