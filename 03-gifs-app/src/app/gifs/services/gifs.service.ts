import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';

import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, Observable, tap } from 'rxjs';

const loadFromLocalStorageGifs = () => {
  const gifsFromLocalStorage = localStorage.getItem('gifs') ?? '{}';
  const gifs = JSON.parse(gifsFromLocalStorage);
  return gifs;
};
@Injectable({ providedIn: 'root' })
export class GifService {
  //para trabajar con las peticiones http usamos el cliete que angular que nos da para hacerlo
  private http = inject(HttpClient);
  trendingGifs = signal<Gif[]>([]);

  trendingGifsLoading = signal(false);

  private paginatrending = signal(0);

  //para hacer le masnry vamos a crear señal comutada

  // trendeinGifsGroups = computed<Gif[][]>(() => {
  //   const grupo = []

  //   for(let i = 0; i < this.trendingGifs().length; i += 3){
  //     grupo.push(this.trendingGifs().slice(i, i + 3))

  //   }

  //   return grupo

  // })

  trendeinGifsGroups = computed<Gif[][]>(() => {
    const uniqueGifs = this.trendingGifs().filter(
      (gif, index, self) => self.findIndex((g) => g.id === gif.id) === index
    );

    const grupo = [];
    for (let i = 0; i < uniqueGifs.length; i += 3) {
      grupo.push(uniqueGifs.slice(i, i + 3));
    }

    return grupo;
  });

  //vamos  acrear un historial para saber que ha buscado el usuario
  historialBusqueda = signal<Record<string, Gif[]>>(loadFromLocalStorageGifs());

  historialBusquedaKeys = computed(() => Object.keys(this.historialBusqueda()));

  savelocalstorage = effect(() => {
    const historystring = JSON.stringify(this.historialBusqueda());
    localStorage.setItem('gifs', historystring);
    // localStorage.setItem('key',JSON.stringify(this.historialBusqueda()))
  });

  mantenerEnLocal() {
    const gifs = localStorage.getItem('gifs');
    return gifs ? JSON.parse(gifs) : '{}';
  }

  constructor() {
    this.cargarGifs();
  }

  cargarGifs() {
    if (this.trendingGifsLoading()) return;
    this.trendingGifsLoading.set(true);

    this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyapiKey,
          limit: 20,
          offset: this.paginatrending() * 20,
        },
      })
      .subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);

        this.trendingGifs.update((gifsAnteriores) => [
          ...gifsAnteriores,
          ...gifs,
        ]);
        this.paginatrending.update((paginaActual) => paginaActual + 1);

        this.trendingGifsLoading.set(false);
      });
  }

  //hacer el servicio para buscar gifs

  searchgifs(query: string): Observable<Gif[]> {
    return this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
        params: {
          api_key: environment.giphyapiKey,
          limit: 20,
          q: query,
        },
      })
      .pipe(
        map(({ data }) => data),
        map((items) => GifMapper.mapGiphyItemsToGifArray(items)),

        // historial

        tap((items) => {
          this.historialBusqueda.update((historial) => ({
            ...historial,
            [query.toLowerCase()]: items,
          }));
        })
      );
    // .subscribe((respuesta) =>{
    //   const gifs = GifMapper.mapGiphyItemsToGifArray(respuesta.data)
    //   console.log({respuesta: gifs});

    // })
  }

  //metodo para ver el historial de busqueda

  getHistorialGifs(query: string): Gif[] {
    return this.historialBusqueda()[query] ?? [];
  }
}
