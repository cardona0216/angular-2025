import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

@Component({
  selector: 'app-no-found',
  imports: [],
  templateUrl: './no-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoFoundComponent {

  //vamos a volver a la pagina anterior

  location = inject(Location)

  regresar(){
    this.location.back()
  }
 }
