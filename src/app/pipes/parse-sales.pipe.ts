import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseSales',
  standalone: true
})
export class ParseSalesPipe implements PipeTransform {

  transform(sales: number): number {
    return Math.round(sales / 10) * 10
  }
}
