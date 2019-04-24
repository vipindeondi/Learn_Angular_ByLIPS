import { Component, OnInit, DoCheck, ViewChild, ViewChildren, ElementRef, QueryList, AfterViewInit, Self, OnDestroy } from '@angular/core';
import { IProduct } from './services/IProducts';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './services/product.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit, DoCheck, AfterViewInit, OnDestroy {

  productForm: FormGroup;

  Subscription: any;
  @ViewChild('productName') productDiv: ElementRef;
  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;
  @ViewChildren(ProductListComponent) prodListsComponent: QueryList<ProductListComponent>;


  productList: IProduct[] = [];
  constructor(@Self() private productService: ProductService, private fb: FormBuilder) {
    console.log('Constructor Is called');
  }


  ngOnInit() {

    this.getProducts();

    this.productForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      mfd: new FormControl('', [Validators.required]),
    })


    //   console.log('OnInit is called');
    //   // this.productList = this.productService.getProduct();

    //   this.productService.getproducts().subscribe((data) => console.log(data), //call the api function getproducts...
    //     (err) => console.log(err));

    //   this.Subscription = this.productService.getProduct().subscribe((data) => {
    //     this.productList = data;
    //   }, (err) => {
    //     console.log(err);
    //   });

    //   // this.productList = [
    //   //   { id: 1, name: 'Toothbrush', price: 50, mfd: new Date('10-Oct-2018') },
    //   //   { id: 2, name: 'Hair Oil', price: 150, mfd: new Date('20-Oct-2018') }
    //   // ];
    //   console.log(this.productListComponent);
    //   console.log(this.prodListComponent);
    //   this.productListComponent.productList = this.productList;

    //   console.log(this.productDiv);
    //   this.productDiv.nativeElement.innerText = 'Product Name';
  }
  getProducts() {

    // use this for product count and display in console if u want to display anywhere.
    this.productService.getProductAndCount().subscribe((data: any) => {  
      console.log(data);
    })
    //use this for display produclist how many there are , count then display.
    this.productService.getProductCount().subscribe((data: any) => {
      this.productListComponent.productCount = data.result;
    })

    this.productService.getproducts().subscribe((data: any) => {
      this.productListComponent.productList = data.result;

    }, (err) => console.log(err));
  }

  deleteProd(ProductId: string) {
    console.log(ProductId);
    this.productService.deleteProduct(ProductId).subscribe((data: any) => {
      if (data.status === 'success') {
        this.getProducts();
      }
    })
  }

  ngDoCheck(): void {
    console.log('Do check is called');
  }

  ngAfterViewInit(): void {
    console.log('After View Init is called');
    console.log(this.prodListsComponent);

    // this.prodListsComponent.forEach(
    //   (component) => {
    //     setTimeout(() => {
    //       component.productList = this.productList;
    //     }, 0);
    //   }
    // );
  }

  addProduct() {
    this.productService.addProduct(this.productForm.value).
      subscribe((data: any) => {
        if (data.status === 'Success') {
          this.getProducts();
          this.resetForm();
        }
      })
  }

  resetForm() {
    this.productForm.patchValue({
      name: '',
      price: '',
      mfd: ''
    });
    this.productForm.markAsPristine();
  }

  ngOnDestroy() {
    if (this.Subscription != null) {
      this.Subscription.unsubscribe();
    }

  }

}
