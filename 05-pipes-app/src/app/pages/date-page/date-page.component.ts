import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocales, LocaleService } from '../../services/locale.service';
import { SectionComponent } from '../../shared/section/section.component';

@Component({
  selector: 'app-date-page',
  imports: [DatePipe, SectionComponent],
  templateUrl: './date-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DatePageComponent {

  title = signal('Pipes de fechas')

  localeService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID))

  // La propiedad 'fechaActual' es un signal que almacena la fecha y hora actual.
  // Se inicializa con la fecha y hora del momento en que se crea el componente.
 fechaActual =  signal(new Date());


 // El efecto 'tickingDateffect' crea un intervalo que actualiza el valor de 'fechaActual' cada segundo.
 // Esto permite que la fecha y hora mostradas en la interfaz se mantengan actualizadas en tiempo real.
 tickingDateffect = effect((onCleanup) => {
    // hacemos in intervalo para actualizar la fecha cada segundo
  const  intervalo  = setInterval(() => {
    this.fechaActual.set(new Date());
  }, 1000);
  onCleanup(() => {
    // Cuando el componente se destruye, el intervalo se limpia automáticamente para evitar fugas de memoria.
    clearInterval(intervalo);
  })

 });

// Puedes agregar aquí métodos adicionales si necesitas mostrar ejemplos de otras fechas o formatos personalizados.
// Por ejemplo, podrías crear un método para retornar una fecha específica o para manipular la fecha actual.
// En este caso, no es necesario agregar más código porque la lógica principal ya está implementada en el signal y el efecto.

cambiarLocale(locale: AvailableLocales) : void {
  console.log('locale', {locale});      
  this.localeService.changeLocale(locale);
}





}
