import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './heroe.component.html',
  imports: [UpperCasePipe]
 
})
export class HeroeComponent {

  // Crear dos señales con los valores de Ironman y 45 respectivamente.
  // name => string  = 'Ironman'
  // age => number = 45

  name = signal('Ironman') 
  age = signal(45)

 //señal computada: puede cambiar si sus dependencias cambian
 // osea si sus dependencias que sean señales cambian
herodescription = computed(() =>{
  const descripcion = `${this.name()}- ${this.age()}`
  return descripcion
})

namecapitalizo = computed(() => this.name().toUpperCase());
capi = computed(()=>{
  const capi = this.name().toUpperCase()
  return capi
});


 changeHero(){
  // this.name.update(ant => ant = 'walter')
  this.name.set('walter')
 }

 chageAge(){
  // this.age.update(edad => edad = 60) este es si depende del valor anterior
  this.age.set(70)
 }

 resetForm(){

  // this.name.update(nombre => nombre = 'Ironman') este es si depende del valor anterior
  // this.age.update(age => age = 45)
  this.name.set('Ironman')
  this.age.set( 45)
 }


 toUpper(text: string): string {
  return text?.toUpperCase() || '';
}




 



}
