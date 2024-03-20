import { Component, Input } from '@angular/core';
import { IProduct } from '../../interfaces/Product.interface';

@Component({
  selector: 'product-thumb',
  standalone: true,
  imports: [],
  templateUrl: './product-thumb.component.html',
  styleUrl: './product-thumb.component.css'
})
export class ProductThumbComponent {
  @Input({
    required: true,
    // transform: fn()
    // alias: 'dataProduct'
  })
  /**
   * @Input()
   * get value(): number {
   *  return this.internalValue;
   * }
   * 
   * set value(newValue: number) {
   *  this.internalValue = newValue;
   * }
   * private internalValue = 0;
   */
  product: IProduct = {
    name: '',
    price: 0,
    stars: 0,
    sales: 0,
    stock: 0,
    details: undefined,
    coupons: undefined,
    imageURL: '',
    limited_time_deal: undefined
  }
}
