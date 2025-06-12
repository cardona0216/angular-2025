import { ChangeDetectionStrategy, Component, effect, EffectCleanupRegisterFn, EventEmitter, input, linkedSignal, Output, output, OutputEmitterRef, signal } from '@angular/core';

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
   placeholder = input()
   boton= input()
   debaucetime = input(500)

   valorInicial = input<string>()
   inputValue = linkedSignal<string>(() => this.valorInicial() ?? '')
   
   //vamos a crear un debaounce (busqueda automaitica)
   busquedaAutomatica = effect((onCleanup: EffectCleanupRegisterFn) =>{
    const busquedaValue = this.inputValue()

    const timeout = setTimeout(() => {
      this.buscar.emit(busquedaValue)
      
    }, this.debaucetime());

    onCleanup(() =>{
      clearTimeout(timeout)
    })


   })







  // onBuscarCapital(query: string) {
  //   this.capital.emit(query);
  // }
  // onBuscarCapital2(query: string) {
  //   this.pais.emit(query);
  // }
 }
