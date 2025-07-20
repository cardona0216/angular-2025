import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interface';

@Pipe({
  name: 'colorName',
  standalone: true
})
export class ColorNamePipe implements PipeTransform {
  transform(value: Color): string {
  return ColorMap[value]
  }
}
