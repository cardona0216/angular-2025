import {  Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './add-character-list.component.html',
})
export class CharacterAddComponent {
  
  name = signal('')
  power = signal(0)

  // valoa a trabakr con el output es decir para emitir algun valor

  nuevoPersonaje = output<Character>()

  // characterPadre = signal<Character[]>([
  //     {id:1, name:'Goku', power: 9001},
  //     {id:2, name:'Vegeta', power: 8000},
  //   ])
 
  agragarPersonajeEmit(){
    //para añadir unpersonaje vamos a hacer un para de validaciones
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const nuevopersonaje:Character = {
      id:Math.floor(Math.random() * 1000),
      name:this.name(),
      power:this.power()
    }

    // this.characters().push(newcharacter) // estos metods no se deberian de usar cuando estamos usando una señal

    // this.characterPadre.update((listado) => [...listado, newcharacter])
    this.nuevoPersonaje.emit(nuevopersonaje)
    console.log('nuevo personaje creado',{nuevopersonaje});
    
    this.resetField()
    
  }

  resetField(){
    this.name.set(' ')
    this.power.set(0)
  }

}
