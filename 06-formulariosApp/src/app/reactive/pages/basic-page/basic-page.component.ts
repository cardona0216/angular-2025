import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicPageComponent {
  // vamos a trabajar con el formbuilder

  private fb = inject(FormBuilder);

  formUtils = FormUtils;

  miformulario: FormGroup = this.fb.group({
    nombre_producto: ['', [Validators.required, Validators.minLength(3)]],
    precio: [0, [Validators.required, Validators.min(10)]],
    cantidad: [0, [Validators.required, Validators.min(0)]],
  });

  onSave() {
    if (this.miformulario.invalid) {
      this.miformulario.markAllAsTouched();
      return;
    }

    console.log(this.miformulario.value);

    this.miformulario.reset({
      precio: 0,
      cantidad: 0,
    });
  }
}

//vamos a crear una funcion para mosttar los mensajes dependiedno de la validacion que pase
// mensajecampovalidado(mensajecampo: string): string | null {
//   if (!this.miformulario.controls[mensajecampo]) return null;

//   const errores = this.miformulario.controls[mensajecampo].errors ?? {};

//   for (const key of Object.keys(errores)) {
//     switch (key) {
//       case 'required':
//         return 'este campo es requerido';
//       case 'minlength':
//         return `actual ${errores['minlength'].actualLength} Minimo de ${errores['minlength'].requiredLength} caracteres`;
//       case 'min':
//         return ` el valor debe de ser mayor o igual a ${errores['min'].min}`;
//     }
//   }

//   return null;
// }

// aqui vamos a crear una funcion para controlar los errores del formulario

// campovalido(campo: string): boolean | null {
//   return (
//     this.miformulario.controls[campo].errors &&
//     this.miformulario.controls[campo].touched
//   );
// }

// // otra forma de crear un formulario
// miformulario2 = new FormGroup({
//   nombre_producto: new FormControl('', [
//     Validators.required,
//     Validators.minLength(3),
//   ]),
//   precio: new FormControl(
//     0,
//     [
//       /** validacion sincronas [] */
//     ],
//     [
//       /** validacion asincronas null */
//     ]
//   ),
//   cantidad: new FormControl(
//     0,
//     [
//       /** validacion sincronas [] */
//     ],
//     [
//       /** validacion asincronas null */
//     ]
//   ),
// });
