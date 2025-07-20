import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'canFlypipe'
})

export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Sí puede volar' : 'No puede volar';
  }
}