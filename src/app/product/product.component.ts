import { Product } from './../core/product';

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CalculService } from '../services/calcul.service';
import { BackService } from '../services/back.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[]=[]
  search:string=''
  res!:number

  constructor( private pService:ProductService, private cService:CalculService, private back:BackService) { }

  ngOnInit(): void {
    //this.products=this.pService.products;
    this.back.getProducts().subscribe(
      (data)=>this.products=data,
      (errors)=>console.log(errors),
      ()=>console.log('completed')
      )

  }

  BuyProduct(id:number){
    for(let i=0;i<this.products.length;i++){
     if(this.products[i].id==id){
       this.products[i].quantity--
     }

    }
   }

   /*LikeProduct(like:number){
    for(let i=0;i<this.products.length;i++){
      if(this.products[i].like==like){
        this.products[i].like++
      }

     }
   }*/

   LikeProduct(id:number){
    this.products.map((x)=>x.id==id && x.like++)
   }

   SearchProduct(){
     this.products=this.products.filter((product)=>product.title.match(this.search))
   }

   functionVerification(){
    this.res=this.cService.getNumberOf(this.products,'quantity',0)


}


}

