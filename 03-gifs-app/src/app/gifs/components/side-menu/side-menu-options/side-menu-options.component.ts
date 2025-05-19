import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifService } from 'src/app/gifs/services/gifs.service';

interface MenuOptions{
  label:string,
  subLabel:string,
  icon:string,
  route:string
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './side-menu-options.component.html'
})
export class GifsSideMenuOptionsComponent {

  //INyectamos el servicio

  gifsServices = inject(GifService)

  

  menuOptions:MenuOptions[] = [

    {
      icon:'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel:'Gifs Populares',
      route:'/dashboard/trending'
    },
    {
      icon:'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      subLabel:'Buscar gifs',
      route:'/dashboard/search'
    }
  ]

 }
