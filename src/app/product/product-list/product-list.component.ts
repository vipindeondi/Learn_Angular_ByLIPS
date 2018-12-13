import { Component, OnInit ,Self} from '@angular/core';
import { IProduct } from '../services/IProducts';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  
})
export class ProductListComponent implements OnInit {

  productList : IProduct[] = [];
  
  ngOnInit() {
  }

}
