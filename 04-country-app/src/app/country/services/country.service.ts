import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { CountryMapper } from '../mappers/country.mapper';
import type { Country } from '../interfaces/country.interface';
import { catchError, delay, map, Observable, of, tap, throwError } from 'rxjs';
import { Region } from '../interfaces/region.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

 private http = inject(HttpClient)
 
   //vamos a hacer un cache

private  queryCacheCapital = new Map<string, Country[]>()
private  queryCachepais = new Map<string, Country[]>()
private  queryCacheRegion = new Map<Region, Country[]>()




 buscarPorCapital(query:string): Observable<Country[]>{

  query = query.toLowerCase()
  // console.log(`Emitiendo valor ${query}`);
  // return of([]);

  if(this.queryCacheCapital.has(query)){
    return of(this.queryCacheCapital.get(query) ?? [])
  }

  console.log(`llegando al servidor ${query}`);
  
  
  return this.http
  .get<RESTCountry[]>(`${environment.base_url}/capital/${query}`)  
  .pipe(    
    map((country) => CountryMapper.CountryItemCountry(country)),
    tap(paises => this.queryCacheCapital.set(query,paises)),
    catchError(error => {
      console.log('error',error);

      return throwError(() => new Error(`No se puedo encontrar paises con ese query ${query}`))
      
    })
  );

 }

 buscarPorPais(pais:string): Observable<Country[]>{
  pais = pais.toLowerCase()
  //llamado a la api

    if(this.queryCachepais.has(pais)){
    return of(this.queryCachepais.get(pais) ?? [])
  }

  console.log(`llegando al servidor  pais ${pais}`);

  return this.http.get<RESTCountry[]>(`${environment.base_url}/name/${pais}`)
    .pipe(
        map((pais) => CountryMapper.CountryItemCountry(pais)),
        tap(capital => this.queryCachepais.set(pais, capital) ),
         catchError(error => {
        console.log('error',error);

      return throwError(() => new Error(`No se puedo encontrar paises con ese query ${pais}`))
      
    })
    )

 }

 
 buscarPaisPorCodigo(code:string){
 
  //llamado a la api
  const url = `${environment.base_url}/alpha/${code}`

  return this.http.get<RESTCountry[]>(url)
    .pipe(
        map((pais) => CountryMapper.CountryItemCountry(pais)),
        map(paises => paises.at(0)),
       
         catchError(error => {
        console.log('error',error);

      return throwError(() => new Error(`No se puedo encontrar paises con ese codigo ${code}`))
      
    })
    )

 }

  buscarPorRegion(region:Region): Observable<Country[]>{
  //llamado a la api

    if(this.queryCacheRegion.has(region)){
    return of(this.queryCacheRegion.get(region) ?? [])
  }

  console.log(`llegando al servidor  pais ${region}`);

  return this.http.get<RESTCountry[]>(`${environment.base_url}/region/${region}`)
    .pipe(
        map((regiones) => CountryMapper.CountryItemCountry(regiones)),
        tap(capital => this.queryCacheRegion.set(region, capital) ),
         catchError(error => {
        console.log('error',error);

      return throwError(() => new Error(`No se puedo encontrar paises con ese query ${region}`))
      
    })
    )

 }

}
