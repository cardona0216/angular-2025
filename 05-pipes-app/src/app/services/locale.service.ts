import { Injectable, signal } from '@angular/core';

export type AvailableLocales = 'es' | 'fr' | 'en';
@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  private currentLocale = signal<AvailableLocales>('fr');

  constructor() {
   this.currentLocale.set(
    localStorage.getItem('locale') as AvailableLocales ?? 'es'
   );
  }

  get getLocale() {
    return this.currentLocale();
  }
  
  changeLocale(locale:AvailableLocales) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
    // Elimina la recarga de la página. 
    // Para que Angular detecte el cambio de locale, puedes emitir un evento o usar un observable/signal.
    // Si usas el LOCALE_ID con un signal, asegúrate de que los componentes dependan de ese signal para actualizarse.
    // Aquí solo actualizamos el signal y el localStorage.
    // window.location.reload(); // <-- Eliminado para evitar la recarga

  }


}