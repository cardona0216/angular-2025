import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'colorStyle',
  standalone: true
})
export class ColorStylePipe implements PipeTransform {
  transform(value: Color): string {
  return Color[value]
  }
}
