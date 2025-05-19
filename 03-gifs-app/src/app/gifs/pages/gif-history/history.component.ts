import {  Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

import { toSignal} from '@angular/core/rxjs-interop'
import { GifService } from '../../services/gifs.service';
import { GifListComponent } from "../../components/gif-list/gif-list.component";

@Component({
  selector: 'app-gif-history',
  imports: [GifListComponent],
  templateUrl: './history.component.html'
})
export default class GifsHistoryComponent { 

  //importamos el servicio

  gifsServices = inject(GifService)

  //vamos a recibir el argumento del url

//vamos a trasforma este observable en una señal
  // query = inject(ActivatedRoute).params.subscribe( params => {
  //   console.log(params['query']);
    
  // })

   query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query']))  
  )


  gifsByKey = computed( () => {
    return this.gifsServices.getHistorialGifs(this.query())
  })

  

}
