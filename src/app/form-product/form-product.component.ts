import { NavbarComponent } from './../navbar/navbar.component';
import { ProductService } from './../services/product.service';
import { Product } from './../core/product';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  product: Product= new Product();

  constructor( private x:ProductService, private r:Router) { }

  ngOnInit(): void {
  }
  Submit(){

    this.product.like=0;
    this.x.addProduct(this.product)
    this.r.navigateByUrl('/product')

  }

}
