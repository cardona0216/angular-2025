import { NgClass } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { DragonballSuperPageComponent } from "../dragonball -super/dragonball-super-page.component";


interface Character {
  id: number,
  name: string,
  power: number
}

@Component({
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.css',

})
export class DragonballPageComponent {

  super = input.required<Character[]>()

  name = signal('')
  power = signal(0)
  // nos vamos a creal un arreglo de personajes
  // usaremos la señales
  // las señales son tipos de datos genericos

  characters = signal<Character[]>([

    {id:1, name:'Goku', power: 9001},
    // {id:2, name:'Vegeta', power: 8000},
    // {id:3, name:'Trunks', power: 7000},
    // {id:4, name:'Piccolo', power: 3000},
    // {id:5, name:'Yamcha', power: 500},
  ])
  addCharacter(){
    //para añadir unpersonaje vamos a hacer un para de validaciones
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newcharacter:Character = {
      id:this.characters().length + 1,
      name:this.name(),
      power:this.power()
    }

    // this.characters().push(newcharacter) // estos metods no se deberian de usar cuando estamos usando una señal

    this.characters.update((listado) => [...listado, newcharacter])
    this.resetField()
    
  }

  // podemos recetear los campos cuando se crea un nuevo personaje

  resetField(){
    this.name.set(' ')
    this.power.set(0)
  }


  // powerClasses = computed(() => {
  //   return{
  //     'text-danger':true
  //   }
  // })

}
