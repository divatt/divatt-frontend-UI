import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../classes/product';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  
  public products : Product[] = [];	

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  	this.productsService.getProducts().subscribe(product => this.products = product);
  }

}
