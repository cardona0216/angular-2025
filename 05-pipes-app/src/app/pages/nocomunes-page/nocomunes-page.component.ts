import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SectionComponent } from '../../shared/section/section.component';
import { CardComponent } from '../../components/card/card.component';
import {
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  SlicePipe,
  UpperCasePipe,
  KeyValuePipe,
  TitleCasePipe,
  AsyncPipe,
} from '@angular/common';
import { interval, map, tap } from 'rxjs';

const cliente1 = {
  nombre: 'Juan',
  genero: 'male',
  age: 38,
  address: 'medellin, colombia',
};

const cliente2 = {
  nombre: 'Maria',
  genero: 'female',
  age: 25,
  address: 'bogota, colombia',
};

@Component({
  selector: 'app-nocomunes-page',
  imports: [
    SectionComponent,
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe
  ],
  templateUrl: './nocomunes-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NocomunesPageComponent {
  title = signal('Pipes No tan comunes');
  titulo = signal('i18nPluralPipe');

  AsyncPipe = signal('AsyncPipe');
  //i18nSelectPipe
  cliente = signal(cliente1);

  invitacionmap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeCliente() {
    if (this.cliente() === cliente1) {
      this.cliente.set(cliente2);
      return;
    }
    this.cliente.set(cliente1);
  }

  //i18 pluralpipe
  //este funciona cuando hay varios datos, o diferentes numeros de elementos

  clientes = signal([
    'Juan',
    'Maria',
    'Pedro',
    'Ana',
    'Luis',
    'Sofia',
    'Carlos',
    'Lucia',
  ]);

  clientesMap = signal({
    '=0': 'No hay clientes esperando',
    '=1': 'Hay un cliente esperando',
    other: 'Hay # clientes esperando',
  });

  deleteCliente() {
    this.clientes.update((prev) => prev.slice(1));
  }

  // Ejemplo para KeyValuePipe
  personaKeyValue = signal({
    nombre: 'Carlos',
    edad: 30,
    ciudad: 'Madrid',
    profesion: 'Ingeniero',
  });

  usuario = {
  nombre: 'Laura',
  edad: 25,
  ciudad: 'Bogotá',
  profesion: 'Ingeniera'
};

//vamos a trabajar con el pipe AsyncPipe
  // AsyncPipe se utiliza para suscribirse a Observables o Promises en la plantilla
  // y actualizar automáticamente la vista cuando los datos cambian.
  // Es útil para manejar datos asíncronos sin necesidad de gestionar manualmente la suscription o cancelación, ya que Angular lo hace por ti.
  // Ideal para trabajar con datos asíncronos, como respuestas de servicios HTTP o streams reactivos, simplificando el código y

//vreamos una varia


  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('¡tenemos datos en la promesa!');
      console.log('¡promesa finalizada!');
      
    }, 2000);
  });

  //asyncpipe con observables
  //creamos un observable que emite un valor cada segundo
  // y lo usamos en la plantilla con AsyncPipe para mostrar el valor actualizado automáticamente.

  myObservableTimer = interval(2000).pipe(
    map((value) => value + 1), // Incrementa el valor emitido por el observable
    tap((value) => console.log('tap', value)),
  )

}
