import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../core/product';

@Injectable({
  providedIn: 'root'
})
export class BackService {
  productUrl:string=environment.lien+"products"

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get<Product[]>(this.productUrl)
  }
  addProduts(p:Product){
    return this.http.post(this.productUrl,p)

  }
  deleteProducts(id:number){
    return this.http.delete(this.productUrl+"/"+id)

  }
  updateProduts(p:Product){
    return this.http.put(this.productUrl+"/"+p.id,p)

  }
}
