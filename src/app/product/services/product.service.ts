import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { IProduct } from './IProducts';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class ProductService {
  productList: IProduct[];  // productList is a varriabe. which is using for (intrface)IProduct[] array
  constructor(private http: HttpClient) { }

  getproducts() {
    return this.http.get<IProduct>('/api/v1/product',
      { headers: this.getHeader() });
  }


  // getProduct() {
  //   this.productList = [
  //     { id: 1, name: 'Toothbrush', price: 50, mfd: new Date('10-Oct-2018') },
  //     { id: 2, name: 'Hair Oil', price: 150, mfd: new Date('20-Oct-2018') },
  //     { id: 3, name: 'Food Oil', price: 140, mfd: new Date('20-Dec-2018') }
  //   ];

  addProduct(product: IProduct) {
    return this.http.post('/api/v1/product', product,
      { headers: this.getHeader() })
  }


  getHeader() {
    const header = new HttpHeaders().set("access-token",
      sessionStorage.getItem('userToken'));
    return header;

  }
  getProductDetails(id: string) {
    return this.http.get('/api/va/product/' + id,
      { headers: this.getHeader() })
  }

  deleteProduct(productId:string){
    return this.http.delete('/api/v1/product/' + productId);
  }

  getProductCount(){
    return this.http.get('/api/v1/product/getProductCount');
  }

  getProductAndCount(){
    return this.http.get('/api/v1/product/getProductandCount');
  }


  // return this.productList;
  //   return of(this.productList);
  // }


}
