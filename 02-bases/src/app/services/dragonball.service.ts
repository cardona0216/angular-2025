


// un servicio como todo lo que tenemos en angular es una clase, lo que le da el 
// serntido de servico es su decordor



import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';


const cargardesdelocalstotage = ():Character[] => {
  // vamos a tomar lo que tenga en el localstorage
  const characters = localStorage.getItem('character');
  return characters ? JSON.parse(characters): []
  
}

@Injectable({providedIn: 'root'})
// en pocas palabras es el lugar desentralizado de la infirmacion de la aplicacion
export class DragonballServices {

    characterPadre = signal<Character[]>(cargardesdelocalstotage())
      //vamos a grabar el el localstotage
      // vamos a ver los effect
      saveToLocalStotage = effect(() =>{
        // console.log(`Character count ${this.characterPadre().length}`);
        localStorage.setItem('character',JSON.stringify( this.characterPadre()))
        
      })


    
    
      agregarPersonaje(character:Character){  
        // vamos a trabajar con el output para emitie valores
        
        this.characterPadre.update( list => [... list, character])
        console.log('este es el personaje que viene en el parametro',character);
        
      }
   

    
}