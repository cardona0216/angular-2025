import { Component } from "@angular/core";

@Component({
  templateUrl: './counter-page.component.html',
  
})
export class CounterPageComponent{
    nombre: string = 'walter'

    counter = 15

    incrementar(value:number){
        this.counter += value

    }

    reset(){
      this.counter = 0
    }
}