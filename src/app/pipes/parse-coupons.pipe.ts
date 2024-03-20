import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseCoupons',
  standalone: true
})
export class ParseCouponsPipe implements PipeTransform {

  transform(coupons: { name: string, discount: number }[]): string {
    let totalDiscount = 0

    coupons.forEach(coupon => {
      totalDiscount += coupon.discount
    })

    return totalDiscount.toFixed(2)
  }

}
