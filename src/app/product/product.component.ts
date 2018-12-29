import { Component, OnInit, DoCheck, ViewChild, ViewChildren, ElementRef, QueryList, AfterViewInit, Self, OnDestroy } from '@angular/core';
import { IProduct } from './services/IProducts';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit, DoCheck, AfterViewInit, OnDestroy {

  Subscription: any;
  @ViewChild('productName') productDiv: ElementRef;
  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;
  @ViewChildren(ProductListComponent) prodListComponent: QueryList<ProductListComponent>;
  productList: IProduct[] = [];
  constructor(@Self() private productService: ProductService) {
    console.log('Constructor Is called');
  }


  ngOnInit() {
    console.log('OnInit is called');
    // this.productList = this.productService.getProduct();

    this.Subscription = this.productService.getProduct().subscribe((data) => {
      this.productList = data;
    }, (err) => {
      console.log(err);
    });

    // this.productList = [
    //   { id: 1, name: 'Toothbrush', price: 50, mfd: new Date('10-Oct-2018') },
    //   { id: 2, name: 'Hair Oil', price: 150, mfd: new Date('20-Oct-2018') }
    // ];
    console.log(this.productListComponent);
    console.log(this.prodListComponent);
    this.productListComponent.productList = this.productList;

    console.log(this.productDiv);
    this.productDiv.nativeElement.innerText = 'Product Name';
  }

  ngDoCheck(): void {
    console.log('Do check is called');
  }

  ngAfterViewInit(): void {
    console.log('After View Init is called');
    console.log(this.prodListComponent);

    this.prodListComponent.forEach(
      (component) => {
        setTimeout(() => {
          component.productList = this.productList;
        }, 0);
      }
    );
  }
  ngOnDestroy() {
    if (this.Subscription != null) {
      this.Subscription.unsubscribe();
    }

  }

}
