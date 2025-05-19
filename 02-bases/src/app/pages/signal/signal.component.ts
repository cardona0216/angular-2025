import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SignalComponent {

  
  
  nombre: string = 'walter'
  
  counter = 15
  
  //vamos a ver un ejemplo de señales
  
  countersignal = signal(10) // hay que tratar de pensar en señales
  constructor(){
   setInterval(()=>{
    // this.counter += 1
    this.countersignal.update(v => v + 1)
    console.log('tick');
    
   }, 2000)
  }

  incrementar(value:number){
      this.counter += value
      this.countersignal.update((curren) => curren + value)

  }

  reset(){
    this.counter = 0

    this.countersignal.set(0)

    //cuando se tiene un valor anterior y se quiere actualizar se recomienda uasar un update
  }

}
