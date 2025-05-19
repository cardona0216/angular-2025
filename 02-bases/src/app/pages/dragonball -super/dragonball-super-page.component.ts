import { NgClass } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/add-character-list/add-character-list.component";
import { DragonballServices } from '../../services/dragonball.service';



interface Character {
  id: number,
  name: string,
  power: number
}

@Component({
  selector:'dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, CharacterAddComponent],

})
export class DragonballSuperPageComponent {


  //esta es la nueva forma de inyectar las dependencias

  public dragonballSercives = inject(DragonballServices)

  

// constructor(
//   public dragonballServices:DragonballServices
// ){}

  // nos vamos a creal un arreglo de personajes
  // usaremos la señales
  // las señales son tipos de datos genericos

  // characterPadre = signal<Character[]>([

  //   {id:1, name:'Goku', power: 9001},
  //   {id:2, name:'Vegeta', power: 8000},
  // ])


  // agregarPersonaje(){
    
  //   this.dragonballServices.agregarPersonaje()
  //   // vamos a trabajar con el output para emitie valores
    
  //   // this.characterPadre.update( list => [... list, character])
  //   // console.log('este es el personaje que viene en el parametro',character);
    
  // }

  // podemos recetear los campos cuando se crea un nuevo personaje






  // addCharacter1(){
  //   //para añadir unpersonaje vamos a hacer un para de validaciones
  //   if (!this.name() || !this.power() || this.power() <= 0) {
  //     return;
  //   }

  //   const newcharacter:Character = {
  //     id:this.characterPadre().length + 1,
  //     name:this.name(),
  //     power:this.power()
  //   }

    // this.characters().push(newcharacter) // estos metods no se deberian de usar cuando estamos usando una señal

    // this.characterPadre.update((listado) => [...listado, newcharacter])
    // console.log({newcharacter});
    
   // this.resetField()
    
  


  // powerClasses = computed(() => {
  //   return{
  //     'text-danger':true
  //   }
  // })

}
