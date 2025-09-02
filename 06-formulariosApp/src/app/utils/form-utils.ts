import { FormArray, FormGroup, ValidationErrors } from '@angular/forms';

export class FormUtils {
  // erros generales

  static TextError(errores: ValidationErrors) {
    for (const key of Object.keys(errores)) {
      switch (key) {
        case 'required':
          return 'este campo es requerido';
        case 'minlength':
          return `actual ${errores['minlength'].actualLength} Minimo de ${errores['minlength'].requiredLength} caracteres`;
        case 'min':
          return ` el valor debe de ser mayor o igual a ${errores['min'].min}`;
      }
    }

    return null;
  }

  static campovalido(form: FormGroup, campo: string): boolean | null {
    return form.controls[campo].errors && form.controls[campo].touched;
  }

  static mensajecampovalidado(
    formulario: FormGroup,
    mensajecampo: string
  ): string | null {
    if (!formulario.controls[mensajecampo]) return null;

    const errores = formulario.controls[mensajecampo].errors ?? {};

    return FormUtils.TextError(errores);
  }

  static isValidFieldInArray(formArray: FormArray, index: number) {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }

  static mensajecampovalidadoArray(formulario: FormArray, index: number): string | null {
    // if (!formulario.controls[mensajecampo]) return null;
    if (formulario.controls.length === 0) return null;

    const errores = formulario.controls[index].errors ?? {};

    return FormUtils.TextError(errores);
  }
}
