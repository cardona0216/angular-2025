import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SectionComponent } from '../../shared/section/section.component';
import { CardComponent } from '../../components/card/card.component';
import { I18nPluralPipe, I18nSelectPipe, SlicePipe } from '@angular/common';

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
  imports: [SectionComponent, CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe],
  templateUrl: './nocomunes-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NocomunesPageComponent {
  title = signal('Pipes No tan comunes');
  titulo = signal('i18nPluralPipe')
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
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    
  ]);

  clientesMap = signal({
    '=0': 'No hay clientes esperando',
    '=1': 'Hay un cliente esperando',
    other: 'Hay # clientes esperando',
  });

  deleteCliente() {
    this.clientes.update((prev) => prev.slice(1));
  }


}
