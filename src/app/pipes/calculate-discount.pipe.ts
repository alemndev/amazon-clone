import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateDiscount',
  standalone: true
})
export class CalculateDiscountPipe implements PipeTransform {

  transform(price: number, discount?: number): string {
    if (!discount) return price.toFixed(2);

    return (price - (discount / 100) * price).toFixed(2)
  }

}
