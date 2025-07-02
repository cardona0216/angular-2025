import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TopMenuComponent } from "../../pipes/components/top-menu/top-menu.component";

@Component({
  selector: 'app-navbar',
  imports: [ TopMenuComponent],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent { 
  //vamos a leer las rutas de manera dimanica

 
}
