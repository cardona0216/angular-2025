import { ChangeDetectionStrategy, Component, EventEmitter, input, Output, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {

   capital:OutputEmitterRef<string> = output();

   buscar = output<string>()
   placeholder = input('buscar')

    boton= input()

  onBuscarCapital(valor: string) {
    this.capital.emit(valor);
  }
 }
