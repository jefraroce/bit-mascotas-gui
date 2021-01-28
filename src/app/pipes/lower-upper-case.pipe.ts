import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowerUpperCase'
})
export class LowerUpperCasePipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): String {
    return value ? value.charAt(0).toLowerCase() + value.slice(1).toUpperCase() : '';
  }

}
