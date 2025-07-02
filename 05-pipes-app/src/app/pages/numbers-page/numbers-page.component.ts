import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SectionComponent } from '../../shared/section/section.component';

@Component({
  selector: 'app-numbers-page',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe,SectionComponent ],
  templateUrl: './numbers-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NumbersPageComponent { 

  title = signal('Pipes numéricos')
  title2 = 'Pipes numéricos'


  //nos creamos dos variables para hacer el ejemplo de estos  pipes

  totalventa = signal(23456723.4567)
  porcentajeVenta = signal(0.4567)
}
