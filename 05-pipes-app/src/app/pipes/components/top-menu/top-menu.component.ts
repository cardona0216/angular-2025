import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'top-menu',
  imports: [RouterLink, RouterLink, RouterLinkActive],
  templateUrl: './top-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopMenuComponent {

   rutas = routes.map( ruta => ({
    titulo: ruta.title ?? '',
    paht: ruta.path ?? ''
  }))
 }
