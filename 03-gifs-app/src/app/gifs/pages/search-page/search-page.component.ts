import {  Component, inject, signal } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-pages',
  templateUrl: './search-page.component.html',
  imports: [GifListComponent],
})
export  default class SearchPageComponent { 

  //señal para tomar lo que venga en el servicio

  gifs = signal<Gif[]>([])

  gifService = inject(GifService)
//creamos el metodo para la busqueda

onSearch(query:string){

  this.gifService.searchgifs(query).subscribe((resp) => {
  this.gifs.set(resp)
    
  })

  

}


}
