import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { CountryMapper } from '../mappers/country.mapper';
import type { Country } from '../interfaces/country.interface';
import { catchError, delay, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

 private http = inject(HttpClient)


 buscarPorCapital(query:string): Observable<Country[]>{

  query = query.toLowerCase()

  return this.http
  .get<RESTCountry[]>(`${environment.base_url}/capital/${query}`)  
  .pipe(    
    map((country) => CountryMapper.CountryItemCountry(country)),
    catchError(error => {
      console.log('error',error);

      return throwError(() => new Error(`No se puedo encontrar paises con ese query ${query}`))
      
    })
  );

 }

 buscarPorPais(pais:string): Observable<Country[]>{
  pais = pais.toLowerCase()
  //llamado a la api

  return this.http.get<RESTCountry[]>(`${environment.base_url}/name/${pais}`)
    .pipe(
        map((pais) => CountryMapper.CountryItemCountry(pais)),
        delay(3000),
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

}
