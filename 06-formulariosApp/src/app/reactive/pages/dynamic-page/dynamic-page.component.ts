import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-dynamic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './dynamic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicPageComponent {
  //ejercicio con formularios dinamicos
  // vamos a crear un formulario dinamico que permita agregar y eliminar campos

  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  formularioDimamico = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoritesGames: this.fb.array(
      [
        ['Metal gear', [Validators.required, Validators.minLength(3)]],
        ['Death Stranding', [Validators.required, Validators.minLength(3)]],
      ],
      Validators.minLength(2)
    ),
  });

  //agregaos una propieda aislada


  nuevojuego = new FormControl('', [Validators.required, Validators.minLength(3)])
  // nuevojuego = this.fb.control([])


  get favoritesGames(){
    return this.formularioDimamico.get('favoritesGames') as  FormArray;
  }

  onSubmit() {
    console.log(this.formularioDimamico.value);

     this.formularioDimamico.markAllAsTouched();
  }

  //   onSave() {
  //   // if (this.formularioDimamico.invalid) {
  //   //   return;
  //   // }
    
  //   console.log(this.formularioDimamico.value);
  //   this.formularioDimamico.markAllAsTouched();

  //   // console.log(this.formularioDimamico.value);
   
  // }

  onAddFavorite(){
    if(this.nuevojuego.invalid) return;

    const nuevoJuego = this.nuevojuego.value;
    this.favoritesGames.push(this.fb.control(nuevoJuego, Validators.required));
    this.nuevojuego.reset();
  }

  eliminarJuego(index: number) {
    this.favoritesGames.removeAt(index);
  }
}



  // isValidFieldInArray(formArray:FormArray, index:number){

  //   return(
  //     formArray.controls[index].errors && formArray.controls[index].touched
  //   )

  // }
