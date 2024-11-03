import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rg',
  standalone: true,
})
export class RgPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    return value.replace(/^(\d{1,2})(\d{3})(\d{3})(\d{1})$/, '$1.$2.$3-$4');
  }
}