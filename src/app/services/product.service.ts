import { Injectable } from '@angular/core';
import { Product } from '../core/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[]=[
      {id: 1, title: "T-shirt 1", price: 18, quantity: 0, picture:"https://static.bershka.net/4/photos2/2022/I/0/2/p/2766/777/800//01/2766777800_2_4_3.jpg?t=1660741431395",like:0},
      {id: 2, title: "T-shirt 2", price: 21, quantity: 10, picture:"https://celio.tn/media/catalog/product/t/h/the-simpsons-t-shirt-blanc-blanc-1115716-2-product_1.jpg",like:0},
      {id: 3, title: "T-shirt 3", price: 16, quantity: 8, picture: "https://celio.tn/media/catalog/product/t/h/the-simpsons-t-shirt-blanc-blanc-1115716-2-product_1.jpg",like:0},
  ]

  constructor() { }
  addProduct(p:Product){
    console.log(p)
    this.products.push(p);
  }

  getById(id:number){
    return this.products.filter((p)=>p.id==id)[0];
  }
}
