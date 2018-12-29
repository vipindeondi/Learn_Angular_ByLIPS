import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { IProduct } from './IProducts';

@Injectable()
export class ProductService {
productList: IProduct[];  // productList is a varriabe. which is using for (intrface)IProduct[] array
  constructor() { }

  getProduct() {
    this.productList = [
      { id: 1, name: 'Toothbrush', price: 50, mfd: new Date('10-Oct-2018') },
      { id: 2, name: 'Hair Oil', price: 150, mfd: new Date('20-Oct-2018') },
      { id: 3, name: 'Food Oil', price: 140, mfd: new Date('20-Dec-2018') }
    ];

   // return this.productList;
   return of(this.productList);
  }


}
