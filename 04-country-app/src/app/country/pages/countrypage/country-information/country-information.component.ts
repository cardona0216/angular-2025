import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { rxResource } from '@angular/core/rxjs-interop';
import { CountryService } from '../../../services/country.service';
import { of } from 'rxjs';

@Component({
  selector: 'country-information',
  imports: [DecimalPipe],
  templateUrl: './country-information.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryInformationComponent { 
  //input para recibir la informacion
  informacionPais = input.required<Country>();

  currentYear = computed(() => {
    return new Date().getFullYear()
  })
}
