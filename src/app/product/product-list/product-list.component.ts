import { Component, OnInit, Output, Self, EventEmitter } from '@angular/core';
import { IProduct } from '../services/IProducts';
import { ProductService } from '../services/product.service';
import { trigger, state, animate, style, transition, sequence } from '@angular/animations';

export const rowsAnimation =
  trigger('rowsAnimation', [
    transition('void => *', [
      style({ height: '*', opacity: '0', transform: 'translateX(-550px)', 'box-shadow': 'none' }),
      sequence([
        animate(".35s ease", style({ height: '*', opacity: '.2', transform: 'translateX(0)', 'box-shadow': 'none' })),
        animate(".35s ease", style({ height: '*', opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]);

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations : [rowsAnimation]

})
export class ProductListComponent implements OnInit {
  productCount = 0;
  productList: IProduct[] = [];
  @Output() deleteProduct = new EventEmitter<string>();

  ngOnInit() {
  }

  delete(productId) {
    this.deleteProduct.emit(productId);
  }

}
