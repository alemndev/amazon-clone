import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/Product.interface';
import { ProductThumbComponent } from '../product-thumb/product-thumb.component';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [ProductThumbComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {
  products: IProduct[] = [
    {
      name: 'ASUS ROG Strix G15 (2022) Gaming Laptop, 15” 16:10 FHD 144Hz, GeForce RTX 3050, AMD Ryzen™ 7 6800H/HS, 16GB DDR5, 512GB PCIe SSD, Wi-Fi 6E, Windows 11, G513RC-ES73, Eclipse Gray',
      price: 799,
      stars: 4.5,
      sales: 347,
      stock: 30,
      limited_time_deal: {
        active: true,
        discount: 20
      },
      imageURL: 'https://m.media-amazon.com/images/I/71OyrTkxpGL._AC_SX450_.jpg'
    },
    {
      name: '16.1“ Laptop, AMD Ryzen 7 5700U(8C/16T, Beats i7-1265U) Gaming Laptop Computer 16GB DDR4 512GB NVMe SSD, Radeon RX Vega 8 Graphics, BT5.2, USB_C, 53Wh Battery, WiFi 6, Backlit KB',
      price: 1599,
      stars: 4,
      sales: 0,
      stock: 3,
      coupons: [
        {
          name: 'Tech coupon',
          discount: 790
        }
      ],
      imageURL: 'https://m.media-amazon.com/images/I/7127rNkukCL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    }
  ]
}
