import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {
  transform (value: number): number {
    return 5 * Math.round(value / 5);
  }
}
