import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs';

import {ProductsService} from '../../../core/services/products/products.service';
import {Product} from '../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private producService: ProductsService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id)
    });
  }

  fetchProduct(id: string){
    this.producService.getProduct(id).subscribe(product => {
      this.product = product;
    });
  }

  createProduct(){
    const newProduct : Product = {
      id : '1234',
      title : 'mi prueba de creacion AH',
      image: 'assets/sticker.jpg',
      price: 3000,
      description: 'nuevo producto de alguien que esta aprendiendo angular en platzi'
    };
    this.producService.createProduct(newProduct).subscribe(product => {
      console.log(product);
    });
  }

  updateProduct(){
    const updateProduct: Partial<Product> = {
      image: 'assets/images/stickers1.png',
      price: 1234,
    };
    this.producService.updateProduct('1234',updateProduct).subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct(){
    this.producService.deleteProduct('1234').subscribe(res => {
      console.log(res);
    });
  }

}
